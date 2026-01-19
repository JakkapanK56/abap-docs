---
title: "ABENCDS_1537649007_ANNO"
description: |
  ABENCDS_1537649007_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1537649007_ANNO.htm"
abapFile: "ABENCDS_1537649007_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1537649007", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Alongside `@MetadataExtension.usageAllowed:true`, the scope specified using the annotation `@Scope` determines where the annotation can be specified in a metadata extension. The scope must match the annotation and metadata extensions must be allowed for this scope.

Specify in an annotation definition, how the annotation can be moved to CDS metadata extensions.

Specifies whether the annotation can be specified in a metadata extension in the statement ANNOTATE.

`true`: The annotation can be specified in a metadata extension

`false`: The annotation cannot be specified in a metadata extension

If the annotation is not specified, the value `false` is used.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `MetadataExtension.usageAllowed`\\ **Scope** `#ANNOTATION`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_metadataextension\_a.html