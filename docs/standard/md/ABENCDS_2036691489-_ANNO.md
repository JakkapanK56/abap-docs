---
title: "ABENCDS_2036691489-_ANNO"
description: |
  ABENCDS_2036691489-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2036691489-_ANNO.htm"
abapFile: "ABENCDS_2036691489-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "2036691489", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More information:

Technical settings of a CDS entity.

Defines settings for the table buffering of a CDS object.

Enables or disables table buffering for a CDS object.

`true`: Table buffering allowed.

`false`: Table buffering not allowed.

If the annotation is not specified, the value `false` is used.

-   [ABAP CDS - Table Buffering of CDS View Entities](ABENCDS_V2_VIEW_BUFFERING.html)
-   [ABAP CDS - Table Buffering of CDS Table Entities](ABENCDS_TABLE_ENTITY_BUFFERING.html)

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.entityBuffer.definitionAllowed`\\ **Scope** `#TABLE_ENTITY`, `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html