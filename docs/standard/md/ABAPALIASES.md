---
title: "ABAPALIASES"
description: |
  ABAPALIASES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPALIASES.htm"
abapFile: "ABAPALIASES.html"
keywords: ["select", "if", "method", "class", "ABAPALIASES"]
---

[Short Reference](ABAPALIASES_SHORTREF.html)

`ALIASES alias FOR intf~comp.`

In the declaration part of a class or interface, this statement declares an alias name `alias` for a component `comp` of the interface `intf`. The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `alias`. The interface `intf` must be implemented in the same class or included in the same interface. The alias name can be used anywhere, where it is visible, instead of `intf~comp`, to access the interface component `comp`.

An alias name is a component of the class and the interface. It is in the same namespace as the other components and is inherited by subclasses. In classes, an alias name can be declared in every [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html).

In the interfaces `i2`, `i3` and the class `c1`, aliases are declared for the methods of the included or implemented interfaces. In the implementation part of the class, the interface methods in the [`METHODS`](ABAPMETHODS.html) statements are implemented using the interface component selector. However, the aliases of the classes could also be used here.

-   Within a context, such as a class declaration or method, only one name should be used to access components. The syntax check issues a warning if both the alias name and the full name `intf~meth` are used together.
-   When implementing interface methods in the implementation part of classes using `METHOD` and when [re-defining](ABENREDEFINITION_GLOSRY.html) methods using `METHODS ... REDEFINITION`, the alias name can also be used.

INTERFACE i1. \\n METHODS meth. \\nENDINTERFACE. \\n\\ \\nINTERFACE i2. \\n INTERFACES i1. \\n ALIASES m1 FOR i1~meth. \\n METHODS meth. \\nENDINTERFACE. \\n\\ \\nINTERFACE i3. \\n INTERFACES i2. \\n ALIASES: m1 FOR i2~m1, \\n m2 FOR i2~meth. \\n METHODS meth. \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES i3. \\n ALIASES: m1 FOR i3~m1, \\n m2 FOR i3~m2, \\n m3 FOR i3~meth. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD i1~meth. \\n ... m2( ) ... \\n ENDMETHOD. \\n METHOD i2~meth. \\n ... m3( ) ... \\n ENDMETHOD. \\n METHOD i3~meth. \\n ... m1( ) .... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abeninterfaces.html