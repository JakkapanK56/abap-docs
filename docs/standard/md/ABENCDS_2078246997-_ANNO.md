---
title: "No KTD found"
description: |
  No KTD found This annotation describes the intended publication or usage of the CDS view as an API. This CDS view is used to define a remote API. This CDS view is used as a system-internal API. This is the default for `BASIC` and `COMPOSITE` views. This CDS view is marked for SAP-internal usage only
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2078246997-_ANNO.htm"
abapFile: "ABENCDS_2078246997-_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "2078246997", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`VDM Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17).

VDM annotations classify CDS views of the virtual data model in terms of their admissible resuse options and provisioned content.

The intention of the annotations is to enable certain functionalities that are based on the VDM, such as view browsers, to interpret the CDS entities correctly.

**Evaluation Runtimes**

VDM annotations have no influence on runtime, so there are no dependencies for runtime engines.

No KTD found

No KTD found

This annotation describes the intended publication or usage of the CDS view as an API.

This CDS view is used to define a remote API.

This CDS view is used as a system-internal API. This is the default for `BASIC` and `COMPOSITE` views.

This CDS view is marked for SAP-internal usage only. This is the default for `TRANSACTIONAL` views.

This CDS view isn't subject to any stability contract. This is the default for `PRIVATE` and `CONSUMPTION` views.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `VDM.lifecycle.contract.type`\\ **Scope** `#ENTITY`\\ **Type** `String(30)`\\ **Enums** `#NONE, #PUBLIC_LOCAL_API, #PUBLIC_REMOTE_API, #SAP_INTERNAL_API`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_vdm\_f.html