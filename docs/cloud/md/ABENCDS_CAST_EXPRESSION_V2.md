---
title: "ABENCDS_CAST_EXPRESSION_V2"
description: |
  ABENCDS_CAST_EXPRESSION_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_CAST_EXPRESSION_V2.htm"
abapFile: "ABENCDS_CAST_EXPRESSION_V2.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENCDS", "CAST", "EXPRESSION"]
---

`... CAST( operand AS dtype [PRESERVING TYPE]) ...`

Casting in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The cast expression converts the value of the operand `operand` to the type specified by `dtype`. The result has the type `dtype`.

The following can be specified for `dtype`:

The following can be specified for `operand`:

Cast expressions can be specified in the [`SELECT` list](ABENCDS_SELECT_LIST_V2.html) and in operand positions of expressions.

The following table shows which combinations of built-in data types in ABAP Dictionary can currently be cast to each other and what the prerequisites are in each case. There is a special list of [conversion rules](ABENCDS_CAST_EXPRESSION_RULES_V2.html) for every combination.

There are no further restrictions to note in combinations with *x*. The following rules apply to the other combinations:

In the case of incompatible types, the content of the operand is converted to the target type (exceptions can be raised if values are not suitable). For compatible types, a syntax check warning occurs (unless the target data type is specified as a CDS user-defined type or as a data element using the addition `PRESERVING TYPE`).

If the operand of a cast expression has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of the expression is also the null value.

If the target type `dtype` is specified as `CURR` or `QUAN`, then a [`Semantics` reference annotation](ABENCDS_F1_ELEMENT_ANNOTATION.html) specifying a currency key or unit key is mandatory.

When casting to a [CDS enumerated type](ABENCDS_ENUM_TYPE_GLOSRY.html), the operand of the cast expression must be compatible with the [base type](ABENBASE_TYPE_GLOSRY.html) of the CDS enumerated type. The cast matrix and the conversion rules for casting apply with respect to the base type.

Cast expressions in a `SELECT` list.

In the following view entity, the column `char1` of the DDIC database table `DEMO_EXPRESSIONS` is cast to the simple type `DEMO_BT_CHAR_TEXT` with the same technical properties. In this case, it is advisable to specify the addition `PRESERVING TYPE`.

In the following view, a literal is given the technical and semantic properties of the simple type `DEMO_BT_MANDT`.

-   A [CDS user-defined type](ABENCDS_USER_DEFINED_TYPE_GLOSRY.html). In this case, the optional addition `PRESERVING TYPE` can be specified.
-   A [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html). In this case, the optional addition `PRESERVING TYPE` can be specified. If this addition is specified, the built-in data type, the length of the operand and the number of decimal places, and the target data type must match exactly.
-   A built-in data type from ABAP Dictionary. The addition `PRESERVING TYPE` cannot be specified in this case. All available data types are listed in the topic [ABAP CDS - Built-In Data Types](ABENCDS_OVERVIEW_BUILTIN_TYPES.html).

-   A [literal](ABENCDS_LITERAL_V2.html)
-   A [parameter](ABENCDS_PARAMETER_V2.html)
-   A [session variable](ABENCDS_SESSION_VARIABLE_V2.html)
-   A [field](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity
-   An [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)
-   A [path expression](ABENCDS_PATH_EXPRESSION_V2.html) that identifies a field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html)
-   A [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V2.html)
-   An [SQL-based scalar function](ABENCDS_SQL_SCALAR_FUNCTION.html)
-   An [arithmetic expression](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)
-   A [case distinction](ABENCDS_CASE_EXPRESSION_V2.html)
-   Another, nested, cast expression

-   In combinations with *y*, the length of the target data type must be sufficient.
-   In combinations with *z*, the lengths of the data types must match exactly.
-   In the case of combinations with *p* or *d*, a CDS user-defined type or a data element must be specified as the target data type. It is not possible to specify a built-in data type from ABAP Dictionary.

-   In combinations with *d*, the CDS user-defined type or the data element can have a suitable target type in accordance with the table above and with any length.
-   In combinations with *p*, the CDS user-defined type or the data element must have the built-in data type and the same length as the data type of the operand.

-   If a CDS user-defined type is specified for `dtype`, the result of the expression inherits the semantic properties of the CDS user-defined type in question.
-   If a data element is specified for `dtype`, the result of the expression inherits the semantic properties of the data element. An exception to this is the use of the `CAST` expression within a case distinction.
-   If `operand` and `dtype` have the same data type and the same length, a syntax check warning occurs. This syntax check warning can be suppressed using the addition `PRESERVING TYPE`. If `dtype` is a CDS type or a data element and the addition `PRESERVING TYPE` is not available, the warning can be ignored. It is currently not possible to suppress the warning.
-   If the addition `PRESERVING TYPE` is specified, the data type of the operand stays the same and only the semantic properties are changed.
-   The characters in the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html) of the [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html)\\ [UTF-16](ABENUTF16_GLOSRY.html) are handled as two characters in cast expressions for strings. Care should be taken to avoid splitting these characters in truncation operations.
-   When performing a conversion between [currency fields](ABENDDIC_CURRENCY_FIELD.html) with type `CURR`, it should be noted that `CAST` respects the decimal places defined for the type. In ABAP applications, on the other hand, the position of the decimal point is usually ignored.
-   A `CAST` expression should be platform-independent. Conversions from the type `FLTP` to other numeric types are not allowed because the result would be platform-dependent.
-   Special built-in [conversion functions](ABENCDS_CONVERSION_FUNCTIONS_V2.html) are available for conversions that cannot be covered by a `CAST` expression:

