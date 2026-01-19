---
title: "ABENRAP_ENTITY_EVENT_GLOSRY"
description: |
  ABENRAP_ENTITY_EVENT_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRAP_ENTITY_EVENT_GLOSRY.htm"
abapFile: "ABENRAP_ENTITY_EVENT_GLOSRY.html"
keywords: ["if", "types", "ABENRAP", "ENTITY", "EVENT", "GLOSRY"]
---

A RAP business event is a business event that usually represents a piece of information about the outcome of a [CUD operation](ABENCUD_GLOSRY.html) in the context of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html). For example, the creation of a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) raises a RAP business event. Then, an interested party that has subscribed to this event can consume and process it. The information that is passed (i. e. the [payload](ABENPAYLOAD_GLOSRY.html) of the event) always includes the instance key and, if need be, further information like the action (CUD).

[RAP derived events](ABENRAP_DERIVED_EVENT_GLOSRY.html) and [RAP business events for side effects](ABENRAP_SIDE_EFFCT_EVENT_GLOSRY.html) are special types of RAP business events.

[**\-> More about**](ABENBDL_EVENT.html)

ABENRAP\_GLOSSARY.html