---
title: "ABAPFORM_STRUCTURE"
description: |
  ABAPFORM_STRUCTURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFORM_STRUCTURE.htm"
abapFile: "ABAPFORM_STRUCTURE.html"
keywords: ["if", "case", "data", "field-symbol", "ABAPFORM", "STRUCTURE"]
---

[Short Reference](ABAPFORM_SHORTREF.html)

`... STRUCTURE struc ...`

A formal parameter `p1 p2 ...` of a subroutine can be specified with the addition `STRUCTURE` instead of [`typing`](ABENTYPING_SYNTAX.html), where `struc` must be a program-local structure (data object, no data type) or a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html) from the ABAP Dictionary. This structure is then applied to the formal parameter ([casting](ABENCAST_CASTING_GLOSRY.html)) and individual components can be accessed in the subroutine.

When an actual parameter is passed to a formal parameter typed using `STRUCTURE`, the actual parameter must be at least as long as the formal parameter:

Formal parameters typed with `STRUCTURE` can usually be replaced by formal parameters typed with `TYPE` or `LIKE`. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [`ASSIGN`](ABAPASSIGN.html) and the addition `CASTING`.

This example assigns the character string `text` the structure `line`.

-   In the case of a structured actual parameter, its [fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) must match the fragment view of the corresponding initial part of `struc`.
-   An elementary actual parameter must be character-like and flat and the corresponding initial part of `struc` can contain only components of this type.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE c LENGTH 1, \\n END OF line. \\n\\ \\nDATA text LENGTH 2 TYPE c VALUE 'XY'. \\n\\ \\nPERFORM demo USING text. \\n\\ \\nout->display( ). \\n\\ \\nFORM demo USING p STRUCTURE line. \\n out->write\_data( p ). \\nENDFORM. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenabap\_subroutines.html abapform.html