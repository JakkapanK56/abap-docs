---
title: "ABENCDS_1253171795-_ANNO"
description: |
  ABENCDS_1253171795-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1253171795-_ANNO.htm"
abapFile: "ABENCDS_1253171795-_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1253171795", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

If user input is necessary for the parameter, the sequence of all fields for user input at runtime can be specified with this annotation. UIs will create user prompts for parameters that require a user input or elements with filters (consumption.filter). This annotation can be used to specify the sequence of user prompts at runtime. If filters or parameters are not annotated, they are displayed after the annotated ones - in the order they appear in the CDS document. The sequence is calculated according to the order of all variables. (Type: Integer. Integer values may contain gaps.)

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.variableSequence`\\ **Scope** `#ELEMENT`, `#PARAMETER`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html