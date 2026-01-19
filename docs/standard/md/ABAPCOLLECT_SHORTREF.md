---
title: "ABAPCOLLECT_SHORTREF"
description: |
  ABAPCOLLECT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOLLECT_SHORTREF.htm"
abapFile: "ABAPCOLLECT_SHORTREF.html"
keywords: ["insert", "data", "internal-table", "field-symbol", "ABAPCOLLECT", "SHORTREF"]
---

[Reference](ABAPCOLLECT.html)

`COLLECT wa INTO itab \{\ [ASSIGNING <fs> [CASTING]]\                       |\ [REFERENCE INTO dref]\ \}.`

Inserts work areas `wa` as lines in an internal table `itab`. Here, the primary table key already exists for some lines and the values of the remaining components are added to the values of the existing lines.

-   [`ASSIGNING <fs> [CASTING]`](ABAPCOLLECT_ITAB_RESULT.html)\\
    Assigns the inserted line to the field symbol `<fs>`. A [casting](ABENCAST_CASTING_GLOSRY.html) can be performed here.
-   [`REFERENCE INTO dref`](ABAPCOLLECT_ITAB_RESULT.html)\\
    The data reference in `dref` is set to the inserted line.

abenabap.html abenabap\_reference.html abenabap\_shortref.html