---
title: "ABENSELECT_HIERARCHY_NAVIGATORS"
description: |
  ABENSELECT_HIERARCHY_NAVIGATORS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_HIERARCHY_NAVIGATORS.htm"
abapFile: "ABENSELECT_HIERARCHY_NAVIGATORS.html"
keywords: ["select", "do", "if", "data", "internal-table", "ABENSELECT", "HIERARCHY", "NAVIGATORS"]
---

``... [`hierarchy_node_navigator`](ABENSELECT_HIERARCHY_NODE_NAVIS.html)\    |\ [`hierarchy_agg_navigator`](ABENSELECT_HIERARCHY_AGG_NAVIS.html) ...``

Specifies a [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) as a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) in an ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html).

A hierarchy navigator accesses an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) and evaluates it. There are different kinds of hierarchy navigators:

The tabular result contains the hierarchy nodes selected by the [hierarchy navigator](ABENHIERARCHY_NODE_GLOSRY.html). The columns of the tabular result include the additional [hierarchy columns](ABENDDDDL_HIERARCHY.html) of the SQL hierarchy specified after `SOURCE`, as well as any other hierarchy columns that are specific to the hierarchy navigators where applicable.

The same applies to the additional hierarchy columns as when accessing a SQL hierarchy [`hierarchy`](ABENSELECT_HIERARCHY.html):

A hierarchy navigator exposes all associations of the SQL hierarchy used implicitly and leaves its [association target](ABENASSOCIATION_TARGET_GLOSRY.html) unchanged.

-   [Hierarchy node navigators](ABENHIERARCHY_NODE_NAVI_GLOSRY.html)\\ [`hierarchy_node_navigator`](ABENSELECT_HIERARCHY_NODE_NAVIS.html) select certain hierarchy nodes and their properties.
-   [Hierarchy aggregate navigators](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ [`hierarchy_agg_navigator`](ABENSELECT_HIERARCHY_NODE_NAVIS.html) select certain hierarchy nodes and apply additional [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html) to them.

-   If `*` or `...~*` is specified in the [`SELECT` list](ABAPSELECT_LIST.html), they are not read and are not part of a structure or internal table created using an inline declaration `@DATA|@FINAL(...)` in the [`INTO` clause](ABAPINTO_CLAUSE.html).
-   They can, however, be listed explicitly in the `SELECT` list and, like any column in the result set, can be used for columns [`colname`](ABENABAP_SQL_COLUMNS.html) specified in the other clauses of the query.

-   Hierarchy navigators do not create any SQL hierarchies:

-   They cannot be specified as a source in hierarchy navigators.
-   They cannot be exposed as a [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html).

-   On [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html), the result sets of the hierarchy navigators are based on the use of the identically named hierarchy navigation functions. For more information, see the [SAP HANA documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   Since hierarchies generated from the `START WHERE` condition are buffered on the database, it is advisable to use hierarchy navigators to evaluate a SQL hierarchy. For example, finding the descendant nodes of a node with the [hierarchy node navigator](ABENHIERARCHY_NODE_NAVI_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS`](ABENSELECT_HIERARCHY_NODE_NAVIS.html) is more efficient than generating a new SQL hierarchy with this node as a root node. Furthermore, the hierarchy navigators add hierarchy columns that are not readily available otherwise.
-   Hierarchy functions cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html