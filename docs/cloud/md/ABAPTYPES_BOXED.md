---
title: "ABAPTYPES_BOXED"
description: |
  ABAPTYPES_BOXED - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPTYPES_BOXED.htm"
abapFile: "ABAPTYPES_BOXED.html"
keywords: ["if", "class", "data", "types", "ABAPTYPES", "BOXED"]
---

`TYPES comp TYPE struc_type BOXED.`

This statement defines a substructure `comp` of a structure as a [static box](ABENSTATIC_BOXES.html). It can only be listed within a structure definition with the additions [`BEGIN OF`](ABAPTYPES_STRUC.html) and [`END OF`](ABAPTYPES_STRUC.html) of the statement `TYPES`, and only on the highest component level and not within nested `BEGIN OF ... END OF` blocks.

`struc_type` expects a structured data type. This can be a program-local structured type, a visible structured type of a global class or of a global interface, or a structure from the ABAP Dictionary, and can also contain static boxes.

Static boxes support [initial value sharing](ABENINITIAL_VALUE_SHARING_GLOSRY.html). Here, the structure is not saved in the superordinate context itself. Instead, an internal reference that points to the actual structure is stored instead of the component. This makes a static box a [deep](ABENDEEP_GLOSRY.html) component.

The following section shows how the addition `BOXED` can be used with the statement `TYPES`. In a structured type `t_struc2`, a substructure `t_struc2-comp2` of type `t_struc1` is declared as a static box.

-   A structure with a static box is a [deep structure](ABENDEEP_STRUCTURE_GLOSRY.html) and the corresponding restrictions apply.
-   The addition `BOXED` defines the static box in relation to its context (structure or class). A data type declared using a direct `TYPE` reference or `LIKE` reference to a static box inherits its data type but is not a static box itself.
-   When a static box is included in one structure from another structure using the statement [`INCLUDE TYPE|STRUCTURE`](ABAPINCLUDE_TYPE.html), its property as a static box is inherited.

-   If a nested structure whose static boxes already contain static boxes is to be created, this is only possible if each substructure in question exists as a standalone type. It is not possible to specify `BOXED` for substructures created by nesting using `TYPES BEGIN OF ... TYPES END OF`.
-   The addition `BOXED` can also be used in the statement [`DATA`](ABAPDATA_BOXED.html) to declare a structured attribute of a class or an interface.

TYPES: BEGIN OF t\_struc1, \\n comp1 TYPE c LENGTH 100, \\n comp2 TYPE n LENGTH 100, \\n END OF t\_struc1. \\n\\ \\nTYPES: BEGIN OF t\_struc2, \\n comp1 TYPE string, \\n comp2 TYPE t\_struc1 BOXED, \\n END OF t\_struc2. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abentypes\_statements.html abaptypes.html abaptypes\_struc.html