---
title: "No KTD found"
description: |
  No KTD found @Analytics.settings.runtimeExtensibility.allowed: true: If this annotation is set in the header of the CDS query view, some BI tools offer the possibility to extend the runtime view with further dimensions or measures at runtime. This is not possible if this annotation is not set. If
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1999912159_ANNO.htm"
abapFile: "ABENCDS_1999912159_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1999912159", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

No KTD found

*@Analytics.settings.runtimeExtensibility.allowed: true*: If this annotation is set in the header of the CDS query view, some BI tools offer the possibility to extend the runtime view with further dimensions or measures at runtime. This is not possible if this annotation is not set. If not all dimensions or measures of the cube view should be used, these can be excluded with the annotation *@Analytics.excludeFromRuntimeExtensibility: true*.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.runtimeExtensibility.allowed`\\ **Scope** `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html