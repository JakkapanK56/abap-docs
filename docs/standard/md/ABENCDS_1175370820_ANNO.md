---
title: "ABENCDS_1175370820_ANNO"
description: |
  ABENCDS_1175370820_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1175370820_ANNO.htm"
abapFile: "ABENCDS_1175370820_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "1175370820", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`VDM Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17).

VDM annotations classify CDS views of the virtual data model in terms of their admissible resuse options and provisioned content.

The intention of the annotations is to enable certain functionalities that are based on the VDM, such as view browsers, to interpret the CDS entities correctly.

**Evaluation Runtimes**

VDM annotations have no influence on runtime, so there are no dependencies for runtime engines.

This annotation classifies a CDS entity as belonging to the virtual data model (VDM) if no other, more specialized VDM annotation is used. The CDS entity follows the modeling rules of the VDM.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `VDM.entity`\\ **Scope** `#ENTITY`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_vdm\_f.html