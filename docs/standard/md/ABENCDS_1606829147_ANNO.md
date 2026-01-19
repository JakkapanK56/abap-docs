---
title: "No KTD found"
description: |
  No KTD found Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `Consumption.derivation.resultHierarchyNode.mapping .lookupElement` Scope `#ELEMENT`, `#PARAMETER` Type `String(30)` Enums `-` Default `-` Text `-` MDE `X`
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1606829147_ANNO.htm"
abapFile: "ABENCDS_1606829147_ANNO.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "1606829147", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

You can use this annotation and the related derivation annotations to define the specific behavior which is related to the consumption of CDS content using domain-specific frameworks. This metadata makes no assumptions on the concrete consumption technology/infrastructure but is applicable across multiple consumption technologies.

The annotation can be used to derive a default value for a parameter or a filter default value for an element automatically at runtime by selecting one or more rows from a given lookup entity.

The derivation assigns a default value to a parameter if no value has been provided for it by the consumer at runtime (for example, when it is annotated with ‘@Consumption.hidden: true’). The derivation will be ignored if a fixed default value is specified for the parameter via ‘@Consumption.defaultValue’.

The derivation also adds a default filter for an element if no filter has been provided by the consumer at runtime (for example, when it is annotated with ‘@Consumption.filter.hidden: true’). The derivation will be ignored, if a fixed filter default value is specified for the parameter via ‘@Consumption.filter.defaultValue’.

An empty derivation of a hidden and mandatory parameter/filter will lead to a runtime error.

The resultHierachyNode annotation contains elements of the lookupEntity, which provide the hierarchy nodes. It can only be used in combination with ‘Consumption.filter.selectionType: #HIERARCHY\_NODE’. A hierarchy node is seen as list of elements, which are the semantic elements of the corresponding view with ‘@ObjectModel.dataCategory: #HIERARCHY’.

Mapping describes the mapping of the elements in the hierarchy view and the elements in the lookup entity. NodeTypeElement is the name of the element in the lookup entity which returns the type of the node. The type of the node is the element name (in the hierarchy view) which is filled in a row of the resultset. If the value of field NodeTypeElement in the result of the lookup is initial, the row represents a leaf.

No KTD found

No KTD found

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.derivation.resultHierarchyNode.mapping[ ].lookupElement`\\ **Scope** `#ELEMENT`, `#PARAMETER`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html