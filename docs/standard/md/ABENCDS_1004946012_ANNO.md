---
title: "ABENCDS_1004946012_ANNO"
description: |
  ABENCDS_1004946012_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1004946012_ANNO.htm"
abapFile: "ABENCDS_1004946012_ANNO.html"
keywords: ["do", "if", "ABENCDS", "1004946012", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

This annotation can be used to enable Enterprise Search for Natural Language Search (NLS) based on GenAI technology. The information is needed to generate the required GenAI prompts.

The @EntepriseSearch.nls CDS annotations are used to enrich CDS-based Search Models with information that is required for GenAI prompt generation in the context of Natural Language Search.

Define a group of fields that participate in a semantically related group and may be searched either separately or as a group.

List of fields that belong to the field group.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.nls.compoundElements[ ].elements[ ]`\\ **Scope** `#ENTITY`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_enterprisesearch\_f.html