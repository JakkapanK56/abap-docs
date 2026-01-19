---
title: "ABENCDS_1915515413_ANNO"
description: |
  ABENCDS_1915515413_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1915515413_ANNO.htm"
abapFile: "ABENCDS_1915515413_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1915515413", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

Names in the analytical model are derived from the annotation *@AbapCatalog.sqlViewName* for CDS views or from the CDS name for view entities. If a view entity provides the annotation *@Analytics.technicalName*, the name in the analytical model is derived from this. It should only be used, when migrating a CDS view to a CDS view entity.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.technicalName`\\ **Scope** `#ENTITY`, `#HIERARCHY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(28)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`