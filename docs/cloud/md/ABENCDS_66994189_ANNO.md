---
title: "ABENCDS_66994189_ANNO"
description: |
  ABENCDS_66994189_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_66994189_ANNO.htm"
abapFile: "ABENCDS_66994189_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "66994189", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

The cacheSettings annotation and the subsequent annotations control the usage of the HANA cache. In the context of the Analytical Manger (independent of access via INA or OData), the annotations can be used in a CDS Cube and an Analytical Query view. The annotation from the CDS Cube is inherited to the Analytical Query view, but can be overwritten by the Annotations in the Analytical Query View. "refreshForbidden" can only be used in Cubes and is forbidden on query level.

The cache can neither be bypassed, nor be refreshed. If a cache is available, it must be used.

It might occur that in an active/active scenario, the cache only exists on the replica-node, but for technical reasons, the active-node is used. This should be set if not reading from the cache should be avoided as much as possible (performance). The user can't trigger a refresh of the cache.

The cache has to be bypassed in order to get current data. This can be set if the query should always show the most recent data for application reasons.

In the context of the Analytical Manager used via the INA protocol, standard requests should use the cache (if available). If it is a "refresh" request, the cache will be rebuilt before reading data. This is the default behaviour, if the annotation is not set. In the context of ODATA (SADL and Analytical Manager), The cache usage is specified in the app-descriptor and transferred at runtime through the HTTP-header.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.cacheSettings.usage`\\ **Scope** `#ENTITY`\\ **Type** `String(20)`\\ **Enums** `#CLIENT_CONTROLLED, #MANDATORY, #NOT_ALLOWED`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`