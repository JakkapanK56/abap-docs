---
title: "ABENNATIVE_SQL_INTERFACE_GLOSRY"
description: |
  ABENNATIVE_SQL_INTERFACE_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNATIVE_SQL_INTERFACE_GLOSRY.htm"
abapFile: "ABENNATIVE_SQL_INTERFACE_GLOSRY.html"
keywords: ["do", "if", "data", "types", "ABENNATIVE", "SQL", "INTERFACE", "GLOSRY"]
---

Part of the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) responsible for [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statements. The Native SQL interface handles the statements made from the [ADBC framework](ABENADBC_GLOSRY.html) and all Native SQL statements embedded statically between [`EXEC`](ABAPEXEC.html) and [`ENDEXEC`](ABAPENDEXEC.html). Vendor-specific [SQL](ABENSQL_GLOSRY.html) statements are passed unchanged to the [database system](ABENDATABASE_SYSTEM_GLOSRY.html) of the current [database connection](ABENDATABASE_CONNECTION_GLOSRY.html). SAP-specific static Native SQL statements are processed in the Native SQL interface before being passed. To enable this, the Native SQL interface contains platform-dependent parts (referred to as client libraries), which also perform conversion between ABAP types and database types.

ABENTECHNO\_GLOSSARY.html