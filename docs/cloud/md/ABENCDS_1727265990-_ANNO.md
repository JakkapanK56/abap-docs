---
title: "ABENCDS_1727265990-_ANNO"
description: |
  ABENCDS_1727265990-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1727265990-_ANNO.htm"
abapFile: "ABENCDS_1727265990-_ANNO.html"
keywords: ["select", "do", "if", "case", "try", "data", "ABENCDS", "1727265990", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This section defines the additional annotations that we need on the level of analytical queries.

The AnalyticsDetails.query.hierarchyBinding annotations allow you to specify a special hierarchy for an element with a display hierarchy. One tuple has to be specified for each key field of the hierarchy directory view. The first entry is supplied to the first key field of the hierarchy directory, the second entry to the second key field, and so on. If there is no hierarchy directory, the hierarchy binding can be omitted.

General example for AnalyticsDetails.hierarchyBinding type annotations:

AnalyticsDetails.query.hierarchBinding: \\{type : #PARAMETER, value 'parameter\_name'\\}.

In this case, parameter\_name specifies the name of a parameter. This annotation is an array of the sub-annotations -type, -value, and variablesequence. See details below.

This annotation contains, depending on the type, a literal value, the parameter name (without : $parameter), the element name and an identifier for the user input field, respectively. In case of type #SYSTEM\_FIELD, the allowed values are those of @Environment.systemField for system field.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.query.hierarchyBinding[ ].value`\\ **Scope** `#ELEMENT`\\ **Type** `String(512)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`