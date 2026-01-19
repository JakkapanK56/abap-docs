---
title: "ABENCDS_F1_DCL_COND_DATA_TYPES"
description: |
  ABENCDS_F1_DCL_COND_DATA_TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_DCL_COND_DATA_TYPES.htm"
abapFile: "ABENCDS_F1_DCL_COND_DATA_TYPES.html"
keywords: ["do", "if", "data", "types", "ABENCDS", "DCL", "COND", "DATA", "TYPES"]
---

The operand specified on the left side of a [condition](ABENCDS_DCL_ROLE_CONDITIONS.html) of an [access rule](ABENCDS_DCL_ROLE_RULES.html) of a [CDS role](ABENCDS_ROLE_GLOSRY.html) cannot have all the [built-in data types in ABAP Dictionary](ABENDDIC_BUILTIN_TYPES.html). Only the following types are allowed:

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](ABENCDS_F1_COND_PFCG.html), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](ABENAUTHORIZATION_GLOSRY.html) are compared with [CDS elements](ABENCDS_ELEMENT_GLOSRY.html) of the allowed data types and an appropriate [conversion](ABENCDS_F1_DCL_PFCG_MAPPING.html) takes place.

Unlike `DATS` and `TIMS`, the types `DATN` and `TIMN` do not allow the [`LIKE`](ABENCDS_COND_EXPR_LIKE_V2.html) operator to be used.

-   Numeric types

-   `INT1`, `INT2`, `INT4`, `INT8`
-   `DEC`
-   `DF16_DEC`, `DF16_RAW`, `DECFLOAT16`
-   `DF34_DEC`, `DF34_RAW`, `DECFLOAT34`

-   Character-like types

-   `CHAR`
-   `SSTRING`

-   Binary types

-   `RAW`
-   CDS elements of type `RAW` support the operators [`IS [NOT] NULL`](ABENCDS_COND_EXPR_NULL_V2.html) and [`IS [NOT] INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html) and use as a part of the left side for a user-defined aspect or a PFCG mapping. Comparisons with a literal or an authorization field are not possible.

-   Special types

-   `DATS`, `DATN`, `TIMS`, `TIMN`, `UTCLONG`
-   `NUMC`

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html