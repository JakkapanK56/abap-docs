---
title: "ABAPSORT_SHORTREF"
description: |
  ABAPSORT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSORT_SHORTREF.htm"
abapFile: "ABAPSORT_SHORTREF.html"
keywords: ["if", "data", "ABAPSORT", "SHORTREF"]
---

[Reference](ABAPSORT_EXTRACT.html)

`SORT [ASCENDING|DESCENDING]\       [AS TEXT]\       [STABLE]\       [BY \{field1 [ASCENDING|DESCENDING]\ [AS TEXT]\}\           \{field2 [ASCENDING|DESCENDING]\ [AS TEXT]\}\           ...].`

**Obsolete:** Sorts the [extract dataset](ABENEXTRACT_DATASET_GLOSRY.html) after the [field group](ABENFIELD_GROUP_GLOSRY.html)\\ `header`.

-   [`ASCENDING`](ABAPSORT_EXTRACT.html)\\
    Sorts in ascending order.
-   [`DESCENDING`](ABAPSORT_EXTRACT.html)\\
    Sorts in descending order.
-   [`AS TEXT`](ABAPSORT_EXTRACT.html)\\
    Sorts text-like components in accordance with the [locale](ABENLOCALE_GLOSRY.html) of the current [text environment](ABENTEXT_ENVIRONMENT_GLOSRY.html).
-   [`STABLE`](ABAPSORT_EXTRACT.html)\\
    Ensures stable sorting by retaining the relative order of non-affected lines.
-   [`BY field1 ... field2 ...`](ABAPSORT_KEY.html)\\
    Sorts by specified fields `field1`, `field2`, ... instead of by field group `header`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html