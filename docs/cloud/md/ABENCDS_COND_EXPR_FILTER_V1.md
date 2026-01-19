---
title: "ABENCDS_COND_EXPR_FILTER_V1"
description: |
  ABENCDS_COND_EXPR_FILTER_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_FILTER_V1.htm"
abapFile: "ABENCDS_COND_EXPR_FILTER_V1.html"
keywords: ["select", "do", "if", "ABENCDS", "COND", "EXPR", "FILTER"]
---

Rules for conditions [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a

[filter condition](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) of a [path expression](ABENCDS_PATH_EXPRESSION_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html):

-   All relational operators are allowed.
-   `lhs` expects a [field](ABENCDS_FIELD_V1.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the current [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html).
-   A [field](ABENCDS_FIELD_V1.html) of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the current [CDS association](ABENCDS_ASSOCIATION_V1.html), a [literal](ABENCDS_LITERAL_V1.html) with optional domain prefix, a [parameter](ABENCDS_PARAMETER_V1.html), a [session variable](ABENCDS_SESSION_VARIABLE_V1.html), or a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V1.html) can be specified for `rhs` (with the exception of the operator [`LIKE`](ABENCDS_COND_EXPR_LIKE_V1.html)).
-   No path expressions or other expressions or function calls can be specified.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_path\_expression\_v1.html abencds\_path\_expr\_attr\_v1.html abencds\_path\_expression\_filter\_v1.html