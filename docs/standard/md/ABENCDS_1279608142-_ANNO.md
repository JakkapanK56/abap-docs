---
title: "ABENCDS_1279608142-_ANNO"
description: |
  ABENCDS_1279608142-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1279608142-_ANNO.htm"
abapFile: "ABENCDS_1279608142-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1279608142", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

The annotations regarding planning are only possible in Analytical Queries which are on top of an Analytical Provider that has Analytics.dataCategory: #AGGREGATIONLEVEL. Furthermore, the header annotation @Analytics.planning.enabled: true must be available.

Via this tag (@Analytics.planning.enabled: true), the structure member will become input enabled.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.planning.enabled`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `NOT_RELEASED` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html