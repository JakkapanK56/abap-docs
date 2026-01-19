---
title: "ABENLOG_EXP_IN_ABEXA"
description: |
  ABENLOG_EXP_IN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOG_EXP_IN_ABEXA.htm"
abapFile: "ABENLOG_EXP_IN_ABEXA.html"
keywords: ["select", "loop", "if", "data", "ABENLOG", "EXP", "ABEXA"]
---

This example demonstrates the evaluation of selection tables in a comparison expression.

The `SELECT` loop reads all lines from the database table `SPFLI` and arranges them in a list, depending on their relation to the condition specified on the selection screen.

REPORT demo\_logical\_expr\_seltab\_1 .\\n\\nDATA wa\_carrid TYPE spfli-carrid.\\n\\nSELECT-OPTIONS airline FOR wa\_carrid.\\n\\nWRITE: 'Inside', 'Outside'.\\nSKIP.\\n\\nSELECT carrid FROM spfli INTO @wa\_carrid.\\n IF wa\_carrid IN airline.\\n WRITE: / wa\_carrid UNDER 'Inside'.\\n ELSE.\\n WRITE: / wa\_carrid UNDER 'Outside'.\\n ENDIF.\\nENDSELECT.\\n abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_op.html abenlogexp\_compare\_all.html abenlogexp\_select\_option.html