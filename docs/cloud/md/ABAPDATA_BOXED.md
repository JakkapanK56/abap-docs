---
title: "ABAPDATA_BOXED"
description: |
  ABAPDATA_BOXED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDATA_BOXED.htm"
abapFile: "ABAPDATA_BOXED.html"
keywords: ["class", "data", "types", "ABAPDATA", "BOXED"]
---

`DATA struc TYPE struc_type BOXED.`

This statement defines a structured attribute of a class or an interface as a [static box](ABENSTATIC_BOXES.html). It can only be in the declaration section of a class or an interface and only at the highest level.

`struc_type` expects a structured data type. This can be a program-local structured type, a visible structured type of a global class or of a global interface, or a structure from the ABAP Dictionary, and can also contain static boxes.

Static boxes support [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html). Here, the structure is not saved in the superordinate context itself. Instead, an internal reference that points to the actual structure is stored instead of the component. This makes a static box a [deep](ABENDEEP_GLOSRY.html) component.

The following section shows the allowed use of the addition `BOXED` with the statement `[CLASS-]DATA`. In a class, a static structure `struc1` and a structured instance attribute `struc2` are declared as static boxes.

-   A structure with a static box is a [deep structure](ABENDEEP_STRUCTURE_GLOSRY.html) and the corresponding restrictions apply.
-   The addition `BOXED` defines the static box in relation to its context (structure or class). A data type declared using a direct `TYPE` reference or `LIKE` reference to a static box inherits its data type but is not a static box itself.
-   When a static box is included in one structure from another structure using the statement [`INCLUDE TYPE|STRUCTURE`](ABAPINCLUDE_TYPE.html), its property as a static box is inherited.

-   The addition `BOXED` can also be used in the statement [`TYPES`](ABAPTYPES_BOXED.html) to declare a substructure of a nested structured data type.

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n TYPES: BEGIN OF t\_struc, \\n comp1 TYPE c LENGTH 100, \\n comp2 TYPE n LENGTH 100, \\n END OF t\_struc. \\n PRIVATE SECTION. \\n CLASS-DATA struc1 TYPE t\_struc BOXED. \\n DATA struc2 TYPE t100 BOXED. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html