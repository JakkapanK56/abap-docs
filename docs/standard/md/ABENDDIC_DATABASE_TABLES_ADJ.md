---
title: "ABENDDIC_DATABASE_TABLES_ADJ"
description: |
  ABENDDIC_DATABASE_TABLES_ADJ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_DATABASE_TABLES_ADJ.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_ADJ.html"
keywords: ["insert", "delete", "do", "if", "case", "data", "ABENDDIC", "DATABASE", "TABLES", "ADJ"]
---

When an existing modified DDIC database table is activated, existing content must be adjusted on the database in the following cases:

-   When a [client column](ABENCLIENT_COLUMN_GLOSRY.html) is inserted. During the adjustment, the data of the table is copied to all clients listed in the client table `T000`.
-   When fields of existing DDIC database tables are deleted. When key fields are deleted, rows can be lost.
-   When fields of existing DDIC database tables are renamed. The field with the old name is deleted and a field with the new name is appended. This leads to the loss of the data in column with the old field name.
-   Changing the technical properties of table fields.

-   The order of table fields in transparent tables in the ABAP Dictionary may be different from the order of the columns of the physical database table on the database. This means that modifying the order of table fields does not necessarily require an adjustment.
-   In adjustments, initial fields are filled with their type-dependent initial value, regardless of the [flag for initial values](ABENDDIC_DATABASE_TABLES_INIT.html).
-   For more information, see [Adjustment of Database Structures](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21f1ab446011d189700000e8322d00).

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html