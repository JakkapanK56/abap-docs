---
title: "ABENCDS_710938603-_ANNO"
description: |
  ABENCDS_710938603-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_710938603-_ANNO.htm"
abapFile: "ABENCDS_710938603-_ANNO.html"
keywords: ["select", "do", "if", "class", "data", "ABENCDS", "710938603", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

You can use this annotation to pass DB hints to HANA via select statement to optimize execution plans and hence performance. DB hints may be defined statically by using the annotation @Consumption.dbHint or programmatically by ABAP classes specified in @Consumption.dbHintCalculatedBy. All hints are expected to be merged and used by the consuming framework when it performs a select on the HANA DB.

Set DB hints if you want to improve performance.

-   The ABAP class `CL_SADL_GW_CDS_DBHINT` lists the database hints that are allowed as values for this annotation.
-   The annotation can have one of the two values:

-   `&PREFER_JOIN_WITH_FDA 1&`
-   `&PREFER_JOIN_WITH_FDA 0&`

-   These values are [database hints](ABENDATABASE_HINT_GLOSRY.html) of the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html). They are for internal use only. They can be used to switch off the [fast data access](ABENFAST_DATA_ACCESS_GLOSRY.html) (FDA) protocol and this can improve performance. The [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html) evaluates these hints.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.dbHints[ ]`\\ **Scope** `#VIEW`\\ **Type** `String(1298)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html