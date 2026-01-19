---
title: "Parent-child-based Hierarchy Generator"
description: |
  Level-based Hierarchy Generator -   `CHILD TO PARENT ASSOCIATION ...`(ABENSELECT_HIERARCHY_GEN_ASSOC.html) -   The hierarchy generator creates a parent-child-based hierarchy(ABENPC_BASED_HIERA_GLOSRY.html) that is defined by parent-child relationships(ABENPCR_GLOSRY.html) between different col
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_HIERARCHY_GENERATOR.htm"
abapFile: "ABENSELECT_HIERARCHY_GENERATOR.html"
keywords: ["select", "if", "case", "data", "internal-table", "ABENSELECT", "HIERARCHY", "GENERATOR"]
---

1\. `... [HIERARCHY( SOURCE hierarchy_source ...](ABENSELECT_HIERARCHY_GEN_ASSOC.html)\ [CHILD TO PARENT ASSOCIATION _hierarchy_assoc](ABENSELECT_HIERARCHY_GEN_ASSOC.html)\ [...](ABENSELECT_HIERARCHY_GEN_ASSOC.html) )`

2\. `... [HIERARCHY( SOURCE data_source ...](ABENSELECT_HIERARCHY_GEN_LEVEL.html)\ [LEVELS ( col1, col2,... )](ABENSELECT_HIERARCHY_GEN_LEVEL.html)\ [...](ABENSELECT_HIERARCHY_GEN_LEVEL.html) )`

Specifies the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ `HIERARCHY` as an [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html)\\ [`hierarchy`](ABENSELECT_HIERARCHY.html) in an ABAP SQL query. The hierarchy generator creates the SQL hierarchy. There are two ways for generating a SQL hierarchy using the hierarchy generator that are distinguished by the following additions:

In both cases, the rows of the tabular result set of the hierarchy generator are the [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) of the generated SQL hierarchy and their columns are composed of the elements of the source specified after `SOURCE` and additional [hierarchy columns](ABENDDDDL_HIERARCHY.html). The hierarchy columns must be specified explicitly in the [`SELECT`](ABAPSELECT_LIST.html) list before they can be selected.

Hierarchy functions cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Parent-child-based Hierarchy Generator

Level-based Hierarchy Generator

-   [`CHILD TO PARENT ASSOCIATION ...`](ABENSELECT_HIERARCHY_GEN_ASSOC.html)
-   The hierarchy generator creates a [parent-child-based hierarchy](ABENPC_BASED_HIERA_GLOSRY.html) that is defined by [parent-child relationships](ABENPCR_GLOSRY.html) between different columns of a so called hierarchy source that must expose a [hierarchy association](ABENHIERARCHY_ASSOCIATION_GLOSRY.html).
-   [`LEVELS ( ... )`](ABENSELECT_HIERARCHY_GEN_LEVEL.html)
-   The hierarchy generator creates a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html), where a set of columns of the data source defines the levels of the hierarchy.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy.html