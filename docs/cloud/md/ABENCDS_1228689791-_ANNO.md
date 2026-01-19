---
title: "Runtime"
description: |
  Defines an additional binding condition for the value help on the same target value help provider entity for filtering the value help result list and/or returning values from the selected value help record. No KTD found Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html)
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1228689791-_ANNO.htm"
abapFile: "ABENCDS_1228689791-_ANNO.html"
keywords: ["select", "do", "if", "data", "types", "ABENCDS", "1228689791", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

You can use this annotation to enable defining value help support in simple types. This improves modeling consistent value help support for equally typed CDS fields and parameters.

Runtime

Defines an additional binding condition for the value help on the same target value help provider entity for filtering the value help result list and/or returning values from the selected value help record.

No KTD found

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.valueHelpDefinition[ ].additionalBinding[ ].localConstant`\\ **Scope** `#ELEMENT`, `#PARAMETER`\\ **Type** `String(255)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`