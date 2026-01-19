---
title: "ABENDDICDDL_DEFINE_STRUCT_INCL"
description: |
  ABENDDICDDL_DEFINE_STRUCT_INCL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_STRUCT_INCL.htm"
abapFile: "ABENDDICDDL_DEFINE_STRUCT_INCL.html"
keywords: ["if", "data", "types", "ABENDDICDDL", "DEFINE", "STRUCT", "INCL"]
---

``[group :] INCLUDE struct [WITH SUFFIX suffix]\                    [...                     [`extend`](ABENDDICDDL_DEFINE_STRUCT_COMP_EXT.html)\                     ...];``

Includes an [include structure](ABENDDIC_INCLUDE_STRUCTURE.html) in the definition of a structure with the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html).

The addition `INCLUDE` can be used with the same semantics in the statement [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html) if the include structure is suitable for DDIC database tables.

Syntax for defining the structure `DEMO_WEEK` in ADT.

-   Any existing DDIC structure, DDIC database table, or DDIC view can be specified as `struct`.
-   `group` can be used to specify an optional name of a [group](ABENDDIC_INCLUDE_STRUCTURE.html).
-   `suffix` can be used to specify an optional three-character [suffix](ABENDDIC_INCLUDE_STRUCTURE.html).
-   A blank-separated list of additions, [`extend`](ABENDDICDDL_DEFINE_STRUCT_COMP_EXT.html), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

... \\ndefine structure demo\_week \\{ \\n monday : include demo\_day with suffix \_mo; \\n tuesday : include demo\_day with suffix \_tu; \\n wednesday : include demo\_day with suffix \_we; \\n thursday : include demo\_day with suffix \_th; \\n friday : include demo\_day with suffix \_fr; \\n\\} abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_define\_structure.html abenddicddl\_define\_structure.html