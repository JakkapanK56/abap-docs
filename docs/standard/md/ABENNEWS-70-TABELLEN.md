---
title: "ABENNEWS-70-TABELLEN"
description: |
  ABENNEWS-70-TABELLEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-70-TABELLEN.htm"
abapFile: "ABENNEWS-70-TABELLEN.html"
keywords: ["delete", "loop", "do", "if", "case", "internal-table", "field-symbol", "ABENNEWS", "TABELLEN"]
---

In ABAP release 7.0, additional functions in internal tables have been introduced as follows:

[1. Addition `CASTING` After `ASSIGNING`](#ABAP_MODIFICATION_1@4@)

[2. Sort Key Specified Dynamically in `SORT`](#ABAP_MODIFICATION_2@4@)

[3. Optimization when Specifying a `WHERE` Condition](#ABAP_MODIFICATION_3@4@)

In all statements for processing internal tables in which the addition [`ASSIGNING <fs>`](ABAPREAD_TABLE_OUTDESC.html) can be specified for the output behavior, it is now also possible to use the addition [`CASTING`](ABAPASSIGN_CASTING.html) (familiar from the statement [`ASSIGN`](ABAPASSIGN.html)) to cast a table line to the type of the field symbol.

In the statement [`SORT itab`](ABAPSORT_ITAB.html), the sort key, sort direction, and the text sorting can be specified in a new variant of the addition `BY` in a special internal table `otab` of type `ABAP_SORTORDER_TAB`.

Until now, the optimized table reads performed when specifying an initial segment of the table key (using equality queries joined using `AND`) in cases where a `WHERE` condition was specified in the statements [`LOOP`](ABAPLOOP_AT_ITAB_COND.html), [`DELETE`](ABAPDELETE_ITAB_LINES.html), and [`MODIFY`](ABAPMODIFY_ITAB_MULTIPLE.html) were only optimized for [sorted tables](ABENSORTED_TABLE_GLOSRY.html). From ABAP release 7.0, this is done for [hashed tables](ABENHASHED_TABLE_GLOSRY.html) too. In hashed tables, however, the entire table key must be specified for the optimization to take place.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html