---
title: "ABENCDS_131711743_ANNO"
description: |
  ABENCDS_131711743_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_131711743_ANNO.htm"
abapFile: "ABENCDS_131711743_ANNO.html"
keywords: ["do", "while", "if", "data", "types", "ABENCDS", "131711743", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Semantics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap).

Semantic annotations complement the concept of semantic data types, while semantic data types always introduce specific behavior in the provider/core infrastructure (through dedicated operations or conversion functions).

Semantic annotations allow the standardizing of semantics that only have an impact on the consumption side (such as currency code representation together with the amount).

Evaluation Runtime (Engine): Interpreted by the RAP runtime engine (SADL): Translates CDS annotations into the corresponding OData annotations.

You can use this annotation to inform consumers about the value range of a CDS element, allowing to specify minimal and/or maximal values and indicate whether these are exclusive or inclusive.

The annotation can be applied to all fully ordered data types, i.e. Characters, Strings, Numbers, or Data Types.

The annotation only supports numbers and thus the typing needs to be changed.

Specify minimal values.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Semantics.valueRange.minimum`\\ **Scope** `#ELEMENT`\\ **Type** `String(1298)`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `X`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_semantics\_f.html