---
title: "ABAPAPPEND_SHORTREF"
description: |
  ABAPAPPEND_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAPPEND_SHORTREF.htm"
abapFile: "ABAPAPPEND_SHORTREF.html"
keywords: ["if", "data", "internal-table", "field-symbol", "ABAPAPPEND", "SHORTREF"]
---

[Reference](ABAPAPPEND.html)

`APPEND \{ wa         |\ \{INITIAL LINE\}\         |\ \{LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY key_name|(name)]\}\ \}\     TO itab [SORTED BY comp]\     [\ \{ASSIGNING <fs> [CASTING]\}\ |\ \{REFERENCE INTO dref\}\ ].`

Appends lines to an internal table `itab`.

-   [`wa`](ABAPAPPEND_LINESPEC.html)\\
    Appends a work area `wa`.
-   [`INITIAL LINE`](ABAPAPPEND_LINESPEC.html)\\
    Appends an initial line.
-   [`LINES OF jtab [FROM idx1]\ [TO idx2]\ [STEP n]\ [USING KEY key_name|(name)]`](ABAPAPPEND_LINESPEC.html)\\
    Appends the lines from `idx1` to `idx2` of the internal table `jtab` with the step size `n`. The table key to be used for this can be specified either statically or dynamically.
-   [`SORTED BY comp`](ABAPAPPEND.html)\\
    Creates a ranking, which is sorted by the line component `comp` in descending order.
-   [`ASSIGNING <fs> [CASTING]`](ABAPAPPEND_RESULT.html)\\
    Assigns an appended line to a field symbol `<fs>` (castings are possible).
-   [`REFERENCE INTO dref`](ABAPAPPEND_RESULT.html)\\
    Sets a data reference `dref` to an appended line.

abenabap.html abenabap\_reference.html abenabap\_shortref.html