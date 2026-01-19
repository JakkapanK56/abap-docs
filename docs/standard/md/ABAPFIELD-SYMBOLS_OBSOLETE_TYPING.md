---
title: "ABAPFIELD-SYMBOLS_OBSOLETE_TYPING"
description: |
  ABAPFIELD-SYMBOLS_OBSOLETE_TYPING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFIELD-SYMBOLS_OBSOLETE_TYPING.htm"
abapFile: "ABAPFIELD-SYMBOLS_OBSOLETE_TYPING.html"
keywords: ["do", "while", "if", "case", "class", "data", "types", "field-symbol", "ABAPFIELD", "SYMBOLS", "OBSOLETE", "TYPING"]
---

[Short Reference](ABAPFIELD-SYMBOLS_SHORTREF.html)

`... \{\ \}\ | STRUCTURE struc DEFAULT dobj ...`

[1. `... \{\ \}`](#ABAP_ADDITION_1@3@)

[2. `... STRUCTURE struc DEFAULT dobj`](#ABAP_ADDITION_2@3@)

These additions of the statement [`FIELD-SYMBOLS`](ABAPFIELD-SYMBOLS.html) produce an obsolete typing of the field symbol and are forbidden in classes.

If no explicit type is specified after `FIELD-SYMBOLS`, the field symbol is typed implicitly with the completely generic type `any`. Furthermore, the field symbol is assigned the predefined constant `space` when the context is loaded. This means that the field symbol is not initial directly after it has been declared, and a check using [`IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) is true.

If the addition `STRUCTURE`, which is forbidden within classes, is specified for a field symbol instead of [`typing`](ABENTYPING_SYNTAX.html) and `struc` is a local program structure (a data object, not a data type) or a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html) from the ABAP Dictionary, this structure is cast for the field symbol `<fs>`. `dobj` must be used to specify a data object that is assigned to the field symbol as an initial object.

The field symbol inherits the technical properties of structure `struc`, as with complete typing. In the case of a structured data object `dobj`, this data object must be at least as long as the formal parameter:

The same applies to assignments of data objects to field symbols typed using `STRUCTURE` when using the statement [`ASSIGN`](ABAPASSIGN.html).

Field symbols declared using the addition `STRUCTURE` are a mixture of typed field symbols and a tool for [casting](ABENCAST_CASTING_GLOSRY.html) to structured data types. The additions `TYPE` or `LIKE` of the statement `FIELD-SYMBOLS` should be used to type field symbols, while the addition `CASTING` of the statement `ASSIGN` is used for casting.

The first example shows the obsolete use of the addition `STRUCTURE`.

The second example shows the replacement of `STRUCTURE` with the additions `TYPE` and `CASTING`.

[Field Symbols, Cast Structures](ABENFIELD_SYMBOLS_STRUC_ABEXA.html)

-   In the case of a structured data object, its [fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) must match the fragment view of the corresponding initial part of `struc`.
-   An elementary data object must be character-like and flat and the corresponding initial part of `struc` can contain only components of this type.

DATA wa1 TYPE c LENGTH 512. \\nFIELD-SYMBOLS STRUCTURE scarr DEFAULT wa1. \\n\-carrid = '...'. DATA wa2 TYPE c LENGTH 512. \\nFIELD-SYMBOLS TYPE scarr. \\nASSIGN wa2 TO CASTING. \\n\-carrid = '...'. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenfield\_symbols\_obsolete.html