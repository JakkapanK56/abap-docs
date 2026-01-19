---
title: "ABENDATA_CLUSTER"
description: |
  ABENDATA_CLUSTER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDATA_CLUSTER.htm"
abapFile: "ABENDATA_CLUSTER.html"
keywords: ["delete", "data", "ABENDATA", "CLUSTER"]
---

A data cluster is a group of [data objects](ABENDATA_OBJECT_GLOSRY.html) grouped together for the purpose of storage in a [memory medium](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) that can only be accessed using ABAP statements.

-   The data objects are written to the memory medium by the statement [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html).
-   The data objects are extracted again by the statement [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html).
-   The statement `DELETE` can be used to delete any memory medium.

abenabap.html abenabap\_reference.html