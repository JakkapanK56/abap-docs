---
title: "ABENDDIC_DATABASE_TABLES_STORAGE"
description: |
  ABENDDIC_DATABASE_TABLES_STORAGE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_STORAGE.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_STORAGE.html"
keywords: ["do", "if", "case", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "STORAGE"]
---

The storage type has an effect only if the current database is an [SAP HANA](ABENHANA_DATABASE_GLOSRY.html) database. The specified storage type is ignored by other database systems and the platform-dependent storage type is used instead. The following settings can be defined for the SAP HANA database:

For more information about the differences between row store and column store on the SAP HANA database, see the SAP HANA documentation.

-   **Column store**
-   This setting should be used in the following cases:

-   The DDIC database table is designed for application data analyzed in [SAP HANA](ABENSAP_HANA_GLOSRY.html).
-   The DDIC database table contains a very large number of rows since the storage type Column Store provides better compression.
-   The DDIC database table contains table fields with HANA data types that are supported only by the storage type column store.

-   **Row store**
-   This setting should only be used in SAP HANA databases if the database table is used mainly for frequent single row accesses. For [global temporary tables (GTTs)](ABENDDIC_DATABASE_TABLES_GTT.html), it is the only possible setting.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_tech.html abenddic\_database\_tables\_techspec.html