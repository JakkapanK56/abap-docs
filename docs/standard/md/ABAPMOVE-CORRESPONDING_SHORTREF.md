---
title: "ABAPMOVE-CORRESPONDING_SHORTREF"
description: |
  ABAPMOVE-CORRESPONDING_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMOVE-CORRESPONDING_SHORTREF.htm"
abapFile: "ABAPMOVE-CORRESPONDING_SHORTREF.html"
keywords: ["internal-table", "ABAPMOVE", "CORRESPONDING", "SHORTREF"]
---

[Reference](ABAPMOVE-CORRESPONDING.html)

`MOVE-CORRESPONDING [EXACT]\ \{ struc1 TO struc2 [EXPANDING NESTED TABLES]\ \}\                           |\ \{ itab1  TO itab2  [EXPANDING NESTED TABLES]\                                                [KEEPING TARGET LINES]\ \}.`

Assigns components of a structure `struc1` or an internal table `itab1` to components with the same name in structure `struc2` or internal table `itab2`.

-   [`EXACT`](ABAPMOVE_EXACT.html)\\
    The assignment is lossless.
-   [`EXPANDING NESTED TABLES`](ABAPMOVE-CORRESPONDING.html)\\
    **Planned:** Tabular components are expanded.
-   [`KEEPING TARGET LINES`](ABAPMOVE-CORRESPONDING.html)\\
    **Planned:** Target tables are supplemented, not overwritten.

abenabap.html abenabap\_reference.html abenabap\_shortref.html