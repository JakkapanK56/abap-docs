---
title: "ABAPRAISE_EVENT"
description: |
  ABAPRAISE_EVENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRAISE_EVENT.htm"
abapFile: "ABAPRAISE_EVENT.html"
keywords: ["if", "case", "method", "class", "data", "ABAPRAISE", "EVENT"]
---

[Short Reference](ABAPRAISE_EVENT_SHORTREF.html)

`RAISE EVENT evt [EXPORTING p1 = a1 p2 = a2 ...].`

[`... EXPORTING p1 = a1 p2 = a2 ...`](#ABAP_ONE_ADD@1@)

This statement can only be used in methods. It raises the event `evt`. `evt` is the name to be specified directly for an event that must be declared with the statement [`EVENTS`](ABAPEVENTS.html) or [`CLASS-EVENTS`](ABAPCLASS-EVENTS.html) directly in the same class, in a superclass, or in an implemented interface.

After the event is raised, all [event handlers](ABENEVENT_HANDLER_GLOSRY.html) that were registered for this event with the statement [`SET HANDLER`](ABAPSET_HANDLER.html) are executed. The order of execution is undefined and can change during program execution. After the event handlers have been executed, the method continues after `RAISE EVENT`.

If the addition `EXPORTING` is used, actual parameters `a1 a2 ...` can be assigned to all optional formal parameters `p1 p2...` of the event `evt` and must be assigned to all non-optional formal parameters. The values of the actual parameters are passed to those event handlers whose definition lists the according formal parameters after the addition `IMPORTING` of the statements [`[CLASS-]`](ABAPCLASS-EVENTS.html)[`EVENTS`](ABAPEVENTS.html).

`a1`, `a2`, ... are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html), which means that, alongside data objects, expressions can also be passed as actual parameters. [Special rules](ABENTYPING_ARITH_EXPR.html) apply in this case.

Raising of the instance event `e1`. An actual parameter must be assigned to the non-optional formal parameter `p1`.

-   To avoid endless recursion, a maximum of 1023 further events can be raised using `RAISE EVENT` in event handling.
-   If the formal parameter `sender` is defined for an event handler, this is automatically supplied with the reference to the raising object when instance events are raised. It cannot be specified explicitly after `EXPORTING`.
-   If there is an exception in an event handler, event handling is canceled. For a class-based exception, the control is then returned to the trigger. See [Class-Based Exceptions in Event Handlers](ABENEXCEPTIONS_EVENTS.html).

-   *Cause:*\\ `RAISE EVENT` statements nested too deeply.
    *Runtime error:*\\ `RAISE_EVENT_NESTING_LIMIT`

CLASS c1 DEFINITION. \\n PUBLIC SECTION. \\n EVENTS e1 EXPORTING value(p1) TYPE string \\n value(p2) TYPE i OPTIONAL. \\n METHODS m1. \\nENDCLASS. \\n\\ \\n... \\n\\ \\nCLASS c1 IMPLEMENTATION. \\n METHOD m1. \\n ... \\n RAISE EVENT e1 EXPORTING p1 = '...'. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_event\_handler.html