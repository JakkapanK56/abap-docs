---
title: "ABENCDS_923050150-_ANNO"
description: |
  ABENCDS_923050150-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_923050150-_ANNO.htm"
abapFile: "ABENCDS_923050150-_ANNO.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "923050150", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This is an annotation for a parameter. In core CDS a parameter represents a mandatory, single value variable at runtime. With this annotation a parameter becomes a variable which represents a hierarchy node, an interval or a range. It can also become optional or can represent multiple values. This is only supported in analytics. Analytical queries using this feature can't be published via OData.

An element in the result structure or (else) in the underlying data source to which the variable refers. In case of a filter variable this annotation is mandatory and must contain the element which represents the dimension. In general it restricts the usage in expressions, serves a reference for default values and it may result in a default value help.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.variable.referenceElement`\\ **Scope** `#PARAMETER`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html