---
title: "ABENCDS_COND_EXPR_COMP_V1"
description: |
  ABENCDS_COND_EXPR_COMP_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_COMP_V1.htm"
abapFile: "ABENCDS_COND_EXPR_COMP_V1.html"
keywords: ["select", "if", "data", "types", "ABENCDS", "COND", "EXPR", "COMP"]
---

`... lhs operator rhs ...`

Comparison operators can be used to specify a comparison in a [condition](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The following table shows relational expressions `rel_exp` that are constructed with comparison operators:

-   Context-dependent rules apply when specifying the [operands](ABENCDS_COND_EXPR_OPERANDS_V1.html)\\ `lhs` and `rhs`.
-   The tables of [comparable types](ABENCDS_COND_EXPR_TYPES_V1.html) show which data types can be compared with each other.

**rel\_expr** **True if**\\ `lhs = rhs` Value of `lhs` is equal to the value of `rhs`\\ `lhs <> rhs` Value of `lhs` is not equal to the value of `rhs`\\ `lhs < rhs` Value of `lhs` is less than the value of `rhs`\\ `lhs > rhs` Value of `lhs` is greater than the value of `rhs`\\ `lhs <= rhs` Value of `lhs` is less than or equal to the value of `rhs`\\ `lhs >= rhs` Value of `lhs` is greater than or equal to the value of `rhs` abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_conditional\_expression\_v1.html