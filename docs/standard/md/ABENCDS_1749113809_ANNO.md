---
title: "ABENCDS_1749113809_ANNO"
description: |
  ABENCDS_1749113809_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1749113809_ANNO.htm"
abapFile: "ABENCDS_1749113809_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "1749113809", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

Set a description of the Search Connector.

For defining CDS-based Search Models, this CDS annotation is mandatory.

**Use Case**

This CDS annotation defines the (language-translatable) description for the Search Connector that is generated based on the @EnterpriseSearch-annotated CDS View Entity. **This description will appear in the Search Connector dropdown list of the SAP Fiori Launchpad**.

Since this description is displayed, among other Search Connector descriptions, in the list of Search Connectors in the standard search of the SAP Fiori UI, it must be unique. Since a Search Connector allows you to search across multiple objects (e.g., across multiple Best Seller Books), it is recommended to use the plural form for its description.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.modelNamePlural`\\ **Scope** `#ENTITY`\\ **Type** `String(60)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `X`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_enterprisesearch\_f.html