---
title: "ABAPASSIGN_RANGE"
description: |
  ABAPASSIGN_RANGE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPASSIGN_RANGE.htm"
abapFile: "ABAPASSIGN_RANGE.html"
keywords: ["loop", "do", "while", "if", "try", "catch", "data", "field-symbol", "ABAPASSIGN", "RANGE"]
---

`... \{\ \}`\\ 
  `|\ \{RANGE range\}.`

[1. `... \{\ \}`](#ABAP_ALTERNATIVE_1@2@)

[2. `... RANGE range`](#ABAP_ALTERNATIVE_2@2@)

The specification `range_spec` defines the area limits within which a memory area can be assigned to the field symbol. Either nothing can be specified here or the addition `RANGE`.

At the same time, the statement `ASSIGN` assigns these area limits to the field symbol `<fs>`. If the field symbol `<fs>` is itself used in a subsequent `ASSIGN` statement to specify a memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html), the assigned memory areas are used to determine the area limits of the field symbol to which the assignment is made.

If no value is specified for `range_spec`, the area limits are defined as follows:

If these area limits are exceeded, no memory area is assigned for the static variant of `mem_area` after the `ASSIGN` statement and the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) is false, while `sy-subrc` is set to 4 in the dynamic variant.

In the first `ASSIGN` statement, the area limits of the data object `text` are assigned to `<fs1>`. In the second `ASSIGN` statement, `<fs2>` inherits these limits. From the sixth loop pass, an attempt is made to assign a larger memory area to `<fs2>`, which makes the logical expression after `IF` false.

If the addition `RANGE` is specified in `range_spec`, the area limits are defined by the [data area](ABENDATA_AREA_GLOSRY.html) of the data object `range`. `range` expects a data object of any data type that covers the area limits that result when the `RANGE` addition is not specified (see above). If it is established at runtime that `range` does not cover these area limits, a catchable exception is raised.

When the `RANGE` addition is used, only subareas of the `range` data object can be assigned to the field symbol. If these area limits are exceeded, no memory area is assigned for the static variant of [`mem_area`](ABAPASSIGN_MEM_AREA.html) after the `ASSIGN` statement and the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) is false, while `sy-subrc` is set to 4 in the dynamic variants.

The addition `RANGE` cannot be used with the addition [`CASTING TYPE HANDLE`](ABAPASSIGN_CASTING.html) or for assigning [table expressions](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html).

The second dynamic assignment fails because the `RANGE` condition is violated.

-   The area limits assigned to a field symbol using `range_spec` only apply to the following `ASSIGN` statements. In other statements the [general rules](ABENOPERANDS_DATA_OBJECTS.html) apply.

-   If an elementary data object was specified for `dobj` in [`mem_area`](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html), the memory area of this data object determines the area limits.
-   If a field symbol was specified for `dobj` in [`mem_area`](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html), and an elementary data object is assigned to it, the field symbol `<fs>` of the current statement inherits the area limits assigned to this field symbol.
-   If a structure or a field symbol that points to a structure was specified for `dobj` in [`mem_area`](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html), the system checks whether the structure has a character-like initial part up to the first [alignment gap](ABENALIGNMENT_GAP_GLOSRY.html). This then determines the area limits.

-   A `RANGE` addition does not remove the type-specific rules for [substring accesses](ABENOFFSET_LENGTH.html). To enable substring access beyond the field limits of a specified data object `dobj`, substring access must be possible in principle. In particular, substring access is never possible beyond the limits of a structure, since the character-like initial part would not be accessed.
-   If a structure is specified for `range` that contains [dynamic data objects](ABENDYNAMIC_DATA_OBJECT_GLOSRY.html), they only contribute the internal reference to the data area of the structure. The actual data area of the dynamic data objects is paged out and is ignored by `RANGE`. This also applies to substructures that are declared as [boxed components](ABENBOXED_COMPONENT_GLOSRY.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 8 VALUE '12345678'. \\n\\ \\nFIELD-SYMBOLS: TYPE ANY, \\n TYPE ANY. \\n\\ \\nASSIGN text+3(3) TO . \\n\\ \\nDO 8 TIMES. \\n ASSIGN (sy-index) TO . \\n IF IS ASSIGNED. \\n out->write\_text( |\\{ \\}| ). \\n ENDIF. \\nENDDO. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF struct, \\n BEGIN OF substruc1, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE c LENGTH 1, \\n END OF substruc1, \\n BEGIN OF substruc2, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF substruc2, \\n END OF struct. \\n\\ \\nTRY. \\n ASSIGN ('STRUCT-SUBSTRUC1-COL1') TO FIELD-SYMBOL() \\n RANGE struct-substruc1 \\n ELSE UNASSIGN. \\n IF IS ASSIGNED. \\n out->write( ' assigned' ). \\n ENDIF. \\n ASSIGN ('STRUCT-SUBSTRUC1-COL1') TO FIELD-SYMBOL() \\n RANGE struct-substruc2 \\n ELSE UNASSIGN. \\n IF IS ASSIGNED. \\n out->write( ' assigned' ). \\n ENDIF. \\n CATCH cx\_sy\_assign\_out\_of\_range INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html