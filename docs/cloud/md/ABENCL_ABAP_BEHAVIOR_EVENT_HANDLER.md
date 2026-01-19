---
title: "ABENCL_ABAP_BEHAVIOR_EVENT_HANDLER"
description: |
  ABENCL_ABAP_BEHAVIOR_EVENT_HANDLER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCL_ABAP_BEHAVIOR_EVENT_HANDLER.htm"
abapFile: "ABENCL_ABAP_BEHAVIOR_EVENT_HANDLER.html"
keywords: ["if", "method", "class", "ABENCL", "ABAP", "BEHAVIOR", "EVENT", "HANDLER"]
---

```[`CLASS`](ABAPCLASS_DEFINITION.html) lhe_event [`DEFINITION`](ABAPCLASS_DEFINITION.html)\    [`INHERITING FROM`](ABAPCLASS_OPTIONS.html)\ `` `CL_ABAP_BEHAVIOR_EVENT_HANDLER` `` [[`ABSTRACT`](ABAPCLASS_OPTIONS.html)]\ [[`FINAL`](ABAPCLASS_OPTIONS.html)].    [`PRIVATE SECTION`](ABAPPRIVATE.html).  \      [`event_handler_method_definitions`](ABENMETHOD_FOR_ENTITY_EVENT.html)\      ...  \  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).  \  [`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lhe_event [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html)\  \      [`event_handler_method_declarations`](ABENMETHOD_FOR_ENTITY_EVENT.html)\      ...  \  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).```

A [local class](ABENLOCAL_CLASS_GLOSRY.html) inheriting from `CL_ABAP_BEHAVIOR_EVENT_HANDLER` can be implemented in the CCIMP include of a [RAP event handler class](ABENRAP_EVENT_HANDLER_CLASS_GLOSRY.html) to locally consume [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html). The events are handled by [RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html) that are defined ([`event_handler_method_definitions)`](ABENMETHOD_FOR_ENTITY_EVENT.html) and implemented ([`event_handler_method_declarations`](ABENMETHOD_FOR_ENTITY_EVENT.html)) in this local class.

The local class is implicitly both [`ABSTRACT`](ABAPCLASS_OPTIONS.html) and [`FINAL`](ABAPCLASS_OPTIONS.html), so specifying `ABSTRACT` and `FINAL` is optional.

The example Local Consumption of RAP Business Events demonstrates the use of a RAP event handler class.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrap\_events.html