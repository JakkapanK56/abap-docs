---
title: "ABENNEWS-740-DATA_CLUSTER"
description: |
  ABENNEWS-740-DATA_CLUSTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-DATA_CLUSTER.htm"
abapFile: "ABENNEWS-740-DATA_CLUSTER.html"
keywords: ["delete", "if", "method", "class", "data", "internal-table", "exception-handling", "ABENNEWS", "740", "DATA", "CLUSTER"]
---

[1\. Replacement of the System Class](#ABAP_MODIFICATION_1@4@)

[2\. Exception Handling](#ABAP_MODIFICATION_2@4@)

The abstract system class `CL_ABAP_EXPIMP` for [data clusters](ABENDATA_CLUSTER_GLOSRY.html) and its subclasses have been replaced by the new system class [`CL_ABAP_EXPIMP_UTILITIES`](ABENCL_ABAP_EXPIMP.html) and its methods. The class `CL_ABAP_EXPIMP` should no longer be used.

The following improvements were made:

-   If an SQL error occurs in the statements [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html), [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html), or [`DELETE FROM`](ABAPDELETE_CLUSTER.html) for data clusters in database tables, the new exception class `CX_SY_EXPIMP_DB_SQL_ERROR` can be used to handle the error.
-   If the string or internal table is empty in the statements [`IMPORT FROM DATA BUFFER`](ABAPIMPORT_MEDIUM.html) or [`IMPORT FROM INTERNAL TABLE`](ABAPIMPORT_MEDIUM.html), the dedicated runtime errors `IMPORT_FROM_DATA_BUFFER_EMPTY` or `IMPORT_FROM_INTTABLE_EMPTY` now occur.

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html