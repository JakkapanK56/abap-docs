---
title: "ABENCDS_COND_EXPR_BETW_V2"
description: |
  ABENCDS_COND_EXPR_BETW_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_COND_EXPR_BETW_V2.htm"
abapFile: "ABENCDS_COND_EXPR_BETW_V2.html"
keywords: ["select", "if", "data", "types", "ABENCDS", "COND", "EXPR", "BETW"]
---

`... lhs [NOT] BETWEEN rhs1 AND rhs2 ...`

Compares an interval in a [condition](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The relational expression is true if the value of `lhs` is between the values of `rhs1` and `rhs2`. The expression has the same meaning as the following join of two [comparisons](ABENCDS_COND_EXPR_COMP_V2.html): `... lhs >= rhs1 AND lhs <= rhs2 ...`

The operands `lhs`, `rhs1`, and `rhs2` must stick to the context-dependent rules listed in topic [CDS DDL - View Entity, `cds_cond`, Operands](ABENCDS_COND_EXPR_OPERANDS_V2.html). Moreover, the data types of the operands must be comparable as described in topic [CDS DDL - View Entity, `cds_cond`, Comparable Types](ABENCDS_COND_EXPR_TYPES_V2.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_conditional\_expression\_v2.html