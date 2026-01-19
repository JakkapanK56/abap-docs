---
title: "ABAPINTERFACES_IFAC"
description: |
  ABAPINTERFACES_IFAC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINTERFACES_IFAC.htm"
abapFile: "ABAPINTERFACES_IFAC.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABAPINTERFACES", "IFAC"]
---

[Short Reference](ABAPINTERFACES_SHORTREF.html)

`INTERFACES intf.`

In the declaration of an interface, the statement `INTERFACES` includes the interface `intf` in the declared interface. Additions cannot be specified. As a result, the interface `intf` becomes a component interface of a composite interface.

An interface can be composed of any number of different component interfaces. All component interfaces are equal and on one level. If a component interface itself is a composite, that is, it contains its own component interfaces, the nesting hierarchy is irrelevant for the composition of the interface. It is relevant, however, for accessing the interface components.

To access the component `comp` of a component interface `intf` within a composite interface, the expression `intf~comp` can be used with the interface component selector `(~)`. It is not possible to use the interface component selector multiple times in a name (`intf1~intf2~comp`). In a composite interface, it is possible to use the interface component selector to access only those interface components of the component interface that are included in this interface using the statement `INTERFACES`. Since all nested interfaces are at the same level, however, this is sufficient to access the interface components of all component interfaces using the name of their interface.

The following example shows how the statement `INTERFACES` can be used to compose and implement interfaces. Class `c1` implements the composite interfaces `i2` and `i3`. Although `i1` is a component interface of `i2` and `i3`, it exists only once in class `c1`. A reference variable `iref1` of the static type `i1` creates an object class `c1` and calls the method `i1~m1`, which is implemented there.

-   Each interface and its components appear only once in a composite interface. Even an interface that is seemingly implemented more than once in an interface, because it is an interface component of one or more other interfaces, really exists only once.
-   Since there are no separate namespaces for global and local interfaces, it must be ensured that combinations of local interfaces do not result in combinations of global and local interfaces with identical names, because they cannot be equal and on the same level in their implementation.

INTERFACE i1. \\n METHODS m1. \\nENDINTERFACE. \\n\\ \\nINTERFACE i2. \\n INTERFACES i1. \\n METHODS m2. \\nENDINTERFACE. \\n\\ \\nINTERFACE i3. \\n INTERFACES i1. \\n METHODS m3. \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES: i2, i3. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD i1~m1. \\n ... \\n ENDMETHOD. \\n METHOD i2~m2. \\n ... \\n ENDMETHOD. \\n METHOD i3~m3. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA iref1 TYPE REF TO i1. \\n CREATE OBJECT iref1 TYPE c1. \\n iref1->m1( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abeninterfaces.html abapinterfaces.html