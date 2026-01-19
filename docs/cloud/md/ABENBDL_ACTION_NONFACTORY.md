---
title: "ABENBDL_ACTION_NONFACTORY"
description: |
  ABENBDL_ACTION_NONFACTORY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ACTION_NONFACTORY.htm"
abapFile: "ABENBDL_ACTION_NONFACTORY.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "ABENBDL", "ACTION", "NONFACTORY"]
---

``[[`internal`](ABENBDL_INTERNAL.html)][[`static`](ABENBDL_STATIC.html)]\ [[`repeatable`](ABENBDL_ACTION_REPEATABLE.html)] action                    [(                    [[`features: \{instance | global\}`](ABENBDL_ACTIONS_FC.html)]\                    [[`precheck`](ABENBDL_PRECHECK.html)]\                    [[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\                    [[`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)]\                    [[`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\                    [[`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)]\                    [[`lock:none`](ABENBDL_LOCK_NONE.html)]\                     )]\                     ActionName [[`external`](ABENBDL_EXTERNAL.html) 'ExternalName']\                    [[`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html)]\                    [[`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html)]\                    [[`\{default function GetDefaultsForActName`](ABENBDL_DEFAULT_FUNCTION.html)\ [[`external 'GetDefaultsForExtName'];\}`](ABENBDL_EXTERNAL.html)]``

Defines a [RAP action](ABENRAP_ACTION_GLOSRY.html) which offers non-standard behavior. The custom logic must be implemented in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html). An action per default relates to a [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) and changes the state of the instance.

If the optional keyword [`static`](ABENBDL_STATIC.html) is used, the action is defined as [static action](ABENRAP_STATIC_OPERATION_GLOSRY.html). Static actions are not bound to any instance of a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) but relate to the complete entity. The default is that an action is related to an [instance](ABENRAP_INSTANCE_OPERATION_GLOSRY.html), so the keyword `static` overwrites the default.

The optional addition [`repeatable`](ABENBDL_ACTION_REPEATABLE.html) declares a non-factory, instance-bound action as [RAP repeatable action](ABENRAP_REPEATABLE_ACTION_GLOSRY.html). A repeatable action can be executed multiple times on the same [RAP BO entity instance](ABENRAP_BO_ENTITY_INST_GLOSRY.html) within the same [ABAP EML](ABENABAP_EML_GLOSRY.html) or [OData](ABENODATA_GLOSRY.html) request. A RAP action without the addition `repeatable` must not be executed multiple times on the same entity instance within the same request. Otherwise, a runtime error occurs. For further details, see topic [RAP - `repeatable`](ABENBDL_ACTION_REPEATABLE.html).

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).

The following example shows a managed [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) based on the CDS root view entity `DEMO_CDS_PURCH_DOC_M`. The business object represents a purchase order with purchase order items. If an employee wants to order equipment, the manager can approve or reject this purchase. Therefore, the two actions `Approve_Order` and `Reject_Order` are defined.

The actions are implemented in behavior pool `BP_DEMO_CDS_PURCH_DOC_M`. The class `CL_DEMO_CDS_PURCHASE` accesses the business object using [EML](ABENEML_GLOSRY.html) and performs the `Approve_Order` action on one entity instance.

Result: column *Status* of the respective instance is filled with `A` for *Accepted*.

The example above is explained in detail in the executable example [RAP BDL - action](ABENBDL_ACTION1_ABEXA.html).

-   [`internal`](ABENBDL_INTERNAL.html) to make the respective action accessible only from within the business object implementation.
-   [`external`](ABENBDL_EXTERNAL.html) to provide an alias name for external usage.
-   [`lock:none`](ABENBDL_LOCK_NONE.html) to prevent the [RAP locking](ABENRAP_LOCKING_GLOSRY.html) mechanism for the entity instance for which the action is executed.
-   Dynamic feature control with [`(features:instance)`](ABENBDL_ACTIONS_FC.html). This enables or disables the action depending on preconditions within the business object. For example, the action `Accept_Order` might be offered only if the status is not *Rejected* already.
-   Global feature control with [`(features:global)`](ABENBDL_ACTIONS_FC.html) enables or disables the action depending on BO-external preconditions.
-   [`precheck`](ABENBDL_PRECHECK.html) prevents unwanted changes from reaching the application buffer.
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html) excludes the operation in question from [authorization checks](ABENBDL_AUTHORIZATION.html).
-   **Note** For static actions, the addition `authorization:none` is available only in case of global authorization.
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) delegates the [authorization control](ABENBDL_AUTHORIZATION.html) to the authorization check that is implemented for the update operation.
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies global authorization checks instead.
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies instance authorization checks instead.
-   Input parameters [`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html) and output parameters [`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html) can optionally be added to the action signature.
-   [`\{default function ... \}`](ABENBDL_DEFAULT_FUNCTION.html) defines a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) for the action in question. It is an optional addition that can be used to default values for the input parameter of the action. As a prerequisite, the action must specify an input parameter.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html), actions from the base BDEF can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html). It is also possible to specify new actions as described in topic [RAP BDL - actions and functions, projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html).
-   In a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), actions from the base BDEF can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

managed implementation in class bp\_demo\_cds\_purch\_doc\_m unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_PURCH\_DOC\_M alias PurchaseDocument\\npersistent table demo\_purch\_doc\\nlock master\\netag master crea\_date\_time\\nauthorization master (none)\\n\\{\\n create;\\n update;\\n delete;\\n association \_PurchaseDocumentItem \\{ create; \\}\\n\\n action Approve\_Order result \[1\] $self;\\n action Reject\_Order result \[1\] $self;\\n\\n field(readonly:update) PurchaseDocument;\\n\\n field ( readonly ) crea\_uname , crea\_date\_time;\\n\\n mapping for demo\_purch\_doc corresponding;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_PURCH\_DOC\_I\_M alias PurchaseDocumentItem\\npersistent table DEMO\_PURCH\_DOC\_I\\nlock dependent by \_PurchaseDocument\\nauthorization dependent by \_PurchaseDocument\\n\\{\\n update;\\n delete;\\n field ( readonly ) PurchaseDocumentItem , PurchaseDocument;\\n field ( mandatory ) Price , Quantity , QuantityUnit;\\n\\n association \_PurchaseDocument;\\n\\n mapping for DEMO\_PURCH\_DOC\_I corresponding;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html abenbdl\_action.html