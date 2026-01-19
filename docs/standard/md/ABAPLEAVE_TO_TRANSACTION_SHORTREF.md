---
title: "ABAPLEAVE_TO_TRANSACTION_SHORTREF"
description: |
  ABAPLEAVE_TO_TRANSACTION_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLEAVE_TO_TRANSACTION_SHORTREF.htm"
abapFile: "ABAPLEAVE_TO_TRANSACTION_SHORTREF.html"
keywords: ["if", "ABAPLEAVE", "TRANSACTION", "SHORTREF"]
---

[Reference](ABAPLEAVE_TO_TRANSACTION.html)

`LEAVE TO \{\ \{TRANSACTION ta\}\ |\ \{CURRENT TRANSACTION\}\ \}\           [AND SKIP FIRST SCREEN].`

Calls either the [transaction](ABENTRANSACTION_GLOSRY.html) of the transaction code specified in `ta` or the current transaction without returning to the call position.

-   `AND SKIP FIRST SCREEN`\\
    Suppresses the initial screen.

abenabap.html abenabap\_reference.html abenabap\_shortref.html