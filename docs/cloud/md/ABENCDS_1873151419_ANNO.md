---
title: "ABENCDS_1873151419_ANNO"
description: |
  ABENCDS_1873151419_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1873151419_ANNO.htm"
abapFile: "ABENCDS_1873151419_ANNO.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "1873151419", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

Usually the Default Aggregation determines how measures are aggregated in analytics. But in some cases, for a special element of the entity (dimension of a cube) different aggregation behavior is needed. For example, measure “Inventory” can be summed up for the different plants and other dimensions but not for time. For time dimension, the last or average value might be relevant.

Exception aggregation is optional and used to define different (to the standard Default Aggregation) aggregation behavior for specified elements. In general there might be multiple elements in which a measure has to be aggregated differently. So a list of ExceptionAggregationSteps can be assigned.

This annotation defines the aggregation behavior.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.exceptionAggregationSteps[ ].exceptionAggregationBehavior`\\ **Scope** `#ELEMENT`\\ **Type** `String(14)`\\ **Enums** `#AVG, #COUNT, #COUNT_DISTINCT, #FIRST, #LAST, #MAX, #MEDIAN, #MIN, #NHA, #STD, #SUM`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`