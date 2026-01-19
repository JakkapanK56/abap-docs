---
title: "ABENOFFSET_LENGTH"
description: |
  ABENOFFSET_LENGTH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENOFFSET_LENGTH.htm"
abapFile: "ABENOFFSET_LENGTH.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "field-symbol", "ABENOFFSET", "LENGTH"]
---

In operand positions, it is possible to access substrings of certain data objects by specifying an offset and a length:

`dobj[+off][(len)]`

`<fs>[+off][(len)]`

`dref->*[+off][(len)]`

An offset `off` can be appended directly with the character `+` to the identifier `dobj` of a data object, to `<fs>` of a field symbol, or to a dereferenced data reference variable `dref->*`. A length `len` can be appended to the offset specification directly in parentheses `( )` or directly to the identifier. Offsets or lengths can be specified for:

The segment of the data object is used that has the offset specified in `off` and the length specified in `len` in characters or bytes. No memory area outside the field boundaries can be addressed, except for in the statement [`ASSIGN`](ABAPASSIGN.html). In the case of an offset specification without a length, the entire substring is addressed from `off` characters; in the case of a length specification without an offset, the first `len` characters are addressed (different rules apply to the statement [`ASSIGN`](ABAPASSIGN.html)).

The operands `off` and `len` expect data objects of the type `i`, which must contain positive integers, with the following exceptions:

If the prerequisites are not met or if the substring defined by `off` and `len` is not fully included in the data object, except in the case of [`ASSIGN`](ABAPASSIGN.html), a syntax error occurs if statically identifiable. Otherwise, an exception of the class `CX_SY_RANGE_OUT_OF_BOUNDS` is raised. If `off` is specified as a numeric literal, it cannot be preceded by a plus/minus sign.

The offset and length specifications are counted in characters for character-like data objects and otherwise in bytes.

A substring specified by an offset or length specification is handled like a data object of the specified length. The data type depends on the data type of the original data object, the field symbol, or the data reference variable, as shown below:

In a substring access, if the length of the substring matches the length of the structure to a structure exactly, the substring does not have data type `c` but is handled like the structure itself.

The following restrictions apply:

Offset/length specifications after a [`FIND`](ABAPFIND.html) statement.

The following structure has character-like and non-character-like components:

The [fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) splits the structure into five areas, F1 - F5.

Offset and length accesses are only possible on the character-like initial fragment `` `F1` `` only, for example `struc(21)` or `struc+7(14)`. An access such as `struc+57(2)` is not allowed.

[Offset/Length Specifications](ABENDATA_PROCESS_FIELDS_ABEXA.html)

-   [Elementary](ABENELEMENTARY_DATA_OBJECT_GLOSRY.html)\\ [byte-like data objects](ABENBYTE_LIKE_DATA_OBJECT_GLOSRY.html)
-   [Elementary](ABENELEMENTARY_DATA_OBJECT_GLOSRY.html)\\ [character-like data objects](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html)
-   [Flat structures](ABENFLAT_STRUCTURE_GLOSRY.html) where one of the following prerequisites must be met:

-   The structure only contains flat character-like components.
-   The first fragment of the [structural fragment view](ABENUNICODE_FRAGMENT_VIEW_GLOSRY.html) is flat and character-like, and the substring addressed by specifying the offset and length is located within this fragment.

-   The length 0 can be specified for [strings](ABENSTRING_GLOSRY.html).
-   A negative offset, but never length 0, can be specified if an `<fs>` field symbol is specified in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html) for `dobj`.
-   If `off` is smaller than the length of `dobj`, an asterisk (`*`) can be entered for `len`. The upper limit of `dobj` then determines the upper limit of the memory area.

-   At [write positions](ABENWRITE_POSITION_GLOSRY.html), only flat data objects are allowed, that is, write access to substrings of strings is not possible.
-   Access to substrings of strings is also not possible in the following [read positions](ABENREAD_POSITION_GLOSRY.html):

-   Specification of `dobj[+off][(len)]` as a memory area [`mem_area`](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html) of the statement [`ASSIGN`](ABAPASSIGN.html).
-   Specification of `dobj[+off][(len)]` as an operand of the statement [`GET REFERENCE`](ABAPGET_REFERENCE.html) or of the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html).
-   Specification of `dobj[+off][(len)]` as an actual parameter for input parameters when calling [methods](ABENMETHOD_CALLS.html), [function modules](ABAPCALL_FUNCTION.html).

