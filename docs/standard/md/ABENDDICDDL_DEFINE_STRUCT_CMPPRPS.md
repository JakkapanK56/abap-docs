---
title: "ABENDDICDDL_DEFINE_STRUCT_CMPPRPS"
description: |
  ABENDDICDDL_DEFINE_STRUCT_CMPPRPS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_STRUCT_CMPPRPS.htm"
abapFile: "ABENDDICDDL_DEFINE_STRUCT_CMPPRPS.html"
keywords: ["if", "data", "types", "ABENDDICDDL", "DEFINE", "STRUCT", "CMPPRPS"]
---

`[@EndUserText.label : '...']\  [@AbapCatalog.decfloat.outputStyle : style ]\  [@AbapCatalog.textLanguage ]\  [@Semantics.amount.currencyCode : 'struct.comp']\  [@Semantics.quantity.unitOfMeasure : 'struct.comp']`

Annotation for specifying optional properties of a [component](ABENDDICDDL_DEFINE_STRUCT_COMPS.html) in the definition of a DDIC structure using the statement [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html) in [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html).

The syntax used to specify the properties is based on [CDS annotations](ABENCDS_ANNOTATION_GLOSRY.html). There are, however, no visible associated [annotation definitions](ABENCDS_ANNO_DEFINITION_GLOSRY.html).

Definition of the component `weight_unit` as a reference field for the quantity field `weight` in the same structure.

-   In quotation marks, `@EndUserText.label` defines the [short text of the component](ABENDDIC_STRUCTURES_SEMA.html) in the original language of the structure.
-   `@AbapCatalog.decfloat.outputStyle` defines the [output style](ABENDDIC_DECIMAL_FLOATING_POINT.html) of a decimal floating point number. `style` can be specified as:

-   `#NORMAL` - default, mathematical or scientific, depending on space
-   `#SIGN_RIGHT`
-   `#SCALE_PRESERVING`
-   `#SCIENTIFIC`
-   `#SCIENTIFIC_WITH_LEADING_ZERO`
-   `#SCALE_PRESERVING_SCIENTIFIC`
-   `#ENGINEERING`

-   `@AbapCatalog.textLanguage` - Flags a component of type `LANG` as [text language](ABENDDIC_DBTAB_TEXT_LANGUAGE.html)
-   `@Semantics.amount.currencyCode` - Definition of a [reference field](ABENDDIC_STRUCTURES_SEMA.html) for a [currency field](ABENDDIC_CURRENCY_FIELD.html). A component `comp` with the built-in dictionary type `CUKY` from the same or from a different structure `struc` must be specified in quotation marks.
-   `@Semantics.quantity.unitOfMeasure` - Definition of a [reference field](ABENDDIC_STRUCTURES_SEMA.html) for a [quantity field](ABENDDIC_QUANTITY_FIELD.html). A component `comp` with the built-in dictionary type `UNIT` from the same or from a different structure `struc` must be specified in quotation marks.

... \\ndefine structure struct \\{ \\n ... \\n @Semantics.quantity.unitOfMeasure : 'struct.weight\_unit' \\n weight : abap.quan(2); \\n weight\_unit : abap.unit(2); \\n ... \\n \\} abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_define\_structure.html abenddicddl\_define\_structure.html abenddicddl\_define\_struct\_comps.html