---
title: "ABAPIMPORT_DIRECTORY_SHORTREF"
description: |
  ABAPIMPORT_DIRECTORY_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPIMPORT_DIRECTORY_SHORTREF.htm"
abapFile: "ABAPIMPORT_DIRECTORY_SHORTREF.html"
keywords: ["if", "data", "internal-table", "ABAPIMPORT", "DIRECTORY", "SHORTREF"]
---

[Reference](ABAPIMPORT_DIRECTORY.html)

`IMPORT DIRECTORY INTO itab    FROM DATABASE dbtab(ar) [TO wa]\ [CLIENT cl] ID id.`

Imports the table of contents of a [data cluster](ABENDATA_CLUSTER_GLOSRY.html) into an internal table `itab`.

-   `FROM DATABASE dbtab(ar) [CLIENT cl]`\\
    Specifies a data cluster stored in a database table `dbtab` in the area `ar` with the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html)\\ `cl`.
-   `ID id`\\
    Specifies the ID `id` of the data cluster.
-   `TO wa`\\
    Specifies a work area `wa` for including details about the data cluster.

abenabap.html abenabap\_reference.html abenabap\_shortref.html