---
title: "ABENCDS_1081205336_ANNO"
description: |
  ABENCDS_1081205336_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1081205336_ANNO.htm"
abapFile: "ABENCDS_1081205336_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1081205336", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

This annotation is relevant for dimensions in analytic queries and in cube views.

This annotation defines if a dimension should be displayed as (external) key or text in the default layout. If nothing is specified, the default is taken from the Analytical Provider. If it is not specified in the Analytical Provider, the default is #TEXT if the dimension supports text. Otherwise, the default is #KEY.

The key will be displayed.

The text will be displayed.

Text and key will both be displayed - text first.

Key and text will both be displayed - key first.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.display`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#KEY, #KEY_TEXT, #TEXT, #TEXT_KEY`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`