---
title: "ABENBDL_ACTIONS_AUTH"
description: |
  ABENBDL_ACTIONS_AUTH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ACTIONS_AUTH.htm"
abapFile: "ABENBDL_ACTIONS_AUTH.html"
keywords: ["update", "delete", "do", "if", "case", "ABENBDL", "ACTIONS", "AUTH"]
---

`... (authorization:none) ...`

The RAP BO operation addition `authorization:none` excludes the operation in question from [authorization checks](ABENBDL_AUTHORIZATION.html). As a prerequisite, [authorization control](ABENBDL_AUTHORIZATION.html) must be defined and implemented.

`authorization:none` can be used for the following operations:

For actions and determine actions, the addition `(authorization:none)` can be used in authorization master and authorization dependent entities.

For standard operations, operations for associations, and the draft action `Edit`, this addition can be used in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) only.

This example demonstrates the notation in the RAP behavior definition.

-   The [standard operations `create`, `update`, and  `delete`](ABENBDL_STANDARD_OPERATIONS.html)
-   **Note** For the standard operation `create`, the addition `authorization:none` is only available in case of global authorization.
-   [Operations for associations](ABENBDL_ASSOCIATION.html)
-   [Actions](ABENBDL_ACTION.html)
-   **Note** For static actions, the addition `authorization:none` is only available in case of global authorization.
-   [Determine actions](ABENBDL_DETERMINE_ACTION.html)
-   The [draft action `Edit`](ABENBDL_DRAFT_ACTION.html)
-   [RAP hierarchy actions](ABENRAP_HIERARCHY_ACTION_GLOSRY.html)

-   For details on authorization control in RAP, see topic [RAP - Authorization](ABENBDL_AUTHORIZATION.html).
-   In managed, unmanaged, and projection RAP BOs, authorization control can be specified in the authorization master entity and applies to all actions. The operation additions `authorization:none`, [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html), [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html), and [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) are optional. However, in [base BDEF extensions](ABENRAP_BASE_BDEF_EXT_GLOSRY.html), authorization control must be specified for each action separately. The reason for this is that the authorization control of extension actions should be independent of the authorization control of the original RAP BO to ensure stability even if the original BO is changed.

-   Development guide for the ABAP RESTful Application Programming Model, section [Authorization Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/2a26db5640364b46b843dca786c495d1?version=sap_cross_product_abap).

-   Standard operation: `delete (authorization:none);`
-   Association: `association _MyAssoc \{ create(authorization:none); \}`
-   Action: `action (authorization:none) MyAction;`
-   Determine action: `determine action (authorization:none) MyDetAction\{ ... \}`
-   Draft action: `draft action (authorization:none) Edit;`

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html