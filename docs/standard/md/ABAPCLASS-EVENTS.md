---
title: "ABAPCLASS-EVENTS"
description: |
  ABAPCLASS-EVENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLASS-EVENTS.htm"
abapFile: "ABAPCLASS-EVENTS.html"
keywords: ["do", "if", "method", "class", "ABAPCLASS", "EVENTS"]
---

[Short Reference](ABAPCLASS-EVENTS_SHORTREF.html)

``CLASS-EVENTS evt [EXPORTING [`parameters`](ABAPEVENTS_PARAMETERS.html)].``

[`... EXPORTING parameters`](#ABAP_ONE_ADD@1@)

This statement declares a static event `evt` in a class or interface. The [naming conventions](ABENNAMING_CONVENTIONS.html) apply to the name `evt`. The statement [`RAISE EVENT`](ABAPRAISE_EVENT.html) can be used to raise the static event `evt` in all methods of the same class or of a class that implements the interface, as well as in the methods of subclasses if it is visible here.

Event handlers that are declared for a [static event inherited from a superclass](ABENINHERITANCE_STATICAL.html) can only respond to this event if it is raised by a method of the subclass or one of its subclasses. If the event is raised in a static method of a superclass, it is not handled, even if the method is called in a subclass or if the name of the subclass is specified.

The addition `EXPORTING` defines the parameter interface of the event `evt`. The syntax and meaning of the additions [`parameters`](ABAPEVENTS_PARAMETERS.html) are the same as in the definition of instance events using the statement [`EVENTS`](ABAPEVENTS.html).

Static events do not have an implicit formal parameter `sender`.

Declaration of static events in the class `CL_ABAP_BROWSER`.

[Events in Inheritance](ABENEVENT_INHERITANCE_ABEXA.html)

CLASS cl\_abap\_browser DEFINITION \\n ... \\n PUBLIC SECTION. \\n ... \\n CLASS-EVENTS \\n sapevent \\n EXPORTING \\n VALUE(action) TYPE string \\n VALUE(query\_table) TYPE cnht\_query\_table OPTIONAL. \\n CLASS-EVENTS \\n closed. \\n ... \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenevents.html