---
title: "No KTD found"
description: |
  A fiscal period is covered by financial reports, for example, an annual report covers a fiscal period of one year, but a quarterly report includes accounting data for three months. The value of the annotated field encodes a fiscal quarter as a string following the logical pattern Q consisting of one
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_141738638-_ANNO.htm"
abapFile: "ABENCDS_141738638-_ANNO.html"
keywords: ["do", "while", "if", "data", "types", "ABENCDS", "141738638", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Semantics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap).

Semantic annotations complement the concept of semantic data types, while semantic data types always introduce specific behavior in the provider/core infrastructure (through dedicated operations or conversion functions).

Semantic annotations allow the standardizing of semantics that only have an impact on the consumption side (such as currency code representation together with the amount).

Evaluation Runtime (Engine): Interpreted by the RAP runtime engine (SADL): Translates CDS annotations into the corresponding OData annotations.

No KTD found

A fiscal period is covered by financial reports, for example, an annual report covers a fiscal period of one year, but a quarterly report includes accounting data for three months.

The value of the annotated field encodes a fiscal quarter as a string following the logical pattern Q consisting of one digit.

The string matches the regex pattern \[1-4\]

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Semantics.fiscal.quarter`\\ **Scope** `#ELEMENT`, `#PARAMETER`, `#SIMPLE_TYPE`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_semantics\_f.html