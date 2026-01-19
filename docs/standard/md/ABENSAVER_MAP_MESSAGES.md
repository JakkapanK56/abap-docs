---
title: "ABENSAVER_MAP_MESSAGES"
description: |
  ABENSAVER_MAP_MESSAGES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAVER_MAP_MESSAGES.htm"
abapFile: "ABENSAVER_MAP_MESSAGES.html"
keywords: ["delete", "do", "if", "method", "class", "ABENSAVER", "MAP", "MESSAGES"]
---

Declaration part:

``[`CLASS`](ABAPCLASS_DEFINITION.html) lsc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\ [`INHERITING FROM`](ABAPCLASS_OPTIONS.html) base_class ...       ...       [`METHODS`](ABAPMETHODS.html) map_messages [`REDEFINITION`](ABAPMETHODS_REDEFINITION.html).       ...  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).``

Implementation part:

``[`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lsc_bdef [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html).        ...        [`METHOD`](ABAPMETHOD.html) map_messages.        ...        [`ENDMETHOD`](ABAPMETHOD.html)\        ...  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).``

[RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) that is declared as part of a [RAP saver class](ABENABP_SAVER_CLASS_GLOSRY.html)\\ `lsc_bdef` in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The predefined saver method must be redefined.

`base_class` stands for the base class from which the RAP saver class inherits, for example, `CL_ABAP_BEHAVIOR_SAVER`.

The following points are relevant for this RAP saver method:

Development guide for the ABAP RESTful Application Programming Model, section [Message Mapping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/741dfc88293d4ac99186815b9fc35e31?version=sap_cross_product_abap).

The example [Example for RAP Saver Method `map_messages`](ABENABP_MAP_MESSAGES_ABEXA.html) demonstrates this RAP saver method within a RAP saver class using unmanaged RAP BOs.

-   Its use is optional.
-   It has the following implicit, predefined [`CHANGING`](ABAPMETHODS_GENERAL.html) parameter:

-   [`reported`](ABAPTYPE_RESPONSE_FOR.html): [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) that is of type [`TYPE RESPONSE FOR REPORTED LATE`](ABAPTYPE_RESPONSE_FOR.html).

-   It is available in [behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html) for those [RAP BOs](ABENRAP_BO_GLOSRY.html) whose [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) includes BOs that are defined as [foreign entities](ABENRAP_FOREIGN_ENTITY_GLOSRY.html).
-   Its purpose is to handle messages of foreign entities, i. e. entities that are not directly exposed, within one [RAP transaction](ABENRAP_LUW_GLOSRY.html). Depending on your business requirements, these messages might be available for the exposed RAP BO and mapped to the business context or just ignored and deleted.
-   If a RAP BO is defined as foreign entity in a BDEF, the responses in the [`reported`](ABAPTYPE_RESPONSE_FOR.html) parameter of the exposed RAP BO also contain this foreign entity as a component allowing the messages returned by the foreign entity to be mapped to the business context of the exposed RAP BO.
-   It is called in the [RAP early save phase](ABENEARLY_RAP_SAVE_PHASE_GLOSRY.html) if the RAP BOs that are defined as foreign entities return [RAP transition messages](ABENRAP_TRANS_MES_GLOSRY.html) in the `reported`\\ [response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) in their respective saver class. Note that [RAP state messages](ABENRAP_STATE_MES_GLOSRY.html) cannot be mapped in the save phase.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_saver\_class.html abenabp\_saver\_methods.html