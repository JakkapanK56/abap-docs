---
title: "ABENINCLUDING_STRUCTURES_GUIDL"
description: |
  ABENINCLUDING_STRUCTURES_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINCLUDING_STRUCTURES_GUIDL.htm"
abapFile: "ABENINCLUDING_STRUCTURES_GUIDL.html"
keywords: ["do", "if", "data", "types", "ABENINCLUDING", "STRUCTURES", "GUIDL"]
---

In the program-internal design of structures with the `BEGIN OF` and `END OF` additions of the `TYPES` and `DATA` statements, you can use the `INCLUDE TYPE` or `INCLUDE STRUCTURE` statements to integrate all components of another structure with the current structure at this place without creating a specific substructure. You can specify a name for shared addressing and a suffix to avoid naming conflicts. ABAP Dictionary provides the same functions.

Substructures, in contrast, are formed if the components of a structure themselves are structured. A structure with substructures is known as a nested structure.

**Do not include components from structures**

Do not integrate the components of other structures by using `INCLUDE` when declaring a structure. If required, you can include the components in a real substructure.

The reasons for this rule are the following:

If no real substructures can be formed, you must avoid naming conflicts as far as possible by using suffixes (`RENAMING WITH SUFFIX` addition). This recommendation also applies to the integration of structures in ABAP Dictionary, where you cannot always create real substructures (for example, for database tables).

The following source code shows the integration of the components of a structure into another structure, which is not recommended according to the above rule.

The following source code shows the declaration of a component of a structure as a substructure as recommended in the above rule.

-   The integration of components can lead to naming conflicts. This is particularly problematic if structures of other contexts are integrated and changed retroactively.
-   Although it is possible to assign a name, the integrated structures cannot be addressed as such without restrictions. The necessary internal type information is individually stored for each integrated component. For the components of a substructure, however, this information is stored only once for the substructure
-   In contrast to real substructures, structures integrated using `INCLUDE` cannot be declared as boxed components. A boxed component is a structured component, which is managed through an internal reference and thus supports initial value sharing. This can considerably reduce the memory requirements for rarely filled components.
-   The statement cancels a [chained statement](ABENCHAINED_STATEMENTS_GUIDL.html) that has been created with `BEGIN OF` and `END OF`.

TYPES: \\n BEGIN OF structure\_1, \\n ... \\n END OF structure\_1. \\nTYPES: \\n BEGIN OF structure\_2, \\n ... \\n INCLUDE TYPE structure\_1 AS sub\_structure. \\nTYPES: \\n ... \\n END OF structure\_2. TYPES: \\n BEGIN OF structure\_1, \\n ... \\n END OF structure\_1. \\nTYPES: \\n BEGIN OF structure\_2, \\n ... \\n sub\_structure TYPE structure\_1. \\n ... \\n END OF structure\_2. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendata\_type\_obj\_gdl.html