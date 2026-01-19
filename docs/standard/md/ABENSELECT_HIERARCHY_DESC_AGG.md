---
title: "ABENSELECT_HIERARCHY_DESC_AGG"
description: |
  ABENSELECT_HIERARCHY_DESC_AGG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_HIERARCHY_DESC_AGG.htm"
abapFile: "ABENSELECT_HIERARCHY_DESC_AGG.html"
keywords: ["select", "do", "if", "class", "data", "internal-table", "ABENSELECT", "HIERARCHY", "DESC", "AGG"]
---

``... HIERARCHY_DESCENDANTS_AGGREGATE(        SOURCE [`hierarchy`](ABENSELECT_HIERARCHY.html)\ [AS tabalias]\       [JOIN [`data_source`](ABAPSELECT_DATA_SOURCE.html)\ [AS tabalias] ON [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html)]\        MEASURES agg_func1 AS alias1[,                 agg_func2 AS alias2[,                 ...]]\       [WHERE [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html)]\       [WITH SUBTOTAL]\       [WITH BALANCE]\       [WITH NOT MATCHED]\       [WITH TOTAL] ) ...``

[1. `... JOIN data_source [AS tabalias]`](#ABAP_ADDITION_1@3@)

[2. `... WHERE sql_cond`](#ABAP_ADDITION_2@3@)

[3. `... WITH SUBTOTAL`](#ABAP_ADDITION_3@3@)

[4. `... WITH BALANCE`](#ABAP_ADDITION_4@3@)

[5. `... WITH NOT MATCHED`](#ABAP_ADDITION_5@3@)

[6. `... WITH TOTAL`](#ABAP_ADDITION_6@3@)

Specifies the [hierarchy aggregate navigator](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ `HIERARCHY_DESCENDANTS_AGGREGATE` as a data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) in an ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html). It accesses the [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html) specified after `SOURCE` and evaluates it. After the SQL hierarchy, `AS` can be used to specify an alias name for it that is valid within the parentheses and must be used in positions in which the SQL hierarchy is addressed.

The hierarchy navigator `HIERARCHY_DESCENDANTS_AGGREGATE` returns a tabular result consisting of the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of the SQL hierarchy [`hierarchy`](ABENSELECT_HIERARCHY.html) specified after `SOURCE` that meet the optional `WHERE` condition. If no `WHERE` condition is specified, these are all the hierarchy nodes. For each node of the result, the aggregate functions specified after `MEASURES` are applied to the row set resulting from the node and all its [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html). The result of each aggregate function is stored in the current node as the content of a separate column.

A comma-separated list of [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html)\\ `agg_func1`, `agg_func2`, ... must be specified after `MEASURES`. At least one aggregate function must be specified. Each aggregate function must be assigned an alias name `alias1`, `alias2`, ... The arguments of the aggregate functions can be individual columns [`col`](ABENABAP_SQL_COLUMNS.html) of the SQL hierarchy `hierarchy` including its [hierarchy columns](ABENDDDDL_HIERARCHY.html) or a data source `data_source` specified after `JOIN`. The [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html)\\ `~` can or must be used to prefix the columns with the name of the SQL hierarchy or data source. The following aggregate functions are possible:

The aggregate functions work as described in the [general description](ABENSQL_AGG_FUNC.html), except that only columns `col` are allowed as arguments and that the result of the function `COUNT` is `INT8`. For each aggregate function, a column with the alias name defined by `AS` is added to the tabular result of the hierarchy navigator. This column contains the result of the aggregate function in every row. These columns are not [hierarchy columns](ABENDDDDL_HIERARCHY.html). If `*` or `...~*` is specified in the [`SELECT` list](ABAPSELECT_LIST.html), they are read like a column of the SQL hierarchy specified as a source and are part of a structure or internal table created using an inline declaration `@DATA|@FINAL(...)` in the [`INTO` clause](ABAPINTO_CLAUSE.html).

In addition to the [hierarchy columns](ABENDDDDL_HIERARCHY.html) of the SQL hierarchy specified after `SOURCE`, the result set contains a further hierarchy column `HIERARCHY_AGGREGATE_TYPE` with the type `INT1`. In the rows of the result set created by the optional `WITH` additions, this column contains an indicator for the addition to be created, otherwise it contains the numeric value 0.

Call of the hierarchy navigator `HIERARCHY_DESCENDANTS_AGGREGATE` in the class `CL_DEMO_HIERARCHY_AGGREGATE`, where the [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html)\\ `DEMO_CDS_PARENT_CHILD_AGG` is specified as a source. The `WHERE` condition evaluates the [hierarchy column](ABENDDDDL_HIERARCHY.html)\\ `HIERARCHY_LEVEL` and only nodes with a maximum hierarchy level of 2 are added to the result set. The aggregate functions, however, respect all descendant nodes regardless of their hierarchy level. When executed, `CL_DEMO_HIERARCHY_AGGREGATE` demonstrates how this hierarchy navigator works.

The optional addition `JOIN` can be used to join an additional data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) with the SQL hierarchy specified after `SOURCE`. The same applies to `data_source` as to every data source of a query, except that path expressions [`sql_path`](ABENABAP_SQL_PATH.html) are not possible. After the data source, `AS` can be used to specify an alias name for it that is valid within parentheses and must be used in positions in which the data source is addressed.

The result set of the SQL hierarchy is joined with the result set of the data source `data_source` in accordance with [`LEFT OUTER JOIN`](ABAPSELECT_JOIN.html) rules. The rules for conditions [`sql_cond` in expressions](ABENABAP_SQL_EXPR_LOGEXP.html) apply to the `ON` condition. Columns of the data source can be used as arguments of those aggregate functions after `MEASURES` for which their data type is suitable. However, they are not part of the tabular result of the hierarchy navigator as additional columns.

For every node of the original SQL hierarchy that meets the `WHERE` condition, the aggregate functions specified after `MEASURES` are applied to every [descendant node](ABENDESCENDANT_NODE_GLOSRY.html) in the result set of the join according to the [parent-child relationship](ABENPCR_GLOSRY.html).

[Hierarchy Navigator `HIERARCHY_DESCENDANTS_AGGREGATE`](ABENHIER_DESC_AGG_ABEXA.html)

The `WHERE` condition selects those nodes of the SQL hierarchy specified after `SOURCE` that are added to the result set of the hierarchy navigator. Columns of the SQL hierarchy, including the additional [hierarchy columns](ABENDDDDL_HIERARCHY.html), can be used in the condition [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html).

Each of the optional `WITH` additions, which can be specified in any order, adds exactly one row to the tabular result of the hierarchy aggregate navigator `HIERARCHY_DESCENDANTS_AGGREGATE`. In the new row, all columns, including the [hierarchy columns](ABENDDDDL_HIERARCHY.html), contain the [null value](ABENNULL_VALUE_GLOSRY.html), except columns created using the addition `MEASURES` and the hierarchy column `HIERARCHY_AGGREGATE_TYPE`. The special hierarchy column `HIERARCHY_AGGREGATE_TYPE` uses the following values to indicate which `WITH` addition added the row:

In the rows not created by `WITH`, the hierarchy column `HIERARCHY_AGGREGATE_TYPE` contains the numeric value 0. The columns created by the addition `MEASURES` contain the results of their aggregate functions for the hierarchy nodes created as follows by the `WITH` addition:

If one of the `WITH` additions is used, the syntax check is performed in [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

[Hierarchy Navigator `HIERARCHY_DESCENDANTS_AGGREGATE` with `WITH`](ABENHIER_DESC_AGG_WITH_ABEXA.html)

-   If `JOIN` is not specified, the arguments `col` can be columns of the SQL hierarchy and the following aggregate functions can be used:
-   [`AVG( col )`](ABENSQL_AGG_FUNC.html), \\n[`MIN( col )`](ABENSQL_AGG_FUNC.html), \\n[`MAX( col )`](ABENSQL_AGG_FUNC.html), \\n[`SUM( col )`](ABENSQL_AGG_FUNC.html), \\n[`COUNT( [DISTINCT] col )`](ABENSQL_AGG_FUNC.html), \\n[`COUNT( * )`](ABENSQL_AGG_FUNC.html), [`COUNT(*)`](ABENSQL_AGG_FUNC.html)
-   The addition `DISTINCT` is only possible for `COUNT`.
-   If `JOIN` is specified, the arguments `col` can be columns of the SQL hierarchy and the data source after `data_source` and the following aggregate functions can be used:
-   [`MIN( col )`](ABENSQL_AGG_FUNC.html), \\n[`MAX( col )`](ABENSQL_AGG_FUNC.html), \\n[`SUM( col )`](ABENSQL_AGG_FUNC.html), \\n[`COUNT( [DISTINCT] col )`](ABENSQL_AGG_FUNC.html)
-   The addition `DISTINCT` is only possible for `COUNT` and for columns of the SQL hierarchy.

-   The addition `JOIN` does not modify the number of rows in the result set of the hierarchy navigator `HIERARCHY_DESCENDANTS_AGGREGATE`. If, however, the result set of the join contains more descendant nodes for a node than in the original SQL hierarchy, all these nodes are respected by the aggregate functions. Any start nodes in a calculation that occur more than once are also all respected multiple times.
-   If there are [access conditions](ABENACCESS_CONDITION_GLOSRY.html) in [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) for a data source specified by `JOIN` and these are not switched off using [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html), these conditions are applied before the join is made.

-   The `WHERE` condition does not restrict the descendant nodes of the selected nodes. It is used only to select those nodes for which the aggregate function is calculated.
-   The columns of a data source joined using `JOIN` cannot be used after `WHERE`.

-   `WITH SUBTOTAL`
-   The aggregate functions evaluate all hierarchy nodes that meet the `WHERE` condition of the hierarchy navigator.
-   `WITH BALANCE`
-   The aggregate functions evaluate all hierarchy nodes that do not meet the `WHERE` condition of the hierarchy navigator.
-   `WITH NOT MATCHED`
-   This addition can only be specified together with the `JOIN` addition. The aggregate functions evaluate all rows of the data source `data_source` specified after `JOIN` for which the `ON` condition of the join is not met.
-   `WITH TOTAL`
-   The aggregate functions evaluate all hierarchy nodes plus the rows of a data source `data_source` specified after `JOIN` that do not meet the `ON` condition.

FINAL(level) = 2. \\n\\ \\nSELECT agg~\* \\n FROM HIERARCHY\_DESCENDANTS\_AGGREGATE( \\n SOURCE demo\_cds\_parent\_child\_agg( p\_id = 'A' ) \\n MEASURES AVG( num ) AS avg, \\n MIN( num ) AS min, \\n MAX( num ) AS max, \\n SUM( num ) AS sum, \\n COUNT( \* ) AS cnt \\n WHERE hierarchy\_level <= @level ) AS agg \\n INTO TABLE @FINAL(cds\_hierarchy\_desc\_aggregate). **WITH Addition** **`HIERARCHY_AGGREGATE_TYPE`**\\ `SUBTOTAL` 1 `BALANCE` 2 `NOT MATCHED` 3 `TOTAL` 4 abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy\_navigators.html abenselect\_hierarchy\_agg\_navis.html