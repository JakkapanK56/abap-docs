---
title: "ABENTABLE_CONTROL2_ABEXA"
description: |
  ABENTABLE_CONTROL2_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_CONTROL2_ABEXA.htm"
abapFile: "ABENTABLE_CONTROL2_ABEXA.html"
keywords: ["select", "delete", "loop", "do", "if", "case", "data", "internal-table", "ABENTABLE", "CONTROL2", "ABEXA"]
---

This example demonstrates sorting by columns and how lines are deleted in table controls.

The resizable table control `flights` is defined. The fields of the table control have been copied from the `DEMO_CONN` structure in the dictionary. The first two columns are lead columns. The corresponding fields are output fields. A title bar, columns headers, and a selection column are created. The selection column is assigned to the component `MARK`, of the type `CHAR`, length 1, from the structure `DEMO_CONN`. One column and multiple lines can be selected.

In the flow logic of dynpro 100, one loop is executed at PBO time and another loop is executed at PAI time using the table control `flights` and the internal table `itab` of the ABAP program at the same time. During the PBO loop, a module is called to fill the table control from table `itab` of the ABAP program. However, during the PAI loop, a module is called to modify table `itab`.

At PBO the component `lines` of control structure `flights` is filled explicitly with the current number of lines of the internal table `itab` before the PBO loop to install the scroll bar of the table control.

During the PAI loop, the lines of the internal table whose line index corresponds to the current line of the table control are overwritten with the content of the work area `demo_conn`. User input is passed from the input fields of the control to the internal table. A flag is set in the column `MARK` of the internal table indicating whether the table control line is selected or not.

After the PAI loop, user input is processed in the module `user_command_0100`. The GUI status `SCREEN_100` enables the corresponding function codes.

When the program is called not all fields of the table control are ready for input. The static specifications of the table control in the Screen Painter are modified before `CALL SCREEN` in the program. The system uses the table `cols` in control structure `flights`. All columns with a column position greater than two are set to not ready for input using a loop across the table `flights-cols`. By selecting the function code `TOGGLE`, the input readiness of these fields can be switched on and off.

Using the function codes *SORT\_UP* and *SORT\_DOWN*, it is possible to sort the columns of the internal table `itab` in either ascending or descending order. The static settings of the table control allow only a single column to be selected. The selected column is taken from the internal table `flights-cols`. The name of the sort criterion in the `SORT` statement is determined dynamically from the component `cols-screen-name`. The prefix `demo_conn` must be cut off by specifying an offset. After the sort, the selection is canceled by assigning a blank character to the component `selected` in the table `flights-cols`.

Using the function code *DELETE*, it is possible to delete selected lines from the internal table `itab`. First the system checks in `flights-cols` whether the fields of the table control are ready for input. Then all selected lines are deleted in a loop using the internal table `itab`. Since the table control is read again from the internal table `itab` in the PBO loop, the lines on the screen are deleted.

REPORT demo\_dynpro\_tabcont\_loop\_at.\\n\\nCONTROLS flights TYPE TABLEVIEW USING SCREEN 100.\\nDATA: cols LIKE LINE OF flights-cols,\\n lines TYPE i.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nDATA: itab TYPE TABLE OF demo\_conn.\\nTABLES demo\_conn.\\n\\nSELECT \*\\n FROM spfli\\n INTO CORRESPONDING FIELDS OF TABLE @itab\\n ##TOO\_MANY\_ITAB\_FIELDS.\\n\\nLOOP AT flights-cols INTO cols WHERE index GT 2.\\n cols-screen-input = '0'.\\n MODIFY flights-cols FROM cols INDEX sy-tabix.\\nENDLOOP.\\n\\nCALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\n DESCRIBE TABLE itab LINES lines.\\n flights-lines = lines.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE read\_table\_control INPUT.\\n MODIFY itab FROM demo\_conn INDEX flights-current\_line.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'TOGGLE'.\\n LOOP AT flights-cols INTO cols WHERE index GT 2.\\n IF cols-screen-input = '0'.\\n cols-screen-input = '1'.\\n ELSEIF cols-screen-input = '1'.\\n cols-screen-input = '0'.\\n ENDIF.\\n MODIFY flights-cols FROM cols INDEX sy-tabix.\\n ENDLOOP.\\n WHEN 'SORT\_UP'.\\n READ TABLE flights-cols INTO cols WITH KEY selected = 'X'.\\n IF sy-subrc = 0.\\n SORT itab STABLE BY (cols-screen-name+10) ASCENDING.\\n cols-selected = ' '.\\n MODIFY flights-cols FROM cols INDEX sy-tabix.\\n ENDIF.\\n WHEN 'SORT\_DOWN'.\\n READ TABLE flights-cols INTO cols WITH KEY selected = 'X'.\\n IF sy-subrc = 0.\\n SORT itab STABLE BY (cols-screen-name+10) DESCENDING.\\n cols-selected = ' '.\\n MODIFY flights-cols FROM cols INDEX sy-tabix.\\n ENDIF.\\n WHEN 'DELETE'.\\n READ TABLE flights-cols INTO cols WITH KEY screen-input = '1'.\\n IF sy-subrc = 0.\\n LOOP AT itab INTO demo\_conn WHERE mark = 'X'.\\n DELETE itab.\\n ENDLOOP.\\n ENDIF.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html