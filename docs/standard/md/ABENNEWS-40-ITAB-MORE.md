---
title: "ABENNEWS-40-ITAB-MORE"
description: |
  ABENNEWS-40-ITAB-MORE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-ITAB-MORE.htm"
abapFile: "ABENNEWS-40-ITAB-MORE.html"
keywords: ["select", "insert", "delete", "loop", "if", "types", "field-symbol", "ABENNEWS", "ITAB", "MORE"]
---

[1. New Addition `TRANSPORTING f1 f2 ...` for `MODIFY`](#ABAP_MODIFICATION_1@4@)

[2. Unassigned Field Symbols for `INSERT`, `SORT`, and `AT`](#ABAP_MODIFICATION_2@4@)

[3. `LOOP ... WHERE` for Unstructured Line Types](#ABAP_MODIFICATION_3@4@)

Using the addition [`TRANSPORTING f1 f2 ... [WHERE cond]`](ABAPMODIFY_ITAB.html) of the statement `MODIFY`, it is now possible to target the content of individual fields and modify it (known as a selective field transport).

If the field symbol <fs> was not yet assigned (using [`ASSIGN`](ABAPASSIGN.html)), it is ignored in the following statements:

For tables without structured line types, tables of type `I` for example, a `WHERE` condition ([`LOOP`](ABAPLOOP_AT_ITAB.html)) can now be formulated using the addition `TABLE LINE`.

The same applies to the `WHERE` variants of the statements [`DELETE`](ABAPDELETE_ITAB.html) and [`MODIFY`](ABAPMODIFY_ITAB.html).

-   [`INSERT <fs> INTO fg.`](ABAPINSERT_FG.html)
-   [`SORT BY <fs>.`](ABAPSORT_EXTRACT.html)
-   [`SORT itab BY <fs>.`](ABAPSORT_ITAB.html)
-   [`AT NEW <fs>.`](ABAPAT_EXTRACT.html)
-   [`AT END OF <fs>.`](ABAPAT_EXTRACT.html)

abenabap.html abennews.html abennews-4.html abennews-40.html