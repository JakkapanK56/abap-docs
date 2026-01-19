---
title: "ABENSQL_NULL"
description: |
  ABENSQL_NULL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_NULL.htm"
abapFile: "ABENSQL_NULL.html"
keywords: ["select", "do", "if", "case", "catch", "ABENSQL", "NULL"]
---

`... NULL ...`

Special null expression in ABAP SQL. The operand `NULL` represents the [null value](ABENNULL_VALUE_GLOSRY.html). Null expressions are context-dependent and the type of `NULL` is determined by the [context](ABENOBJ_CONTEXT_GLOSRY.html). Generally, null expressions can be used in operand positions of [SQL expressions](ABAPSQL_EXPR.html). Any exception is documented for the respective position.

Returns the airline code, flight connection number, null value, and distance of all Lufthansa flights. When passing `NULL` to the result table, the null value is converted to the initial value.

[SQL Expressions, Null Expression](ABENSQL_EXPR_NULL_ABEXA.html)

-   At any operand position, it must be possible to determine an exact type for `NULL`. If this is not the case, a syntax error occurs or a catchable exception is raised.
-   The expression `NULL` must not be confused with the relational expression with the predicate syntax [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html).

SELECT FROM spfli \\n FIELDS carrid, \\n connid, \\n CAST( NULL AS INT1 ) AS start, \\n distance \\n WHERE carrid = 'LH' \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html