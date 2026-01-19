---
title: "ABENGARBAGE_COLLECTOR_GLOSRY"
description: |
  ABENGARBAGE_COLLECTOR_GLOSRY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENGARBAGE_COLLECTOR_GLOSRY.htm"
abapFile: "ABENGARBAGE_COLLECTOR_GLOSRY.html"
keywords: ["delete", "do", "method", "class", "field-symbol", "ABENGARBAGE", "COLLECTOR", "GLOSRY"]
---

Deletes [objects](ABENOBJECT_GLOSRY.html) that are no longer referenced by [heap references](ABENHEAP_REFERENCE_GLOSRY.html) or [field symbols](ABENFIELD_SYMBOL_GLOSRY.html) and for which no method is registered as an [event handler](ABENEVENT_HANDLER_GLOSRY.html). The garbage collector is called periodically by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html). It tracks the [reference variables](ABENREFERENCE_VARIABLE_GLOSRY.html) of deleted objects. The static method `DO_GARBAGE_COLLECTION` of [system class](ABENSYSTEM_CLASS_GLOSRY.html)\\ `CL_ABAP_MEMORY_UTILITIES` can also be used to call the garbage collector explicitly in system programs. See also [weak reference](ABENWEAK_REFERENCE_GLOSRY.html).

ABENTECHNO\_GLOSSARY.html