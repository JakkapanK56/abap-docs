---
title: "ABAPDO_SHORTREF"
description: |
  ABAPDO_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDO_SHORTREF.htm"
abapFile: "ABAPDO_SHORTREF.html"
keywords: ["loop", "do", "data", "ABAPDO", "SHORTREF"]
---

[Reference](ABAPDO.html)

`DO [n TIMES]\     [VARYING dobj FROM dobj1 NEXT dobj2 [RANGE range]\     [VARYING ...]].    [statement_block]\  ENDDO.`

Executes the statement block `statement_block` more than once in a single loop.

-   `n TIMES`\\
    Limits the number of loop passes to `n`.
-   [`VARYING dobj FROM dobj1 NEXT dobj2 [RANGE range]`](ABAPDO_VARYING.html)\\
    **Obsolete:** In each loop pass of a variable, assigns a value from the sequence defined in the memory using `dobj1` and `dobj2` to a variable `dobj`. The data object `range` limits the addressable memory area.

abenabap.html abenabap\_reference.html abenabap\_shortref.html