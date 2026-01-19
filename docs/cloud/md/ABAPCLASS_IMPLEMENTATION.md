---
title: "ABAPCLASS_IMPLEMENTATION"
description: |
  ABAPCLASS_IMPLEMENTATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCLASS_IMPLEMENTATION.htm"
abapFile: "ABAPCLASS_IMPLEMENTATION.html"
keywords: ["select", "do", "if", "method", "class", "ABAPCLASS", "IMPLEMENTATION"]
---

`CLASS class IMPLEMENTATION.`\\ 
  `...`\\ 
  `METHOD ...`\\ 
    `...`\\ 
  `ENDMETHOD.`\\ 
  `...`\\ 
`ENDCLASS.`

In the statement block `CLASS class IMPLEMENTATION - ENDCLASS`, the following methods of a class `class` must be implemented, in any order:

The implementation of each method corresponds to a processing block [`METHOD - ENDMETHOD`](ABAPMETHOD.html). No statements are allowed in the implementation part outside of method implementations. In a method implementation, all components can be accessed in an instance method, and all static components of the class can be accessed in a static method implementation. No component selector is necessary to address the components of personal classes. Within the implementation of each instance method, there is an implicitly created, local reference variable named `me` available at runtime, which points to the current instance of the method.

When implementing methods declared in an interface bound by the class using [`INTERFACES`](ABAPINTERFACES.html)\\ `intf`, the name of the method in `METHOD` must have either `intf~` in front of it or use an alias name declared using [`ALIASES`](ABAPALIASES.html). The interface method must be declared in the interface. Otherwise, a syntax error occurs when local interfaces are used. If a global interface is specified using `intf~`, only a syntax warning occurs. In this way, the classes remain usable even after subsequent removal of the methods from the global interface, provided they have not used the methods themselves.

In this example, three methods of the class `c2` must be implemented. The method `m1` in `c1` is abstract and must not be implemented there.

-   All [concrete](ABENCONCRETE_GLOSRY.html) methods declared using [`METHODS`](ABAPMETHODS.html) or [`CLASS-METHODS`](ABAPCLASS-METHODS.html) in the declaration part of the class.
-   All concrete methods of interfaces listed using the statement [`INTERFACES`](ABAPINTERFACES.html) in the declaration part of the class.
-   All methods inherited from superclasses that are listed using the statement [`METHODS ... REDEFINITION`](ABAPMETHODS_REDEFINITION.html) in the declaration part of the class

-   A class that does not have to implement any methods because of its declaration part either has an empty implementation part or none at all.
-   Abstract methods in abstract classes cannot be implemented in the implementation part.
-   The implementation part of a class can only be specified in the context described under [`CLASS`](ABAPCLASS.html).

INTERFACE i1. \\n METHODS m1. \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION ABSTRACT. \\n PROTECTED SECTION. \\n METHODS m1 ABSTRACT. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n INTERFACES i1. \\n METHODS m2. \\n PROTECTED SECTION. \\n METHODS m1 REDEFINITION. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD m1. \\n ... \\n ENDMETHOD. \\n METHOD m2. \\n ... \\n ENDMETHOD. \\n METHOD i1~m1. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html