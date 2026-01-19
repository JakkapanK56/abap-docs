---
title: "ABENRABAX_EXPORT_TO_DATABASE"
description: |
  ABENRABAX_EXPORT_TO_DATABASE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRABAX_EXPORT_TO_DATABASE.htm"
abapFile: "ABENRABAX_EXPORT_TO_DATABASE.html"
keywords: ["update", "if", "data", "ABENRABAX", "EXPORT", "DATABASE"]
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

-   *Cause:* More rows are required when storing in an export/import table than allowed by the value range of the column `SRTF2`.
    *Runtime error:*\\ `EXPORT_TOO_MUCH_DATA`
-   *Cause:* Data field too short
    *Runtime error:*\\ `EXPORT_TABLE_CLUSTD_TOO_SHORT`
-   *Cause:* Data field has incorrect type
    *Runtime error:*\\ `EXPORT_TABLE_CLUSTD_WRONG_TYPE`
-   *Cause:* Length field has incorrect type
    *Runtime error:*\\ `EXPORT_TABLE_CLUSTR_WRONG_TYPE`
-   *Cause:* Client field must be first
    *Runtime error:*\\ `EXPORT_TABLE_MANDT_NOT_FIRST`
-   *Cause:* Field `RELID` missing
    *Runtime error:*\\ `EXPORT_TABLE_NO_RELID`
-   *Cause:* No user key in structure
    *Runtime error:*\\ `EXPORT_TABLE_NO_USER_KEY`
-   *Cause:* Counter field has incorrect type
    *Runtime error:*\\ `EXPORT_TABLE_SRTF2_WRONG_TYPE`
-   *Cause:* Table has incorrect structure
    *Runtime error:*\\ `EXPORT_TABLE_TOO_FEW_FIELDS`
-   *Cause:* Table unknown to the database
    *Runtime error:*\\ `EXPORT_TABLE_UNKNOWN`
-   *Cause:* Table key must start at the beginning
    *Runtime error:*\\ `EXPORT_TABLE_WRONG_KEY_POS`
-   *Cause:* Problem when changing the data in the database table
    *Runtime error:*\\ `EXPORT_TABLE_UPDATE_CONFLICT`
-   *Cause:* Database table has wrong length
    *Runtime error:*\\ `EXPORT_TABLE_WRONG_LENGTH`
-   *Cause:* No memory available for compression
    *Runtime error:*\\ `EXPORT_COMPRESS_ALLOC_FAILED`
-   *Cause:* The database table is not an export/import table.
    *Runtime error:*\\ `EXPORT_INCL_TABLE_STRUCTURE`
-   *Cause:* No more paging area available
    *Runtime error:*\\ `EXPORT_NO_CONTAINER`
-   *Cause:* Error when exporting the transactional application buffer
    *Runtime error:*\\ `EXPORT_BUFFER_FAILED`\\
    *Runtime error:*\\ `EXPORT_BUFFER_EXTERNAL_ERROR`\\
    *Runtime error:*\\ `EXPORT_BUFFER_INTERNAL_ERROR`

abenabap.html abenabap\_reference.html abendata\_cluster.html abapexport\_data\_cluster.html