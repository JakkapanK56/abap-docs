---
title: "ABENCDS_2031682287_ANNO"
description: |
  ABENCDS_2031682287_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2031682287_ANNO.htm"
abapFile: "ABENCDS_2031682287_ANNO.html"
keywords: ["do", "if", "types", "ABENCDS", "2031682287", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

The annotation is useful only in entity types that allow CDS compositions. For example, this annotation can be specified in CDS transactional interfaces; no syntax error occurs. But it does not have any effect, since the feature set of a transactional interface does not include CDS compositions.

Technical settings of a CDS entity.

Extensibility settings for CDS objects.

Allows node extensibility. In other words, explicitly allows new child nodes to be added by means of to-child associations.

`true`: Node extensibility is allowed.

`false`: Node extensibility is not allowed.

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.extensibility.allowNewCompositions`\\ **Scope** `#ENTITY`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html