---
title: "Sort ascending (default)"
description: |
  Sort descending Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `AnalyticsDetails.query.sortDirection` Scope `#ELEMENT` Type `String(20)` Enums `#ASC, #DESC` Default `-` Text `-` MDE `-` API `RELEASED_FOR_KEY_USER_APP
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_882208844-_ANNO.htm"
abapFile: "ABENCDS_882208844-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "882208844", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

With this annotation, the sort direction can be set #ASC (ascending) and #DESC (descending). If nothing is specified, the rows are sorted ascending by first dimension, second dimension, and so on. The same is true for dimension on columns.

Sort ascending (default)

Sort descending

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.sortDirection`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#ASC, #DESC`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`