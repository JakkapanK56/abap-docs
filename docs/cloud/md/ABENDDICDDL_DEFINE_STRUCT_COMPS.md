---
title: "ABENDDICDDL_DEFINE_STRUCT_COMPS"
description: |
  ABENDDICDDL_DEFINE_STRUCT_COMPS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_STRUCT_COMPS.htm"
abapFile: "ABENDDICDDL_DEFINE_STRUCT_COMPS.html"
keywords: ["if", "class", "data", "types", "ABENDDICDDL", "DEFINE", "STRUCT", "COMPS"]
---

``[[`component_annos`](ABENDDICDDL_DEFINE_STRUCT_CMPPRPS.html)]\  [[`foreign_key_annos`](ABENDDICDDL_DEFINE_TABLE_FKPRPS.html)]\  [[`geo_annos`](ABENDDICDDL_DEFINE_TABLE_SRPRPS.html)]\  [KEY] comp : \{\ \{data_element [[`value_help`](ABENDDICDDL_DEFINE_STRUCT_VALUHELP.html)]\                               [[`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html)]\}\                 |abap.[`type`](ABENDDIC_BUILTIN_TYPES.html)[(n)|(n,m)]\ \}\             |\ \{ REFERENCE TO any_type \}\             |\ \{ struct [BOXED]\ \}\             |\ \{ table_type \}\             [NOT NULL];``

Defines a single [component](ABENDDIC_STRUCTURES_TECH.html) in the definition of a DDIC structure using the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html).

The [activation type](ABENDDIC_STRUCTURES_TECH.html) (relevant only for DDIC database tables) cannot be modified using `DEFINE STRUCTURE`.

Definition of elementary components of the structure `DEMO_DAY` with reference to built-in dictionary types. In the example for [include structures](ABENDDICDDL_DEFINE_STRUCT_INCL.html), the structure is included more than once in another structure.

-   Optional component properties can be specified using annotations [`component_annos`](ABENDDICDDL_DEFINE_STRUCT_CMPPRPS.html).
-   [`foreign_key_annos`](ABENDDICDDL_DEFINE_TABLE_FKPRPS.html) can be used to specify the properties of a foreign key dependency defined with [`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html).
-   [`geo_annos`](ABENDDICDDL_DEFINE_TABLE_SRPRPS.html) specify properties of a component with the [geodata type](ABENGEO_DATA_TYPE_GLOSRY.html)\\ `GEOM_EWKB`.
-   `comp` indicates the name of the component.
-   `data_element` or `abap.type` is used to define an elementary component or a component with a reference type:

-   `data_element` can be used to specify an existing [DDIC data element](ABENDATA_ELEMENT_GLOSRY.html). If the data element has an elementary data type, an elementary component is defined. If the data element has a reference type, the component is defined with this reference type.
-   `abap.type[(n)|(n,m)]` can be used to specify a built-in data type from the ABAP Dictionary and an elementary component of this type is defined. The prefix `abap` is mandatory and [`type`](ABENDDIC_BUILTIN_TYPES.html) indicates the type. `n` and `m` specify the length and number of decimal places, if required.

-   `REFERENCE TO any_type` is used to define a reference type. For `any_type`, the syntax `abap.type[(n)|(n,m)]` can be used to specify any existing data types from the ABAP Dictionary, classes or interfaces from the class library, the generic types `DATA` or `OBJECT`, or built-in types.
-   `struct [BOXED]` is used to define a substructure. DDIC structures, DDIC database tables, or DDIC views can all be specified for `struct`. `BOXED` can be used to define the substructure as a [static box](ABENSTATIC_BOX_GLOSRY.html).
-   `table_type` is used to define a tabular component. [Table types](ABENTABLE_TYPE_GLOSRY.html) from the ABAP Dictionary can be specified for `table_type`.
-   The additions `KEY` and `NOT NULL` can be used to define the component as a [key field](ABENDDIC_STRUCTURES_SEMA.html) and to set a [flag for initial values](ABENDDIC_STRUCTURES_SEMA.html). The addition `KEY` has no effect when the structure is included in DDIC database tables. The addition `NOT NULL` can be respected for structures that are included in DDIC database tables.
-   The addition [`value_help`](ABENDDICDDL_DEFINE_STRUCT_VALUHELP.html) can be used to assign a search help to a structure component whose data type is defined using a data element with elementary data type.
-   The addition [`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html) can be used to define a [foreign key dependency](ABENFOREIGN_KEY_DEPENDENCY_GLOSRY.html) for a structure component whose data type is defined using a data element with elementary data type. This addition only makes sense for structures that are included in DDIC database tables.

@EndUserText.label : 'Demo for include structure' \\n@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE \\ndefine structure demo\_day \\{ \\n work : abap.char(8); \\n free : abap.char(16); \\} abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_define\_structure.html abenddicddl\_define\_structure.html