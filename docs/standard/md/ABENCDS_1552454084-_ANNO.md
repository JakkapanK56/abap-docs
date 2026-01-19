---
title: "ABENCDS_1552454084-_ANNO"
description: |
  ABENCDS_1552454084-_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1552454084-_ANNO.htm"
abapFile: "ABENCDS_1552454084-_ANNO.html"
keywords: ["do", "while", "if", "data", "types", "ABENCDS", "1552454084", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

More documentation for that [framework-specific](ABENFRMWRK_ANNOTATION_GLOSRY.html) annotation can be found under [`Semantics Annotations`](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3ccd5cf7b98248618b1013a4a296e415?version=sap_cross_product_abap).

Semantic annotations complement the concept of semantic data types, while semantic data types always introduce specific behavior in the provider/core infrastructure (through dedicated operations or conversion functions).

Semantic annotations allow the standardizing of semantics that only have an impact on the consumption side (such as currency code representation together with the amount).

Evaluation Runtime (Engine): Interpreted by the RAP runtime engine (SADL): Translates CDS annotations into the corresponding OData annotations.

Element is defined as a CDS quantity field.

You can use this annotation to expose not only the language-dependent code of a quantity unit, but also the language-independent SAP-internal code of a unit of measure in external APIs. Using this annotation, you can relate a quantity field to the language-independent SAP-internal unit.

The following constraints must be kept in mind:

\- The target field of @Semantics.quantity.unitOfMeasureSAPCode shall be type by a data element based on ABAP domain MEINSINT.

\- The target field of @Semantics.quantity.unitOfMeasureSAPCode shall not be annotated with Semantics.unitOfMeasure: true.

\- In VDM remote API views (prefix 'A\_') all quantity fields shall be annotated with @Semantics.quantity.unitOfMeasureSAPCode. The corresponding units must be provided in the view.

Note: This constraint will only be activated for existing A-views after a clean-up A-views has taken place.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Semantics.quantity.unitOfMeasureSapCode`\\ **Scope** `#ELEMENT`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_semantics\_f.html