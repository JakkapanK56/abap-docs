---
title: "ABENDDICDDL_DEFINE_STRUCT_PROPS"
description: |
  ABENDDICDDL_DEFINE_STRUCT_PROPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_STRUCT_PROPS.htm"
abapFile: "ABENDDICDDL_DEFINE_STRUCT_PROPS.html"
keywords: ["if", "class", "data", "types", "ABENDDICDDL", "DEFINE", "STRUCT", "PROPS"]
---

`@EndUserText.label : '...'  @AbapCatalog.enhancement.category : enh_cat`

Mandatory annotations for specifying structure properties in the definition of a DDIC structure using the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html).

-   `@EndUserText.label` defines the [short text of the structure](ABENDDIC_STRUCTURES_SEMA.html) in its original language in quotation marks.
-   `@AbapCatalog.enhancement.category` defines the [enhancement category of the structure](ABENDDIC_STRUCTURES_ENH_CAT.html). The following can be specified for `enh_cat`:

-   `#NOT_CLASSIFIED` - [Not classified](ABENDDIC_STRUCTURES_ENH_CAT.html)
-   `#NOT_EXTENSIBLE` - [Cannot be enhanced](ABENDDIC_STRUCTURES_ENH_CAT.html)
-   `#EXTENSIBLE_CHARACTER` - [Can be enhanced (character-like)](ABENDDIC_STRUCTURES_ENH_CAT.html)
-   `#EXTENSIBLE_CHARACTER_NUMERIC` - [Can be enhanced (character-like or numeric)](ABENDDIC_STRUCTURES_ENH_CAT.html)
-   `#EXTENSIBLE_ANY` - [Can be enhanced (deep)](ABENDDIC_STRUCTURES_ENH_CAT.html)

-   The specification `#NOT_CLASSIFIED` is only intended for displaying existing structures of this property. Any new or modified structures should always have an enhancement category.
-   The syntax used to specify the properties is similar to [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). There are, however, no associated [annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html).
-   The same annotations must also be specified in the definition of a DDIC database table using [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html) and an append structure using [`EXTEND TYPE`](ABENDDICDDL_EXTEND_TYPE.html).

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_define\_structure.html abenddicddl\_define\_structure.html