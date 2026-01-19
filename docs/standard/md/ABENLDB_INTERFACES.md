---
title: "ABENLDB_INTERFACES"
description: |
  ABENLDB_INTERFACES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLDB_INTERFACES.htm"
abapFile: "ABENLDB_INTERFACES.html"
keywords: ["select", "if", "data", "ABENLDB", "INTERFACES"]
---

The following statement declares an [interface work area](ABENINTERFACE_WORK_AREA_GLOSRY.html) intended for use with logical databases only:

The statement `NODES` must be specified both in the [database program](ABENDATABASE_PROGRAM_GLOSRY.html) of the logical database and in the [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) linked with the logical database. In the database program, `NODES` determines which data can be passed from the logical database. In the executable program, `NODES` determines the data received and also controls the creation of the selection screen of the logical database.

If flat structures are used, the statement [`TABLES`](ABAPTABLES.html) can also be used.

-   [`NODES`](ABAPNODES.html)

-   If logical databases are no longer used, the statement `NODES` is obsolete.
-   If logical databases are still used, `NODES` should be used instead of `TABLES`. This specifies clearly that the interface is intended for logical databases.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abenldb.html abenldb\_abap\_statements.html