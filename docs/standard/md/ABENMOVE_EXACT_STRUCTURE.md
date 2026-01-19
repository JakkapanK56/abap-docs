---
title: "ABENMOVE_EXACT_STRUCTURE"
description: |
  ABENMOVE_EXACT_STRUCTURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMOVE_EXACT_STRUCTURE.htm"
abapFile: "ABENMOVE_EXACT_STRUCTURE.html"
keywords: ["do", "if", "data", "types", "ABENMOVE", "EXACT", "STRUCTURE"]
---

The operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) can only be used to convert structures to [compatible](ABENCOMPATIBILITY.html) structures. Full compatibility is not required for the following deep components, for which the specified requirements apply:

Unlike simple conversion, the lossless assignment leads to a syntax error.

-   For components that have a [reference type](ABENREFERENCE_TYPE_GLOSRY.html), [upcasts](ABENUP_CAST_GLOSRY.html) but not [downcasts](ABENDOWN_CAST_GLOSRY.html) are allowed.
-   For table-like components, it is sufficient if the [line type](ABENROW_TYPE_GLOSRY.html) is compatible. This means that the full [compatibility](ABENCOMPATIBILITY.html), which includes [table categories](ABENTABLE_CATEGORY_GLOSRY.html) and [table keys](ABENTABLE_KEY_GLOSRY.html), is not required here.

-   The operator `EXACT` ensures that the [conversion rules](ABENCONVERSION_STRUC.html) for flat structures are the same as those for deep structures. It is not possible to make conversions between structures and elementary data objects.
-   If the structured types are compatible, no further checks are performed on the content. If the source structure already contains invalid data, this data is assigned to a compatible return value despite the addition `EXACT`.

DATA: \\n BEGIN OF struc, \\n col1 TYPE d, \\n col2 TYPE t, \\n END OF struc. \\n\\ \\nDATA(result1) = CONV string( struc ). "Possible \\n\\ \\nDATA(result2) = EXACT string( struc ). "Not possible abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenlossless\_move.html abapmove\_exact.html