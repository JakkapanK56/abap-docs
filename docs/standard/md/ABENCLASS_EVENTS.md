---
title: "ABENCLASS_EVENTS"
description: |
  ABENCLASS_EVENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASS_EVENTS.htm"
abapFile: "ABENCLASS_EVENTS.html"
keywords: ["method", "class", "ABENCLASS", "EVENTS"]
---

In ABAP Objects, [events](ABENEVENTS_OVERVIEW.html) are declared as components of classes. There is a distinction between instance events and static events. Triggers and handlers can be objects and classes, depending on whether they are instance or static events, or event handlers.

Instance events are declared using the statement [`EVENTS`](ABAPEVENTS.html). They can only be raised in instance methods.

Static events are declared using the statement [`CLASS-EVENTS`](ABAPCLASS-EVENTS.html). All methods (instance methods and [static methods](ABENSTATIC_METHOD_GLOSRY.html)) can raise static events. Static events, however, are the only events that can be raised in static methods.

abenabap.html abenabap\_reference.html abenabap\_objects.html abenclasses.html abenclass\_components.html