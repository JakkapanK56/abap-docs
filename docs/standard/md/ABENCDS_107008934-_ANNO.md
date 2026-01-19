---
title: "ABENCDS_107008934-_ANNO"
description: |
  ABENCDS_107008934-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_107008934-_ANNO.htm"
abapFile: "ABENCDS_107008934-_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "107008934", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

By providing a filter based on the view field, a more specific search is enabled.

The usage of this CDS annotation is optional. You may define a CDS-based Search Model without this CDS annotation.

**Use Case**

The “Filters” section of the Fiori Launchpad Search UI, contains a filter based on the view field. By providing a filter value, you can restrict the current list of search result items to the respective hits. If, for example, the view field “locationOfBuilding” is annotated accordingly, you may restrict the current list of search result items to buildings located in Walldorf by providing the filter value “Walldorf” to the filter which is based on this view field.

Define the order of filtering attributes which is not necessarily the same as the order of elements in the view.

As the a mixed list of filtering facets and filtering attributes is produced, the position should be defined uniquely across both annotations.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.filteringAttribute.displayPosition`\\ **Scope** `#ELEMENT`\\ **Type** `Integer`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_enterprisesearch\_f.html