---
title: "ABENSELECT_HIERARCHY_ANCS_AGG"
description: |
  ABENSELECT_HIERARCHY_ANCS_AGG - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_HIERARCHY_ANCS_AGG.htm"
abapFile: "ABENSELECT_HIERARCHY_ANCS_AGG.html"
keywords: ["select", "insert", "do", "if", "case", "data", "internal-table", "ABENSELECT", "HIERARCHY", "ANCS", "AGG"]
---

``... HIERARCHY_ANCESTORS_AGGREGATE(        SOURCE [`hierarchy`](ABENSELECT_HIERARCHY.html)\ [AS tabalias]\       [START WHERE [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html)]\        MEASURES agg_func1 AS alias1[,                 agg_func2 AS alias2[,                 ...]]\       [WHERE [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html)] ...``

[1. `... START WHERE sql_cond`](#ABAP_ADDITION_1@3@)

[2. `... WHERE sql_cond`](#ABAP_ADDITION_2@3@)

Specifies the [hierarchy aggregate navigator](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ `HIERARCHY_ANCESTORS_AGGREGATE` as the data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) in an ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html). It accesses the [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html) specified after `SOURCE` and evaluates it. After the SQL hierarchy, `AS` can be used to specify an alias name for it that is valid within the parentheses and must be used in positions in which the SQL hierarchy is addressed.

The hierarchy navigator `HIERARCHY_ANCESTORS_AGGREGATE` aggregates the values of all [ancestor nodes](ABENANCESTOR_NODE_GLOSRY.html) located between [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) determined using `WHERE` and [start nodes](ABENSTART_NODE_GLOSRY.html) determined using `START WHERE`, including the values of the hierarchy nodes and start nodes themselves. A tabular result set is created consisting of all hierarchy nodes that

For each node of the result, the aggregate functions specified after `MEASURES` are applied to the hierarchy nodes of that path that consists of the node and its ancestor nodes, including the start node. The aggregation is based on the start node, which is significant for the aggregate function `STRING_AGG`. The result of each aggregate function is stored in the current node as the content of a separate column.

A comma-separated list of [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html)\\ `agg_func1`, `agg_func2`, ... must be specified after `MEASURES`. At least one aggregate function must be specified. Each aggregate function must be assigned an alias name `alias1`, `alias2`, ... The arguments of the aggregate functions can be individual columns [`col`](ABENABAP_SQL_COLUMNS.html) of the SQL hierarchy `hierarchy`, including their [hierarchy columns](ABENDDDDL_HIERARCHY.html). The [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html)\\ `~` can be used to prefix the columns with the name of the SQL hierarchy. The following aggregate functions can be used:

[`AVG( col )`](ABENSQL_AGG_FUNC.html), \\n[`MIN( col )`](ABENSQL_AGG_FUNC.html), \\n[`MAX( col )`](ABENSQL_AGG_FUNC.html), \\n[`SUM( col )`](ABENSQL_AGG_FUNC.html), \\n[`PRODUCT( col )`](ABENSQL_AGG_FUNC.html), \\n[`COUNT( [DISTINCT] col )`](ABENSQL_AGG_FUNC.html), \\n[`COUNT( * )`](ABENSQL_AGG_FUNC.html), [`COUNT(*)`](ABENSQL_AGG_FUNC.html), \\n[`STRING_AGG( col[, sep] )`](ABENSQL_AGG_FUNC.html)

The addition `DISTINCT` is only possible for `COUNT`. The aggregate function `PRODUCT` can be used in this hierarchy navigator only. The addition `ORDER BY` is not possible in the function `STRING_AGG`.

The aggregate functions work as described in the [general description](ABENSQL_AGG_FUNC.html), except that only columns `col` are allowed as arguments and that the result of the function `COUNT` is `INT8` instead of `INT4`. For each aggregate function, a column with the alias name defined by `AS` is added to the tabular result of the hierarchy navigator. This column contains the result of the aggregate function in every row. These columns are not [hierarchy columns](ABENDDDDL_HIERARCHY.html). If `*` or `...~*` is specified in the [`SELECT` list](ABAPSELECT_LIST.html), they are read like a column of the SQL hierarchy specified as a source and are part of a structure or internal table created using an inline declaration `@DATA|@FINAL(...)` in the [`INTO` clause](ABAPINTO_CLAUSE.html).

See [Hierarchy Navigator `HIERARCHY_ANCESTORS_AGGREGATE`](ABENHIER_ANCS_AGG_ABEXA.html)

The `START WHERE` condition selects the start nodes for the paths to be aggregated for the hierarchy nodes selected by the `WHERE` condition. Columns of the SQL hierarchy, including the additional [hierarchy columns](ABENDDDDL_HIERARCHY.html), can be used in the condition [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html).

If a selected start node is an ancestor node of a node selected by `WHERE`, the latter is added to the result set.

The `WHERE` condition selects those nodes of the SQL hierarchy specified after `SOURCE` that can be added to the result set of the hierarchy navigator. Columns of the SQL hierarchy, including the additional [hierarchy columns](ABENDDDDL_HIERARCHY.html), can be used in the condition [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html).

Meeting the `WHERE` condition is by itself not sufficient to add nodes to the result set. An ancestor node must also meet the `START WHERE` in this case.

-   meet the `WHERE` condition and
-   have an ancestor node, including the hierarchy node itself, that meets the `START WHERE` condition as a start node.
-   Here, a separate row is created for each possible path to every start node that occurs under the ancestor nodes. If no `WHERE` condition is specified, this is done for all the hierarchy nodes. If no `START WHERE` condition is specified, the start node is the [ancestor node](ABENANCESTOR_NODE_GLOSRY.html) implicitly with the lowest [hierarchy level](ABENHIERARCHY_LEVEL_GLOSRY.html).

-   If the `START WHERE` condition selects multiple start nodes, a separate row is inserted in the result set for each start node for which a path exists to one of the hierarchy nodes selected by the `WHERE` condition. Child nodes with multiple parent nodes can also point to different paths to a start node and hence to multiple rows for a hierarchy node.
-   Additional hierarchy columns such as `START_RANK` and `START_ID` as for the [hierarchy node navigators](ABENHIERARCHY_NODE_NAVI_GLOSRY.html) are not yet available, which means that the different paths in the result set cannot be distinguished from the content of hierarchy columns. It is currently advisable, therefore, to use the `START WHERE` condition to select exactly one start node only.
-   The fact that the start node determined by `START WHERE` is respected in the aggregation may be unexpected behavior and should be respected when formulating the condition. This can be done, for example, by setting a condition for the hierarchy column that determines the parent node and is not set on the key of the node.

-   If multiple start nodes are ancestor nodes of a node selected by `WHERE`, the latter is also added to the result set multiple times.
-   If a selected start node is not an ancestor node of a node selected by `WHERE`, the node is ignored.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy\_navigators.html abenselect\_hierarchy\_agg\_navis.html