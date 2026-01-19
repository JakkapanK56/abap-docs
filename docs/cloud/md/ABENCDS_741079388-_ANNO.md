---
title: "ABENCDS_741079388-_ANNO"
description: |
  ABENCDS_741079388-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_741079388-_ANNO.htm"
abapFile: "ABENCDS_741079388-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "741079388", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

For a tabular display of the query result, the elements can be positioned on multiple axes for the default layout. The elements can be directly annotated with their axis. Measures (elements that can be aggregated (@Aggregation.default)) all need to be on the same axis. The annotation of the first measure will therefore be used for all measures of the query. If no AnalyticsDetails.query.axis is found, the system positions the measures on the columns.

The default value for elements that are not measures is the free axis. Note that elements in the projection list, which belong to the same field in the query, for example, text field, will be grouped together.

Default value for elements other than measures. Dimension isn't displayed in the initial grid, but can be added to rows or columns by a user at runtime.

Default value for measures.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.axis`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#COLUMNS, #FREE, #ROWS`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`