---
title: "ABENCDS_518284083_ANNO"
description: |
  ABENCDS_518284083_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_518284083_ANNO.htm"
abapFile: "ABENCDS_518284083_ANNO.html"
keywords: ["do", "if", "case", "ABENCDS", "518284083", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

This annotation is needed to mark a field as (ordinary, non-title) response field.

The special type of the response field is defined by the respective subannotation.

**Short Description**

Mark a view field as a contact photo response field.

The usage of this CDS annotation is optional. You may define a CDS-based Search Model without this CDS annotation.

**Use Case**

This CDS annotation indicates that the response field contains a URL to an image of a person. This image is displayed in the search result item as a miniature image.

Since the miniature image is positioned automatically within the search result item, no displayPosition needs to be specified.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.responseField.contactPhoto`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`