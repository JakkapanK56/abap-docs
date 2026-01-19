---
title: "ABENCL_ABAP_EXPIMP"
description: |
  ABENCL_ABAP_EXPIMP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_EXPIMP.htm"
abapFile: "ABENCL_ABAP_EXPIMP.html"
keywords: ["delete", "if", "method", "class", "data", "ABENCL", "ABAP", "EXPIMP"]
---

In addition to the statements [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) and [`DELETE`](ABAPDELETE_CLUSTER.html), it is possible, if necessary, to use the methods of the class `CL_ABAP_EXPIMP_UTILITIES`. These enhance the functions of the statements for [data clusters](ABENDATA_CLUSTER_GLOSRY.html).

In application programs, the parameter `CLIENT` of the methods of the classes for accessing data clusters in database tables or in the shared memory in [application programs](ABENAPPLICATION_PROGRAM_GLOSRY.html) of [application clients](ABENAPPLICATION_CLIENT_GLOSRY.html) should not be filled. These programs should only work with data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

The program `DEMO_IMPORT_CREATE_DATA` demonstrates how target objects can be created dynamically and filled using the method `DBUF_IMPORT_CREATE_DATA` of the class `CL_ABAP_EXPIMP_UTILITIES`.

-   They allow data clusters to be accessed in the individual storage media, of which only parts of the identifier `id` or of the area `ar` are specified, by determining the complete key.
-   Data clusters can be deleted generically using partly specified keys.
-   The release-dependent internal format of data clusters can be converted.
-   Data objects stored using [`DATA BUFFER`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html) can be created dynamically when read.

abenabap.html abenabap\_reference.html abendata\_cluster.html