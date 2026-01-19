---
title: "ABENCDS_COND_EXPR_COMP_V2"
description: |
  ABENCDS_COND_EXPR_COMP_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_COMP_V2.htm"
abapFile: "ABENCDS_COND_EXPR_COMP_V2.html"
keywords: ["select", "if", "data", "types", "ABENCDS", "COND", "EXPR", "COMP"]
---

`... lhs operator rhs ...`

Comparison operators can be used to specify a comparison in a [condition](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The following table shows relational expressions `rel_exp` that are constructed with comparison operators:

-   Context-dependent rules apply when specifying the operands `lhs` and `rhs`. For further details, see topic [CDS DDL - CDS View Entity, `cds_cond`, Operands](ABENCDS_COND_EXPR_OPERANDS_V2.html).
-   The tables of [comparable types](ABENCDS_COND_EXPR_TYPES_V2.html) show which data types can be compared with each other.

**rel\_expr** **True if**\\ `lhs = rhs` Value of `lhs` is equal to the value of `rhs`\\ `lhs <> rhs` Value of `lhs` is not equal to the value of `rhs`\\ `lhs < rhs` Value of `lhs` is less than the value of `rhs`\\ `lhs > rhs` Value of `lhs` is greater than the value of `rhs`\\ `lhs <= rhs` Value of `lhs` is less than or equal to the value of `rhs`\\ `lhs >= rhs` Value of `lhs` is greater than or equal to the value of `rhs` abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_conditional\_expression\_v2.html