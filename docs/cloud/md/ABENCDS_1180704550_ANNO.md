---
title: "ABENCDS_1180704550_ANNO"
description: |
  ABENCDS_1180704550_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1180704550_ANNO.htm"
abapFile: "ABENCDS_1180704550_ANNO.html"
keywords: ["select", "do", "if", "try", "data", "ABENCDS", "1180704550", "ANNO"]
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

This annotation can be used at runtime to determine access to the lookupEntity by setting parameter values and/or a WHERE clause.

It consists of one or more entries of the following structure:

Denotes a view parameter of the lookupEntity to be bound. If specified, targetElement must be empty.

For each view parameter or element specified in targetParameter or targetElement, there must be no more than a single entry in the binding array. The restrictons derived for each entry shall be combined to the everall filter on the lookup entity with a logical AND.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.derivation.binding[ ].targetParameter`\\ **Scope** `#ELEMENT`, `#PARAMETER`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`