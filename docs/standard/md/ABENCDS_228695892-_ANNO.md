---
title: "ABENCDS_228695892-_ANNO"
description: |
  ABENCDS_228695892-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_228695892-_ANNO.htm"
abapFile: "ABENCDS_228695892-_ANNO.html"
keywords: ["delete", "do", "if", "data", "ABENCDS", "228695892", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

The business users would like to add, modify, or delete comments in the cells of the result set of a Query in Analytic Engine. The comments should be visible in all queries of one cube view which share the same filters. With the proposed annotations we would like to achieve this. With the **document** Annotations it is possible to define a storage for documents, assign cube views to a storage and enable an analytical query for comments. The view which provides the documents (storage) needs the annotation *@Analytics.dataCategory: #DOCSTORE*.

These annotations are used for describing the meaning of the fields in the Document CDS View.

#DOC: Administrative fields must have the annotations type #DOC and semantics

#TRA: This is one of the *reference* fields and must have the same type as the field in the cube view.

#SVA (CHAR 1): This is one of the *reference* fields

#SVH (CHAR 1): Used when dimension supports hierarchies

#HNM (CHAR 30): Used when dimension supports hierarchies

#HNO (CHAR 32): Used when dimension supports hierarchies

#HIO (CHAR 30): Used when dimension supports hierarchies

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.document.type`\\ **Scope** `#ELEMENT`\\ **Type** `String(4)`\\ **Enums** `#DOC, #HIO, #HNM, #HNO, #SVA, #SVH, #TRA`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html