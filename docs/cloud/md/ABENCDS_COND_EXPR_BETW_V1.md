---
title: "ABENCDS_COND_EXPR_BETW_V1"
description: |
  ABENCDS_COND_EXPR_BETW_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_BETW_V1.htm"
abapFile: "ABENCDS_COND_EXPR_BETW_V1.html"
keywords: ["select", "if", "data", "types", "ABENCDS", "COND", "EXPR", "BETW"]
---

`... lhs BETWEEN rhs1 AND rhs2 ...`

Compares an interval in a [condition](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The relational expression is true if the value of `lhs` is between the values of `rhs1` and `rhs2`. The expression has the same meaning as the following combination of two [comparisons](ABENCDS_COND_EXPR_COMP_V1.html):

`... lhs >= rhs1 AND lhs <= rhs2 ...`

The corresponding context-dependent rules apply to the [operands](ABENCDS_COND_EXPR_OPERANDS_V1.html) `lhs`, `rhs1`, and `rhs2` as well as the same [conditions](ABENCDS_COND_EXPR_TYPES_V1.html) for the data types.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_conditional\_expression\_v1.html