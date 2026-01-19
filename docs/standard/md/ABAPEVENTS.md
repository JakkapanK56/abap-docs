---
title: "ABAPEVENTS"
description: |
  ABAPEVENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEVENTS.htm"
abapFile: "ABAPEVENTS.html"
keywords: ["do", "if", "method", "class", "ABAPEVENTS"]
---

[Short Reference](ABAPEVENTS_SHORTREF.html)

``EVENTS evt [EXPORTING [`parameters`](ABAPEVENTS_PARAMETERS.html)].``

[`... EXPORTING parameters`](#ABAP_ONE_ADD@1@)

This statement declares an instance event `evt` in a class or interface. The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `evt`. The statement [`RAISE EVENT`](ABAPRAISE_EVENT.html) can be used to raise the instance event `evt` in any instance method of the same class, or of any class that implements the interface, as well as in the instance methods of subclasses if they are visible there.

The addition `EXPORTING` defines the parameter interface of the event `evt`. An event can only have output parameters [`parameters`](ABAPEVENTS_PARAMETERS.html) that are passed by value.

When an [event handler](ABENEVENT_HANDLER_GLOSRY.html) is declared using the addition `FOR EVENT OF` of the statement [`METHODS`](ABAPMETHODS_EVENT_HANDLER.html) or [`CLASS-METHODS`](ABAPCLASS-METHODS_EVENT_HANDLER.html), the output parameters of the event are defined as the input parameters of the event handler. The properties of the input parameters are transferred from the output parameters defined in `EVENTS`.

In addition to the output parameters defined explicitly using `EXPORTING`, each instance event has an implicit output parameter, `sender`. This output parameter has the type reference variable. When the event is raised using `RAISE EVENT`, the reference to the raising object is implicitly assigned to `sender`.

The static type of the input parameter `sender` is defined for every event handler by the object type (class or interface) that is specified after the addition `FOR EVENT OF` of the statement `METHODS` or `CLASS-METHODS`.

The dynamic type of the implicit formal parameter `sender` is always the class of the object in which the event is raised.

In the interface `window`, three events are declared, each with an explicit non-optional output parameter `status`. The class `dialog_window` implements the interface `window`. The interface `window_handler` contains [event handlers](ABENEVENT_HANDLER_GLOSRY.html), which import both the explicit parameters and the implicit parameter `sender`. The static type of the input parameter `sender` is the class `dialog_window`.

[Events in Inheritance](ABENEVENT_INHERITANCE_ABEXA.html)

INTERFACE window. \\n EVENTS: minimize EXPORTING VALUE(status) TYPE i, \\n maximize EXPORTING VALUE(status) TYPE i, \\n restore EXPORTING VALUE(status) TYPE i. \\nENDINTERFACE. \\n\\ \\nCLASS dialog\_window DEFINITION. \\n PUBLIC SECTION. \\n INTERFACES window. \\nENDCLASS. \\n\\ \\nINTERFACE window\_handler. \\n METHODS: minimize\_window \\n FOR EVENT window~minimize OF dialog\_window \\n IMPORTING status sender, \\n maximize\_window \\n FOR EVENT window~maximize OF dialog\_window \\n IMPORTING status sender, \\n restore \\n FOR EVENT window~restore OF dialog\_window \\n IMPORTING status sender. \\nENDINTERFACE. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenevents.html