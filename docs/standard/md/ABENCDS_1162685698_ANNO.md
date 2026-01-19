---
title: "ABENCDS_1162685698_ANNO"
description: |
  ABENCDS_1162685698_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1162685698_ANNO.htm"
abapFile: "ABENCDS_1162685698_ANNO.html"
keywords: ["do", "if", "try", "method", "data", "ABENCDS", "1162685698", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

You can use this annotation to hide fields in CDS views that should not be available for consumption for all customers.

\- Industry-specific fields in core CDS views which should only be available for consumption when the industry solution is activated (switches).

\- New fields which belong to a newly introduced feature which is only available, if the feature is switched on (feature toggle).

The Consumption.switched annotation depends on the state of the system.

Each switch-id must be checked with method cl\_abap\_switch=>get\_switch\_state with p\_username = '!DUMMY'. The id is not user-dependent, but client-dependent. It is ON, if the method returns cl\_abap\_switch=>c\_on.

Each feature-id should be checked with cl\_ftg\_runtime\_state=>is\_on( ). It is ON, if the method returns X (TRUE). This method returns a user-dependent result. For each feature-id, a switch with the same name exists. Therefore, method cl\_abap\_switch=>get\_switch\_state with p\_username = '!DUMMY' is used.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.switched[ ].id[ ]`\\ **Scope** `#ELEMENT`\\ **Type** `DevelopmentObjectRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html