---
title: "ABENDDICDDL_DEFINE_TABLE_FKPRPS"
description: |
  ABENDDICDDL_DEFINE_TABLE_FKPRPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_TABLE_FKPRPS.htm"
abapFile: "ABENDDICDDL_DEFINE_TABLE_FKPRPS.html"
keywords: ["if", "class", "data", "ABENDDICDDL", "DEFINE", "TABLE", "FKPRPS"]
---

`[@AbapCatalog.foreignKey.label : '...']\  [@AbapCatalog.foreignKey.keyType : key_type]\  [@AbapCatalog.foreignKey.screenCheck : true|false]\  [@AbapCatalog.foreignKey.messageClass : msg_cls]\  [@AbapCatalog.foreignKey.messageNumber : msg_no]`

Annotations used to specify properties for a [foreign key dependency](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html) of a [table field](ABENDDICDDL_DEFINE_TABLE_COMPS.html) defined using [`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html) in the definition of a DDIC database table using the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html).

See [`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html).

-   In quotation marks, `@AbapCatalog.foreignKey.label` defines the short text of the foreign key in the original language of the database table.
-   `@AbapCatalog.foreignKey.keyType` defines the [type of the foreign key fields](ABENDDIC_DATABASE_TABLES_FORKEY.html). `key_type` can be specified as:

-   `#NON_KEY` - [No key fields/candidates](ABENDDIC_DATABASE_TABLES_FORKEY.html)
-   `#KEY` - [Key fields/candidates](ABENDDIC_DATABASE_TABLES_FORKEY.html)
-   `#TEXT_KEY` - [Key fields of a text table](ABENDDIC_DATABASE_TABLES_FORKEY.html)

-   `@AbapCatalog.foreignKey.screenCheck` enables or disables the foreign key dependency for the [input check](ABENDDIC_DATABASE_TABLES_FORKEY.html).
-   `@AbapCatalog.foreignKey.messageClass` and `@AbapCatalog.foreignKey.messageNumber` specify the message class `msg_class` and message number `msg_no` for the [message](ABENMESSAGE_GLOSRY.html) of the [input check](ABENDDIC_DATABASE_TABLES_FORKEY.html).

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_define\_table.html abenddicddl\_define\_table.html abenddicddl\_define\_table\_comps.html