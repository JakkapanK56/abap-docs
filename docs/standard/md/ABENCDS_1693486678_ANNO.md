---
title: "No KTD found"
description: |
  No KTD found This annotation can be used in views of the type @Analytics.dataCategory: #DIMENSION and in views of type @ObjectModel.dataCategory: #TEXT. It should be used in TEXT views only if there doesn't exist a DIMENSION view. This means, if exist a text association for the representative ke
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1693486678_ANNO.htm"
abapFile: "ABENCDS_1693486678_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1693486678", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

No KTD found

This annotation can be used in views of the type *@Analytics.dataCategory: #DIMENSION* and in views of type *@ObjectModel.dataCategory: #TEXT*. It should be used in TEXT views only if there doesn't exist a DIMENSION view. This means, if exist a text association for the representative key field, then the annotation of the dimension is relevant and the annotation of the text view will be ignored.

If annotation *@Analytics.settings.valueHelp.supressInitialValue: true* is set, the Analytic Engine will not add an extra line for the initial value when value help is processed. If a record exists with initial key, it will always be shown, independent of the annotation.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.valueHelp.supressInitialValue`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html