---
title: "ABENTYPING_COMPLETE"
description: |
  ABENTYPING_COMPLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTYPING_COMPLETE.htm"
abapFile: "ABENTYPING_COMPLETE.html"
keywords: ["do", "if", "class", "data", "types", "internal-table", "field-symbol", "ABENTYPING", "COMPLETE"]
---

[Short Reference](ABENTYPING_SHORTREF.html)

`... \{ TYPE \{[LINE OF] complete_type\}`\\ 
         `|\ \{REF TO type\}\ \}`\\ 
  `|\ \{ LIKE \{[LINE OF] dobj\}`\\ 
         `|\ \{REF TO dobj\}\ \} ...`

To completely type a formal parameter or a field symbol:

If `complete_type` or the data type of `dobj` is table-like, `LINE OF` can be used to refer to the appropriate line type.

`REF TO` types the formal parameter or field symbol as a reference variable, whereby the same rules apply as to the [definition of reference types in `TYPES`](ABAPTYPES_REFERENCES.html). Typing with `TYPE REF TO data` or `TYPE REF TO object` is also considered a complete typing.

If an actual parameter or a memory area is assigned to completely typed formal parameters or field symbols, the technical properties of the specified data type must match the typing exactly (see [Typing Check](ABENTYPING_CHECK.html)), except when passing literals. Completely typed formal parameters or field symbols can be used in the same operand positions as data objects of the corresponding data type.

Type properties specified by the typing are used during both static and dynamic access to a completely typed formal parameter or field symbol.

In the following example, the field symbol `<spfli>` is completely typed with the structured data type `spfli` from the ABAP Dictionary, and can therefore be used like a structure of this data type.

FIELD-SYMBOLS <spfli> TYPE spfli.\\ 
...\\ 
<spfli>-carrid = ...

-   Any non-generic type `complete_type` can be specified after `TYPE`. `complete_type` can be a non-generic data type from the ABAP Dictionary or ABAP CDS, a non-generic public data type from a global class, a non-generic program-local type already defined using [`TYPES`](ABAPTYPES.html), or a non-generic [built-in ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html).
-   A data object `dobj` can be specified after `LIKE`. `dobj` according to the rules [`TYPES ... LIKE`](ABAPTYPES_REFERRING.html). The bound type of the data object is transferred. If field symbols and formal parameters are specified for `dobj`, they must be completely typed to create the corresponding complete typing.

-   The data types that can be referred to with `TYPE` include specifically [CDS types](ABENCDS_TYPE_GLOSRY.html).
-   Complete data types, which can be referred to with `TYPE`, or indirectly using `LIKE`, also include [enumerated types](ABAPTYPES_ENUM.html).
-   `LIKE` can be used to refer to data objects, including the public attributes of global classes.
-   In a `LIKE` reference to an internal table with a [header line](ABENHEADER_LINE_GLOSRY.html), the header line is used. To refer to the table type, `[]` must be appended to the name as per usual. A formal parameter (with the exception of [table parameters](ABENTABLE_PARAMETER_GLOSRY.html)) or a field symbol can be typed only with reference to the header line or to the table type.
-   The predefined generic data type [`any`](ABENBUILT_IN_TYPES_GENERIC.html) cannot currently be specified after `REF TO`.
-   Outside classes, `LIKE` can also be used for an [obsolete type reference](ABENLIKE_OBSOLETE.html).

abenabap.html abenabap\_reference.html abendeclarations.html abentyping.html abentyping\_syntax.html