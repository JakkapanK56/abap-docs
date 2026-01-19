---
title: "ABENNEWS-779-ABAP_SQL"
description: |
  ABENNEWS-779-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-779-ABAP_SQL.htm"
abapFile: "ABENNEWS-779-ABAP_SQL.html"
keywords: ["select", "do", "if", "ABENNEWS", "779", "ABAP", "SQL"]
---

[1. New Window Function `NTILE`](#ABAP_MODIFICATION_1@4@)

[2. `SELECT`, `INTO target` Modification](#ABAP_MODIFICATION_2@4@) 

[3. New Type Conversion Function `to_clob`](#ABAP_MODIFICATION_3@4@)

[4.  New Currency Conversion Function `currency conversion`](#ABAP_MODIFICATION_4@4@)

[5\. Streaming and Locators Can Now Be Used on SQL Expressions](#ABAP_MODIFICATION_5@4@)

[6\. Strict Mode of the Syntax Check](#ABAP_MODIFICATION_6@4@)

ABAP SQL now supports the following new [window function](ABENWINDOW_FUNCTION_GLOSRY.html) in [window expressions](ABENWINDOW_EXPRESSION_GLOSRY.html):

When using `SELECT, INTO target`, host variables can now be declared inline even when the `FROM` clause is dynamic, as long as all fields of the `SELECT` list are known statically. Previously, the structure of the result set, including `SELECT` list, `FROM` clause, and any indicators needed to be static.

ABAP SQL now supports the new [type conversion function](ABENSQL_TYPE_CONV_FUNC.html)\\ [`to_clob`](ABENSQL_TYPE_CONV_FUNC.html).

ABAP SQL now supports the new currency conversion function [`currency_conversion`](ABENSQL_CURR_UNIT_CONV_FUNC.html).

Streaming and locators can now be used in combination with SQL expressions such as [`TO_CLOB`](ABENSQL_TYPE_CONV_FUNC.html), [`TO_BLOB`](ABENSQL_TYPE_CONV_FUNC.html), and [`AS_GEO_JSON`](ABENSQL_GEO_CONV_FUNC.html).

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_779.html), which handles the statement more strictly than the regular syntax check.

-   [`NTILE`](ABENSQL_WIN_FUNC.html)

abenabap.html abennews.html abennews-77.html abennews-779.html