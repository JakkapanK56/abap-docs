---
title: "ABENSTEPLOOP_ABEXA"
description: |
  ABENSTEPLOOP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTEPLOOP_ABEXA.htm"
abapFile: "ABENSTEPLOOP_ABEXA.html"
keywords: ["select", "loop", "do", "if", "case", "data", "types", "internal-table", "ABENSTEPLOOP", "ABEXA"]
---

This example demonstrates the obsolete direct use of step loops.

In the layout of dynpro 100, a variable step loop is initially defined with 10 repeating groups. The fields of the repeating groups are the components `col1` and `col2` of the structure `wa` of the ABAP program.

In the status `STATUS_100`, the function codes `FIRST_PAGE`, `PREV_PAGE`, `PREV_LINE`, `NEXT_LINE`, `NEXT_PAGE`, `LAST_PAGE`, and `NEXT` are set on pushbuttons of the application toolbar for dynpro 100.

The layout of dynpro 200 is the same as that of dynpro 100, except that the step loop is fixed here and not variable.

In the status `STATUS_200`, the function code `PREVIOUS` is set on a pushbutton of the application toolbar for dynpro 200.

When the program is executed, a step loop is displayed on dynpro 100, whose number of lines has been adjusted to fit the height of the screen but has no vertical scroll bars. On dynpro 200, a step loop is displayed which has a fixed size of 10 lines and this loop has a vertical scroll bar.

At the time of PBO, both step loops are filled from the internal table `itab`, where the loop for dynpro 100 is only executed through the step loop and for screen 200 it is parallel through the step loop and the internal table. The step loop on dynpro 200 is restricted to the rows 5 to 25 of the internal table. To fill the work area `wa` on dynpro 100, a PBO module is called. This is not necessary for dynpro 200.

At the time of PAI, a module is called in both dynpros within the loops. In this module, the system transfers possible user entries in the step loop lines to the corresponding lines of the internal table.

For dynpro 100, the scroll function for the step loop is programmed in the PAI module `user_command_100`. To do this, the number of rows of the step loop on the screen is buffered in the helper variable `step`, since `sy-loopc` is only filled within the loop. A scrolling function does not need to be programmed for dynpro 200, since it is automatically provided by the system in the form of the scroll bar.

The synchronization between the internal table and the step loop on dynpro 200 is handled by the variable `c`, which is used in the addition `CURSOR` of the statement `LOOP`. It is set before dynpro 200 is called, in correspondence with the display of the table on dynpro 100to start the step loops on both dynpros with the same table line. At the time of PAI of screen 200, `c` is read to redetermine the first table line after any scrolling with the scroll bar.

REPORT demo\_dynpro\_step\_loop.\\n\\nTYPES: BEGIN OF t\_itab,\\n col1 TYPE i,\\n col2 TYPE i,\\n END OF t\_itab.\\n\\nDATA: itab TYPE STANDARD TABLE OF t\_itab,\\n wa LIKE LINE OF itab,\\n fill TYPE i.\\n\\nDATA: idx TYPE i,\\n line TYPE i,\\n lines TYPE i,\\n limit TYPE i,\\n c TYPE i,\\n n1 TYPE i VALUE 5,\\n n2 TYPE i VALUE 25.\\n\\nDATA: ok\_code TYPE sy-ucomm,\\n save\_ok TYPE sy-ucomm.\\n\\nSTART-OF-SELECTION.\\n\\n itab = VALUE #( FOR j = 1 UNTIL j > 40\\n ( col1 = j col2 = j \*\* 2 ) ).\\n\\n fill = lines( itab ).\\n\\n CALL SCREEN 100.\\n\\nMODULE status\_0100 OUTPUT.\\n SET PF-STATUS 'STATUS\_100' EXCLUDING 'PREVIOUS'.\\nENDMODULE.\\n\\nMODULE status\_0200 OUTPUT.\\n SET PF-STATUS 'STATUS\_200' EXCLUDING 'NEXT'.\\nENDMODULE.\\n\\nMODULE transp\_itab\_out OUTPUT.\\n idx = sy-stepl + line.\\n wa = VALUE #( itab\[ idx \] OPTIONAL ).\\nENDMODULE.\\n\\nMODULE transp\_itab\_in INPUT.\\n lines = sy-loopc.\\n idx = sy-stepl + line.\\n MODIFY itab FROM wa INDEX idx.\\nENDMODULE.\\n\\nMODULE user\_command\_0100 INPUT.\\n save\_ok = ok\_code.\\n CLEAR ok\_code.\\n CASE save\_ok.\\n WHEN 'NEXT\_LINE'.\\n line = line + 1.\\n limit = fill - lines.\\n IF line > limit.\\n line = limit.\\n ENDIF.\\n WHEN 'PREV\_LINE'.\\n line = line - 1.\\n IF line < 0.\\n line = 0.\\n ENDIF.\\n WHEN 'NEXT\_PAGE'.\\n line = line + lines.\\n limit = fill - lines.\\n IF line > limit.\\n line = limit.\\n ENDIF.\\n WHEN 'PREV\_PAGE'.\\n line = line - lines.\\n IF line < 0.\\n line = 0.\\n ENDIF.\\n WHEN 'LAST\_PAGE'.\\n line = fill - lines.\\n WHEN 'FIRST\_PAGE'.\\n line = 0.\\n WHEN 'NEXT'.\\n c = line + 1.\\n LEAVE TO SCREEN 200.\\n ENDCASE.\\nENDMODULE.\\n\\nMODULE get\_first\_line INPUT.\\n line = c - 1.\\nENDMODULE.\\n\\nMODULE user\_command\_0200 INPUT.\\n save\_ok = ok\_code.\\n CASE save\_ok.\\n WHEN 'PREVIOUS'.\\n LEAVE TO SCREEN 100.\\n ENDCASE.\\nENDMODULE.\\n\\nMODULE cancel INPUT.\\n LEAVE PROGRAM.\\nENDMODULE.\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abendynpro\_obsolet.html abensteploop.html