---
title: "ABENCDS_COND_EXPR_INITIAL_V1"
description: |
  ABENCDS_COND_EXPR_INITIAL_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_INITIAL_V1.htm"
abapFile: "ABENCDS_COND_EXPR_INITIAL_V1.html"
keywords: ["select", "do", "if", "data", "types", "ABENCDS", "COND", "EXPR", "INITIAL"]
---

`.... lhs IS [NOT] INITIAL ...`

Determines the initial value. This expression is true if the value of `lhs` is (is not) the [initial value](ABENINITIAL_VALUE_GLOSRY.html) of its [built-in dictionary type](ABENDDIC_BUILTIN_TYPES.html).

The operand `lhs` must stick to the context-dependent rules listed in topic [CDS DDL - DDIC-based View, `cds_cond`, Operands](ABENCDS_COND_EXPR_OPERANDS_V1.html).

`lhs` can have any data type except for `CLNT`, `DECFLOAT16`, `DECFLOAT34`, `DF16_DEC`, `DF34_DEC`, `DF16_RAW`, `DF34_RAW`, `LCHR`, `STRING`, `RAW`, `RAWSTRING`, `DATN`, `TIMN`, `UTCL`, and `GEOM_EWKB`.

The following DDIC-based view reads all rows from the DDIC database table `DEMO_DDIC_TYPES` in which the column `INT8` does not contain its initial value 0.

-   The expression `IS [NOT] INITIAL` is suitable for checking the type-dependent initial value, instead of comparing it with a type-compliant operand that contains the initial value.
-   The expression `IS [NOT] INITIAL` must not be confused with the expression [`IS [NOT] NULL`](ABENCDS_COND_EXPR_NULL_V1.html).

@AbapCatalog.sqlViewName: 'DEMOCDSISINI'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view Demo\_Cds\_Is\_Initial\\n as select from \\n demo\_ddic\_types\\n \\{\\n \*\\n \\}\\n where\\n int8 is not initial\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_conditional\_expression\_v1.html