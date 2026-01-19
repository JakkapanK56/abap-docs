---
title: "ABENCDS_HIERARCHY_ATTRIBUTES"
description: |
  ABENCDS_HIERARCHY_ATTRIBUTES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_HIERARCHY_ATTRIBUTES.htm"
abapFile: "ABENCDS_HIERARCHY_ATTRIBUTES.html"
keywords: ["select", "if", "case", "class", "data", "ABENCDS", "HIERARCHY", "ATTRIBUTES"]
---

A [hierarchy attribute](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html) contains hierarchy-specific information about a row in a tabular result set of a database hierarchy function. The following table shows the name and meaning of the potential hierarchy attributes.

In the definition of a CDS hierarchy using [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html), the hierarchy attributes can be included in the [element list](ABENCDS_F1_HIERA_ELEMENT_LIST.html) by specifying their names explicitly after a prefix [`$node.`](ABENCDS_F1_HIERA_ELEMENT.html). This makes them components of the structured type represented by the CDS hierarchy with respect to ABAP.

In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the hierarchy attributes occur as additional [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) in the result set of an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) access. More specifically, this is also the case when a CDS hierarchy is accessed. In ABAP SQL this means that there are two different ways of accessing a hierarchy attribute specified in the element list of a CDS hierarchy. See the example class `CL_DEMO_HRRCHY_TREE_HIER_ATTR`.

**Name** **Data Type** **Meaning**\\ `HIERARCHY_RANK` `INT8` Sequential number granted as a unique hierarchy node ID when a hierarchy is created. `HIERARCHY_TREE_SIZE` `INT8` Number of [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) of the hierarchy node, including the hierarchy node itself. `HIERARCHY_PARENT_RANK` `INT8` 0 for [root nodes](ABENROOT_NODE_GLOSRY.html), otherwise the `HIERARCHY_RANK` ID of the [parent node](ABENCHILD_NODE_GLOSRY.html). `HIERARCHY_LEVEL` `INT4` [Hierarchy level](ABENHIERARCHY_LEVEL_GLOSRY.html) of the hierarchy node. Always 1 for [root nodes](ABENROOT_NODE_GLOSRY.html). For their [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html), the distance from the root node plus one. `HIERARCHY_IS_CYCLE` `INT1` Flag indicating whether the hierarchy node is part of (1) or is not part of (0) a [node cycle](ABENNODE_CYCLE_GLOSRY.html). `HIERARCHY_IS_ORPHAN` `INT1` Flag indicating whether the hierarchy node is (1) or is not (0) an [orphan node](ABENORPHAN_NODE_GLOSRY.html). `NODE_ID` For a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html): `SSTRING`, length 1333 \\
\\
For a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) (only in ABAP SQL): Refer to [`SELECT`, `FROM HIERARCHY`, `LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html). For a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html): Internal character-like key of the hierarchy node that concatenates the values of all [association target](ABENASSOCIATION_TARGET_GLOSRY.html) fields of the associated [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) specified in the `ON` conditions. If there is only one comparison in the `ON` condition, no concatenation is required, and the data type is the data type of the specified field of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). \\
\\
For a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) (only in ABAP SQL): The content of the level column that defines the current hierarchy level. `PARENT_ID` For a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html): `SSTRING`, length 1333 \\
\\
For a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) (only in ABAP SQL): Refer to [`SELECT`, `FROM HIERARCHY`, `LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html). For a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html): Internal character-like key of the hierarchy node that concatenates the values of all [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) fields of the associated [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) specified in the `ON` conditions. If there is only one comparison in the `ON` condition, no concatenation is required, and the data type is the data type of the specified field of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html). \\
\\
For a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) (only in ABAP SQL): The content of the level column that defines the hierarchy level f the preceding parent node. `VALID_FROM`, `VALID_UNTIL` \\
`DATS`, `TIMESTAMP`, `TIMESTAMPL` These attributes exist only for [temporal SQL hierarchies](ABENTEMPORAL_HIERARCHY_GLOSRY.html). They contain the limits of the [validity interval](ABENVALIDITY_INTERVAL_GLOSRY.html) of the current [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) of a [temporal SQL hierarchy](ABENTEMPORAL_HIERARCHY_GLOSRY.html). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_hierarchies.html abencds\_f1\_define\_hierarchy.html