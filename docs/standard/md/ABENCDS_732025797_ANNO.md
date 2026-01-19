---
title: "ABENCDS_732025797_ANNO"
description: |
  ABENCDS_732025797_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_732025797_ANNO.htm"
abapFile: "ABENCDS_732025797_ANNO.html"
keywords: ["delete", "do", "if", "data", "ABENCDS", "732025797", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

The business users would like to add, modify, or delete comments in the cells of the result set of a Query in Analytic Engine. The comments should be visible in all queries of one cube view which share the same filters. With the proposed annotations we would like to achieve this. With the **document** Annotations it is possible to define a storage for documents, assign cube views to a storage and enable an analytical query for comments. The view which provides the documents (storage) needs the annotation *@Analytics.dataCategory: #DOCSTORE*.

List of cube views, for which the comments are provided. At first only one view is allowed. This annotation must be used in a document storage view (i.e., CDS view with header annotation *@Analytics.dataCategory: #DOCSTORE*).

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.document.storageForEntity[ ]`\\ **Scope** `#VIEW`\\ **Type** `EntityRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html