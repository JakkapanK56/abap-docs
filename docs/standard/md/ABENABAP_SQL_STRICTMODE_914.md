---
title: "ABENABAP_SQL_STRICTMODE_914"
description: |
  ABENABAP_SQL_STRICTMODE_914 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_914.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_914.html"
keywords: ["select", "insert", "update", "delete", "if", "ABENABAP", "SQL", "STRICTMODE", "914"]
---

The strict mode of the syntax check in ABAP release 9.14 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 9.14](ABENNEWS-914-ABAP_SQL.html):

The strict mode in ABAP release 9.14 covers all rules of the [strict mode in ABAP release 9.13](ABENABAP_SQL_STRICTMODE_913.html).

-   Usage of addition [`OPTIONS`](ABAPIUMD_OPTIONS.html) in DML statements.
-   Usage of an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) in:

-   `SELECT`, `WITH`,`OPEN CURSOR`\\ `...`\\ [`CONNECTION`](ABAPSELECT_CONNECTION.html)
-   `INSERT`, `UPDATE`, `MODIFY`, `DELETE`\\ `...`\\ [`CONNECTION`](ABAPIUMD_CONN.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html