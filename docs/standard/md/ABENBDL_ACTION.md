---
title: "ABENBDL_ACTION"
description: |
  ABENBDL_ACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ACTION.htm"
abapFile: "ABENBDL_ACTION.html"
keywords: ["update", "do", "if", "method", "data", "ABENBDL", "ACTION"]
---

1\. `[[internal](ABENBDL_INTERNAL.html)][[static](ABENBDL_STATIC.html)]\ [[repeatable](ABENBDL_ACTION_REPEATABLE.html)] action [( [[features: \{instance | global\}](ABENBDL_ACTIONS_FC.html)]\ [[precheck](ABENBDL_PRECHECK.html)]\ [[authorization:none](ABENBDL_ACTIONS_AUTH.html)]\ [[authorization:update](ABENBDL_ACTIONS_AUTH_UPDATE.html)]\ [[authorization:global](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\ [[authorization:instance](ABENBDL_ACTIONS_AUTH_INSTANCE.html)]\ [[lock:none](ABENBDL_LOCK_NONE.html)]\ )]\ ActionName [external 'ExternalName']\ [[InputParameter](ABENBDL_ACTION_INPUT_PARAM.html)]\ [[OutputParameter](ABENBDL_ACTION_OUTPUT_PARA.html)]; [[\{default function GetDefaultsForActName [external 'GetDefaultsForExtName'];\}](ABENBDL_DEFAULT_FUNCTION.html)]`

2\. `[[internal](ABENBDL_INTERNAL.html)][[static](ABENBDL_STATIC.html)\ [[default](ABENBDL_ACTION_DEFAULT_FACTORY.html)]] factory action [( [[features: \{instance | global\}](ABENBDL_ACTIONS_FC.html)]\ [[precheck](ABENBDL_PRECHECK.html)]\ [[authorization:none](ABENBDL_ACTIONS_AUTH.html)]\ [[authorization:update](ABENBDL_ACTIONS_AUTH_UPDATE.html)]\ [[authorization:global](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\ [[authorization:instance](ABENBDL_ACTIONS_AUTH_INSTANCE.html)]\ [[lock:none](ABENBDL_LOCK_NONE.html)]\ )]\ ActionName [ external 'ExternalName']\ [[InputParameter](ABENBDL_ACTION_INPUT_PARAM.html)]\ [cardinality]; [[\{default function GetDefaultsForActName [external 'GetDefaultsForExtName'];\}]](ABENBDL_DEFAULT_FUNCTION.html)`

3\. `[[internal](ABENBDL_INTERNAL.html)][[static](ABENBDL_STATIC.html)][factory]\ save(finalize|adjustnumbers|finalize, adjustnumbers) action [( [[features: global](ABENBDL_ACTIONS_FC.html)]\ [[precheck](ABENBDL_PRECHECK.html)]\ [[authorization:none](ABENBDL_ACTIONS_AUTH.html)]\ [[authorization:global](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\ [[authorization:instance](ABENBDL_ACTIONS_AUTH_INSTANCE.html)]\ )]\ ActionName [external 'ExternalName']\ [[InputParameter](ABENBDL_ACTION_INPUT_PARAM.html)]\ [[OutputParameter](ABENBDL_ACTION_OUTPUT_PARA.html)]; [[\{default function GetDefaultsForActName [external 'GetDefaultsForExtName'];\}]](ABENBDL_DEFAULT_FUNCTION.html)`

[RAP actions](ABENRAP_ACTION_GLOSRY.html) are [non-standard RAP BO operations](ABENRAP_NSTANDARD_OPERATION_GLOSRY.html) that modify the state of an [entity instance](ABENRAP_BO_INSTANCE_GLOSRY.html). The custom logic must be implemented in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html).

The following kinds of actions are available:

Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).

[Non-Factory Actions](ABENBDL_ACTION_NONFACTORY.html)

[Factory Actions](ABENBDL_ACTION_FACTORY.html)

[Save Actions](ABENBDL_ACTION_ONSAVE.html)

-   [Non-factory actions](ABENBDL_ACTION_NONFACTORY.html)

-   [Non-factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html) implement custom logic that changes existing entity instances.
-   Instance-bound non-factory actions can be declared as [repeatable](ABENBDL_ACTION_REPEATABLE.html). A [repeatable action](ABENRAP_REPEATABLE_ACTION_GLOSRY.html) can be executed multiple times on the same [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) in the same [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) request.

-   [Factory actions](ABENBDL_ACTION_FACTORY.html)

-   [Factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html) can be used to create RAP BO entity instances.
-   A [default factory action](ABENBDL_ACTION_DEFAULT_FACTORY.html) is a special kind of factory action.

-   [Save actions](ABENBDL_ACTION_ONSAVE.html)

-   [RAP save actions](ABENRAP_SAVE_ACTION_GLOSRY.html) can be non-factory actions or factory actions. RAP save actions are characterized by the syntax addition `save`, which has the effect that the action in question can only be executed during the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). Any attempt to execute a RAP save action during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) results in a [short dump](ABENSHORT_DUMP_GLOSRY.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html