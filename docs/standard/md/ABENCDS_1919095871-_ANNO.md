---
title: "ABENCDS_1919095871-_ANNO"
description: |
  ABENCDS_1919095871-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1919095871-_ANNO.htm"
abapFile: "ABENCDS_1919095871-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1919095871", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

When an annotation is set to a hierarchy association within a query, the hierarchy is joined in a temporal manner. This implies that the fact data is assigned to the corresponding node at the specific time indicated in the fact row. Given that there may be multiple time dimensions within the cube, an annotation is required to reference the pertinent time element. The validity of a leaf or node in the hierarchy is always delineated by a date-based interval. Consequently, a rule is necessary for deriving a date in situations where the time element is not explicitly a date but rather a month, quarter, fiscal period, etc. There are three available rules: 1) use the start date of the period, 2) use the end date of the period, or 3) apply an offset starting from the first day. If the offset exceeds the length of the period, the last day is utilized.

If the time element is not a date, you can specify with this annotation, whether the derived date should be the first date, last date, or a date with special offset of that period.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.temporalJoin.derivationType`\\ **Scope** `#ELEMENT`\\ **Type** `String(20)`\\ **Enums** `#FIRST_DAY, #LAST_DAY, #OFFSET`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html