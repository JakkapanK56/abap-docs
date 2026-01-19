---
title: "ABAPFORM_STRUCTURE"
description: |
  ABAPFORM_STRUCTURE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFORM_STRUCTURE.htm"
abapFile: "ABAPFORM_STRUCTURE.html"
keywords: ["if", "case", "data", "field-symbol", "ABAPFORM", "STRUCTURE"]
---

`... STRUCTURE struc ...`

***This syntax is only supported temporarily in the current ABAP language version and must be replaced with valid syntax for that version.***\\ \\n\\n

A formal parameter `p1 p2 ...` of a subroutine can be specified with the addition `STRUCTURE` instead of [`typing`](ABENTYPING_SYNTAX.html), where `struc` must be a program-local structure (data object, no data type) or a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html) from the ABAP Dictionary. This structure is then applied to the formal parameter ([casting](ABENCAST_CASTING_GLOSRY.html)) and individual components can be accessed in the subroutine.

When an actual parameter is passed to a formal parameter typed using `STRUCTURE`, the actual parameter must be at least as long as the formal parameter:

Formal parameters typed with `STRUCTURE` can usually be replaced by formal parameters typed with `TYPE` or `LIKE`. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [`ASSIGN`](ABAPASSIGN.html) and the addition `CASTING`.

-   In the case of a structured actual parameter, its [fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) must match the fragment view of the corresponding initial part of `struc`.
-   An elementary actual parameter must be character-like and flat and the corresponding initial part of `struc` can contain only components of this type.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenabap\_subroutines.html abapform.html