---
title: "While the user enters a search term into the search bar, Enterprise Search predicts the rest of the search term and makes appropriate suggestions for an automatic completion of this search term"
description: |
  Kind Framework-specific annotation(ABENFRMWRK_ANNOTATION_GLOSRY.html) Syntax `EnterpriseSearch.freeStyleField.withAutoCompletion` Scope `#ELEMENT` Type `Boolean` Enums `-` Default `true` Text `-` MDE `X` API `RELEASED_FOR_KEY_USER_APPS, RELEASED_
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1827692517-_ANNO.htm"
abapFile: "ABENCDS_1827692517-_ANNO.html"
keywords: ["do", "while", "if", "case", "ABENCDS", "1827692517", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

Mark a view field for freestyle search.

When defining CDS-based Search Models, at least one element/field has to be annotated with this CDS annotation.

**Use Case**

This CDS annotation defines that a view field is used in the freestyle search. The search terms entered into the search bar are searched for in all freestyle search fields.

The importance part of the CDS annotation specifies how relevant a (freestyle search) hit on the respective field is for ranking. The (automatically calculated) ranking influences how the search hits are sorted. The better a search hit is ranked, the higher it appears in the list of search result items. There are the following three options for the relevance/importance of a freestyle field: #LOW, #MEDIUM and #HIGH. We recommend that at least one freestyle field has the relevance/importance #HIGH. For performance reasons, the number of fields enabled for freestyle search should not exceed 10 ~ 15.

By using the subannotation withAutoCompletion, the "auto-completion" function will be activated for the corresponding view field: While the user enters a search term into the search bar, Enterprise Search predicts the rest of the search term and makes appropriate suggestions for an automatic completion of this search term. For performance reasons, this function should be used for a maximum of 3 ~ 5 fields of a CDS-based Search Model.

Switch on the AutoCompletion function for the annotated field.

While the user enters a search term into the search bar, Enterprise Search predicts the rest of the search term and makes appropriate suggestions for an automatic completion of this search term

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.freeStyleField.withAutoCompletion`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`