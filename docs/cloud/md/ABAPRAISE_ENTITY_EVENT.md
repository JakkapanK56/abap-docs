---
title: "ABAPRAISE_ENTITY_EVENT"
description: |
  ABAPRAISE_ENTITY_EVENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPRAISE_ENTITY_EVENT.htm"
abapFile: "ABAPRAISE_ENTITY_EVENT.html"
keywords: ["delete", "loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABAPRAISE", "ENTITY", "EVENT"]
---

`RAISE ENTITY EVENT ent~evt FROM tab.`

Raises a [RAP business event](ABENRAP_ENTITY_EVENT_GLOSRY.html). The statement can only be used in [ABAP behavior pools](ABENBEHAVIOR_POOL_GLOSRY.html) by [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html) in the [RAP late save phase](ABENLATE_RAP_SAVE_PHASE_GLOSRY.html). Otherwise, the runtime error `BEHAVIOR_ILLEGAL_STATEMENT` occurs.

RAP business events can be raised on the [root node](ABENROOT_NODE_GLOSRY.html) and [child node](ABENCHILD_NODE_GLOSRY.html) level (`ent` is the name of the [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html)). In the case of an extension using an interface, it must be the source name of the BDEF interface. The event `evt` that is raised must be defined in a [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) or [BDEF extension](ABENRAP_EXTENSION_GLOSRY.html). `tab` is an internal table typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE TABLE FOR EVENT`](ABAPTYPE_TABLE_FOR.html).

The statement triggers the calling of [RAP event handler methods](ABENRAP_EVENT_HANDLER_METH_GLOSRY.html). The data that is passed in `tab` always includes a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) key of the root entity (component group [`%key`](ABAPDERIVED_TYPES_KEY.html)). If the event is defined with parameters, `tab` includes the component groups `%key` and [`%param`](ABAPDERIVED_TYPES_PARAM.html).

The following code snippet demonstrates the implementation of a [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) method in which RAP business events are raised for RAP BO instances that are created and deleted. The event for created RAP BO instances is defined without parameters in the BDEF. The event for deleted instances is defined with parameters. Therefore, the [`%param`](ABAPDERIVED_TYPES_PARAM.html) component group is contained in the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html). In both cases, the internal tables (which have the name of the BDEF) contained in the [deep structures](ABENDEEP_STRUCTURE_GLOSRY.html)\\ `create` (which is of type [`TYPE REQUEST FOR CHANGE`](ABAPTYPE_REQUEST_FOR.html)) and `delete` (which is of type [`TYPE REQUEST FOR DELETE`](ABAPTYPE_REQUEST_FOR.html)) as components are looped across using [iteration expressions](ABENFOR.html) with `FOR` to make sure that events are raised for all relevant instances.

-   It is recommended that RAP business events are raised by [RAP saver methods](ABENABP_SAVER_METHOD_GLOSRY.html). In managed RAP BOs, it is recommended that a [RAP additional save](ABENRAP_ADD_SAVE_GLOSRY.html) is specified using the syntax addition [`with additional save`](ABENBDL_SAVING.html) and raise the RAP business event in the implementation of the [`save_modified`](ABAPRAP_SAVER_METH_SAVE_MODIFIED.html) method.
-   If you need to raise a RAP business event outside of the behavior pool, you can create a separate [local class](ABENLOCAL_CLASS_GLOSRY.html) in the behavior pool's [global class](ABENGLOBAL_CLASS_GLOSRY.html). In this local class, you can create a [static method](ABENSTATIC_METHOD_GLOSRY.html) where the event raising is wrapped in the implementation part. You can also implement the raising of RAP business event from the associated RAP BO in ABP [ABP auxiliary classes](ABENABP_AUX_CLASS_GLOSRY.html).

-   [RAP BDL - event](ABENBDL_EVENT.html)
-   Development guide for the ABAP RESTful Application Programming Model, section about [RAP Business Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b925bc556d4491aad395b21ec2566ff?version=sap_cross_product_abap).

-   [Local Consumption of RAP Business Events (Database Table Modification)](ABENRAP_EVENTS_LOCAL_CON_ABEXA.html)

... \\nCLASS lsc\_some\_bdef IMPLEMENTATION. \\n\\ \\n METHOD save\_modified. \\n\\ \\n IF create-some\_bdef IS NOT INITIAL. \\n "Event defined in BDEF: event created; \\n RAISE ENTITY EVENT some\_bdef~created \\n FROM VALUE #( FOR IN create-some\_bdef ( \\n %key = VALUE #( key\_field = \-key\_field ) ) ). \\n ENDIF. \\n\\ \\n IF delete-some\_bdef IS NOT INITIAL. \\n "Event defined in BDEF: event deleted parameter some\_abstract\_entity; \\n RAISE ENTITY EVENT some\_bdef~deleted \\n FROM VALUE #( FOR IN delete-some\_bdef ( \\n %key = VALUE #( key\_field = \-key\_field ) \\n %param = VALUE #( par\_a = '01' \\n par\_b = 'Item deleted' ) ) ). \\n ENDIF. \\n\\ \\n ENDMETHOD. \\n\\ \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrap\_events.html