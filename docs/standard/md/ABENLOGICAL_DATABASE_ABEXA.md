---
title: "ABENLOGICAL_DATABASE_ABEXA"
description: |
  ABENLOGICAL_DATABASE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGICAL_DATABASE_ABEXA.htm"
abapFile: "ABENLOGICAL_DATABASE_ABEXA.html"
keywords: ["select", "loop", "if", "case", "method", "class", "data", "internal-table", "ABENLOGICAL", "DATABASE", "ABEXA"]
---

This example demonstrates calling a logical database using the function module `LDB_PROCESS`.

The program reads data using the logical database `F1S`. First a program-specific selection screen is defined. The data object `wa_spfli` is only required here. Next, suitable variables for the interface are declared.

The internal table `callback` is filled in such a way that, for the two nodes `SPFLI` and `SFLIGHT`, different callback routines in the calling program are called. For the node `SPFLI`, the corresponding routine for `GET` and `GET LATE` is only to be called for `GET` in the case of `SFLIGHT`.

The internal table `seltab` is filled with values from the selection table `s_carr` of the standalone selection screen 1100 for the selections of node `SPFLI`.

The function module `LDB_PROCESS` is called with these parameters.

The subroutines `callback_spfli` and `callback_sflight` are used as callback routines. Since the interface parameter `wa` is completely typed, the individual components of the work area can be accessed. In `callback_spfli`, the events `GET` and `GET LATE` are handled differently.

REPORT demo\_logical\_database.\\n\\nDATA wa\_spfli TYPE spfli.\\nSELECTION-SCREEN BEGIN OF SCREEN 1100.\\nSELECT-OPTIONS s\_carr FOR wa\_spfli-carrid.\\nSELECTION-SCREEN END OF SCREEN 1100.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n\\n DATA callback TYPE TABLE OF ldbcb.\\n\\n DATA: seltab TYPE TABLE OF rsparams,\\n seltab\_wa LIKE LINE OF seltab,\\n scarr\_wa LIKE LINE OF s\_carr.\\n\\n CALL SELECTION-SCREEN 1100 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n RETURN.\\n ENDIF.\\n\\n callback = VALUE #( ( ldbnode = 'SPFLI'\\n get = 'X'\\n get\_late = 'X'\\n cb\_prog = sy-repid\\n cb\_form = 'CALLBACK\_SPFLI' )\\n ( ldbnode = 'SFLIGHT'\\n get = 'X'\\n cb\_prog = sy-repid\\n cb\_form = 'CALLBACK\_SFLIGHT' ) ).\\n\\n seltab\_wa-kind = 'S'.\\n seltab\_wa-selname = 'CARRID'.\\n LOOP AT s\_carr INTO scarr\_wa.\\n MOVE-CORRESPONDING scarr\_wa TO seltab\_wa.\\n APPEND seltab\_wa TO seltab.\\n ENDLOOP.\\n\\n CALL FUNCTION 'LDB\_PROCESS'\\n EXPORTING\\n ldbname = 'F1S'\\n variant = ' '\\n TABLES\\n callback = callback\\n selections = seltab\\n EXCEPTIONS\\n OTHERS = 4.\\n\\n IF sy-subrc <> 0.\\n WRITE: 'Exception with SY-SUBRC', sy-subrc.\\n ENDIF.\\n\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n\\nFORM callback\_spfli USING name TYPE ldbn-ldbnode\\n wa TYPE spfli\\n evt TYPE c\\n check TYPE c.\\n CASE evt.\\n WHEN 'G'.\\n WRITE: / wa-carrid, wa-connid, wa-cityfrom, wa-cityto.\\n ULINE.\\n WHEN 'L'.\\n ULINE.\\n ENDCASE.\\nENDFORM.\\n\\nFORM callback\_sflight USING name TYPE ldbn-ldbnode\\n wa TYPE sflight\\n evt TYPE c\\n check TYPE c.\\n WRITE: / wa-fldate, wa-seatsocc, wa-seatsmax.\\nENDFORM.\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_examples.html