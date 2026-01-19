---
title: "ABENSQL_COALESCE"
description: |
  ABENSQL_COALESCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_COALESCE.htm"
abapFile: "ABENSQL_COALESCE.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "data", "types", "internal-table", "ABENSQL", "COALESCE"]
---

`... COALESCE( sql_exp1, sql_exp2, ..., sql_expn ) ...`

Calls the [coalesce function](ABENCOALESCE_GLOSRY.html) as an [SQL expression](ABAPSQL_EXPR.html) or operand of an expression in ABAP SQL. The coalesce function can have a comma-separated list with at least two but no more than 255 arguments `sql_exp1`, `sql_exp2`, ..., `sql_expn`. This function returns the value of the first argument that does not have the [null value](ABENNULL_VALUE_GLOSRY.html). If every argument has the null value, the value of the last argument `sql_expn` is returned. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

The arguments can be any [SQL expressions](ABAPSQL_EXPR.html) of all dictionary types except `ACCP`, `DF16_SCL` (obsolete), `DF34_SCL` (obsolete), `LCHR`, `LRAW`, `PREC`, `RAWSTRING`, `STRING`, and `GEOM_EWKB`. The data types of the arguments must either be the same or the data type of one argument must be able to fully represent the value of the other data types. The result has the dictionary type of the argument with the largest value range.

The first four [`CASE` expressions](ABENSQL_SIMPLE_CASE.html) return the null value, since no `WHEN` condition is met and no `ELSE` is specified. The result of the fifth `CASE` expression is not a null value and is returned by `COALESCE`.

[SQL Expressions, Coalesce Function](ABENSQL_EXPR_COALESCE_ABEXA.html)

-   The coalesce function can be used to assign a target object a user-defined value or the result of an expression when null values are read. The type-dependent initial value is assigned by default.
-   A maximum of ten coalesce functions can be nested.
-   A coalesce function is a short form of the following [complex case distinction](ABENSQL_SEARCHED_CASE.html):
-   `CASE WHEN sql_exp1 IS NOT NULL THEN sql_exp1 WHEN sql_exp2 IS NOT NULL THEN sql_exp2 ... ELSE sql_expn END`
-   The coalesce function can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table with [`FROM @itab`](ABAPSELECT_ITAB.html).

DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ). \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS coalesce( CASE id WHEN 'A' THEN 'a' END, \\n CASE id WHEN 'B' THEN 'b' END, \\n CASE id WHEN 'C' THEN 'c' END, \\n CASE id WHEN NULL THEN 'd' END, \\n CASE id WHEN 'X' THEN 'x' END ) AS coalesced \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html