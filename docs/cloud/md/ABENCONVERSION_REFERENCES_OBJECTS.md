---
title: "ABENCONVERSION_REFERENCES_OBJECTS"
description: |
  ABENCONVERSION_REFERENCES_OBJECTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONVERSION_REFERENCES_OBJECTS.htm"
abapFile: "ABENCONVERSION_REFERENCES_OBJECTS.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENCONVERSION", "REFERENCES", "OBJECTS"]
---

Object reference variables are either class references or interface reference variables.

An [upcast](ABENUP_CAST_GLOSRY.html) in object references is possible in the following cases:

The statement `iref = NEW class( )` is an upcast, because it is followed by an interface reference variable that points to an object of a class.

For all cases not specified under the upcast, assignments can only be programmed using a downcast.

Declaration of interfaces and classes, creation of an object in the subclass, and access to the components of the object. In the statement [`CREATE OBJECT`](ABAPCREATE_OBJECT.html), an upcast occurs implicitly from `c2` to `iref`. The interface reference `iref` can only be used to access the components declared in the interface `i2`. Method `m1` of the object cannot be called using `iref`. Once the object reference has been assigned to the class reference `cref` using a downcast, `m1` can be accessed dynamically but not statically.

-   If both static types are classes, the class of the target variable must be the same class or a superclass of the source variable.
-   If both static types are interfaces, the interface of the target variable must be the same interface or a component interface of the source variable.
-   If the static type of the target variable is an interface and the static type of the source variable is a class, the class of the source variable must implement the interface of the target variable.
-   If the static type of the target variable is a class and the static type of the source variable is an interface, the class of the target variable must be the generic type or the root class `object`.

INTERFACE intf. \\nENDINTERFACE. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA iref TYPE REF TO intf. \\n iref = NEW cls( ). \\n ENDMETHOD. \\nENDCLASS. INTERFACE i1. \\n DATA a1 TYPE string. \\nENDINTERFACE. \\n\\ \\nINTERFACE i2. \\n INTERFACES i1. \\n ALIASES a1 FOR i1~a1. \\n DATA a2 TYPE string. \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES i2. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n METHODS m1. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS c2 IMPLEMENTATION. \\n METHOD m1. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA: iref TYPE REF TO i2, \\n cref TYPE REF TO c1. \\n\\ \\n ... \\n\\ \\n CREATE OBJECT iref TYPE c2. \\n\\ \\n iref->a1 = \`...\`. \\n iref->a2 = \`...\`. \\n\\ \\n ... \\n\\ \\n IF iref IS INSTANCE OF c1. \\n cref ?= iref. \\n TRY. \\n CALL METHOD cref->('M1'). \\n CATCH cx\_sy\_dyn\_call\_illegal\_method. \\n ... \\n ENDTRY. \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_references.html abenconversion\_references.html