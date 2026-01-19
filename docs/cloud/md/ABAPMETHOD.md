---
title: "ABAPMETHOD"
description: |
  ABAPMETHOD - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHOD.htm"
abapFile: "ABAPMETHOD.html"
keywords: ["delete", "do", "if", "method", "class", "data", "types", "ABAPMETHOD"]
---

`METHOD meth.`\\ 
  `...`\\ 
`ENDMETHOD.`

Between the statements `METHOD` and `ENDMETHOD`, the functionality of a [method](ABENMETHOD_GLOSRY.html)\\ `meth` declared using [`[CLASS-]`](ABAPCLASS-METHODS.html)[`METHODS`](ABAPMETHODS.html) is implemented in a class. The implementation of a method is only possible in an implementation part of a class that was initiated using [`CLASS class IMPLEMENTATION`](ABAPCLASS.html).

Local data types and data objects can be declared within the method. It is also possible to access the formal parameters of the method as well as all components of all instances of its own class.

In [instance methods](ABENINSTANCE_METHOD_GLOSRY.html), all components of the class and instance of the method can be addressed explicitly using the [self-reference](ABENSELF_REFERENCE_GLOSRY.html)\\ `me->`, besides their names. In addition, all components of other instances of the class of the method can be addressed using reference variables.

A method can be called [statically](ABENMETHOD_CALLS_STATIC.html) or [dynamically](ABENMETHOD_CALLS_DYNAMIC.html). For static calls, there is a standalone and a functional call form. Dynamic calls are always standalone calls.

In this example, the two methods `m1` and `m2` of the class `c1` between `METHOD` and `ENDMETHOD` are implemented. Although the local data object `a1` hides the attribute of the same name, the attribute `a1` can be addressed using `me->a1`.

-   During the implementation of a method of an interface `intf`, either the name declared in the prefix with `intf~` or an alias name of the class defined with [`ALIASES`](ABAPALIASES.html), can be specified for `meth`. The method must exist in the interface, otherwise a syntax error occurs. If `intf~` is used, a syntax warning occurs for global interfaces only if an unused methods is deleted from the global interface, so that initial classes do not immediately become invalid because of this.
-   The addition [`BY DATABASE PROCEDURE`](ABAPMETHOD_BY_DB_PROC.html) transforms a method that is implemented in a database-specific language and not in ABAP and is executed in the database system into an [AMDP method](ABENAMDP_METHOD_GLOSRY.html).

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n METHODS m1 IMPORTING p1 TYPE string. \\n PRIVATE SECTION. \\n DATA a1 TYPE string. \\n METHODS m2. \\nENDCLASS. \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n a1 = p1. \\n m2( ). \\n ENDMETHOD. \\n METHOD m2. \\n DATA a1 TYPE string. \\n a1 = me->a1. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_procedures.html abenabap\_methods.html