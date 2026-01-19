---
title: "ABENNEWS-757-ITAB"
description: |
  ABENNEWS-757-ITAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-757-ITAB.htm"
abapFile: "ABENNEWS-757-ITAB.html"
keywords: ["insert", "delete", "loop", "do", "if", "case", "internal-table", "ABENNEWS", "757", "ITAB"]
---

[1. New Addition `STEP` for Defining Step Size and Processing Order](#ABAP_MODIFICATION_1@4@) 

[2\. Exception when Mixing Index Access with Hash Key Access](#ABAP_MODIFICATION_2@4@)

[3. Correction for `FROM` Addition](#ABAP_MODIFICATION_3@4@)

The new addition `STEP` defines the step size and the order for processing an internal table. For the statements [`LOOP`](ABAPLOOP_AT_ITAB_COND.html) and [`FOR`](ABENFOR_COND.html), `STEP` can be used to control the step size and the processing order. For the statements [`APPEND`](ABAPAPPEND_LINESPEC.html), [`DELETE`](ABAPDELETE_ITAB_LINES.html), [`INSERT`](ABAPINSERT_ITAB_LINESPEC.html), [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_LSPC.html), and [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_LSPC.html), `STEP` can only be used to define the step size. It is not possible to change the processing order with `STEP` for these statements.

Access to a [table index](ABENTABLE_INDEX_GLOSRY.html) when accessing an internal table using a [hash key](ABENHASH_KEY_GLOSRY.html) (accessing a [hashed table](ABENHASHED_TABLE_GLOSRY.html) using its primary key or accessing any internal table using a hashed [secondary key](ABENSECONDARY_KEY_GLOSRY.html)) is not allowed. When a hashed key is specified dynamically behind `USING KEY` in statement [`LOOP AT`](ABAPLOOP_AT_ITAB.html) or expression [`FOR ... IN`](ABENFOR_ITAB.html), usage of `FROM` and `TO` must result in an exception. This was not the case before release 7.57.

From release 7.57 on, the runtime error `ITAB_ILLEGAL_INDEX_OP` occurs in such a situation. Before release 7.57, the behavior was undefined.

This change is slightly incompatible.

When a negative value is specified for `FROM` in statement [`LOOP AT`](ABAPLOOP_AT_ITAB.html) or expression [`FOR ... IN`](ABENFOR_ITAB.html), it is set to 1 implicitly. Before release 7.57, this was not the case in the following situation:

The loop was not processed at all. From release 7.57 on, the loop is processed as documented.

This change is slightly incompatible.

-   The internal table is accessed using a sorted key.
-   The internal table contains more than 10 table lines.
-   A `WHERE` condition is specified that can be [optimized](ABENITAB_WHERE_OPTIMIZATION.html).

abenabap.html abennews.html abennews-75.html abennews-757.html