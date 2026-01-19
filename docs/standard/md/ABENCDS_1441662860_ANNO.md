---
title: "No KTD found"
description: |
  Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `Consumption.ranking.activeFunctions .id` Scope `#ENTITY`, `#VIEW` Type `String(120)` Enums `-` Default `-` Text `-` MDE `X` API `-` abenabap.html abencds.html abencds
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1441662860_ANNO.htm"
abapFile: "ABENCDS_1441662860_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1441662860", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

You can use this annotation to return results sorted and ordered by the search score calculated according to search characteristics on value help views.

The sorting cannot be implemented by default but must be explicitly activated on the views which fulfill the necessary prerequisites.

This annotation is a reference to an entity that can be reused with several views. The array represents a weighted list of all ranking functions active for the respective view. The ranking functions have to be indicated uniquely as “functionId”. The relative weight of the ranking functions is specified in “weight” in the interval \[0; 1\], with the default being 1.

If a ranking function is specified, its parameters have to be bound to view attributes (see below).

No KTD found

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.ranking.activeFunctions[ ].id`\\ **Scope** `#ENTITY`, `#VIEW`\\ **Type** `String(120)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html