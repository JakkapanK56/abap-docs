---
title: "ABENSELECT_HIERARCHY_GEN_ASSOC"
description: |
  ABENSELECT_HIERARCHY_GEN_ASSOC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_HIERARCHY_GEN_ASSOC.htm"
abapFile: "ABENSELECT_HIERARCHY_GEN_ASSOC.html"
keywords: ["select", "insert", "do", "if", "case", "class", "data", "types", "ABENSELECT", "HIERARCHY", "GEN", "ASSOC"]
---

``... HIERARCHY( SOURCE hierarchy_source [WITH PRIVILEGED ACCESS]\                 CHILD TO PARENT ASSOCIATION _hierarchy_assoc                [PERIOD FROM field1 TO field2 VALID FROM from TO to]\                 START WHERE [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html)\                [SIBLINGS ORDER BY field1 [ASCENDING|DESCENDING][,                                   field2 [ASCENDING|DESCENDING], ...]]\                [DEPTH depth]\                [MULTIPLE PARENTS \{NOT ALLOWED\}\{LEAVES ONLY\}|ALLOWED]\                [ORPHANS IGNORE|ERROR|ROOT]\                [CYCLES ERROR|BREAKUP]\                [LOAD BULK|INCREMENTAL|load_option]\                [GENERATE SPANTREE]\                [CACHE ON|OFF|FORCE] ) ...``

