---
title: "ABENCDS_1876289599_ANNO"
description: |
  ABENCDS_1876289599_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1876289599_ANNO.htm"
abapFile: "ABENCDS_1876289599_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "1876289599", "ANNO"]
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

A ranking function has a signature of one or more parameters wherefore data has to be provided at runtime. The array defines the binding of all parameters of a ranking function to view attributes wherefrom the actual values shall be taken.

A view attribute can be relevant for several ranking functions; this holds especially for the key attributes – hence the array. Accordingly, the binding is a tupel, consisting of the ranking function’s ID and the ID of one of its parameters.

It is syntactically possible to define the attribute binding with respect to a ranking function, and not to list that ranking function as active; this step could follow in a higher level of the view enhancement stack, or even in the meta data extensions part. Not listing a ranking function has the same effect as listing it with weight 0. Therefore, the recommended proceeding is to actually list it with weight 0 – this increases the clarity of modeling without restriction to generality.

The ranking functions must be be indicated uniquely as “functionId”.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.ranking.functionParameterBinding[ ].functionId`\\ **Scope** `#ELEMENT`\\ **Type** `String(120)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html