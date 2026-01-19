---
title: "ABENEXCEPTIONS_EVENTS"
description: |
  ABENEXCEPTIONS_EVENTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEXCEPTIONS_EVENTS.htm"
abapFile: "ABENEXCEPTIONS_EVENTS.html"
keywords: ["do", "if", "case", "try", "method", "class", "ABENEXCEPTIONS", "EVENTS"]
---

Class-based exceptions in [event handlers](ABENEVENT_HANDLER_GLOSRY.html) are a special case of [class-based exceptions in procedures](ABENEXCEPTIONS_PROCEDURES.html).

Since event handlers and triggers are completely decoupled from each other, the trigger of an event does not know the handler and therefore cannot handle its exceptions. For this reason, no class-based exceptions can be declared using `RAISING` in the [declaration](ABAPMETHODS_EVENT_HANDLER.html) of event handlers.

This has the following consequences:

-   If exceptions of the classes `CX_STATIC_CHECK` or `CX_DYNAMIC_CHECK` occur during event handling, they must be handled in the event handler or they lead to a violation of the interface, whereby the exception `CX_SY_NO_HANDLER` is raised, as in regular [procedures](ABENEXCEPTIONS_PROCEDURES.html).
-   If a violation of the interface occurs during event handling, event handling is terminated, and the control is given back to the trigger of the event. Further event handlers which are still registered for the event are not executed.
-   The trigger of the event can handle the `CX_SY_NO_HANDLER` exception.

-   An event handler should handle exceptions of the classes `CX_STATIC_CHECK` and `CX_DYNAMIC_CHECK` that are raised during processing. If they are not handled and this leads to a violation of the interface, it is seen as a programming error in the event handling.
-   The trigger of an event does not usually have to handle exceptions, unless an exception to the class `CX_NO_CHECK` is expected. The handling of `CX_SY_NO_HANDLER` is only considered when trying to prevent a possible programming error in an event handler from producing a runtime error.
-   The trigger of an event should not attempt, any more than the caller of a procedure, to handle the original exception after detecting `CX_SY_NO_HANDLER`. Unlike in direct method calls, it is not yet determined here which method the event has handled.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abenexceptions\_system\_response.html