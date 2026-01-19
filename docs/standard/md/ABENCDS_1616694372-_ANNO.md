---
title: "ABENCDS_1616694372-_ANNO"
description: |
  ABENCDS_1616694372-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1616694372-_ANNO.htm"
abapFile: "ABENCDS_1616694372-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1616694372", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Specifies in an annotation definition how the annotation can be used.

Specifies a hidden annotation.

`true`: The annotation is used for tests and demonstrations. It is not recognized in source code coloring or by code completion and cannot be used in production CDS source code

`false`: Public annotation for use in production CDS source code

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `AbapAnnotation.definitionHidden`\\ **Scope** `#ANNOTATION`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_abapannotation\_a.html