---
title: "ABENCDS_1760222934_ANNO"
description: |
  ABENCDS_1760222934_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1760222934_ANNO.htm"
abapFile: "ABENCDS_1760222934_ANNO.html"
keywords: ["do", "ABENCDS", "1760222934", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Technical settings of a CDS entity.

Defines settings for the table buffering of a CDS object.

Only delegated buffer definitions and type none can be defined. Only the delegated buffer definitions apply.

Only materialized buffer definitions (type single, generic, full, and none) can be defined.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.entityBuffer.definitionType[ ]`\\ **Scope** `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#DELEGATED, #MATERIALIZED`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`