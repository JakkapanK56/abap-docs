---
title: "ABENSELECT_HIERARCHY_GEN_LEVEL"
description: |
  ABENSELECT_HIERARCHY_GEN_LEVEL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_HIERARCHY_GEN_LEVEL.htm"
abapFile: "ABENSELECT_HIERARCHY_GEN_LEVEL.html"
keywords: ["select", "insert", "do", "if", "case", "data", "types", "internal-table", "ABENSELECT", "HIERARCHY", "GEN", "LEVEL"]
---

``... HIERARCHY( SOURCE [`data_source`](ABAPSELECT_DATA_SOURCE.html)\ [`[AS tabalias]`](ABAPFROM_CLAUSE.html)\                 LEVELS ( [`col1`](ABENABAP_SQL_COLUMNS.html), [`col2`](ABENABAP_SQL_COLUMNS.html), ... )                [SIBLINGS ORDER BY field1 [ASCENDING|DESCENDING][,                                   field2 [ASCENDING|DESCENDING], ...]]\                [CACHE ON|OFF|FORCE] ) ...``

[1. `... SOURCE data_source [AS tabalias]`](#ABAP_ADDITION_1@3@)

[2. `... LEVELS ( col1, col2, ... )`](#ABAP_ADDITION_2@3@)

[3. `... SIBLINGS ORDER BY field1 [ASCENDING|DESCENDING], ...`](#ABAP_ADDITION_3@3@)

[4. `... CACHE ON|OFF|FORCE`](#ABAP_ADDITION_4@3@)

In this variant of the hierarchy generator `HIERARCHY`, a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html), is generated based on a set of columns of a data source that define the levels of the hierarchy. The row content of these level columns is interpreted as the nodes of a path from a [root](ABENROOT_NODE_GLOSRY.html) to a [leaf node](ABENLEAF_NODE_GLOSRY.html) that spans all levels. In the resulting hierarchy, all leaf nodes have the same level that is the highest level of the hierarchy.

The following needs to be specified:

From these specifications, a SQL hierarchy is generated as follows:

If one level column of a row of the data source contains the [null value](ABENNULL_VALUE_GLOSRY.html), the row is not included in the SQL hierarchy.

After `SOURCE`, any single data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) that can be used in the `FROM` clause can be specified.

The addition `LEVELS` lists the level columns [`col1`](ABENABAP_SQL_COLUMNS.html), [`col2`](ABENABAP_SQL_COLUMNS.html), ... of the data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) that define the levels of the [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html). The level columns are specified by their name optionally preceded by the name of the data source (`data_source~` or `tabalias~`). Only columns of the data source `data_source` can be specified and each column can be specified only once. The order in which the columns are listed does not matter but the hierarchy level is determined by the order of the columns in the data source. Columns of the data types [`STRING`](ABENDDIC_BUILTIN_TYPES.html), [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), or [`GEOM_EWKB`](ABENDDIC_BUILTIN_TYPES.html) cannot be specified. Either all or none of the level columns can have the data type [`RAW`](ABENDDIC_BUILTIN_TYPES.html) or [`LRAW`](ABENDDIC_BUILTIN_TYPES.html).

Only columns of the data source can be specified after `LEVELS`. [Literals](ABENABAP_SQL_LITERALS.html), [host variables](ABENABAP_SQL_HOST_VARIABLES.html), [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html), [SQL expressions](ABAPSQL_EXPR.html), and [SQL path expressions](ABENABAP_SQL_PATH.html) are not possible.

This addition has the same functionality as the addition [`SIBLINGS`](ABENSELECT_HIERARCHY_GEN_ASSOC.html) for [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html). Here, fields of the data source `data_source` can be specified.

This addition has the same functionality as the addition [`CACHE`](ABENSELECT_HIERARCHY_GEN_ASSOC.html) for [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html).

Generation of a level-based hierarchy from an internal table `level_tab`. The columns `col1`, `col2`, `col3` are used as level columns. The result contains columns from the data source as well as hierarchy columns. The hierarchy columns `HIERARCHY_RANK` and `HIERARCHY_PARENT_RANK` show a parent-child relationship.

-   A data source [`data_source`](ABAPSELECT_DATA_SOURCE.html) must be specified after `SOURCE`.
-   After `LEVELS` the columns of the data source must be listed that define the levels of the level-based hierarchy.

-   Each column specified after `LEVELS` defines a [hierarchy level](ABENHIERARCHY_LEVEL_GLOSRY.html) of the resulting level-based hierarchy. The level numbering depends on the order of these columns in the data source.

-   The leftmost column defines [root nodes](ABENROOT_NODE_GLOSRY.html) of level 1.
-   The rightmost column defines [leaf nodes](ABENLEAF_NODE_GLOSRY.html) of the highest level.
-   The columns in between define [child nodes](ABENCHILD_NODE_GLOSRY.html) that make up a path from the root to the leave node.

-   The rows of the [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) are constructed as follows:

-   Each row of the data results in a node of the highest level.
-   For each preceding level one row is inserted into the hierarchy with its respective level in such a way that there are no duplicates in the level columns.
-   The root nodes represent the set of unique values of the leftmost column.

-   The columns of the SQL hierarchy are composed of the columns of the source specified after `SOURCE` and additional [hierarchy columns](ABENDDDDL_HIERARCHY.html). The columns of the data source are filled as follows:

-   In the row of the highest level, all columns of the data source are filled with the data from the data source.
-   In the rows of lower levels, only the column that defines the level and the columns of lower levels are filled with the data from the data source. All other columns are filled with the [null value](ABENNULL_VALUE_GLOSRY.html).

-   The [hierarchy columns](ABENHIERARCHY_COLUMN_GLOSRY.html) are filled in each row with their [corresponding values](ABENDDDDL_HIERARCHY.html).
-   In addition to the general [hierarchy columns](ABENDDDDL_HIERARCHY.html), a level-based hierarchy has an additional column `HIERARCHY_LEVEL_NAME` with the type `SSTRING` and length 256 that contains the uppercase name of the level column that defines the current hierarchy level.
-   The hierarchy columns `NODE_ID` and `PARENT_ID` have a different meaning than for a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html):

