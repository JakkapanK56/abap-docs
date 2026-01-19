---
title: "ABENCDS_180977041_ANNO"
description: |
  ABENCDS_180977041_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_180977041_ANNO.htm"
abapFile: "ABENCDS_180977041_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "180977041", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

When an annotation is set to a hierarchy association within a query, the hierarchy is joined in a temporal manner. This implies that the fact data is assigned to the corresponding node at the specific time indicated in the fact row. Given that there may be multiple time dimensions within the cube, an annotation is required to reference the pertinent time element. The validity of a leaf or node in the hierarchy is always delineated by a date-based interval. Consequently, a rule is necessary for deriving a date in situations where the time element is not explicitly a date but rather a month, quarter, fiscal period, etc. There are three available rules: 1) use the start date of the period, 2) use the end date of the period, or 3) apply an offset starting from the first day. If the offset exceeds the length of the period, the last day is utilized.

Specify the time element from which a date should be derived.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.temporalJoin.timeElement`\\ **Scope** `#ELEMENT`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`