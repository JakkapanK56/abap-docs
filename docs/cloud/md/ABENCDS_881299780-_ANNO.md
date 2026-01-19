---
title: "ABENCDS_881299780-_ANNO"
description: |
  ABENCDS_881299780-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_881299780-_ANNO.htm"
abapFile: "ABENCDS_881299780-_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "881299780", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

Via this annotation (@Analytics.query: true), it can be decided if this is a query view that will be exposed to the Analytic Engine. The query views are built on top of reuse views classified as DataCategory = #CUBE (transient provider) or DataCategory = #DIMENSION (master data reporting). They inherit the dimensions, measures, and the hierarchies from the reuse view. This annotation is deprecated. Instead you should use the special transient view entites defined by native CDS:

define transient view entity <name of view>

provider contract analytical\_query

as projection on <name of source>

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.query`\\ **Scope** `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`