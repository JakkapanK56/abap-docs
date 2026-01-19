---
title: "ABENBDL_ACTIONS_AUTH_UPDATE"
description: |
  ABENBDL_ACTIONS_AUTH_UPDATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ACTIONS_AUTH_UPDATE.htm"
abapFile: "ABENBDL_ACTIONS_AUTH_UPDATE.html"
keywords: ["update", "delete", "do", "if", "ABENBDL", "ACTIONS", "AUTH", "UPDATE"]
---

`... (authorization:update) ...`

The RAP BO operation addition `authorization:update` delegates the [authorization check](ABENBDL_AUTHORIZATION.html) for the operation in question to the update operation. That means that an operation specified as `authorization:update` has the same authorization control that is specified for the update operation.

As a prerequisite, [authorization control](ABENBDL_AUTHORIZATION.html) must be defined and implemented. However, it is not required that the update operation is enabled for the entity in question. You can delegate the authorization for operations to the update operation even though the update operation is not enabled for this entity.

The addition `authorization:update` can be used for the following operations:

An example for `authorization:update` in a projection BDEF is provided in the topic about authorization control in projection BDEFs, see [RAP BDL - authorization, projection BDEF](ABENBDL_AUTHORIZATION_PROJECTION.html).

-   The [standard operation `delete`](ABENBDL_STANDARD_OPERATIONS.html)
-   The [create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html) operation
-   [Actions](ABENBDL_ACTION.html)
-   [Determine actions](ABENBDL_DETERMINE_ACTION.html)
-   [RAP hierarchy actions](ABENRAP_HIERARCHY_ACTION_GLOSRY.html)

-   Development guide for the ABAP RESTful Application Programming Model, section [Authorization Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/2a26db5640364b46b843dca786c495d1?version=sap_cross_product_abap).

-   For details on authorization control in RAP, see topic [RAP - Authorization](ABENBDL_AUTHORIZATION.html).
-   Standard operations in authorization-dependent entities are automatically delegated to the update operation of the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html).
-   If you delegate the authorization for an [action](ABENRAP_ACTION_GLOSRY.html) in an authorization-dependent entity to the update operation, it will be delegated to the update operation of the authorization master entity in the end.
-   In managed, unmanaged, and projection RAP BOs, authorization control can be specified in the authorization master entity and applies to all actions. The operation additions [`authorization:none`](ABENBDL_ACTIONS_AUTH.html), `authorization:update`, [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html), and [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) are optional. However, in [base BDEF extensions](ABENRAP_BASE_BDEF_EXT_GLOSRY.html), authorization control must be specified for each action separately. The reason for this is that the authorization control of extension actions should be independent of the authorization control of the original RAP BO to ensure stability even if the original BO is changed.
-   `authorization:update` cannot be used for [internal operations](ABENBDL_INTERNAL.html). Internal actions do not have authorization checks in general, as they are only invoked internally.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html