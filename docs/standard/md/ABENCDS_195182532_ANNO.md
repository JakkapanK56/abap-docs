---
title: "ABENCDS_195182532_ANNO"
description: |
  ABENCDS_195182532_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_195182532_ANNO.htm"
abapFile: "ABENCDS_195182532_ANNO.html"
keywords: ["do", "if", "try", "data", "ABENCDS", "195182532", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Defines the handling of metadata of a CDS object.

Multiple metadata extensions can exist for one CDS type definition. Different metadata extensions can provide different annotation values.

The `layer` annotation defines the priority of the evaluation of a metadata extension by assigning it to a layer.

The enumeration values relate the layer to products or parts/extensions of products.

Values on a higher level overrule values on a lower level.

The `#CUSTOMER` layer has the highest priority. The `#CORE` layer has the lowest priority.

Relates to the *core* product (ABAP Platform).

Relates to the *localization* of a product (SAP Application Component).

Relates to an *industry*\-specific extension of a product (SAP Industry Solution)

Relates to a *partner* extension of a product

Relates to a *customer* extension of a product

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Metadata.layer`\\ **Scope** `#ANNOTATE`\\ **Type** `Integer`\\ **Enums** `#CORE, #CUSTOMER, #INDUSTRY, #LOCALIZATION, #PARTNER`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_metadata\_a.html