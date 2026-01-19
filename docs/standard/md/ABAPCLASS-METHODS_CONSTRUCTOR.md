---
title: "ABAPCLASS-METHODS_CONSTRUCTOR"
description: |
  ABAPCLASS-METHODS_CONSTRUCTOR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS-METHODS_CONSTRUCTOR.htm"
abapFile: "ABAPCLASS-METHODS_CONSTRUCTOR.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABAPCLASS", "METHODS", "CONSTRUCTOR"]
---

[Short Reference](ABAPCLASS-METHODS_SHORTREF.html)

`CLASS-METHODS class_constructor.`

This statement declares the static constructor `class_constructor` of a class. It can only be used in the [public](ABENPUBLIC_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of the declaration part of a class.

Each class has a predefined method `class_constructor` in its public visibility section. Its functions can be implemented class-specifically by explicit declaration. Without explicit declaration, the static constructor is empty.

The static constructor is called automatically exactly once per class and [internal session](ABENINTERNAL_SESSION_GLOSRY.html) before the class is first accessed. Access to a class is the generation of an instance of the class or a static component using the class component selector, with the exception of is addressing a type or a constant of the class.

When a subclass is first accessed, the inheritance tree is searched for the next-highest superclass whose static constructor was not yet called. Afterwards, the static constructor of this superclass is called followed by those of all subsequent subclasses up to the addressed subclass. The static constructor must be fully executed, otherwise a runtime error occurs.

Like all static methods, the static constructor can only access the static components of its class. Furthermore, the static constructor must not explicitly address its own class.

When a class is first accessed, the static constructor of the class sets static attributes to the current date and time.

-   Like instance constructors, static constructors are also an exception to the rule that all public components along a path in the inheritance tree are in one namespace.
-   The time of execution of the static constructor is not fixed, but it is definitely called before the class is first accessed.
-   A static constructor can call static methods of its class. Such a method must be implemented accordingly and must not rely on the static constructor being executed completely.
-   It is not necessary to execute the static constructor to access a type or a constant of a class. This type of access therefore does not result in a call.
-   The execution order of static constructors is dependent on the program flow. Static constructors must be implemented so that they can be executed in any order.
-   In static constructors, class-based exceptions cannot be declared using `RAISING`, since it is generally not determined whether the user of a class is the first user and whether or not this user must handle exceptions propagated by the static constructor.
-   If a [static component of a superclass](ABENINHERITANCE_STATICAL.html) is addressed using the name of a subclass, the superclass is addressed and its static constructor is executed, but not the static constructor of the subclass.
-   An unsuccessful dynamic access to a nonexistent component of a class does not count as an access to the class and the static constructor is not executed in this case.
-   The static constructor should only be used according to its purpose to initialize global class data. It should not be used to call sophisticated processes, where the program flow cannot be controlled by the caller. This includes especially those that involve user interactions.

CLASS some\_class DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS class\_constructor. \\n PRIVATE SECTION. \\n CLASS-DATA: \\n start\_time TYPE t, \\n start\_date TYPE d. \\nENDCLASS. \\n\\ \\nCLASS some\_class IMPLEMENTATION. \\n METHOD class\_constructor. \\n CONVERT UTCLONG utclong\_current( ) \\n INTO DATE start\_date \\n TIME start\_time \\n TIME ZONE 'UTC'. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapclass-methods.html