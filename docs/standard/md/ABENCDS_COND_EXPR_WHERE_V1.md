---
title: "ABENCDS_COND_EXPR_WHERE_V1"
description: |
  ABENCDS_COND_EXPR_WHERE_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_COND_EXPR_WHERE_V1.htm"
abapFile: "ABENCDS_COND_EXPR_WHERE_V1.html"
keywords: ["select", "do", "if", "data", "ABENCDS", "COND", "EXPR", "WHERE"]
---

Rules for conditions [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a [`WHERE` condition](ABENCDS_WHERE_CLAUSE_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html):

-   All relational operators are allowed.
-   `lhs` expects a [field](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html).
-   A [field](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html), a [literal](ABENCDS_LITERAL_V1.html) with optional domain prefix, a [parameter](ABENCDS_PARAMETER_V1.html), a [session variable](ABENCDS_SESSION_VARIABLE_V1.html), or a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V1.html) can be specified for `rhs` (with the exception of the operator [`LIKE`](ABENCDS_COND_EXPR_LIKE_V1.html)).
-   A field of a data source can be specified using a path expression `[path_expr](ABENCDS_PATH_EXPRESSION_V1.html).element`, as long as the CDS associations of the expression do not have any [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) as [association target](ABENASSOCIATION_TARGET_GLOSRY.html) and the result of the path expression is unique:

-   The [cardinality](ABENCARDINALITY_GLOSRY.html) of the contained [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) is to-one.
-   The path expression only contains [filter conditions](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) with addition `1:`.

-   `element` can be used to specify an element of the association target of the last CDS association of the path.
-   Other expressions and function calls are not allowed.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_clauses\_v1.html abencds\_where\_clause\_v1.html