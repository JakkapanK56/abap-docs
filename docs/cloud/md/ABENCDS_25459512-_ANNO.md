---
title: "ABENCDS_25459512-_ANNO"
description: |
  ABENCDS_25459512-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_25459512-_ANNO.htm"
abapFile: "ABENCDS_25459512-_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "25459512", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

Set a description of the search result items.

For defining CDS-based Search Models, this CDS annotation is mandatory.

**Use Case**

This CDS annotation defines the (language-translatable) description with which all result items of the corresponding Search Connector are labeled in the search result list.

Since this result item description refers to individual search hits, it is recommended to use the singular form.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.modelName`\\ **Scope** `#ENTITY`\\ **Type** `String(60)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `X`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`