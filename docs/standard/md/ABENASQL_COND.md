---
title: "ABENASQL_COND"
description: |
  ABENASQL_COND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENASQL_COND.htm"
abapFile: "ABENASQL_COND.html"
keywords: ["do", "if", "types", "ABENASQL", "COND"]
---

`...   rel_exp      |\ [NOT] sql_cond [AND|OR sql_cond] ...`

Logical expression `sql_cond` for formulating a condition in ABAP SQL. A logical expression consists of either a single relational expression `rel_exp`, or an expression composed of the Boolean operators [`NOT`](ABENWHERE_LOGEXP_ANDORNOT.html), [`AND`](ABENWHERE_LOGEXP_ANDORNOT.html), or [`OR`](ABENWHERE_LOGEXP_ANDORNOT.html) and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression. There are different types of relational expressions:

-   [Relational expressions for statements](ABENABAP_SQL_STMT_LOGEXP.html)
-   [Relational expressions for expressions](ABENABAP_SQL_EXPR_LOGEXP.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html