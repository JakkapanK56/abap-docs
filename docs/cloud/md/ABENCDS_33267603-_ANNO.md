---
title: "No KTD found"
description: |
  The Analytic Engine usually displays the initial value of a dimension as '#'. With annotation @Analytics.settings.displayOriginalInitialValue: true, the external value of the initial value will be shown. This annotation can be set in the header of a DIMENSION or TEXT view, or it can be set in a CU
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_33267603-_ANNO.htm"
abapFile: "ABENCDS_33267603-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "33267603", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

The Analytic Engine usually displays the initial value of a dimension as '#'.

With annotation *@Analytics.settings.displayOriginalInitialValue: true*, the external value of the initial value will be shown.

This annotation can be set in the header of a DIMENSION or TEXT view, or it can be set in a CUBE view for a field without foreign key association or text association. Also, this annotation can only be set for dimensions where the initial value is not a space.

Showing '#' is the default if the annotation is not set.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.displayOriginalInitialValue`\\ **Scope** `#ELEMENT`, `#ENTITY`, `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`