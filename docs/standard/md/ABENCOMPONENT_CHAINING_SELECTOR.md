---
title: "ABENCOMPONENT_CHAINING_SELECTOR"
description: |
  ABENCOMPONENT_CHAINING_SELECTOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCOMPONENT_CHAINING_SELECTOR.htm"
abapFile: "ABENCOMPONENT_CHAINING_SELECTOR.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABENCOMPONENT", "CHAINING", "SELECTOR"]
---

If a deeply nested subcomponent is used at an operand position, the operand must be denoted as a chaining of all components leading to this subcomponent. This chaining contains a suitable component selector between each component. The following rules apply to such [chained names](ABENCHAINED_NAME_GLOSRY.html):

In addition to the chaining of names, the following chainings are possible:

Chainings can be combined in any way as long as the corresponding rules are respected.

Declaration of a nested structured data type `struc2` in `struc1` and a structure `struc3` in an interface `i1`.

The component `comp` of `struc3` is a data reference variable of the static type `struc1`. The `i1` interface is the component interface of `i2` and the latter is implemented in `c1`. In `c2`, a [static attribute](ABENSTATIC_ATTRIBUTE_GLOSRY.html) is declared as the object reference of the static type `c1`. The expression in the last line can be at an operand position that expects a data object, and identifies the component `comp` of the structure `struc2` in a chaining that starts at class `c2`. A prerequisite for use of the expression is that both reference variables, `oref` and `dref`, point to the respective instances.

-   Taken together, the names to the left of each structure component selector must address a structured data type or a structure.
-   Taken together, the names to the left of each object component selector must address a reference variable.
-   The class component selector can occur in a name exactly once as the first selector.
-   The interface component selector can only occur more than once in a name if other component selectors are listed between the individual interface component selectors.
-   If components are addressed dynamically in parentheses behind a [structure](ABENSTRUCTURE_COMPONENT_SELECTOR.html) or [object component](ABENOBJECT_COMPONENT_SELECTOR.html) selector, no static components specification can follow a dynamic specification. Once, a dynamic component specification is done, all following components must also be specified dynamically.

-   [Method chainings](ABENMETHOD_CHAINING_GLOSRY.html) with the object component selector
-   [Chainings](ABENTABLE_EXP_CHAINING.html) of [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)

INTERFACE i1. \\n TYPES: BEGIN OF struc1, \\n ... \\n BEGIN OF struc2, \\n ..., \\n comp TYPE ..., \\n ..., \\n END OF struc2, \\n ... \\n END OF struc1. \\n DATA: BEGIN OF struc3, \\n ... \\n dref TYPE REF TO struc1, \\n ... \\n END OF struc3. \\nENDINTERFACE. \\n\\ \\nINTERFACE i2. \\n INTERFACES i1. \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES i2. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA oref TYPE REF TO c1. \\nENDCLASS. \\n\\ \\n... \\n\\ \\n... c2=>oref->i1~struc3-dref->struc2-comp ... abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html abenoperands\_names.html