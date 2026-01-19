---
title: "ABENNEWS-915-ABAP_SQL"
description: |
  ABENNEWS-915-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-915-ABAP_SQL.htm"
abapFile: "ABENNEWS-915-ABAP_SQL.html"
keywords: ["select", "do", "if", "method", "data", "internal-table", "ABENNEWS", "915", "ABAP", "SQL"]
---

[1\. Level-based Hierarchies](#ABAP_MODIFICATION_1@4@)

[2. Enhancement of `STRING_AGG` Function](#ABAP_MODIFICATION_2@4@) 

[3. Enhancement of `LTRIM` and `RTRIM` Functions](#ABAP_MODIFICATION_3@4@) 

[4\. Aggregate Functions Processed by the ABAP SQL In-Memory Engine](#ABAP_MODIFICATION_4@4@)

[5\. Spatial Functions](#ABAP_MODIFICATION_5@4@)

[6. `HIERARCHY_COMPOSITE_ID`](#ABAP_MODIFICATION_6@4@)

A new variant of the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) uses the addition [`LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html) in order to generate [level-based hierarchies](ABENLEVEL_BASED_HIERA_GLOSRY.html). These allow access to hierarchical data in data sources that are defined by level columns.

In contrast, the former variant of `HIERARCHY` uses the addition [`CHILD TO PARENT ASSOCIATION`](ABENSELECT_HIERARCHY_GEN_ASSOC.html) in order to generate [parent-child-based hierarchies](ABENPC_BASED_HIERA_GLOSRY.html) from [parent-child relationships](ABENPCR_GLOSRY.html).

The optional separator `sep` of the [`STRING_AGG` function](ABENSQL_AGG_FUNC.html) can now be a host variable.

The character `char` of the [`LTRIM`](ABENSQL_STRING_FUNC.html) and [`RTRIM`](ABENSQL_STRING_FUNC.html) functions can now be a host variable or an SQL expression. Additionally, the length of `char` can be other than 1.

The [aggregate functions](ABENSQL_AGG_FUNC.html)\\ `MIN`, `MAX`, and `SUM` can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) in the [`SELECT`](ABAPSELECT_LIST.html) list now. They no longer bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) and do not cause the transport of an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) to the database.

SAP HANA constructors, methods, and functions for accessing and manipulating spatial data are now available as [functions](ABENSQL_SPATIAL_FUNC.html) in ABAP SQL.

The function [`HIERARCHY_COMPOSITE_ID`](ABENSQL_HIERARCHY_COMP_ID.html) can be used to generate composite node identifiers free of name clashes.

abenabap.html abennews.html abennews-91.html abennews-915.html