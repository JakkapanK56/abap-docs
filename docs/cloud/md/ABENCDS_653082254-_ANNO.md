---
title: "ABENCDS_653082254-_ANNO"
description: |
  ABENCDS_653082254-_ANNO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_653082254-_ANNO.htm"
abapFile: "ABENCDS_653082254-_ANNO.html"
keywords: ["select", "do", "while", "if", "data", "types", "ABENCDS", "653082254", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Semantic annotations complement the concept of semantic data types, while semantic data types always introduce specific behavior in the provider/core infrastructure (through dedicated operations or conversion functions).

Semantic annotations allow the standardizing of semantics that only have an impact on the consumption side (such as currency code representation together with the amount).

Evaluation Runtime (Engine): Interpreted by the RAP runtime engine (SADL): Translates CDS annotations into the corresponding OData annotations.

Element is defined as a CDS quantity field.

Tags an element that contains a measured quantity.

Scope: \[ELEMENT, PARAMETER\]

Interpreted by the RAP runtime engine (SADL). Translates CDS annotations into the corresponding OData annotations.Unit of measurement key for a CDS quantity field.

In CDS view entities, this annotation can also be used to assign a calculated unit to a CDS calculated quantity.

`elem_name`: Name of an element defined as an unit of measurement key that references a unit of measure related to a measured quantity.

In a CDS view entity, mandatory for all elements of data type `abap.quan` and for all calculated quantities. Possible for CDS quantity fields of other data types. Optional in all other CDS entities.

-   `Semantics.quantity.unitOfMeasure` must point to an element **in the same view** which contains the unit key. This rule applies to all CDS entities except for CDS DDIC-based views (obsolete). In CDS DDIC-based views, the unit key can also be a field from one of the data sources.
-   The annotation `Semantics.unitOfMeasure` declares a field as a unit key. In CDS DDIC-based views (obsolete), these unit key fields are automatically and implicitly assigned to all unit fields that have no other assignment. The assignment order is as follows:

-   If there is a direct and local unit key assignment, this assignment is considered.
-   If there is no direct and local assignment, it is checked whether there is any inherited unit key that can be derived from one of the data sources.
-   If there is no inherited or derived unit key, then the local unit key field is assigned automatically and implicitly, even if it is not specified explicitly.

-   The API `CL_DD_DDL_ANNOTATION_SERVICE` can derive the annotation `Semantics.quantity.unitofMeasure` from DDIC database tables only if the name of the referred unit key field is not changed in a CDS view entity. If a CDS view entity selecting from a database table uses an alias name for a unit key field, then the annotation cannot be evaluated by this API.

**Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Semantics.quantity.unitOfMeasure`\\ **Scope** `#ELEMENT`\\ **Type** `ElementRef`\\ **Enums** `-`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM`