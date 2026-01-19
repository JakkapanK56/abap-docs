---
title: "ABENCDS_SQL_FUNCTIONS_NUMERIC_V2"
description: |
  ABENCDS_SQL_FUNCTIONS_NUMERIC_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.htm"
abapFile: "ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html"
keywords: ["select", "if", "case", "class", "data", "types", "ABENCDS", "SQL", "FUNCTIONS", "NUMERIC"]
---

The following table shows the possible numeric [SQL functions](ABENSQL_FUNCTION_GLOSRY.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), plus the requirements made on the arguments.

The following can be specified as the arguments `arg`:

The following CDS view entity applies built-in numeric SQL functions in the `SELECT` list to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_CDS_SQL_FNCTNS_NUM_VE` uses `SELECT` to access the view.

-   [Literals](ABENCDS_LITERAL_V2.html) of a suitable type.
-   [Session variables](ABENCDS_SESSION_VARIABLE_V2.html) of a suitable type.
-   Suitable [fields](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity.
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V2.html) that identify a suitable field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html).
-   [Input parameters](ABENCDS_PARAMETER_V2.html) from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V2.html).
-   [Reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using `$projection`
-   [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html) (if they return a matching type)
-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](ABENCDS_SQL_FUNCTIONS_V2.html)
-   [Arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)
-   [Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)
-   Type modifications using [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html)
-   [Case distinctions](ABENCDS_CASE_EXPRESSION_V2.html) using `CASE`

-   The SQL functions [`DIV`](ABENSQL_FUNCTIONS_NUMERIC.html) and [`MOD`](ABENSQL_FUNCTIONS_NUMERIC.html) behave differently with respect to the signs than the ABAP operators [`DIV`](ABENARITH_OPERATORS.html) and [`MOD`](ABENARITH_OPERATORS.html). In the SQL function `DIV`, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of `MOD` can be negative, so that multiplying the result of `DIV` by `expr2` plus the result of `MOD` produces the value of `expr1`. The ABAP operator [`MOD`](ABENARITH_OPERATORS.html), on the other hand, only produces positive results. See [Example](ABENSQL_FUNCTIONS_NUMERIC.html).
-   Currently, `CURR` and `QUAN` cannot be used with minus sign.
-   This syntax is not valid: `ABS(-curr)`.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SQL\_FUNCTIONS\_NUM\_VE\\n as select from demo\_expressions\\n\\{\\n abs( num1 ) as r\_abs,\\n ceil( d34n1 ) as r\_ceil,\\n floor( d34n2 ) as r\_floor,\\n div( num1, num2 ) as r\_div,\\n mod( num1, num2 ) as r\_mod,\\n division( dec2, dec3, 3 ) as r\_division,\\n round( dec3, 2 ) as r\_round1,\\n round( dec3, -2 ) as r\_round2\\n\\}\\n **Function** **Result** **Valid Argument Types** **Result Type**\\ [`ABS(arg)`](ABENSQL_FUNCTIONS_NUMERIC.html) Absolute amount of `arg` [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`INT8`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html), [`FLTP`](ABENDDIC_BUILTIN_TYPES.html) Data type of `arg`\\ [`CEIL(arg)`](ABENSQL_FUNCTIONS_NUMERIC.html) Returns the first integer that is greater than or equal to the value of `arg` \\ [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html) Data type of `arg`\\ [`DIV(arg1, arg2)`](ABENSQL_FUNCTIONS_NUMERIC.html) The result of a division of `arg1` by `arg2` is rounded to an integer. The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have different signs. **Exception:**\\ `arg2` has the value 0. [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`INT8`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html). Data type of the argument with the greatest value range [`DIVISION(arg1, arg2, dec)`](ABENSQL_FUNCTIONS_NUMERIC.html) Division of `arg1` by `arg2`. The result is rounded to `dec` decimal places. \\ `arg1`, `arg2`: [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`INT8`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html) \\
\\
`dec`: integer [numeric literal](ABENCDS_LITERAL_V2.html) greater than or equal to 0. Length must be suitable so that the total of 31 valid places is not exceeded. [`DEC`](ABENDDIC_BUILTIN_TYPES.html) with `dec` decimal places. The length of the result must not be greater than 31. [`FLOOR(arg)`](ABENSQL_FUNCTIONS_NUMERIC.html) Returns the largest integer number not greater than the value of `arg`. Counterpart to `CEIL`. [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html) Data type of `arg`\\ [`MOD(arg1, arg2)`](ABENSQL_FUNCTIONS_NUMERIC.html) Positive or negative integer remainder of the division of `arg1` by `arg2`. \\ `arg1`: [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html),[`INT8`](ABENDDIC_BUILTIN_TYPES.html)\\
\\
`arg2`: [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html) Data type of `arg1`\\ [`ROUND(arg, pos)`](ABENSQL_FUNCTIONS_NUMERIC.html) Rounded value of `arg`. If `pos` is greater than 0, the value is rounded to the position `pos` on the right of the decimal separator. If this is not the case, position `abs(pos)`+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient. \\ `arg`: [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html), [`INT8`](ABENDDIC_BUILTIN_TYPES.html), [`DEC`](ABENDDIC_BUILTIN_TYPES.html), [`CURR`](ABENDDIC_BUILTIN_TYPES.html), [`QUAN`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT16`](ABENDDIC_BUILTIN_TYPES.html), [`DECFLOAT34`](ABENDDIC_BUILTIN_TYPES.html) \\
\\
`pos`: [Literal](ABENCDS_LITERAL_V2.html), field of a data source or [input parameter](ABENCDS_PARAMETER_V2.html) of type [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), or [`INT4`](ABENDDIC_BUILTIN_TYPES.html) When `arg` has data type `INT1`, `INT2`, or `INT4`, then the result has data type `INT4`. For all other data types, the result has the same data type as `arg`. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_sql\_functions\_v2.html