---
title: "ABENLEVEL_BASED_HIERA_GLOSRY"
description: |
  ABENLEVEL_BASED_HIERA_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLEVEL_BASED_HIERA_GLOSRY.htm"
abapFile: "ABENLEVEL_BASED_HIERA_GLOSRY.html"
keywords: ["select", "data", "ABENLEVEL", "BASED", "HIERA", "GLOSRY"]
---

An [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) that is generated from a [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) where certain columns define from left to right the [hierarchy levels](ABENHIERARCHY_LEVEL_GLOSRY.html) and where each row content of these columns represents a path from a [start node](ABENSTART_NODE_GLOSRY.html) to a [leaf node](ABENLEAF_NODE_GLOSRY.html) that spans these levels. In a level-based hierarchy, all [leaf nodes](ABENLEAF_NODE_GLOSRY.html) have the same level that is the highest level defined in the data source. For each leaf node, a similar set of [ancestor nodes](ABENANCESTOR_NODE_GLOSRY.html) is generated for the lower levels of the data source. In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), the addition [`LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html) of the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) can be used to generate level-based hierarchies.

[**\-> More about**](ABENSELECT_HIERARCHY_GEN_LEVEL.html)

ABENSQL\_GLOSSARY.html