---
title: "ABENDYNPRO_DROP2_ABEXA"
description: |
  ABENDYNPRO_DROP2_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYNPRO_DROP2_ABEXA.htm"
abapFile: "ABENDYNPRO_DROP2_ABEXA.html"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "ABENDYNPRO", "DROP2", "ABEXA"]
---

This example demonstrates a non-recommended way to enable a dropdown list box.

The static next dynpro number of dynpro 100 is 200. The input field is assigned the component `CARRIER2` of the structure `DEMOF4HELP` from the ABAP Dictionary. Its *dropdown* attribute is L, the output length is 15, the *value list* attribute is empty, and it is assigned the function code `CARRIER`. The function code of the pushbutton is *CANCEL* with the function type *E*. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE user\_command\_100.

The static next dynpro number of dynpro 200 is 100. The input field is assigned the component `CONNID` of the structure `DEMOF4HELP` from the ABAP Dictionary. Its *dropdown* attribute is L, the output length is 30, the *value list* attribute is *A*, and it is assigned the `SELECTED` function code. The function code of the pushbutton is *CANCEL* with the function type *E*. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT. \\n  MODULE init\_listbox. \\nPROCESS AFTER INPUT. \\n  MODULE cancel AT EXIT-COMMAND. \\n  MODULE user\_command\_200.

The user is not allowed to enter values in the screen fields. When selecting the input field on dynpro 100, the user sees a value list in the list box derived from the input help of the `DEMOF4HELP-CARRIER2` field. In this case, this is the search help `H_SCARR` assigned to the `SCARR` check table in the ABAP Dictionary. The value list contains the names of the airlines. When the user selects an entry, the dynpro field is filled with the ID of the airline, and the event PAI is raised. The module `user_command_100` checks the OK field and calls dynpro 200.

At the PBO event of dynpro 200, an internal table called `list` is filled with values from the database table `SPFLI`. The `key` component is filled with the flight connection numbers, and other relevant information is stored in the `text` field. The `list` table is passed to the `VRM_SET_VALUES` function module. When the user selects the input field on dynpro 200, the `text` column of the internal table is displayed in the list box. When the user selects an entry, the dynpro field is filled with the associated entry from the `key` column, and the event PAI is raised. The module `user_command_200` checks and processes the OK field.

REPORT demo\_dynpro\_dropdown\_listbox.\\n\\nDATA: name TYPE vrm\_id,\\n list TYPE vrm\_values,\\n value LIKE LINE OF list.\\n\\nDATA: wa\_spfli TYPE spfli,\\n ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nTABLES demof4help.\\n\\nname = 'DEMOF4HELP-CONNID'.\\n\\nCALL SCREEN 100.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE init\_listbox OUTPUT.\\n\\n CLEAR: demof4help-connid,\\n list.\\n\\n SELECT connid, cityfrom, cityto, deptime\\n FROM spfli\\n WHERE carrid = @demof4help-carrier2\\n INTO CORRESPONDING FIELDS OF @wa\_spfli.\\n\\n value-key = wa\_spfli-connid.\\n\\n WRITE wa\_spfli-deptime TO value-text USING EDIT MASK '\_\_:\_\_:\_\_'.\\n\\n value-text =\\n |\\{ value-text \\} \\{ wa\_spfli-cityfrom \\} \\{ wa\_spfli-cityto \\}|.\\n APPEND value TO list.\\n\\n ENDSELECT.\\n\\n IF sy-subrc <> 0.\\n MESSAGE 'No connections for that airline' TYPE 'I' DISPLAY LIKE 'E'.\\n LEAVE TO SCREEN 100.\\n ENDIF.\\n\\n CALL FUNCTION 'VRM\_SET\_VALUES'\\n EXPORTING\\n id = name\\n values = list\\n EXCEPTIONS\\n OTHERS = 4.\\n IF sy-subrc <> 0.\\n LEAVE PROGRAM.\\n ENDIF.\\n\\nENDMODULE.\\n\\nMODULE user\_command\_100.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n IF save\_ok = 'CARRIER' AND NOT demof4help-carrier2 IS INITIAL.\\n LEAVE TO SCREEN 200.\\n ELSE.\\n SET SCREEN 100.\\n ENDIF.\\nENDMODULE.\\n\\nMODULE user\_command\_200.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n IF save\_ok = 'SELECTED'.\\n MESSAGE i102(sabapdemos) WITH TEXT-001 demof4help-carrier2\\n demof4help-connid.\\n CLEAR demof4help.\\n ENDIF.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_processing\_screens.html abenabap\_dynpros\_help.html abeninput\_help\_abexas.html