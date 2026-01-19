---
title: "ABENINHERITANCE_STATICAL"
description: |
  ABENINHERITANCE_STATICAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINHERITANCE_STATICAL.htm"
abapFile: "ABENINHERITANCE_STATICAL.html"
keywords: ["select", "if", "case", "method", "class", "data", "ABENINHERITANCE", "STATICAL"]
---

[Static components](ABENSTATIC_COMPONENT_GLOSRY.html), like all components, exist only once in each inheritance tree, and can be used as of the declaring class:

The class in which the component is declared is always the class addressed, regardless of whether the static component is used internally or externally. This is important in the following cases:

A static attribute of a class can be declared as a private attribute to prevent it from being used by all subclasses.

Call of a static method of a superclass using the name of a subclass. Before the method is executed, the static constructor of the superclass is executed, but not the static constructor of the subclass. The method returns the value that is set in the superclass.

This example shows how a subclass is used to change a static attribute of a superclass, and how the change is visible in a subclass of a different path in the inheritance tree.

[Events in Inheritance](ABENEVENT_INHERITANCE_ABEXA.html)

-   A subclass can access all non-private static components of its superclasses. The class in which the static component is declared is always addressed.
-   From outside, the class component selector can be used to access all visible static components. Each class can be specified in which the component exists, that is, the declaring class and each subclass. Regardless of the class name used in the class component selector, however, the class in which the component is declared is always addressed.

-   Calls of the [static constructors](ABENSTATIC_CONSTRUCTOR_GLOSRY.html).
-   Static constructors are called the first time a class is addressed. If a static component is addressed using the class name of a subclass, but is declared in a superclass, only the static constructor of the superclass is called.
-   Access to the [static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html)
-   A subclass has access to the content of all non-private static attributes of all superclasses. Conversely, a superclass shares its public and protected static attributes with all subclasses. When inherited, static attributes are therefore not only usable in a single class but can also be used in the subtree of the inheritance tree that consists of all subclasses of the defining class. Changes to the values are visible in all involved classes, regardless of the class used to address an attribute.
-   Registrations of [event handlers](ABENEVENT_HANDLER_GLOSRY.html).
-   If an event handler is declared for a static event of a subclass inherited from a superclass, it can only react to this event if it is raised by a method of the subclass or one of its subclasses. If the event is raised in a static method of a superclass, it is not handled, even if the method is called in a subclass or if the name of the subclass is specified.

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA a1 TYPE string. \\n CLASS-METHODS: class\_constructor, \\n m1 RETURNING VALUE(r1) LIKE a1. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD class\_constructor. \\n a1 = 'c1'. \\n ENDMETHOD. \\n METHOD m1. \\n r1 = a1. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n CLASS-METHODS class\_constructor. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD class\_constructor. \\n a1 = 'c2'. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA v1 TYPE string. \\n v1 = c2=>m1( ). \\n ENDMETHOD. \\nENDCLASS. CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA a1 TYPE string. \\nENDCLASS. \\n\\ \\nCLASS c11 DEFINITION INHERITING FROM c1. \\n ... \\nENDCLASS. \\n\\ \\nCLASS c12 DEFINITION INHERITING FROM c1. \\n ... \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n c11=>a1 = 'Hello Sister'. \\n cl\_demo\_output=>display( c12=>a1 ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_objects.html abeninheritance.html