---
title: "ABENDDICDDL_DEFINE_STRUCT_COMP_EXT"
description: |
  ABENDDICDDL_DEFINE_STRUCT_COMP_EXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_STRUCT_COMP_EXT.htm"
abapFile: "ABENDDICDDL_DEFINE_STRUCT_COMP_EXT.html"
keywords: ["if", "data", "types", "ABENDDICDDL", "DEFINE", "STRUCT", "COMP", "EXT"]
---

``... [[`foreign_key_annos`](ABENDDICDDL_DEFINE_TABLE_FKPRPS.html)]\      EXTEND component : [[`value_help`](ABENDDICDDL_DEFINE_STRUCT_VALUHELP.html)]\ [[`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html)] ...``

Defines component properties when [including](ABENDDICDDL_DEFINE_STRUCT_INCL.html) include structures using the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html). The addition `EXTEND` can be specified for the every component `component` in the included [include structure](ABENDDIC_INCLUDE_STRUCTURE.html) and defines the following properties for this structure. If any of the properties of the included component already exist, they are overwritten.

At least one of the additions `value_help` and `foreign_key` must be specified.

The addition `EXTEND` can be used with the same meaning in the definition of a DDIC database table with [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html) or an append structure with [`EXTEND TYPE`](ABENDDICDDL_EXTEND_TYPE.html).

Inclusion of a structure `include_struct` in a structure `struct`, where `EXTEND` is used to assign a search help to the components `comp1` and `comp2`.

-   [`foreign_key_annos`](ABENDDICDDL_DEFINE_TABLE_FKPRPS.html) - Properties of a foreign key relationship
-   [`value_help`](ABENDDICDDL_DEFINE_STRUCT_VALUHELP.html) - Assignment to a search help.
-   [`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html) - Definition of a foreign key dependency.

... \\ndefine structure struct \\{ \\n ... \\n include include\_struct \\n extend comp1 : \\n with value help demo\_f4\_field \\n where carrid = struct.comp1 \\n and connid = struct.comp2 \\n extend comp2 : \\n with value help demo\_f4\_field \\n where carrid = struct.comp1 \\n and connid = struct.comp2; \\n ... \\n \\} abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_define\_structure.html abenddicddl\_define\_structure.html abenddicddl\_define\_struct\_incl.html