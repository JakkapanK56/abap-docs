---
title: "ABENCDS_1412905580-_ANNO"
description: |
  ABENCDS_1412905580-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1412905580-_ANNO.htm"
abapFile: "ABENCDS_1412905580-_ANNO.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENCDS", "1412905580", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This is an annotation for a parameter. In core CDS a parameter represents a mandatory, single value variable at runtime. With this annotation a parameter becomes a variable which represents a hierarchy node, an interval or a range. It can also become optional or can represent multiple values. This is only supported in analytics. Analytical queries using this feature can't be published via OData.

This is a classification that corresponds to the terminology Parameter Variable, Filter Variable, Formula Variable. The actual usage of the parameter in the view definition has to match the intended usage expressed with this annotation. Whether the parameter is used according to the usageType is not veryfied by the analytical engine.

The variable is used for a parameter of the underlaying data source, i.e. the value is pushed down at runtime via SQL to the corresponding data source.

The variable is used in filters for the dimension represented by the element annotated as referenceElement. Filters are typically global filters (CDS: where clause), or element restrictions in Restricted Measures (CDS: sub expression in CASE...WHEN... expressions).

The variable is used as a placeholder in expressions defining calculated measures (i.e. virtual elements with formula aggregation, referring to other elements with measure semantics).

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.variable.usageType`\\ **Scope** `#PARAMETER`\\ **Type** `String(20)`\\ **Enums** `#FILTER, #FORMULA, #PARAMETER`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analyticsdetails\_f.html