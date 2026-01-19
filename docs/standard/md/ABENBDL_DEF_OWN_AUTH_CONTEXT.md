---
title: "ABENBDL_DEF_OWN_AUTH_CONTEXT"
description: |
  ABENBDL_DEF_OWN_AUTH_CONTEXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_DEF_OWN_AUTH_CONTEXT.htm"
abapFile: "ABENBDL_DEF_OWN_AUTH_CONTEXT.html"
keywords: ["update", "delete", "do", "if", "method", "class", "data", "ABENBDL", "DEF", "OWN", "AUTH", "CONTEXT"]
---

``define own authorization context by privileged mode;  | define own authorization context by privileged mode and    \{    [[`AuthObject1`](ABENBC_AUTHORITY_CHECK.html);]\    [[`AuthObject2`](ABENBC_AUTHORITY_CHECK.html);]\    [...]\    \}  | define own authorization context    \{    [[`AuthObject1`](ABENBC_AUTHORITY_CHECK.html);]\    [[`AuthObject2`](ABENBC_AUTHORITY_CHECK.html);]\    [...]\    \}``

Defines a [full authorization context](ABENCDS_OWN_AC_GLOSRY.html) for a RAP BO. A full authorization context lists one or multiple [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html) which are checked by the implementation methods of the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) itself, by existing code that is called by the ABAP behavior pool implementation, or by [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) defined for the related [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html) in the data modeling layer. The full authorization context documents the authorization objects used in the implementation of the RAP BO in question. It must be complete and exhaustive.

Three different notation options exist:

A full authorization context may be defined before, between, or after the [entity behavior definitions](ABENCDS_ENTITY_BDEF_GLOSRY.html). It is possible to define an empty full authorization context `define own authorization context \{ ... \}`. One RAP behavior definition can have no more than one full authorization context.

All authorization objects listed in a full authorization context which are allowed in a privileged authorization context as per their configuration must be listed in a privileged context. Otherwise, a syntax check warning occurs.

The following managed BDEF defines three authorization contexts:

`with privileged mode disabling` disables `ac_priv` and the full authorization context reuses the authorization objects listed in `ac_priv`. It adds one further authorization object to the full authorization context.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [*FOR INSTANCE AUTHORIZATION*](ABAPHANDLER_METH_AUTH.html) is not implemented here. In a real-life scenario, the authorization objects from the full authorization context would be implemented in this RAP handler method.

-   `define own authorization context by privileged mode;`
-   When using this option, the authorization context `ContextName` specified after [`with privileged mode disabling ContextName`](ABENBDL_PRIVILEGED_MODE.html) is copied to the full authorization context. In other words, the authorization objects which are disabled in [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html) are automatically reused for the full authorization context.
-   You can use this notation when the full authorization context is identical to the context used for the privileged mode, meaning when privileged mode disables all authorization objects without exception.
-   `define own authorization context by privileged mode and \{...\}`
-   This syntax variant copies all authorization objects which are disabled in BDEF privileged mode and it allows you to specify further authorization objects `AuthObject1, AuthObject2, ...` after `and` for the full authorization context.
-   `define own authorization context \{...\}`
-   When using this option, you must individually list all authorization objects `AuthObject1`, `AuthObject2`, .... that are checked in the ABAP behavior pool. This syntax variant is useful for a BDEF without privileged mode.

-   [Managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [Unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [Projection BDEF](ABENRAP_PROJECTION_BO_GLOSRY.html): A projection BDEF can define a full authorization context independently of the projected BDEF. This means that a full authorization context can be defined in the projection layer even if the projected entity does not have a full authorization context.

-   In transaction `SAAB`, contract check `CC_RAP_CONTRACT` can be switched on. This contract check enforces a complete and exhaustive full authorization context. This includes not only authorization objects that are implemented in the current RAP BO's behavior pool, but also authorization objects that are implemented in other RAP BOs that are called by the current RAP BO. In other words, the authorization objects of the current ABAP behavior pool and of all existing code that is called by the current ABAP behavior pool must be listed in the full authorization context.
-   In transaction `SU22`, a full authorization context is used to generate authorization default values.

-   `ac_2`
-   `ac_priv`
-   A full authorization context

managed implementation in class bp\_demo\_rap\_own\_ac\_short unique;\\nstrict(2);\\n\\nwith privileged mode disabling ac\_priv;\\n\\n\\ndefine behavior for DEMO\_RAP\_OWN\_AC\_SHORT alias Root\\npersistent table demo\_dbtab\_root\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly ) key\_field;\\n\\}\\n\\ndefine authorization context ac\_2\\n\\{\\n 'AUTHOBJ1';\\n 'AUTHOBJ2';\\n\\}\\n\\ndefine authorization context ac\_priv\\n\\{\\n 'AUTHOBJ3';\\n\\}\\n\\ndefine own authorization context by privileged mode and\\n\\{\\n 'AUTHOBJ5';\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_authorization\_context.html