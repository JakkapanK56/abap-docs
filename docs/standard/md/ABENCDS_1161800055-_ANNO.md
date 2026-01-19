---
title: "ABENCDS_1161800055-_ANNO"
description: |
  ABENCDS_1161800055-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1161800055-_ANNO.htm"
abapFile: "ABENCDS_1161800055-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1161800055", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

The annotations regarding planning are only possible in Analytical Queries which are on top of a Analytical Provider which has Analytics.dataCategory: #AGGREGATIONLEVEL. Furthermore the header annotation @Analytics.planning.enabled: true must be available.

Reference for the distribution type PROPORTIONAL\_REF

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.planning.distributionReference`\\ **Scope** `#ELEMENT`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `NOT_RELEASED` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html