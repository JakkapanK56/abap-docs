---
title: "ABENNEWS-751-DATA_CLUSTER"
description: |
  ABENNEWS-751-DATA_CLUSTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-751-DATA_CLUSTER.htm"
abapFile: "ABENNEWS-751-DATA_CLUSTER.html"
keywords: ["data", "ABENNEWS", "751", "DATA", "CLUSTER"]
---

[Export tables and import tables](ABENEXPORT_IMPORT_TABLE_GLOSRY.html) with a new [structure](ABENEXPORT_DATA_CLUSTER_INDX.html) can now be used to save [data clusters](ABENDATA_CLUSTER_GLOSRY.html) in database tables and application buffers in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) using [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html).

In this [structure](ABENEXPORT_DATA_CLUSTER_INDX.html), the field `CLUSTD` has the data type `RAWSTRING` ([BLOB](ABENBLOB_GLOSRY.html)) and can save data cluster in a single row. The columns required for the administration of a data cluster across multiple rows, `SRTF2` and `CLUSTR`, are now obsolete.

The new structure is recommended for export tables and import tables.

abenabap.html abennews.html abennews-75.html abennews-751.html