-   `NODE_ID` contains the content of the level column that defines the current hierarchy level.
-   `PARENT_ID` contains the content of the level column that defines the hierarchy level of the preceding parent node.

-   The data type of columns `NODE_ID` and `PARENT_ID` are inferred as follows:

-   If all level columns have the same type `INT1`, `INT2`, `INT4`, `INT8`, `FLTP`, `D16N`, `D34N`, `TIMN`, `DATN`, or `UTCL`, the type of the hierarchy columns is the same as the type of the level columns.
-   In all other cases the hierarchy columns have type `SSTRING` and length 1333.

-   The order of the additions is fixed. They must be specified as shown here.
-   In the [relational data model](ABENRELATIONAL_DATA_MODEL_GLOSRY.html), hierarchical data stored in [relational databases](ABENRELATIONAL_DATABASE_GLOSRY.html) are a common phenomenon, where the key fields are mapped to hierarchy levels.
-   Transforming hierarchical data from relational databases into SQL hierarchies makes the hierarchy attributes available and enables the usage of [hierarchy navigators](ABENHIERARCHY_NAVIGATOR_GLOSRY.html) for these data (refer to the executable example [ABAP SQL - Level-based Hierarchy of Flight Data](ABENSHEET_ABAP_SQL_LEV_HIERA_ABEXA.html)).
-   Additions as `MULTIPLE PARENTS`, `ORPHANS` or `CYCLES` that are necessary for [parent-child-based hierarchies](ABENPC_BASED_HIERA_GLOSRY.html), are not needed for level-based hierarchies. By their definition, multiple parents, orphans and cycles cannot appear in level-based hierarchies.
-   The [hierarchy edges](ABENHIERARCHY_EDGE_GLOSRY.html) between neighboring nodes of a path in a level-based hierarchies are also parent-child-relations, even if they are not defined as such. There is a parent-child relation between the [hierarchy columns](ABENDDDDL_HIERARCHY.html)\\ `HIERARCHY_PARENT_RANK` and `HIERARCHY_RANK` (refer to [ABAP SQL - Parent-child-based Hierarchy vs. Level-based Hierarchy](ABENABAP_SQL_PC_LEV_HIERA_ABEXA.html)).
-   The generation of a level-based hierarchy can be compared to the [group level processing](ABENGROUP_LEVEL_PROCESSING_GLOSRY.html) of internal tables (refer to the executable example [ABAP SQL - Level-based Hierarchy vs. Grouping](ABENABAP_SQL_LEV_HIERA_GRP_ABEXA.html)).
-   On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), the hierarchy generator function [`HIERARCHY_LEVELED`](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/2969da89b87f4abd85fd0b5f9f5bc395) is used to create the level-based hierarchy.

-   The data source can also be another SQL hierarchy.
-   In order to give meaningful results, the data source should contain appropriate data.

-   [ABAP SQL - Level-based Hierarchy of Flight Data](ABENSHEET_ABAP_SQL_LEV_HIERA_ABEXA.html)
-   [ABAP SQL - Level-based Hierarchy vs. Grouping](ABENABAP_SQL_LEV_HIERA_GRP_ABEXA.html)
-   [ABAP SQL - Parent-child-based Hierarchy vs. Level-based Hierarchy](ABENABAP_SQL_PC_LEV_HIERA_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF level\_struc, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n data TYPE c LENGTH 1, \\n END OF level\_struc, \\n level\_tab TYPE TABLE OF level\_struc WITH EMPTY KEY. \\n\\ \\n\\ \\nDATA(level\_tab) = VALUE level\_tab( \\n ( col1 = 1 col2 = 11 col3 = 111 data = \`A\` ) \\n ( col1 = 1 col2 = 11 col3 = 112 data = \`B\` ) \\n ( col1 = 1 col2 = 11 col3 = 113 data = \`C\` ) \\n ( col1 = 1 col2 = 12 col3 = 121 data = \`D\` ) \\n ( col1 = 1 col2 = 12 col3 = 122 data = \`E\` ) \\n ( col1 = 1 col2 = 12 col3 = 123 data = \`F\` ) \\n ( col1 = 2 col2 = 21 col3 = 211 data = \`G\` ) \\n ( col1 = 2 col2 = 21 col3 = 212 data = \`H\` ) \\n ( col1 = 2 col2 = 21 col3 = 213 data = \`I\` ) \\n ( col1 = 2 col2 = 22 col3 = 221 data = \`J\` ) \\n ( col1 = 2 col2 = 22 col3 = 222 data = \`K\` ) \\n ( col1 = 2 col2 = 22 col3 = 223 data = \`L\` ) \\n ). \\n\\ \\nout->write( level\_tab ). \\n\\ \\nSELECT FROM HIERARCHY( \\n SOURCE @level\_tab AS lt \\n LEVELS ( lt~col1, lt~col2, lt~col3 ) \\n SIBLINGS ORDER BY lt~col1, lt~col2, lt~col3 ) \\n FIELDS hierarchy\_rank, \\n hierarchy\_parent\_rank, \\n col1, col2, col3, data, \\n node\_id, \\n parent\_id, \\n hierarchy\_level\_name, \\n hierarchy\_level, \\n hierarchy\_tree\_size \\n INTO TABLE @DATA(result) ##ITAB\_DB\_SELECT. \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy.html abenselect\_hierarchy\_generator.html