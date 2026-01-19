---
title: "ABAPASSIGN_MEM_AREA_STATIC_DOBJ"
description: |
  ABAPASSIGN_MEM_AREA_STATIC_DOBJ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSIGN_MEM_AREA_STATIC_DOBJ.htm"
abapFile: "ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html"
keywords: ["do", "if", "case", "data", "field-symbol", "ABAPASSIGN", "MEM", "AREA", "STATIC", "DOBJ"]
---

[Short Reference](ABAPASSIGN_SHORTREF.html)

`... dobj[+off][(len)]  ...`

Static variant for specifying the memory area [`mem_area`](ABAPASSIGN_MEM_AREA.html) of the statement [`ASSIGN`](ABAPASSIGN.html). In the static variant, a data object `dobj` with an optional offset/length `+off(len)` can be specified in accordance with the rules described in the section [Data Objects in Operand Positions](ABENOPERANDS_DATA_OBJECTS.html), with the following exception: A data reference dereferenced using the dereferencing operator ->\* belongs to the [dynamic variants](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html). `dobj` specified using a field symbol, on the other hand, is a static variant.

The memory area is determined by the specified offset/length `+off(len)` as follows:

The return code `sy-subrc` is not set for this variant. If the assignment is not successful, no memory area is assigned to the field symbol after the `ASSIGN` statement. The addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) is used implicitly and cannot be specified.

In an inline declaration of the field symbol with [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html), this symbol is typed with the exact data type that can be determined statically for `mem_area`. If `mem_area` is a generically typed field symbol or a generically typed formal parameter, the generic type is used.

Assignment of the memory area of the individual characters of a data object `text` to a field symbol `<char>`.

A field symbol `<fs1>` points to the component `col1` of the structure `struct`. In the first assignment of `<fs1>` to a field symbol `<fs2>`, an offset without length is specified and therefore the length 10 of the component `col1` is used implicitly. This assignment is not possible, since the assigned memory area is outside of the allowed range. In the second assignment, the allowed memory area is expanded to the entire structure using the assignment [`RANGE`](ABAPASSIGN_RANGE.html) and the assignment is successful.

-   If no offset/length specification is made, the assigned memory area corresponds exactly to the memory area of the data object. The entire data object `dobj` is assigned to the field symbol, and statements that contain the field symbol in operand positions work with the data object.
-   If an offset/length is specified, the memory area is determined from the memory address of the data object and the offset/length specifications. The general rules for [substring accesses](ABENOFFSET_LENGTH.html) apply. If these are met, memory outside the `dobj` field limits can also be addressed. The addressable memory is based on the specification [`range_spec`](ABAPASSIGN_RANGE.html). If an offset `off` is specified without a length `len`, the length of the data object `dobj` is used implicitly for `len`. If a field symbol is specified for `dobj`, to which a memory area is already assigned, the content of the offset specification can be negative, as long as the area specified in `range_spec` is not exited. The following restrictions apply when offsets/lengths are specified:

-   No inline declaration of a field symbol with [`FIELD-SYMBOL(<fs>)`](ABENFIELD-SYMBOL_INLINE.html) can be made.
-   The data type of `dobj` cannot be `string` or `xstring`, which means that `len` can never be less than or equal to zero.
-   If the name of a data object is specified for `dobj` and if no explicit [`RANGE`](ABAPASSIGN_RANGE.html) addition is used, no offset `off` can be specified without the length `len`. If the name of a field symbol is specified for `dobj`, its data type must be [flat](ABENFLAT_GLOSRY.html) and elementary whenever an offset `off` is specified without length `len`.

-   Ensure that the system field `sy-subrc` is not evaluated by mistake after the static variant. The value of the system field in this case is always the same as it was before the `ASSIGN` statement was executed and therefore does not indicate whether the statement was successful.
-   In order to check the success of the assignment, the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) can be used.
-   Even the static variant is dynamic in the sense that the offset and length specifications may be dynamic. However, dynamic offset/length specifications do not lead to the system field `sy-subrc` being set.
-   If a generically typed field symbol or a generically typed formal parameter is specified for `dobj`, its current type at runtime determines the behavior, for example whether offsets/lengths can be specified or not.
-   In the `ASSIGN` statement, the special rule that offset/length specifications that address the complete data object are omitted does not apply.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA text TYPE c LENGTH 10 VALUE '0123456789'. \\n\\ \\nFIELD-SYMBOLS TYPE c. \\n\\ \\nDATA off TYPE i. \\n\\ \\nDO 10 TIMES. \\n off = sy-index - 1. \\n ASSIGN text+off(1) TO . \\n out->write\_text( |\\{ \\}| ). \\nENDDO. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: \\n BEGIN OF struct, \\n col1 TYPE c LENGTH 10 VALUE 'aaaaaaaaaa', \\n col2 TYPE c LENGTH 10 VALUE 'bbbbbbbbbb', \\n END OF struct. \\n\\ \\nFIELD-SYMBOLS: TYPE c, \\n TYPE c. \\n\\ \\nASSIGN struct-col1 TO . \\nASSIGN +5 TO . \\nIF IS NOT ASSIGNED. \\n out->write( \`No assignment without sufficient RANGE\` ). \\nENDIF. \\nASSIGN +5 TO RANGE struct. \\nIF IS ASSIGNED. \\n out->write( \`Assignment with sufficient RANGE\` ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html abapassign\_mem\_area.html