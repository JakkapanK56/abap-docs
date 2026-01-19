---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_WITH_GROUP_BY_ABEXA.htm"
abapFile: "ABENSQL_EXPR_WITH_GROUP_BY_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "ABENSQL", "EXPR", "WITH", "GROUP", "ABEXA"]
---

This example demonstrates non elementary [SQL expressions](ABAPSQL_EXPR.html) combined with the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html).

An [arithmetic expression](ABENSQL_ARITH.html) after `SELECT` adds the values of the columns `NUM1` and `NUM2` and passes the total to the result set as `SUM`. The [aggregate function](ABENAGGREGATE_FUNCTION_GLOSRY.html)\\ `count( * )` counts the rows of a group. `NUM1` and `NUM2` must be specified for the grouping after `GROUP BY`.

-   The first `SELECT` statement specifies `NUM1` and `NUM2` as individual columns after `GROUP BY`. The rows are grouped by these columns. Distinct values in these columns produce separate groups, even if the total is the same.
-   The second `SELECT` statement specifies `NUM1` and `NUM2` in an SQL expression after `GROUP BY`. The rows are grouped by the result of the expression.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_with\_group\_by DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_with\_group\_by IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = 1 num1 = 1 num2 = 1 ) \\n ( id = 2 num1 = 2 num2 = 4 ) \\n ( id = 3 num1 = 3 num2 = 2 ) \\n ( id = 4 num1 = 3 num2 = 2 ) \\n ( id = 5 num1 = 5 num2 = 1 ) \\n ( id = 6 num1 = 1 num2 = 1 ) \\n ( id = 7 num1 = 1 num2 = 1 ) ) ). \\n\\ \\n out->begin\_section( \`GROUP BY num1, num2\` ). \\n SELECT num1 + num2 AS sum, COUNT( \* ) AS count \\n FROM demo\_expressions \\n GROUP BY num1, num2 \\n ORDER BY sum \\n INTO TABLE @FINAL(result1). \\n out->write( result1 ). \\n\\ \\n out->next\_section( \`GROUP BY num1 + num2\` ). \\n SELECT num1 + num2 AS sum, COUNT( \* ) AS count \\n FROM demo\_expressions \\n GROUP BY num1 + num2 \\n ORDER BY sum \\n INTO TABLE @FINAL(result2). \\n out->write( result2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_with\_group\_by DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_with\_group\_by IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM TABLE @( VALUE #( \\n ( id = 1 num1 = 1 num2 = 1 ) \\n ( id = 2 num1 = 2 num2 = 4 ) \\n ( id = 3 num1 = 3 num2 = 2 ) \\n ( id = 4 num1 = 3 num2 = 2 ) \\n ( id = 5 num1 = 5 num2 = 1 ) \\n ( id = 6 num1 = 1 num2 = 1 ) \\n ( id = 7 num1 = 1 num2 = 1 ) ) ). \\n\\ \\n out->begin\_section( \`GROUP BY num1, num2\` ). \\n SELECT num1 + num2 AS sum, COUNT( \* ) AS count \\n FROM demo\_expressions \\n GROUP BY num1, num2 \\n ORDER BY sum \\n INTO TABLE @FINAL(result1). \\n out->write( result1 ). \\n\\ \\n out->next\_section( \`GROUP BY num1 + num2\` ). \\n SELECT num1 + num2 AS sum, COUNT( \* ) AS count \\n FROM demo\_expressions \\n GROUP BY num1 + num2 \\n ORDER BY sum \\n INTO TABLE @FINAL(result2). \\n out->write( result2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapgroupby\_clause.html