---
title: "ABENREPORT_ABEXA"
description: |
  ABENREPORT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREPORT_ABEXA.htm"
abapFile: "ABENREPORT_ABEXA.html"
keywords: ["select", "data", "ABENREPORT", "ABEXA"]
---

This example demonstrates how a logical database is linked with an executable program.

This example shows a typical report where the [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html)\\ `F1S` is assigned to its properties.

REPORT demo\_report.\\n\\nNODES: spfli, sflight, sbook.\\n\\nDATA: weight TYPE p LENGTH 8 DECIMALS 4,\\n total\_weight TYPE p LENGTH 8 DECIMALS 4.\\n\\nINITIALIZATION.\\n carrid-sign = 'I'.\\n carrid-option = 'EQ'.\\n carrid-low = 'AA'.\\n carrid-high = 'LH'.\\n APPEND carrid TO carrid.\\n\\nSTART-OF-SELECTION.\\n WRITE 'Luggage weight of flights'.\\n\\nGET spfli FIELDS carrid connid cityfrom cityto.\\n SKIP.\\n ULINE.\\n WRITE: / 'Carrid:', spfli-carrid,\\n 'Connid:', spfli-connid,\\n / 'From: ', spfli-cityfrom,\\n 'To: ', spfli-cityto.\\n ULINE.\\n\\nGET sflight FIELDS fldate.\\n SKIP.\\n WRITE: / 'Date:', sflight-fldate.\\n\\nGET sbook FIELDS luggweight.\\n weight += sbook-luggweight.\\nGET sflight LATE FIELDS carrid .\\n WRITE: / 'Luggage weight =', weight.\\n total\_weight += weight.\\n weight = 0.\\n\\nEND-OF-SELECTION.\\n ULINE.\\n WRITE: / 'Sum of luggage weights =', total\_weight.\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_examples.html