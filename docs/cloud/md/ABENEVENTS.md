---
title: "ABENEVENTS"
description: |
  ABENEVENTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEVENTS.htm"
abapFile: "ABENEVENTS.html"
keywords: ["if", "method", "class", "ABENEVENTS"]
---

Events are declared using the following statements:

These statements are only possible in the declaration part of classes and interfaces.

The declaration of an event of a class has the effect that the methods of the class raise the event and hence trigger the execution of the [event handlers](ABENEVENT_HANDLER_GLOSRY.html). In the declaration, output parameters can be defined for an event for which actual parameters are then passed to the event handlers when the event is raised.

The statement `EVENTS` declares instance events. Instance events are bound to objects. They can only be raised in instance methods of the same class.

The statement `CLASS-EVENTS` declares static events. Static events are not bound to objects. They can be raised in all methods of the same class.

-   [`EVENTS`](ABAPEVENTS.html)
-   \\ [`CLASS-EVENTS`](ABAPCLASS-EVENTS.html)

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html