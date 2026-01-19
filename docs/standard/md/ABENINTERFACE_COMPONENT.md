---
title: "ABENINTERFACE_COMPONENT"
description: |
  ABENINTERFACE_COMPONENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINTERFACE_COMPONENT.htm"
abapFile: "ABENINTERFACE_COMPONENT.html"
keywords: ["select", "if", "method", "class", "data", "types", "ABENINTERFACE", "COMPONENT"]
---

The following declaration statements are possible in interfaces for `components`:

The only interface components that can be addressed without implementing the interface in classes are data types and constants. These can be addressed using the name of the interface and the [class component selector](ABENOPERANDS_NAMES.html) (`=>`).

Declaration of various components in an interface.

-   [`TYPES`](ABAPTYPES.html), [`DATA`](ABAPDATA.html), [`CLASS-DATA`](ABAPCLASS-DATA.html), and [`CONSTANTS`](ABAPCONSTANTS.html) for data types and data objects
-   [`METHODS`](ABAPMETHODS.html), [`CLASS-METHODS`](ABAPCLASS-METHODS.html), [`EVENTS`](ABAPEVENTS.html), and [`CLASS-EVENTS`](ABAPCLASS-EVENTS.html) for methods and events
-   [`INTERFACES`](ABAPINTERFACES.html) for the inclusion of component interfaces and [`ALIASES`](ABAPALIASES.html) for alias names for their components

-   All components of an interfaces are in one namespace. Within an interface, the name of a component must be unique regardless of its type (data type, attribute, method, event, or alias name). The components of an included interface are identified by the prefix `intf~` (name of the interface with interface component selector).
-   Interfaces provide fewer variants than classes for declarations of methods using [`METHODS`](ABAPMETHODS.html) and [`CLASS-METHODS`](ABAPCLASS-METHODS.html). More specifically, no [constructors](ABENCONSTRUCTOR_GLOSRY.html), [test methods](ABENTEST_METHOD_GLOSRY.html), or [AMDP function implementations](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) can be declared in interfaces for CDS table functions.

INTERFACE intf1. \\n ... \\nENDINTERFACE. \\n\\ \\nINTERFACE intf2. \\n INTERFACES intf1. \\n TYPES: \\n type ... \\n DATA: \\n attr TYPE ... \\n CLASS-METHODS: \\n factory RETURNING VALUE(ref) TYPE REF TO intf2. \\n METHODS: \\n meth ... \\nENDINTERFACE. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapinterface.html abapinterface\_definition.html