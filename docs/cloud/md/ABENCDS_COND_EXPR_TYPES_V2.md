---
title: "ABENCDS_COND_EXPR_TYPES_V2"
description: |
  ABENCDS_COND_EXPR_TYPES_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_TYPES_V2.htm"
abapFile: "ABENCDS_COND_EXPR_TYPES_V2.html"
keywords: ["select", "do", "if", "data", "types", "ABENCDS", "COND", "EXPR", "TYPES"]
---

The following tables show which [built-in data types](ABENDDIC_BUILTIN_TYPES.html) in ABAP Dictionary can be compared with each other in a [condition](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

The following table shows the possible combinations of data source fields on the left side (`lhs`) with data source fields on the right side (`rhs`) of comparisons.

The following table shows the possible combinations of data source fields on the left side (`lhs`) with parameters on the right side (`rhs`) of comparisons.

The following table shows the possible combinations of data source fields on the left side (`lhs`) with literals on the right side (`rhs`) of comparisons. The literals can be [typed](ABENCDS_TYPED_LITERAL_V2.html) or [untyped](ABENCDS_UNTYPED_LITERAL_V2.html). It is recommended that only typed literals are used, because they offer more data types. With typed literals, the data types shown in the table are possible.

If one of the operands `lhs` or `rhs` of a comparison is a [CDS amount field](ABENCDS_AMOUNT_FIELD_GLOSRY.html), a [CDS quantity field](ABENCDS_QUANTITY_GLOSRY.html), or a [CDS calculated quantity](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html), special rules apply:

The following table shows the possible combinations of operands in comparisons. `Number` refers to an operand of a numeric data type without reference annotation that turns it into an amount or quantity field.

Undesirable comparisons of operands with references of different types result in a syntax check warning. There is no syntax check error to ensure downward compatibility.

The exception that amounts, quantities, and calculated quantities can be compared with a number if the number is specified as literal is in place to ensure downward compatibility.

-   There are no restrictions for combinations using *x*.
-   In combinations using *l*, the lengths of the compared columns must match exactly.
-   For combinations using *m*, the length is relevant: the field of type `NUMC` can have the same lengths or fewer characters than the field of type `CHAR`. If the field of type `NUMC` is longer than the field of type `CHAR`, a syntax error occurs.
-   For combinations using *d*, the number of decimal places must match exactly.

-   **Note** Operands of data type `CURR` can be cast to data type `DECFLOAT34` using the conversion function [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) to avoid length requirements.

-   For combinations using *a*, both operands must be specified as [ABAP CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html) by adding a reference to a [unit of measurement key](ABENUNIT_GLOSRY.html) using the annotation [`@Semantics.quantity.unitOfMeasure`](ABENCDS_F1_ELEMENT_ANNOTATION.html). Otherwise, a syntax check warning occurs.

-   **Note** You can use the conversion function [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) to turn quantity fields into regular fields of data type `DECFLOAT34`.

-   There are no restrictions for combinations using *x*.
-   In combinations using *l*, the lengths of the compared operands must match exactly.
-   For combinations using *m*, the length is relevant: the field of type `NUMC` can have the same lengths or less characters than the field of type `CHAR`. If the field of type `NUMC` is longer than the field of type `CHAR`, a syntax error occurs.
-   For combinations using *d*, the number of decimal places must match exactly.

-   **Note** Operands of data type `CURR` can be cast to data type `DECFLOAT34` using the conversion function [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) to avoid this length requirement.

-   There are no restrictions for combinations using *x*.
-   For combinations using *y*, the literal value must be within the value range of the respective type. That means:

-   For a comparison with `INT1`, the literal value must be between 0 and 255.
-   For a comparison with `INT2`, the literal value must be between -32,768 and +32,767.
-   For a comparison with `INT4`, the literal value must be between -2,147,483,648 and +2,147,483,647.
-   For a comparison with `INT8`, the literal value must be between -9,223,372,036,854,775,808 and +9,223,372,036,854,775,807.

-   For combinations using *m*, the length of the literal cannot be greater than the column.
-   For combinations using *d*, the length of the literal and the number of decimal places cannot be greater than the length and number for the column.
-   For combinations using *l*, the length of the literal must be equal to the length of the column.
-   If the literal on the right side (`rhs`) is of data type `CURR`, it must have exactly two decimal places. Since the number of decimal places of `rhs` and `lhs` must match exactly, `lhs` must also have exactly two decimal places. The conversion functions [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) and [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) can be used to avoid this length requirement.

-   Both operands `lhs` and `rhs` must have the same reference type. Both must be either amounts, or quantities, or calculated quantities. Comparing operands with references of different types ([currency key](ABENCURRENCY_KEY_GLOSRY.html), [unit key](ABENUNIT_GLOSRY.html), or [calculated unit](ABENCDS_CALCULATED_UNIT_GLOSRY.html)) results in a syntax check warning.
-   An operand of type `CURR` can only be compared with another operand of type `CURR`. The number of decimal places of both operands must match exactly.

-   **Exception:** If `lhs` has data type `CURR` and `rhs` is specified as literal, the following data types are possible for `rhs`: `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `CURR`, `QUAN`, `FLTP`, `DECFLOAT16`, `DECFLOAT34`.

-   Two conversion functions are available to circumvent limitations:

-   [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) converts an amount field of type `CURR` to an amount field of type `DECFLOAT34`.
-   [`GET_NUMERIC_VALUE`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) convert amounts and quantities into regular fields.

-   **Caution** In the [`ON` condition of a CDS association](ABENCDS_SIMPLE_ASSOCIATION_V2.html), these two conversion functions are not available, since functions in general are not supported in the `ON` condition of a CDS association.

**lhs/rhs** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`CLNT`** **`LANG`** **`DATS`** **`TIMS`** **`DATN`** **`TIMN`** **`UTCLONG`** **`ACCP`** **`UNIT`** **`CUKY`** **`RAW`**\\ **`INT1`** x x x x x - a x x x - - - - - - - - - - - - - - **`INT2`** x x x x x - a x x x - - - - - - - - - - - - - - **`INT4`** x x x x x - a x x x - - - - - - - - - - - - - - **`INT8`** x x x x x - a x x x - - - - - - - - - - - - - - **`DEC`** x x x x x - a x x x - - - - - - - - - - - - - - **`CURR`** - - - - - d - - - - - - - - - - - - - - - - - - **`QUAN`** a a a - a - a a a a - - - - - - - - - - - - - - **`DECFLOAT16`** x x x x x - a x x x - - - - - - - - - - - - - - **`DECFLOAT34`** x x x x x - a x x x - - - - - - - - - - - - - - **`FLTP`** x x x x x - a x x x - - - - - - - - - - - - - - **`CHAR`** - - - - - - - - - - x x m l x x x - - - x x x - **`SSTRING`** - - - - - - - - - - x x - - x - - - - - x x x - **`NUMC`** - - - - - - - - - - m - l l - l l - - - - - - - **`CLNT`** - - - - - - - - - - l - l x - - - - - - - - - - **`LANG`** - - - - - - - - - - x x - - x - - - - - - - - - **`DATS`** - - - - - - - - - - x - l - - x - - - - - - - - **`TIMS`** - - - - - - - - - - x - l - - - x - - - - - - - **`DATN`** - - - - - - - - - - - - - - - - - x - - - - - - **`TIMN`** - - - - - - - - - - - - - - - - - - x - - - - - **`UTCLONG`** - - - - - - - - - - - - - - - - - - - x - - - - **`ACCP`** - - - - - - - - - - x x - - - - - - - - x - - - **`UNIT`** - - - - - - - - - - x x - - - - - - - - - x - - **`CUKY`** - - - - - - - - - - x x - - - - - - - - - - x - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - l **lhs/rhs** **`INT1`** **`INT2`** **`INT4`** **`INT8`** **`DEC`** **`CURR`** **`QUAN`** **`DECFLOAT16`** **`DECFLOAT34`** **`FLTP`** **`CHAR`** **`SSTRING`** **`NUMC`** **`CLNT`** **`LANG`** **`DATS`** **`TIMS`** **`DATN`** **`TIMN`** **`UTCLONG`** **`ACCP`** **`UNIT`** **`CUKY`** **`RAW`**\\ **`INT1`** x x x x x - x x x x - - - - - - - - - - - - - - **`INT2`** x x x x x - x x x x - - - - - - - - - - - - - - **`INT4`** x x x x x - x x x x - - - - - - - - - - - - - - **`INT8`** x x x x x - x x x x - - - - - - - - - - - - - - **`DEC`** x x x x x - x x x x - - - - - - - - - - - - - - **`CURR`** - - - - - d - - - - - - - - - - - - - - - - - - **`QUAN`** - - - - - - x - - - - - - - - - - - - - - - - - **`DECFLOAT16`** x x x x x - x x x x - - - - - - - - - - - - - - **`DECFLOAT34`** x x x x x - x x x x - - - - - - - - - - - - - - **`FLTP`** x x x x x - x x x x - - - - - - - - - - - - - - **`CHAR`** - - - - - - - - - - x x m l x x x - - - - x x - **`SSTRING`** - - - - - - - - - - x x - - x - - - - - - x x - **`NUMC`** - - - - - - - - - - m - l l - l l - - - - - - - **`CLNT`** - - - - - - - - - - l - l x - - - - - - - - - - **`LANG`** - - - - - - - - - - x x - - x - - - - - - - - - **`DATS`** - - - - - - - - - - x - l - - x - - - - - - - - **`TIMS`** - - - - - - - - - - x - l - - - x - - - - - - - **`DATN`** - - - - - - - - - - - - - - - - - x - - - - - - **`TIMN`** - - - - - - - - - - - - - - - - - - x - - - - - **`UTCLONG`** - - - - - - - - - - - - - - - - - - - x - - - - **`ACCP`** - - - - - - - - - - x x - - - - - - - - - - - - **`UNIT`** - - - - - - - - - - x x - - - - - - - - - x - - **`CUKY`** - - - - - - - - - - x x - - - - - - -- - - x - **`RAW`** - - - - - - - - - - - - - - - - - - - - - - - l **lhs/rhs** **`INT1`** **`INT2`** **`INT4`** **`INT8`** \\ **`DEC`** **`CURR`** **`QUAN`** \\ **`FLTP`** **`CHAR`** **`NUMC`** **`RAW`** **`DATS`** \\ **`TIMS`** **`DATN`** **`TIMN`** \\ **`UTCL`** \\ **`DECFLOAT16`** **`DECFLOAT34`**\\ **`INT1`** y y y y y - y y - - - - - - - - y y **`INT2`** x y y y y - y y - - - - - - - - y y **`INT4`** x x y y y - y y - - - - - - - - y y **`INT8`** x x x y y - y y - - - - - - - - y y **`DEC`** x x x x d - d d - - - - - - - - m m **`CURR`** m m m m d d d d - - - - - - - - m m **`QUAN`** m m m m d - d d - - - - - - - - m m **`DECFLOAT16`** x x x x x - x x - - - - - - - - x x **`DECFLOAT34`** x x x x x - x x - - - - - - - - x x **`FLTP`** x x x x x - x x - - - - - - - - x x **`CHAR`** - - - - - - - - m m - - - - - - - - **`SSTRING`** - - - - - - - - m - - - - - - - - - **`NUMC`** - - - - - - - - l l - - - - - - - - **`CLNT`** - - - - - - - - l l - - - - - - - - **`LANG`** - - - - - - - - l l - - - - - - - - **`DATS`** - - - - - - - - - l - x - - - - - - **`TIMS`** - - - - - - - - - l - - x - - - - - **`DATN`** - - - - - - - - - - - - - x - - - - **`TIMN`** - - - - - - - - - - - - - - x - - - **`UTCL`** - - - - - - - - - - - - - - - x - - **`ACCP`** - - - - - - - - - l - - - - - - - - **`UNIT`** - - - - - - - - m - - - - - - - - - **`CUKY`** - - - - - - - - m - - - - - - - - - **`RAW`** - - - - - - - - - - l - - - - - - - **Type of Operand** **Comment**\\ amount, number syntax check warning \\
**Exception:**: If `number` is specified as literal, no syntax check warning occurs. amount, amount OK. Elements of data type `CURR` must have exactly the same number of decimal places. quantity, number syntax check warning \\
**Exception:** If `number` is specified as literal, no syntax check warning occurs. quantity, quantity OK amount, quantity syntax check warning amount, calculated quantity syntax check warning quantity, calculated quantity syntax check warning calculated quantity, number syntax check warning \\
**Exception:** If `number` is specified as literal, no syntax check warning occurs. calculated quantity, calculated quantity OK abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_conditional\_expression\_v2.html abencds\_cond\_expr\_comp\_v2.html