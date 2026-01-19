---
title: "ABAPINTERFACE_DEFINITION"
description: |
  ABAPINTERFACE_DEFINITION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPINTERFACE_DEFINITION.htm"
abapFile: "ABAPINTERFACE_DEFINITION.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABAPINTERFACE", "DEFINITION"]
---

`INTERFACE intf [PUBLIC].`\\ 
  ``[[`components`](ABENINTERFACE_COMPONENT.html)]``\\ 
`ENDINTERFACE.`

[`... PUBLIC`](#ABAP_ONE_ADD@1@)

The statement block `INTERFACE - ENDINTERFACE` defines an [interface](ABENOO_INTF_GLOSRY.html)\\ `intf`. [Naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `intf`. The [`components`](ABENINTERFACE_COMPONENT.html) of the interface are declared between `INTERFACE` and `ENDINTERFACE`.

An interface defined using `INTERFACE` can be implemented in classes and included in other interfaces using the statement [`INTERFACES`](ABAPINTERFACES.html).

The definition of an interface can only be specified in the context described under [`INTERFACE`](ABAPINTERFACE.html).

The addition `PUBLIC` makes the interface `intf` a [global interface](ABENGLOBAL_INTERFACE_GLOSRY.html) of the class library. The addition `PUBLIC` can only be used for the global interface of an [interface pool](ABENINTERFACE_POOL_GLOSRY.html).

A global interface is a global [object type](ABENOBJECT_TYPE_GLOSRY.html) and is in the same namespace as all [global types](ABENGLOBAL_TYPE_GLOSRY.html) of an AS ABAP.

In this example, an interface `i1` is declared using three interface components `a1`, `m1`, and `e1`. The class `c1` implements the interface and the interface components therefore become [public](ABENPUBLIC_GLOSRY.html) components of the class, which can be addressed using the interface component selector (`~`).

INTERFACE i1. \\n DATA a1 TYPE string. \\n METHODS m1. \\n EVENTS e1 EXPORTING value(p1) TYPE string. \\nENDINTERFACE. \\n\\ \\nCLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES i1. \\nENDCLASS. \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD i1~m1. \\n RAISE EVENT i1~e1 EXPORTING p1 = i1~a1. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapinterface.html