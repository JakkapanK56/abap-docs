---
title: "ABENCDS_1433174898-_ANNO"
description: |
  ABENCDS_1433174898-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1433174898-_ANNO.htm"
abapFile: "ABENCDS_1433174898-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1433174898", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Defines the handling of metadata of a CDS object.

Defines whether annotations are inherited from used CDS objects when analyzing them with the annotation API `CL_DD_DDL_ANNOTATION_SERVICE`.

`true`: Only direct and derived annotations of the definition are respected.

`false`: Inherited annotations of used definitions are also respected.

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Metadata.ignorePropagatedAnnotations`\\ **Scope** `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_metadata\_a.html