---
title: "ABENCDS_1270408093_ANNO"
description: |
  ABENCDS_1270408093_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1270408093_ANNO.htm"
abapFile: "ABENCDS_1270408093_ANNO.html"
keywords: ["do", "while", "if", "data", "types", "ABENCDS", "1270408093", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Semantics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap).

Semantic annotations complement the concept of semantic data types, while semantic data types always introduce specific behavior in the provider/core infrastructure (through dedicated operations or conversion functions).

Semantic annotations allow the standardizing of semantics that only have an impact on the consumption side (such as currency code representation together with the amount).

Evaluation Runtime (Engine): Interpreted by the RAP runtime engine (SADL): Translates CDS annotations into the corresponding OData annotations.

You can use this annotation to define any information relating to an identified or identifiable natural person ("data subject").

An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.

Personal data can only be processed under certain legal grounds, e.g. explicit consent of the data subject or a contractual obligation.

Role of the data subjects in this set (e.g. employee, customer)

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Semantics.personalData.dataSubjectRole`\\ **Scope** `#ENTITY`\\ **Type** `String(30)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_semantics\_f.html