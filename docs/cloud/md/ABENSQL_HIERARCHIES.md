---
title: "ABENSQL_HIERARCHIES"
description: |
  ABENSQL_HIERARCHIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_HIERARCHIES.htm"
abapFile: "ABENSQL_HIERARCHIES.html"
keywords: ["select", "while", "if", "case", "data", "ABENSQL", "HIERARCHIES"]
---

An [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) is a tabular set of rows where each row represents one [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) of a [parent-child hierarchy](ABENPCR_HIERARCHY_GLOSRY.html). ABAP SQL hierarchies appear in ABAP as follows:

The columns of an ABAP SQL hierarchy are composed as follows:

-   As the result set of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html). It is a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html) created from a data source using [parent-child relationships](ABENPCR_GLOSRY.html) defined by a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html).
-   As the result set of the hierarchy generator [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html). The hierarchy generator can generate the following hierarchies:

-   A [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html) created from a data source using [parent-child relationships](ABENPCR_GLOSRY.html) defined by a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html).
-   A [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) that is created from a data source using a set of its columns for defining the [hierarchy levels](ABENHIERARCHY_LEVEL_GLOSRY.html).

-   As the result set of a [CTE hierarchy](ABENCTE_HIERARCHY_GLOSRY.html) in the subsequent queries of the current [`WITH`](ABAPWITH.html) statement.

-   Components of the data source used when the hierarchy is created by a CDS hierarchy or created by the hierarchy generator.

-   In the case of CDS hierarchies and CTE hierarchies, these are exactly the components listed here.
-   In the case of the hierarchy generator `HIERARCHY`, these are all components of the source of the SQL hierarchy.

-   Additional [hierarchy columns](ABENDDDDL_HIERARCHY.html). For each hierarchy node, the hierarchy columns contain its [hierarchy attributes](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html), which describe certain hierarchy-specific properties.

-   In an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html), the [hierarchy column](ABENHIERARCHY_COLUMN_GLOSRY.html)\\ [`HIERARCHY_LEVEL`](ABENDDDDL_HIERARCHY.html) contains the value of the hierarchy level of a hierarchy node.
-   Sibling nodes have the same values in the hierarchy column [`HIERARCHY_PARENT_RANK`](ABENDDDDL_HIERARCHY.html).
-   While each SQL hierarchies is a [parent-child hierarchy](ABENPCR_HIERARCHY_GLOSRY.html), there are differences between [parent-child-based hierarchies](ABENPC_BASED_HIERA_GLOSRY.html) and [level-based hierarchies](ABENLEVEL_BASED_HIERA_GLOSRY.html):

-   A [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html) is general in a sense that it can represent any parent child hierarchy. There can be [orphan nodes](ABENORPHAN_NODE_GLOSRY.html), [child nodes](ABENCHILD_NODE_GLOSRY.html) with multiple [parent nodes](ABENPARENT_NODE_GLOSRY.html), [node cycles](ABENNODE_CYCLE_GLOSRY.html) and the path lengths between a [root nodes](ABENROOT_NODE_GLOSRY.html) and [leave nodes](ABENLEAF_NODE_GLOSRY.html) is not fixed.
-   A [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) is special in a sense that it represents [tree hierarchies](ABENTREE_HIERARCHY_GLOSRY.html) where no orphans, multiple parents or cycles are possible. The path lengths between root nodes and leaf nodes is defined by the highest level and fixed for the complete SQL hierarchy.

-   In a [parent-child hierarchy](ABENPCR_HIERARCHY_GLOSRY.html) created from a data source using [parent-child relationships](ABENPCR_GLOSRY.html) defined by a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html):

-   The [root nodes](ABENROOT_NODE_GLOSRY.html) are part of the [root node set](ABENROOT_NODE_SET_GLOSRY.html). The [hierarchy column](ABENHIERARCHY_COLUMN_GLOSRY.html)\\ [`HIERARCHY_PARENT_RANK`](ABENDDDDL_HIERARCHY.html) of a root node of a SQL hierarchy contains the value 0 and the hierarchy column [`HIERARCHY_LEVEL`](ABENDDDDL_HIERARCHY.html) contains the value 1.
-   The nodes of the root node set are not considered [orphan nodes](ABENORPHAN_NODE_GLOSRY.html). The hierarchy column [`HIERARCHY_IS_ORPHAN`](ABENDDDDL_HIERARCHY.html) contains the value 0.
-   In case of a [node cycle](ABENNODE_CYCLE_GLOSRY.html), the [hierarchy column](ABENHIERARCHY_COLUMN_GLOSRY.html)\\ [`HIERARCHY_IS_CYCLE`](ABENDDDDL_HIERARCHY.html) contains the value 1.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy.html