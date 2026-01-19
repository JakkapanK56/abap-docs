---
title: "BDEF Privileged Mode for Managed and Unmanaged RAP BOs"
description: |
  BDEF Privileged Mode for RAP Projection BOs BDEF Privileged Mode for RAP Interface Behavior Definitions -   In a managed RAP BO(ABENMANAGED_RAP_BO_GLOSRY.html), the RAP framework automatically and implicitly checks for other authorizations, such as CDS access control. -   In an unmanaged RAP BO(
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_PRIVILEGED_MODE.htm"
abapFile: "ABENBDL_PRIVILEGED_MODE.html"
keywords: ["update", "delete", "if", "case", "method", "class", "data", "types", "ABENBDL", "PRIVILEGED", "MODE"]
---

`... with privileged mode disabling ContextName; ...`

`... with privileged mode disabling base context [and ContextName]; ...`

`... with privileged mode; ...`

[1. `with privileged mode disabling ContextName`](#ABAP_ALTERNATIVE_1@2@)

[2. `with privileged mode disabling base context [and]`](#ABAP_ALTERNATIVE_2@2@)

[3. `with privileged mode`](#ABAP_ALTERNATIVE_3@2@)

Enables the [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html) for a RAP BO. With BDEF privileged mode, [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) can circumvent [authorization checks](ABENAUTHORIZATION_CHECK_GLOSRY.html), such as  [RAP authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html). BDEF privileged mode is prerequisite to use the addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html) in [EML](ABENEML_GLOSRY.html) when consuming the [RAP BO](ABENRAP_BO_GLOSRY.html). The BDEF privileged mode is available for BDEFs of the types [managed](ABENMANAGED_RAP_BO_GLOSRY.html), [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html), [projection](ABENCDS_PROJ_BDEF_GLOSRY.html), and [interface](ABENRAP_BO_INTERFACE_GLOSRY.html). The syntax for the different [BDEF implementation types](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html) varies. Details are described below.

The example [Using the addition `PRIVILEGED` with an ABAP EML Statement](ABENEML_PRIVILEGED_ABEXA.html) defines an [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) and registers it for use in privileged mode. It then demonstrates access to the RAP BO, first without the addition `PRIVILEGED`, afterwards using `PRIVILEGED`.

This syntax variant is available for managed and unmanaged RAP BOs only.

In the [header part of a behavior definition](ABENCDS_BDEF_HEADER_GLOSRY.html) of a managed or unmanaged RAP BO, it is possible to specify `with privileged mode disabling ContextName`. The effect is that the [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html)\\ `ContextName` is automatically disabled when a [RAP BO consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) uses [privileged access](ABAPEML_PRIVILEGED.html) to the [RAP BO](ABENRAP_BO_GLOSRY.html) in question. `ContextName` must be an authorization context for disable defined in the same BDEF. Not more than one authorization context can be specified.

Example:

with privileged mode disabling DemoContextBdl

in the BDEF has the effect that the [EML statement](ABENAEML_GLOSRY.html)

read entity privileged DemoContextBdl \\n   all fields with value #( ( name = field1 ) ) \\n   result data(result) \\n   failed data(failed).

behaved as if

authority-check disable begin context DemoContextBdl~privileged context. \\n   read entity privileged DemoContextBdl \\n   all fields with value #( (name = field1 ) ) \\n   result data(result) \\n   failed data(failed). \\nauthority-check disable end.

had been written.

So with the syntax `with privileged mode disabling`, the [RAP framework](ABENRAP_FRAMEWORK_GLOSRY.html) leaves out calls to [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html). No implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required.

There are other kinds of authority checks, such as [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html). If a business object is protected from unauthorized access using any other method than authorization objects, the BDEF can define an empty authorization context that is referred to in `ContextName`.

Example:

BDEF header: `with privileged mode disabling EmptyContext`

BDEF body: `define authorization context EmptyContext \{ \}`

In the case of empty authorization contexts, privileged EML calls are handled as follows:

This syntax variant is available for [projection BDEFs](ABENCDS_PROJ_BDEF_GLOSRY.html) only. It enables BDEF privileged mode for a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html). As a prerequisite, the underlying [projected BDEF](ABENRAP_PROJECTION_BO_GLOSRY.html) must define privileged mode. The syntax for enabling privileged mode in a projection BDEF is as follows:

with privileged mode disabling base context \\n  \[and ContextName\]

`base context` refers to the [authorization context for disable](ABENBDL_DEF_AUTH_CONTEXT.html) that is specified in the projected BDEF. It is mandatory to reuse the authorization context from the projected BDEF.

If the projected BDEF specifies an empty authorization context, this can also be reused by the projection BDEF.

With the optional addition `and ContextName`, it is possible to specify an additional authorization context for disable in the projection BDEF. `ContextName` must be an authorization context for disable defined in the same projection BDEF. For all [privileged](ABAPEML_PRIVILEGED.html) operations on the projection BDEF, both the authorization context of the projected BDEF and the context of the projection BDEF are disabled.

Privileged mode can only be reused in a projection BDEF if the syntax `with privileged mode disabling ContextName` is specified in the projected BDEF. If the projected BDEF uses the deprecated syntax form `with privileged mode;`, then BDEF privileged mode is not available in the projection BO.

The following example shows a projection BDEF based on the projected BDEF `DEMO_RAP_AUTH_CONTEXT`. It enables privileged mode, reuses the authorization context for disable from the projected BDEF and adds one further authorization context to the projection layer.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is not implemented here. In a real-life scenario, *AUTHOBJ1* would be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).

This syntax variant is available for [interface BDEFs](ABENRAP_BO_INTERFACE_GLOSRY.html) only. It enables BDEF privileged mode for an interface BDEF, so that access with [EML](ABENABAP_EML_GLOSRY.html) can take place in privileged mode using the addition [`PRIVILEGED`](ABAPEML_PRIVILEGED.html). Since interface BDEFs cannot define any access restrictions or authorization contexts themselves, it is a prerequisite that the underlying [projected BDEF](ABENRAP_PROJECTION_BO_GLOSRY.html) defines privileged mode. A privileged access is then delegated to the implementation of the underlying base RAP BO. The syntax for enabling privileged mode in an interface BDEF is as follows:

with privileged mode;

Privileged mode can only be reused in an interface BDEF if the syntax `with privileged mode disabling ContextName` is specified in the projected BDEF.

BDEF Privileged Mode for Managed and Unmanaged RAP BOs

BDEF Privileged Mode for RAP Projection BOs

BDEF Privileged Mode for RAP Interface Behavior Definitions

-   In a [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html), the RAP framework automatically and implicitly checks for other authorizations, such as CDS access control.
-   In an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html), rules for the handling of a privileged access can be defined in the respective [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) in the ABAP behavior pool.

-   The syntax `with privileged mode;` has been deprecated for managed and unmanaged RAP BOs. For compatibility reasons, it can still be used, but it is not recommended and if used, a syntax check warning occurs.
-   There are several ways to enable an authorization context for disable. They are described in the topic [RAP - `define authorization context`](ABENBDL_DEF_AUTH_CONTEXT.html). One of them is to register an authorization context for a category of [handler method](ABENABP_HANDLER_METHOD_GLOSRY.html) using the syntax
-   `define authorization context ContextName for disable( Options )`
-   The difference between this and `with privileged mode disabling ContextName` is that in the first case, the context is active *within* the handler method. In the latter case, the context is active *around* the EML statement and that means it is also active during calls to the handler method that might be performed by the RAP framework implicitly before calling the actual handler targeted by the EML statement.

projection implementation in class BP\_DEMO\_RAP\_AUTH\_CONTEXT\_PROJ unique;\\nstrict(2);\\nwith privileged mode disabling base context and ac\_3;\\n\\ndefine authorization context ac\_3\\n\\{\\n'AUTHOBJ1' ;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_AUTH\_CONTEXT\_PROJ\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\}\\n\\ndefine own authorization context by privileged mode; abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html