---
title: "ABENNEWS-755-DDIC"
description: |
  ABENNEWS-755-DDIC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-755-DDIC.htm"
abapFile: "ABENNEWS-755-DDIC.html"
keywords: ["delete", "do", "if", "data", "types", "ABENNEWS", "755", "DDIC"]
---

[1\. Load Unit](#ABAP_MODIFICATION_1@4@)

[2\. Internal Handling of the Name Table](#ABAP_MODIFICATION_2@4@)

In ABAP Dictionary, a new technical setting for database tables is available: the [load unit](ABENDDIC_DATABASE_TABLES_LOAD_UNIT.html). It specifies how the data of the table is loaded into the main memory of the SAP HANA database. It can be used to reduce the memory consumption in the HANA database server.

The internal handling of the [name table (nametab)](ABENNAME_TABLE_GLOSRY.html) that stores the runtime objects of data types in the ABAP Dictionary has changed.

This has the following consequences:

-   The internal ABAP statement [`EXPORT NAMETAB`](ABAPEXPORT_NAMETAB.html) cannot be used any more and leads to a runtime error.
-   The internal ABAP statement [`IMPORT NAMETAB`](ABAPIMPORT_NAMETAB.html) is still partly supported for reasons of downward compatibility. Any access to entries for [DDIC table types](ABENDDIC_TABLE_TYPE_GLOSRY.html) leads to a runtime error. Any other access leads to errors from [ATC](ABENATC_GLOSRY.html).
-   The former native database table `DDNTF` for separate nametab field descriptions is not supported any more and will be deleted.

abenabap.html abennews.html abennews-75.html abennews-755.html