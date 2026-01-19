---
title: "ABENWHERE_LOGEXP_IN"
description: |
  ABENWHERE_LOGEXP_IN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWHERE_LOGEXP_IN.htm"
abapFile: "ABENWHERE_LOGEXP_IN.html"
keywords: ["select", "if", "ABENWHERE", "LOGEXP"]
---

1\. `... [operand](ABENWHERE_LOGEXP_OPERAND_IN.html)\ [NOT] IN \{ (operand1[, operand2[, ...]]) \}\ |\ \{ ( SELECT [subquery_clauses](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)] ) \} ...`

2\. `... [( operand1, operand2[, ...] )](ABENWHERE_LOGEXP_LIST_IN.html) IN \{ ( ( operand11, operand21[, ...] )[, ( operand12, operand22[, ...] )] ) \}\ |\ \{ ( SELECT [subquery_clauses](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[UNION|INTERSECT|EXCEPT ...](ABAPUNION.html)] ) \} ...`

This variant of the operator `IN` checks whether the operands on the left side match a value from a set of values specified in parentheses. A [single operand](ABENWHERE_LOGEXP_OPERAND_IN.html) or an [operand list](ABENWHERE_LOGEXP_LIST_IN.html) can be specified on the left side. The set of values on the right side is determined using either comma-separated lists or subqueries.

[Single Operand](ABENWHERE_LOGEXP_OPERAND_IN.html)

[Operand List](ABENWHERE_LOGEXP_LIST_IN.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html