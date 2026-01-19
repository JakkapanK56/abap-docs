---
title: "ABENNEWS-775-ABAP_SQL"
description: |
  ABENNEWS-775-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-775-ABAP_SQL.htm"
abapFile: "ABENNEWS-775-ABAP_SQL.html"
keywords: ["select", "do", "if", "case", "ABENNEWS", "775", "ABAP", "SQL"]
---

[1\. Window Expressions](#ABAP_MODIFICATION_1@4@)

[2. New Aggregate Function `STRING_AGG`](#ABAP_MODIFICATION_2@4@)

[3. Addition `DISTINCT` Optional in Aggregate Function `COUNT`](#ABAP_MODIFICATION_3@4@)

[4\. Hierarchy Navigators<](#ABAP_MODIFICATION_4@4@)

[5\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_5@4@)

Window expressions defined using [`OVER`](ABAPSELECT_OVER.html) can now be used in the [`SELECT` list](ABAPSELECT_LIST.html) of a query. Window expressions define windows as a subset of the result set and apply [window functions](ABENWINDOW_FUNCTION_GLOSRY.html) to them.

The new aggregate function [`STRING_AGG`](ABAPSELECT_AGGREGATE.html) can be used to chain character-like results of the rows of the result set of a query or of the current group as a string.

The aggregate function [`COUNT( sql_exp )`](ABAPSELECT_AGGREGATE.html) can now be used without the addition `DISTINCT`. In this case, it counts all rows in which the value of the argument is not the [null value](ABENNULL_VALUE_GLOSRY.html).

The new [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_AGG_NAVIS.html) can be used to calculate [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html) for [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html).

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_775.html), which handles the statement more strictly than the regular syntax check.

abenabap.html abennews.html abennews-77.html abennews-775.html