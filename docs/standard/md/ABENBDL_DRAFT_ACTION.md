---
title: "ABENBDL_DRAFT_ACTION"
description: |
  ABENBDL_DRAFT_ACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DRAFT_ACTION.htm"
abapFile: "ABENBDL_DRAFT_ACTION.html"
keywords: ["insert", "update", "delete", "do", "if", "case", "method", "class", "data", "types", "ABENBDL", "DRAFT", "ACTION"]
---

``[internal] draft action             \{[([[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)][,[`features: instance`](ABENBDL_ACTIONS_FC.html)])]\             [Edit [with additional implementation];]\}\           |\ [Activate [optimized]\ [with additional implementation];]\           |\ [Discard [with additional implementation];]\           |\ [Resume [with additional implementation];]\           |\ [draft determine action Prepare [[`extensible`](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html)]\                \{                 [`determination`](ABENBDL_DETERMINATIONS.html)\ [(always)] DetName;                 [`validation`](ABENBDL_VALIDATIONS.html)\ [(always)] ValName;                 ...                \}]\           |\ [AdditionalSave;]``

[1. `... draft action Edit;`](#ABAP_VARIANT_1@1@)

[2. `... draft action Activate [optimized];`](#ABAP_VARIANT_2@1@)

[3. `... draft action Discard;`](#ABAP_VARIANT_3@1@)

[4. `... draft action Resume;`](#ABAP_VARIANT_4@1@)

[5. `... draft determine action Prepare;`](#ABAP_VARIANT_5@1@)

[6. `... draft action AdditionalSave;`](#ABAP_VARIANT_6@1@)

[1. `... with additional implementation`](#ABAP_ADDITION_1@3@)

[Draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) are available for [draft-enabled RAP BOs](ABENDRAFT_RAP_BO_GLOSRY.html) only. They allow data to be manipulated on the [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html).

Draft actions must be specified for [lock master entities](ABENRAP_LOCK_MA_ENT_GLOSRY.html) that are defined using the keyword `lock master` only, as they refer to the whole lockable subtree of a business object.

Draft actions are provided by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) in all scenarios. An implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is not required. The draft life cycle is determined by the RAP draft-runtime as soon as the business object is draft-enabled. The application developer does not need to implement the creation, update, or saving of [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). However, the optional addition `with additional implementation` is available for some draft actions. It allows an implementation of the respective draft action in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY ... ACTION`](ABAPHANDLER_METH_MODIFY.html) in the ABAP behavior pool.

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

In draft-enabled scenarios, the names of the draft actions are reserved for the draft actions. Entities that are not draft-enabled can use the names `Edit`, `Activate`, and so on, as names for [actions](ABENBDL_ACTION.html). But when the addition `with draft;` is used to draft-enable a business object, the names of draft actions are forbidden as names for actions.

Development guide for the ABAP RESTful Application Programming Model, topic [Draft Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/707c7e93ecab48ea9e6b9c3c893a792e?version=sap_cross_product_abap).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_MANAGED_DRAFT_ACTIONS`. RAP draft handling is enabled and the draft actions are specified in the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html).

The class `CL_DEMO_RAP_MNGD_DRAFT_ACTNS` accesses the business object using [EML](ABENEML_GLOSRY.html) and carries out the following actions:

The draft action `Edit` copies an active instance to the draft database table. [Feature](ABENRAP_FEATURE_CONTROL_GLOSRY.html) and [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) is available for `Edit`, which can optionally be defined to restrict the usage of the action. The optional addition `with additional implementation` is available.

The draft action `Activate` is the inverse action to `Edit`. It copies the content of the draft database table to the [persistent database table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) and clears the draft database table. It includes all changes that were done on the draft application buffer. `Activate` includes an implicit execution of the draft determine action `Prepare`.

It is recommended that you always use the optional addition `optimized`:

The optional addition `with additional implementation` is available.

The draft action `Discard` deletes the draft instance from the draft database table. The optional addition `with additional implementation` is available.

The draft action `Resume` is executed when a user continues to work on a draft instance whose exclusive lock for the active data has already expired. It re-creates the lock for the corresponding entity instance on the active database table. It is executed automatically whenever there is a modification on a draft instance whose exclusive lock has expired.

In case of [new draft instances](ABENRAP_NEW_DRAFT_INST_GLOSRY.html), the same feature and authorization control is executed as defined for the [standard operation `create`](ABENBDL_STANDARD_OPERATIONS.html). In case of [edit-draft instances](ABENRAP_EDIT_DRAFT_INST_GLOSRY.html), the same feature and authorization control is executed as defined for the draft action `Edit`.

The optional addition `with additional implementation` is available.

In case of an edit draft, if a [RAP BO precheck](ABENRAP_BO_PRECHECK_GLOSRY.html) is required, this precheck implementation must be triggered explicitly during the draft action `Resume`. For this, the addition `with additional implementation` is required and the respective [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) must trigger the precheck method. For further details and an example, see the development guide for the ABAP RESTful Application Programming Model, topic [Implementing Prechecks](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5a24e181eb994fffb59a186a2fdb3ef2?version=sap_cross_product_abap).

The draft determine action `Prepare` executes the [determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [validations](ABENRAP_VALIDATION_GLOSRY.html) that are assigned to it in the behavior definition. The `Prepare` enables validating draft data before the transition to active data. `Prepare` is the draft-equivalent to the [determine actions](ABENBDL_DETERMINE_ACTION.html) for active instances and the rules described in the [topic about determine actions](ABENBDL_DETERMINE_ACTION.html) apply to `Prepare` as well, in particular the following:

The draft action `AdditionalSave` can be used to define an additional draft save for [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). It is intended in particular for draft actions with the addition `with additional implementation`. For these draft actions, an additional save allows additional functionality to be called during the standard [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). An implementation in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY ... FOR ACTION`](ABAPHANDLER_METH_MODIFY.html) is required. The name of this method is `AdditionalSave` by default.

It is recommended that the draft action `AdditionalSave` is defined as [`internal`](ABENBDL_INTERNAL.html), as it is called internally by the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) only. It is not possible to execute this action using [`MODIFY ENTITIES ... EXECUTE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) in ABAP EML, not even when using the addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) and not from the current RAP BO's [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). The draft action `AdditionalSave` is not exposed in an OData service.

The draft action `AdditionalSave` can be specified in managed and unmanaged BDEFs. Reuse in a projection BDEF or in an interface BDEF with the keyword [`use`](ABENBDL_USE_PROJECTION.html) is not possible.

The draft action `AdditionalSave` is a [static](ABENRAP_STATIC_OPERATION_GLOSRY.html) action, this means, the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) for the importing parameter of the corresponding RAP handler method has a component [`%cid`](ABAPDERIVED_TYPES_CID.html).

The optional addition `with additional implementation` is available for `Edit`, `Activate`, `Discard`, and `Resume`. If it is specified, an implementation for the respective draft action in the [RAP handler method](ABAPMETHODS_FOR_RAP_BEHV.html)\\ `FOR MODIFY` in the local ABAP behavior pool is required.

-   [`internal`](ABENBDL_INTERNAL.html): Available for all draft actions.
-   [`(features:instance)`](ABENBDL_ACTIONS_FC.html): Dynamic feature control is available only for `Edit`. For `Edit`, it is per default implicitly enabled.
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html): Available only for `Edit`.

-   Managed and draft-enabled RAP BOs (mandatory).
-   Unmanaged and draft-enabled RAP BOs (mandatory).
-   In [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html) that reuse RAP draft handling, the draft actions must be reused using the syntax `use action DraftActionName`. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   In [RAP BO interfaces](ABENRAP_BO_INTERFACE_GLOSRY.html) that reuse RAP draft handling, the draft actions must be reused using the syntax `use action DraftActionName`. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   It creates two active entity instances using the EML statement `MODIFY ENTITY` and commits them to the active database.
-   It executes the draft action `Edit` for the two active instances. No changes are made, the only effect of the draft action `Edit` in this example is that the active instances are copied to the draft database table.
-   The draft action `Prepare` is executed for the two draft instances that were copied from the [persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html) to the [draft table](ABENDRAFT_TABLE_GLOSRY.html) during the `Edit`. The assigned determination `setCharField` is executed and it inserts a value into field `CharFieldRoot`.
-   The draft action `Discard` is executed. It deletes both instances from the draft database table.

-   The example above is explained in detail in the topic [RAP - Draft Actions Edit, Discard, Prepare](ABENBDL_DRAFT_ACTION2_ABEXA.html).
-   Another executable example for the draft action `Activate` can be found in the topic [RAP - Draft Action `Activate`](ABENBDL_DRAFT_ACTION1_ABEXA.html).

-   `optimized` speeds up the activation of draft instances considerably by reducing the number of determination and validation executions in a RAP transaction.
-   As a prerequisite, determinations and validations must be modeled according to the guidelines described in the [development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/289477a81eec4d4e84c0302fb6835035?version=sap_cross_product_abap), section [*Determination and Validation Modelling*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/86a21be150db463a9c687e3ad34c308a?version=sap_cross_product_abap). For example, it must be ensured that the validations and determinations handle draft and active instances identically.
-   Further details are described in the [development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/289477a81eec4d4e84c0302fb6835035?version=sap_cross_product_abap) in the following topics:

-   [*Draft Action Activate Optimized*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/7952cccd228444f383875d2fbbcd4b1e?version=sap_cross_product_abap)
-   [*Runtime Activate Optimized Action*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/9b7a3b482af04772ad6902e9e25ce300?version=sap_cross_product_abap)
-   [*Determination and Validation Modelling*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/86a21be150db463a9c687e3ad34c308a?version=sap_cross_product_abap)

-   Only [validations](ABENBDL_VALIDATIONS.html) and [determinations defined as `on save`](ABENBDL_DETERMINATIONS.html) can be assigned.
-   The assignment of determinations and validations must be done explicitly in the BDEF. Only determinations and validations that are defined and implemented for the BO can be used.
-   It is also possible to not define any determinations or validations to the draft determine action `Prepare`.
-   The optional addition [(always)](ABENBDL_DETERMINE_ACTION.html) can be used.
-   Determinations and validations of child entities can be included.
-   Available for managed scenarios and for unmanaged and draft-enabled scenarios.
-   The optional addition [`extensible`](ABENBDL_EXTENSIBLE.html) allows validations and determinations to be added to the draft determine action `Prepare` in question by means of [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html). For further details on extensibility enabling, see topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html).

managed implementation in class bp\_demo\_rap\_managed\_draft\_acti unique;\\nstrict ( 2 );\\nwith draft;\\n\\ndefine behavior for DEMO\_RAP\_MANAGED\_DRAFT\_ACTIONS alias ParentEntity\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_draft\\nlock master\\ntotal etag Timestamp\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n\\n determination setCharField on save \\{ field Timestamp; \\}\\n\\n draft action ( authorization : none ) Edit;\\n draft action Activate optimized with additional implementation;\\n draft action Discard;\\n draft action Resume;\\n draft determine action Prepare\\n \\{ determination ( always ) setCharField; \\}\\n field ( readonly : update ) KeyFieldRoot;\\n field ( readonly ) Timestamp;\\n internal draft action AdditionalSave;\\n\\n mapping for demo\_dbtab\_root\\n \\{\\n KeyFieldRoot = key\_field;\\n DataFieldRoot = data\_field;\\n CharFieldRoot = char\_field;\\n Timestamp = crea\_date\_time;\\n LastChangedAt = lchg\_date\_time;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html