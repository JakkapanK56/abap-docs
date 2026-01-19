---
title: "ABAPTYPES_STRUC"
description: |
  ABAPTYPES_STRUC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_STRUC.htm"
abapFile: "ABAPTYPES_STRUC.html"
keywords: ["select", "do", "if", "types", "ABAPTYPES", "STRUC"]
---

`TYPES BEGIN OF struc_type.`\\ 
  `...`\\ 
  `TYPES comp ...`\\ 
  ``TYPES comp TYPE struc_type [`BOXED`](ABAPTYPES_BOXED.html).``\\ 
  ``[`INCLUDE TYPE|STRUCTURE ...`](ABAPINCLUDE_TYPE.html)``\\ 
  `...`\\ 
`TYPES END OF struc_type.`

Definition of a structured type `struc_type`. This is introduced using a `TYPES` statement with the addition `BEGIN OF` and must end with a `TYPES` statement with the addition `END OF`.

The following can be included between these `TYPES` statements:

Structured types must not be created without at least one component.

The `TYPES` statements within the statements `BEGIN OF` and `END OF` define the components of the structured type `struc_type`. If a component is a structured type or if a new structured type is defined within a structure using `BEGIN OF` and `END OF`, substructures are created. A structure with substructures is a nested structure.

A component of `struc_type` cannot be declared with reference to `struc_type` itself. If the name `struc_type` is specified after `TYPE` in the declaration of a component, a search is performed for the next type with this name in a higher [visibility section](ABENLIFETIME_AND_VISIBILITY.html), and used if found. If there is no other global type of this name, a syntax error occurs.

If a component is created as a [table type](ABAPTYPES_ITAB.html), it must not be generic. The name of a component cannot be the reserved name of the [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line`.

The statement `INCLUDE` defines components of the structured type `struc_type` by copying the components of a differently structured type or an existing structure at the same level.

The components of a structured type are addressed using the name `struc_type` and the name of the component, separated by the structure component selector (`-`).

This example defines two structured types, `street_type` and `address_type`. `address_type` contains structured types as components. The definition of `zipcode_type` shows the access to substructures.

-   Any `TYPES` statements, particularly other completed structure definitions.
-   The definition of [static boxes](ABENSTATIC_BOX_GLOSRY.html) using [`BOXED`](ABAPTYPES_BOXED.html).
-   The statements [`INCLUDE TYPE`](ABAPINCLUDE_TYPE.html) and [`INCLUDE STRUCTURE`](ABAPINCLUDE_TYPE.html) for including components from other structures.

-   The [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can be used to [construct](ABENVALUE_CONSTRUCTOR_PARAMS_STRUC.html) the content of structures.
-   A structure type is always fully specified. There is no generic structure type.
-   The statements for defining a structure type are usually summarized in a [chained statement](ABENCHAINED_STATEMENT_GLOSRY.html) if possible.

TYPES: BEGIN OF street\_type, \\n name TYPE c LENGTH 40, \\n no TYPE c LENGTH 4, \\n END OF street\_type. \\n\\ \\nTYPES: BEGIN OF address\_type, \\n name TYPE c LENGTH 30, \\n street TYPE street\_type, \\n BEGIN OF city, \\n zipcode TYPE n LENGTH 5, \\n name TYPE c LENGTH 40, \\n END OF city, \\n END OF address\_type. \\n\\ \\nTYPES zipcode\_type TYPE address\_type-city-zipcode. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html