---
title: "ABENCORRESPONDING_CONSTR_DUPL"
description: |
  ABENCORRESPONDING_CONSTR_DUPL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCORRESPONDING_CONSTR_DUPL.htm"
abapFile: "ABENCORRESPONDING_CONSTR_DUPL.html"
keywords: ["insert", "do", "if", "data", "internal-table", "ABENCORRESPONDING", "CONSTR", "DUPL"]
---

`... DISCARDING DUPLICATES ...`

Addition for handling duplicate lines in the component operator [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html). The addition `DISCARDING DUPLICATES` can be specified:

The addition `DISCARDING DUPLICATES` prevents an exception when duplicate entries occur with respect to a unique [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) or secondary table key in assignments to a target table. In the basic form, this also applies to the lines that exist in an internal table specified after [`BASE`](ABENCORRESPONDING_CONSTR_ARG_TYPE.html).

By default, the addition `DISCARDING DUPLICATES` affects the source table after which it is specified. That is, either to `itab` of the basic form or to`s1`, `s2`, ... of mapping relationships. If `DISCARDING DUPLICATES` is specified with the addition `DEEP` after `itab` in the basic form, it also affects the statements of nested internal tables.

The addition `DISCARDING DUPLICATES` specifies that, when lines of a source table are inserted sequentially into a target table, the lines that are already in the target table with the same unique primary or secondary table key are ignored in the source table and do not raise an exception.

If the addition `DISCARDING DUPLICATES` is specified for an operand for which a unique table key is not known statically, the syntax check produces a warning.

Use of `DISCARDING DUPLICATES` in the [executable example](ABENCORRESPONDING_DUPLICATES_ABEXA.html).

[Handling Duplicates](ABENCORRESPONDING_DUPLICATES_ABEXA.html)

-   After a tabular parameter `itab` in the [basic form](ABENCORRESPONDING_CONSTR_ARG_TYPE.html).
-   After [mapping relationships](ABENCORRESPONDING_CONSTR_MAPPING.html)\\ `t1 = s1`, `t2 = s2`, ... for tabular components.

... CORRESPONDING itab2( itab1 DISCARDING DUPLICATES \\n MAPPING y1 = x1 \\n y2 = x2 DISCARDING DUPLICATES ) ... abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abenconstructor\_expr\_corresponding.html