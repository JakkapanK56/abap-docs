---
title: "No display hierarchy"
description: |
  With display hierarchy. The hierarchy used must be specified by AnalyticsDetails.query.hierarchyBinding. Only if there doesn't exist a hierarchy directory, the binding isn't necessary. The display hierarchy is the same one defined on the filter for this element. In this case, a hierarchy filter need
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_900971148_ANNO.htm"
abapFile: "ABENCDS_900971148_ANNO.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "900971148", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

This annotation allows you to specify the display hierarchy attribute for the element. It isn't possible for measures. The query result is shown in a hierarchy for the specified element.

No display hierarchy

With display hierarchy. The hierarchy used must be specified by AnalyticsDetails.query.hierarchyBinding. Only if there doesn't exist a hierarchy directory, the binding isn't necessary.

The display hierarchy is the same one defined on the filter for this element. In this case, a hierarchy filter needs to be defined on the same element. The hierarchy binding is taken from the filter.

This is similar to FILTER but display hierarchy can't be changed at runtime.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.displayHierarchy`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#FILTER, #FILTER_ONLY, #OFF, #ON`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html