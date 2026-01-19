---
title: "ABENBDL_ACTION_FACTORY"
description: |
  ABENBDL_ACTION_FACTORY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ACTION_FACTORY.htm"
abapFile: "ABENBDL_ACTION_FACTORY.html"
keywords: ["update", "delete", "do", "if", "class", "data", "types", "ABENBDL", "ACTION", "FACTORY"]
---

``[[`internal`](ABENBDL_INTERNAL.html)][[`static`](ABENBDL_STATIC.html)\ [[`default`](ABENBDL_ACTION_DEFAULT_FACTORY.html)]] factory action                    [(                    [[`features: \{instance | global\}`](ABENBDL_ACTIONS_FC.html)]\                    [[`precheck`](ABENBDL_PRECHECK.html)]\                    [[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\                    [[`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)]\                    [[`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\                    [[`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)]\                    [[`lock:none`](ABENBDL_LOCK_NONE.html)]\                     )]\                     ActionName [external 'ExternalName']\                    [[`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html)]\                     [cardinality]                    [[`\{default function GetDefaultsForActName [external 'GetDefaultsForExtName'];\}`](ABENBDL_DEFAULT_FUNCTION.html)]``

[Factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html) are used to create [RAP BO entity instances](ABENRAP_BO_ENTITY_INST_GLOSRY.html). Factory actions can be instance-bound or [static](ABENBDL_STATIC.html). Instance-bound factory actions can copy specific values of an instance. Static factory actions can be used to create instances with prefilled default values. Factory actions may also create child entity instances.

For factory actions, the same rules apply as for [non-factory actions](ABENBDL_ACTION_NONFACTORY.html) with the following differences:

For each unique [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ `%cid` (for static factory actions) or `%key` (for instance-bound factory actions) passed to the action, the number of newly created instances (none, one, or multiple) are added to the [response parameter](ABAPEML_RESPONSE.html)\\ `MAPPED` (success) or `FAILED`.

Exactly one static factory action can be defined as default factory action using the syntax addition [default](ABENBDL_ACTION_DEFAULT_FACTORY.html). This definition of default factory actions has an effect on consuming frameworks, such as OData. For further details, see topic [RAP - Default Factory Action](ABENBDL_ACTION_DEFAULT_FACTORY.html).

For factory actions, the optional addition [`AUTO FILL CID`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html) can be used to automatically fill the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) component [`%cid`](ABAPDERIVED_TYPES_CID.html).

The following example shows a managed [BDEF](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) which defines two factory actions:

The actions are implemented in behavior pool `BP_DEMO_RAP_FACTORY_ACTION`. The class `CL_DEMO_RAP_FACTORY_ACTION` accesses the business object using [EML](ABENEML_GLOSRY.html) and executes both actions.

Result: the entity instance with key field *1* is copied and a new entity instance with default values is created.

The example above is explained in detail in the executable example [RAP BDL - factory action](ABENBDL_ACTION3_ABEXA.html).

-   Output parameters [`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html) are not allowed. A factory action always creates one or more new BO entity instances of the RAP BO entity for which it is declared. Therefore, it is not necessary to specify the result in the BDL.
-   It is mandatory to specify a cardinality. The cardinality can be one of the following values:

-   `[1]`: Exactly one entity instance is created.
-   `[0..1]`: None or exactly one entity instance is created.
-   `[0..*]`: None or any number of instances are created.
-   `[1..*]`: Any number of instances is created, but at least one.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html), factory actions from the [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html) can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html). It is also possible to specify new factory actions as described in topic [RAP BDL - actions and functions, projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html).
-   In a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), factory actions from the base BDEF can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   `copy_instance`: All values of the requested entity instance are copied and a new key value is assigned.
-   `new_instance`: A new entity instance is created with default values.

managed implementation in class bp\_demo\_rap\_factory\_action unique;\\nstrict(2);\\n\\ndefine behavior for demo\_rap\_factory\_action\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n field(readonly:update) key\_field;\\n\\n // copy instance, assign new unique key value\\n factory action copy\_instance \[1\];\\n\\n // create new instance with default values\\n static factory action new\_instance \[1\];\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html abenbdl\_action.html