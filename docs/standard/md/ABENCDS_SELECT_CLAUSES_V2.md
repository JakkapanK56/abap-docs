---
title: "ABENCDS_SELECT_CLAUSES_V2"
description: |
  ABENCDS_SELECT_CLAUSES_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SELECT_CLAUSES_V2.htm"
abapFile: "ABENCDS_SELECT_CLAUSES_V2.html"
keywords: ["select", "do", "data", "ABENCDS", "SELECT", "CLAUSES"]
---

```... [[`WHERE cds_cond`](ABENCDS_WHERE_CLAUSE_V2.html)]\      [[`GROUP BY field1, field2, ...`](ABENCDS_GROUP_BY_V2.html)]\      [[`HAVING cds_cond`](ABENCDS_HAVING_CLAUSE_V2.html)]\      [[`` `EXCEPT SELECT ...]` ``](ABENCDS_EXCEPT_V2.html)\      [[`` `INTERSECT SELECT ...]` ``](ABENCDS_INTERSECT_V2.html)\      [[`` `UNION [ALL] SELECT ...]` ``](ABENCDS_UNION_V2.html) ...```

The optional clauses of the [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) have the following semantics:

CDS view entities do not support `ORDER BY` for the following reasons:

-   The [`WHERE` clause](ABENCDS_WHERE_CLAUSE_V2.html) restricts the rows in the result set when the CDS view entity is accessed.
-   The [`GROUP BY` clause](ABENCDS_GROUP_BY_V2.html) groups rows in the result set when the CDS view entity is accessed. It is applied after rows are selected using the `WHERE` clause.
-   The [`HAVING` clause](ABENCDS_HAVING_CLAUSE_V2.html) restricts the result set further after a `GROUP BY` clause. [Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html) are possible after `HAVING`.
-   [`EXCEPT`](ABENCDS_EXCEPT_V2.html), [`INTERSECT`](ABENCDS_INTERSECT_V2.html), and [`UNION`](ABENCDS_UNION_V2.html) are [`set operators`](ABENCDS_SET_OPERATORS_GLOSRY.html). They can be used to merge the result sets of multiple `SELECT` statements into a single result set.

-   Historic reason: Some database platforms that support ABAP CDS do not support `ORDER BY` in views.
-   Undefined behavior may occur when `ORDER BY` is used in multiple views within a view stack.
-   Undefined behavior may occur in complex views that, for example, join multiple data sources and use an `ORDER BY` clause.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html