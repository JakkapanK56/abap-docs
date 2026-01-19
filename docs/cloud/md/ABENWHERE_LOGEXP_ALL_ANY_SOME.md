---
title: "ABENWHERE_LOGEXP_ALL_ANY_SOME"
description: |
  ABENWHERE_LOGEXP_ALL_ANY_SOME - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWHERE_LOGEXP_ALL_ANY_SOME.htm"
abapFile: "ABENWHERE_LOGEXP_ALL_ANY_SOME.html"
keywords: ["select", "do", "if", "case", "catch", "ABENWHERE", "LOGEXP", "ALL", "ANY", "SOME"]
---

``... operand [`operator`](ABENWHERE_LOGEXP_COMPARE.html)\ [ALL|ANY|SOME] ( SELECT [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html)\ [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)] ) ...``

Comparison of an operand `operand` with the result set of a [subquery](ABENSUBQUERY_GLOSRY.html). The clauses in the subquery [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html) must represent a scalar subquery. The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple subqueries. In this case, special rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply to specifying clauses.

Any [SQL expressions](ABAPSQL_EXPR.html) except [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified for `operand`. In a [`HAVING`](ABAPHAVING_CLAUSE.html) clause, [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) can also be used.

`operator` stands for a [comparison operator](ABENWHERE_LOGEXP_COMPARE.html). Result sets can be single row or multirow.

If the result set of the subquery defined by the clause [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html) contains only one row, the comparison can be performed without specifying `ALL`, `ANY`, or `SOME`. The expression is true if the corresponding comparison of the value of the operand `operand` with the result of the scalar subquery `subquery` returns *true*. If the result set for the subquery contains multiple rows, a catchable exception is raised when the statement is executed.

Reads the flights with the most passengers.

If the result set of the subquery defined by the clause [`subquery_clauses`](ABENWHERE_LOGEXP_SUBQUERY.html) contains more than one row, `ALL`, `ANY`, or `SOME` must be specified.

The equality operator (`=` or `EQ`) in conjunction with `ANY` or `SOME` acts like [`IN subquery`](ABENWHERE_LOGEXP_OPERAND_IN.html).

Reads the customer numbers of the customers who made the most bookings.

-   If using `ALL`, the expression is true if the comparison is true for all rows in the result set of the scalar subquery `subquery`.
-   If the addition `ANY` or `SOME` is used, the expression is true if the comparison is true for at least one of the rows in the result set of the subquery.

SELECT \* \\n FROM sflight \\n WHERE seatsocc = ( SELECT MAX( seatsocc ) \\n FROM sflight ) \\n INTO TABLE @FINAL(flights). SELECT customid, COUNT( \* ) \\n FROM sbook \\n GROUP BY customid \\n HAVING COUNT( \* ) >= ALL ( SELECT COUNT( \* ) \\n FROM sbook \\n GROUP BY customid ) \\n INTO (@FINAL(id), @FINAL(cnt)). \\n ... \\nENDSELECT. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html abenwhere\_logexp\_compare.html