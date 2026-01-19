---
title: "ABENABAP_SQL_STRICTMODE_816"
description: |
  ABENABAP_SQL_STRICTMODE_816 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_STRICTMODE_816.htm"
abapFile: "ABENABAP_SQL_STRICTMODE_816.html"
keywords: ["select", "insert", "update", "delete", "if", "data", "types", "ABENABAP", "SQL", "STRICTMODE", "816"]
---

The strict mode of the syntax check in ABAP release 8.16 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 8.16](ABENNEWS-796-ABAP_SQL.html):

The strict mode in ABAP release 8.16 covers all rules of the [strict mode in ABAP release 7.58](ABENABAP_SQL_STRICTMODE_758.html), plus the following rules:

-   Usage of the dynamic forms of the statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).
-   Explicit usage of addition [`OPTIONS`](ABAPSELECT_OPTIONS.html).
-   Usage of the addition [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html).
-   Operands of type `FLTP` or `f` are used in a [decimal floating point expression](ABENSQL_ARITH.html) or integer types are used in a [binary floating expression](ABENSQL_ARITH.html).
-   Usage of addition [`OPTIONS`](ABAPIUMD_OPTIONS.html) in DML statements.
-   Usage of an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) in:

-   `SELECT`, `WITH`,`OPEN CURSOR`\\ `...`\\ [`CONNECTION`](ABAPSELECT_CONNECTION.html)
-   `INSERT`, `UPDATE`, `MODIFY`, `DELETE`\\ `...`\\ [`CONNECTION`](ABAPIUMD_CONN.html)

-   The addition [`OPTIONS`](ABAPSELECT_OPTIONS.html) must be specified explicitly in front of ABAP-specific additions.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abenabap\_sql\_strict\_modes.html