---
title: "ABENBDL_EXTENSIBILITY_PROJECTION"
description: |
  ABENBDL_EXTENSIBILITY_PROJECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXTENSIBILITY_PROJECTION.htm"
abapFile: "ABENBDL_EXTENSIBILITY_PROJECTION.html"
keywords: ["ABENBDL", "EXTENSIBILITY", "PROJECTION"]
---

A [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) is a repository object that extends a [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) using the statement [`extension for projection`](ABENBDL_EXTENSION_FOR_PROJECTION.html).

As a prerequisite, the respective projection BDEF must explicitly allow extensions as described in topic [RAP - Extensibility Enabling for Projection BDEFs](ABENBDL_EXT_ENABLING_PROJECTION.html).

The following image shows the possible components of a BDEF projection extension:

-   The [BDEF projection extension header](ABENRAP_PROJ_EXT_HEADER_GLOSRY.html) is a mandatory component that starts with [`extension for projection`](ABENBDL_EXTENSION_FOR_PROJECTION.html).
-   An [entity projection extension](ABENRAP_ENTITY_PROJ_EXT_GLOSRY.html) is an optional component. It extends the behavior of an existing RAP BO entity of a BDEF projection. It starts with [`extend behavior for`](ABENBDL_EXTEND_BEH_PROJ.html).
-   A [projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html) is an optional component that defines the behavior for the projection of an extension node. It starts with [`define behavior for`](ABENBDL_PROJ_EXT_ENTITY.html).
-   An [authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) can be added or a [full authorization context](ABENCDS_OWN_AC_GLOSRY.html) may be extended.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html