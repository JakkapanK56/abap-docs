---
title: "ABENCDS_669838829-_ANNO"
description: |
  ABENCDS_669838829-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_669838829-_ANNO.htm"
abapFile: "ABENCDS_669838829-_ANNO.html"
keywords: ["select", "delete", "do", "if", "data", "ABENCDS", "669838829", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

The business users would like to add, modify, or delete comments in the cells of the result set of a Query in Analytic Engine. The comments should be visible in all queries of one cube view which share the same filters. With the proposed annotations we would like to achieve this. With the **document** Annotations it is possible to define a storage for documents, assign cube views to a storage and enable an analytical query for comments. The view which provides the documents (storage) needs the annotation *@Analytics.dataCategory: #DOCSTORE*.

The annotation *@Analytics.document.semantics* is used for describing the meaning of the fields in the Document CDS View.

#ID: Field of type NUMC 16

#VERSION:

#TAG: Field of type CHAR 60

#QPROV: Field of type CHAR 30

#TYPE: Field of type CHAR 1

#OWNER: Field of type CHAR 12

#INFOPROV: Field of the type CHAR 30

#SVA\_INFOPROV: Field of the type CHAR 1

#KYFNM: Field of type CHAR 30

#STATUS: Field of type CHAR 1

#SESSION\_ID: Field of type CHAR 30

#TIMESTAMP: Field of type DEC 15. In CDS:ABAP data element with reference to domain TZNTSTMPS.

#DOCUMENT: Field of type RAWSTRING

#SELECTIONS: Field of type RAWSTRING

#PROPERTY: Field of type RAWSTRING

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.document.semantics`\\ **Scope** `#ELEMENT`\\ **Type** `String(30)`\\ **Enums** `#DOCUMENT, #ID, #INFOPROV, #KYFNM, #OWNER, #PROPERTY, #QPROV, #SELECTIONS, #SESSION_ID, #STATUS, #SVA_INFOPROV, #TAG, #TIMESTAMP, #TYPE, #VERSION`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`