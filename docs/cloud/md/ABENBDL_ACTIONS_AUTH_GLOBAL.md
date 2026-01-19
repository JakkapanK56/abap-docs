---
title: "ABENBDL_ACTIONS_AUTH_GLOBAL"
description: |
  ABENBDL_ACTIONS_AUTH_GLOBAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_ACTIONS_AUTH_GLOBAL.htm"
abapFile: "ABENBDL_ACTIONS_AUTH_GLOBAL.html"
keywords: ["update", "delete", "do", "if", "method", "class", "ABENBDL", "ACTIONS", "AUTH", "GLOBAL"]
---

`... (authorization:global) ...`

The [RAP BO operation addition](ABENBDL_OPERATIONS_ADDITIONS.html)\\ `authorization:global` replaces the [authorization control](ABENBDL_AUTHORIZATION.html) that is specified in the [authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html) and applies global authorization checks instead. It can be used for [actions](ABENBDL_ACTION.html) and [determine actions](ABENBDL_DETERMINE_ACTION.html) in authorization master and authorization dependent entities. It can also be used for [create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html) for [to-child associations](ABENTO_CHILD_ASSOCIATION_GLOSRY.html).

It is possible to combine the additions `authorization:global` and [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) for an action, a determine action, or a create-by-association. Then, both [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html), [`FOR GLOBAL AUTHORIZATION`](ABAPHANDLER_METH_GLOBAL_AUTH.html) and [`FOR INSTANCE AUTHORIZATION`](ABAPHANDLER_METH_AUTH.html), are checked before the action is executed. Examples:

action ( authorization : global, authorization : instance ) MyAction;

association \_child\\{ create(authorization:global, authorization:instance); \\}

If no authorization control is specified for an action or create-by-association, the authorization mode of the [authorization master](ABENBDL_AUTHORIZATION.html) (`global`, `instance`, or both) is used for the operation by default.

This example demonstrates authorization control for RAP actions in a BDEF extension. The base behavior definition `DEMO_RAP_AUTH_GLOBAL` defines instance-based authorization control in the authorization master entity.

The BDEF extension `DEMO_RAP_AUTH_GLOBAL_X1` defines new extension actions with an authorization control that replaces the authorization control from the original BDEF. The extension actions and the respective authorization control are implemented in the extension ABAP behavior pool.

-   In managed, unmanaged, and projection RAP BOs, authorization control can be specified in the authorization master entity and applies to all operations. The operation additions [`authorization:none`](ABENBDL_ACTIONS_AUTH.html), [`authorization:update`](ABENBDL_ACTIONS_AUTH_UPDATE.html), `authorization:global`, and [`authorization:instance`](ABENBDL_ACTIONS_AUTH_INSTANCE.html) are optional. However, in [base BDEF extensions](ABENRAP_BASE_BDEF_EXT_GLOSRY.html), authorization control must be specified for each operation separately. The reason for this is that the authorization control of extension operations should be independent of the authorization control of the original RAP BO to ensure stability even if the original BO is changed.
-   The addition `authorization:global` cannot be used for [internal operations](ABENBDL_INTERNAL.html).

-   Development guide for the ABAP RESTful Application Programming Model, [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap) and [Authorization Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/2a26db5640364b46b843dca786c495d1?version=sap_cross_product_abap)
-   For more information about authorization control in RAP, see [RAP - Authorization](ABENBDL_AUTHORIZATION.html).

managed implementation in class bp\_demo\_rap\_auth\_global unique;\\nstrict ( 2 );\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_AUTH\_GLOBAL alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\nextensible\\n\\n\\{\\n create;\\n update;\\n delete;\\n\\n field ( readonly ) key\_field;\\n\\} extension using interface DEMO\_RAP\_GLOBAL\_AUTH\_INT\\nimplementation in class bp\_demo\_rap\_auth\_global\_x1 unique;\\n\\nextend behavior for Root\\n\\{\\n\\n action ( authorization : instance ) ext1AuthInstance;\\n action ( authorization : global ) ext1AuthGlobal;\\n action ( authorization : global, authorization : instance )\\n ext1AuthGlobalInstance;\\n action ( authorization : none ) ext1AuthNone;\\n\\n association \_child \\{ create; \\}\\n\\}\\ndefine behavior for DEMO\_RAP\_AUTH\_GLOBAL\_CH alias Child\\n using DEMO\_RAP\_GLOBAL\_AUTH\_INT\_CH\\npersistent table demo\_dbtab\_child\\nlock dependent\\nauthorization dependent\\n\\{\\n update;\\n delete;\\n field ( readonly ) key\_field, key\_field\_child;\\n association \_parent;\\n\\n action ( authorization : update ) ext1AuthUpdate;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_operations\_additions.html