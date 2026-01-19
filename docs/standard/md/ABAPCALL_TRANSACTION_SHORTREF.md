---
title: "ABAPCALL_TRANSACTION_SHORTREF"
description: |
  ABAPCALL_TRANSACTION_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_TRANSACTION_SHORTREF.htm"
abapFile: "ABAPCALL_TRANSACTION_SHORTREF.html"
keywords: ["update", "if", "ABAPCALL", "TRANSACTION", "SHORTREF"]
---

[Reference](ABAPCALL_TRANSACTION.html)

`CALL TRANSACTION ta WITH|WITHOUT AUTHORITY-CHECK                      \{\ [AND SKIP FIRST SCREEN]\                      |\ [USING bdc_tab                               \{\{[MODE mode]\                                 [UPDATE upd]\}\                                |[OPTIONS FROM opt]\}\                               [MESSAGES INTO itab]]\ \}.`

Calls the [transaction](ABENTRANSACTION_GLOSRY.html) of the transaction code entered in `ta` and returns to the calling point.

-   [`WITH|WITHOUT AUTHORITY-CHECK`](ABAPCALL_TRANSACTION_AUTHORITY.html)\\
    Executes or suppresses an authorization check.
-   [`AND SKIP FIRST SCREEN`](ABAPCALL_TRANSACTION_STANDARD.html)\\
    Suppresses the initial dynpro.
-   [`USING bdc_tab`](ABAPCALL_TRANSACTION_USING.html)\\
    Executes the transaction using a [batch input table](ABENBATCH_INPUT_TABLE_GLOSRY.html)\\ `bdc_tab`.
    \\
    Specifies the processing mode in `mode` after [`MODE`](ABAPCALL_TRANSACTION_USING.html).
    \\
    Specifies the processing update mode in `upd` after [`UPDATE`](ABAPCALL_TRANSACTION_USING.html).
    \\
    Specifies the processing mode and update mode in `opt` after [`OPTIONS FROM`](ABAPCALL_TRANSACTION_USING.html).
    \\
    Collects the processing [messages](ABENMESSAGE_GLOSRY.html) in the internal tale `itab` after [`MESSAGES INTO`](ABAPCALL_TRANSACTION_USING.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html