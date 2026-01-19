---
title: "ABENABAP_SQL_STRICTMODE_796"
description: |
  ABENABAP_SQL_STRICTMODE_796 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_796.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_796.html"
keywords: ["select", "if", "data", "ABENABAP", "SQL", "STRICTMODE", "796"]
---

The strict mode of the syntax check in ABAP release 7.96 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.96](ABENNEWS-796-ABAP_SQL.html):

The strict mode in ABAP release 7.96 covers all rules of the [strict mode in ABAP release 7.95](ABENABAP_SQL_STRICTMODE_795.html), plus the following rules:

-   Usage of the dynamic forms of the statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).
-   Explicit usage of addition [`OPTIONS`](ABAPSELECT_OPTIONS.html).
-   Usage of the addition [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html).

-   The addition [`OPTIONS`](ABAPSELECT_OPTIONS.html) must be specified explicitly in front of ABAP-specific additions.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html