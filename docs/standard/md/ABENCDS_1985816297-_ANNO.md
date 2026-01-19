---
title: "ABENCDS_1985816297-_ANNO"
description: |
  ABENCDS_1985816297-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1985816297-_ANNO.htm"
abapFile: "ABENCDS_1985816297-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1985816297", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Metadata extensions are currently only supported in [CDS views](ABENCDS_VIEW_GLOSRY.html) and [CDS abstract entities](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html). In all other CDS entities, there is no syntax error, but the annotation `Metadata.allowExtensions` has no effect.

Defines the handling of metadata of a CDS object.

Defines whether a CDS object can be extended with metadata extensions.

`true`: The current CDS object can be extended.

`false`: The current CDS object cannot be extended.

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Metadata.allowExtensions`\\ **Scope** `#ENTITY`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_metadata\_a.html