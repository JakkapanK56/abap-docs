---
title: "ABENBDL_ACTIONS_FC"
description: |
  ABENBDL_ACTIONS_FC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ACTIONS_FC.htm"
abapFile: "ABENBDL_ACTIONS_FC.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "ABENBDL", "ACTIONS"]
---

`... (features:instance)    | (features:global) ...`

[1. `... (features:instance)`](#ABAP_VARIANT_1@1@)

[2. `... (features:global)`](#ABAP_VARIANT_2@1@)

Defines [feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html) for a [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html). With feature control, operations can be enabled or disabled.

There are two variants available:

If an operation is disabled by means of instance feature control, it is grayed out on the user interface of an OData application. If an external [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) tries to execute a disabled operation with EML, the operation fails and an entry is returned in the [`failed`](ABAPEML_RESPONSE.html) structure.

Instance feature control enables or disables operations depending on the state of the BO entity instance. Instance feature control can be defined for the following operations:

The following example shows a managed BDEF that defines dynamic feature control for the standard operation `update`.

In the ABAP behavior pool, the following is specified: if field `int_field1` > 50, then the update operation is disabled.

For the complete implementation, see `BP_DEMO_RAP_OPERATION_FC======CCIMP`

The ABAP class `CL_DEMO_RAP_FC_OPERATION` uses [EML](ABENEML_GLOSRY.html) to access the RAP business object.

Result: the first entity instance is updated successfully. For the second entity instance, the update operation fails and an entry is returned in the `failed` structure. The update was prevented by the dynamic feature control runtime check.

Global feature control enables or disables operations depending on the state of an entity instance. Global feature control can be defined for the following operations:

The following example shows an unmanaged BDEF that defines global feature control for the standard operation `delete`.

In the ABAP behavior pool, the following is specified: delete operations are allowed only in the time period between 10 pm and 6 am.

For the complete implementation, see `BP_DEMO_RAP_UNMANAGED_FC======CCIMP`

The ABAP class `CL_DEMO_RAP_UNMANAGED_FC` uses [EML](ABENEML_GLOSRY.html) to access the RAP business object.

Result: In this example, the delete operation is not allowed and an error message is returned.

-   [Instance feature control](ABENRAP_INS_FEATURE_CONTROL_GLOSRY.html)
-   Operations of a business object can be enabled or disabled depending on instance-specific criteria, for example on the value of a specific field or the value of referenced data. For example, if the status of a BO instance is set to *archived*, all modifying operations can be disabled by means of instance feature control.
-   An implementation in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR INSTANCE FEATURES`](ABAPHANDLER_METH_FEATURES.html) is mandatory.
-   [Global feature control](ABENRAP_GLO_FEATURE_CONTROL_GLOSRY.html)
-   Operations of a business object can be enabled or disabled globally. That means, the decision is independent of the state of the individual entity instance. An operation can be globally enabled or disabled, for example, by interpreting a feature toggle state.
-   An implementation in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR GLOBAL FEATURES`](ABAPHANDLER_METH_GLOBAL_FEATURES.html) is mandatory.

-   Feature control cannot be used for [internal operations](ABENBDL_INTERNAL.html).
-   For [static RAP BO operations](ABENRAP_STATIC_OPERATION_GLOSRY.html), only global feature control is available. Instance feature control is not available.
-   Feature control runtime checks are not evaluated for EML calls with the addition [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html).
-   The EML statement [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) can be used to get information about disabled operations.
-   In UI scenarios, feature control is displayed as [RAP consumer hint](ABENRAP_CONSUMER_HINT_GLOSRY.html).

-   Development guide for the ABAP RESTful Application Programming Model, section [Feature Control](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/a5055eef86fa492d99a29b3a9c7c2b88?version=sap_cross_product_abap).

-   The [standard operations](ABENBDL_STANDARD_OPERATIONS.html)\\ `update` and `delete`
-   [Operations for associations](ABENBDL_ASSOCIATION.html)
-   [Actions](ABENBDL_ACTION.html)
-   The [draft action `Edit`](ABENBDL_DRAFT_ACTION.html).
-   [RAP hierarchy actions](ABENRAP_HIERARCHY_ACTION_GLOSRY.html)

-   First, it inserts two entity instances directly onto the database using ABAP SQL `INSERT`:

-   One of them has the value '1' for field `int_field1`.
-   The second one has value '55' for field `int_field1`. Therefore, it fulfills the condition that triggers feature control: for this instance, the update operation is disabled.

-   An EML [`UPDATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) operation is executed on both instances, which updates field `int_field2`.
-   Using the ABAP SQL [`SELECT`](ABAPSELECT.html) statement, the content of the underlying database table is displayed.

-   The [standard operations](ABENBDL_STANDARD_OPERATIONS.html)\\ `create`, `update`, and `delete`
-   [Operations for associations](ABENBDL_ASSOCIATION.html)
-   [Actions](ABENBDL_ACTION.html)
-   [RAP hierarchy actions](ABENRAP_HIERARCHY_ACTION_GLOSRY.html)

-   Three entity instances are created.
-   An attempt is made to delete one of the entity instances.

-   In the time period between 10 pm and 6 am (night shift), the delete operation is successful.
-   In the time period between 6 am and 10 pm (day shift), the delete operation is disabled and an error message is returned.

managed implementation in class bp\_demo\_rap\_operation\_fc unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_OPERATION\_FC\\npersistent table demo\_dbtab\_field\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update ( features : instance );\\n delete;\\n field(readonly:update) key\_field;\\n\\} METHOD get\_instance\_features. \\n READ ENTITIES OF demo\_rap\_operation\_fc IN LOCAL MODE \\n ENTITY demo\_rap\_operation\_fc \\n FIELDS ( int\_field1 int\_field2 ) WITH CORRESPONDING #( keys ) \\n RESULT DATA(lt\_result) \\n FAILED failed. \\n\\ \\n result = VALUE #( FOR ls\_result IN lt\_result \\n ( %key = ls\_result-%key \\n %features-%update = COND #( WHEN ls\_result-int\_field1 > 50 \\n THEN if\_abap\_behv=>fc-o-disabled \\n ELSE if\_abap\_behv=>fc-o-enabled \\n ) ) ). \\n\\ \\nENDMETHOD. unmanaged implementation in class bp\_demo\_rap\_unmanaged\_fc unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_UNMANAGED\_FC\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete ( features : global );\\n field ( readonly:update ) key\_field;\\n\\} METHOD get\_global\_features. \\n DATA(time1) = CONV t( '060000' ). \\n DATA(time2) = CONV t( '220000' ). \\n\\ \\n result = VALUE #( %delete = COND #( \\n WHEN cl\_demo\_date\_time=>get\_system\_time( ) \\n BETWEEN time1 AND time2 \\n THEN if\_abap\_behv=>fc-o-disabled \\n ELSE if\_abap\_behv=>fc-o-enabled ) \\n ). \\n\\ \\n IF result-%delete = if\_abap\_behv=>fc-o-disabled. \\n APPEND VALUE #( %msg = new\_message\_with\_text( \\n text = 'Delete is only allowed between 10 pm and 6 am.' \\n severity = if\_abap\_behv\_message=>severity-error ) \\n %global = if\_abap\_behv=>mk-on ) \\n TO reported-demo\_rap\_unmanaged\_fc. \\n ENDIF. \\nENDMETHOD. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html