---
title: "No KTD found"
description: |
  Only the substring defined with offset and length is used as replacement. If offset is not specified it is set to 0. If length is not specified the substring it to the end of the string. (example offset = 2 and length = 2 for string 202303 (key_internal of month) returns 23). Kind Framework-sp
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_2079780457_ANNO.htm"
abapFile: "ABENCDS_2079780457_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "2079780457", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

You can use this annotation instead of the @EndUserText.label annotation if the label contains variables which are only available at runtime. The label might contain placeholders which can be bound to parameters. At runtime, the placeholders will be replaces with the value of bound parameter.

No KTD found

Only the substring defined with offset and length is used as replacement. If offset is not specified it is set to 0. If length is not specified the substring it to the end of the string. (example offset = 2 and length = 2 for string 202303 (key\_internal of month) returns 23).

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.dynamicLabel.binding[ ].length`\\ **Scope** `#ELEMENT`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html