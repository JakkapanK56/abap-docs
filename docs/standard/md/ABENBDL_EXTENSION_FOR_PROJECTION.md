---
title: "ABENBDL_EXTENSION_FOR_PROJECTION"
description: |
  ABENBDL_EXTENSION_FOR_PROJECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSION_FOR_PROJECTION.htm"
abapFile: "ABENBDL_EXTENSION_FOR_PROJECTION.html"
keywords: ["do", "if", "class", "ABENBDL", "EXTENSION", "FOR", "PROJECTION"]
---

```extension for projection [[`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html)];  [[`` `extensible` ``](ABENBDL_EXT_ENABL_EXT_PROJ.html);]\    [[`with privileged mode disabling base context [and ContextName]`](ABENBDL_PRIVILEGED_MODE.html)];    [[`foreign entity`](ABENBDL_FOREIGN.html)]\    [[`define behavior for`](ABENBDL_PROJ_EXT_ENTITY.html)]\    [[`extend behavior for`](ABENBDL_EXTEND_BEH_PROJ.html)]\    [[`extend own authorization context`](ABENBDL_EXTEND_OWN_AUTH_CONTEXT.html)]\    [[`define authorization context`](ABENBDL_DEF_AUTH_CONTEXT.html)]\  ...```

Extends an existing [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) using a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). A RAP projection behavior definition can have one or more BDEF projection extensions. The number of extensions is not limited.

A BDEF projection extension can have the following components:

The BDEF projection extension `DEMO_RAP_PROJ_EXT_BEH_1` extends the RAP projection behavior definition `DEMO_RAP_PROJ_EXT_BEH`.

The executable example [RAP - BDEF Projection Extension, Node Extension](ABENBDL_ENTITY_PROJ_EXT_ABEXA.html) explains the example above in detail.

-   `implementation in class ClassName unique`: an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is possible in a BDEF projection extension:

-   Functionality that is reused from the base BO does not require its own implementation. The implementation from the base BO is reused.
-   If the BDEF projection extension defines new actions or functions, an ABAP behavior pool is required.
-   The rules for extension ABPs apply, see the topic [implementation in class unique, extension](ABENBDL_IN_CLASS_UNIQUE_EXT.html).

-   [`extensible`](ABENBDL_EXT_ENABL_EXT_PROJ.html): If specified, [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html) is allowed. For details, see [RAP - Extensibility Enabling for Projection BDEF Extensions](ABENBDL_EXT_ENABL_EXT_PROJ.html).
-   `with privileged mode disabling base context [and ContextName]`:

-   A BDEF projection extension can enable [BDEF privileged mode](ABENRAP_PRIVILEGED_MODE_GLOSRY.html). As a prerequisite, the base BO of type `managed` or `unmanaged` must enable privileged mode. The behavior of the extended BDEF of type `projection` is irrelevant. It may define privileged mode, but this is optional.
-   The syntax addition `disabling base context` is mandatory; `and ContextName` is optional. The same rules apply as for projection behavior definitions, see topic [`with privileged mode`](ABENBDL_PRIVILEGED_MODE.html), Alternative 2.

-   `foreign entity`:

-   Defines a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) which is not part of the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of the current RAP BO as part of the response structures.
-   A foreign entity can be defined before, after, or between the other components.
-   Only entities that belong to the same software component can be added as [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) to a BDEF projection extension.

-   [`define behavior for`](ABENBDL_PROJ_EXT_ENTITY.html): Defines a [RAP projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html) using the statement [`define behavior for`](ABENBDL_PROJ_EXT_ENTITY.html).
-   [`extend behavior for`](ABENBDL_EXTEND_BEH_PROJ.html): A [RAP entity projection extension](ABENRAP_ENTITY_PROJ_EXT_GLOSRY.html) extends the behavior of an existing entity of a projection BDEF.
-   [`extend own authorization context`](ABENBDL_EXTEND_OWN_AUTH_CONTEXT.html): If the projected BDEF of implementation type `projection` defines a [full authorization context](ABENCDS_OWN_AC_GLOSRY.html), this context can be extended. If the projected BDEF does not define any full authorization context, it must not be added via an extension.
-   [`define authorization context`](ABENBDL_DEF_AUTH_CONTEXT.html): A new [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) can be defined in a BDEF projection extension. For details, see the topic [RAP - `define authorization context`](ABENBDL_DEF_AUTH_CONTEXT.html).

-   It extends the behavior of the root node.
-   It behavior-enables an extension node using the syntax `define behavior for`, reusing operations from the projected BDEF and specifying field attributes.

extension for projection;\\n\\nextend behavior for Root\\n//authorization (global)\\n\\{\\n use association \_child \\{create;\\}\\n use action setValue;\\n\\n// mapping for demo\_rap\_struc corresponding;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child\\n\\{\\n use association \_parent;\\n use action ActionExt;\\n field ( readonly ) int\_field3;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html