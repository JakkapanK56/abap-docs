---
title: "ABENNEWS-774-ABAP_SQL"
description: |
  ABENNEWS-774-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-774-ABAP_SQL.htm"
abapFile: "ABENNEWS-774-ABAP_SQL.html"
keywords: ["select", "if", "ABENNEWS", "774", "ABAP", "SQL"]
---

[1\. Definition of Associations](#ABAP_MODIFICATION_1@4@)

[2\. Temporal SQL Hierarchies](#ABAP_MODIFICATION_2@4@)

[3\. Aggregate Expressions in SQL Expressions](#ABAP_MODIFICATION_3@4@)

When associations of a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) are exposed using the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html), new [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) can be defined by specifying [`JOIN TO ONE|MANY`](ABAPWITH_ASSOCIATIONS_DEFINING.html). These CTE associations can be used in the subsequent queries of the current [`WITH`](ABAPWITH.html) statement, either in [path expressions](ABENABAP_SQL_PATH.html) or as [hierarchy associations](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) in the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html).

Definitions of associations require [strict mode from ABAP release 7.74](ABENABAP_SQL_STRICTMODE_774.html).

The [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) can now use the new addition `PERIOD FROM TO VALID FROM TO` to create [temporal SQL hierarchies](ABENTEMPORAL_HIERARCHY_GLOSRY.html) in which the hierarchy nodes are limited by time intervals.

From ABAP release 7.74, [aggregate expressions](ABAPSELECT_AGGREGATE.html) can be specified as operands of SQL expressions.

abenabap.html abennews.html abennews-77.html abennews-774.html