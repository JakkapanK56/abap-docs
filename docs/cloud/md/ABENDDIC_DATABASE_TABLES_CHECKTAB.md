---
title: "ABENDDIC_DATABASE_TABLES_CHECKTAB"
description: |
  ABENDDIC_DATABASE_TABLES_CHECKTAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_CHECKTAB.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_CHECKTAB.html"
keywords: ["insert", "delete", "do", "if", "data", "ABENDDIC", "DATABASE", "TABLES", "CHECKTAB"]
---

Table fields of a DDIC database table whose data type is determined by a [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html) can be assigned a check table. The [value table](ABENVALUE_TABLE_GLOSRY.html) of any [DDIC domain](ABENDOMAIN_GLOSRY.html) of the data element is used as a default value. A table field to which a check table is assigned is called a [foreign key field](ABENFOREIGN_KEY_FIELD_GLOSRY.html) and becomes a part of the [foreign key](ABENDDIC_DATABASE_TABLES_FORKEY.html) of the table. The table itself becomes a foreign key table. The primary key of the check table is the foreign key of the foreign key table. Each key field of the check table corresponds to a field in the foreign key table. The corresponding field pairs must have the same data type.

-   Fields whose data type is specified directly (not by using a DDIC data element) cannot be assigned a check table.
-   As long as a DDIC database table is a check table, none of its key fields can be deleted and the order of the key fields cannot be modified.
-   As long as a DDIC database table is a check table, its primary key can be expanded only by appending new key fields to its end. The existing foreign keys then automatically become generic regarding the new key fields.
-   A client field cannot be inserted later into an existing check table.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html abenddic\_database\_tables\_forkeyrel.html