---
title: "ABENDDICDDL_DEFINE_TABLE_INCL"
description: |
  ABENDDICDDL_DEFINE_TABLE_INCL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_TABLE_INCL.htm"
abapFile: "ABENDDICDDL_DEFINE_TABLE_INCL.html"
keywords: ["insert", "do", "if", "data", "ABENDDICDDL", "DEFINE", "TABLE", "INCL"]
---

``[KEY]\ [group :] INCLUDE struct [WITH SUFFIX suffix]\ [NOT NULL]\                    [...                     [`extend`](ABENDDICDDL_DEFINE_STRUCT_COMP_EXT.html)\                     ...];``

Includes an [include structure](ABENDDIC_INCLUDE_STRUCTURE.html) in the definition of a DDIC database table with the statement [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html). The same applies as to [including](ABENDDICDDL_DEFINE_STRUCT_INCL.html) include structures into structures with the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html), except that the include structures must be suitable for DDIC database tables.

Additionally, the additions `KEY` and `NOT NULL` can be used:

-   By using `KEY` all fields of the included structure are flagged as [key fields](ABENDDIC_DATABASE_TABLES_KEY.html). The include structure must then be inserted between the existing key fields or directly after them. The key attribute of the individual fields of an included structure does not have an effect. Either all fields are included as key fields or none.
-   By using `NOT NULL` the [flag for initial values](ABENDDIC_DATABASE_TABLES_INIT.html) is set for the included structure. When used, those fields in the include structure for which this attribute is set also keep their attribute, but it is not switched on for fields where the attribute is not set. If the flag for initial values is not set for the included include structure, this attribute is removed for all fields.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_define\_table.html abenddicddl\_define\_table.html