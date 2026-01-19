---
title: "ABENCDS_880103419-_ANNO"
description: |
  ABENCDS_880103419-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_880103419-_ANNO.htm"
abapFile: "ABENCDS_880103419-_ANNO.html"
keywords: ["do", "if", "class", "data", "ABENCDS", "880103419", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Consumption Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0addf879b42e4aa2824f630803ccbdfa?version=sap_cross_product_abap).

Define a specific behavior that relates to the consumption of CDS content through domain-specific frameworks.

Using these annotations, the specific behavior is defined which is related to the consumption of CDS content. This metadata makes no assumptions about the concrete consumption technology/infrastructure, but it is applicable across multiple consumption technologies (e.g. Analytics or OData).

Annotations belonging to Consumption.filter regulate filtered queries on UIs.

Usually filter values are entered manually by the user on a UI. By using filter annotations, query filters can be influenced.

You can use this annotation to disallow dedicated CDS views from being used as source for creating custom UI OData services. The RAP generator shall exclude the corresponding views from becoming a valid source for generating custom UIs. In addition, checks shall be implemented identifying erroneous usages in UI services.

@Consumption.disallowUseAsUiProviderProjectionSource:true must not be used in parallel with @ObjectModel.supportedCapability:\[#UI\_PROVIDER\_PROJECTION\_SOURCE\].

@ObjectModel.supportedCapability:\[#UI\_PROVIDER\_PROJECTION\_SOURCE\] is used for classifying views that are adapted for supporting customers to create Fiori UI services. When using views not carrying this annotation, restrictions for the UI service may exist. In contrast, Fiori UI services based on views annotated with @Consumption.disallowUseAsUiProviderProjectionSource:true will not work, for example, due to technical problems with conversion exits.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Consumption.disallowUseAsUiProviderProjectionSource`\\ **Scope** `#ENTITY`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_consumption\_f.html