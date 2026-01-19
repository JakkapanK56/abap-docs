---
title: "ABENCDS_2102703154_ANNO"
description: |
  ABENCDS_2102703154_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2102703154_ANNO.htm"
abapFile: "ABENCDS_2102703154_ANNO.html"
keywords: ["select", "do", "if", "method", "class", "ABENCDS", "2102703154", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

The annotation can be used in an analytical query view or in a cube view. If the annotation is defined for a cube view, then it is valid for all queries which select from this view and don't support the annotation themselves.

If a user triggers "jump to target" via Intent-Based Navigation on a cell of a query result, then the analytical engine collects all filters applied to this cell and passes these to the target. If a class is specified, then the filters can be manipulated and adjusted by the methods of the interface.

Name of the class which will adjust the filters. The class must implement the interface IF\_BICS\_INA\_CDS\_IBN\_EXIT.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.intentBasedNavigation.filterMapper`\\ **Scope** `#VIEW`\\ **Type** `DevelopmentObjectRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html