-   Offsets and lengths cannot be specified for literals or text symbols.
-   An offset/length specification cannot be attached directly to a table expression [`itab[ ... ]`](ABENTABLE_EXPRESSIONS.html), but to a [chaining](ABENTABLE_EXP_CHAINING.html) whose last position is a suitable structure component after a structure component selector.
-   No offset or length can be specified for an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with an [enumerated type](ABENENUM_TYPE_GLOSRY.html), regardless of the [base type](ABENBASE_TYPE_GLOSRY.html).
-   In case of dynamically [specified operands](ABENOPERANDS_SPECIFYING.html) in parentheses, no length specification can be made.
-   A dereferenced data reference variable `dref->*` must be typed completely.
-   For a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html), no offsets or lengths can be specified as [memory areas](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) of the statement `ASSIGN` or as operands of the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) (table expressions only).
-   The following applies when [assigning](ABENEQUALS_OPERATOR.html) data objects of fixed length with offset/length specifications to an [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) with the declaration operator [`DATA`](ABENDATA_INLINE.html) or [`FINAL`](ABENFINAL_INLINE.html):

-   If the offset/length specification is applied to a data object that is directly assigned to the inline declaration, `off` and `len` must be literals or constants. Variables are not allowed.
-   If the offset/length specification is applied to a data object that is the result of chaining that involves a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) or a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html), the data type of the declared data object is the data type of the assigned data object in its full length and the substring is assigned according to the respective [conversion rules](ABENCONVERSION_RULES.html).

-   For reads on substrings of character-like data objects, built-in [substring functions](ABENSUBSTRING_FUNCTIONS.html) that allow searches for substrings and offsets/lengths are also available. The substring functions can also be used to process arguments where offsets and lengths cannot be specified, such as data objects with an [enumerated type](ABENENUM_TYPE_GLOSRY.html) because there is an implicit conversion to `string`.
-   It is recommended that offsets with the value 0 are always specified explicitly, that is, `dobj+0(len)` instead of `dobj(len)` to differentiate substring access in the source code clearly from other language constructs that also contain parentheses, such as dynamic specifications, method calls, or inline declarations.
-   Except when used as [memory area](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html) of an [`ASSIGN`](ABAPASSIGN.html) statement, a specification of `dobj+0(*)`, `dobj+0`, or `dobj(*)` is interpreted as `dobj`. In this case, `dobj` can also be a data object where substring access according to the rules above is not possible. The same is true for `dobj+off(len)`, `dobj+off`, or`dobj(len)` if `off` and `len` are literals or constants whose value is *0* or the same as the length of `dobj`, respectively.
-   The above restriction regarding offset/length specifications for results of chainings involving table or constructor expressions is not valid for types that are inferred at runtime, e.g. when passing to generic parameters of procedures. Then the data type of the substring is used.
-   No substring access `cnt(len)`, `sum(len)` can be performed on data objects named `cnt` and `sum` unless an offset is specified explicitly.

FINAL(str) = 'aaaXXXbbb'. \\nFIND PCRE \`\\\\p\\{Lu\\}+\` IN str MATCH OFFSET FINAL(off) \\n MATCH LENGTH FINAL(len). \\nIF sy-subrc = 0. \\n final(offlen) = off + len. \\n cl\_demo\_output=>new( \\n )->write( str(off) \\n )->write( str+off(len) \\n )->write( str+offlen \\n )->display( ). \\nENDIF. DATA: \\n BEGIN OF struc, \\n a TYPE c LENGTH 3, "Length 3 characters \\n b TYPE n LENGTH 4, "Length 4 characters \\n c TYPE d, "Length 8 characters \\n d TYPE t, "Length 6 characters \\n e TYPE decfloat16, "Length 8 bytes \\n f TYPE c LENGTH 28, "Length 28 characters \\n g TYPE x LENGTH 2, "Length 2 bytes \\n END OF struc. \[ aaa | bbbb | cccccccc | ddd | AAA | eeee | fffffffffffff | gg \] \\n\[ F1 | F2 | F3 | F4 | F5 \] **Original Data Type** **Data Type of Substring** `c` `c` `n` `n` `d` `n` `t` `n` `string` `string` `x` `x` `xstring` `xstring` Structure type `c` abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html abenoperands\_names.html