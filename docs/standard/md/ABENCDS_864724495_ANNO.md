---
title: "ABENCDS_864724495_ANNO"
description: |
  ABENCDS_864724495_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_864724495_ANNO.htm"
abapFile: "ABENCDS_864724495_ANNO.html"
keywords: ["do", "if", "ABENCDS", "864724495", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

A valid suffix must obey the following rules:

Technical settings of a CDS entity.

Extensibility settings for CDS objects.

Defines a 3-character element suffix which must be used for extension fields and extension associations when extending a released API.

`suffix` must consist of exactly three characters. These characters can be alphabetical or numerical (0-9).

-   If the object is created in a customer or partner system, the suffix must have Y or Z as first character.
-   If the object is created in an SAP system, the suffix must not have Y or Z as first character.
-   If the field suffix is already used by another development object, a syntax check warning occurs.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.extensibility.elementSuffix`\\ **Scope** `#ENTITY`\\ **Type** `String(3)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html