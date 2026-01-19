---
title: "ABENBDL_EXTEND_OWN_AUTH_CONTEXT"
description: |
  ABENBDL_EXTEND_OWN_AUTH_CONTEXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTEND_OWN_AUTH_CONTEXT.htm"
abapFile: "ABENBDL_EXTEND_OWN_AUTH_CONTEXT.html"
keywords: ["do", "if", "case", "method", "class", "ABENBDL", "EXTEND", "OWN", "AUTH", "CONTEXT"]
---

``extend own authorization context  \{    [[`AuthObject1`](ABENBC_AUTHORITY_CHECK.html);]\    [[`AuthObject2`](ABENBC_AUTHORITY_CHECK.html);]\    [...]\  \}``

Extends a [full authorization context](ABENCDS_OWN_AC_GLOSRY.html) using the statement `extend own authorization context` by adding further [authorization objects](ABENAUTHORIZATION_OBJECT_GLOSRY.html)\\ `AuthObject1`, `AuthObject2`, ... to the context. If the original BDEF defines a full authorization context and the extension implementation uses authorization objects which are not used in the original implementation, you should extend the full authorization context to ensure a complete and exhaustive list. Like for the original BDEF, the full authorization context is evaluated by certain contract checks and if it is not complete, a runtime error occurs.

As a prerequisite, the original BDEF must define a full authorization context. If this is the case, the full authorization context can be extended without any explicit extensibility enabling. If the original BDEF does not define a full authorization context, it must not be added via an extension.

An extension full authorization context may be defined before, between, or after the other [components of an extension BDEF](ABENBDL_EXTENSIBILITY_MANAGED_UNM.html). It is also possible to define an empty own authorization context.

For details on the concept of an own authorization context, see the topic [RAP - `define own authorization context`](ABENBDL_DEF_OWN_AUTH_CONTEXT.html).

The following BDEF extension `DEMO_RAP_EXT_AUTH_CONTEXT` extends the RAP behavior definition `DEMO_RAP_OWN_AUTH_CONTEXT`. It adds one further authorization object to the context.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) of the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) are not implemented here. In a real-life scenario, *AUTHOBJ5* would be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). extension implementation in class bp\_demo\_rap\_ext\_auth\_context unique;\\n\\nextend own authorization context\\n\\{ 'AUTHOBJ5'; \\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html