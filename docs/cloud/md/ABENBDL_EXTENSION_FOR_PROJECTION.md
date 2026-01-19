---
title: "ABENBDL_EXTENSION_FOR_PROJECTION"
description: |
  ABENBDL_EXTENSION_FOR_PROJECTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_EXTENSION_FOR_PROJECTION.htm"
abapFile: "ABENBDL_EXTENSION_FOR_PROJECTION.html"
keywords: ["if", "class", "ABENBDL", "EXTENSION", "FOR", "PROJECTION"]
---

```extension for projection  [[`` `extensible` ``](ABENBDL_EXT_ENABL_EXT_PROJ.html);]\    [[`define behavior for`](ABENBDL_PROJ_EXT_ENTITY.html)]\    [[`extend behavior for`](ABENBDL_EXTEND_BEH_PROJ.html)]\  ...```

Extends an existing [RAP projection behavior definition](ABENCDS_PROJ_BDEF_GLOSRY.html) using a [BDEF projection extension](ABENRAP_PROJEC_BDEF_EXT_GLOSRY.html) in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). A RAP projection behavior definition can have one or more BDEF projection extensions. The number of extensions is not limited.

A BDEF projection extension can have the following components:

**Note**: No ABAP behavior pool must be specified. The statement *implementation in class ClassName unique* is forbidden.

-   [`extensible`](ABENBDL_EXT_ENABL_EXT_PROJ.html): If specified, [extension layering](ABENRAP_EXT_LAYERING_GLOSRY.html) is allowed. For details, see [RAP - Extensibility Enabling for Projection BDEF Extensions](ABENBDL_EXT_ENABL_EXT_PROJ.html).
-   [`define behavior for`](ABENBDL_PROJ_EXT_ENTITY.html): Defines a [RAP projection extension entity](ABENRAP_PROJ_EXT_ENTITY_GLOSRY.html) using the statement [`define behavior for`](ABENBDL_PROJ_EXT_ENTITY.html).
-   [`extend behavior for`](ABENBDL_EXTEND_BEH_PROJ.html): A [RAP entity projection extension](ABENRAP_ENTITY_PROJ_EXT_GLOSRY.html) extends the behavior of an existing entity of a projection BDEF.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html