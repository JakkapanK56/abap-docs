---
title: "Eliminate Internal Business Volume with This Feature"
description: |
  This functionality enables the elimination of internal business volume. Here is an illustrative example to clarify its meaning: Consider a company with multiple subsidiaries, each further divided into additional subsidiaries, forming a hierarchical structure. Inter-subsidiary product sales are recor
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1795438715-_ANNO.htm"
abapFile: "ABENCDS_1795438715-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1795438715", "ANNO"]
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

The volume is eliminated if all pairs are internal (this is the default rule).

The volume is eliminated if at least one pair is internal.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.elimination.rule`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#ELIMINATE_IF_ALL, #ELIMINATE_IF_ONE`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`