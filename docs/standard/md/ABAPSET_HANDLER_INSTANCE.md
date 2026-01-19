---
title: "ABAPSET_HANDLER_INSTANCE"
description: |
  ABAPSET_HANDLER_INSTANCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_HANDLER_INSTANCE.htm"
abapFile: "ABAPSET_HANDLER_INSTANCE.html"
keywords: ["delete", "do", "if", "try", "catch", "method", "class", "data", "ABAPSET", "HANDLER", "INSTANCE"]
---

[Short Reference](ABAPSET_HANDLER_SHORTREF.html)

`SET HANDLER handler1 handler2 ... FOR \{ oref |\{ALL INSTANCES\}\ \}`\\ 
                                  `[ACTIVATION act].`

[1. `... FOR oref`](#ABAP_ADDITION_1@3@)

[2. `... FOR ALL INSTANCES`](#ABAP_ADDITION_2@3@)

[3. `... ACTIVATION act`](#ABAP_ADDITION_3@3@)

This statement registers the [event handlers](ABENEVENT_HANDLER_GLOSRY.html)\\ `handler1 handler2 ...` for the associated [instance events](ABENINSTANCE_EVENT_GLOSRY.html) of the objects specified after `FOR`. The addition `ACTIVATION` can be used to deregister event handlers or perform a dynamic registration.

An event handler is executed if the associated instance event is raised using [`RAISE EVENT`](ABAPRAISE_EVENT.html) in an object for which it is registered. An event handler `handler` can be specified as follows, where the names have the same meaning as in the [explicit method call](ABAPCALL_METHOD_METH_IDENT_STAT.html):

Methods `meth` can be specified from the same class or from other classes defined as instance event handlers using the addition `FOR EVENT evt OF \{class|intf\}` of the statements [`[CLASS-]`](ABAPCLASS-METHODS_EVENT_HANDLER.html)[`METHODS`](ABAPMETHODS_EVENT_HANDLER.html). No event handlers for [static events](ABENSTATIC_EVENT_GLOSRY.html) can be specified. At least one name must be specified.

The type `class` or `intf` specified after `FOR EVENT OF` in the definition of an instance event handler specifies the objects whose events it can handle. Single objects or all handleable objects can be specified after the addition `FOR`.

This addition registers or deregisters the event handlers of the list `handler1 handler2 ...` for exactly one object. `oref` is an object reference that must point to an object whose events can be handled by the specified event handlers. The class of the object must be `class` or a subclass of `class`, or must implement the interface `intf` directly or through a superclass.

`oref` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

Registration of an event handler for an ALV event.

This addition registers or deregisters the event handlers of the list `handler1 handler2 ...` for all objects whose events they can handle. These are all objects whose classes are either `class` or the subclass of `class`, or which implement the interface `intf` directly or through a superclass. Such a registration also applies to all raising instances created after the statement `SET HANDLER`.

Registration with `FOR ALL INSTANCES` applies also in particular to temporary instances that can be created when using the instantiation operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html).

A single-character text-like field `act` can be specified after the addition `ACTIVATION`. If `act` has the value *X* (the default value), the event handlers `handler` are registered. If `act` has the value blank, however, the registration of the event handlers `handler` is canceled. A single registration cannot, however, be deregistered using mass deregistration. Conversely, individual raising objects cannot be excluded from registration after a mass registration.

As long as the registration of an instance method as an event handler for an instance event is not canceled using `ACTIVATION ' '` or all raising instances are deleted, the associated object cannot be deleted by the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html). This is because it is still used by the runtime framework.

Registration of an event handler with `FOR ALL INSTANCES`. The events of all temporary instances created with [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) are handled until registration is stopped. The code is taken from class `CL_DEMO_SET_HANDLER_FOR_ALL` and can be executed there.

-   `meth`
-   `oref->meth`
-   `class=>meth`

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n METHODS main. \\n PRIVATE SECTION. \\n DATA itab TYPE TABLE OF scarr. \\n METHODS handle\_double\_click \\n FOR EVENT double\_click OF cl\_salv\_events\_table. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n DATA alv TYPE REF TO cl\_salv\_table. \\n ... \\n TRY. \\n cl\_salv\_table=>factory( \\n IMPORTING r\_salv\_table = alv \\n CHANGING t\_table = itab ). \\n SET HANDLER handle\_double\_click FOR alv->get\_event( ). \\n CATCH cx\_salv\_msg. \\n ... \\n ENDTRY. \\n ENDMETHOD. \\n METHOD handle\_double\_click. \\n ... \\n ENDMETHOD. \\nENDCLASS. CLASS output DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA \\n out TYPE REF TO if\_demo\_output. \\n CLASS-METHODS \\n class\_constructor. \\nENDCLASS. \\n\\ \\nCLASS output IMPLEMENTATION. \\n METHOD class\_constructor. \\n out = cl\_demo\_output=>new( ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n EVENTS evt \\n EXPORTING VALUE(p) TYPE string DEFAULT \`nop\`. \\n METHODS meth \\n IMPORTING p TYPE string. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD meth. \\n RAISE EVENT evt EXPORTING p = p. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS hdl DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth FOR EVENT evt OF cls \\n IMPORTING p. \\nENDCLASS. \\n\\ \\nCLASS hdl IMPLEMENTATION. \\n METHOD meth. \\n output=>out->write( p ). \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(href) = NEW hdl( ). \\n SET HANDLER href->meth FOR ALL INSTANCES. \\n\\ \\n NEW cls( )->meth( \`Ping 1\` ). \\n NEW cls( )->meth( \`Ping 2\` ). \\n NEW cls( )->meth( \`Ping 3\` ). \\n\\ \\n SET HANDLER href->meth FOR ALL INSTANCES ACTIVATION ' '. \\n\\ \\n NEW cls( )->meth( \`Ping 4\` ). \\n NEW cls( )->meth( \`Ping 5\` ). \\n NEW cls( )->meth( \`Ping 6\` ). \\n\\ \\n output=>out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_event\_handler.html abapset\_handler.html