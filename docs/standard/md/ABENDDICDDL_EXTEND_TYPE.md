---
title: "ABENDDICDDL_EXTEND_TYPE"
description: |
  ABENDDICDDL_EXTEND_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDICDDL_EXTEND_TYPE.htm"
abapFile: "ABENDDICDDL_EXTEND_TYPE.html"
keywords: ["do", "if", "data", "ABENDDICDDL", "EXTEND", "TYPE"]
---

``[`structure_annos`](ABENDDICDDL_DEFINE_STRUCT_PROPS.html)\  EXTEND TYPE struct|dbtab WITH append_struct \{    ...    [`component`](ABENDDICDDL_DEFINE_STRUCT_COMPS.html)\    [...    [`extend`](ABENDDICDDL_DEFINE_STRUCT_COMP_EXT.html)\    ...];    ...    [`include;`](ABENDDICDDL_DEFINE_STRUCT_INCL.html)\    ...   \}``

[Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement for defining an ABAP Dictionary [append structure](ABENDDIC_APPEND_STRUCTURES.html)\\ `append_struct` in the [ABAP development tools for Eclipse](ABENADT_GLOSRY.html).

Adds the append structure `DEMO_APPEND_STRUCTURE` to the structure `DEMO_STRUCTURE` in the ADT.

The source code used to define the structure `DEMO_STRUCTURE` is not modified by this extension. In the ADT, however, an icon indicates that the structure is extended using `DEMO_APPEND_STRUCTURE`.

-   The statement `EXTEND TYPE` adds the append structure `append_struct` either to an existing structure `struct` or to a DDIC database table `dbtab`.
-   The mandatory properties of the append structure must be specified in front of the statement `EXTEND TYPE` using the same annotations `[structure_annos](ABENDDICDDL_DEFINE_STRUCT_PROPS.html)` as in the definition of a structure.
-   As in the definition of a structure using [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html), the components of the append structure are defined in a semicolon-separated list in curly brackets `\{ \}`, either as individual components [`component`](ABENDDICDDL_DEFINE_STRUCT_COMPS.html) or by including include structures [`include`](ABENDDICDDL_DEFINE_STRUCT_INCL.html).
-   As when including structures, an assignment to a search help and a definition of a foreign key dependency can be overwritten using the addition [`extend`](ABENDDICDDL_DEFINE_STRUCT_COMP_EXT.html) in a blank-separated list.

-   As in the [CDS syntax](ABENCDS_GENERAL_SYNTAX_RULES.html), the definition of an ABAP Dictionary append structure can contain comments after `//` and between `/* ... */`.
-   A more detailed description of the syntax is available in the `ADT` documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

@EndUserText.label : 'Demo append structure' \\n@AbapCatalog.enhancement.category : #EXTENSIBLE\_CHARACTER\_NUMERIC \\nextend type demo\_structure with demo\_append\_structure \\{ \\n comp3 : dats; \\n comp4 : tims; \\} abenabap.html abenabap\_dictionary.html abenddic\_enhancements.html abenddic\_append\_structures.html abenddic\_extend\_type.html