---
title: "ABENDDICDDL_DEFINE_TABLE_COMPS"
description: |
  ABENDDICDDL_DEFINE_TABLE_COMPS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_TABLE_COMPS.htm"
abapFile: "ABENDDICDDL_DEFINE_TABLE_COMPS.html"
keywords: ["if", "class", "data", "types", "ABENDDICDDL", "DEFINE", "TABLE", "COMPS"]
---

``[[`component_annos`](ABENDDICDDL_DEFINE_STRUCT_CMPPRPS.html)]\  [[`foreign_key_annos`](ABENDDICDDL_DEFINE_TABLE_FKPRPS.html)]\  [[`geo_annos`](ABENDDICDDL_DEFINE_TABLE_SRPRPS.html)]\  [KEY] field : \{data_element [[`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html)]\  \ [[`value_help`](ABENDDICDDL_DEFINE_STRUCT_VALUHELP.html)]\}\                |abap.[`type`](ABENDDIC_BUILTIN_TYPES.html)[(n)|(n,m)]\                [NOT NULL];``

Defines a single [database field](ABENDDIC_DATABASE_TABLES_TECHSTRUC.html) in the definition of a DDIC database table using the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html).

Definition of DDIC database table `DEMO_EXPRESSIONS` in the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) of the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html). The types of all fields are determined directly using built-in data types in the ABAP Dictionary.

-   In front of the field, annotations [`component_annos`](ABENDDICDDL_DEFINE_STRUCT_CMPPRPS.html) can be used to specify the same optional component properties as in the definition of a structure using [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html).
-   [`foreign_key_annos`](ABENDDICDDL_DEFINE_TABLE_FKPRPS.html) can be used to specify the properties of a foreign key dependency defined with [`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html).
-   [`geo_annos`](ABENDDICDDL_DEFINE_TABLE_SRPRPS.html) specify the properties of a component with the [geodata type](ABENGEO_DATA_TYPE_GLOSRY.html)\\ `GEOM_EWKB`.
-   The addition `KEY` defines the table field as a [key field](ABENDDIC_DATABASE_TABLES_KEY.html).
-   `field` defines the name of the database field.
-   `data_element` or `abap.type` is used to define the data type of the table field. The same rules apply as in the definition of a [structure component](ABENDDICDDL_DEFINE_STRUCT_COMPS.html), except that only elementary types can be specified here.
-   The addition `NOT NULL` is used to set the [flag for initial values](ABENDDIC_DATABASE_TABLES_INIT.html).
-   The addition [`foreign_key`](ABENDDICDDL_DEFINE_TABLE_FORKEY.html) can be used to define a [foreign key dependency](ABENDDIC_DATABASE_TABLES_FORKEYREL.html) for a table field. As a prerequisite, the table field must be typed using a data element.
-   The addition [`value_help`](ABENDDICDDL_DEFINE_STRUCT_VALUHELP.html) can be used to assign a search help to a table field whose data type is defined using a data element.

@EndUserText.label : 'Database table for Expression Examples' \\n@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE \\n@AbapCatalog.tableCategory : #TRANSPARENT \\n@AbapCatalog.deliveryClass : #A \\n@AbapCatalog.dataMaintenance : #ALLOWED \\ndefine table demo\_expressions \\{ \\n key mandt : mandt not null; \\n key id : char1 not null; \\n num1 : abap.int4; \\n num2 : abap.int4; \\n numlong1 : abap.int8; \\n numlong2 : abap.int8; \\n dec1 : abap.dec(31,0); \\n dec2 : abap.dec(31,10); \\n dec3 : abap.dec(10,3); \\n fltp1 : abap.fltp; \\n fltp2 : abap.fltp; \\n decf1 : abap.df34\_dec(31,0); \\n decf2 : abap.df34\_dec(31,0); \\n char1 : abap.char(10); \\n char2 : abap.char(10); \\n numc1 : abap.numc(10); \\n numc2 : abap.numc(10); \\n string1 : abap.string(0); \\n string2 : abap.string(0); \\n raw1 : abap.raw(10); \\n raw2 : abap.raw(10); \\n xstring1 : abap.rawstring(0); \\n xstring2 : abap.rawstring(0); \\n dats1 : abap.dats; \\n dats2 : abap.dats; \\n tims1 : abap.tims; \\n tims2 : abap.tims; \\n timestamp1 : abap.dec(15,0); \\n timestamp2 : abap.dec(15,0); \\} abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_define\_table.html abenddicddl\_define\_table.html