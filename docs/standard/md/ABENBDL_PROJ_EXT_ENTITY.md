---
title: "ABENBDL_PROJ_EXT_ENTITY"
description: |
  ABENBDL_PROJ_EXT_ENTITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_PROJ_EXT_ENTITY.htm"
abapFile: "ABENBDL_PROJ_EXT_ENTITY.html"
keywords: ["do", "if", "class", "data", "ABENBDL", "PROJ", "EXT", "ENTITY"]
---

[`... define behavior for ProjectionEntity ...`](ABENBDL_PROJECTION_BO.html)

A [projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html) defines the behavior for an extension node in a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) using the statement `define behavior for`.

The projection behavior for this extension node is defined similar to projection BDEFs, see the topic [RAP - `EntityBehaviorDefinition`, Projection BDEF](ABENBDL_DEFINE_BEH_PROJECTION.html). Note the following restrictions:

If an ABAP behavior pool is specified, the rules for extension ABPs apply. See topic [RAP - `implementation in class unique`, Extension](ABENBDL_IN_CLASS_UNIQUE_EXT.html).

The BDEF projection extension `DEMO_RAP_PROJ_EXT_BEH_1` extends the RAP projection behavior definition `DEMO_RAP_PROJ_EXT_BEH`. It behavior-enables an extension node using the syntax `define behavior for`, reusing operations from the projected BDEF and specifying field attributes.

The executable example [RAP - BDEF Projection Extension, Node Extension](ABENBDL_ENTITY_PROJ_EXT_ABEXA.html) explains the example above in detail.

-   As a prerequisite, the underlying [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) must explicitly allow BDEF extensions as described in the topic [RAP - Extensibility Enabling for Projection BDEFs](ABENBDL_EXT_ENABLING_PROJECTION.html).
-   The extension node must be added to the RAP data model via [RAP data model extension](ABENRAP_DATA_MODEL_EXT_GLOSRY.html).

-   The [operation augment](ABENBDL_AUGMENT_PROJECTION.html) is currently not supported in BDEF extensions.

extension for projection;\\n\\nextend behavior for Root\\n//authorization (global)\\n\\{\\n use association \_child \\{create;\\}\\n use action setValue;\\n\\n// mapping for demo\_rap\_struc corresponding;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child\\n\\{\\n use association \_parent;\\n use action ActionExt;\\n field ( readonly ) int\_field3;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html abenbdl\_extension\_for\_projection.html