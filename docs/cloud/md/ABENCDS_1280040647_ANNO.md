---
title: "ABENCDS_1280040647_ANNO"
description: |
  ABENCDS_1280040647_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1280040647_ANNO.htm"
abapFile: "ABENCDS_1280040647_ANNO.html"
keywords: ["update", "do", "if", "case", "ABENCDS", "1280040647", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`EnterpriseSearch Annotations`](https://help.sap.com/docs/ABAP_PLATFORM_NEW/cc0c305d2fab47bd808adcad3ca7ee9d/2cbeb79d7eb04e628e0745657aa6ed4f).

@EnterpriseSearch annotations add semantics that is needed to use a view entity as a (CDS-based) search model in the Enterprise Search framework.

**Short Description**

Indicate that the CDS View Entity represents a CDS-based Search Model.

For defining CDS-based Search Models, this CDS annotation is mandatory.

**Use Case**

If you choose this CDS annotation, a new Search Connector is automatically created or an existing one updated when the CDS View Entity is activated in the ABAP Developer Tools (ADT).

You can use this CDS annotation with the values true and false:

-   true: The system creates an active Search Connector (or updates an existing one). This Search Connector becomes/remains available for search, but can be deactivated at any time.
-   false: The system creates an inactive Search Connector (or updates an existing one). This Search Connector is not available for search, but can be activated at any time.

-   true: The system creates an active Search Connector (or updates an existing one). This Search Connector becomes/remains available for search, but can be deactivated at any time.
-   false: The system creates an inactive Search Connector (or updates an existing one). This Search Connector is not available for search, but can be activated at any time.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `EnterpriseSearch.model`\\ **Scope** `#ENTITY`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `X`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`