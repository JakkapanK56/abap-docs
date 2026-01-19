---
title: "ABENDDICDDL_DEFINE_TABLE_FORKEY"
description: |
  ABENDDICDDL_DEFINE_TABLE_FORKEY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_TABLE_FORKEY.htm"
abapFile: "ABENDDICDDL_DEFINE_TABLE_FORKEY.html"
keywords: ["if", "data", "ABENDDICDDL", "DEFINE", "TABLE", "FORKEY"]
---

`...  WITH FOREIGN KEY [[n,m]] check_table         WHERE check_field1 = dbtab.field1           [AND check_field2 = dbtab.field2 ...] ...`

Assigns a [check table](ABENDDIC_DATABASE_TABLES_CHECKTAB.html) to a [table field](ABENDDICDDL_DEFINE_TABLE_COMPS.html) whose data type is defined by a data element in the definition of a DDIC database table using the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html). `check_table` must be an existing DDIC database table. This statement turns `check_table` into a check table and turns the current DDIC database table into a [foreign key table](ABENFOREIGN_KEY_TABLE_GLOSRY.html). The current table field is turned into a [foreign key field](ABENFOREIGN_KEY_FIELD_GLOSRY.html) of the [foreign key](ABENDDIC_DATABASE_TABLES_FORKEY.html) of the current table.

Further properties of the foreign key can be specified using [`foreign_key_annos`](ABENDDICDDL_DEFINE_TABLE_FKPRPS.html).

The addition `WITH FOREIGN KEY` can be used, with the same meaning, in the definition of a structure using [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html).

Dictionary DDL for specifying the check table `SCARR` of the foreign key field `CARRID` of the foreign key table `SPFLI`.

-   Fields of the check table must be assigned to the foreign key fields of the foreign key table after `WHERE`.
-   `[n,m]` can be used to define the [cardinality](ABENCARDINALITY_GLOSRY.html) of the [foreign key](ABENDDIC_DATABASE_TABLES_FORKEY.html).

-   The possible values for `n` are `1` for [1](ABENDDIC_DATABASE_TABLES_FORKEY.html) and `[0..1]` for [C](ABENDDIC_DATABASE_TABLES_FORKEY.html).
-   The possible values for `m` are `1` for [1](ABENDDIC_DATABASE_TABLES_FORKEY.html), `[0..1]` for [C](ABENDDIC_DATABASE_TABLES_FORKEY.html), `[1..*]` for [N](ABENDDIC_DATABASE_TABLES_FORKEY.html), and `[0..*]` for [CN](ABENDDIC_DATABASE_TABLES_FORKEY.html).

... \\ndefine table spfli \\{ \\n ... \\n @AbapCatalog.foreignKey.label : 'Check Against Airline' \\n @AbapCatalog.foreignKey.keyType : #KEY \\n @AbapCatalog.foreignKey.screenCheck : true \\n key carrid : s\_carr\_id not null \\n with foreign key \[0..\*,1\] scarr \\n where mandt = spfli.mandt \\n and carrid = spfli.carrid; \\n ... \\n\\} abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_define\_table.html abenddicddl\_define\_table.html abenddicddl\_define\_table\_comps.html