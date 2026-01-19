---
title: "ABENCDS_624410338_ANNO"
description: |
  ABENCDS_624410338_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_624410338_ANNO.htm"
abapFile: "ABENCDS_624410338_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "624410338", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

The sign of a measure will be flipped (positive numbers will become negative and negative numbers will become positive). It is only a display features. Calculations with the measure will be performed with the "real" sign.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.reverseSign`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`