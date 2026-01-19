---
title: "ABAPEXPORT_SHORTREF"
description: |
  ABAPEXPORT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXPORT_SHORTREF.htm"
abapFile: "ABAPEXPORT_SHORTREF.html"
keywords: ["do", "if", "data", "internal-table", "ABAPEXPORT", "SHORTREF"]
---

[Reference](ABAPEXPORT_DATA_CLUSTER.html)

`EXPORT \{\ \{p1 = dobj1 p2 = dobj2 ...\}\         |\ \{p1 FROM dobj1 p2 FROM dobj2 ...\}\         | (ptab) \}\      TO \{\ \{ DATA BUFFER xstr \}\         |\ \{ INTERNAL TABLE itab \}\         |\ \{ MEMORY ID id \}\         |\ \{ DATABASE      dbtab(ar) [FROM wa]\ [CLIENT cl] ID id \}\         |\ \{ SHARED MEMORY dbtab(ar) [FROM wa]\ [CLIENT cl] ID id \}\         |\ \{ SHARED BUFFER dbtab(ar) [FROM wa]\ [CLIENT cl] ID id \}  \}\         [ COMPRESSION \{ ON | OFF \}\ ].`

Saves data objects `dobj1`, `dobj2`, ... in a [data cluster](ABENDATA_CLUSTER_GLOSRY.html).

-   [`\{p1 = dobj1 p2 = dobj2 ...\}|\{p1 FROM dobj1 p2 FROM dobj2 ...\}|(ptab)`](ABAPEXPORT_DATA_CLUSTER_PARAM.html)\\
    Defines the data cluster by specifying single parameters statically using `p1 = dobj1 p2 = dobj2 ...` or `p1 FROM dobj1 p2 FROM dobj2 ...` or by specifying them dynamically in an internal table `ptab`.
-   [`DATA BUFFER xstr`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\\
    Saves the data cluster as a byte string in `xstr`.
-   [`INTERNAL TABLE itab`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\\
    Saves the data cluster in an internal table `itab`.
-   [`MEMORY`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\\
    Saves the data cluster in the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html).
-   [`DATABASE dbtab(ar) [CLIENT cl]`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\\
    Saves the data cluster in a database table `dbtab` in the area `ar` under the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html)\\ `cl`.
-   [`\{SHARED MEMORY\}|\{SHARED BUFFER\} dbtab(ar) [CLIENT cl]`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\\
    Saves the data cluster in an application buffer in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) addressed using the name of a database table `dbtab`, an area `ar`, and a client ID `cl`. These two alternatives have different displacement mechanisms.
-   [`ID id`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\\
    Specifies the ID of the data cluster in `id`.
-   [`FROM wa`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)\\
    Specifies a work area `wa` to save information about the data cluster.
-   [`COMPRESSION \{ ON | OFF \}`](ABAPEXPORT_DATA_CLUSTER.html)\\
    Specifies whether or not the data cluster is saved in compressed form.

abenabap.html abenabap\_reference.html abenabap\_shortref.html