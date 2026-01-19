---
title: "ABENCDS_1540815607_ANNO"
description: |
  ABENCDS_1540815607_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1540815607_ANNO.htm"
abapFile: "ABENCDS_1540815607_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1540815607", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

The cacheSettings annotation and the subsequent annotations control the usage of the HANA cache. In the context of the Analytical Manger (independent of access via INA or OData), the annotations can be used in a CDS Cube and an Analytical Query view. The annotation from the CDS Cube is inherited to the Analytical Query view, but can be overwritten by the Annotations in the Analytical Query View. "refreshForbidden" can only be used in Cubes and is forbidden on query level.

If this annotation is set to true, the cache can't be refreshed with any request from the user. If the user sends a "refresh-request", data is read from cache without updating the cache and a warning is raised.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.cacheSettings.refreshForbidden`\\ **Scope** `#ENTITY`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`