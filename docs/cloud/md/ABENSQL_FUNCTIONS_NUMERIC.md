---
title: "ABENSQL_FUNCTIONS_NUMERIC"
description: |
  ABENSQL_FUNCTIONS_NUMERIC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_FUNCTIONS_NUMERIC.htm"
abapFile: "ABENSQL_FUNCTIONS_NUMERIC.html"
keywords: ["do", "while", "if", "data", "types", "ABENSQL", "FUNCTIONS", "NUMERIC"]
---

The following table shows the numeric SQL functions that can be used by [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html). The columns **ABAP CDS DDIC-Based Views**, **ABAP CDS View Entities**, and **ABAP SQL** indicate where a function can be used. The **ABAP SQL In-Memory Engine** column indicates whether the function can be executed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html).

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html), [ABAP CDS, View Entities](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html) and [ABAP SQL](ABENSQL_ARITH_FUNC.html).

The following table shows the results of integer divisions and their integer remainders in SQL. See also the example for the ABAP operators [`DIV`](ABENARITH_OPERATORS.html) and [`MOD`](ABENARITH_OPERATORS.html).

-   The SQL functions [`DIV`](ABENSQL_FUNCTIONS_NUMERIC.html) and [`MOD`](ABENSQL_FUNCTIONS_NUMERIC.html) behave differently with respect to the signs than the ABAP operators [`DIV`](ABENARITH_OPERATORS.html) and [`MOD`](ABENARITH_OPERATORS.html). In the SQL function `DIV`, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of `MOD` can be negative, so that multiplying the result of `DIV` by `expr2` plus the result of `MOD` produces the value of `expr1`. The ABAP operator [`MOD`](ABENARITH_OPERATORS.html), on the other hand, only produces positive results.
-   If a `CHAR` field of variable length is used as an argument in the SQL function `GREATEST` or `LEAST`, the inferred type has the maximum length.
-   The SQL function `GREATEST` must not be confused with the aggregate function [`MAX`](ABENSQL_AGG_FUNC.html) and the SQL function `LEAST` must not be confused with the aggregate function [`MIN`](ABENSQL_AGG_FUNC.html). While `MAX` and `MIN` determine the maximum and minimal value of a SQL expression in a row set, `GREATEST` and `LEAST` determine the largest and smallest value of a set of arguments in a row set.

**SQL Function** **Result** **CDS DDIC-Based Views** **CDS View Entities** \\ **ABAP SQL** **ABAP SQL In-Memory Engine**\\ `ABS` Absolute value of argument. [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html) \\ [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html)\\ [x](ABENSQL_ARITH_FUNC.html) [x](ABENSQL_ENGINE_EXPR.html)\\ `CEIL` Rounds an argument to the first integer that is greater than or equal to the value of the argument. [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html) \\ [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html)\\ [x](ABENSQL_ARITH_FUNC.html) [x](ABENSQL_ENGINE_EXPR.html)\\ `DIV` Division of two arguments. The result is rounded to an integer. [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html) \\ [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html)\\ [x](ABENSQL_ARITH_FUNC.html) [x](ABENSQL_ENGINE_EXPR.html)\\ `DIVISION` Division of two arguments. The result is rounded to specified decimal places. [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html) \\ [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html)\\ [x](ABENSQL_ARITH_FUNC.html) - `FLOOR` Largest integer number not greater than the value of the argument. [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html) \\ [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html)\\ [x](ABENSQL_ARITH_FUNC.html) [x](ABENSQL_ENGINE_EXPR.html)\\ `GREATEST` Largest value of a set of arguments. - - \\ [x](ABENSQL_ARITH_FUNC.html) - `LEAST` Smallest value of a set of arguments. - - \\ [x](ABENSQL_ARITH_FUNC.html) - `MOD` Positive or negative integer remainder of the division of two arguments. [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html) \\ [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html)\\ [x](ABENSQL_ARITH_FUNC.html) [x](ABENSQL_ENGINE_EXPR.html)\\ `ROUND` Rounded value of an argument. [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V1.html) \\ [x](ABENCDS_SQL_FUNCTIONS_NUMERIC_V2.html)\\ [x](ABENSQL_ARITH_FUNC.html) - `expr1` `expr2` `DIV` `MOD` 7 3 2 1 -7 3 -2 -1 7 -3 -2 1 -7 -3 2 -1 abenabap.html abenabap\_dictionary.html abenddic\_builtin\_functions.html abensql\_functions.html