---
title: "ABENNEWS-767-ABAP_SQL"
description: |
  ABENNEWS-767-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-767-ABAP_SQL.htm"
abapFile: "ABENNEWS-767-ABAP_SQL.html"
keywords: ["select", "if", "data", "ABENNEWS", "767", "ABAP", "SQL"]
---

[1\. Path Expressions](#ABAP_MODIFICATION_1@4@)

The following enhancements have been made to [path expressions](ABENABAP_SQL_PATH.html) that are specified as a [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM` clause](ABAPFROM_CLAUSE.html) of `SELECT` statements of a [query](ABENASQL_QUERY_GLOSRY.html):

-   When using a path expression, [actual parameters](ABENABAP_SQL_PARAMETERS.html) can now be passed to CDS entities with input parameters. Path expressions can now contain CDS associations for entities with input parameters.
-   [Filter conditions](ABENABAP_SQL_PATH_FILTER.html) for CDS associations can now be specified in path expressions.
-   Path expressions can now be split over several source code rows at the blanks in the syntax for parameter passes and filter conditions and also before slashes (`/`).

abenabap.html abennews.html abennews-76.html abennews-767.html