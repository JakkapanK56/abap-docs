---
title: "ABENSQL_SEARCHED_CASE"
description: |
  ABENSQL_SEARCHED_CASE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_SEARCHED_CASE.htm"
abapFile: "ABENSQL_SEARCHED_CASE.html"
keywords: ["select", "do", "if", "case", "class", "data", "types", "ABENSQL", "SEARCHED", "CASE"]
---

``... CASE WHEN [`sql_cond1`](ABENABAP_SQL_EXPR_LOGEXP.html) THEN result1          [WHEN [`sql_cond2`](ABENABAP_SQL_EXPR_LOGEXP.html) THEN result2]\          [WHEN [`sql_cond3`](ABENABAP_SQL_EXPR_LOGEXP.html) THEN result3]\            ...          [ELSE resultn|sql_null]\      END ...``

[Complex case distinction](ABENCOMPLEX_CASE_GLOSRY.html) (searched case) in ABAP SQL. This SQL expression evaluates logical expressions [`sql_cond1`](ABENABAP_SQL_EXPR_LOGEXP.html), [`sql_cond2`](ABENABAP_SQL_EXPR_LOGEXP.html), ... and produces the operand `result` as a result after the first `THEN` for which the logical expression is true. If no logical expressions are true, the `result` specified after `ELSE` is selected. If `ELSE` is not specified, the result is the [null value](ABENNULL_VALUE_GLOSRY.html). The null value can be specified explicitly by the [null expression](ABENSQL_NULL.html)\\ `sql_null`. The results `result1`, `result2`, ... can be any [SQL expressions](ABAPSQL_EXPR.html).

The results must be compatible with each other in such a way that a common result type can be determined: The data types `result1`, `result2`, ... must be either the same or the data type must be able to fully represent the value of all other data types. If this is not the case, a static specification raises a syntax error and a dynamic specification raises an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS`. The result has the dictionary type of the specification with the greatest value range.

If a complex `CASE` is used in a [condition](ABENASQL_COND.html) of an ABAP SQL statement, the [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent data source of a query or of the target of a write statement cannot be used as the operand of a `WHEN` condition due to [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html).

Evaluation of the column `FLTIME` in a complex `CASE`.

[SQL Expressions, Complex `CASE`](ABENSQL_EXPR_SEARCHED_CASE_ABEXA.html)

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   If the case distinction is processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html), the order of processing is preserved and there is no termination when an operand is evaluated whose condition is not true.
-   The [relational expressions](ABENABAP_SQL_EXPR_LOGEXP.html) that can be used after `CASE` are a subset of the [relational expressions for statements](ABENABAP_SQL_STMT_LOGEXP.html), but also allow [SQL expressions](ABAPSQL_EXPR.html) as operands on the right side.
-   A client column can be used as an operand only if [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is disabled using the obsolete addition `CLIENT SPECIFIED` for the query or the write statement.
-   When complex `CASE` is used, the syntax check is performed in a [strict mode from ABAP release 7.40, SP08](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.
-   When SQL expressions are specified on the left side or host expressions occur on the right side, the syntax check is performed in a [strict mode from ABAP release 7.60](ABENABAP_SQL_STRICTMODE_760.html), which handles the statement more strictly than the regular syntax check.

SELECT FROM spfli \\n FIELDS carrid, \\n connid, \\n cityfrom, \\n cityto, \\n CASE WHEN fltime < 100 THEN 'short' \\n WHEN fltime BETWEEN 100 AND 300 THEN 'medium' \\n ELSE 'long' \\n END AS fltime \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_case.html