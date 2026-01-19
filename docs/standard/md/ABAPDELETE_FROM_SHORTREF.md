---
title: "ABAPDELETE_FROM_SHORTREF"
description: |
  ABAPDELETE_FROM_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_FROM_SHORTREF.htm"
abapFile: "ABAPDELETE_FROM_SHORTREF.html"
keywords: ["delete", "if", "data", "ABAPDELETE", "FROM", "SHORTREF"]
---

[Reference](ABAPDELETE_CLUSTER.html)

`DELETE FROM \{\ \{MEMORY ID id\}\              |\ \{DATABASE      dbtab(ar) [CLIENT cl] ID id\}\              |\ \{SHARED MEMORY dbtab(ar) [CLIENT cl] ID id\}\              |\ \{SHARED BUFFER dbtab(ar) [CLIENT cl] ID id\}\ \}.`

Deletes the [data cluster](ABENDATA_CLUSTER_GLOSRY.html) of the ID specified in `id`.

-   `MEMORY`\\
    Specifies a data cluster in the [ABAP memory](ABENABAP_MEMORY_GLOSRY.html).
-   `DATABASE dbtab(ar) [CLIENT cl]`\\
    Specifies a data cluster in a database table `dbtab`, in the range `ar` and with a [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html)\\ `cl`.
-   `\{SHARED MEMORY\}|\{SHARED BUFFER\} dbtab(ar) [CLIENT cl]`\\
    Specifies a data cluster stored in an application buffer in the [shared memory](ABENSHARED_MEMORY_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) addressed using the name of a database table `dbtab`, an area `ar`, and a client ID `cl`. These two alternatives have different displacement mechanisms.

abenabap.html abenabap\_reference.html abenabap\_shortref.html