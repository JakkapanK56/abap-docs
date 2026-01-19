---
title: "ABAPINSERT_FROM_SELECT_ORDER_BY_N"
description: |
  ABAPINSERT_FROM_SELECT_ORDER_BY_N - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_FROM_SELECT_ORDER_BY_N.htm"
abapFile: "ABAPINSERT_FROM_SELECT_ORDER_BY_N.html"
keywords: ["select", "insert", "delete", "if", "data", "ABAPINSERT", "FROM", "SELECT", "ORDER"]
---

If the [target](ABAPIUMD_TARGET.html) is [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) the variant [`ORDER BY n`](ABAPORDERBY_CLAUSE.html) that specifies a column via its position in the result set of a [subquery](ABAPINSERT_FROM_SELECT.html) used in the statements [`INSERT`](ABAPINSERT_DBTAB.html) and [`MODIFY`](ABAPMODIFY_DBTAB.html), works in the same way as in a main query.

If the target is [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html), the following special rules apply:

This example demonstrates the rule expressed in the first bullet point above. `ORDER BY 2` specifies the column `CARRID` of the subquery and `ORDER BY 3` specifies the column `CARRNAME`.

If the [`SELECT`](ABAPSELECT_LIST.html) list of the subquery is

where both sources are client dependent, then the first rule of the second bullet point applies: for counting with `n`:

-   If none of the additions [`USING CLIENT, CLIENTS`](ABAPSELECT_CLIENT.html) or the obsolete [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) are specified in the `FROM` clause of the subquery, the first field of the result set of the subquery is the client column that is automatically added by the ABAP runtime framework and filled with a fixed value. The actual columns of the result set are counted from 2 on. If columns of the result set are defined by `*` or `data_source~*` in the [`SELECT` list](ABAPSELECT_LIST.html), the respective client columns are omitted.
-   If an addition [`USING CLIENT, CLIENTS`](ABAPSELECT_CLIENT.html) or the obsolete [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) is specified in the `FROM` clause of the subquery:

-   If the [`SELECT`](ABAPSELECT_LIST.html) list is `*` or starts with `data_source~*`, a client column of the first data source is taken into account and client columns of further `data_source~*` are omitted when counting. If the first data source is a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), the implicitly added client column is taken into account.
-   If the [`SELECT`](ABAPSELECT_LIST.html) list starts with a column specification [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html), this column is handled as the client column and is counted as the first column and client columns of further `data_source~*` are omitted when counting.

-   1 is the client column of `source1`.
-   2 to *N*, where *N* is the number of columns of `source1`, are the other columns of `source1`.
-   *N* + 1, ... are the columns of `source2` behind its client column.

DATA itab TYPE TABLE OF scarr WITH EMPTY KEY. \\n\\ \\nFINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nitab = VALUE #( ( carrid = '11' carrname = 'zzz' ) \\n ( carrid = '22' carrname = 'yyy' ) \\n ( carrid = '33' carrname = 'xxx' ) ). \\n\\ \\nDELETE FROM scarr \\n WHERE carrid = '11' OR carrid = '22' OR carrid = '33'. \\nINSERT scarr FROM ( SELECT carrid, carrname, currcode, url \\n FROM @itab AS itab \\n ORDER BY 2 DESCENDING ). \\nSELECT \* \\n FROM scarr \\n WHERE carrid = '11' OR carrid = '22' OR carrid = '33' \\n INTO TABLE @FINAL(scarr\_tab1). \\nout->write( scarr\_tab1 ). \\n\\ \\nDELETE FROM scarr \\n WHERE carrid = '11' OR carrid = '22' OR carrid = '33'. \\nINSERT scarr FROM ( SELECT carrid, carrname, currcode, url \\n FROM @itab AS itab \\n ORDER BY 3 ). \\nSELECT \* \\n FROM scarr \\n WHERE carrid = '11' OR carrid = '22' OR carrid = '33' \\n INTO TABLE @FINAL(scarr\_tab2). \\nout->write( scarr\_tab2 ). \\n\\ \\nASSERT scarr\_tab1 = scarr\_tab2. \\n\\ \\nout->display( ). source1~\*, source2~\* abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html abapinsert\_from\_select.html