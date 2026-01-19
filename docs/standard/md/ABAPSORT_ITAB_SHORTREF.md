---
title: "ABAPSORT_ITAB_SHORTREF"
description: |
  ABAPSORT_ITAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSORT_ITAB_SHORTREF.htm"
abapFile: "ABAPSORT_ITAB_SHORTREF.html"
keywords: ["if", "internal-table", "ABAPSORT", "ITAB", "SHORTREF"]
---

[Reference](ABAPSORT_ITAB.html)

`SORT itab [STABLE]\            \{\ \{\ [ASCENDING|DESCENDING]\                [AS TEXT]\                [BY \{comp1 [ASCENDING|DESCENDING]\ [AS TEXT]\}\                    \{comp2 [ASCENDING|DESCENDING]\ [AS TEXT]\}\                    ... ]\ \}\            |\ \{\ [BY (otab)]\ \}\            |\ \{\ [BY expr]\ \}\ \}.`

Sorts an internal table `itab` by the primary table key or a specified sort key.

-   `STABLE`\\
    Ensures stable sorting by preserving the relative order of non-affected lines.
-   `ASCENDING`\\
    Sorts in ascending order.
-   `DESCENDING`\\
    Sorts in descending order.
-   `AS TEXT`\\
    Sorts text-like components in accordance with the [locale](ABENLOCALE_GLOSRY.html) of the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html).
-   `BY comp1 ... comp2 ...`\\
    Sorts by the specified components `comp1`, `comp2`, ... instead of by the primary table key.
-   `BY (otab)`\\
    Sorts by the order specified in the table `otab` of type `ABAP_SORTORDER_TAB` instead of by the primary table key.
-   `BY expr`\\
    Sorts by an internal table returned by an expression.

abenabap.html abenabap\_reference.html abenabap\_shortref.html