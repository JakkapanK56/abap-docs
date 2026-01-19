---
title: "ABENCDS_1152620375-_ANNO"
description: |
  ABENCDS_1152620375-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1152620375-_ANNO.htm"
abapFile: "ABENCDS_1152620375-_ANNO.html"
keywords: ["do", "if", "class", "ABENCDS", "1152620375", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

This is only interpreted in the context of an analytical query to check the consistency of the variable input.

Prefix “ABAP:” followed by the name of an ABAP class that implements interface IF\_RSRTS\_CDS\_VARIABLE\_CHECK.

For example:

*@Analytics.variableCheck.implementedBy: 'ABAP:ZCL\_CHECK\_VARIABLES'*

In the above annotation, 'ZCL\_CHECK\_VARIABLES' is the name of the ABAP class that implemented interface IF\_RSRTS\_CDS\_VARIABLE\_CHECK.

Refer to Interface Documentation for more information on IF\_RSRTS\_CDS\_VARIABLE\_CHECK.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.variableCheck.implementedBy`\\ **Scope** `#ENTITY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(255)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`