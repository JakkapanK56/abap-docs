---
title: "ABENBDL_AUTHORIZATION_PROJECTION"
description: |
  ABENBDL_AUTHORIZATION_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_AUTHORIZATION_PROJECTION.htm"
abapFile: "ABENBDL_AUTHORIZATION_PROJECTION.html"
keywords: ["update", "do", "if", "method", "ABENBDL", "AUTHORIZATION", "PROJECTION"]
---

\\ `... authorization \{( global )                    |( instance )                    |( global,instance )\}  ...`

In a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html), the [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html) from the underlying [base BDEF](ABENRAP_BASE_BDEF_GLOSRY.html) is inherited. This controls [CRUD operations](ABENCRUD_GLOSRY.html) and [actions](ABENBDL_ACTION.html) that are reused in the projection using the [`use action`](ABENBDL_USE_PROJECTION.html) syntax.

Projection BDEFs can also define their own actions as described in the topic [RAP - `action`, Projection BDEF](ABENBDL_NONSTANDARD_PROJECTION.html). For these actions, it is possible to configure authorization control in the projection layer. For global authorization, this is done in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR GLOBAL AUTHORIZATION`](ABAPHANDLER_METH_GLOBAL_AUTH.html) in the local [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). For instance authorization, this is done in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR INSTANCE AUTHORIZATION`](ABAPHANDLER_METH_AUTH.html) in the local [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

Authorization control in projection BDEFs is similar to authorizations in base BDEFs (see topic [RAP - Authorization](ABENBDL_AUTHORIZATION.html)). Here are the main differences:

The authorization control that is defined for a RAP BO entity applies to all RAP BO operations of that entity. The following RAP BO operation additions can be used to control the authorization checks for individual RAP BO operations:

In UI scenarios, authorization control is displayed as [RAP consumer hint](ABENRAP_CONSUMER_HINT_GLOSRY.html).

-   To define authorization control in a projection BDEF, the projection BDEF must enable [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) using the syntax [`strict[(version)]`](ABENBDL_STRICT.html).
-   There is no master/dependent relation. Each projection definition must declare for itself whether it has instance authorization, global authorization, or both.

-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html) excludes the operation in question from authorization checks. See the topic [RAP - `authorization:none`](ABENBDL_ACTIONS_AUTH.html) for further details.
-   If [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) is used, the operation in question has the same authorization control that is defined in the base BDEF for the update operation. As a prerequisite, it is required that the projection BDEF defines authorization control in its entity behavior characteristics. This configuration in the projection BDEF, however, (`instance` or `global`) has no impact, the settings from the base BO (`instance`, `global`, or both) are fully reused. See the second example listed in this topic. See the topic [RAP - `authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) for further details.
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) specifies global authorization control for the action in question. If authorization control is also defined at entity level, the specification at action level replaces the specification at entity level. Authorization control at entity level is not a prerequisite though. See the topic [RAP - `authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) for further details.
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) specifies instance authorization control for the action in question. If authorization control is also defined at entity level, the specification at action level replaces the specification at entity level. Authorization control at entity level is not a prerequisite though. See topic [RAP - `authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) for further details.
-   `authorization:global, authorization:instance` performs both instance authorization control and global authorization control for the action in question.

-   Development guide for the ABAP RESTful Application Programming Model, topic [Authorization Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/2a26db5640364b46b843dca786c495d1?version=sap_cross_product_abap).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_character\_projection.html