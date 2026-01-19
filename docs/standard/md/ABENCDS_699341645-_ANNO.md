---
title: "ABENCDS_699341645-_ANNO"
description: |
  ABENCDS_699341645-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_699341645-_ANNO.htm"
abapFile: "ABENCDS_699341645-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "699341645", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Technical settings of a CDS entity.

Extensibility settings for CDS objects.

Defines maximum numbers of bytes or fields that can be added to a released API via extensions.

Maximum number of bytes.

Integer between 0 and 100,000.

-   The maximum byte count specified after `maximumBytes` plus the byte count of the current CDS entity must not exceed the technical limitations of the ABAP server. Currently, the technical limitation is at 2^19-1 bytes.
-   The value specified should be at least 1000 (indicated by a syntax check warning).

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.extensibility.quota.maximumBytes`\\ **Scope** `#ENTITY`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html