---
title: "ABENCDS_COALESCE_EXPRESSION_V2"
description: |
  ABENCDS_COALESCE_EXPRESSION_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COALESCE_EXPRESSION_V2.htm"
abapFile: "ABENCDS_COALESCE_EXPRESSION_V2.html"
keywords: ["select", "if", "case", "data", "types", "ABENCDS", "COALESCE", "EXPRESSION"]
---

`... COALESCE( arg1, arg2 ) ...`

[Coalesce function](ABENCOALESCE_GLOSRY.html) in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). Can be used to check whether `arg1` contains a [null value](ABENNULL_VALUE_GLOSRY.html). In ABAP CDS, the coalesce function has two mandatory [positional parameters](ABENPOSITIONAL_PARAMETER_GLOSRY.html) for arguments `arg1` and `arg2`. It checks whether `arg1` contains a null value. If yes, then it returns the value of `arg2`. If no, then it returns the value of `arg1`. If both `arg1` and `arg2` are null, then the null value is returned.

The following can be specified as the arguments `arg`:

The valid argument types for `arg1` and `arg2` are all [dictionary types](ABENDDIC_BUILTIN_TYPES.html) except `ACCP`, `DF16_DEC`, `DF34_DEC`, `DF16_RAW`, `DF34_RAW`, `LCHR`, `LRAW`, `PREC`, `RAWSTRING`, `STRING`, and `GEOM_EWKB`.

The data types of both arguments must either be the same or the data type of one argument must represent the value of the other data type. The result has the dictionary type of the argument with the largest value range.

The arguments of a coalesce function can be [CDS amount fields](ABENCDS_AMOUNT_FIELD_GLOSRY.html), [CDS quantity fields](ABENCDS_QUANTITY_GLOSRY.html), or [CDS calculated quantities](ABENCDS_CALCULATED_QUANTITY_GLOSRY.html). The following table shows how the result data type is calculated if one or more of the arguments are amount and/or quantity fields.

The coalesce function is a short form of the following [complex case distinction](ABENCDS_SEARCHED_CASE_EXPR_V2.html):

CASE WHEN arg1 IS NOT NULL THEN arg1 \\n     ELSE arg2 \\nEND

The following CDS view entity demonstrates the syntax of the coalesce function.

-   [Literals](ABENCDS_LITERAL_V2.html) of a suitable type.
-   Suitable [fields](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity.
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V2.html) that identify a suitable field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html).
-   [Input parameters](ABENCDS_PARAMETER_V2.html) from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V2.html).
-   [Reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`
-   [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html) (if they return a matching type)
-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](ABENCDS_SQL_FUNCTIONS_V2.html)
-   [Arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)
-   Type modifications using [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html)

-   If the result is an amount or quantity field, a reference annotation must be assigned.
-   It is not mandatory that the arguments and the result point to the same reference field.
-   The following rules apply to amount fields of data type `CURR`:

-   Fields of data type `CURR` are compatible only to other amount fields of data type `CURR` and only if they have exactly the same number of decimal places.
-   To combine an amount field of data type `CURR` with a field of another data type, a conversion to data type `DECFLOAT34` using the conversion function [`CURR_TO_DECFLOAT_AMOUNT`](ABENCDS_CONV_FUNC_UNIT_CURR_V2.html) is required.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_COALESCE \\nas select from demo\_ddic\_types \\n\\{\\n key id,\\n coalesce(int1, int2) as coalesced\\n\\}\\n **`arg1/arg2`** **Amount** **Quantity** **Calculated Quantity** **Number**\\ **Amount** Amount Calculated Quantity Calculated Quantity Calculated Quantity **Quantity** Calculated Quantity Quantity Calculated Quantity Calculated Quantity **Calculated Quantity** Calculated quantity Calculated quantity Calculated Quantity Calculated Quantity **Number** Calculated Quantity Calculated quantity Calculated Quantity Number abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_sql\_functions\_v2.html