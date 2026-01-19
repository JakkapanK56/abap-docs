---
title: "ABENDDICDDL_DEFINE_STRUCTURE"
description: |
  ABENDDICDDL_DEFINE_STRUCTURE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_DEFINE_STRUCTURE.htm"
abapFile: "ABENDDICDDL_DEFINE_STRUCTURE.html"
keywords: ["do", "if", "method", "data", "types", "ABENDDICDDL", "DEFINE", "STRUCTURE"]
---

``[`structure_annos`](ABENDDICDDL_DEFINE_STRUCT_PROPS.html)\  [`ext_annos`](ABENDDICDDL_DEFINE_EXT_ANNOS.html)\  DEFINE STRUCTURE struct \{    ...    [`component;`](ABENDDICDDL_DEFINE_STRUCT_COMPS.html)\    ...    [`include;`](ABENDDICDDL_DEFINE_STRUCT_INCL.html)\    ...   \}``

[Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement for defining an ABAP Dictionary [DDIC structure](ABENDDIC_STRUCTURES.html)\\ `struct` in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html).

Definition of the structure `DEMOFLI` in ADT.

-   A structure is defined using the statement `DEFINE STRUCTURE`. The name `struct` is subject to the [naming rules for DDIC data types](ABENDDIC_TYPES_NAMES.html).
-   [Annotations](ABENDDIC_ANNOTATION_GLOSRY.html)\\ `[structure_annos](ABENDDICDDL_DEFINE_STRUCT_PROPS.html)` in front of the statement `DEFINE STRUCTURE` define the mandatory structure properties.
-   Optionally, extensibility annotations [`ext_annos`](ABENDDICDDL_DEFINE_EXT_ANNOS.html) can be specified in front of the statement `DEFINE STRUCTURE`. These annotations are a prerequisite for [C0 release](ABENC0_CONTRACT_GLOSRY.html) of a DDIC structure.
-   The structure components are defined in a semicolon-separated list in curly brackets `\{ \}` by one of the following methods:

-   Defining individual components [`component`](ABENDDICDDL_DEFINE_STRUCT_COMPS.html)
-   Including include structures [`include`](ABENDDICDDL_DEFINE_STRUCT_INCL.html)

-   As in the [CDS syntax](ABENCDS_GENERAL_SYNTAX_RULES.html), an ABAP Dictionary structure definition can contain comments after `//` and between `/* ... */`.
-   A more detailed description of the syntax is available in the `ADT` documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

@EndUserText.label : 'Structure for ALV Demo'\\n@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE\\ndefine structure demofli \\{\\n\\n fldate : s\_date;\\n seatsmax : s\_seatsmax;\\n seatsocc : s\_seatsocc;\\n\\n\\} abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_structures.html abenddic\_define\_structure.html