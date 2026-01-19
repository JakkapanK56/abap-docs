---
title: "ABENABAP_SQL_STRICTMODE_775"
description: |
  ABENABAP_SQL_STRICTMODE_775 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_775.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_775.html"
keywords: ["select", "do", "ABENABAP", "SQL", "STRICTMODE", "775"]
---

The strict mode of the syntax check in ABAP release 7.75 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.75](ABENNEWS-775-ABAP_SQL.html):

The strict mode in ABAP release 7.75 covers all rules of the [strict mode in ABAP release 7.74](ABENABAP_SQL_STRICTMODE_774.html).

-   Use of [window expressions](ABAPSELECT_OVER.html).
-   Use of the aggregate function [`STRING_AGG`](ABAPSELECT_AGGREGATE.html).
-   Use of the aggregate function [`COUNT( sql_exp )`](ABAPSELECT_AGGREGATE.html) without the addition `DISTINCT`.
-   Use of the [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_AGG_NAVIS.html).

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html