---
title: "ABENSUBMIT_SELSCREEN_ABEXA"
description: |
  ABENSUBMIT_SELSCREEN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSUBMIT_SELSCREEN_ABEXA.htm"
abapFile: "ABENSUBMIT_SELSCREEN_ABEXA.html"
keywords: ["select", "if", "method", "class", "data", "ABENSUBMIT", "SELSCREEN", "ABEXA"]
---

The example demonstrates the filling of the standard selection screen when a program is called.

When the program is executed, a query appears and, depending on the selection made, the standard selection screen of the called program is filled either using a table of the type `RSPARAMS` or using multiple `WITH` additions.

In both calls of `demo_program_submit_rep`, values that lead to two-line selection tables `selecto` are passed. The second line is displayed in the dialog box *Multiple Selection* for `selecto`. Without the addition `VIA SELECTION-SCREEN` of the statement `SUBMIT`, `paramet` and `selecto` in `demo_program_submit_rep` would be filled in exactly the same way but not displayed.

REPORT demo\_program\_submit\_sel\_screen.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 1100.\\nPARAMETERS: rsparams RADIOBUTTON GROUP grp1,\\n withexpr RADIOBUTTON GROUP grp1.\\nSELECTION-SCREEN END OF SCREEN 1100.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n\\n DATA: seltab TYPE RANGE OF i,\\n rspar TYPE TABLE OF rsparams.\\n\\n CALL SELECTION-SCREEN 1100 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n RETURN.\\n ENDIF.\\n IF rsparams = 'X'.\\n rspar = VALUE #(\\n ( selname = 'SELECTO'\\n kind = 'S'\\n sign = 'E'\\n option = 'BT'\\n low = 14\\n high = 17 )\\n ( selname = 'PARAMET'\\n kind = 'P'\\n low = 'RSPARAMS' )\\n ( selname = 'SELECTO'\\n kind = 'S'\\n sign = 'I'\\n option = 'GT'\\n low = 10 ) ).\\n SUBMIT demo\_program\_submit\_rep\\n VIA SELECTION-SCREEN\\n WITH SELECTION-TABLE rspar\\n AND RETURN.\\n ELSEIF withexpr = 'X'.\\n seltab = VALUE #(\\n ( sign = 'I'\\n option = 'BT'\\n low = 1\\n high = 5 ) ).\\n SUBMIT demo\_program\_submit\_rep\\n VIA SELECTION-SCREEN\\n WITH paramet EQ 'WITH EXPR'\\n WITH selecto IN seltab\\n WITH selecto NE 3\\n AND RETURN.\\n ENDIF.\\n\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_submit\_report.html abapsubmit.html abapsubmit\_interface.html