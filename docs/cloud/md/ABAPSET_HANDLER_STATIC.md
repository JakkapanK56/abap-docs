---
title: "ABAPSET_HANDLER_STATIC"
description: |
  ABAPSET_HANDLER_STATIC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSET_HANDLER_STATIC.htm"
abapFile: "ABAPSET_HANDLER_STATIC.html"
keywords: ["delete", "if", "method", "class", "data", "ABAPSET", "HANDLER", "STATIC"]
---

`SET HANDLER handler1 handler2 ... [ACTIVATION act].`

[`... ACTIVATION act`](#ABAP_ONE_ADD@1@)

This statement registers the [event handlers](ABENEVENT_HANDLER_GLOSRY.html)\\ `handler1 handler2 ...` for the associated [static events](ABENSTATIC_EVENT_GLOSRY.html). The addition `ACTIVATION` can be used to deregister event handlers or to perform a dynamic registration.

An event handler is executed if the associated static event is raised using [`RAISE EVENT`](ABAPRAISE_EVENT.html). The list `handler1 handler2 ...` has the same form as for [instance events](ABAPSET_HANDLER_INSTANCE.html), but can only contain event handlers for static events declared using [`CLASS EVENTS`.](ABAPCLASS-EVENTS.html)

Events that can be handled by an event handler for static events are defined uniquely by their definition in the statement [`[CLASS-]`](ABAPCLASS-METHODS_EVENT_HANDLER.html)[`METHODS`](ABAPMETHODS_EVENT_HANDLER.html). During registration, the addition `FOR`, which is required to register or deregister instance event handlers that determine the raising instances, cannot be specified. An event handler for static events is registered or deregistered independently of the instance and this applies globally to the current [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

The syntax and semantics of the addition `ACTIVATION` are the same as for the statement [`SET HANDLER`](ABAPSET_HANDLER_INSTANCE.html) for instance events.

As long as the registration of an instance method as an event handler for a static event is not canceled using `ACTIVATION blank`, the associated object cannot be deleted by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html). This is because it is still used by the runtime framework.

Registration of a static handler for a static event. After the event has been raised, the handling takes place.

CLASS output DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA \\n out TYPE REF TO if\_demo\_output. \\n CLASS-METHODS \\n class\_constructor. \\nENDCLASS. \\n\\ \\nCLASS output IMPLEMENTATION. \\n METHOD class\_constructor. \\n out = cl\_demo\_output=>new( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-EVENTS evt \\n EXPORTING VALUE(p) TYPE string DEFAULT \`nop\`. \\n CLASS-METHODS meth. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n RAISE EVENT evt EXPORTING p = \`Ping!\`. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS hdl DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth FOR EVENT evt OF cls \\n IMPORTING p. \\nENDCLASS. \\n\\ \\nCLASS hdl IMPLEMENTATION. \\n METHOD meth. \\n output=>out->write( p \\n )->display( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n SET HANDLER hdl=>meth ACTIVATION 'X'. \\n cls=>meth( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_event\_handler.html abapset\_handler.html