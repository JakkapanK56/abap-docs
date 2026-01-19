---
title: "ABENSQL_ARITH_FUNC"
description: |
  ABENSQL_ARITH_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_ARITH_FUNC.htm"
abapFile: "ABENSQL_ARITH_FUNC.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENSQL", "ARITH", "FUNC"]
---

`... func( arg1[, arg2] ... ) ...`

Calls an numeric function `func` as an [SQL expression](ABAPSQL_EXPR.html) or operand of an expression in ABAP SQL. The arguments `arg1`, `arg2`, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

The following table shows the numeric functions that can be specified as SQL expressions and the requirements on the arguments. The meaning of the functions can be found under [SQL Functions for Numeric Values](ABENSQL_FUNCTIONS_NUMERIC.html). The value *x* in the ABAP SQL In-Memory Engine column indicates that the function can be executed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) and that the use of [this function](ABENSQL_ENGINE_EXPR.html) does not bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) does not cause the transport of an internal table accessed with [`FROM @itab`](ABAPSELECT_ITAB.html) to the database.

The arguments `sql_exp`, `sql_exp1`, `sql_exp3`, and `pos` can be any [SQL expressions](ABAPSQL_EXPR.html) with the appropriate data types. The possible types are specified as built-in [dictionary types](ABENDDIC_BUILTIN_TYPES.html). The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](ABENDDIC_BUILTIN_TYPES.html) to the dictionary types above.

If an argument of a numeric function has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of the full numeric function is the null value.

The SQL functions [`DIV`](ABENSQL_FUNCTIONS_NUMERIC.html) and [`MOD`](ABENSQL_FUNCTIONS_NUMERIC.html) behave differently with respect to the signs than the ABAP operators [`DIV`](ABENARITH_OPERATORS.html) and [`MOD`](ABENARITH_OPERATORS.html). In the SQL function `DIV`, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of `MOD` can be negative, so that multiplying the result of `DIV` by `expr2` plus the result of `MOD` produces the value of `expr1`. The ABAP operator [`MOD`](ABENARITH_OPERATORS.html), on the other hand, only produces positive results. See [Example](ABENSQL_FUNCTIONS_NUMERIC.html).

Conversion of flight time from minutes to hours. Round distance with...

[SQL Expressions, Arithmetic Calculations](ABENSQL_EXPR_ARITH_ABEXA.html)

SELECT FROM spfli \\n FIELDS carrid, \\n connid, \\n division( fltime,60,2 ) AS fltime, \\n round( distance, NULL ) AS distance \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). **Syntax** **Result** **Valid Argument Types** **Result Type** **ABAP SQL In-Memory Engine** [`ABS( sql_exp )`](ABENSQL_FUNCTIONS_NUMERIC.html) Absolute amount of `sql_exp` All numeric types except the [replacement types for decimal floating point numbers](ABENDDIC_DECIMAL_FLOATING_POINT.html)\\ Type of the argument. x [`CEIL( sql_exp )`](ABENSQL_FUNCTIONS_NUMERIC.html) Rounded to the first integer that is greater than or equal to the value of `sql_exp` `DECFLOAT16` and `DECFLOAT34` as well as `DEC`, `CURR`, and `QUAN` with decimal places `DEC(MIN(p-s+1,31),0)` for `DEC(p,s)` argument. \\
\\
Respective decimal floating point type for decimal floating point argument. x [`DIV( sql_exp1,sql_exp2 )`](ABENSQL_FUNCTIONS_NUMERIC.html) The result of a division of `sql_exp1` by `sql_exp2` is rounded to an integer. The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have the same sign, and negative if the arguments have different signs. **Exception:**\\ `sql_exp2` has the value 0. `INT1`, `INT2`, `INT4`, and `INT8` plus `DEC`, `CURR`, and `QUAN` without decimal places Type of the argument with the greatest value range for integer types. \\
\\
For expressions involving `DEC` types, `DEC` without decimal places that can contain the largest possible result for the first argument. x [`DIVISION( sql_exp1,sql_exp2,dec )`](ABENSQL_FUNCTIONS_NUMERIC.html) Division of `sql_exp1` by `sql_exp2`. The result is rounded to `dec` decimal places. `sql_exp1`, `sql_exp2`: `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `CURR`, and `QUAN`\\
\\
`dec`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, `int8` greater than or equal to 0 and not greater than the maximum value of 6 and the length of `sql_exp2` plus the number of decimal places of `sql_exp1` plus 1 `DEC` with `dec` decimal places. The length of the result is the length of `sql_exp1` minus the decimal places in `sql_exp1` plus the decimal places in `sql_exp2` plus `dec`. This value must not be greater than 31. - [`FLOOR( sql_exp )`](ABENSQL_FUNCTIONS_NUMERIC.html) Largest integer number not greater than the value of `sql_exp`\\ `DECFLOAT16` and `DECFLOAT34` as well as `DEC`, `CURR`, and `QUAN` with decimal places `DEC(MIN(p-s+1,31),0)` for `DEC(p,s)` argument. \\
\\
Respective decimal floating point type for decimal floating point argument. x [`MOD( sql_exp1,sql_exp2 )`](ABENSQL_FUNCTIONS_NUMERIC.html) Positive or negative integer remainder of the division of `sql_exp1` by `sql_exp2`\\ `INT1`, `INT2`, `INT4`, and `INT8` plus `DEC`, `CURR`, and `QUAN` without decimal places Type of the argument with the greatest value range. x [`ROUND( sql_exp,pos )`](ABENSQL_FUNCTIONS_NUMERIC.html) Rounded value of `sql_exp`. If `pos` is greater than 0, the value is rounded to the position `pos` on the right of the decimal separator. If this is not the case, position `abs(pos)`+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient. `sql_exp`: `INT1`, `INT2`, `INT4`, `INT8`, `DEC`, `DECFLOAT16`, `DECFLOAT34`, `CURR`, and `QUAN` \\
\\
`pos`: `INT1`, `INT2`, `INT4`, and [null expression](ABENSQL_NULL.html) Type of `sql_exp`, where `INT1` and `INT2` are converted to `INT4`, and `CURR` and `QUAN` are converted to `DEC`. \\
\\
`DEC(MIN(p-s+1,31),0)` for a `DEC(p,s)` argument. - abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html