---
title: "ABAPMETHODS_DEFAULT"
description: |
  ABAPMETHODS_DEFAULT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHODS_DEFAULT.htm"
abapFile: "ABAPMETHODS_DEFAULT.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABAPMETHODS", "DEFAULT"]
---

`METHODS meth ... DEFAULT IGNORE|FAIL ...`

The addition `DEFAULT` makes the explicit implementation of an interface method optional and defines a default behavior for calls of non-implemented methods. It cannot be used in classes, only in interfaces. All instance methods and static methods can be defined as optional except for constructors and test methods.

A class that implements an interface with the statement [`INTERFACES`](ABAPINTERFACES.html) can implement its optional methods, but this is not mandatory. The additions `IGNORE` or `FAIL` define the behavior that applies when an optional interface method of an object or class is called at runtime and this object or class is not implemented explicitly.

The default behavior defined using `DEFAULT` also applies to the redefinition of an inherited optional interface method using the addition [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html). A subclass that redefines an optional interface method does not need to implement it explicitly. If the implementation is missing, the default behavior is applied along a path of the inheritance tree until an explicit implementation occurs.

The class `class` implements the interface `intf` without implementing its optional methods. A call of the non-implemented static method `m1` raises a handled exception, due to the addition `FAIL`. A call of the non-implemented instance method `m2` does not execute any statements due to the addition `IGNORE`, but sets their return value `r` to 0.

-   When a non-implemented optional interface method defined with the addition `IGNORE` is called, the behavior is the same as when it is implemented with an empty body. In particular, all actual parameters are initialized that receive values from formal parameters using [pass by value](ABENPASS_BY_VALUE_GLOSRY.html).
-   Calls of a non-implemented optional interface method defined using the addition `FAIL` raise an exception of the class `CX_SY_DYN_CALL_ILLEGAL_METHOD` and, if not handled, results in a runtime error `CALL_METHOD_NOT_IMPLEMENTED` occurs.

-   The `DEFAULT` addition can also be used for [BAdI methods](ABENBADI_METHOD_GLOSRY.html).
-   The default behavior defined using `DEFAULT FAIL` that applies to calls of a non-implemented optional method matches the behavior of calling a non-implemented non-optional method of a regular global interface. In a [BAdI interface](ABENBADI_INTERFACE_GLOSRY.html) on the other hand, `DEFAULT IGNORE` matches the default behavior of the [`CALL BADI`](ABAPCALL_BADI.html) statement.
-   If an optional interface method is redefined in a subclass, it should also be implemented explicitly in this subclass. The default behavior is usually not as expected.

INTERFACE intf. \\n CLASS-METHODS m1 DEFAULT FAIL. \\n METHODS m2 DEFAULT IGNORE \\n RETURNING VALUE(r) TYPE i. \\nENDINTERFACE. \\n\\ \\nCLASS class DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\n ALIASES m1 FOR intf~m1. \\n ALIASES m2 FOR intf~m2. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS class IMPLEMENTATION. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA oref TYPE REF TO class. \\n TRY. \\n class=>m1( ). \\n CATCH cx\_sy\_dyn\_call\_illegal\_method INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n return. \\n ENDTRY. \\n\\ \\n out->write( NEW class( )->m2( ) ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html