---
title: "ABENDATA_CLUSTER"
description: |
  ABENDATA_CLUSTER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATA_CLUSTER.htm"
abapFile: "ABENDATA_CLUSTER.html"
keywords: ["delete", "class", "data", "ABENDATA", "CLUSTER"]
---

A data cluster is a group of [data objects](ABENDATA_OBJECT_GLOSRY.html) grouped together for the purpose of storage in a [memory medium](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) that can only be accessed using ABAP statements.

The statements for data clusters are complemented by the subclasses of the abstract system class [`CL_ABAP_EXPIMP_UTILITIES`](ABENCL_ABAP_EXPIMP.html).

As well as the statements described here, some [obsolete accesses](ABENDATA_CLUSTER_OBSOLETE.html) to data clusters also still exist.

-   The data objects are written to the memory medium by the statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html).
-   The data objects are extracted again by the statement [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html).
-   The statement [`DELETE`](ABAPDELETE_CLUSTER.html) can be used to delete any memory medium.
-   The statement [`FREE`](ABAPFREE_MEMORY.html) can be used to delete the ABAP Memory.
-   The statement [`IMPORT DIRECTORY`](ABAPIMPORT_DIRECTORY.html) creates a list of all data objects that have previously been exported to a database table.

abenabap.html abenabap\_reference.html