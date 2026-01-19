---
title: "No KTD found"
description: |
  This is only interpreted in the context of an analytical query and must be used in the header of the CDS view. This annotation specifies if the totals are shown to the right or the left of the details. If nothing is specified, the default is #RIGHT without display hierarchy and #LEFT with display hi
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_922459005_ANNO.htm"
abapFile: "ABENCDS_922459005_ANNO.html"
keywords: ["do", "if", "ABENCDS", "922459005", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

This is only interpreted in the context of an analytical query and must be used in the header of the CDS view.

This annotation specifies if the totals are shown to the right or the left of the details.

If nothing is specified, the default is #RIGHT without display hierarchy and #LEFT with display hierarchy.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.columns.totalsLocation`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(10)`\\ **Enums** `#LEFT, #RIGHT`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html