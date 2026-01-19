---
title: "In queries, both"
description: |
  can be specified as data sources(ABAPSELECT_DATA_SOURCE.html). In the ABAP SQL write statement `MODIFY`(ABAPMODIFY_DBTAB.html), a parenthesized subquery `SELECT subquery_clauses`(ABAPINSERT_SOURCE.html) can now be specified as a data source after `FROM`. The rows of the result set of the subqu
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-773-ABAP_SQL.htm"
abapFile: "ABENNEWS-773-ABAP_SQL.html"
keywords: ["select", "insert", "if", "data", "ABENNEWS", "773", "ABAP", "SQL"]
---

[1\. Access to Hierarchy Data](#ABAP_MODIFICATION_1@4@)

[2. Subquery as Data Source of `MODIFY`](#ABAP_MODIFICATION_2@4@)

[3. `GROUP BY` Addition `GROUPING SETS`](#ABAP_MODIFICATION_3@4@)

[4. Aggregate Function `GROUPING`](#ABAP_MODIFICATION_4@4@)

In queries, both

can be specified as [data sources](ABAPSELECT_DATA_SOURCE.html).

In the ABAP SQL write statement [`MODIFY`](ABAPMODIFY_DBTAB.html), a parenthesized subquery [`SELECT subquery_clauses`](ABAPINSERT_SOURCE.html) can now be specified as a data source after `FROM`. The rows of the result set of the subquery are modified or inserted in the target table directly on the database. No data transport is required between the database and AS ABAP.

In a [`SELECT`](ABAPSELECT.html) statement, the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html) can now be used. The addition `GROUPING SETS` makes it possible to group multiple grouping sets under one `GROUP BY` clause. This is the same as specifying [`UNION ALL`](ABAPUNION.html) with different `GROUP BY` clauses. The addition `GROUPING SETS` has an advantage over a `UNION` clause grouping because the `SELECT` clause only needs to be specified once.

The aggregate function [`GROUPING`](ABENGROUPING_FUNCTION.html) can now be used in a [`SELECT`](ABAPSELECT.html) statement. The grouping function `GROUPING` can be used to verify whether a specific column is part of the [aggregation](ABENAGGREGATE_EXPRESSION_GLOSRY.html). The grouping function can be used only if the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause contains the addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html).

-   [hierarchies](ABENSELECT_HIERARCHY.html) and
-   [hierarchy node navigators](ABENSELECT_HIERARCHY_NODE_NAVIS.html)

abenabap.html abennews.html abennews-77.html abennews-773.html