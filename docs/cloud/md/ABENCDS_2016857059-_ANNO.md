---
title: "No KTD found"
description: |
  No KTD found This is only interpreted in the context of an analytical query and defines how zero values should be treated in the result set. #SHOW: You can specify that zeros are to be displayed (i.e., no zero suppression takes place). The default is #SHOW. #HIDE: If you want to suppress zeros, ther
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_2016857059-_ANNO.htm"
abapFile: "ABENCDS_2016857059-_ANNO.html"
keywords: ["do", "if", "class", "ABENCDS", "2016857059", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

No KTD found

This is only interpreted in the context of an analytical query and defines how zero values should be treated in the result set.

#SHOW: You can specify that zeros are to be displayed (i.e., no zero suppression takes place). The default is #SHOW.

#HIDE: If you want to suppress zeros, there are two options available: #HIDE and #HIDE\_IF\_ALL . For queries that have characteristics in the rows and key figures in the columns (or the other way around, with key figures in the rows and characteristics in the columns), the effect of the settings is identical. The two settings only differ in how they affect queries that have characteristics in the rows and columns (cross-classified table). If you use zero suppression with the #HIDE value, the system checks whether there are zero values in the results area. If there are zero values in the results area, the corresponding row or column is hidden.

#HIDE\_IF\_ALL: For queries that have characteristics in the rows and key figures in the columns (or the other way around, with key figures in the rows and characteristics in the columns), the effect of the value is identical to #HIDE. If your query has characteristics in the rows and columns however (cross-classified table), and you use zero suppression with the #HIDE\_IF\_ALL value, the system hides all rows or columns that contain zero values.

Note: If a detail row is not equal to zero (in a hierarchy for example), all superordinate rows are displayed, even if they contain zeros. As a result, the system ensures that the business context of the query is retained for the end user, even if the value #HIDE\_IF\_ALL is set.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.zeroValues.handling`\\ **Scope** `#ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#HIDE, #HIDE_IF_ALL, #SHOW`\\ **Default** `#SHOW`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`