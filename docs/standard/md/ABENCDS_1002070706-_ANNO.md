---
title: "ABENCDS_1002070706-_ANNO"
description: |
  ABENCDS_1002070706-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1002070706-_ANNO.htm"
abapFile: "ABENCDS_1002070706-_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1002070706", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

This annotation allows to reference the association to a View/Entity that provides the “Value Help” for the annotated element. The ON-condition of the referenced association specifies how the “value help”-content needs to be retrieved for the element. Generic UI consumers must identify those ValueHelp-annotations and use the referenced association to retrieve the values.

Instead of defining the “Value element” of the value help view using an equal ON-condition of the association, you can also specify the “value element” in the annotation and then have no or non-equal ON-conditions for the “value element”.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.valueHelp`\\ **Scope** `#ELEMENT`, `#PARAMETER`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html