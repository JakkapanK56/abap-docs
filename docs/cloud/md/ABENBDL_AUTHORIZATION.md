---
title: "ABENBDL_AUTHORIZATION"
description: |
  ABENBDL_AUTHORIZATION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_AUTHORIZATION.htm"
abapFile: "ABENBDL_AUTHORIZATION.html"
keywords: ["update", "delete", "do", "while", "if", "case", "method", "data", "types", "ABENBDL", "AUTHORIZATION"]
---

`... authorization master \{( global )                           |( instance )                           |( global, instance )                           |( none )\}\    | authorization dependent by _Assoc ...`

[Authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) in RAP protects your business object against unauthorized access to data. Authorization control is defined in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) for each [entity behavior definition](ABENCDS_ENTITY_BDEF_GLOSRY.html) separately and it must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

Authorization control in RAP manages access to various RAP operations: create, update, delete, [create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html), and [RAP actions](ABENRAP_ACTION_GLOSRY.html). The read operation is provided by CDS and governed by CDS access control. There are different methods for implementing various types of authorization control.

Authorization control is declared in several locations. First, it is defined in the [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html) for each RAP BO entity. This declaration defines the default authorization control for that entity: instance, global, instance and global, or none. The authorization control that is defined for a RAP BO entity applies to all [RAP BO operations](ABENRAP_BO_OPERATION_GLOSRY.html) of that particular entity.

Then, within the entity behavior body, exceptions to the rule can be defined in the behavior characteristics for each RAP BO operation in a behavior. For example, a RAP action might have global authorization, while all other actions default to instance authorization. Alternatively, an operation might have none, meaning no authorization control is applied.

The following RAP BO operation additions can be used to control authorization checks for individual RAP BO operations:

RAP BO entities must be specified either as authorization master or authorization-dependent entities:

The following rules apply:

The following types of authorization control are available:

Authorization checks can be implemented, for example, using [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html).

The example above is explained in detail in the executable example [RAP BDL - global authorization](ABENBDL_AUTHORIZATION_ABEXA.html).

-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html)
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)

-   [RAP authorization master entities](ABENRAP_AUTH_MA_ENT_GLOSRY.html) have their own authorization implementation in the ABAP behavior pool in the corresponding method for authorization (global or instance). The implementation is used when requesting access to the authorization master entity or to any of its authorization-dependent entities.
-   [RAP authorization dependent entities](ABENRAP_AUTH_DEP_ENT_GLOSRY.html) use the authorization control that is defined on the related authorization master entity. Authorization requests are delegated to the implementation of the authorization master entity. For update, delete, and create-by-association operations on an authorization-dependent entity, the authorization check for update of the authorization master entity is applied. For [CDS to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html), you can deviate from this default by specifying separate authorizations for create-by-association operations.

-   Each RAP BO entity must be declared as [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) or as [authorization dependent entity](ABENRAP_AUTH_DEP_ENT_GLOSRY.html) using the syntax `authorization master (...)` or `authorization dependent by _Assoc`.
-   The [RAP BO root entity](ABENRAP_BO_ROOT_ENTITY_GLOSRY.html) must be defined as authorization master entity. All other RAP BO entities can be either authorization master or authorization-dependent entities.
-   If the authorization master entity is not the parent entity of the authorization-dependent entity, then the association to the authorization master entity must be explicitly defined in the entity behavior definition using the syntax `association _AssocToAuthMaster \{ \}`.
-   In the following cases, the authorization control must be implemented in separate methods for authorization in the behavior pool of the authorization-dependent entity:

-   [actions](ABENBDL_ACTION.html) of authorization dependent entities
-   create-enabled [cross-BO associations](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html)
-   create-enabled associations that are not to-child associations

-   `global`

-   Limits access to data or the permission to perform certain operations for a complete RAP BO, independent of individual instances, for example, depending on user roles.
-   Can be specified for the following operations of an entity: [create](ABENBDL_STANDARD_OPERATIONS.html), [create by association](ABENRAP_CBA_OPERATION_GLOSRY.html), [update](ABENBDL_STANDARD_OPERATIONS.html), [delete](ABENBDL_STANDARD_OPERATIONS.html), [static actions](ABENBDL_ACTION.html), [instance actions](ABENBDL_ACTION.html).
-   Must be implemented in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR GLOBAL AUTHORIZATION`](ABAPHANDLER_METH_GLOBAL_AUTH.html).

-   `instance`

-   Authorization check that is dependent on the state of an entity instance.
-   Can be specified for the following operations of an entity: [create by association](ABENBDL_ASSOCIATION.html), [update](ABENBDL_STANDARD_OPERATIONS.html), [delete](ABENBDL_STANDARD_OPERATIONS.html), [instance actions](ABENBDL_ACTION.html).
-   Must be implemented in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR INSTANCE AUTHORIZATION`](ABAPHANDLER_METH_AUTH.html).

