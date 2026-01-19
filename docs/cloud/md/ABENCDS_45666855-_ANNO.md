---
title: "No KTD found"
description: |
  Annotations belonging to UI.dataPoint.criticalityCalculation can be used as an alternative to specifying the criticality in the crtiticality element This annotation sets the highest tolerated specification limit for the criticality calculation. Kind Framework-specific annotation(ABENFRMWRK_ANN
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_45666855-_ANNO.htm"
abapFile: "ABENCDS_45666855-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "45666855", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`UI Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/5587d47763184cc48f164648b53c1e4f?version=sap_cross_product_abap).

The focus of OData UI vocabulary developed by SAP is on usage patterns of data in UIs, not on UI patterns. The vocabulary is completely independent of the UI technologies or devices that consume the data.

The usage patterns of data used by the OData UI vocabulary represent certain semantic views on business data. Some of them are very generic, others are based on the concept of an entity, something tangible to end-users. Examples for entities are semantic object instances or business object instances.

Looking at different UI patterns, these data usage patterns reoccur again and again. To generate OData annotations from CDS views, CDS annotations are reused from different domains, for example Consumption, Communication, Semantics, EndUserText. The CDS annotations that are additionally required in a UI domain are listed in the following table.

Annotations belonging to @UI.kpi represent the Key Performance indicators of a single point of data.

No KTD found

Annotations belonging to UI.dataPoint.criticalityCalculation can be used as an alternative to specifying the criticality in the crtiticality element

This annotation sets the highest tolerated specification limit for the criticality calculation.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `UI.kpi[ ].dataPoint.criticalityCalculation.toleranceRangeHighValue`\\ **Scope** `#ELEMENT`\\ **Type** `DecimalFloat`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`