---
title: "ABENTYPING_GENERIC"
description: |
  ABENTYPING_GENERIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTYPING_GENERIC.htm"
abapFile: "ABENTYPING_GENERIC.html"
keywords: ["do", "if", "method", "data", "types", "internal-table", "field-symbol", "ABENTYPING", "GENERIC"]
---

[Short Reference](ABENTYPING_SHORTREF.html)

``... \{ TYPE [`generic_type`](ABENBUILT_IN_TYPES_GENERIC.html)\ \}\    |\ \{ LIKE <generic_fs>|generic_para \} ...``

To type a formal parameter or a field symbol generically, the following is possible:

When an actual parameter or memory area is assigned to a generically typed formal parameter or field symbol, the system [checks](ABENTYPING_CHECK.html) whether the specified data type is a subset of the generic type. The type of the formal parameter or field symbol is derived from the type of the actual parameter.

The formal parameter or field symbol can be used at any operand position that is not excluded by this typing. The following exceptions apply:

The type properties specified by the typing are used in static access to a generically typed formal parameter or field symbol. In dynamic access, the properties of the assigned actual parameter or memory area assigned apply.

If no actual parameter is specified for a generically typed optional formal parameter of a method or a function module when calling the procedure and no replacement parameter is defined in the procedure, the formal parameter is typed with a [standard type](ABENSTANDARD_TYPE_GLOSRY.html) in accordance with the following rules:

If a replacement parameter is specified, its type properties are applied.

In typing formal parameters with the generic type [`data`](ABENBUILT_IN_TYPES_GENERIC.html), it should be noted that no [numeric functions](ABENMATHEMATICAL_FUNKTION_GLOSRY.html), no [description functions](ABENDESCRIPTION_FUNCTION_GLOSRY.html), and no [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) can be passed to these parameters. This restriction can be bypassed by applying the [conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.html)\\ [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) to the actual parameter. This restriction does not apply to the generic type `any`.

In the following example, two generically typed field symbols are used in [`READ TABLE`](ABAPREAD_TABLE.html) statement. To avoid syntax errors, `<index_table>` must be typed as an index table. However, the system does not check until runtime for `<any_object>` whether the data object assigned to it matches the line type of the table.

-   specify any generic ABAP type [`generic_type`](ABENBUILT_IN_TYPES_GENERIC.html) (except `object`) after `TYPE`.
-   specify a field symbol visible at this position (`<generic_fs>`) or a formal parameter (`generic_para`) with generic typing, after `LIKE`. The typing defined in the declaration of the field symbol/parameter is applied. In method parameters, all generic typing is possible. No complete generic typing is possible in parameters of subroutines and field symbols.

-   [Operand positions](ABENOPERAND_POSITION_GLOSRY.html) that expect internal tables. Here, only formal parameters or field symbols typed as internal table types of the corresponding table category are allowed.
-   [Read positions](ABENREAD_POSITION_GLOSRY.html) in which a statically recognizable [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) is expected, such as the source field of an assignment to an [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html), or an operand in a comparison with an enumerated object. Only operands with the same [enumerated type](ABENENUM_TYPE_GLOSRY.html) are allowed here. In [write positions](ABENWRITE_POSITION_GLOSRY.html), however, generic formal parameters or field symbols are allowed for enumerated types. If the operand type is not known statically, the check is also only made at runtime in read positions.

-   `any` and `data` are converted to the type `c` with length 4.
-   `c`, `clike`, `csequence`, and `simple` are converted to the type `c` with length 1.
-   `n` is converted to the type `n` with length 1.
-   `numeric` and `p` are converted to the type `p` with length 8 without decimal places.
-   `x` and `xsequence` are converted to the type `x` with length 1.
-   `ANY TABLE` and `INDEX TABLE` are converted to `STANDARD TABLE`.
-   For `ANY TABLE`, `INDEX TABLE`, `[STANDARD] TABLE`\\ `SORTED TABLE`, and `HASHED TABLE`, the line type is set to `c` with length 1.
-   For generic table types without specification of a primary table key, the standard key is added for standard tables and the entire table line, except for any table-like parts, is added as the key specification for sorted tables and hashed tables.
-   For generic table types, for which the primary table key is specified but uniqueness is not specified, the standard key is set to non-unique for standard tables and sorted tables, and to unique for hashed tables.
-   This generic property is ignored for table types that are generic with respect to the secondary table key. This applies even if the generic property was defined explicitly with the addition [`WITH FURTHER SECONDARY KEYS`](ABAPTYPES_KEYDEF.html).

FIELD-SYMBOLS: TYPE any, \\n TYPE index table. \\n\\ \\n... \\n\\ \\nREAD TABLE INDEX 1 \\n INTO . abenabap.html abenabap\_reference.html abendeclarations.html abentyping.html abentyping\_syntax.html