---
title: "ABENSQL_SIMPLE_CASE"
description: |
  ABENSQL_SIMPLE_CASE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_SIMPLE_CASE.htm"
abapFile: "ABENSQL_SIMPLE_CASE.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENSQL", "SIMPLE", "CASE"]
---

`... CASE sql_exp           WHEN sql_exp1 THEN result1          [WHEN sql_exp2 THEN result2]\           ...          [ELSE resultn|sql_null]\      END ...`

[Simple case distinction](ABENSIMPLE_CASE_GLOSRY.html) (simple case) in ABAP SQL. This SQL expression compares the values of the operand `sql_exp` with the operands `sql_exp1`, `sql_exp2`, ..., and returns the operand `result` as the result after the first `THEN` for which the comparison is true. If no matches are found, the `result` specified after `ELSE` is selected. If `ELSE` is not specified, the result is the [null value](ABENNULL_VALUE_GLOSRY.html). The null value can be specified explicitly by the [null expression](ABENSQL_NULL.html)\\ `sql_null`.

The operands `sql_exp`, `sql_exp1`, `sql_exp2`, ..., and the results `result1`, `result2`, ... can be any [SQL expressions](ABAPSQL_EXPR.html). They can have any dictionary types except `ACCP`, `LCHR`, `LRAW`, `PREC`, `RAWSTRING`, `STRING`, and `GEOM_EWKB`.

The data type of the operand `sql_exp` must be [comparable](ABENWHERE_LOGEXP_COMPARE_TYPES.html) with the data types of the operands `sql_exp1`, `sql_exp2`, .... If this is not the case, a static specification raises a syntax error and a dynamic specification raises an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS`. The results must also be compatible to produce a common result type: The data types `result1`, `result2`, ... must be either the same or the data type must be able to completely represent the value of all other data types. The result has the dictionary type of the specification with the greatest value range.

If an operand of a comparison has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of this comparison is unknown.

Conversion of the distances specified in miles to kilometers. The conversion factor is specified as the host variable whose value has already been calculated using an SQL expression in a `SELECT` statement. This task could also be performed more generally in a subquery of a [`WITH`](ABAPWITH.html) statement.

[SQL Expressions, Simple `CASE`](ABENSQL_EXPR_CASE_STRING_ABEXA.html)

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   If the case distinction is evaluated by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html), the order of processing is preserved and there is no termination when an operand is evaluated whose condition is not true.

SELECT SINGLE \\n FROM t006 \\n FIELDS division( zaehl,nennr \* 1000,2 ) AS factor \\n WHERE msehi = 'MI' \\n INTO @FINAL(factor). \\n\\ \\nSELECT FROM spfli \\n FIELDS carrid, \\n connid, \\n cityfrom, \\n cityto, \\n CASE distid \\n WHEN 'MI' THEN distance \* @factor \\n ELSE distance \\n END AS distance, \\n 'KM' AS distid \\n WHERE distid = 'KM' OR distid = 'MI' \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(result). \\ncl\_demo\_output=>display( result ). \\n abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_case.html