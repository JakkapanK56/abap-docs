---
title: "ABENDDICDDL_DEFINE_TABLE"
description: |
  ABENDDICDDL_DEFINE_TABLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDICDDL_DEFINE_TABLE.htm"
abapFile: "ABENDDICDDL_DEFINE_TABLE.html"
keywords: ["do", "if", "method", "class", "data", "ABENDDICDDL", "DEFINE", "TABLE"]
---

``[`structure_annos`](ABENDDICDDL_DEFINE_STRUCT_PROPS.html)\  [`ext_annos`](ABENDDICDDL_DEFINE_EXT_ANNOS.html)\  [`table_annos`](ABENDDICDDL_DEFINE_TABLE_PROPS.html)\  DEFINE TABLE dbtab \{    ...    [`field;`](ABENDDICDDL_DEFINE_TABLE_COMPS.html)\    ...    [`include;`](ABENDDICDDL_DEFINE_TABLE_INCL.html)\    ...   \}``

[Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement for defining an ABAP Dictionary [DDIC database table](ABENDDIC_DATABASE_TABLES.html)\\ `dbtab` in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html).

Definition of DDIC database table `DEMO_BLOB_TABLE` in the [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) of the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html).

-   A DDIC database table is defined using the statement `DEFINE TABLE`. The name `dbtab` must comply with the naming rules for DDIC database tables.
-   In front of the statement `DEFINE TABLE`,

-   the same mandatory structure properties must be specified as [annotations](ABENDDIC_ANNOTATION_GLOSRY.html)\\ `[structure_annos](ABENDDICDDL_DEFINE_STRUCT_PROPS.html)` as in the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html).
-   the same optional extensibility annotations `[ext_annos](ABENDDICDDL_DEFINE_EXT_ANNOS.html)` as in the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html) are available for [C0 developer extensibility](ABENDEV_EXTENSIBILITY_GLOSRY.html).
-   any mandatory table properties must be specified as annotations `[table_annos](ABENDDICDDL_DEFINE_TABLE_PROPS.html)`. Any other properties are optional.

-   The table fields are defined in a semicolon-separated list in curly brackets `\{ \}` using one of the following methods:

-   by defining single fields [`field`](ABENDDICDDL_DEFINE_TABLE_COMPS.html)
-   by including include structures [`include`](ABENDDICDDL_DEFINE_TABLE_INCL.html).

-   As in the [CDS syntax](ABENCDS_GENERAL_SYNTAX_RULES.html), an ABAP Dictionary structure definition can contain comments after `//` and between `/* ... */`.
-   For a more detailed description of the syntax, see the `ADT` documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

@EndUserText.label : 'Table with a BLOB Column'\\n@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE\\n@AbapCatalog.tableCategory : #TRANSPARENT\\n@AbapCatalog.deliveryClass : #A\\n@AbapCatalog.dataMaintenance : #RESTRICTED\\ndefine table demo\_blob\_table \\{\\n\\n key name : abap.sstring(255) not null;\\n picture : abap.rawstring(0);\\n\\n\\} abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_define\_table.html