---
title: "ABENCDS_1423781203_ANNO"
description: |
  ABENCDS_1423781203_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1423781203_ANNO.htm"
abapFile: "ABENCDS_1423781203_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "1423781203", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

This annotation is needed to mark a field as (ordinary, non-title) response field.

The special type of the response field is defined by the respective subannotation.

**Short Description**

Mark a view field as a normal/standard response field.

When defining CDS-based Search Models, at least one element/field has to be annotated with this CDS annotation.

**Use Case**

This CDS annotation defines a view field as a normal/standard response field. This response field is displayed within the search result item in the list of response fields at the numbered position displayPosition.

If you define several response fields (which will normally be the case), please make sure to use unique displayPosition values. For each search result item, only 12 response fields are displayed. For this reason, a maximum of 12 response fields (with the displayPosition values 1 to 12) should be defined.

Define the sequence in which response fields are displayed in the search result.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.responseField.standard.displayPosition`\\ **Scope** `#ELEMENT`\\ **Type** `DecimalFloat`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`