---
title: "ABENCDS_1285144265-_ANNO"
description: |
  ABENCDS_1285144265-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1285144265-_ANNO.htm"
abapFile: "ABENCDS_1285144265-_ANNO.html"
keywords: ["do", "if", "case", "data", "ABENCDS", "1285144265", "ANNO"]
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

Name of an association, which describes the path to the hierarchy (define hierarchy view) including the settings of the parameters of the hierarchy view. It is an alternative to filter.hierarchyBinding. In case the hierarchy-view is exposed via "@ObjectModel.association.toHierarchy" in the dimension view, annotation "filter.hierarchyBinding" is not possible and filter.hierarchyAssociation is required.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.filter.hierarchyAssociation`\\ **Scope** `#ELEMENT`\\ **Type** `AssociationRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`