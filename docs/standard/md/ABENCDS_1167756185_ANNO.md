---
title: "ABENCDS_1167756185_ANNO"
description: |
  ABENCDS_1167756185_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1167756185_ANNO.htm"
abapFile: "ABENCDS_1167756185_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1167756185", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

Specifies the Analytic Engine with which the analytical query should be processed. The engines might offer different features.

#AE: The query will be processed by the Analytic Engine that is implemented in ABAP, but number crunching is pushed down to HANA. This is the default setting.

#MDS: The query will be processed by the MDS Analytical Engine inside SAP HANA (not supported yet).

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.processingEngine`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(5)`\\ **Enums** `#AE, #MDS`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `NOT_RELEASED` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html