-   [`FLTP_TO_DEC`](ABENCDS_CONV_FUNC_TYPES_V2.html) for converting `FLTP` to packed numbers.
-   [`BINTOHEX`](ABENCDS_CONV_FUNC_TYPES_V2.html) and [`HEXTOBIN`](ABENCDS_CONV_FUNC_TYPES_V2.html) for conversions of byte strings to character strings and back.
-   [Conversion functions for units and currencies](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html)
-   [Conversion functions for dates, times, and time stamps](ABENCDS_DATE_TIME_CONVERSIONS_V2.html)

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_SALES\_CDS\_SO\_CAST\\n as select from\\n DEMO\_SALES\_CDS\_SO\\n association to DEMO\_SALES\_CDS\_SO\_I as \_item\\n on DEMO\_SALES\_CDS\_SO.so\_key = \_item.so\_item\_key\\n \\{\\n key so\_key,\\n currency\_sum,\\n @Semantics.amount.currencyCode: 'currency\_sum'\\n amount\_sum as original\_amount,\\n cast(amount\_sum as abap.fltp) -\\n (cast(amount\_sum as abap.fltp) \* 0.03) as reduced\_amount,\\n cast(amount\_sum as abap.fltp) \* 0.03 as overall\_savings,\\n \_item.currency,\\n \_item.posnr as item\_position,\\n @Semantics.amount.currencyCode: 'currency'\\n \_item.gross\_amount as item\_amount,\\n cast(\_item.gross\_amount as abap.fltp) \* 0.97 as item\_savings\\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_CAST\_SIMPLE\_TYPE\_VE\\n as select from demo\_expressions\\n\\{\\n cast ( char1 as DEMO\_BT\_CHAR\_TEXT preserving type)\\n as char\_with\_text\\n\\};\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_CAST\_CLNT\_VE\\n as select from scarr\\n\\{\\n key cast ( 'XXX' as s\_mandt ) as pseudo\_client,\\n key carrid,\\n carrname\\n\\}\\n **from/to** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`DATS`** **`TIMS`** **`DATN`** **`TIMN`** **`UTCLONG`** **`ACCP`** **`CLNT`** **`LANG`** **`UNIT`** **`CUKY`** **`RAW`** **`DF16_DEC`** **`DF34_DEC`**\\ **`INT1`** x x x x x x x x x x y y - - - - - - - x - - - - - - **`INT2`** x x x x x x x x x x y y - - - - - - - - - - - - - - **`INT4`** x x x x x x x x x x y y - - - - - - - - - - - - - - **`INT8`** x x x x x x x x x x y y - - - - - - - - - - - - - - **`DEC`** x x x x x x x x x x y y - - - - - - - - - - - - - - **`CURR`** x x x x x x x x x x y y - - - - - - - - - - - - - - **`QUAN`** x x x x x x x x x x y y - - - - - - - - - - - - - - **`DECFLOAT16`** x x x x x x x x x - x - - - - - - - - - - - - - - - **`DECFLOAT34`** x x x x x x x x x - x - - - - - - - - - - - - - - - **`DF16_DEC`** - - - - - - - x x - - - - - - - - - - - - - - - d - **`DF34_DEC`** - - - - - - - x x - - - - - - - - - - - - - - - - d **`FLTP`** x x x x x x x x x x - - - - - - - - - - - - - - - - **`CHAR`** x x x x x x x x x - x x x x x - - - p x x x x - - - **`SSTRING`** x x x x x x x x x - x x x x x - - - p x x x x - - - **`NUMC`** y y y y x x x x x x x x z z z - - - p z - - - - - - **`DATS`** x x x x x x x x x - x x - z - - - - - - - - - - - - **`TIMS`** x x x x x x x x x - x x - - z - - - - - - - - - - - **`DATN`** - - - - - - - - - - - - - - - x - - - - - - - - - - **`TIMN`** - - - - - - - - - - - - - - - - x - - - - - - - - - **`UTCLONG`** - - - - - - - - - - - - - - - - - x - - - - - - - - **`ACCP`** - - - - - - - - - - z z z - - - - - p - - - - - - - **`CLNT`** - - - - - - - - - - d d - - - - - - - p - - - - - - **`LANG`** - - - - - - - - - - d d - - - - - - - - p - - - - - **`UNIT`** - - - - - - - - - - d d - - - - - - - - - p - - - - **`CUKY`** - - - - - - - - - - d d - - - - - - - - - - p - - - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - p - - abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html