---
title: "ABENCDS_790523918_ANNO"
description: |
  ABENCDS_790523918_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_790523918_ANNO.htm"
abapFile: "ABENCDS_790523918_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "790523918", "ANNO"]
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

Defines, that the filter based on the view field is displayed by default in the “Filters” section (in case the “Filters” section is not hidden).

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.filteringAttribute.default`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`