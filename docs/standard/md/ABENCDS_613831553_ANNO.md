---
title: "ABENCDS_613831553_ANNO"
description: |
  ABENCDS_613831553_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_613831553_ANNO.htm"
abapFile: "ABENCDS_613831553_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "613831553", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Specifies the client handling of certain CDS objects.

An annotation @ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

Defines the client dependency when ABAP SQL is used to access the CDS object.

If the annotation is not specified, the value `#CLIENT_DEPENDENT` is used.

The CDS object is client-dependent. When accessed using ABAP SQL `SELECT`, implicit client handling is applied.

The CDS object is client-independent. No implicit client handling is applied.

The client dependency of the CDS object is determined by the data sources used. If a data source is client-dependent, the CDS object is too.

-   For more information about client handling in CDS DDIC-based views, refer to [Client Handling in CDS DDIC-based views](ABENCDS_VIEW_CLIENT_HANDLING_V1.html).
-   For more information about client handling in CDS table functions, refer to [Client Handling in CDS Table Functions](ABENCDS_FUNC_CLIENT_HANDLING.html).
-   For more information about client handling in CDS hierarchies, refer to [Client Handling in CDS Hierarchies](ABENCDS_HIERA_CLIENT_HANDLING.html).

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `ClientHandling.type`\\ **Scope** `#TABLE_ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#CLIENT_DEPENDENT, #CLIENT_INDEPENDENT, #INHERITED`\\ **Default** `#INHERITED`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_clienthandling\_a.html