---
title: "ABENBDL_EXTEND_BEH_PROJ"
description: |
  ABENBDL_EXTEND_BEH_PROJ - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTEND_BEH_PROJ.htm"
abapFile: "ABENBDL_EXTEND_BEH_PROJ.html"
keywords: ["update", "do", "if", "class", "ABENBDL", "EXTEND", "BEH", "PROJ"]
---

``extend behavior for ProjectionEntity    [[`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html)]\    [[`authorization`](ABENBDL_AUTHORIZATION_PROJECTION.html)]\   \{     [`projection_extension_body`](ABENBDL_PROJ_EXT_BODY.html)\   \}  ...``

An [entity projection extension](ABENRAP_ENTITY_PROJ_EXT_GLOSRY.html) extends a [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html)\\ `ProjectionEntity`. As a prerequisite, extensions must be explicitly enabling as described in topic [RAP - Extensibility Enabling for Projection BDEFs](ABENBDL_EXT_ENABLING_PROJECTION.html).

**Syntax additions and components:**

The BDEF projection extension `DEMO_RAP_PROJ_BDEF_EXT` extends the RAP projection behavior definition `DEMO_RAP_PROJ_EXT_FIELD`.

It adds field attributes to extension fields.

The executable example [BDEF Projection Extension, Field Extension](ABENBDL_ENTITY_PROJ_EXT_1_ABEXA.html) explains the example above in detail.

-   [`implementation in class ClassName unique`](ABENBDL_IN_CLASS_UNIQUE_EXT.html): specifies an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) for the [extension](ABENRAP_PREFIX_EXTENSION_GLOSRY.html) behavior of the particular entity. Optional and only required if the entity in question defines new actions or functions. The rules for extension ABPs apply, see topic [RAP - `implementation in class unique`, Extension](ABENBDL_IN_CLASS_UNIQUE_EXT.html).
-   [`authorization`](ABENBDL_AUTHORIZATION_PROJECTION.html):

-   Defines authorization control for actions that were added in the projection layer via a BDEF projection extension.
-   Optional and only useful in combination with new actions.
-   Works in the same way as for projection BDEFs, see topic [RAP BDL - `authorization`, Projection BDEF](ABENBDL_AUTHORIZATION_PROJECTION.html).

-   [`projection_extension_body`](ABENBDL_PROJ_EXT_BODY.html): extends the [entity behavior body](ABENCDS_ENTITY_BODY_GLOSRY.html) of a projection BDEF.

extension for projection;\\n\\nextend behavior for Root \\{\\n\\nfield(suppress) char\_field\_ext;\\nfield(readonly:update) int\_field\_ext;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html abenbdl\_extension\_for\_projection.html