-   `global, instance`

-   Global and instance authorization control can be combined. In this case, instance-based operations are checked in the global and in the instance authority check. Both RAP handler methods, [`FOR GLOBAL AUTHORIZATION`](ABAPHANDLER_METH_GLOBAL_AUTH.html) and [`FOR INSTANCE AUTHORIZATION`](ABAPHANDLER_METH_AUTH.html), must be implemented. The checks are executed at different points in time during runtime.

-   `none`

-   Can be specified for an authorization master entity to define that there are no authorization checks for the entire RAP BO. When `none` is specified, it is not possible to implement [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) for authorizations.

-   Managed RAP BO
-   In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), if the root entity is specified as `authorization master`, the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) checks each [RAP BO operation](ABENRAP_BO_OPERATION_GLOSRY.html) for any access restrictions.
-   Unmanaged RAP BO
-   In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), and if global authorization control is specified, the RAP framework checks each RAP BO operation for any access restrictions.
-   Draft-enabled RAP BO
-   In a [draft-enabled RAP BO](ABENBDL_WITH_DRAFT.html), the RAP framework checks for each [standard operation](ABENBDL_STANDARD_OPERATIONS.html) on a draft instance whether there are any access restrictions. For the [draft actions](ABENBDL_DRAFT_ACTION.html)\\ `Resume` and `Edit`, the authorization control for [create](ABENBDL_STANDARD_OPERATIONS.html) is checked. For the draft actions `Activate`, `Discard`, and `Prepare`, the authorization methods are not called. To prevent a draft instance from activation, the authorization check has to be implemented in a [validation](ABENBDL_VALIDATIONS.html).
-   Projection BO
-   In a [projection business object](ABENRAP_PROJECTION_BO_GLOSRY.html), the authorization from the [base business object](ABENRAP_PROJECTED_BO_GLOSRY.html) is automatically inherited. If [new actions or functions](ABENBDL_NONSTANDARD_PROJECTION.html) are defined in the projection layer, a new authorization control for these actions and functions can be defined. For further details, see topic [RAP - `authorization`, Projection BDEF](ABENBDL_AUTHORIZATION_PROJECTION.html).
-   [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html)
-   In a RAP BO interface, the authorization control from the base BO is automatically inherited.

-   The EML statement [`IN LOCAL MODE`](ABAPIN_LOCAL_MODE.html) can be used to skip authorization control.
-   A [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) can use the EML statement [`GET PERMISSIONS`](ABAPGET_PERMISSIONS.html) to check whether a RAP BO has authorization control implemented.
-   To limit read access to a business object, [Data Control Language (DCL)](ABENDCL_GLOSRY.html) can be used. These CDS access controls defined in [Data Control Language (DCL)](ABENDCL_GLOSRY.html) are passed on from the base layer to the RAP BO projection and the RAP BO interface. An executable example that demonstrates how read access control is implemented and evaluated can be found in topic [RAP BDL - RAP BO with DCL Access Control](ABENBDL_DRAFT_QUERY_ABEXA.html).
-   Authorizations can also be checked in other ABP methods, for example, in [validations](ABENBDL_VALIDATIONS.html).
-   In UI scenarios, authorization control is displayed as RAP consumer hint.
-   In [BDEF extensions](ABENRAP_EXTENSION_GLOSRY.html) to managed and unmanaged RAP BOs, authorization control must be specified for each action separately. The reason for this is that the authorization control of extension actions should be independent of the authorization control of the original RAP BO to ensure stability even if the original BO is changed.
-   The following syntax short form is available to summarize lock dependent, ETag dependent, and authorization dependent:
-   `([lock][, authorization][, etag]) dependent by _assoc`
-   For details, see topic [RAP - `SyntaxShortForm`](ABENBDL_SHORT_SYNTAX.html).

-   Development guide for the ABAP RESTful Application Programming Model, section [Authorization Control](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/375a8124b22948688ac1c55297868d06?version=sap_cross_product_abap).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html