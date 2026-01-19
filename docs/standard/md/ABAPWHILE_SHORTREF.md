---
title: "ABAPWHILE_SHORTREF"
description: |
  ABAPWHILE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPWHILE_SHORTREF.htm"
abapFile: "ABAPWHILE_SHORTREF.html"
keywords: ["loop", "do", "while", "data", "ABAPWHILE", "SHORTREF"]
---

[Reference](ABAPWHILE.html)

``WHILE [`log_exp`](ABENLOG_EXP_SHORTREF.html)\        [VARY dobj FROM dobj1 NEXT dobj2 [RANGE range]\        [VARY ...]].    [statement_block]\  ENDWHILE.``

Executes the statement block `statement_block` in a loop as long as the logical expression `log_exp` is true.

-   `VARY dobj FROM dobj1 NEXT dobj2 [RANGE range]`\\
    **Obsolete:** In each loop pass of a variable, assigns a value from the sequence defined in the memory using `dobj1` and `dobj2` to a variable `dobj`. The data object `range` limits the addressable memory area.

abenabap.html abenabap\_reference.html abenabap\_shortref.html