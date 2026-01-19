---
title: "ABENABAP_SQL_STRICTMODE_767"
description: |
  ABENABAP_SQL_STRICTMODE_767 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_767.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_767.html"
keywords: ["select", "if", "data", "ABENABAP", "SQL", "STRICTMODE", "767"]
---

The strict mode of the syntax check in ABAP release 7.67 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.67](ABENNEWS-767-ABAP_SQL.html):

The strict mode in ABAP release 7.67 covers all rules of the [strict mode in ABAP release 7.66](ABENABAP_SQL_STRICTMODE_766.html), plus the following rules:

-   [Parameter passing](ABENABAP_SQL_PARAMETERS.html) when using [path expressions](ABENABAP_SQL_PATH.html) in a [`FROM`](ABAPFROM_CLAUSE.html) clause.
-   [Filter conditions](ABENABAP_SQL_PATH_FILTER.html) in [path expressions](ABENABAP_SQL_PATH.html) in a [`FROM`](ABAPFROM_CLAUSE.html) clause.

-   A [path expression](ABENABAP_SQL_PATH.html) as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`FROM`](ABAPFROM_CLAUSE.html) clause must have an alias name defined with [`AS`](ABAPFROM_CLAUSE.html).
-   The addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) cannot be specified for a [data source](ABAPSELECT_DATA_SOURCE.html) specified using a [path expression](ABENABAP_SQL_PATH.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html