---
title: "ABENCDS_1535828704_ANNO"
description: |
  ABENCDS_1535828704_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1535828704_ANNO.htm"
abapFile: "ABENCDS_1535828704_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1535828704", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

The feature "constant selection" of the analytic engine can be modeled by using the annotations AnalyticsDetails.query.ignoreFurtherFilter.forElement, which expects a list of elements, names, and the annotation, and AnalyticsDetails.query.ignoreFurtherFilter.forAllElements, With variant forAllElements, filters for all dimensions are ignored. With variant,forElement, only the filters for the dimension in that list are ignored. For more information about this features see the documentation https://help.sap.com/viewer/0ecf5244825c4742a7b062a89d11c2ac/1709.latest/en-US/4f03364885212f98e10000000a42189d.html?q=constant%20selection

See above.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.ignoreFurtherFilter.forAllElements`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html