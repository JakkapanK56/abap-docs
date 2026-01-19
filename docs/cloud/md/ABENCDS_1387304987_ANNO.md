---
title: "ABENCDS_1387304987_ANNO"
description: |
  ABENCDS_1387304987_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1387304987_ANNO.htm"
abapFile: "ABENCDS_1387304987_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "1387304987", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

Set the title of the search result items.

For defining CDS-based Search Models, this CDS annotation is mandatory.

**Use Case**

This CDS annotation defines which field of the CDS View Entity is used as the title (titleField), and (optionally) which field of the CDS View Entity is used as the subtitle (subTitleField) to identify a specific result item.

Define the field of the CDS View Entity that is used as the subtitle to identify a specific result item. A subtitle field is optional.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.title.subTitleField`\\ **Scope** `#ENTITY`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`