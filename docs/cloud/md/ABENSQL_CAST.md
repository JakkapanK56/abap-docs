---
title: "ABENSQL_CAST"
description: |
  ABENSQL_CAST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_CAST.htm"
abapFile: "ABENSQL_CAST.html"
keywords: ["select", "insert", "delete", "if", "case", "data", "types", "internal-table", "ABENSQL", "CAST"]
---

`... CAST( sql_exp AS dtype ) ...`

Type adjustment in ABAP SQL. A cast expression [converts](ABENSQL_CAST_RULES.html) the value of the operand `sql_exp` to the dictionary type specified by `dtype`. SQL expressions, which have a type that matches `dtype` as shown below, can be used as an operand `sql_exp`. The result is a representation of the source value in type `dtype`.

[Built-in data types](ABENDDIC_BUILTIN_TYPES.html) in the ABAP Dictionary with the following syntax can be specified for `dtype`:

`len` and `decimals` can be used to specify lengths and decimal places for those dictionary types that have variable lengths and decimal places. [Literals](ABENABAP_SQL_LITERALS.html) or [host constants](ABENABAP_SQL_HOST_VARIABLES.html) of the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` can be specified for `len` and `decimals`. If no lengths or decimal places are specified for these types, these values are taken from the result of the specified SQL expression `sql_exp`. In both cases, the lengths and decimal places must meet the requirements of the following table. If the operand `NULL` is cast, the length of dictionary types that have a variable length must be specified.

The following table shows which combinations of built-in data types in the ABAP Dictionary can currently be cast to each other and the corresponding prerequisites. There is a special list of [conversion rules](ABENSQL_CAST_RULES.html) for every combination.

There are no further restrictions for combinations using `x`. The following prerequisites apply to the other combinations:

These prerequisites are checked by the ABAP SQL parser.

In the case of incompatible types, the content of the operand is [converted](ABENSQL_CAST_RULES.html) to the target type. Exceptions can be raised if values are not suitable. If the operand of the expression has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of the expression is also the null value.

When casting to a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html), the operand of the cast expression must be compatible with the [base type](ABENBASE_TYPE_GLOSRY.html) of the CDS enumerated type. The cast matrix and the conversion rules for casting apply with respect to the base type.

The following [`SELECT` list](ABAPSELECT_LIST.html) splits an UTC [time stamp in a packed number](ABENTIME_STAMPS_PACKED.html) into its date part and its time part. This requires multiple `CAST` expressions to create a suitable type in every operand position.

[SQL Expressions, Cast Expression](ABENSQL_EXPR_CAST_ABEXA.html)

The following [`SELECT` list](ABAPSELECT_LIST.html) casts a CDS [enumerated constant](ABENENUMERATED_CONSTANT_GLOSRY.html) to the data type `INT1`. The [enumerated value](ABENENUMERATED_VALUE_GLOSRY.html) 2 is returned.

-   Numeric types

-   `INT1`
-   `INT2`
-   `INT4`
-   `INT8`
-   `DEC[( len[, decimals] )]`
-   `D16N` for `DECFLOAT16`
-   `D34N` for `DECFLOAT34`
-   `FLTP`

-   Character-like types

-   `CHAR[( len )]`
-   `SSTRING[( len )]`

-   Byte-like types

-   `RAW [( len )]`

-   Date types/time types

-   `DATS`
-   `TIMS`
-   `DATN`
-   `TIMN`
-   `UTCL` for `UTCLONG`

-   Character-like types with special semantics

-   `NUMC[( len )]`
-   `CLNT`
-   `LANG`

-   Currency fields and quantity fields

-   `CURR[( len[, decimals] )]`
-   `CUKY`
-   `QUAN[( len[, decimals] )]`
-   `UNIT( 2|3 )`

-   For combinations with `y`, the initial length cannot be less than the target length.
-   For combinations with `z`, the target length must be sufficient to represent the value in the source.
-   For combinations with `c`, the initial length and target length must be equal.

-   Specifying a cast expression always means specifying an [SQL expression](ABAPSQL_EXPR.html). Cast expressions can only be specified for operand positions in which SQL expressions are possible.
-   Type modifications can be used in operand positions of ABAP SQL statements to convert operands without a suitable type to an operand with a suitable type.
-   `CAST` expressions are platform-independent with one exception: For conversions from the type `FLTP` to other numeric types the result is platform-dependent.
-   For conversions from the type `FLTP` to other types, rounding errors might occur. For conversions to character types depending on the value either the [mathematical](ABENMATHEMATICAL_NOTATION_GLOSRY.html) or [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html) is generated and the case of the exponent character is not fixed. Converting back such a character representation to a floating data type always produces the original value.
-   For the missing combinations of type modifications that cannot be covered by a `CAST` expression, construction operators such as `CONV` can be used in [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html), at least for literals and host variables. There are also built-in [conversion functions](ABENABAP_SQL_CONVERSION_FUNCTIONS.html) for special conversions:

-   [`BINTOHEX`](ABENSQL_TYPE_CONV_FUNC.html) and [`HEXTOBIN`](ABENSQL_TYPE_CONV_FUNC.html) for conversions of byte strings to character strings and vice versa.

-   A cast expression cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The [table buffer](ABENTABLE_BUFFER_GLOSRY.html) is bypassed and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

FINAL(timestamp) = \\n cl\_abap\_tstmp=>utclong2tstmp\_short( utclong\_current( ) ). \\nDELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( \\n VALUE #( id = 'X' timestamp1 = timestamp ) ). \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS CAST( CAST( div( timestamp1, 1000000 ) \\n AS CHAR ) \\n AS DATS ) AS date, \\n CAST( substring( CAST( timestamp1 \\n AS CHAR ), 9, 6 ) \\n AS TIMS ) AS time \\n INTO @FINAL(wa). \\n\\ \\ncl\_demo\_output=>display( wa ). DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = 1 ) \\n ( id = 2 ) ) ). \\n\\ \\nSELECT FROM demo\_cds\_enum\_type\_usage\_1 \\n FIELDS Id, \\n CAST( @demo\_cds\_enum\_weekday-wed AS INT1 ) AS CastEnum \\n INTO TABLE @FINAL(result). \\ncl\_demo\_output=>display( result ). **from/to** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`DATS`** **`TIMS`** **`DATN`** **`TIMN`** **`UTCLONG`** **`CLNT`** **`LANG`** **`UNIT`** **`CUKY`** **`RAW`**\\ **`INT1`** x x x x x x x x x x z z - - - - - - - - - - - **`INT2`** x x x x x x x x x x z z - - - - - - - - - - - **`INT4`** x x x x x x x x x x z z - - - - - - - - - - - **`INT8`** x x x x x x x x x x z z - - - - - - - - - - - **`DEC`** x x x x x x x x x x z z - - - - - - - - - - - **`CURR`** x x x x x x x x x x z z - - - - - - - - - - - **`QUAN`** x x x x x x x x x x z z - - - - - - - - - - - **`DECFLOAT16`** x x x x x x x x x x z z - - - - - - - - - - - **`DECFLOAT34`** x x x x x x x x x x z z - - - - - - - - - - - **`DF16_DEC`** x x x x - - - x x x - - - - - - - - - - - - - **`DF34_DEC`** x x x x - - - x x x - - - - - - - - - - - - - **`FLTP`** x x x x x x x x x x z z - - - - - - - - - - - **`CHAR`** x x x x x x x x x x x x y y y - - - y y c y - **`SSTRING`** x x x x x x x x x x x x y y y - - - y y c y - **`NUMC`** x x x x x x x x x x y y y y y - - - y - - - - **`DATS`** x x x x x x x x x x x x y x - x - - - - - - - **`TIMS`** x x x x x x x x x x x x y - x - x - - - - - - **`DATN`** - - - - - - - - - - - - - x - x - - - - - - - **`TIMN`** - - - - - - - - - - - - - - x - x - - - - - - **`UTCLONG`** - - - - - - - - - - - - - - - - - x - - - - - **`CLNT`** - - - - - - - - - - x x y - - - - - x - - - - **`LANG`** - - - - - - - - - - x x - - - - - - - x - - - **`UNIT`** - - - - - - - - - - x x - - - - - - - - x - - **`CUKY`** - - - - - - - - - - x x - - - - - - - - - x - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - c abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html