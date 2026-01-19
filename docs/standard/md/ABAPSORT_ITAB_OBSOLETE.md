---
title: "ABAPSORT_ITAB_OBSOLETE"
description: |
  ABAPSORT_ITAB_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSORT_ITAB_OBSOLETE.htm"
abapFile: "ABAPSORT_ITAB_OBSOLETE.html"
keywords: ["if", "catch", "data", "internal-table", "field-symbol", "ABAPSORT", "ITAB", "OBSOLETE"]
---

`[SORT](ABAPSORT_ITAB.html) itab BY <fs1> <fs2> ...`

In internal tables with [header lines](ABENHEADER_LINE_GLOSRY.html), field symbols can also be specified as a sort criterion for `comp1 comp2 ...` after [`SORT ... BY`](ABAPSORT_ITAB.html). If a component of the header line or the entire header line is assigned to the field symbol when the statement is executed, the table is sorted by the corresponding component or the entire line. If no data object is assigned to a field symbol, the specification is ignored. If a different data object is assigned to a field symbol, an uncatchable exception is raised.

Instead of using field symbols for dynamic component specifications, it is best to specify parenthesized character-like data objects or an internal table, which contain the name of the components.

Sorting an internal table by a field symbol.

Sorting an internal table by a dynamic sort criterion.

name = 'ITAB-COL1'. \\nASSIGN (name) TO . \\n\\ \\nSORT itab BY . name = 'COL1'. \\n\\ \\nSORT itab BY (name). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenitab\_obsolete.html