---
title: "ABENCDS_1159849682_ANNO"
description: |
  ABENCDS_1159849682_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1159849682_ANNO.htm"
abapFile: "ABENCDS_1159849682_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "1159849682", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

The annotation `@AbapCatalog.extensibility.extensible` with the value `true` is a prerequisite for the [C0 release](ABENC0_CONTRACT_GLOSRY.html) of a CDS service definition.

Technical settings of a CDS entity.

Extensibility settings for CDS objects.

Enables or disables extensibility for the current scope.

`true`: Extensions are allowed.

`false`: Extensions are not allowed.

If the annotation is not specified:

-   For CDS entities extended by CDS entity extensions, the value `true` is used.
-   In other cases, the value `false` is used.

-   For CDS entities extended by CDS entity extensions, the value `true` is used.
-   In other cases, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.extensibility.extensible`\\ **Scope** `#ENTITY`, `#SERVICE`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`