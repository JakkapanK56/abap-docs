---
title: "ABENBDL_ACTION_ONSAVE"
description: |
  ABENBDL_ACTION_ONSAVE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ACTION_ONSAVE.htm"
abapFile: "ABENBDL_ACTION_ONSAVE.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "ACTION", "ONSAVE"]
---

``[[`internal`](ABENBDL_INTERNAL.html)][[`static`](ABENBDL_STATIC.html)][factory]\    save(finalize|adjustnumbers|finalize, adjustnumbers) action                    [(                    [[`features: global`](ABENBDL_ACTIONS_FC.html)]\                    [[`precheck`](ABENBDL_PRECHECK.html)]\                    [[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\                    [[`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\                    [[`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)]\                     )]\                     ActionName [external 'ExternalName']\                    [[`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html)]\                    [[`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html)];                    [[`\{default function GetDefaultsForActName [external 'GetDefaultsForExtName'];\}`](ABENBDL_DEFAULT_FUNCTION.html)]``

Defines a [RAP save action](ABENRAP_SAVE_ACTION_GLOSRY.html). RAP save actions are [RAP actions](ABENRAP_ACTION_GLOSRY.html) that can only be called during a specified [RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) in the [RAP save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html). Any call during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) leads to a [short dump](ABENSHORT_DUMP_GLOSRY.html).

Save actions are characterized by the syntax addition `save`. The name of the [RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html) during which the action can be executed is specified in brackets. `finalize`, `adjustnumbers`, or both can be specified in brackets to indicate the saver method during which the action can be called.

[Non-factory actions](ABENBDL_ACTION_NONFACTORY.html) and [factory actions](ABENBDL_ACTION_FACTORY.html) (instance-bound and static) can be defined as save action. A default factory action, however, cannot be a save action. The respective syntax rules of the kind of action apply (non-factory, static factory, instance-bound factory).

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are allowed for save actions:

A RAP save action can be called in the following contexts:

RAP save actions must not be called in the following contexts:

Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).

The following example shows an unmanaged BDEF with four save actions.

**Note** This example is intentionally kept short and simple and focuses on specific RAP aspects. It does not fully meet the requirements of the [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html).

The save actions are implemented in behavior pool `BP_DEMO_RAP_SAVE_ACTION_U`.

The following calls are valid:

-   [`internal`](ABENBDL_INTERNAL.html) to make the respective action accessible only from within the business object implementation.
-   Global feature control with [`(features:global)`](ABENBDL_ACTIONS_FC.html) enables or disables the action depending on BO-external preconditions.
-   [`precheck`](ABENBDL_PRECHECK.html) prevents unwanted changes from reaching the application buffer.
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html) excludes the operation in question from [authorization checks](ABENBDL_AUTHORIZATION.html).
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies global authorization checks instead.
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies instance authorization checks instead.
-   Input parameters [`InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html) and output parameters [`OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html) can optionally be added to the action signature.
-   [`default function`](ABENBDL_DEFAULT_FUNCTION.html) defines a [RAP default values function](ABENRAP_BO_DEFAULTING_GLOSRY.html) for the action in question. It is an optional addition that can be used to default values for the input parameter of the action. As a prerequisite, the action must specify an input parameter.

-   From an external [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html).
-   In the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html), from a [`finalize`](ABENSAVER_FINALIZE.html) or [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) RAP saver method, according to the specification in brackets.
-   A `save(finalize)` action can be called from the implementation of a [RAP determination](ABENRAP_DETERMINATION_GLOSRY.html)\\ `on save`.
-   **Note** This does not apply to `save(adjustnumbers)` actions. `save(adjustnumbers)` actions must not be called in determinations `on save`. Any attempt to do so results in a short dump.
-   **Caution** If a determination `on save` is executed as part of a [RAP BO determine action](ABENRAP_BO_DET_ACTION_GLOSRY.html), the execution takes place during the interaction phase. Therefore, if a RAP save action is called in a determination `on save` and the determination is executed as part of a determine action, a short dump occurs.

-   A RAP saver method other than the one specified in brackets. For example, a `save(finalize)` action must not be called during the RAP saver method `adjust_numbers`. Any attempt to do so leads to a syntax check error.
-   In the implementation of a [RAP determination](ABENRAP_DETERMINATION_GLOSRY.html)\\ `on modify`. If this is done, a short dump occurs.
-   If called from the implementation of any other [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html), a short dump occurs.
-   **Note** Save actions cannot be called from other save actions of the same saver method. For example, a `save(adjustnumber)` cannot call another `save(adjustnumber)` action. Any attempt to do so results in a short dump.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html), save actions from the base BDEF can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).
-   In a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), save actions from the base BDEF can be reused. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

-   Save actions without a RAP saver method specification are obsolete. The following syntax is not valid: `save action MySaveAction`. Existing save actions that do not specify a RAP saver method in brackets are automatically interpreted as `save(finalize)`.
-   RAP save actions are required for the RAP representation of certain existing functionality which does not maintain a [transactional buffer](ABENTRANSACTIONAL_BUFFER_GLOSRY.html) but (from a RAP perspective) only has a save phase.

-   The `save(finalize) action A1` can be called from an external EML consumer as demonstrated in the following code snippet:

-   The `save(finalize) action A1` can be called from the RAP saver method `finalize` as follows:

-   The `save(finalize) action A1` can be called from the implementation of a determination `on save` from another RAP BO, namely, `DEMO_RAP_SAVE_ACTION_M`.

unmanaged implementation in class bp\_demo\_rap\_save\_action\_u unique;\\nstrict ( 2 );\\n\\ndefine behavior for DEMO\_RAP\_SAVE\_ACTION\_U alias Root\\nlate numbering\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(readonly) key\_field;\\n\\n save ( finalize ) action A1;\\n static save ( adjustnumbers ) action A2;\\n factory save ( finalize, adjustnumbers ) action A3 \[1\];\\n static factory save ( finalize, adjustnumbers ) action A4 \[1\];\\n\\} MODIFY ENTITIES OF DEMO\_RAP\_SAVE\_ACTION\_U \\n ENTITY Root \\n EXECUTE A1 \\n FROM VALUE #( ( %key-key\_field = 1 ) ). \\n COMMIT ENTITIES. METHOD finalize. \\n MODIFY ENTITIES OF demo\_rap\_save\_action\_u IN LOCAL MODE \\n ENTITY Root \\n EXECUTE A1 \\n FROM VALUE #( ( %key-key\_field = 2 ) ). \\nENDMETHOD. METHOD det\_on\_save. \\n MODIFY ENTITIES OF demo\_rap\_save\_action\_u \\n ENTITY Root \\n EXECUTE a1 \\n FROM VALUE #( ( %key-key\_field = 1 ) ) \\n FAILED DATA(failed). \\nENDMETHOD. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_nonstandard.html abenbdl\_action.html