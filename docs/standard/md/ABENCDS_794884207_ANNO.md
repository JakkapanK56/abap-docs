---
title: "Not compounded characteristic value in external display"
description: |
  Compounded characteristic value in external display Display depends on uniqueness of compounded key - if it is unique due to selection of drill down it will be shown not compounded Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `AnalyticsDetails.query.keyDis
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_794884207_ANNO.htm"
abapFile: "ABENCDS_794884207_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "794884207", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

It defines the display setting for compounded keys via an annotation.

Not compounded characteristic value in external display

Compounded characteristic value in external display

Display depends on uniqueness of compounded key - if it is unique due to selection of drill down it will be shown not compounded

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.keyDisplay`\\ **Scope** `#ELEMENT`\\ **Type** `String(30)`\\ **Enums** `#COMPOUND, #CONTEXT_DEPENDENT, #NOT_COMPOUND`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html