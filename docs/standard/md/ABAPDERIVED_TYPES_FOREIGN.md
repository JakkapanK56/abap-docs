---
title: "ABAPDERIVED_TYPES_FOREIGN"
description: |
  ABAPDERIVED_TYPES_FOREIGN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_FOREIGN.htm"
abapFile: "ABAPDERIVED_TYPES_FOREIGN.html"
keywords: ["insert", "delete", "loop", "do", "if", "method", "class", "types", "internal-table", "ABAPDERIVED", "TYPES", "FOREIGN"]
---

`%foreign` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). The component group is contained in the `REPORTED`\\ [RAP response parameter](ABENRAP_RESPONSE_PARAM_GLOSRY.html) in the context of the [`map_messages`](ABENSAVER_MAP_MESSAGES.html) saver method and summarizes all available [foreign entities](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) defined in the [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

**Type**

The subcomponents of `%foreign` are internal tables of type [`TYPE TABLE FOR REPORTED LATE`](ABAPTYPE_TABLE_FOR.html).

**Where used**

Development guide for the ABAP RESTful Application Programming Model, section [Message Mapping](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/741dfc88293d4ac99186815b9fc35e31?version=sap_cross_product_abap).

The following source code section taken from the `BP_DEMO_UNMANAGED_MAP_MESSAGESCCIMP` of the global class of the [behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) `BP_DEMO_UNMANAGED_MAP_MESSAGES` demonstrates the component group `%foreign` in the context of a `map_messages` method implementation that is responsible for processing the responses of a foreign entity. See the executable program for this example further down.

The example [Example for RAP Saver Method `map_messages`](ABENABP_MAP_MESSAGES_ABEXA.html) demonstrates the use of `%foreign` in the context of the implementation of a `map_messages` saver method within a RAP saver class using unmanaged RAP BOs.

-   [`TYPE RESPONSE FOR REPORTED LATE`](ABAPTYPE_RESPONSE_FOR.html)

METHOD map\_messages. \\n\\ \\n LOOP AT reported-%foreign-demo\_unmanaged\_foreign\_entity \\n ASSIGNING FIELD-SYMBOL(<src>). \\n "Adapt message from foreign entity. \\n <src>-%msg = new\_message\_with\_text( \\n severity = if\_abap\_behv\_message=>severity-information \\n text = |Foreign entity: Instance with | && \\n |key \\{ <src>-key\_field \\} was saved.| ). \\n\\ \\n "Insert changed messages into REPORTED table of the exposed BO. \\n INSERT VALUE #( key\_field = <src>-%key-key\_field \\n %msg = <src>-%msg \\n ) INTO TABLE reported-demo\_unmanaged\_map\_messages. \\n ENDLOOP. \\n\\ \\n "You can delete the original messages to remove them from the external result. \\n CLEAR reported-%foreign-demo\_unmanaged\_foreign\_entity. \\n\\ \\nENDMETHOD. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_info.html