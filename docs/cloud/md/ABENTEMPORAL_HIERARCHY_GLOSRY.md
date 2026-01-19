---
title: "ABENTEMPORAL_HIERARCHY_GLOSRY"
description: |
  ABENTEMPORAL_HIERARCHY_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTEMPORAL_HIERARCHY_GLOSRY.htm"
abapFile: "ABENTEMPORAL_HIERARCHY_GLOSRY.html"
keywords: ["select", "if", "data", "ABENTEMPORAL", "HIERARCHY", "GLOSRY"]
---

A special [ABAP SQL hierarchy](ABENSQL_HIERARCHY_GLOSRY.html) that only contains [hierarchy nodes](ABENHIERARCHY_NODE_GLOSRY.html) that meet certain conditions for time intervals. When the SQL hierarchy is created with the addition [`PERIOD`](ABENSELECT_HIERARCHY_GENERATOR.html) in [ABAP SQL](ABENABAP_SQL.html) or [`PERIOD`](ABENCDS_F1_DEFINE_HIERARCHY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html), columns of the [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) of the hierarchy are defined as interval limits of so-called [periods](ABENPERIOD_GLOSRY.html) and a time interval is specified for the [root node set](ABENROOT_NODE_SET_GLOSRY.html). [Validity intervals](ABENVALIDITY_INTERVAL_GLOSRY.html) are determined as intersections of these time intervals. Only nodes with non-empty validity intervals are included in the hierarchy. The validity intervals of [child nodes](ABENCHILD_NODE_GLOSRY.html) result from their period and the validity interval of the [parent node](ABENPARENT_NODE_GLOSRY.html).

ABENSQL\_GLOSSARY.html