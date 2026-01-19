---
title: "ABENDDDDL_HIERARCHY"
description: |
  ABENDDDDL_HIERARCHY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDDDL_HIERARCHY.htm"
abapFile: "ABENDDDDL_HIERARCHY.html"
keywords: ["select", "do", "if", "class", "data", "ABENDDDDL", "HIERARCHY"]
---

[Hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) are additional components of the result set when the following data sources are accessed in an ABAP SQL query:

The hierarchy columns have the same names and contain the values of the [hierarchy attributes](ABENHIERARCHY_ATTRIBUTE_GLOSRY.html) of the data sources above. Using these, they provide information about the SQL [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) in question. The following table shows the name and meaning of each hierarchy column:

Explicit access to the hierarchy columns when a CDS hierarchy is specified as a data source in a `SELECT` statement in the class `CL_DEMO_HIERARCHY_PARENT_CHILD`.

-   An [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html)
-   A [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html)\\ [`hierarchy_navigator`](ABENSELECT_HIERARCHY_NAVIGATORS.html)

-   In addition to the general hierarchy columns shown here, [hierarchy navigators](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) have several additional columns.
-   Hierarchies generated with [`LEVELS ( ... )`](ABENSELECT_HIERARCHY_GEN_LEVEL.html) from level-based hierarchy data have an additional column `HIERARCHY_LEVEL_NAME`.
-   The hierarchy columns must be specified explicitly in the [`SELECT`](ABAPSELECT_LIST.html) list before they can be selected.
-   The values of some hierarchy columns are usable only if the hierarchy is a tree-like SQL hierarchy in which a hierarchy node does not have multiple parent nodes.
-   Using the [`HIERARCHY_COMPOSITE_ID`](ABENSQL_HIERARCHY_COMP_ID.html) function, node IDs and parent IDs can be generated.

FINAL(start\_id) = 'A '. \\n\\ \\nSELECT FROM demo\_cds\_parent\_child( p\_id = @start\_id ) \\n FIELDS id, \\n parent, \\n hierarchy\_rank, \\n hierarchy\_tree\_size, \\n hierarchy\_parent\_rank, \\n hierarchy\_level, \\n hierarchy\_is\_cycle, \\n hierarchy\_is\_orphan, \\n node\_id, \\n parent\_id \\n INTO TABLE @FINAL(cds\_result). **Name** **Data Type** **Meaning**\\ `HIERARCHY_RANK` `INT8` Sequential number granted as a unique hierarchy node ID when a hierarchy is created. `HIERARCHY_TREE_SIZE` `INT8` Number of [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html) of the hierarchy node, including the hierarchy node itself. `HIERARCHY_PARENT_RANK` `INT8` 0 for [root nodes](ABENROOT_NODE_GLOSRY.html), otherwise the `HIERARCHY_RANK` ID of the [parent node](ABENCHILD_NODE_GLOSRY.html). `HIERARCHY_LEVEL` `INT4` [Hierarchy level](ABENHIERARCHY_LEVEL_GLOSRY.html) of the hierarchy node. Always 1 for [root nodes](ABENROOT_NODE_GLOSRY.html). For their [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html), the distance from the root node plus one. `HIERARCHY_IS_CYCLE` `INT1` Flag indicating whether the hierarchy node is part of (1) or is not part of (0) a [node cycle](ABENNODE_CYCLE_GLOSRY.html). `HIERARCHY_IS_ORPHAN` `INT1` Flag indicating whether the hierarchy node is (1) or is not (0) an [orphan node](ABENORPHAN_NODE_GLOSRY.html). `NODE_ID` For a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html): `SSTRING`, length 1333 \\
\\
For a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) (only in ABAP SQL): Refer to [`SELECT`, `FROM HIERARCHY`, `LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html). For a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html): Internal character-like key of the hierarchy node that concatenates the values of all [association target](ABENASSOCIATION_TARGET_GLOSRY.html) fields of the associated [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) specified in the `ON` conditions. If there is only one comparison in the `ON` condition, no concatenation is required, and the data type is the data type of the specified field of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html). \\
\\
For a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) (only in ABAP SQL): The content of the level column that defines the current hierarchy level. `PARENT_ID` For a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html): `SSTRING`, length 1333 \\
\\
For a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) (only in ABAP SQL): Refer to [`SELECT`, `FROM HIERARCHY`, `LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html). For a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html): Internal character-like key of the hierarchy node that concatenates the values of all [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) fields of the associated [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) specified in the `ON` conditions. If there is only one comparison in the `ON` condition, no concatenation is required, and the data type is the data type of the specified field of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html). \\
\\
For a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) (only in ABAP SQL): The content of the level column that defines the hierarchy level f the preceding parent node. `VALID_FROM`, `VALID_UNTIL` \\
`DATS`, `TIMESTAMP`, `TIMESTAMPL` These attributes exist only for [temporal SQL hierarchies](ABENTEMPORAL_HIERARCHY_GLOSRY.html). They contain the limits of the [validity interval](ABENVALIDITY_INTERVAL_GLOSRY.html) of the current [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) of a [temporal SQL hierarchy](ABENTEMPORAL_HIERARCHY_GLOSRY.html). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy.html