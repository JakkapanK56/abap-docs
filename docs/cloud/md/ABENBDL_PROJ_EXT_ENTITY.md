---
title: "ABENBDL_PROJ_EXT_ENTITY"
description: |
  ABENBDL_PROJ_EXT_ENTITY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_PROJ_EXT_ENTITY.htm"
abapFile: "ABENBDL_PROJ_EXT_ENTITY.html"
keywords: ["update", "do", "if", "class", "data", "ABENBDL", "PROJ", "EXT", "ENTITY"]
---

[`... define behavior for ProjectionEntity ...`](ABENBDL_PROJECTION_BO.html)

A [projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html) defines the behavior for an extension node in a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) using the statement `define behavior for`.

The projection behavior for this extension node is defined in a similar way as for projection BDEFs. However, there are some restrictions.

Supported in a BDEF projection extension:

No behavior requiring implementation must be added. As a consequence, the following is not supported:

-   As a prerequisite, the underlying [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) must explicitly allow BDEF extensions as described in the topic [RAP - Extensibility Enabling for Projection BDEFs](ABENBDL_EXT_ENABLING_PROJECTION.html).
-   The extension node must be added to the RAP data model via [RAP data model extension](ABENRAP_DATA_MODEL_EXT_GLOSRY.html).

-   Field attributes `readonly`, `readonly:update`, `suppress`.
-   Reuse of RAP BO standard operations, actions, functions, and associations.
-   Extend an existing RAP type mapping.

-   No ABAP behavior pool must be specified, The statement `implementation in class unique` is forbidden.
-   No authorization control must be specified. The keyword `authorization` in the entity behavior characteristics is forbidden.
-   New actions and functions must not be specified in the entity behavior body.
-   A [RAP foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) must not be specified.
-   Adding a new [RAP authorization context for disable](ABENCDS_AUTH_CONTEXT_GLOSRY.html) is not possible. Extending a [full authorization context](ABENCDS_OWN_AC_GLOSRY.html) is not supported either.
-   Adding a [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) is not supported. However, extending an existing RAP type mapping with extension fields is supported.
-   Enabling BDEF privileged mode `with privileged mode` is not supported.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html abenbdl\_extension\_for\_projection.html