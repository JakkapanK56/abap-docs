---
title: "ABENCLASS_COMPONENT"
description: |
  ABENCLASS_COMPONENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_COMPONENT.htm"
abapFile: "ABENCLASS_COMPONENT.html"
keywords: ["select", "method", "class", "data", "types", "ABENCLASS", "COMPONENT"]
---

The components of the classes are defined in the [visibility sections](ABENVISIBILITY_SECTION_GLOSRY.html). The following declaration statements are possible for `components`:

All the components in a class are in the same namespace. Within a class, the name of a component must be unique, regardless of its type (data type, attribute, method, event, or alias name). The components of an implemented interface are marked with the prefix `intf~` (the name of the interface with interface component selector).

Declaration of various components in the public and private visibility section of a class.

-   [`TYPES`](ABAPTYPES.html), [`DATA`](ABAPDATA.html), [`CLASS-DATA`](ABAPCLASS-DATA.html), and [`CONSTANTS`](ABAPCONSTANTS.html) for data types and data objects
-   [`METHODS`](ABAPMETHODS.html), [`CLASS-METHODS`](ABAPCLASS-METHODS.html), [`EVENTS`](ABAPEVENTS.html), and [`CLASS-EVENTS`](ABAPCLASS-EVENTS.html) for methods and events
-   [`INTERFACES`](ABAPINTERFACES.html) for implementing interfaces and [`ALIASES`](ABAPALIASES.html) for alias names for interface components

INTERFACE intf. \\n ... \\nENDINTERFACE. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES intf. \\n TYPES: \\n data\_type TYPE i. \\n CLASS-METHODS: \\n factory RETURNING VALUE(ref) TYPE REF TO cls. \\n METHODS: \\n constructor, \\n meth ... \\n PRIVATE SECTION. \\n DATA: \\n attr TYPE i. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD factory. \\n ... \\n ENDMETHOD. \\n METHOD constructor. \\n ... \\n ENDMETHOD. \\n METHOD meth. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abapclass.html abapclass\_definition.html