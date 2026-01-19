---
title: "ABENINTERFACE_COMPONENT_SELECTOR"
description: |
  ABENINTERFACE_COMPONENT_SELECTOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINTERFACE_COMPONENT_SELECTOR.htm"
abapFile: "ABENINTERFACE_COMPONENT_SELECTOR.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABENINTERFACE", "COMPONENT", "SELECTOR"]
---

A component `comp` of an interface is accessed using the following name:

`intf~comp`

The symbol `~` is the interface component selector. The name `intf` of an interface must be to the left of the interface component selector. The name `comp` of the component must be to the right of the interface component selector.

The name `intf~comp` identifies the components of interfaces in classes, or component interfaces in linked interfaces.

An interface contains each component exactly once, regardless of its combination of component interfaces. All the interface components are at the same hierarchical level. The name of an interface component is uniquely defined by `intf~comp`, where `intf` is always the interface in which the component is declared. A direct chaining of interface names `intf1~...~intfn~comp` is not possible.

Declaration of interfaces and access to their components.

INTERFACE i1. \\n TYPES t1 TYPE string. \\nENDINTERFACE. \\n\\ \\nINTERFACE i2. \\n INTERFACES i1. \\n METHODS m2 IMPORTING p1 TYPE i1~t1. \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES i2. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD i2~m2. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n ... \\n\\ \\n DATA oref TYPE REF TO c1. \\n FINAL(p1) = \`...\`. \\n oref->i2~m2( p1 = p1 ). \\n\\ \\n ... \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_data\_objects.html abenoperands\_names.html