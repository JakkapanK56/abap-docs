---
title: "No KTD found"
description: |
  This annotation defines an SAP-internal information about the lifecycle status of a CDS entity or element. This information is relevant only for SAP-internal purposes and not to be confused with the external deprecation that is relevant for customers. Only the external deprecation of a CDS entity or
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2037772357-_ANNO.htm"
abapFile: "ABENCDS_2037772357-_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "2037772357", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`VDM Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/efe9c80fc6ba4db692e08340c9151a17).

VDM annotations classify CDS views of the virtual data model in terms of their admissible resuse options and provisioned content.

The intention of the annotations is to enable certain functionalities that are based on the VDM, such as view browsers, to interpret the CDS entities correctly.

**Evaluation Runtimes**

VDM annotations have no influence on runtime, so there are no dependencies for runtime engines.

No KTD found

This annotation defines an SAP-internal information about the lifecycle status of a CDS entity or element. This information is relevant only for SAP-internal purposes and not to be confused with the external deprecation that is relevant for customers. Only the external deprecation of a CDS entity or element requires customer content to be adapted.

The external deprecation is expressed, at the entity level, via the API State that can be viewed in the entity’s Properties view. At the element level, it’s expressed via the annotation `@API.releaseState`. For more information, see the [annotation definition for @API](DDLA:API).

This CDS entity or element is deprecated and should no longer be used. It should be replaced with its successor.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `VDM.lifecycle.status`\\ **Scope** `#ELEMENT`, `#ENTITY`\\ **Type** `String(30)`\\ **Enums** `#DECOMMISSIONED, #DEPRECATED`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_vdm\_f.html