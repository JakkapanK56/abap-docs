---
title: "No KTD found"
description: |
  This annotation will be interpreted by the Analytic Engine for analytical query views (define transient view entity ... provider contract analytical_query as projection on or annotation @Analytics.query: true). If InfoProviders store large amounts of data, certain queries can retrieve large res
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1037361749_ANNO.htm"
abapFile: "ABENCDS_1037361749_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1037361749", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

This annotation will be interpreted by the Analytic Engine for analytical query views (*define transient view entity ... provider contract analytical\_query as projection on* or annotation *@Analytics.query: true*).

If InfoProviders store large amounts of data, certain queries can retrieve large result sets. The maxProcessingEffort is the maximum effort expected by Analytic Engine for processing the data it retrieves.

When the limit is reached, the Analytic Engine returns an error message, and the user can set filters or remove dimensions from the axis to get smaller result sets.

Without this annotation, by default the maxProcessingEffort = #HIGH.

#LOW: Effort limit is 1,000

#MEDIUM: Effort limit is 100,000

#HIGH: Effort limit is 1,000,000 (the default value)

#UNLIMITED: There is no limit when reading data, but processing might crash memory overflow error or other similar issues may occur.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.maxProcessingEffort`\\ **Scope** `#ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#HIGH, #LOW, #MEDIUM, #UNLIMITED`\\ **Default** `#HIGH`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`