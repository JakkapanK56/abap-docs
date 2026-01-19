---
title: "ABENCDS_476517418_ANNO"
description: |
  ABENCDS_476517418_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_476517418_ANNO.htm"
abapFile: "ABENCDS_476517418_ANNO.html"
keywords: ["delete", "do", "if", "class", "data", "ABENCDS", "476517418", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Analytics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/72c72e31b9f643d5a66a2bf0c9ce4bf2?version=sap_cross_product_abap).

Analytics and AnalyticsDetails capture the analytical aspects of a CDS entity. It is relevant if the analytical engine is interpreting the views. Semantically, the “Analytics” annotations can be differentiated between annotations that are relevant for the InfoProvider/CUBE-level and annotations being only relevant for Analytical Queries.

The CDS Extraction/Replication is a collaboration between BW and DataHub. It focuses on having a technical mean to calculate delta tuple on an ABAP Core Data Service (CDS). This delta information can be picked up by different ETL tools and therefore a huge amount of target environments can be supported. As this is a technical approach, no development effort is required from the applications building the CDS Views, besides marking this view as extraction enabled and telling the change data capture (CDC) mechanism on which tables/columns it shall be sensible - by means of annotations.

This annotation can be used in the Entities which are suitable for data replication/extraction.

\- CDS views for data extraction should be designed according to simplification principles instead of one-to-one replacement of classic extractors.

\- CDS views for data extraction should be either released to contract C1 or released as an API for use in Key User App or was created by Key User App and marked for use by other Key User Apps to guarantee compatibility for consumers of extracted data when the S/4HANA system is upgraded. When releasing a view with the C1-contract via Properties → API State choose visibility "Use in Key User Apps". Only C1-released extraction view with this visibility will be exposed in S/4HANA CE.

This annotation is used to enable delta extraction.

This is the element that should be used for filtering during delta extraction. This element can either be a date (ABAP type DATS) or a UTC time stamp.

If the field is a time stamp, the system also checks the annotation *Semantics.systemDate.lastChangedAt: true.* .

By using this annotation, the system will remember all key combinations of the view that were extracted in delta mode. If a key combination does not occur in the view anymore, this will automatically generate a delete image in the extracted data.

The default is *true* if this annotation is used.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Analytics.dataExtraction.delta.byElement.detectDeletedRecords`\\ **Scope** `#HIERARCHY`, `#TABLE_FUNCTION`, `#VIEW`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `NOT_RELEASED` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_analytics\_f.html