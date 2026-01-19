---
title: "ABENCDS_730974330_ANNO"
description: |
  ABENCDS_730974330_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_730974330_ANNO.htm"
abapFile: "ABENCDS_730974330_ANNO.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "730974330", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

This annotation allows you to specify the formula expression, which can't be expressed as an SQL formula (operands required from the element list of the view). Only numerical values (measures) can be used as operands.

This expression can contain the following:

-   Cube measures
-   Arithmetic expressions
-   Functions NDIV0 and NODIM
-   CASE expressions with a maximum of one THEN clause (will be translated into BW IF operator)

-   WHEN clause can contain conditional or Boolean
-   ELSE clause is optional (default to ELSE 0)

-   Cube measures
-   Arithmetic expressions
-   Functions NDIV0 and NODIM
-   CASE expressions with a maximum of one THEN clause (will be translated into BW IF operator)

-   WHEN clause can contain conditional or Boolean
-   ELSE clause is optional (default to ELSE 0)

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.formula`\\ **Scope** `#ELEMENT`\\ **Type** `String(1298)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`