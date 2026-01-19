---
title: "ABAPDATA_STRUC"
description: |
  ABAPDATA_STRUC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_STRUC.htm"
abapFile: "ABAPDATA_STRUC.html"
keywords: ["select", "loop", "if", "data", "types", "ABAPDATA", "STRUC"]
---

[Short Reference](ABAPDATA_BEGIN_OF_SHORTREF.html)

``DATA BEGIN OF struc [`[READ-ONLY]`](ABAPDATA_OPTIONS.html).``\\ 
  `...`\\ 
   ``[`INCLUDE TYPE|STRUCTURE ...`](ABAPINCLUDE_TYPE.html)``\\ 
  `...`\\ 
`DATA END OF struc.`

Declaration of a new [structure](ABENDATA_OBJECTS_STRUCTURE.html)\\ `struc`. This is introduced using a `DATA` statement with the addition `BEGIN OF` and must end with a `DATA` statement with the addition `END OF`.

The following can be included between these `DATA` statements:

The meaning of these statements is the same as in the definition of structured data types in the section [`TYPES` - `BEGIN OF`](ABAPTYPES_STRUC.html). However, here it is used to create a bound structured data type. No structure can be created without at least one component.

A component of `struc` cannot be declared by referencing `struc` itself. If the name `struc` is specified after `LIKE` in the declaration of a component, a search is performed for the next object with this name in a higher [visibility section](ABENLIFETIME_AND_VISIBILITY.html) and used if found. If there is no more global object with this name, a syntax error occurs.

In this example, a structure `spfli_struc` is declared with an elementary component `index` and a substructure `spfli_wa`. The [`SELECT`](ABAPSELECT.html) loop shows a possible use of the nested structure.

-   Any `DATA` statements, particularly further closed structures.
-   The statements [`INCLUDE TYPE`](ABAPINCLUDE_TYPE.html) and [`INCLUDE STRUCTURE`](ABAPINCLUDE_TYPE.html)

-   The addition [`READ-ONLY`](ABAPDATA_OPTIONS.html) is only possible for the entire structure, not for individual structure components `comp`.
-   A structure called `text` cannot have any components with three-character names, since these are reserved for addressing [text symbols](ABENTEXT_SYMBOLS.html). It is best to never call a structure `text` to avoid any conflicts with text symbols.
-   The addition [`BOXED`](ABAPDATA_BOXED.html) cannot be specified between `DATA BEGIN OF` and `DATA END OF` when declaring components. Static boxes in structures can only be defined with [`TYPES`](ABAPTYPES_BOXED.html).
-   The [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can be used to [construct](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html) the content of structures.
-   The statements for declaring a structure are usually summarized in a [chained statement](ABENCHAINED_STATEMENT_GLOSRY.html) if possible.
-   In an [obsolete variant](ABENANONYMOUS_COMPONENTS.html), text field literals or the constant `space` can be specified as anonymous components between `BEGIN OF` and `END OF`.
-   The use of the addition [`OCCURS`](ABAPDATA_BEGIN_OF_OCCURS.html) for defining standard tables with structured line types is obsolete.

-   [Declaration of a Simple Structure](ABENSIMPLE_STRUCTURE_ABEXA.html)
-   [Declaration of a Nested Structure](ABENNESTED_STRUCTURE_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: BEGIN OF spfli\_struc, \\n index TYPE i, \\n spfli\_wa TYPE spfli, \\n END OF spfli\_struc. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO @spfli\_struc-spfli\_wa. \\n spfli\_struc-index += 1. \\n out->next\_section( |\\{ spfli\_struc-index \\}| ). \\n out->write\_data( spfli\_struc-spfli\_wa ). \\nENDSELECT. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html