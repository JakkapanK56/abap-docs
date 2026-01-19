---
title: "Tags a field containing a currency code"
description: |
  This can be either an ISO codeInformation published on non-SAP site or an SAP currency code (data type CUKY). Scope: ELEMENT, PARAMETER Interpreted by the RAP runtime engine (SADL). Translates CDS annotations into the corresponding OData annotations. Kind ABAP annotation(ABENABAP_ANNOTATIO
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_1954553685-_ANNO.htm"
abapFile: "ABENCDS_1954553685-_ANNO.html"
keywords: ["do", "while", "if", "data", "types", "ABENCDS", "1954553685", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Semantic annotations complement the concept of semantic data types, while semantic data types always introduce specific behavior in the provider/core infrastructure (through dedicated operations or conversion functions).

Semantic annotations allow the standardizing of semantics that only have an impact on the consumption side (such as currency code representation together with the amount).

Evaluation Runtime (Engine): Interpreted by the RAP runtime engine (SADL): Translates CDS annotations into the corresponding OData annotations.

Tags a field containing a currency code

This can be either an ISO codeInformation published on non-SAP site or an SAP currency code (data type CUKY).

Scope: \[ELEMENT, PARAMETER\]

Interpreted by the RAP runtime engine (SADL). Translates CDS annotations into the corresponding OData annotations.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Semantics.currencyCode`\\ **Scope** `#ELEMENT`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`