---
title: "ABENCDS_COND_EXPR_ON_ASSOC_V1"
description: |
  ABENCDS_COND_EXPR_ON_ASSOC_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_COND_EXPR_ON_ASSOC_V1.htm"
abapFile: "ABENCDS_COND_EXPR_ON_ASSOC_V1.html"
keywords: ["select", "do", "if", "try", "data", "ABENCDS", "COND", "EXPR", "ASSOC"]
---

Rules for conditions [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in an [`ON` condition](ABENCDS_ASSOCIATION_V1.html) of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html):

-   All relational operators are allowed.
-   A [field](ABENCDS_FIELD_V1.html) of one of the two data sources [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the CDS association can be specified for `lhs`.
-   A [field](ABENCDS_FIELD_V1.html) of both data sources [`data_source`](ABENCDS_DATA_SOURCE_V1.html) of the CDS association, a [literal](ABENCDS_LITERAL_V1.html) with optional domain prefix, a [parameter](ABENCDS_PARAMETER_V1.html), or a [session variable](ABENCDS_SESSION_VARIABLE_V1.html) can be specified for `rhs` (with the exception of the operator [`LIKE`](ABENCDS_COND_EXPR_LIKE_V1.html)).
-   **Note** As of ABAP release 7.92, [typed literals](ABENCDS_TYPED_LITERAL_V2.html) are also supported for `rhs`.
-   A field of the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) can also be specified by an alternative element name (defined using [`AS`](ABENCDS_SELECT_LIST_ENTRY_V1.html)) of the current CDS view.
-   At least one comparison for equality between a field of the initial data source and a field of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the CDS association must be performed.
-   No path expressions or other expressions or function calls can be specified.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_association\_v1.html