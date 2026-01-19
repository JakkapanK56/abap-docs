---
title: "ABENCDS_SELECT_CLAUSES_V1"
description: |
  ABENCDS_SELECT_CLAUSES_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SELECT_CLAUSES_V1.htm"
abapFile: "ABENCDS_SELECT_CLAUSES_V1.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "SELECT", "CLAUSES"]
---

``... [[`WHERE cds_cond`](ABENCDS_WHERE_CLAUSE_V1.html)]\      [[`GROUP BY field1, field2, ...`](ABENCDS_GROUP_BY_V1.html)]\      [[`HAVING cds_cond`](ABENCDS_HAVING_CLAUSE_V1.html)]\      [[`UNION [ALL] SELECT ...`](ABENCDS_UNION_V1.html)] ...``

The optional clauses of the [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) have the following semantics:

CDS views do not support `ORDER BY` for the following reasons:

-   The [`WHERE` clause](ABENCDS_WHERE_CLAUSE_V1.html) restricts the rows in the result set when the CDS view is accessed.
-   The [`GROUP BY` clause](ABENCDS_GROUP_BY_V1.html) groups rows in the result set when the CDS view is accessed. It is applied after rows are selected using the `WHERE` clause.
-   The [`HAVING` clause](ABENCDS_HAVING_CLAUSE_V1.html) restricts the result set further after a `GROUP BY` clause. Here, [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) can be specified in the condition.
-   [`UNION`](ABENCDS_UNION_V1.html) can be used to create the union of the result sets from two `SELECT` statements.

-   Historic reason: Some database platforms that support ABAP CDS do not support `ORDER BY` in views.
-   Undefined behavior may occur when `ORDER BY` is used in multiple views within a view stack.
-   Undefined behavior may occur in complex views that, for example, join multiple data sources and use an `ORDER BY` clause.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html