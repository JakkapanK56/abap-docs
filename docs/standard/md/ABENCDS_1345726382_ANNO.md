---
title: "ABENCDS_1345726382_ANNO"
description: |
  ABENCDS_1345726382_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1345726382_ANNO.htm"
abapFile: "ABENCDS_1345726382_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1345726382", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Technical settings of a CDS entity.

Extensibility settings for CDS objects.

Defines maximum numbers of bytes or fields that can be added to a released API via extensions.

Maximum number of fields.

Integer between 0 and 1,000.

-   The maximum field count specified after `maximumFields` plus the field count of the current CDS entity must not exceed the technical limitations of the ABAP server. Currently, the technical limitation is at 1500 fields.
-   The value specified should be at least 100 (indicated by a syntax check warning).

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.extensibility.quota.maximumFields`\\ **Scope** `#ENTITY`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html