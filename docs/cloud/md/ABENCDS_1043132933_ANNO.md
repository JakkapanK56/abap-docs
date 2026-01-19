---
title: "No KTD found"
description: |
  This annotation should be used for elements (dimensions) in CUBE views. It ensures that all analytic queries on top of the CUBE view provide a filter for that element. #UNIQUE_PER_CELL: The filter must be unique for each structure element, but different structure elements might have different
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1043132933_ANNO.htm"
abapFile: "ABENCDS_1043132933_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1043132933", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

This annotation should be used for elements (dimensions) in **CUBE** views. It ensures that all analytic queries on top of the CUBE view provide a filter for that element.

#UNIQUE\_PER\_CELL: The filter must be unique for each structure element, but different structure elements might have different filter values.

#UNIQUE\_PER\_QUERY: The filter must be unique in the query.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.constraints.filter`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#UNIQUE_PER_CELL, #UNIQUE_PER_QUERY`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM`