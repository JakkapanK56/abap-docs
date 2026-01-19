---
title: "ABENCDS_568606453-_ANNO"
description: |
  ABENCDS_568606453-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_568606453-_ANNO.htm"
abapFile: "ABENCDS_568606453-_ANNO.html"
keywords: ["select", "do", "if", "class", "data", "ABENCDS", "568606453", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

By specifying the dataCategory, you can give directives and hints to analytical engine how to interpret the individual entities. In addition to the below mentioned data categories, *ObjectModel.dataCategory: #TEXT* is relevant for CDS views with language dependent text.

This value indicates that the entity represents master data. This kind of view can be used for replication and for queries.

Example: Typical dimensions are material view and customer view.

Indicates that the entity represents transactional data. Usually, it contains the measures.

The #CUBE value (like #FACT) also represents factual data, but #CUBE doesn't have to be without redundancy. This means joins with master data are possible. Queries are usually built on top of #CUBE, where data is replicated from facts.

This value indicates a projection. For this kind of view, the analytic manager offers write-back functionality (planning functionality). Views in this category must select from a view with dataCategory = #CUBE, which supports the annotation Analytics.writeBack.className. No associations are allowed, and elements can't be renamed.

Note: This value should not be used for this annotation. This is used for planning scenarios. These planning scenarios aren't currently available in cloud platforms but only on premise.

This value indicates that the view stores comments/documents which are displayed in result sets of analytical queries. The view must select from a database table and renaming (alias) of fields is not allowed.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.dataCategory`\\ **Scope** `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `String(20)`\\ **Enums** `#AGGREGATIONLEVEL, #CUBE, #DIMENSION, #DOCSTORE, #FACT`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html