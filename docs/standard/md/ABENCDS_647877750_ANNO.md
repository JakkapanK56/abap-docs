---
title: "ABENCDS_647877750_ANNO"
description: |
  ABENCDS_647877750_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_647877750_ANNO.htm"
abapFile: "ABENCDS_647877750_ANNO.html"
keywords: ["do", "if", "try", "data", "ABENCDS", "647877750", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

You can use this annotation to switch on fields in CDS views that should not be available for consumption for all customers. To do so, you must use a toggle.

\- Industry-specific fields in core CDS views which should only be available for consumption when the industry solution is activated (switches).

\- New fields which belong to a newly introduced feature which is only available, if the feature is switched on (feature toggle).

The Consumption.toggled annotation depends on the state of the system.

If a new feature is developed and a field should only be available for consumption when the feature is used, the field must be annotated with Consumption.toggled.id followed by the ID of the feature. If the status of a feature is off, the field is not available for clients. If the feature is set to on, the field is available.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.toggled.id`\\ **Scope** `#ELEMENT`\\ **Type** `DevelopmentObjectRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html