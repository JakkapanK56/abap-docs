---
title: "ABENCDS_2016919924-_ANNO"
description: |
  ABENCDS_2016919924-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2016919924-_ANNO.htm"
abapFile: "ABENCDS_2016919924-_ANNO.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "2016919924", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

The change document settings of a CDS simple type are similar to the change document settings of DDIC data elements described in topic [DDIC - Semantic Properties of Data Elements](ABENDDIC_DATA_ELEMENTS_SEMA.html). If a CDS type is based on a DDIC data element, this setting is inherited from the data element and the annotation value is set in accordance with the DDIC setting.

Technical settings of a CDS entity.

Settings for type definitions.

CDS metadata extensions (MDE) are not supported for CDS type definitions. If required, the metadata of a CDS type can be extended when the CDS type is used in another CDS object, such as a CDS view entity.

Specifies whether changes to fields with reference to this simple type are logged when change document objects are involved.

`true`: Change documents are written.

`false`: Change documents are not written.

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapCatalog.typeSpec.changeDocumentRelevant`\\ **Scope** `#SIMPLE_TYPE`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapcatalog\_a.html