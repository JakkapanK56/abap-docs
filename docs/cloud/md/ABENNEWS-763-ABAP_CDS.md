---
title: "ABENNEWS-763-ABAP_CDS"
description: |
  ABENNEWS-763-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-763-ABAP_CDS.htm"
abapFile: "ABENNEWS-763-ABAP_CDS.html"
keywords: ["select", "if", "case", "try", "data", "types", "ABENNEWS", "763", "ABAP", "CDS"]
---

[1\. Expressions and Functions](#ABAP_MODIFICATION_1@4@)

[2\. CDS Associations](#ABAP_MODIFICATION_2@4@)

[3\. CDS DDIC-Based View Extensions](#ABAP_MODIFICATION_3@4@)

[4\. Key Fields](#ABAP_MODIFICATION_4@4@)

The following enhancements have been implemented:

The following changes have been made:

The following changes have been made:

The statement [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html) can now be used to extend the following CDS views too:

For extensions of the `GROUP-BY` clause and `UNION` clauses, the existing CDS view must contain the new [annotation array](ABENANNOTATION_ARRAY_GLOSRY.html)\\ [`AbapCatalog.viewEnhancementCategory[ ]`](ABENCDS_VIEW_ANNO_V1.html) with suitable values. The value `#NONE` of this annotation array can be used to prevent any enhancements being made to a CDS view using CDS DDIC-based view extensions.

The following changes have been made:

-   In a [`CAST` expression](ABENCDS_CAST_EXPRESSION_V1.html), operands of the type `SSTRING` can now be cast to types other than themselves and back. Here, the type `SSTRING` behaves like the data type `CHAR`.

-   In [`CAST` expressions](ABENCDS_CAST_EXPRESSION_V1.html) to data elements, the restriction no longer applies that the data type, the length, and the number of decimal places of operand and target data type must match exactly. This restriction can now be applied as an optional restriction using the new addition `PRESERVING TYPE`. This addition specifies explicitly that casts are to be applied to the semantic properties of a data element. `PRESERVING TYPE` suppresses the syntax warning that handles casts of identical technical types.

-   `WITH DEFAULT FILTER` can be used to specify a default filter condition for a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html). This condition is used as a filter condition in a [path expression](ABENCDS_PATH_EXPRESSION_V1.html) if no condition is specified for the CDS association here.
-   [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) can now be [exposed](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) for union sets formed with [`UNION`](ABENCDS_UNION_V1.html). In this case, special rules apply.
-   In a [path expression](ABENCDS_PATH_EXPRESSION_V1.html), [`*:`](ABENCDS_PATH_EXPR_CARD_V1.html) can be used to declare a CDS association as a non-unique CDS association explicitly.

-   CDS views with [aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) and a [`GROUP-BY` clause](ABENCDS_GROUP_BY_V1.html)
-   CDS views with a [`UNION` clause](ABENCDS_UNION_V1.html) for union sets

-   The key fields of a CDS view that are defined with [`KEY`](ABENCDS_SELECT_LIST_ENTRY_V1.html) must now, like the key fields of a CDS table function, be placed without gaps at the start of the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html).
-   The new view annotation [`AbapCatalog.preserveKey`](ABENCDS_450773322_ANNO.html) can be used to override the default behavior of the addition [`KEY`](ABENCDS_SELECT_LIST_ENTRY_V1.html) for defining key fields of a CDS view. If the annotation is specified with the value `true`, the key fields defined using `KEY` are also used for the associated CDS-managed DDIC view (obsolete).

abenabap.html abennews.html abennews-76.html abennews-763.html