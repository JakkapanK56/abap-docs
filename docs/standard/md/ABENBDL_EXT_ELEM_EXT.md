---
title: "ABENBDL_EXT_ELEM_EXT"
description: |
  ABENBDL_EXT_ELEM_EXT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_EXT_ELEM_EXT.htm"
abapFile: "ABENBDL_EXT_ELEM_EXT.html"
keywords: ["if", "ABENBDL", "EXT", "ELEM"]
---

``...      [`extend determine action`](ABENBDL_DETERMINE_ACTION_EXT.html)\    |\ [`extend draft determine action Prepare`](ABENBDL_DRAFT_ACTION_EXT.html)\    |\ [`extend mapping for PartnerType`](ABENBDL_TYPE_MAPPING_EXT.html)\    ...``

Extends existing components of an existing RAP BO entity in the [RAP BDL](ABENCDS_BDL_GLOSRY.html). As a prerequisite, the respective components must be marked as extensible in the extended BDEF as described in the topic [RAP - Extensibility Enabling for Base BOs](ABENBDL_EXTENSIBILITY_ENABLING_M_U.html). If explicitly enabled for extensibility, the following components can be extended:

-   [`extend determine action`](ABENBDL_DETERMINE_ACTION_EXT.html): [Extension](ABENRAP_PREFIX_EXTENSION_GLOSRY.html)\\ [determinations](ABENRAP_DETERMINATION_GLOSRY.html) and extension [validations](ABENRAP_VALIDATION_GLOSRY.html) can be added to an existing [determine action](ABENRAP_BO_DET_ACTION_GLOSRY.html).
-   **Limitation:** Currently not supported in unmanaged RAP BOs.
-   [`extend draft determine action Prepare`](ABENBDL_DRAFT_ACTION_EXT.html): Extension determinations and extension validations can be added to an existing draft determine action.
-   **Limitation:** Currently not supported in unmanaged RAP BOs.
-   [`extend mapping for PartnerType`](ABENBDL_TYPE_MAPPING_EXT.html): An existing [RAP type mapping](ABENRAP_TYPE_MAPPING_GLOSRY.html) can be extended with extension fields.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extend\_beh.html abenbdl\_entity\_beh\_extension.html