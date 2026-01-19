---
title: "ABENCDS_1575871936-_ANNO"
description: |
  ABENCDS_1575871936-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1575871936-_ANNO.htm"
abapFile: "ABENCDS_1575871936-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1575871936", "ANNO"]
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

This annotation determines how the key element is filled.

Name of an element, which has a unique filter. At runtime, the filter value is used for this hierarchy component.

Parameter name.

Constant.

USER\_INPUT is optional. It will be requested at runtime of the analytic query. It can contain a name. USER\_INPUT with the same name will be provided with the same user input at runtime. The variable is placed in the list of all values in accordance with Consumption.filter.hierarchyBinding.variableSequence.

System field.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.filter.hierarchyBinding[ ].type`\\ **Scope** `#ELEMENT`\\ **Type** `String(12)`\\ **Enums** `#CONSTANT, #ELEMENT, #PARAMETER, #SYSTEM_FIELD, #USER_INPUT`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html