---
title: "ABAPMETHODS_EVENT_HANDLER"
description: |
  ABAPMETHODS_EVENT_HANDLER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMETHODS_EVENT_HANDLER.htm"
abapFile: "ABAPMETHODS_EVENT_HANDLER.html"
keywords: ["do", "if", "method", "class", "ABAPMETHODS", "EVENT", "HANDLER"]
---

``METHODS meth [[`ABSTRACT|FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html)]\              |[[`DEFAULT IGNORE|FAIL`](ABAPMETHODS_DEFAULT.html)]``\\ 
   `FOR EVENT evt OF \{class|intf\}`\\ 
   `[IMPORTING p1 p2 ... [sender]].`

[`... IMPORTING p1 p2 ... [sender]`](#ABAP_ONE_ADD@1@)

This statement declares the instance method `meth` as an [event handler](ABENEVENT_HANDLER_GLOSRY.html) for the event `evt` of the class `class` or interface `intf`. For `class` and `intf`, all classes and interfaces can be specified that are visible in this position and that contain an event `evt` as a component that is visible here.

The visibility section of the event handler cannot be more general than the visibility section of the event because otherwise properties of the method would be defined in a visibility section more restricted than the method itself.

If the event `evt` is an instance event, the event handler `meth` can handle it for all objects whose classes match `class` or that are subclasses of `class` or which implement the interface `intf` directly or by using a superclass. If the event is a [static event](ABENSTATIC_EVENT_GLOSRY.html), the event handler `meth` can handle it for the class `class` and its subclasses or for all classes that implement the interface `intf`.

The addition `IMPORTING` defines the input parameters of the event handler. For `p`, only those names of formal parameters can be specified that are defined as output parameters of the event by using the addition `EXPORTING` of the statement [`EVENTS`](ABAPEVENTS.html) or [`CLASS-EVENTS`](ABAPCLASS-EVENTS.html) in the declaration of the event `evt` in the class `class` or in the interface `intf`. The additions `TYPE` or `LIKE` and `OPTIONAL` or `DEFAULT` are not possible. The [typing](ABENTYPING_GLOSRY.html) of the input parameters and whether they are optional, and any replacement parameters, are inherited from the declaration of the event. Not all output parameters of the event need to be specified.

If `evt` is an instance event, a formal parameter called `sender` can be defined as an input parameter of an event handler in addition to the explicitly defined output parameters of the event. The formal parameter `sender` is an implicit output parameter of every instance event. It is completely typed as a reference variable, which itself has the class `class` or the interface `intf` as a static type, as specified in the declaration of the event handler after `EVENT evt OF`. If the event handler is called by an instance event, it is passed a reference to the raising object in `sender`.

Each event handler determines the type of its formal parameter `sender`.

The class `picture` contains an event handler `handle_double_click` for the instance event `picture_dblclick` of the global class `cl_gui_picture`. The event handler inherits two explicit output parameters of the event and the implicit parameter `sender` as input parameters.

-   Using the additions [`ABSTRACT`](ABAPMETHODS_ABSTRACT_FINAL.html) and [`FINAL`](ABAPMETHODS_ABSTRACT_FINAL.html), event handlers can either be made abstract or final just like [general methods](ABAPMETHODS_GENERAL.html) in classes.
-   The addition [`DEFAULT`](ABAPMETHODS_DEFAULT.html) can be used to make event handlers optional, just like [general methods](ABAPMETHODS_GENERAL.html) in interfaces.

-   To ensure that an event handler handles a raised event, it must be registered with the statement [`SET HANDLER`](ABAPSET_HANDLER.html).
-   In event handlers, no class-based exceptions can be declared using `RAISING`. See [Class-Based Exceptions in Event Handlers](ABENEXCEPTIONS_EVENTS.html).
-   When declaring event handlers for static events, note that these events are generally raised in static methods as well. In such a method, the class in which the method is declared is always the raising class, and not the subclass in which or with whose name the method was called.
-   Method declarations using this syntax are not to be confused with method declarations in the context of [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html): [`METHODS, FOR ENTITY EVENT`](ABENMETHOD_FOR_ENTITY_EVENT.html)

CLASS picture DEFINITION. \\n PUBLIC SECTION. \\n METHODS handle\_double\_click \\n FOR EVENT picture\_dblclick OF cl\_gui\_picture \\n IMPORTING mouse\_pos\_x mouse\_pos\_y sender. \\nENDCLASS. \\n\\ \\nCLASS picture IMPLEMENTATION. \\n METHOD handle\_double\_click. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenclasses\_and\_interfaces.html abenclass\_ifac\_components.html abenmethods.html abapmethods.html