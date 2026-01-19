---
title: "ABENCDS_COND_EXPR_NULL_V2"
description: |
  ABENCDS_COND_EXPR_NULL_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_NULL_V2.htm"
abapFile: "ABENCDS_COND_EXPR_NULL_V2.html"
keywords: ["select", "if", "data", "ABENCDS", "COND", "EXPR", "NULL"]
---

`.... lhs IS [NOT] NULL ...`

Identifies the [null value](ABENNULL_VALUE_GLOSRY.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The relational expression is true if the value of `lhs` is (not) the [null value](ABENNULL_VALUE_GLOSRY.html).

The operand `lhs` must stick to the context-dependent rules listed in topic [CDS DDL - View Entity, `cds_cond`, Operands](ABENCDS_COND_EXPR_OPERANDS_V2.html).

`lhs` can have any data type except for `STRING`, `RAWSTRING`, and `GEOM_EWKB`.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_conditional\_expression\_v2.html