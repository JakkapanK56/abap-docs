---
title: "ABENCDS_464103458_ANNO"
description: |
  ABENCDS_464103458_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_464103458_ANNO.htm"
abapFile: "ABENCDS_464103458_ANNO.html"
keywords: ["do", "if", "ABENCDS", "464103458", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More information:

Refer to [AbapCatalog.buffering.status](ABENCDS_1242119123-_ANNO.html)

Technical settings of a CDS entity.

Defines table buffering for a CDS DDIC-based view.

Defines the type of table buffering for a CDS DDIC-based view.

If the annotation is not specified, the value `#NONE` is used.

Single record buffering.

Generic buffering.

Full buffering.

No buffering.

-   [Table Buffering of CDS DDIC-Based Views](ABENCDS_V1_BUFFERING.html)

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.buffering.type`\\ **Scope** `#VIEW`\\ **Type** `String(10)`\\ **Enums** `#FULL, #GENERIC, #NONE, #SINGLE`\\ **Default** `#NONE`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html