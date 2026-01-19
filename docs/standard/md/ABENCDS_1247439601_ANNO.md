---
title: "ABENCDS_1247439601_ANNO"
description: |
  ABENCDS_1247439601_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1247439601_ANNO.htm"
abapFile: "ABENCDS_1247439601_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "1247439601", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Defines the handling of metadata of a CDS object.

For annotations of type *DevelopmentObjectRef* the object-specific attributes must be defined.

This specifies TADIR object type of the objects that are to be referenced by annotated annotation of type *DevelopmentObjectRef*.

This meta-annotation is mandatory for all *DevelopmentObjectRef*\-typed annotation.

Referenced object type is CLAS (ABAP Class).

Referenced object type is FTG2 (Feature Toggle)

Referenced object type is SFSW (Switch).

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Metadata.reference.objectType`\\ **Scope** `#ANNOTATION`\\ **Type** `String(4)`\\ **Enums** `#CLAS, #FTG2, #SFSW`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_metadata\_f.html