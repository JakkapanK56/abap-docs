---
title: "ABAPINSERT_ITAB_SHORTREF"
description: |
  ABAPINSERT_ITAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_ITAB_SHORTREF.htm"
abapFile: "ABAPINSERT_ITAB_SHORTREF.html"
keywords: ["insert", "loop", "if", "internal-table", "field-symbol", "ABAPINSERT", "ITAB", "SHORTREF"]
---

[Reference](ABAPINSERT_ITAB.html)

`INSERT \{ wa         |\ \{INITIAL LINE\}\         |\ \{LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY key_name|(name)]\}\ \}\    INTO \{\ \{TABLE itab\}\         |\ \{itab INDEX idx\}\         |\ \{itab\}\ \}\         [\ \{ASSIGNING <fs> [CASTING]\}\ |\ \{REFERENCE INTO dref \}\ ].`

Inserts rows into an internal table `itab`. A restricted [variant](ABENMESH_INSERT.html) works with [mesh paths](ABENMESH_PATH_GLOSRY.html).

-   [`wa`](ABAPINSERT_ITAB_LINESPEC.html)\\
    Inserts a work area `wa`.
-   [`INITIAL LINE`](ABAPINSERT_ITAB_LINESPEC.html)\\
    Inserts an initial line.
-   [`LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY key_name|(name)]`](ABAPINSERT_ITAB_LINESPEC.html)\\
    Inserts the rows of internal table `jtab` that were specified by indexes `idx1` and `idx2` and the step size `n`. The table key can be specified statically or dynamically.
-   [`INTO TABLE itab`](ABAPINSERT_ITAB_POSITION.html)\\
    Specifies the insertion position using the primary table key.
-   [`INTO itab INDEX idx`](ABAPINSERT_ITAB_POSITION.html)\\
    Specifies the insertion position using a table index `idx`.
-   [`INTO itab`](ABAPINSERT_ITAB_POSITION.html)\\
    Specifies the insertion position in a loop using the current line.
-   [`ASSIGNING <fs> [CASTING]`](ABAPINSERT_ITAB_RESULT.html)\\
    Assigns an inserted single line to a field symbol `<fs>`, where casting can be performed.
-   [`REFERENCE INTO dref`](ABAPINSERT_ITAB_RESULT.html)\\
    Assigns the reference (to an inserted single line) to a reference variable `dref`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html