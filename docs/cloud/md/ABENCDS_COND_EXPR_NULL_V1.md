---
title: "ABENCDS_COND_EXPR_NULL_V1"
description: |
  ABENCDS_COND_EXPR_NULL_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_NULL_V1.htm"
abapFile: "ABENCDS_COND_EXPR_NULL_V1.html"
keywords: ["select", "if", "data", "ABENCDS", "COND", "EXPR", "NULL"]
---

`.... lhs IS [NOT] NULL ...`

Identifies the [null value](ABENNULL_VALUE_GLOSRY.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The relational expression is true if the value of `lhs` is (not) the [null value](ABENNULL_VALUE_GLOSRY.html).

The operand `lhs` must stick to the context-dependent rules listed in topic [CDS DDL - DDIC-based View, `cds_cond`, Operands](ABENCDS_COND_EXPR_OPERANDS_V1.html).

`lhs` can have any data type except for `STRING`, `RAWSTRING`, and `GEOM_EWKB`.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_conditional\_expression\_v1.html