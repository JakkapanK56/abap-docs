---
title: "ABENCALL_DIALOG_ABEXA"
description: |
  ABENCALL_DIALOG_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_DIALOG_ABEXA.htm"
abapFile: "ABENCALL_DIALOG_ABEXA.html"
keywords: ["select", "try", "data", "ABENCALL", "DIALOG", "ABEXA"]
---

This example demonstrates how a dialog module can be called.

Calls the [dialog module](ABENDIALOG_MODULE_OBJECT_GLOSRY.html)\\ `DEMO_DIALOG_MODULE` that is linked with the program `SAPMDEMO_TRANSACTION`.

REPORT demo\_dialog\_module.\\n\\nDATA spfli\_wa TYPE spfli.\\nspfli\_wa-carrid = 'LH'.\\nspfli\_wa-connid = '0400'.\\n\\nSTART-OF-SELECTION.\\n\\n CALL DIALOG 'DEMO\_DIALOG\_MODULE'\\n EXPORTING\\n spfli-carrid FROM spfli\_wa-carrid\\n spfli-connid FROM spfli\_wa-connid\\n IMPORTING\\n spfli\_wa TO spfli\_wa.\\n\\n WRITE: / spfli\_wa-carrid,\\n / spfli\_wa-connid,\\n / spfli\_wa-countryfr,\\n / spfli\_wa-cityfrom,\\n / spfli\_wa-airpfrom,\\n / spfli\_wa-countryto,\\n / spfli\_wa-cityto,\\n / spfli\_wa-airpto,\\n / spfli\_wa-fltime,\\n / spfli\_wa-deptime,\\n / spfli\_wa-arrtime,\\n / spfli\_wa-distance ##UOM\_IN\_MES,\\n / spfli\_wa-distid,\\n / spfli\_wa-fltype,\\n / spfli\_wa-period.\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenprogram\_call\_obsolete.html abapcall\_dialog.html