---
title: "ABENCDS_1645754370_ANNO"
description: |
  ABENCDS_1645754370_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1645754370_ANNO.htm"
abapFile: "ABENCDS_1645754370_ANNO.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "1645754370", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

A filter should be specified before executing a query on the view. Usually filter values are entered manually by the user on a UI (filter popup) to filter on an element of the underlying view. Filters are not explicitly known by the Core CDS Layer, but only by the clients like Datapreview, MDX, Advanced Analysis for Office, BO Explorer or OData. It is the task of the consumption (framework) to convert the user input into the WHERE clause when accessing the data.

Filters can only be specified for elements within the projection list. For Filters the following metadata can be defined:

This annotation allows to specify a default value for a hierarchy node filter of a view element.

The default is either proposed to the end user or implicitly set by the consumption framework of the view in case the end user does not explicitly specify a different value. A hierarchy node is seen as a list of elements, which are the semantic elements in the corresponding view with @ObjectModel.dataCategory:#HIERARCHY.

This annotation must be used in combination with selectionType:#HIERARCHY\_NODE

Usage in Scenario: [Using Aggregation Data in SAP Fiori Apps(https://help.sap.com/viewer/923180ddb98240829d935862025004d6/Cloud/en-US/84f3dc9e036f4feb9eef3470b629d193.html)\]](https://help.sap.com/viewer/923180ddb98240829d935862025004d6/Cloud/en-US/84f3dc9e036f4feb9eef3470b629d193.html)\]

With node, each part can be set to a constant separately.

References the element in the hierarchy node view.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.filter.defaultHierarchyNode.node[ ].element`\\ **Scope** `#ELEMENT`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`