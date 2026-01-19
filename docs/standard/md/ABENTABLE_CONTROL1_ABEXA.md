---
title: "ABENTABLE_CONTROL1_ABEXA"
description: |
  ABENTABLE_CONTROL1_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_CONTROL1_ABEXA.htm"
abapFile: "ABENTABLE_CONTROL1_ABEXA.html"
keywords: ["select", "loop", "if", "case", "try", "catch", "data", "internal-table", "ABENTABLE", "CONTROL1", "ABEXA"]
---

This example demonstrates program-driven scrolling in table controls.

The resizable table control `flights` is defined. The fields of the table control have been copied from the `DEMO_CONN` structure in the dictionary. The first two columns are lead columns. The corresponding fields are output fields. A title bar, columns headers, and a selection column are created. The selection column is assigned to the component `MARK`, of the type `CHAR`, length 1, from the structure `DEMO_CONN`. One column and multiple lines can be selected.

The flow logic of dynpro 100 contains one loop executed at PBO time and another loop executed at PAI time using the table control `flights`. During the PBO loop, a module is called to fill the table control from table `itab` of the ABAP program. During the PAI loop, a module is called to modify table `itab`.

Before the PBO loop, in the module `status_0100` the current number of lines of the internal table `itab` is placed in component `lines` of control structure `flights`. This helps the system to correctly install the scroll bar of the table control.

During the PBO loop, in the module `fill_table_control` the work area `demo_conn` is filled with values from the internal table, where the line index corresponds to the current line of the table control.

During the PAI loop, in the module `read_table_control` the current number of the loop `sy-loopc` in the table control is placed in an auxiliary variable. The number depends on the size of the screen. The lines of the internal table whose line index matches the current line of the table control are overwritten by the content of the work area `demo_conn`. User input is passed from the input fields of the control to the internal table. A flag is set in the column `MARK` of the internal table indicating whether the table control line is selected or not.

After the PAI loop, user input is processed in the module `user_command_0100`. The GUI status `SCREEN_100` enables the corresponding function codes. Both line-by-line and page-by-page scrolling is possible, and it is also possible to jump to the first or last page. Scrolling is enabled by setting the component `top_line` of the control structure `flights`. As an increment, page-by-page scrolling uses the helper variable filled in the PAI loop using `sy-loopc`.

REPORT demo\_dynpro\_tabcont\_loop.\\n\\nCONTROLS flights TYPE TABLEVIEW USING SCREEN 100.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nDATA: itab TYPE TABLE OF demo\_conn,\\n fill TYPE i.\\nTABLES demo\_conn.\\n\\nDATA: lines TYPE i,\\n limit TYPE i.\\n\\nSELECT \*\\n FROM spfli\\n ORDER BY carrid, connid\\n INTO CORRESPONDING FIELDS OF TABLE @itab\\n ##too\_many\_itab\_fields.\\n\\nCALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'SCREEN\_100'.\\n DESCRIBE TABLE itab LINES fill.\\n flights-lines = fill.\\nENDMODULE.\\n\\nMODULE fill\_table\_control OUTPUT.\\n TRY.\\n demo\_conn = itab\[ flights-current\_line \].\\n CATCH cx\_sy\_itab\_line\_not\_found.\\n RETURN.\\n ENDTRY.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n\\nMODULE read\_table\_control INPUT.\\n lines = sy-loopc.\\n MODIFY itab FROM demo\_conn INDEX flights-current\_line.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'NEXT\_LINE'.\\n flights-top\_line += 1.\\n limit = fill - lines + 1.\\n IF flights-top\_line > limit.\\n flights-top\_line = limit.\\n ENDIF.\\n WHEN 'PREV\_LINE'.\\n flights-top\_line = flights-top\_line - 1.\\n IF flights-top\_line < 0.\\n flights-top\_line = 0.\\n ENDIF.\\n WHEN 'NEXT\_PAGE'.\\n flights-top\_line += lines.\\n limit = fill - lines + 1.\\n IF flights-top\_line > limit.\\n flights-top\_line = limit.\\n ENDIF.\\n WHEN 'PREV\_PAGE'.\\n flights-top\_line = flights-top\_line - lines.\\n IF flights-top\_line < 0.\\n flights-top\_line = 0.\\n ENDIF.\\n WHEN 'LAST\_PAGE'.\\n flights-top\_line = fill - lines + 1.\\n WHEN 'FIRST\_PAGE'.\\n flights-top\_line = 0.\\n ENDCASE.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html