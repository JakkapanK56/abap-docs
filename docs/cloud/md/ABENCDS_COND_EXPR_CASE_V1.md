---
title: "ABENCDS_COND_EXPR_CASE_V1"
description: |
  ABENCDS_COND_EXPR_CASE_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_CASE_V1.htm"
abapFile: "ABENCDS_COND_EXPR_CASE_V1.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "COND", "EXPR", "CASE"]
---

Rules for conditions [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a [complex case distinction](ABENCDS_SEARCHED_CASE_EXPR_V1.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) view:

-   All relational operators are allowed.
-   `lhs` expects a [field](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html).
-   A [field](ABENCDS_FIELD_V1.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V1.html), a [literal](ABENCDS_LITERAL_V1.html) with optional domain prefix, a [parameter](ABENCDS_PARAMETER_V1.html), a [session variable](ABENCDS_SESSION_VARIABLE_V1.html), or a [built-in function](ABENCDS_BUILTIN_FUNCTIONS_V1.html) can be specified for `rhs` (with the exception of the operator [`LIKE`](ABENCDS_COND_EXPR_LIKE_V1.html)).
-   A field of a data source can be specified using a path expression `[path_expr](ABENCDS_PATH_EXPRESSION_V1.html).element`, as long as the CDS associations of the expression do not have any [CDS transient entities](ABENCDS_NON_SQL_ENTITY_GLOSRY.html) as [association targets](ABENASSOCIATION_TARGET_GLOSRY.html) and the expression is unique:

-   The [cardinality](ABENCARDINALITY_GLOSRY.html) of the contained [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) is to-one.
-   The path expression only contains
-   [filter conditions](ABENCDS_PATH_EXPRESSION_FILTER_V1.html) with addition `1:`.

-   `element` can be used to specify an element of the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of the last CDS association of the path.
-   Other expressions and function calls are not allowed.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_expressions\_v1.html abencds\_case\_expression\_v1.html abencds\_searched\_case\_expr\_v1.html