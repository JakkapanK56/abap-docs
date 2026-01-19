---
title: "ABENNEWS-752-DATA_CLUSTER"
description: |
  ABENNEWS-752-DATA_CLUSTER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-752-DATA_CLUSTER.htm"
abapFile: "ABENNEWS-752-DATA_CLUSTER.html"
keywords: ["catch", "class", "data", "ABENNEWS", "752", "DATA", "CLUSTER"]
---

The following [exceptions in `IMPORT`](ABENRABAX_IMPORT_FROM_DATABASE.html) were previously non-catchable but are now assigned to the exception class `CX_SY_IMPORT_FORMAT_ERROR` and hence can be handled:

-   `CONNE_ILLEGAL_TRANSPORT_HEADER`
-   `CONNE_ILLEGAL_TRANSPORT_VERS`
-   `CONNE_COMPRESS_FLAG_INVALID`
-   `CONNE_CONTAINER_TOO_SHORT`
-   `CONNE_DESCRIPTION_FLAG_INVALID`
-   `CONVERSION_CODEPAGE_UNKNOWN`
-   `IMPORT_DESCR_ENDMARK_MISSING`
-   `IMPORT_UNEXPECTED_END_OF_DATA`
-   `IMPORT_CONTAINER_MISSING`

-   `IMPORT_FROM_DATA_BUFFER_EMPTY` is now also `IMPORT_CONTAINER_MISSING`
-   `IMPORT_FROM_INTTABLE_EMPTY` is now also `IMPORT_CONTAINER_MISSING`

-   `IMPORT_CONTAINER_MISSING`
-   `IMPORT_DECOMPRESS_FAILED`
-   `IMPORT_OBJECT_DESTROYED`

abenabap.html abennews.html abennews-75.html abennews-752.html