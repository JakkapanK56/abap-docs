---
title: "ABENCLASS_FOR_EVENTS"
description: |
  ABENCLASS_FOR_EVENTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_FOR_EVENTS.htm"
abapFile: "ABENCLASS_FOR_EVENTS.html"
keywords: ["do", "if", "method", "class", "ABENCLASS", "FOR", "EVENTS"]
---

``[`CLASS`](ABAPCLASS_DEFINITION.html) cl_event_handler [`DEFINITION`](ABAPCLASS_DEFINITION.html) PUBLIC [[`ABSTRACT`](ABAPCLASS_OPTIONS.html)]\ [[`FINAL`](ABAPCLASS_OPTIONS.html)] FOR EVENTS OF ent.    ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).  \  [`CLASS`](ABAPCLASS_IMPLEMENTATION.html) cl_event_handler [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html)\    ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).``

Adding `FOR EVENTS OF` to the definition of a [global class](ABENGLOBAL_CLASS_GLOSRY.html) creates a [RAP event handler class](ABENRAP_EVENT_HANDLER_CLASS_GLOSRY.html).

`ent` specifies the name of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html)\\ [interface BDEF](ABENCDS_INTERFACE_BDEF_GLOSRY.html) that exposes an event. The events that are handled by the class must be defined in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

The global class is implicitly [`ABSTRACT`](ABAPCLASS_OPTIONS.html) and [`FINAL`](ABAPCLASS_OPTIONS.html). Therefore, `ABSTRACT` and `FINAL` may or may not be specified.

The actual handling of the events is done by [RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html) that are implemented in the [CCIMP include](ABENCCIMP_GLOSRY.html) of the event handler class.

The example Local Consumption of RAP Business Events demonstrates the use of a RAP event handler class.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrap\_events.html