[1. `... SOURCE hierarchy_source [WITH PRIVILEGED ACCESS]`](#ABAP_ADDITION_1@3@)

[2. `... CHILD TO PARENT ASSOCIATION _hierarchy_assoc`](#ABAP_ADDITION_2@3@)

[3. `... PERIOD FROM field1 TO field2 VALID FROM from TO to`](#ABAP_ADDITION_3@3@)

[4. `... START WHERE sql_cond`](#ABAP_ADDITION_4@3@)

[5. `... SIBLINGS ORDER BY field1 [ASCENDING|DESCENDING], ...`](#ABAP_ADDITION_5@3@)

[6. `... DEPTH depth`](#ABAP_ADDITION_6@3@)

[7. `... MULTIPLE PARENTS \{NOT ALLOWED\}|\{LEAVES ONLY\}|ALLOWED`](#ABAP_ADDITION_7@3@)

[8. `... ORPHANS IGNORE|ERROR|ROOT`](#ABAP_ADDITION_8@3@)

[9. `... CYCLES ERROR|BREAKUP`](#ABAP_ADDITION_9@3@)

[10. `... LOAD BULK|INCREMENTAL|load_option`](#ABAP_ADDITION_10@3@)

[11. `... GENERATE SPANTREE`](#ABAP_ADDITION_11@3@)

[12. `... CACHE ON|OFF|FORCE`](#ABAP_ADDITION_12@3@)

In this variant of the hierarchy generator `HIERARCHY`, a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html) is generated that is defined by parent-child-relations between different columns of a so called hierarchy source that must expose a hierarchy annotation. The following needs to be specified:

All other additions are optional and define further properties of the SQL hierarchy.

The columns of the SQL hierarchy are composed of the elements of the source specified after `SOURCE` and additional [hierarchy columns](ABENDDDDL_HIERARCHY.html).

The hierarchy generator `HIERARCHY` exposes all associations of the source `hierarchy_source` specified after `SOURCE` implicitly and leaves its [association target](ABENASSOCIATION_TARGET_GLOSRY.html) unchanged.

Specifies the hierarchy generator `HIERARCHY` as the data source of a `SELECT` statement in class `CL_DEMO_HIERARCHY_TREE`. The source of the hierarchy generator is a CDS view that uses the [global temporary table](ABENGLOBAL_TEMPORARY_TABLE_GLOSRY.html)\\ `DEMO_SIMPLE_TREE` as a data source and whose CDS association `_tree` defines the parent-child relationship. The hierarchy generator selects the row with the value of `start_id` in the column `ID` as the [root node](ABENROOT_NODE_GLOSRY.html) and, starting from this node, inserts all [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) in the result set that meet the `ON` condition of the hierarchy association. The result set contains all columns of the view `DEMO_CDS_SIMPLE_TREE_SOURCE`, plus all potential [hierarchy columns](ABENDDDDL_HIERARCHY.html). Executing `CL_DEMO_HIERARCHY_TREE` demonstrates the result of the `SELECT` statement.

The addition `SOURCE` specifies `hierarchy_source` as the [hierarchy source](ABENHIERARCHY_SOURCE_GLOSRY.html) of the hierarchy generator. This source must expose the [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html)\\ `_hierarchy_assoc` specified after `CHILD TO PARENT ASSOCIATION`. The following are potential sources `hierarchy_source`:

If a [CDS role](ABENCDS_ROLE_GLOSRY.html) is assigned to a CDS view specified as a source, the source is implicitly subject to [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) and only nodes that meet the [access conditions](ABENACCESS_CONDITION_GLOSRY.html) of the CDS role are transferred to the SQL hierarchy. When specifying the optional addition `WITH PRIVILEGED ACCESS`, the access control is deactivated, and the access conditions are not evaluated.

SQL hierarchies should only be nested in exceptional cases.

Uses a CDS view and two common table expressions as the source of the hierarchy generator `HIERARCHY` in the class `CL_DEMO_HIERARCHY_GENERATOR`.

All main queries have the same result.

Nesting of SQL hierarchies in the hierarchy generator `HIERARCHY` in the class `CL_DEMO_HIERARCHY_NESTED`. When executed, `CL_DEMO_HIERARCHY_NESTED` demonstrates the result of the `SELECT` statements. Three tree-like SQL hierarchies that start at the row with the value 1 in the column `ID` are restricted to a depth of 2. From these hierarchies, further SQL hierarchies are selected that start at the row with the value 5 in the column `ID`. The three inner SQL hierarchies are specified as a CDS hierarchy, the hierarchy generator `HIERARCHY`, and as a [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html). In the case of the CDS hierarchy and the CTE hierarchy, the hierarchy association must be verified as a self-association explicitly. The three inner SQL hierarchies have the same result sets, which means that the results of the three `SELECT` statements are also the same.

The addition `CHILD TO PARENT ASSOCIATION` specifies the [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html), whose `ON` condition of the hierarchy generator selects the [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) of the [root node set](ABENROOT_NODE_SET_GLOSRY.html). The hierarchy association must be exposed by the source `hierarchy_source` specified after `SOURCE`.

The hierarchy association defines the parent-child relationship between the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html). The following conditions apply here:

Each row of the result set of the source `hierarchy_source` that meets the `ON` condition for an existing hierarchy node is included recursively in the SQL hierarchy as its [child node](ABENCHILD_NODE_GLOSRY.html), if possible.

The optional additions define further conditions specifying whether a row can be included as a hierarchy node or not.

The following CDS view entity exposes its CDS association `_tree`. This CDS association meets all requirements of a hierarchy association and can be used as such.

Defines an SQL hierarchy as a [temporal SQL hierarchy](ABENTEMPORAL_HIERARCHY_GLOSRY.html) in which the hierarchy nodes are limited by an adjustment of time intervals.

A temporal SQL hierarchy is created as follows:

For temporal SQL hierarchies, there are additional [hierarchy columns](ABENDDDDL_HIERARCHY.html)\\ `VALID_FROM` and `VALID_UNTIL` that contain the interval limits of the [validity interval](ABENVALIDITY_INTERVAL_GLOSRY.html) of each hierarchy node.

The addition `PERIOD` must not be used with `GENERATE SPANTREE`.

Creates two [temporal SQL hierarchies](ABENTEMPORAL_HIERARCHY_GLOSRY.html) in the class `CL_DEMO_HIERARCHY_TEMPORAL`, where in one date fields and in the other time stamp fields are used as [periods](ABENPERIOD_GLOSRY.html).

When executed, this class demonstrates how the `PERIOD` addition works. The date and time stamp fields of the DDIC database table `DEMO_PARCHLD_PRD`, which are accessed in the source of the hierarchy generator `DEMO_CDS_PARENT_CHILD_SRC_PRD`, are filled with data for this purpose. A regular SQL hierarchy without the addition `PERIOD` and the two temporal SQL hierarchies are shown. The [validity intervals](ABENVALIDITY_INTERVAL_GLOSRY.html) are also output for these.

The addition `START WHERE` specifies the start condition for the hierarchy generator. After `START WHERE`, a logical expression [`sql_cond`](ABENABAP_SQL_EXPR_LOGEXP.html) must be specified that selects rows from the source `hierarchy_source`. The selected rows are inserted into the SQL hierarchy as a [root node set](ABENROOT_NODE_SET_GLOSRY.html). For each [root node](ABENROOT_NODE_GLOSRY.html) in the root node set, the [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) are selected that meet the `ON` condition of the hierarchy association and, if possible, inserted into the SQL hierarchy.

The start condition should select a meaningful set of root nodes. If no rows in the result set of the source `hierarchy_source` meet the condition, the SQL hierarchy is empty. If all rows meet the condition, the descendant nodes of every row are selected and inserted.

Specifies an interval condition for the start condition of the hierarchy generator `HIERARCHY` in the class `CL_DEMO_HIERARCHY_START_WHERE`. All rows in the CDS view specified as the source that meet the condition are inserted in the SQL hierarchy as root nodes and all their descendant nodes are selected. When executed, this class allows different limits to be entered and displays the result.

The addition `SIBLINGS ORDER BY` sorts [sibling nodes](ABENSIBLING_NODE_GLOSRY.html) in the SQL hierarchy generated by the hierarchy generator. If this addition is not used, the order of the sibling nodes is undefined.

Fields `field1`, `field2`, ... of the source `hierarchy_source` can be specified in a comma-separated list after the addition `hierarchy_source` to specify the order of the sibling nodes.

The addition `ASCENDING` or `DESCENDING` can be specified for each field to specify an ascending or descending order, whereby ascending is the default.

The fields specified after `ORDER BY` cannot be of the [type](ABENDDIC_BUILTIN_TYPES.html)\\ `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.

Ascending and descending sort of [sibling nodes](ABENSIBLING_NODE_GLOSRY.html) in the class `CL_DEMO_HRRCHY_SIBLINGS_ORDER`. When executed, this program demonstrates how these additions work.

The addition `depth` can be used to limit the number of [hierarchy levels](ABENHIERARCHY_LEVEL_GLOSRY.html) used to create [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html). `depth` expects a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html), or a [literal](ABENABAP_SQL_LITERALS.html) of type `i`. Only the types `b`, `s`, or `i` can be specified for `depth`.

The value in `depth` has the following meaning:

The addition `DEPTH` can be used only if the addition `ORPHANS` is not specified or is specified as `ORPHANS IGNORE`.

Limits the number of [hierarchy levels](ABENHIERARCHY_LEVEL_GLOSRY.html) in the class `CL_DEMO_HIERARCHY_DEPTH`. When executed, this program demonstrates how this addition works. It also shows the [hierarchy level](ABENHIERARCHY_LEVEL_GLOSRY.html) from the hierarchy column `HIERARCHY_LEVEL`.

The addition `MULTIPLE PARENTS` can be used to define whether the hierarchy generator is allowed to generate [child nodes](ABENCHILD_NODE_GLOSRY.html) with multiple [parent nodes](ABENPARENT_NODE_GLOSRY.html):

Creation of an SQL hierarchy in the class `CL_DEMO_HIERARCHY_MULTI_PRNTS`. Only leaf nodes can have multiple parents here.

When executed, this program demonstrates how the `MULTIPLE PARENTS` addition works.

The addition `ORPHANS` defines how [orphan nodes](ABENORPHAN_NODE_GLOSRY.html) are handled. The following categories of orphan nodes exist:

The additions work as follows:

Handles orphan nodes in the class `CL_DEMO_HIERARCHY_ORPHANS`.

When executed, this program demonstrates how the `ORPHANS` addition works.

The addition `CYCLES` defines how [node cycles](ABENNODE_CYCLE_GLOSRY.html) are defined. The additions work as follows:

If the addition `BREAKUP` is specified, `MULTIPLE PARENTS ALLOWED` must also be specified.

Handling of node cycles in the class `CL_DEMO_HIERARCHY_CYCLES`.

When executed, this program demonstrates how the `CYCLES` addition works.

The addition `LOAD` specifies the load policy for the generated hierarchy. It can be used for performance optimization.

The addition works as follows:

The executable example demonstrates how the addition `LOAD INCREMENTAL` can speed up the generation of a hierarchy.

[`BULK` vs `INCREMENTAL`](ABENSELECT_HIERARCHY_ABEXA.html)

If the addition `GENERATE SPANTREE` is specified, the hierarchy generator inserts only child nodes without multiple parent nodes, starting from every root node. If, due to its parent-child relationships, a child node were to have multiple parent nodes after its root node, exactly one of the possible paths from the root node to this child node is selected and the child node is created for this path only.

If the addition `GENERATE SPANTREE` is specified, the following additions must be specified at the same time:

Use of `GENERATE SPANTREE` in the class `CL_DEMO_HIERARCHY_SPANTREE`.

When executed, this program demonstrates how the `GENERATE SPANTREE` addition works.

The optional addition `CACHE` defines the caching policy for the generated hierarchy result. It can be used for performance optimization. The addition works as follows:

-   The [hierarchy source](ABENHIERARCHY_SOURCE_GLOSRY.html)\\ `hierarchy_source` of the SQL hierarchy must be specified after `SOURCE`.
-   After `CHILD TO PARENT ASSOCIATION`, a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html)\\ `_hierarchy_assoc` exposed by the source `hierarchy_source` must be specified. The [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) and [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of this association must be the source `hierarchy_source`. The `ON` condition of the hierarchy association defines the [parent-child relationships](ABENPCR_GLOSRY.html) between the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html).
-   `START WHERE` must be followed by a start condition that defines [root nodes](ABENROOT_NODE_GLOSRY.html) for the [root node set](ABENROOT_NODE_SET_GLOSRY.html) of the SQL hierarchy. The SQL hierarchy consists of the root nodes of the root node set and their [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html).

-   The order of the additions is fixed. They must be specified as shown here.
-   Rows of the result set of the source specified after `SOURCE` can occur more than once in the result set of the hierarchy generator, if selected by appropriate parent-child relationships.
-   This variant of the hierarchy generator `HIERARCHY` in ABAP SQL works in the same way as the statement [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). Accessing the hierarchy generator `HIERARCHY` as the data source of a query is the same as accessing a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) defined accordingly.
-   Since hierarchies generated from the `START WHERE` condition are buffered on the database, it is advisable to use fixed values for the root nodes of large hierarchies of data that do not change often. To evaluate subnodes of such hierarchies, the [hierarchy navigators](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) of ABAP SQL can then be used.
-   An association exposed implicitly by the hierarchy generator `HIERARCHY` can be used in [path expressions](ABENABAP_SQL_PATH.html) or in further hierarchy generators.

-   A CDS view `cds_view`
-   `cds_view` can be specified as a [CDS view](ABENCDS_VIEW_GLOSRY.html) that exposes the hierarchy association `_hierarchy_assoc` in its `SELECT` list.
-   A common table expression `+cte`
-   `+cte` can be specified as a preceding [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) in a [`WITH`](ABAPWITH.html) statement that exposes the hierarchy association `_hierarchy_assoc` using the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html). The self-association prerequisite can be met as follows:

-   The addition [`REDIRECTED`](ABAPWITH_ASSOCIATIONS_USING.html) is used to replace the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of an association of a data source of the common table expression with the common table expression itself.
-   [`JOIN cardinality`](ABAPWITH_ASSOCIATIONS_DEFINING.html) is used to define a CTE association as a self-association for the common table expression.

-   A nested SQL hierarchy `hierarchy`
-   The hierarchy generator `HIERARCHY` can use other SQL hierarchies [`hierarchy`](ABENSELECT_HIERARCHY.html) as a source. The following applies here:

-   A CDS hierarchy [`cds_hierarchy`](ABENSELECT_CDS_HIERARCHY.html) must expose the hierarchy association `_hierarchy_assoc` in its element list. To meet the self-association prerequisite, the association must be an additional association between the source of the CDS hierarchy and the CDS hierarchy.
-   The hierarchy generator `HIERARCHY` exposes all associations of its source implicitly.
-   A [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html) must use [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html) to expose the hierarchy association `_hierarchy_assoc`. Furthermore, the addition `REDIRECTED` must be used to replace the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the association in such a way that the self-association prerequisite is met.

-   The hierarchy generator uses the result of an SQL hierarchy specified after `SOURCE` as a source, whereby its additional [hierarchy columns](ABENDDDDL_HIERARCHY.html) are ignored. An outer hierarchy generator always adds its own hierarchy columns directly to the columns of the SQL hierarchy specified after `SOURCE`. Any hierarchy columns listed explicitly in the element list of a CDS hierarchy that is specified as a source, on the other hand, are part of this hierarchy's result set and are respected accordingly.

-   The first common table expression accesses the same CDS view and uses a path expression to [expose](ABAPWITH_ASSOCIATIONS_USING.html) the same hierarchy association. This expression must use [`REDIRECTED TO`](ABAPWITH_ASSOCIATIONS.html) to redirect the hierarchy association to itself and hence meet the self-association requirement.
-   The second common table expression accesses the DDIC database table `DEMO_SIMPLE_TREE` in the same way as the CDS view and [defines](ABAPWITH_ASSOCIATIONS_DEFINING.html) a separate [CTE association](ABENCTE_ASSOCIATION_GLOSRY.html) as a self-association that is then used as a hierarchy association.

-   The association must be a [self-association](ABENSELF_ASSOCIATION_GLOSRY.html).
-   Only equality comparisons with the operator `=` and combined using `AND` can occur in the `ON` condition of the association.
-   In each comparison in the `ON` condition, one field of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) must be compared with a field, which is prefixed with `_hierarchy_assoc`, of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html).
-   The [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the association cannot contain any fields that have the same name as a [hierarchy column](ABENDDDDL_HIERARCHY.html). An alternative element name must be defined for these fields.

-   With `field1` and `field2`, the fields of the source `hierarchy_source` are specified, which define the lower and upper limits of a [period](ABENPERIOD_GLOSRY.html) in the hierarchy details. `field1` and `field2` must be different fields of the same data type. This can be:

-   The built-in type [`DATS`](ABENDDIC_BUILTIN_TYPES.html) of the ABAP Dictionary.
-   A data type that is defined by one of the [DDIC data elements](ABENDATA_ELEMENT_GLOSRY.html)\\ `TIMESTAMP` or `TIMESTAMPL`.

-   `from` and `to` define the lower and upper limit of a time interval that acts as a condition for the periods of the [root node set](ABENROOT_NODE_SET_GLOSRY.html). For `from` and `to`, [host variables](ABENABAP_SQL_HOST_VARIABLES.html), [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html), and [type-compliant literals](ABENABAP_SQL_LITERALS.html) can be specified, whose ABAP data type matches the dictionary data type of `field1` and `field2` exactly.

-   Only [root nodes](ABENROOT_NODE_GLOSRY.html) of the [root node set](ABENROOT_NODE_SET_GLOSRY.html) in which the period defined using `field1` and `field2` has a non empty intersection with the time interval defined by `from` and `to` are respected. This intersection forms the [validity interval](ABENVALIDITY_INTERVAL_GLOSRY.html) of the root node.
-   Only [child nodes](ABENCHILD_NODE_GLOSRY.html) in which the period defined by `field1` and `field2` has a non empty intersection with the validity interval of the [parent node](ABENPARENT_NODE_GLOSRY.html) are generated. This intersection forms the [validity interval](ABENVALIDITY_INTERVAL_GLOSRY.html) of the child node.

-   The validity interval of a descendant node is always a subset of a validity interval of all ancestor nodes. Validity intervals can only remain the same or become narrower from hierarchy level to hierarchy level, they never widen.
-   For a descendant node to belong to a temporal SQL hierarchy, it is not sufficient for its period to overlap with the time interval defined by `from` and `to`. Only the validity interval of the parent node is decisive. A path of a regular SQL hierarchy is truncated in a temporal SQL hierarchy at the position in which there is no intersection between the period and the preceding validity interval.
-   The [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) of the current [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) must not have any fields called `VALID_FROM` or `VALID_UNTIL`. An alternative element name must be defined for these fields.
-   The value of `to` can also be less than the value of `from`. However, a validity interval is formed where necessary. In contrast, if the value of the lower interval limit of the period is greater than the value of the upper interval limit, the validity interval is empty.
-   Additions such as `MULTIPLE PARENTS` or `CYCLES` affect the temporal SQL hierarchy. Nodes that would raise an exception in a regular SQL hierarchy can be hidden in a temporal SQL hierarchy.
-   On an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), the hierarchy generator function [`HIERARCHY_TEMPORAL`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395) is used to create a temporal SQL hierarchy.

-   The temporal SQL hierarchy based on date fields contains only the nodes with the values *A*, `B`, and `C` in the column `ID`. The period of the node with the value *D* does not overlap with the validity interval of the parent node with the value *B*. This means that the child node with the value *E* is truncated, regardless of its period. All other nodes `F` to *I* haven empty periods and are not relevant anyway.
-   The temporal SQL hierarchy based on time stamps contains all nodes with periods `TS_FROM` to `TS_TO` that are not empty. The example illustrates how the validity intervals with the hierarchy levels can become narrower. In the last row, the validity interval corresponds to the previous one, even though the period is wider.

-   If additionally a general [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause is specified in current query, it affects the SQL hierarchy that is sorted by `SIBLINGS ORDER BY`.
-   The additional [hierarchy columns](ABENDDDDL_HIERARCHY.html) cannot be specified after `SIBLINGS ORDER BY`. They can, however, be specified in the general [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause of the current query.
-   The fields of the source `hierarchy source` must be specified by their name. It is not possible to specify a position as in the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause.

-   For `depth` values greater than 0, as many hierarchy edges as specified in `depth` are traced, starting from a [root node](ABENROOT_NODE_GLOSRY.html).
-   If the value of `depth` is 0, only the [root nodes](ABENROOT_NODE_GLOSRY.html) are inserted into the SQL hierarchy.
-   If `depth` is less than 0, no [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) are created and `sy-subrc` is set to 4.

-   `NOT ALLOWED`
-   This is the default setting. A child node can have exactly on parent node only).
-   `LEAVES ONLY`
-   Only [leaf nodes](ABENLEAF_NODE_GLOSRY.html) can have multiple parent nodes.
-   `ALLOWED`
-   All hierarchy nodes can have multiple parent nodes.

-   The first `SELECT` statement does not specify the addition and `NOT ALLOWED` is applied implicitly. The hierarchy node with the ID `D` has three parent nodes and hence an exception is raised.
-   The next `SELECT` statement specifies the addition `MULTIPLE PARENTS LEAVES ONLY`. The hierarchy node with the ID `D` is a leaf node, which means the function can be accessed.
-   A child node for the row with the ID `D` is inserted in front of the next `SELECT` statement in the DDIC database table `DEMO_PARENT_CHLD`. If used, the addition `MULTIPLE PARENTS LEAVES ONLY` now also raises an exception.
-   The next `SELECT` statement specifies the addition `MULTIPLE PARENTS ALLOWED` and it is possible to access the table again.

-   Hierarchy nodes that could have parent nodes according to the parent-child relationship, but the parent nodes are not in the SQL hierarchy (true orphans).
-   Hierarchy nodes that cannot be reached from the root node set using hierarchy edges.
-   Hierarchy nodes that are part of a [node cycle](ABENNODE_CYCLE_GLOSRY.html) and cannot be reached from the root node set using hierarchy nodes (island orphans).

-   `IGNORE`
-   This is the default setting. Any orphan nodes are not inserted in the SQL hierarchy.
-   `ERROR`
-   Any orphan nodes detected raise an exception.
-   `ROOT`
-   Orphan nodes are inserted into the SQL hierarchy as follows:

-   True orphans are included in the root node set as root nodes and flagged as orphan nodes in the [hierarchy column](ABENDDDDL_HIERARCHY.html)\\ `HIERARCHY_IS_ORPHAN`.
-   [Descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) of true orphans are handled like those of parent nodes from the root node set, but are also flagged as orphan nodes in the [hierarchy column](ABENDDDDL_HIERARCHY.html)\\ `HIERARCHY_IS_ORPHAN`.
-   For the hierarchy nodes of island orphans, a parent node in the root node set is generated for the child node where the cycle occurs. In the generated root node, all columns of the source `hierarchy_source` contain the null value. In the [hierarchy columns](ABENDDDDL_HIERARCHY.html), the additional root node is flagged as an orphan node and `PARENT_ID` also contains the null value.

-   The first `SELECT` statement specifies the addition `ORPHANS IGNORE`. All orphan nodes are ignored and only the root node set consisting of a single root node is read and inserted in the SQL hierarchy.
-   The next `SELECT` statement specifies the addition `ORPHANS ERROR`. The SQL hierarchy would contain orphan nodes and hence an exception is raised.
-   The next `SELECT` statement specifies the addition `ORPHANS ROOT` and all orphan nodes are inserted in the SQL hierarchy:

-   The hierarchy node with the value *B* in the column `ID` is a true orphan node. It contains a blank in the column `PARENT_ID` but there is no root node with a blank in the column `ID`. The addition `ROOT` includes the hierarchy node itself in the root node set (the hierarchy column `HIERARCHY_PARENT_RANK` has the value 0) and the row is flagged as an orphan node in the hierarchy column `HIERARCHY_IS_ORPHAN`.
-   The hierarchy node with the value *C* in the column `ID` contains the value *B* in the column `PARENT_ID`. The parent node is an orphan node included in the root node set, which means that this hierarchy node is also flagged as an orphan node.
-   The hierarchy node with the value *X* in the column `ID` also contains the value *X* in the column `PARENT_ID`. The hierarchy node therefore starts a node cycle where this node is itself the parent node. It is not part of the root node set, however, which means it is an island orphan. A parent node is inserted into the root node set in which the columns of the CDS view `DEMO_CDS_PARENT_CHILD_SOURCE` and the hierarchy column `PARENT_ID`, contain null values.
-   The hierarchy nodes with the values `U`, `V`, and *W* in the column `ID` also comprise an island orphan. None of the hierarchy nodes in this node cycle is a root node. Again, a parent node is inserted in the root node set in which the columns of the CDS view and the hierarchy column `PARENT_ID`, contain null values.

-   `ERROR`
-   This is the default setting. An exception is raised when a node cycle is detected.
-   `BREAKUP`
-   The tracing of [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) is terminated at the child node where the node cycle occurs and the [hierarchy column](ABENDDDDL_HIERARCHY.html)\\ `HIERARCHY_IS_CYCLE` is set to the value 1.

-   The first `SELECT` statement specifies the addition `CYCLES BREAKUP`. Here, the root node set consists of four root nodes of the CDS view `DEMO_CDS_PARENT_CHILD_SOURCE` and the following node cycles are detected:

-   The child node with the value *A* in the column `ID` is also its parent node. The hierarchy column `HIERARCHY_IS_CYCLE` contains the value 1 and no more descendant nodes are created.
-   Starting from the hierarchy node with the value *X* in the column `ID`, child nodes are created with the values `Y` and `Z` and again *X*. The cycle is detected at the final child node, `HIERARCHY_IS_CYCLE` contains the value 1, and no more descendant nodes are created. The same applies to the descendant nodes starting from the root nodes with the values `Y` and `Z`.

-   The second `SELECT` statement specifies the addition `CYCLES ERROR` and raises an exception.

-   `BULK`
-   This is the default setting. The entire source table of the hierarchy is loaded.
-   `INCREMENTAL`
-   Only the rows of the source table that can be reached from the start nodes ([root node set](ABENROOT_NODE_SET_GLOSRY.html)) are loaded.
-   `load_option`
-   `load_option` is an [enumerated object](ABENENUMERATED_OBJECT_GLOSRY.html) with the [enumerated type](ABENENUMERATED_TYPE_GLOSRY.html)\\ `LOAD_OPTION` from the class `SQL_HIERARCHY` and the following [enumerated constants](ABENENUMERATED_CONSTANT_GLOSRY.html) can be passed:

-   `SQL_HIERARCHY=>C_LOAD_OPTION-BULK`: equivalent to `LOAD BULK`.
-   `SQL_HIERARCHY=>C_LOAD_OPTION-INCREMENTAL`: equivalent to `LOAD INCREMENTAL`.

-   The performance optimization with `LOAD INCREMENTAL` depends on the data source. If the source table is very large and the hierarchy generator reads relatively few rows, there is a positive effect. If, on the other hand, the source table has only few rows and they are all part of the hierarchy, `LOAD INCREMENTAL` might even take longer than `LOAD BULK`.
-   `LOAD INCREMENTAL` should not be used with [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) as data source, because it does not have any positive effect then (if anything, it slows down the performance).

-   If the paths have different lengths, the shortest is selected.
-   If the paths all have the same length, the first path found is selected.

-   `MULTIPLE PARENTS ALLOWED`
-   `ORPHANS IGNORE` or `ORPHANS` not specified
-   `CYCLES BREAKUP`

-   If the parent-child relationships for the current data produce only tree-like SQL hierarchies, the addition `GENERATE SPANTREE` is ignored.
-   Selecting one of multiple paths to a child node does not mean that all others are completely discarded. In this case, only the edges leading to the child node are missing.
-   The addition `GENERATE SPANTREE` can be used to detect whether at least one path leads from a root node to a child node without the result set needing to contain all paths.
-   The addition `GENERATE SPANTREE` is used in an [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) to access the hierarchy generator function [`HIERARCHY_SPANTREE`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395) there.

-   The first `SELECT` statement does not specify the addition `GENERATE SPANTREE`. The SQL hierarchy contains all possible paths from root nodes to child nodes.
-   The second `SELECT` statement specifies the addition `GENERATE SPANTREE`. Starting from each root node, the result set only contains one path to the potential child nodes:

-   From the root node with the value *A* in `ID`, two paths lead to `D`. Only the shorter path directly from *A* to `D` is created. The connection between `C` and `D` in the longer path is not created.
-   From the root node with the value *A* in `ID`, two paths lead to `N`. Only one of the two paths from `L` to `N` or `M` to `N` is created.
-   The child node with the value *Z* in `ID` has two parent nodes *X* and `Y`. Since both are root nodes, both paths are created.

-   `ON`
-   The generated hierarchy is cached by the HANA database if the system assesses the source to be reliably deterministic. This is the default behavior.
-   `OFF`
-   The generated hierarchy is not cached by the HANA database.
-   `FORCE`
-   The generated hierarchy is cached by the HANA database even if the source cannot be assessed to be reliably deterministic.

FINAL(start\_id) = 1. \\n\\ \\nSELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = @start\_id \\n SIBLINGS ORDER BY parent \\n MULTIPLE PARENTS NOT ALLOWED ) \\n FIELDS id, \\n parent, \\n name, \\n hierarchy\_rank, \\n hierarchy\_tree\_size, \\n hierarchy\_parent\_rank, \\n hierarchy\_level, \\n hierarchy\_is\_cycle, \\n hierarchy\_is\_orphan, \\n node\_id, \\n parent\_id \\n INTO TABLE @FINAL(asql\_result). FINAL(start\_id) = 1. \\n\\ \\n"CDS view as source of hierarchy generator \\n\\ \\nSELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = @start\_id \\n SIBLINGS ORDER BY parent \\n MULTIPLE PARENTS NOT ALLOWED ) \\n FIELDS name \\n INTO TABLE @FINAL(cds\_result). \\n\\ \\n"CTE with association exposed as path as source of hierarchy generator \\n\\ \\nWITH +tree AS ( \\n SELECT FROM demo\_cds\_simple\_tree\_source AS tree \\n FIELDS \* ) \\n WITH ASSOCIATIONS ( \\\\\_tree \\n REDIRECTED TO +tree \\n VIA tree ) \\n SELECT FROM HIERARCHY( \\n SOURCE +tree \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = @start\_id ) \\n FIELDS name \\n INTO TABLE @FINAL(cte\_path\_result). \\nASSERT cte\_path\_result = cds\_result. \\n\\ \\n"CTE with association defined as join as source of hierarchy generator \\n\\ \\nWITH +simple\_tree\_source AS ( \\n SELECT FROM demo\_simple\_tree \\n FIELDS id, \\n parent\_id as parent, \\n name ) \\n WITH ASSOCIATIONS ( JOIN MANY TO ONE +simple\_tree\_source \\n as \_tree \\n ON +simple\_tree\_source~parent = \_tree~id ) \\n SELECT FROM HIERARCHY( \\n SOURCE +simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = @start\_id ) \\n FIELDS name \\n INTO TABLE @FINAL(cte\_join\_result). \\nASSERT cte\_join\_result = cds\_result. "CDS hierarchy as source of hierarchy generator \\n\\ \\nSELECT FROM HIERARCHY( \\n SOURCE demo\_cds\_simple\_tree\_redir( p\_id = 1, \\n p\_depth = 2 ) \\n CHILD TO PARENT ASSOCIATION \_redir \\n START WHERE id = 5 ) \\n FIELDS id, \\n parent, \\n hierarchy\_rank, \\n hierarchy\_level \\n INTO TABLE @FINAL(hierarchy\_cds\_hierarchy). \\n\\ \\n"Hierarchy generator as source of hierarchy generator \\n\\ \\nSELECT FROM HIERARCHY( \\n SOURCE HIERARCHY( \\n SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 1 \\n DEPTH 2 ) \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 5 ) \\n FIELDS id, \\n parent, \\n hierarchy\_rank, \\n hierarchy\_level \\n INTO TABLE @FINAL(hierarchy\_hierarchy). \\nASSERT hierarchy\_hierarchy = hierarchy\_cds\_hierarchy. \\n\\ \\n"CTE hierarchy as source of hierarchy generator \\n\\ \\nWITH +hierarchy AS ( \\n SELECT FROM HIERARCHY( \\n SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 1 \\n DEPTH 2 ) AS hierarchy \\n FIELDS id, \\n parent ) \\n WITH HIERARCHY hierarchy \\n WITH ASSOCIATIONS ( \\\\\_tree \\n REDIRECTED TO +hierarchy \\n VIA hierarchy ) \\n SELECT FROM HIERARCHY( \\n SOURCE +hierarchy \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 5 \\n ) \\n FIELDS id, \\n parent\_id, \\n hierarchy\_rank, \\n hierarchy\_level \\n INTO TABLE @FINAL(hierarchy\_cte\_hierarchy). \\nASSERT hierarchy\_cte\_hierarchy = hierarchy\_cds\_hierarchy. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n as select from demo\_simple\_tree\\n association to exact one DEMO\_CDS\_SIMPLE\_TREE\_SOURCE as \_tree \\n on $projection.parent = \_tree.id\\n\\{\\n \_tree,\\n key id,\\n parent\_id as parent,\\n name\\n\\}\\n SELECT FROM HIERARCHY( \\n SOURCE demo\_cds\_parent\_child\_src\_prd \\n CHILD TO PARENT ASSOCIATION \_relat \\n PERIOD FROM date\_from TO date\_to \\n VALID FROM @( CONV d( cl\_demo\_date\_time=>get\_user\_date( ) - 1 ) ) \\n TO @( CONV d( cl\_demo\_date\_time=>get\_user\_date( ) + 1 ) ) \\n START WHERE id = 'A' \\n SIBLINGS ORDER BY id ) \\n FIELDS id, \\n parent, \\n valid\_from, \\n valid\_until \\n INTO TABLE @FINAL(asql\_date\_period) ##TYPE. \\n\\ \\nGET TIME STAMP FIELD FINAL(ts). \\nSELECT FROM HIERARCHY( \\n SOURCE demo\_cds\_parent\_child\_src\_prd \\n CHILD TO PARENT ASSOCIATION \_relat \\n PERIOD FROM ts\_from TO ts\_to \\n VALID FROM @( CONV timestamp( \\n cl\_abap\_tstmp=>subtractsecs( \\n tstmp = ts \\n secs = 86400 ) ) ) \\n TO @( CONV timestamp( \\n cl\_abap\_tstmp=>add( \\n tstmp = ts \\n secs = 86400 ) ) ) \\n START WHERE id = 'A' \\n SIBLINGS ORDER BY id ) \\n FIELDS id, \\n parent, \\n valid\_from, \\n valid\_until \\n INTO TABLE @FINAL(asql\_ts\_period) ##TYPE. FINAL(from) = 'A '. \\nFINAL(to) = 'B '. \\n\\ \\nSELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id BETWEEN @from AND @to \\n SIBLINGS ORDER BY parent \\n MULTIPLE PARENTS ALLOWED \\n CYCLES BREAKUP ) \\n FIELDS id, \\n parent \\n INTO TABLE @FINAL(asql\_result). SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 1 \\n SIBLINGS ORDER BY id ASCENDING ) \\n FIELDS id, \\n parent, \\n hierarchy\_parent\_rank \\n INTO TABLE @FINAL(result\_asc). \\n\\ \\nSELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 1 \\n SIBLINGS ORDER BY id DESCENDING ) \\n FIELDS id, \\n parent, \\n hierarchy\_parent\_rank \\n INTO TABLE @FINAL(result\_desc). SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_source \\n CHILD TO PARENT ASSOCIATION \_tree \\n START WHERE id = 1 \\n DEPTH 1 ) \\n FIELDS name, \\n hierarchy\_level \\n INTO TABLE @FINAL(result\_1). SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = 'A' \\n MULTIPLE PARENTS LEAVES ONLY ) \\n FIELDS id, \\n parent, \\n hierarchy\_level \\n INTO TABLE @FINAL(leaves\_only). SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = 'A' \\n MULTIPLE PARENTS ALLOWED \\n ORPHANS ROOT \\n CYCLES BREAKUP ) \\n FIELDS CASE WHEN id IS NULL THEN '\_\_' \\n ELSE id \\n END AS id, \\n CASE WHEN parent IS NULL THEN '\_\_' \\n ELSE parent \\n END AS parent, \\n hierarchy\_is\_orphan, \\n hierarchy\_is\_cycle, \\n hierarchy\_rank, \\n hierarchy\_parent\_rank, \\n hierarchy\_level \\n INTO TABLE @FINAL(root). SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = 'A' OR \\n id = 'X' OR \\n id = 'Y' OR \\n id = 'Z' \\n MULTIPLE PARENTS ALLOWED \\n CYCLES BREAKUP ) \\n FIELDS id, \\n parent, \\n hierarchy\_is\_cycle, \\n hierarchy\_level \\n INTO TABLE @FINAL(breakup). SELECT FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source \\n CHILD TO PARENT ASSOCIATION \_relat \\n START WHERE id = 'A' OR \\n id = 'K' OR \\n id = 'X' OR \\n id = 'Y' \\n MULTIPLE PARENTS ALLOWED \\n CYCLES BREAKUP \\n GENERATE SPANTREE ) \\n FIELDS id, \\n parent \\n INTO TABLE @FINAL(spantree). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy.html abenselect\_hierarchy\_generator.html