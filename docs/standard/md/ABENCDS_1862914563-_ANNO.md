---
title: "ABENCDS_1862914563-_ANNO"
description: |
  ABENCDS_1862914563-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1862914563-_ANNO.htm"
abapFile: "ABENCDS_1862914563-_ANNO.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "ABENCDS", "1862914563", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

This annotation is only for views with *@Analytics.dataCategory #CUBE*. It specifies an ABAP-class which must implement the interface IF\_RSRTS\_CDS\_READ. At runtime, the Analytic Engine (and only this) calls the methods of the class instead selecting data from the CDS view. This means the Analytic Engine can't use any optimization like HANA-pushdown for complex queries. Furthermore, the developer of the class is responsible for data authorization (DCL). Therefore, the annotation should only be used in exceptional cases.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.readClassName`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `NOT_RELEASED` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html