---
title: "Execute"
description: |
  When the associated transaction `DEMO_SELSCREEN_DYNP` is called, the program starts by displaying selection screen 500. The user input on the selection screen can be processed, for example, at the event `AT SELECTION-SCREEN` or later in the application logic. After the event `AT SELECTION-SCREEN` is
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALL_TRANSACTION_DIALOG_ABEXA.htm"
abapFile: "ABENCALL_TRANSACTION_DIALOG_ABEXA.html"
keywords: ["select", "ABENCALL", "TRANSACTION", "DIALOG", "ABEXA"]
---

This example demonstrates a dialog transaction where the first dynpro is a selection screen.

Execute

When the associated transaction `DEMO_SELSCREEN_DYNP` is called, the program starts by displaying selection screen 500. The user input on the selection screen can be processed, for example, at the event `AT SELECTION-SCREEN` or later in the application logic. After the event `AT SELECTION-SCREEN` is processed (PAI of the selection screen), the program branches to a next dynpro, 100.

abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_call\_transaction.html abapcall\_transaction.html abentransactions\_abexas.html