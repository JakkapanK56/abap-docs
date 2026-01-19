---
title: "ABENCDS_58258031_ANNO"
description: |
  ABENCDS_58258031_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_58258031_ANNO.htm"
abapFile: "ABENCDS_58258031_ANNO.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "58258031", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

When a CDS type is typed with a DDIC data element, the conversion exit of the data element is automatically reused as conversion exit of the CDS type.

Technical settings of a CDS entity.

Settings for type definitions.

CDS metadata extensions (MDE) are not supported for CDS type definitions. If required, the metadata of a CDS type can be extended when the CDS type is used in another CDS object, such as a CDS view entity.

If specified, connects the CDS type to a conversion exit.

`name`: The name of the conversion exit can be a character string with a maximum of 5 characters consisting of letters, numbers, and underscores.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.typeSpec.conversionExit`\\ **Scope** `#ELEMENT`, `#SIMPLE_TYPE`\\ **Type** `String(5)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html