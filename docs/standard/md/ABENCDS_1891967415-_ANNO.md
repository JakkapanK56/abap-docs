---
title: "ABENCDS_1891967415-_ANNO"
description: |
  ABENCDS_1891967415-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1891967415-_ANNO.htm"
abapFile: "ABENCDS_1891967415-_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "1891967415", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`VDM Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17).

VDM annotations classify CDS views of the virtual data model in terms of their admissible resuse options and provisioned content.

The intention of the annotations is to enable certain functionalities that are based on the VDM, such as view browsers, to interpret the CDS entities correctly.

**Evaluation Runtimes**

VDM annotations have no influence on runtime, so there are no dependencies for runtime engines.

This annotation defines an extension of another CDS view that is part of the VDM.

**Do not** combine this annotation with any of the following annotations. They are inherited from the view that is being extended:

-   `@VDM.viewType`
-   `@VDM.private`
-   `@VDM.lifecycle`

-   `@VDM.viewType`
-   `@VDM.private`
-   `@VDM.lifecycle`

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `VDM.viewExtension`\\ **Scope** `#EXTEND_VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_vdm\_f.html