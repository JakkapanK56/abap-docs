---
title: "ABENCDS_COND_EXPR_HAVING_V1"
description: |
  ABENCDS_COND_EXPR_HAVING_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_HAVING_V1.htm"
abapFile: "ABENCDS_COND_EXPR_HAVING_V1.html"
keywords: ["select", "do", "if", "try", "data", "ABENCDS", "COND", "EXPR", "HAVING"]
---

Rules for conditions [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a [`HAVING` condition](ABENCDS_HAVING_CLAUSE_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html):

-   The relational operator `BETWEEN` is not allowed. All other relational operators are allowed.
-   A [field](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html) or an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V1.html) for this kind of field can be specified for `lhs`.
-   An [element](ABENCDS_SELECT_LIST_ENTRY_V1.html) of the [`SELECT` list](ABENCDS_SELECT_LIST_V1.html), an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V1.html), a [literal](ABENCDS_LITERAL_V1.html) with an optional domain prefix, or a [parameter](ABENCDS_PARAMETER_V1.html) can be specified for `rhs` (with the exception of the operator [`LIKE`](ABENCDS_COND_EXPR_LIKE_V1.html)). If `lhs` is an [aggregate expression](ABENCDS_AGGREGATE_FUNCTIONS_V1.html), a [literal](ABENCDS_LITERAL_V1.html) must be specified.
-   A field of a data source can be specified using a path expression `[path_expr](ABENCDS_PATH_EXPRESSION_V1.html).element`, as long as the CDS associations of the expression do not have any [CDS transient entity](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) as [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) and the expression is unique:

-   The [cardinality](ABENCARDINALITY_GLOSRY.html) of the contained [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) is to-one.
-   The path expression only contains
-   [filter conditions](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) with addition `1:`.

-   `element` can be used to specify an element of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association of the path.
-   Other expressions and function calls are not allowed.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_select\_clauses\_v1.html abencds\_having\_clause\_v1.html