---
title: "ABENDDICDDL_DEFINE_STRUCT_VALUHELP"
description: |
  ABENDDICDDL_DEFINE_STRUCT_VALUHELP - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_STRUCT_VALUHELP.htm"
abapFile: "ABENDDICDDL_DEFINE_STRUCT_VALUHELP.html"
keywords: ["data", "types", "ABENDDICDDL", "DEFINE", "STRUCT", "VALUHELP"]
---

`...  WITH VALUE HELP value_help         WHERE parameter1 = structure.component1           [AND parameter2 = structure.component2 ...] ...`

Assigns a [search help](ABENSEARCH_HELP_GLOSRY.html) to a [structure component](ABENDDICDDL_DEFINE_STRUCT_COMPS.html) whose data type is defined by a data element with an elementary data type in the definition of a structure using the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html). Here, `value_help` is an existing search help in the ABAP Dictionary. All parameters of the search help must be linked with structure components after `WHERE`.

The addition `WITH VALUE HELP` can be used, with the same meaning, in the definition of a database using [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html).

Definition of elementary components with reference to data elements and binds a search help to the second component.

... \\ndefine structure struct \\{ \\n comp1 : s\_carr\_id; \\n comp2 : s\_conn\_id \\n with value help demo\_f4\_field \\n where carrid = struct.comp1 \\n and connid = struct.comp2; \\n ... \\n \\} abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_define\_structure.html abenddicddl\_define\_structure.html abenddicddl\_define\_struct\_comps.html