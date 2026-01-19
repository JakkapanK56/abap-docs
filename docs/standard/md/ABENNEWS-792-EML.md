---
title: "ABENNEWS-792-EML"
description: |
  ABENNEWS-792-EML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-792-EML.htm"
abapFile: "ABENNEWS-792-EML.html"
keywords: ["if", "method", "class", "ABENNEWS", "792", "EML"]
---

[1. `SET ENTITIES`](#ABAP_MODIFICATION_1@4@)

[2. `RAISE ENTITY EVENT`](#ABAP_MODIFICATION_2@4@)

[3. `METHODS, FOR ENTITY EVENT`](#ABAP_MODIFICATION_3@4@)

[4. `CLASS, FOR EVENTS OF`](#ABAP_MODIFICATION_4@4@)

[5. `CL_ABAP_BEHAVIOR_EVENT_HANDLER`](#ABAP_MODIFICATION_5@4@)

[6. `CL_ABAP_TX`](#ABAP_MODIFICATION_6@4@)

[7\. Classifying APIs for Transactional Consistency](#ABAP_MODIFICATION_7@4@)

It is now possible block or unblock the ABAP EML access to RAP business objects using [`SET ENTITIES`](ABAPSET_ENTITIES.html) statements.

You can use [`RAISE ENTITY EVENT`](ABAPRAISE_ENTITY_EVENT.html) statements to raise a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html).

The [`METHODS, FOR ENTITY EVENT`](ABENMETHOD_FOR_ENTITY_EVENT.html) addition supports [RAP event handler method](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html) definitions.

The [`FOR EVENTS OF`](ABENCLASS_FOR_EVENTS.html) addition supports the creation of [RAP event handler classes](ABENRAP_EVENT_HANDLER_CLASS_GLOSRY.html).

Local classes that inherit from [`CL_ABAP_BEHAVIOR_EVENT_HANDLER`](ABENCL_ABAP_BEHAVIOR_EVENT_HANDLER.html) can be implemented in the [CCIMP include](ABENCCIMP_GLOSRY.html) of a RAP event handler class to locally consume RAP business events.

The class [`CL_ABAP_TX`](ABAPRAP_CL_ABAP_TX.html) is used to explicitly set RAP transactional phases.

Released APIs can contain [classifications](ABAPAPI_CLASSIFICATION.html) to ensure transactional consistency of custom extensions within the SAP LUW. Classifications with `IF_ABAP_TX_*` are available for this. `IF_ABAP_TX_WEAK` is now available.

abenabap.html abennews.html abennews-79.html abennews-792.html abennews-792-restful.html