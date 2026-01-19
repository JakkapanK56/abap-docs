---
title: "ABENPRINT_LIST_ABEXA"
description: |
  ABENPRINT_LIST_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPRINT_LIST_ABEXA.htm"
abapFile: "ABENPRINT_LIST_ABEXA.html"
keywords: ["select", "if", "try", "catch", "method", "class", "data", "ABENPRINT", "LIST", "ABEXA"]
---

The example demonstrates how to spool lists and how to stack spool list levels.

The program creates five lists. If the user chooses *Execute* on the selection screen, one screen list and four spool lists are created. If the user chooses *Execute + Print* on the selection screen, five spool lists are created.

In the event block `INITIALIZATION`, the spool parameters are placed in the structure `params` by calling function module `GET_PRINT_PARAMETERS`. By passing the initial value to parameter `IMMEDIATELY`, the spool requests are stored in the spool system, but not spooled immediately. Function module `SET_PRINT_PARAMETERS` is used to pre-fill the input fields of the spool dialog box of the selection screen.

The created spool requests, and the content of the spool lists can be displayed by choosing *System -> Own Spool Requests*.

The fifth list is created in the static method `print` of class `print_demo`. The first attempt to create a new spool list with the title *Parameter 4* raises the exception `CX_SY_NESTED_PRINT_ON` because the spool list created with `NEW-PAGE PRINT ON` and carrying the title *Parameter 3* is still open. When the exception is handled, a new spool list is opened using the addition `NEW SECTION`. Since the spool parameters used are different, the opened spool list is closed and a new spool list is opened, no longer raising an exception. If identical spool parameters are used, the output is appended to the existing spool list. Because the spool list opened using `NEW-PAGE PRINT ON` is closed already in the method, the statement `NEW-PAGE PRINT OFF` in the dialog module `status_0100` no longer has an effect.

-   Depending on the user action, the first list on the selection screen is either a two-page screen list (basic list) or a two-page spool list with the title *Parameter 1*. The first page contains a line *AAAA*. The second page contains a line *HHHH*.
-   The second list is a one-page spool list created explicitly using `NEW-PAGE PRINT ON` and carries the title *Parameter 2*. It contains the lines *BBBB* and *GGGG*. Its spool list level is stacked on the screen list or on the spool list level with the title *Parameter 1*.
-   The third list is a two-page spool list created implicitly by calling a dynpro sequence using `CALL SCREEN` and carries the title *Parameter 2*. The first page contains a line *CCCC*. The second page contains a line *FFFF*. Its spool list level is stacked on the spool list level of the previous spool list with the title *Parameter 2*, from which the spool parameters are also taken.
-   The fourth list is a one-page spool list created explicitly using `NEW-PAGE PRINT ON` and carries the title *Parameter 3*. It contains the line *DDDD*. Its spool list level is stacked on the spool list level of the previous spool list with the title *Parameter 2*.
-   The fifth list is a one-page spool list created explicitly using `NEW-PAGE PRINT ON` and carries the title *Parameter 4*. It contains the line *EEEE*. Its spool list level is stacked on the spool list level of the previous spool list with the title *Parameter 2*.

REPORT demo\_list\_print LINE-COUNT 10 LINE-SIZE 50.\\n\\nDATA params LIKE pri\_params.\\nDATA valid TYPE c LENGTH 1.\\n\\nPARAMETERS para TYPE c LENGTH 1.\\n\\nCLASS print\_demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS print IMPORTING text TYPE string.\\nENDCLASS.\\n\\nINITIALIZATION.\\n\\n CALL FUNCTION 'GET\_PRINT\_PARAMETERS'\\n EXPORTING\\n destination = 'LOCL'\\n immediately = ' '\\n no\_dialog = 'X'\\n line\_count = 10\\n line\_size = 50\\n IMPORTING\\n out\_parameters = params\\n valid = valid\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n LEAVE PROGRAM.\\n ENDIF..\\n\\n IF valid <> 'X'.\\n LEAVE PROGRAM.\\n ENDIF.\\n\\n params-prtxt = 'Parameter 1'.\\n CALL FUNCTION 'SET\_PRINT\_PARAMETERS'\\n EXPORTING\\n in\_parameters = params.\\n\\nSTART-OF-SELECTION.\\n\\n WRITE / 'AAAA'.\\n\\n params-prtxt = 'Parameter 2'.\\n NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.\\n\\n WRITE / 'BBBB'.\\n\\n CALL SCREEN 100.\\n\\n WRITE / 'GGGG'.\\n\\n NEW-PAGE PRINT OFF.\\n\\n WRITE / 'HHHH'.\\n\\nMODULE status\_0100 OUTPUT.\\n\\n SUPPRESS DIALOG.\\n LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.\\n\\n WRITE / 'CCCC'.\\n\\n params-prtxt = 'Parameter 3'.\\n NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.\\n WRITE / 'DDDD'.\\n print\_demo=>print( 'EEEE' ).\\n NEW-PAGE PRINT OFF.\\n\\n WRITE / 'FFFF'.\\n\\nENDMODULE.\\n\\nCLASS print\_demo IMPLEMENTATION.\\n METHOD print.\\n\\n params-prtxt = 'Parameter 4'.\\n TRY.\\n NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.\\n CATCH cx\_sy\_nested\_print\_on.\\n NEW-PAGE PRINT ON PARAMETERS params NO DIALOG NEW-SECTION.\\n ENDTRY.\\n WRITE / text.\\n NEW-PAGE PRINT OFF.\\n\\n ENDMETHOD.\\nENDCLASS.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html