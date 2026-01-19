---
title: "ABENCDS_729354995-_ANNO"
description: |
  ABENCDS_729354995-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_729354995-_ANNO.htm"
abapFile: "ABENCDS_729354995-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "729354995", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Defines the handling of metadata of a CDS object.

Specify lifecycle status for an *annotation*.

Annotations without these settings can be used unrestrictedly.

Defines the lifecycle status of an annotation.

The annotation is deprecated and thus should no longer be used.

Together with this status, a successor for the deprecated annotation can be specified optionally using annotation [`@Metadata.lifecycle.successor`](DDLA:Metadata.lifecycle.successor).

In the documentation of the deprecated annotation, it must be explained how to replace its usage e.g. by a successor annotation, by a new syntax element, or by means of a new concept.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Metadata.lifecycle.status`\\ **Scope** `#ANNOTATION`\\ **Type** `String(30)`\\ **Enums** `#DEPRECATED`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_metadata\_f.html