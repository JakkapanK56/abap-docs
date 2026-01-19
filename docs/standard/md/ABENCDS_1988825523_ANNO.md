---
title: "Each detail gets the same portion"
description: |
  Proportional to the values of the details Proportional to the values of another element determined with annotation distributionReference Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `AnalyticsDetails.planning.distribution` Scope `#ELEMENT` Type
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1988825523_ANNO.htm"
abapFile: "ABENCDS_1988825523_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1988825523", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

The annotations regarding planning are only possible in Analytical Queries which are on top of a Analytical Provider which has Analytics.dataCategory: #AGGREGATIONLEVEL. Furthermore the header annotation @Analytics.planning.enabled: true must be available.

Determines the algorithm in which way the data is disaggregated.

Each detail gets the same portion

Proportional to the values of the details

Proportional to the values of another element determined with annotation distributionReference

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.planning.distribution`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#EQUAL, #PROPORTIONAL, #PROPORTIONAL_REF`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `NOT_RELEASED` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html