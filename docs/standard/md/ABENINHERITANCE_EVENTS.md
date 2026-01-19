---
title: "ABENINHERITANCE_EVENTS"
description: |
  ABENINHERITANCE_EVENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENINHERITANCE_EVENTS.htm"
abapFile: "ABENINHERITANCE_EVENTS.html"
keywords: ["if", "case", "method", "class", "ABENINHERITANCE", "EVENTS"]
---

Once declared in a superclass, an event is known in all subclasses of the inheritance tree in which it is visible and can be raised in the methods there.

An event handler can be declared with reference to all classes of the inheritance tree in which the event is visible for the event handler. However, it can only handle events raised in classes that are more specific than or equal to the class for which it is declared. If the event is raised in a method of a superclass of the class for which an event handler is declared, it cannot handle it.

The latter is particularly important when raising static events in static methods, since a static method is always executed in the class in which it was declared (see also [Inheritance and Static Components](ABENINHERITANCE_STATICAL.html)).

In the case of event handlers for events declared in interfaces, the above also applies to the class in which the interface is included.

[Events in Inheritance](ABENEVENT_INHERITANCE_ABEXA.html)

abenabap.html abenabap\_reference.html abenabap\_objects.html abeninheritance.html