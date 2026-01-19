---
title: "ABAPINTERFACES_CLASS"
description: |
  ABAPINTERFACES_CLASS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINTERFACES_CLASS.htm"
abapFile: "ABAPINTERFACES_CLASS.html"
keywords: ["select", "delete", "if", "case", "method", "class", "data", "ABAPINTERFACES", "CLASS"]
---

[Short Reference](ABAPINTERFACES_SHORTREF.html)

`INTERFACES intf`\\ 
  ``[[`PARTIALLY IMPLEMENTED`](ABAPINTERFACES_PARTIALLY.html)]``\\ 
  `\{\ \{[ABSTRACT METHODS meth1 meth2 ... ]`\\ 
     `[FINAL METHODS meth1 meth2 ... ]\}`\\ 
  `|\ [ALL METHODS \{ABSTRACT|FINAL\}]\ \}`\\ 
  `[DATA VALUES attr1 = val1 attr2 = val2 ...].`

[1. `... ABSTRACT METHODS meth1 meth2 ...`](#ABAP_ADDITION_1@3@)

[2. `... FINAL METHODS meth1 meth2 ...`](#ABAP_ADDITION_2@3@)

[3. `... ALL METHODS \{ABSTRACT|FINAL\}`](#ABAP_ADDITION_3@3@)

[4. `... DATA VALUES attr1 = val1 attr2 = val2 ...`](#ABAP_ADDITION_4@3@)

In the [public](ABENPUBLIC_GLOSRY.html)\\ [visibility section](ABENVISIBILITY_SECTION_GLOSRY.html) of a class, the statement `INTERFACES` implements the interface `intf` in the class. Additions can also be specified to determine the properties of interface components in the class.

All local or global interfaces that are visible here can be specified for `intf` that are not already included in a superclass of the current class. The components of the interfaces become public components of the class after the implementation. An interface component called `comp` has the name `intf~comp` in the class, where `intf` is the name of the interface and the character `~` is the interface component selector. A class must implement all methods of the interface in its implementation part, with the following exceptions:

Implementation of an interface `intf` in a class `demo`.

Using the additions `ABSTRACT METHODS` and `FINAL METHODS`, the individual instance methods `meth` of the interface can be made either abstract or final in the class to be implemented. The same rules apply as to the additions [`ABSTRACT`](ABAPMETHODS_ABSTRACT_FINAL.html) and [`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html) of the statement [`METHODS`](ABAPMETHODS.html). In particular, the whole class must be abstract if an interface method is made abstract and no interface method can be listed after `ABSTRACT METHODS` and `FINAL METHODS`.

The following can be specified as methods `meth1`, `meth2`, ...

If an interface is included using multiple `INTERFACES` statements, the specifications in the additions `FINAL` and `ABSTRACT` must not produce contradictory definitions for a method.

Definition of abstract methods when including two interfaces `intf1` and `intf2` in an abstract class `cls`.

Short form of the preceding example. Since `intf2` includes the interface `intf1`, its methods can be specified as `intf1~meth1`. This means that a separate statement `INTERFACES intf1` is no longer possible in this class.

Instead of making individual interface methods in the class abstract or final it is possible, using the addition `ALL METHODS \{ABSTRACT|FINAL\}`, to make all interface methods either [abstract](ABAPMETHODS_ABSTRACT_FINAL.html) or [final](ABAPMETHODS_ABSTRACT_FINAL.html).

Implementation of an interface `intf` in an abstract class `cls1`, in which all methods are made abstract and must be implemented in a subclass `cls2`.

Using the addition `DATA VALUES`, initial values can be assigned to individual attributes `attr`. For attributes, this addition fulfills the same functions as the addition `VALUE` of the statement [`DATA`](ABAPDATA.html) for attributes in its own class.

The following can be specified as attributes `attr1`, `attr2`, ...

Constants declared in the interface or in a component interface with the statement [`CONSTANTS`](ABAPCONSTANTS.html) cannot be specified after the addition `DATA VALUES`.

Implementation of an interface `intf` in a class `demo`, where the interface attributes are assigned start values.

-   Interface methods declared as optional using the addition [`DEFAULT`](ABAPMETHODS_DEFAULT.html).
-   Interface methods that are specified in the class after the addition `ABSTRACT METHODS` and are therefore declared as abstract.
-   Partial implementations are allowed in test classes using the addition [`PARTIALLY IMPLEMENTED`](ABAPINTERFACES_PARTIALLY.html).

-   A class can implement any number of different interfaces. All of the interfaces implemented by a class are equal and on the same level. If an interface `intf` implemented in a class is a composite, that is, it contains component interfaces, these are implemented in the class like individual interfaces, regardless of their nesting hierarchy, and their components are addressed using the name of their component interface instead of using the name `intf`. It is generally not possible to use the interface component selector multiple times in a name (`intf1~intf2~comp`).
-   Each interface appears only once in a class and every interface component `comp` is always clearly accessible using the `intf~comp`. Even the components of an interface that is the interface component of one or more other interface, and appears to be implemented multiple times in a class, only exist once.
-   If the implementation of a non-optional method of a global interface implemented using `INTERFACES` is missing in a class, a syntax warning occurs instead of a syntax error. This prevents classes from becoming unusable due to subsequent enhancements of global interfaces. Calling a missing implementation, however, always raises an exception of the class `CX_SY_DYN_CALL_ILLEGAL_METHOD` and, if not handled, produces the runtime error `CALL_METHOD_NOT_IMPLEMENTED`. A real syntax error is produced when local interfaces are used, and the implementation is missing.
-   If a class implements a method `intf~...` of a global interface `intf` implemented using `INTERFACES` in its implementation part and the method is not declared in the interface, a warning is raised by the syntax check. This type of method implementation is dead code that cannot be executed and should removed. Classes become unusable in the case of a syntax error if methods were later deleted from an implemented global interface, and which were implemented without a role in a class and had no values. An actual syntax error occurs when local interfaces are used.

-   Instance methods that are declared in the interface `intf` itself.
-   Alias names declared in the interface `intf` for instance methods declared in interfaces that are included in `intf`.
-   Instance methods that are declared in interfaces included in `intf` using the name of their interface and the interface component selector (`~`). In this case the component interface cannot itself be included with the statement `INTERFACES`.

-   Attributes that are declared in the interface `intf` itself.
-   Alias names declared in the interface `intf` for attributes declared in interfaces that are included in `intf`.
-   Attributes that are declared in interfaces included in `intf` using the name of its own interface and the interface component selector (`~`). In this case the component interface cannot itself be included with the statement `INTERFACES`.

INTERFACE intf. \\n CLASS-DATA selfref TYPE REF TO intf. \\n CLASS-METHODS factory RETURNING VALUE(ref) TYPE REF TO intf. \\n ... \\nENDINTERFACE. \\n\\ \\nCLASS demo DEFINITION CREATE PRIVATE. \\n PUBLIC SECTION. \\n INTERFACES intf. \\n ALIASES: \\n selfref FOR intf~selfref, \\n factory FOR intf~factory. \\n ... \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD factory. \\n IF selfref IS INITIAL. \\n selfref = NEW demo( ). \\n ref = selfref. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(iref) = demo=>factory( ). \\n ENDMETHOD. \\nENDCLASS. INTERFACE intf1. \\n METHODS meth1. \\nENDINTERFACE. \\n\\ \\nINTERFACE intf2. \\n INTERFACES intf1. \\n METHODS meth2. \\nENDINTERFACE. \\n\\ \\nCLASS cls DEFINITION ABSTRACT. \\n PUBLIC SECTION. \\n INTERFACES intf1 ABSTRACT METHODS meth1. \\n INTERFACES intf2 ABSTRACT METHODS meth2. \\nENDCLASS. INTERFACE intf1. \\n METHODS meth1. \\nENDINTERFACE. \\n\\ \\nINTERFACE intf2. \\n INTERFACES intf1. \\n METHODS meth2. \\nENDINTERFACE. \\n\\ \\nCLASS cls DEFINITION ABSTRACT. \\n PUBLIC SECTION. \\n INTERFACES intf2 ABSTRACT METHODS intf1~meth1 meth2. \\nENDCLASS. INTERFACE intf. \\n METHODS: \\n meth1, \\n meth2. \\n ... \\nENDINTERFACE. \\n\\ \\nCLASS cls1 DEFINITION ABSTRACT. \\n PUBLIC SECTION. \\n INTERFACES intf ALL METHODS ABSTRACT. \\n ALIASES: \\n meth1 FOR intf~meth1, \\n meth2 FOR intf~meth2. \\nENDCLASS. \\n\\ \\nCLASS cls2 DEFINITION INHERITING FROM cls1. \\n PUBLIC SECTION. \\n METHODS: \\n meth1 REDEFINITION, \\n meth2 REDEFINITION. \\nENDCLASS. \\n\\ \\nCLASS cls2 IMPLEMENTATION. \\n METHOD meth1. \\n ... \\n ENDMETHOD. \\n METHOD meth2. \\n ... \\n ENDMETHOD. \\nENDCLASS. INTERFACE intf. \\n CLASS-DATA: \\n attr1 TYPE string, \\n attr2 TYPE string. \\n ... \\nENDINTERFACE. \\n\\ \\nCLASS demo DEFINITION ABSTRACT. \\n PUBLIC SECTION. \\n INTERFACES intf \\n DATA VALUES attr1 = 'Hello' \\n attr2 = 'World'. \\n ALIASES: \\n attr1 FOR intf~attr1, \\n attr2 FOR intf~attr2. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write( |\\{ demo=>attr1 \\} \\{ demo=>attr2 \\}| ). \\n\\ \\n out->display( ). \\nENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abeninterfaces.html abapinterfaces.html