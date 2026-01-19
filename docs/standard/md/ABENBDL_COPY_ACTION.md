---
title: "ABENBDL_COPY_ACTION"
description: |
  ABENBDL_COPY_ACTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_COPY_ACTION.htm"
abapFile: "ABENBDL_COPY_ACTION.html"
keywords: ["update", "if", "method", "types", "ABENBDL", "COPY", "ACTION"]
---

``copy action  \ [(     [[`features: \{instance | global\}`](ABENBDL_ACTIONS_FC.html)]\     [[`precheck`](ABENBDL_PRECHECK.html)]\     [[`authorization:none`](ABENBDL_ACTIONS_AUTH.html)]\     [[`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html)]\     [[`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html)]\     [[`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html)]\     [[`lock:none`](ABENBDL_LOCK_NONE.html)]\    )]\    ActionName [external 'ExternalName'];``

The copy action is a  [RAP hierarchy action](ABENRAP_HIERARCHY_ACTION_GLOSRY.html) that determines how a [hierarchy node](ABENHIERARCHY_NODE_GLOSRY.html) can be duplicated in an editable scenario. It is useful for creating new hierarchy nodes based on an existing one in an editable [treeview scenarios](ABENRAP_TREEVIEW_GLOSRY.html).

Copy actions are specified within curly brackets after the syntax [`instance hierarchy`](ABENBDL_INSTANCE_HIERARCHY.html). They are optional and can be specified in the context of an instance hierarchy only.

Copy actions are instance-bound [factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html), i.e. they offer [`%cid`](ABAPDERIVED_TYPES_CID.html)  handling for the result instance. Copy actions are implemented by the [unmanaged RAP BO provider](ABENUNMANAGED_RAP_BO_PROV_GLOSRY.html) in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR MODIFY`](ABAPHANDLER_METH_MODIFY.html). They are user-implemented.

The following [RAP BDL operation additions](ABENBDL_OPERATIONS_ADDITIONS.html) are possible:

**Note** If multiple RAP BO operation additions are used, they are separated by a comma.

-   Dynamic feature control with [`(features:instance)`](ABENBDL_ACTIONS_FC.html). This enables or disables the copy action depending on preconditions within the business object.
-   Global feature control with [`(features:global)`](ABENBDL_ACTIONS_FC.html) enables or disables the copy action depending on BO-external preconditions.
-   [`precheck`](ABENBDL_PRECHECK.html) prevents unwanted changes from reaching the application buffer.
-   [`authorization:none`](ABENBDL_ACTIONS_AUTH.html) excludes the operation in question from [authorization checks](ABENBDL_AUTHORIZATION.html).
-   [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html) delegates the [authorization control](ABENBDL_AUTHORIZATION.html) to the authorization check that is implemented for the update operation.
-   [`authorization:global`](ABENBDL_ACTIONS_AUTH_GLOBAL.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies global authorization checks instead.
-   [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies instance authorization checks instead.
-   [`lock:none`](ABENBDL_LOCK_NONE.html) to prevent the [RAP locking](ABENRAP_LOCKING_GLOSRY.html) mechanism for the entity instance for which the action is executed.
-   [`external`](ABENBDL_EXTERNAL.html): Optional addition to provide an alias name for external usage.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   In a [projection BO](ABENRAP_PROJECTION_BO_GLOSRY.html) and in a [RAP BO interface](ABENRAP_BO_INTERFACE_GLOSRY.html), copy actions from the base BDEF can be reused using the syntax `use action ActionName`. For details on reuse, see topic [RAP - `use`, Projection and Interface BDEF](ABENBDL_USE_PROJECTION.html).

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_instance\_hierarchy.html