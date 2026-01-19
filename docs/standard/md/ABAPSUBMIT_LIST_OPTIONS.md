---
title: "ABAPSUBMIT_LIST_OPTIONS"
description: |
  ABAPSUBMIT_LIST_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUBMIT_LIST_OPTIONS.htm"
abapFile: "ABAPSUBMIT_LIST_OPTIONS.html"
keywords: ["select", "insert", "do", "while", "if", "data", "internal-table", "ABAPSUBMIT", "LIST", "OPTIONS"]
---

[Short Reference](ABAPSUBMIT_SHORTREF.html)

`... [LINE-SIZE width]`\\ 
    `[LINE-COUNT page_lines]`\\ 
    `\{\ [EXPORTING LIST TO MEMORY]`\\ 
    ``|\ [TO SAP-SPOOL [`spool_options`](ABAPSUBMIT_PRINT_PARAMETERS.html)]\ \} ...``

[1. `... LINE-SIZE width`](#ABAP_ADDITION_1@3@)

[2. `... LINE-COUNT page_lines`](#ABAP_ADDITION_2@3@)

[3. `... EXPORTING LIST TO MEMORY`](#ABAP_ADDITION_3@3@)

[4. `... TO SAP-SPOOL spool_options`](#ABAP_ADDITION_4@3@)

These additions modify the basic list of the called program. While `LINE-SIZE` and `LINE-COUNT` affect the formatting, the other two additions determine the output type of the list.

`EXPORTING LIST TO MEMORY` saves the list to the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html) and `TO SAP-SPOOL` sends it to the SAP spool system as a spool list. If these additions are not specified, the basic list is preset as a screen list.

The additions only work the first time the called program is executed. If a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) is displayed in the called program, the runtime framework calls the program again after it ends and ignores the additions `list_options`. This applies in particular to the addition `TO SAP-SPOOL`, because the basic list is displayed as a screen list and not as a spool list when the program is called again. For this reason, it is not advisable to use the addition `VIA SELECTION-SCREEN` when using `list_options`.

These additions define the line width and page length of the basic list. They have the same effect as the additions of the same name in the program-initiating statement for the called program. If the called program has the same additions in the program-initiating statement, these overwrite the values specified for `SUBMIT`.

Program call in the executable example program `DEMO_PROGRAM_SUBMIT_LINE`.

[Program Calls, Modifying the Basic List](ABENSUBMIT_LIST_ABEXA.html)

This addition stores the basic list for the called program in the ABAP Memory. It can only be used together with the addition `AND RETURN`.

The list is stored in the ABAP Memory as an internal table of the line type `ABAPLIST`, `ABAPLIST` being a structured data type in the ABAP Dictionary.

The calling program can access the list stored, once the program has been called, using function modules belonging to the function pool `SLST`.

The addition can only work if the function key *Enter* is not linked to a function code in the GUI status last defined for the called program.

Once the program `report` has been called, the list stored there in the ABAP Memory is read using function modules and inserted in the current list.

If this addition is specified, a new [spool list level](ABENSPOOL_LIST_LEVEL_GLOSRY.html) is opened in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of the called program and the first output statement for the basic list of this program creates a new [spool request](ABENSPOOL_REQUEST_GLOSRY.html). All list output for the called program is passed page by page to the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html) as a [spool list](ABENSPOOL_LIST_GLOSRY.html). The additions [`spool_options`](ABAPSUBMIT_PRINT_PARAMETERS.html) are used to define the spool and archive parameters of the spool request.

Call of an executable program and creation of a spool request. By passing the name of the called program to the input parameter `REPORT` of the function module `GET_PRINT_PARAMETERS`, the information about the line width and page length of the spool list is taken from its program-initiating statement.

-   The function module `LIST_FROM_MEMORY` loads the list from the ABAP memory to an internal table of the line type `ABAPLIST`.
-   The function module `WRITE_LIST` inserts the content of an internal table of the line type `ABAPLIST` in the current list.
-   The function module `DISPLAY_LIST` displays the content of an internal table of the line type `ABAPLIST` in a separate list dynpro.
-   The function module `LIST_TO_ASCI` converts the content of an internal table of the line type `ABAPLIST` to ASCII representation.

-   It is not possible to switch from the spool list to the screen list in the called program. The statement [`NEW-PAGE PRINT OFF`](ABAPNEW-PAGE_PRINT.html) does not affect a spool list level created using `SUBMIT TO SAP-SPOOL`.
-   After using `TO SAP-SPOOL` the [spool number](ABENSPOOL_NUMBER_GLOSRY.html) of the created [spool request](ABENSPOOL_REQUEST_GLOSRY.html) is contained in a [SPA/GPA parameter](ABENSPA_GPA_PARAMETER_GLOSRY.html) named `SPI`.

SUBMIT (name) LINE-SIZE width LINE-COUNT length AND RETURN. DATA list\_tab TYPE TABLE OF abaplist. \\n\\ \\nSUBMIT report EXPORTING LIST TO MEMORY \\n AND RETURN. \\n\\ \\nCALL FUNCTION 'LIST\_FROM\_MEMORY' \\n TABLES \\n listobject = list\_tab \\n EXCEPTIONS \\n not\_found = 1 \\n OTHERS = 2. \\n\\ \\nIF sy-subrc = 0. \\n CALL FUNCTION 'WRITE\_LIST' \\n TABLES \\n listobject = list\_tab. \\nENDIF. DATA: print\_parameters TYPE pri\_params, \\n archi\_parameters TYPE arc\_params, \\n valid\_flag TYPE c LENGTH 1. \\n\\ \\nCALL FUNCTION 'GET\_PRINT\_PARAMETERS' \\n EXPORTING \\n report = 'SUBMITABLE' \\n archive\_mode = '3' \\n IMPORTING \\n out\_parameters = print\_parameters \\n out\_archive\_parameters = archi\_parameters \\n valid = valid\_flag \\n EXCEPTIONS \\n invalid\_print\_params = 2 \\n OTHERS = 4. \\n\\ \\nIF valid\_flag = 'X' AND sy-subrc = 0. \\n SUBMIT submitable TO SAP-SPOOL \\n SPOOL PARAMETERS print\_parameters \\n ARCHIVE PARAMETERS archi\_parameters \\n WITHOUT SPOOL DYNPRO. \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_submit\_report.html abapsubmit.html