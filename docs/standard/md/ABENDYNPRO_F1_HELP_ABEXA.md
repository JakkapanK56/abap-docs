---
title: "ABENDYNPRO_F1_HELP_ABEXA"
description: |
  ABENDYNPRO_F1_HELP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_F1_HELP_ABEXA.htm"
abapFile: "ABENDYNPRO_F1_HELP_ABEXA.html"
keywords: ["do", "if", "case", "class", "data", "ABENDYNPRO", "HELP", "ABEXA"]
---

This example demonstrates how a field help is implemented on dynpros.

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the fields `DEMOF1HELP-FIELD1`, `DEMOF1HELP-FIELD2`, `DEMOF1HELP-FIELD3`, and `DEMOF1HELP-FIELD4` from the ABAP Dictionary and the fields `field5` and `field6` from the ABAP program. The function code of the pushbutton is *CANCEL* with the function type *E*. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\nPROCESS ON HELP-REQUEST. \\n  FIELD demof1help-field4 MODULE f1\_help\_field4 WITH docu\_num. \\n  FIELD field5 MODULE f1\_help\_field5. \\n  FIELD field6 MODULE f1\_help\_field6.

The components `FIELD1` through `FIELD4` of the structure `DEMOF1HELP` refer to the data element `DEMOF1TYPE`. This data element is documented and two supplementary documentation objects with numbers 0100 and 0200 are created. The user sees the following field help:

-   If the user chooses F1 on the input field for `DEMOF1HELP-FIELD1`, the data element documentation of `DEMOF1TYPE` is displayed, since the field is not specified after `PROCESS ON HELP-REQUEST`.
-   If the user chooses F1 repeatedly for the input fields `DEMOF1HELP-FIELD2` and `DEMOF1HELP-FIELD3`, the data element documentation is displayed, along with the supplementary documentation for either 0100 or 0200. The necessary assignments are stored statically in the database table `THLPF`.
-   If the user chooses F1 repeatedly for the input field `DEMOF1HELP-FIELD4`, the data element documentation is displayed, along with the supplementary documentation for either 0100 or 0200. The variable `docu_num` is filled accordingly in the dialog module `f1_help_field2`.
-   If the user chooses F1 on the input field for `field5`, the data element documentation of `DEMOF1TYPE` is displayed since this is called in the dialog module `f1_help_field5` by the function module `HELP_OBJECT_SHOW_FOR_FIELD`.
-   If the user chooses F1 on the input field for `field6`, the SAPscript document `DEMO_FOR_F1_HELP` is displayed since this is called in the dialog module `f1_help_field6` by the function module `HELP_OBJECT_SHOW`.

REPORT demo\_dynpro\_f1\_help.\\n\\nDATA: text TYPE c LENGTH 30,\\n docu\_num TYPE c LENGTH 4,\\n int TYPE i,\\n links TYPE TABLE OF tline,\\n field5 TYPE c LENGTH 10,\\n field6 TYPE c LENGTH 10.\\n\\nTABLES demof1help.\\n\\ntext = TEXT-001.\\n\\nCALL SCREEN 100.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE f1\_help\_field4 INPUT.\\n int += 1.\\n CASE int.\\n WHEN 1.\\n docu\_num = '0100'.\\n WHEN 2.\\n docu\_num = '0200'.\\n int = 0.\\n ENDCASE.\\nENDMODULE.\\n\\nMODULE f1\_help\_field5 INPUT.\\n CALL FUNCTION 'HELP\_OBJECT\_SHOW\_FOR\_FIELD'\\n EXPORTING\\n doklangu = sy-langu\\n doktitle = TEXT-002\\n called\_for\_tab = 'DEMOF1HELP'\\n called\_for\_field = 'FIELD1'\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n LEAVE PROGRAM.\\n ENDIF..\\nENDMODULE.\\n\\nMODULE f1\_help\_field6 INPUT.\\n CALL FUNCTION 'HELP\_OBJECT\_SHOW'\\n EXPORTING\\n dokclass = 'TX'\\n doklangu = sy-langu\\n dokname = 'DEMO\_FOR\_F1\_HELP'\\n doktitle = TEXT-003\\n TABLES\\n links = links\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n LEAVE PROGRAM.\\n ENDIF.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html abeninput\_help\_abexas.html