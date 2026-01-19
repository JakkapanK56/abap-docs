---
title: "Eliminate Internal Business Volume with This Feature"
description: |
  This functionality enables the elimination of internal business volume. Here is an illustrative example to clarify its meaning: Consider a company with multiple subsidiaries, each further divided into additional subsidiaries, forming a hierarchical structure. Inter-subsidiary product sales are recor
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_785013031_ANNO.htm"
abapFile: "ABENCDS_785013031_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "785013031", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

Eliminate Internal Business Volume with This Feature

This functionality enables the elimination of internal business volume. Here is an illustrative example to clarify its meaning: Consider a company with multiple subsidiaries, each further divided into additional subsidiaries, forming a hierarchical structure. Inter-subsidiary product sales are recorded as external sales for each subsidiary. However, if both subsidiaries are descendants of a parent subsidiary, these sales are considered internal sales at the parent level.

To implement this, use the annotation in cube views (Analytics.dataCategory: #CUBE) or in analytical queries (define a transient view entity using an analytical query provider contract).

Prerequisites

A defined company hierarchy with subsidiaries.

Active inter-subsidiary sales processes.

Procedure

To eliminate internal business volume in cube views, apply the Analytics.dataCategory: #CUBE annotation.

For analytical queries, define a transient view entity and use an analytical query provider contract.

Result Internal sales between subsidiaries of the same parent are excluded from the overall sales volume, providing a more accurate representation of external sales performance.

Elimination Check Pairs: This list specifies the pairs (dimension1 and dimension2) that are evaluated for elimination. Both dimensions must have a foreign key association with the same target data view. When the annotation is applied at the cube level, both dimensions must be elements of the cube. When the annotation is used within an analytical query, both dimensions must be components of the source cube view.

Followed with the literal value of dimension2 name.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.elimination.pair[ ].dimension2`\\ **Scope** `#ELEMENT`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`