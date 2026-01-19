---
title: "ABAPMOVE_PERCENTAGE"
description: |
  ABAPMOVE_PERCENTAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMOVE_PERCENTAGE.htm"
abapFile: "ABAPMOVE_PERCENTAGE.html"
keywords: ["if", "class", "data", "ABAPMOVE", "PERCENTAGE"]
---

[Short Reference](ABAPMOVE_PERCENTAGE_SHORTREF.html)

`MOVE source TO destination PERCENTAGE perc [LEFT|RIGHT].`

This variant of the statement [`MOVE`](ABAPMOVE_OBS.html) (also obsolete), which is not allowed in classes, assigns the substring of the data object `source` that begins at the first position and whose length matches the percentage of the total length of `source` specified in `perc`, to the data object `destination`. By default, and if `LEFT` is specified, `destination` is left-aligned; if `RIGHT` is specified, it is right-aligned.

The data type of the data objects `source` and `destination` must be character-like, otherwise the addition `PERCENTAGE` is ignored. `perc` expects a data object of type `i`. If the value of `perc` is less than or equal to 0, nothing is assigned. If the value of `perc` is greater than or equal to 100, the entire content of `source` is assigned.

If necessary, this variant of the statement `MOVE` can be replaced by [substring accesses](ABENOFFSET_LENGTH.html) with dynamic offsets/lengths or by [substring functions](ABENSUBSTRING_FUNCTIONS.html).

Usage of `MOVE PERCENTAGE`.

Usage of Offset/Length Specification.

MOVE c1 TO c2 PERCENTAGE n. DATA l TYPE i. \\n\\ \\nDESCRIBE FIELD c1 LENGTH l. \\nl = l \* n / 100. \\nMOVE c1(l) TO c2. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenobsolete\_assignments.html