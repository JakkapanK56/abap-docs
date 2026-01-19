---
title: "ABAPSET_HANDLER"
description: |
  ABAPSET_HANDLER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_HANDLER.htm"
abapFile: "ABAPSET_HANDLER.html"
keywords: ["delete", "if", "method", "class", "data", "ABAPSET", "HANDLER"]
---

[Short Reference](ABAPSET_HANDLER_SHORTREF.html)

1\. `SET HANDLER handler1 handler2 ... FOR oref|\{ALL INSTANCES\}`\\
`[ACTIVATION act].`

2\. `SET HANDLER handler1 handler2 ... [ACTIVATION act].`

This statement registers or deregisters the [event handlers](ABENEVENT_HANDLER_GLOSRY.html)\\ `handler` for the corresponding [instance events](ABENINSTANCE_EVENT_GLOSRY.html) or [static events](ABENSTATIC_EVENT_GLOSRY.html).

Registration of event handlers for two instance events and a static event. In the first statement `SET HANDLER`, a static event handler `h1` and an instance method `h2`, are registered for the instance events `e1` and `e2` of the object referenced by the reference variable `trigger`. In the second statement `SET HANDLER`, an instance method `h3` is registered for the static event `ce1` of the class `c1`.

[Register Instance Event Handlers](ABAPSET_HANDLER_INSTANCE.html)

[Register Static Event Handlers](ABAPSET_HANDLER_STATIC.html)

-   The statement `SET HANDLER` internally manages different system tables that relate the event raisers and event handlers to each other in single registrations, mass registrations, and registrations of static events. Each registration represents one line in one of the system tables assigned to the trigger. A handler can only occur once in a particular system table but can appear in multiple system tables, that is, it can be registered for different events. When an event is raised using `RAISE EVENT`, the system evaluates the corresponding system tables and calls the event handlers registered there.
-   The order of the calls of registered event handlers is not defined and can change at program runtime. To get a fixed order of different method calls, these can be called in one event handler.
-   When an instance method is registered, a reference to the corresponding object is added in the relevant table and then deleted again when deregistering. With respect to the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html), such a reference has the same effect as a reference in a reference variable. Objects registered as handlers are therefore not deleted as long as they are registered, that is, they are not deregistered using the addition `ACTIVATION`. If a triggering instance is deleted by the Garbage Collector, the corresponding system table is also deleted and, as a result, its registrations are removed.
-   If the statement `SET HANDLER` registers the current handler again for the current event that has just been handled, it is not defined whether the registration is ignored by the current event handler. This can produce endless recursions and should be avoided.

-   *Cause:* Unable to register any more handlers.
    *Runtime error:*\\ `SET_HANDLER_DISP_OVERFLOW`
-   *Cause:* Handlers of instance methods need the `FOR` addition.
    *Runtime error:*\\ `SET_HANDLER_E_NO_FOR`
-   *Cause:* Event handler was registered for a static event.
    *Runtime error:*\\ `SET_HANDLER_FOR_CE`
-   *Cause:* The raiser of an event must not be `NULL`.
    *Runtime error:*\\ `SET_HANDLER_FOR_NULL`
-   *Cause:* The handler of an event must not be `NULL`.
    *Runtime error:*\\ `SET_HANDLER_HOBJ_NULL`

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n EVENTS e1. \\n CLASS-EVENTS ce1. \\nENDCLASS. \\n\\ \\nCLASS c2 DEFINITION INHERITING FROM c1. \\n PUBLIC SECTION. \\n EVENTS e2. \\nENDCLASS. \\n\\ \\nCLASS c3 DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS h1 FOR EVENT e1 OF c1. \\n METHODS: h2 FOR EVENT e2 OF c2, \\n h3 FOR EVENT ce1 OF c1. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\n... \\n\\ \\nCLASS c3 IMPLEMENTATION. \\n METHOD h1. \\n ... \\n ENDMETHOD. \\n METHOD h2. \\n ... \\n ENDMETHOD. \\n METHOD h3. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n DATA: trigger TYPE REF TO c2, \\n handler TYPE REF TO c3. \\n\\ \\n SET HANDLER: c3=>h1 handler->h2 FOR trigger, \\n handler->h3. \\n ENDMETHOD. \\nENDCLASS. `**sy-subrc**` **Meaning** 0 All specified handlers could be registered or deregistered. 4 At least one of the specified handlers could not be registered, as it is already registered for the same event. 8 At least one of the specified handlers could not be deregistered, as it is not registered for the event in question. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_event\_handler.html