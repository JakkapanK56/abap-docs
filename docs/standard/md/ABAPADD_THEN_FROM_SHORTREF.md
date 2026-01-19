---
title: "ABAPADD_THEN_FROM_SHORTREF"
description: |
  ABAPADD_THEN_FROM_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPADD_THEN_FROM_SHORTREF.htm"
abapFile: "ABAPADD_THEN_FROM_SHORTREF.html"
keywords: ["do", "data", "ABAPADD", "THEN", "FROM", "SHORTREF"]
---

[Reference](ABAPADD_SEQUENCES.html)

`ADD \{\ \{ dobj1 THEN dobj2 UNTIL dobj        \{\ \{TO result\}\ |\ \{GIVING result [ACCORDING TO sel]\}\ \}\ \}\      |\ \{ dobj FROM pos1 TO pos GIVING result \}\ \}\      [RANGE range].`

**Obsolete:** Adds sequences of data objects saved at equal distances from each other in the memory.

-   `THEN ... UNTIL`\\
    Defines the sequence using the distance between the data objects `dobj1` and `dobj2`.
-   `TO result`\\
    Adds the result to the content of `result`.
-   `GIVING result`\\
    Assigns the result to `result`.
-   `FROM ... TO`\\
    Defines the sequence using data objects directly adjacent in the memory whose first data object is `dobj` and whose elements are determined using `pos1` and `pos`.
-   `ACCORDING TO sel`\\
    Limits the elements of the sequence according to the conditions of a [ranges table](ABENRANGES_TABLE_GLOSRY.html).
-   `RANGE range`\\
    Limits the addressable memory area to a structure `range`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html