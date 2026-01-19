---
title: "ABENBDL_EVENT_OVERVIEW"
description: |
  ABENBDL_EVENT_OVERVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EVENT_OVERVIEW.htm"
abapFile: "ABENBDL_EVENT_OVERVIEW.html"
keywords: ["ABENBDL", "EVENT", "OVERVIEW"]
---

`event EventName [[deep] parameter ParamName];`

`managed event DerivedEventName on RefEvent parameter ViewEntityName;`

`event EventName for side effects;`

[RAP Business Event](ABENBDL_EVENT.html)

[RAP Derived Event](ABENBDL_MANAGED_EVENT.html)

[RAP Business Event for Side Effects](ABENBDL_EVENT_SIDE_EFFECT.html)

-   RAP supports event-driven architecture. A [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html) enables asynchronous communication between an event provider and an event consumer. Details are described in the topic [RAP - `event`](ABENBDL_EVENT.html).
-   A [RAP derived event](ABENRAP_DERIVED_EVENT_GLOSRY.html) is defined with reference to an existing [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html). It redefines the [payload](ABENPAYLOAD_GLOSRY.html) of the existing event. Details are described in the topic [RAP - `managed event`](ABENBDL_MANAGED_EVENT.html).
-   [RAP business events for side effects](ABENRAP_SIDE_EFFCT_EVENT_GLOSRY.html) are business events that are defined to be used exclusively for an [event-driven side effect](ABENRAP_EVENT_SIDEEF_GLOSRY.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html