---
title: "ABENRABAX_EXPORT_TO_DATABASE"
description: |
  ABENRABAX_EXPORT_TO_DATABASE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRABAX_EXPORT_TO_DATABASE.htm"
abapFile: "ABENRABAX_EXPORT_TO_DATABASE.html"
keywords: ["if", "data", "ABENRABAX", "EXPORT", "DATABASE"]
---

`CX_SY_COMPRESSION_ERROR`

`CX_SY_EXPIMP_DB_SQL_ERROR`

`CX_SY_EXPORT_BUFFER_NO_MEMORY`

`CX_SY_EXPORT_NO_SHARED_MEMORY`

-   *Cause:* More than 2 GB of data is to be exported.
    *Runtime error:*\\ `EXPORT_TOO_MUCH_DATA`

-   *Cause:* SQL error in export to the database. \\n*Runtime error:*\\ [`DBIF_...`](ABENABAP_SQL_EXCEPTIONS.html)

-   *Cause:* The size of the data cluster exceeds a quarter of the total size of the associated application buffer.
    *Runtime error:*\\ `EXPORT_BUFFER_NO_MEMORY`

-   *Cause:* Data cluster is too large for the associated application buffer. This buffer is almost completely filled.
    *Runtime error:*\\ `EXPORT_NO_SHARED_MEMORY`

abenabap.html abenabap\_reference.html abendata\_cluster.html abapexport\_data\_cluster.html