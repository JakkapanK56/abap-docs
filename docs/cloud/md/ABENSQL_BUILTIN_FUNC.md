---
title: "ABENSQL_BUILTIN_FUNC"
description: |
  ABENSQL_BUILTIN_FUNC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_BUILTIN_FUNC.htm"
abapFile: "ABENSQL_BUILTIN_FUNC.html"
keywords: ["select", "if", "data", "internal-table", "ABENSQL", "BUILTIN", "FUNC"]
---

``... [`sql_func( ... sql_exp ... )`](ABENABAP_SQL_BUILTIN_FUNCTIONS.html) ...``

Calls a [built-in function](ABENABAP_SQL_BUILTIN_FUNCTIONS.html) in ABAP SQL. The result is the return value of the function with the associated dictionary type. As a rule, the arguments of the built-in functions cover one or more SQL expressions.

Use of the built-in functions [`CONCAT`](ABENSQL_STRING_FUNC.html), [`CONCAT_WITH_SPACE`](ABENSQL_STRING_FUNC.html), and [`LOWER`](ABENSQL_STRING_FUNC.html) in a [`SELECT` list](ABAPSELECT_LIST.html).

-   Specifying a built-in function always means specifying an [SQL expression](ABAPSQL_EXPR.html). Built-in functions can only be called in operand positions for which SQL expressions are possible.
-   [Certain SQL expressions](ABENSQL_ENGINE_EXPR.html) can be calculated by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). If any other SQL expressions are used, [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is bypassed and internal tables accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

-   [SQL expressions, arithmetic calculations](ABENSQL_EXPR_ARITH_ABEXA.html)
-   [String functions](ABENSQL_STRING_FUNC_ABEXA.html)
-   [SQL Expressions, Coalesce Function](ABENSQL_EXPR_COALESCE_ABEXA.html)

SELECT FROM spfli \\n FIELDS CONCAT( CONCAT( LOWER( carrid ), '\_' ), \\n LOWER( CAST( connid AS CHAR ) ) ) AS key, \\n CONCAT\_WITH\_SPACE( CONCAT( cityfrom, \\n ',' ), cityto, 1 ) AS cities \\n WHERE carrid = '...' \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html