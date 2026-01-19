---
title: "Totals or subtotals are added to the result set if more than one member exists"
description: |
  Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `AnalyticsDetails.query.totals` Scope `#ELEMENT` Type `String(20)` Enums `#CONDITIONAL, #HIDE, #SHOW` Default `-` Text `-` MDE `-` API `RELEASED_FOR_KEY_USER_APPS, RELEA
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1587493176_ANNO.htm"
abapFile: "ABENCDS_1587493176_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1587493176", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

For dimensions, you can set the behavior for totals. These annotations will be ignored for measures.

Totals or subtotals are not added to the result set for this element.

In addition to the details, the subtotals are added to the result set for this element.

Totals or subtotals are added to the result set if more than one member exists

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.totals`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#CONDITIONAL, #HIDE, #SHOW`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`