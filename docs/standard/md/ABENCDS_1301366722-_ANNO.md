---
title: "No KTD found"
description: |
  No KTD found You can specify whether rows or columns that contain zeros as values are to be hidden. #ROWS: Only rows that contain zeros as values are to be hidden. #COLUMNS: Only columns that contain zeros as values are to be hidden. #ROWS_COLUMNS: Rows and columns that contain zeros as values are
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1301366722-_ANNO.htm"
abapFile: "ABENCDS_1301366722-_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1301366722", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

No KTD found

No KTD found

You can specify whether rows or columns that contain zeros as values are to be hidden.

#ROWS: Only rows that contain zeros as values are to be hidden.

#COLUMNS: Only columns that contain zeros as values are to be hidden.

#ROWS\_COLUMNS: Rows and columns that contain zeros as values are to be hidden. The default is #ROWS\_COLUMNS.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.settings.zeroValues.hideOnAxis`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#COLUMNS, #ROWS, #ROWS_COLUMNS`\\ **Default** `#ROWS_COLUMNS`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html