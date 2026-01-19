---
title: "ABAPMODIFY_ITAB_SHORTREF"
description: |
  ABAPMODIFY_ITAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_ITAB_SHORTREF.htm"
abapFile: "ABAPMODIFY_ITAB_SHORTREF.html"
keywords: ["loop", "if", "internal-table", "field-symbol", "ABAPMODIFY", "ITAB", "SHORTREF"]
---

[Reference](ABAPMODIFY_ITAB.html)

``MODIFY \{\ \{\ \{\ \{TABLE itab\}|\{itab INDEX idx\}\               [USING KEY key_name|(name)]\ \}\           |\ \{ itab [USING KEY loop_key]\ \}\             FROM wa             [TRANSPORTING comp1 comp2 ...]\             [\{ASSIGNING <fs> [CASTING]\}|\{REFERENCE INTO dref\}]\ \}\         |\ \{itab FROM wa [USING KEY key_name|(name)]\                         TRANSPORTING comp1 comp2 ...                         WHERE [`log_exp`](ABENLOG_EXP_SHORTREF.html)|(cond_syntax)\}\ \}.``

Changes lines in internal tables. A restricted [variant](ABENMESH_MODIFY.html) works with [mesh paths](ABENMESH_PATH_GLOSRY.html).

-   [`TABLE itab`](ABAPMODIFY_ITAB_SINGLE.html)\\
    Specifies a line to be changed by matching the key values of the `wa` work area.
-   [`itab INDEX idx`](ABAPMODIFY_ITAB_SINGLE.html)\\
    Specifies a line to be changed by specifying a line number `idx` of a table index.
-   [`itab [USING KEY loop_key]`](ABAPMODIFY_ITAB_SINGLE.html)\\
    Specifies the lines in a loop to be changed using the current lines.
-   [`FROM wa`](ABAPMODIFY_ITAB_MULTIPLE.html)\\
    Specifies the new content in a `wa` work area.
-   [`TRANSPORTING comp1 comp2 ...`](ABAPMODIFY_ITAB_SINGLE.html)\\
    Specifies the components `comp1`, `comp2`, ... to be changed.
-   [`ASSIGNING <fs> [CASTING]`](ABAPMODIFY_ITAB_RESULT.html)\\
    Assigns a changed single line to a field symbol `<fs>` for casting.
-   [`REFERENCE INTO dref`](ABAPMODIFY_ITAB_RESULT.html)\\
    Assigns the reference to a changed single line to a reference variable`dref`.
-   [`WHERE log_exp|(cond_syntax)`](ABAPMODIFY_ITAB_MULTIPLE.html)\\
    Specifies the lines to be changed by specifying a static condition `log_exp` or a dynamic condition in `cond_syntax`.
-   [`USING KEY key_name|(name)`](ABAPMODIFY_ITAB.html)\\
    Specifies (statically or dynamically) a secondary table key to search for the lines to be changed.

abenabap.html abenabap\_reference.html abenabap\_shortref.html