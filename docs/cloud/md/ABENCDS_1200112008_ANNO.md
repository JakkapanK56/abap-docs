---
title: "ABENCDS_1200112008_ANNO"
description: |
  ABENCDS_1200112008_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1200112008_ANNO.htm"
abapFile: "ABENCDS_1200112008_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1200112008", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

To enable Analytics, there has to be defined CDS views which represent the Analytical Provider and CDS view, which represent analytical queries. Analytical queries must select from an Analytical model. Views which belong to the Analytical Provider can be enabled for data extraction. The analytical queries can be consumed by BI-tools like SAP Analytics Cloud, Analysis for Office and others via the Analytical Engine.

Annotations belonging to domain AnalyticsDetails are all on element or parameter level.

This is an annotation for a parameter. In core CDS a parameter represents a mandatory, single value variable at runtime. With this annotation a parameter becomes a variable which represents a hierarchy node, an interval or a range. It can also become optional or can represent multiple values. This is only supported in analytics. Analytical queries using this feature can't be published via OData.

Is used in combination with defaultValue to specify a default for the upper bound of an interval: defaultValue contains the lower, defaultValueHigh the upper boundary of the interval. It is only useful for variables of selection type #INTERVAL or #RANGE.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `AnalyticsDetails.variable.defaultValueHigh`\\ **Scope** `#PARAMETER`\\ **Type** `String(1024)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`