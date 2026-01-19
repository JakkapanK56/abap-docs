---
title: "ABENNEWS-792-EML"
description: |
  ABENNEWS-792-EML - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-792-EML.htm"
abapFile: "ABENNEWS-792-EML.html"
keywords: ["method", "class", "ABENNEWS", "792", "EML"]
---

You can use [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) statements to raise a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html).

The [`METHODS, FOR ENTITY EVENT`](ABENMETHOD_FOR_ENTITY_EVENT.html) addition supports [RAP event handler method](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html) definitions.

The [`FOR EVENTS OF`](ABENCLASS_FOR_EVENTS.html) addition supports the creation of [RAP event handler classes](ABENRAP_EVENT_HANDLER_CLASS_GLOSRY.html).

Local classes that inherit from [`CL_ABAP_BEHAVIOR_EVENT_HANDLER`](ABENCL_ABAP_BEHAVIOR_EVENT_HANDLER.html) can be implemented in the [CCIMP include](ABENCCIMP_GLOSRY.html) of a RAP event handler class to locally consume RAP business events.

The class [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html) is used to explicitly set RAP transactional phases.

abenabap.html abennews.html abennews-79.html abennews-792.html abennews-792-restful.html