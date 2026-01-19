---
title: "No KTD found"
description: |
  The Analytic Engine can map some OLAP features as an SAP HANA calculation scenario. This means some calculations are not calculated in the ABAP server but rather in HANA, which is faster in most cases. This is what we call 'pushdown'. Unfortunately, the performance is not improved by the pushdown in
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1870969825-_ANNO.htm"
abapFile: "ABENCDS_1870969825-_ANNO.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "1870969825", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

The Analytic Engine can map some OLAP features as an SAP HANA calculation scenario. This means some calculations are not calculated in the ABAP server but rather in HANA, which is faster in most cases. This is what we call "pushdown". Unfortunately, the performance is not improved by the pushdown in all cases. By default, all queries using certain features will be processed with pushdown. With Analytics.settings.olapPushdown: #OFF set for a cube view, you can switch off the pushdown for all queries of that cube. If the annotation is set on query level, then the setting of the cube is overruled. This means with #OFF you can switch off the pushdown for a single query. With #MAX, pushdown is performed even if the pushdown has been switched off in the cube.

The Analytic Engine doesn't use the pushdown mechanism and accesses cube data via SQL (corresponds to TREXOPS = 0).

The Analytic Engine performs the pushdown if the relevant features are used in the query (corresponds to TREXOPS = 9).

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.olapPushdown`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(30)`\\ **Enums** `#MAX, #OFF`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html