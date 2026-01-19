---
title: "ABENSQL_HIERARCHY_COMP_ID"
description: |
  ABENSQL_HIERARCHY_COMP_ID - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_HIERARCHY_COMP_ID.htm"
abapFile: "ABENSQL_HIERARCHY_COMP_ID.html"
keywords: ["select", "if", "data", "ABENSQL", "HIERARCHY", "COMP"]
---

`... HIERARCHY_COMPOSITE_ID( sql_exp1, ..., sql_expn ) ...`

Calls the hierarchy composite ID function as an [SQL expression](ABAPSQL_EXPR.html) or operand of an expression in ABAP SQL. The hierarchy composite ID function can have a comma-separated list with at least one argument.

This function concatenates multicolumn tuple-like node identifiers into single scalar values.

The arguments can be any [SQL expressions](ABAPSQL_EXPR.html) that can be cast to `SSTRING`. The result type is `SSTRING`.

Generates a composite node identifier `num` that is free of name clashes. Additionally, the length of the components is returned.

SELECT FROM demo\_expressions \\n FIELDS num1 AS num1, \\n num2 AS num2, \\n hierarchy\_composite\_id( num1, num2 ) AS num \\n INTO TABLE @DATA(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html