---
title: "ABENNEWS-40-ASSIGN"
description: |
  ABENNEWS-40-ASSIGN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-ASSIGN.htm"
abapFile: "ABENNEWS-40-ASSIGN.html"
keywords: ["insert", "if", "case", "field-symbol", "ABENNEWS", "ASSIGN"]
---

The extended field symbol concept can be summarized as follows:

Like typed field symbols, untyped field symbols are now, by default, **not** assigned. This means that writes in either case (like `<fs> = f.`) produce a runtime error.

At the same time, reads cannot be performed on typed unassigned field symbols.

Reads on untyped unassigned field symbols are only allowed for the sake of compatibility (default value `SPACE`).

Unassigned field symbols, however, should no longer be accessed.

The new predicate expression [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) can be used to query whether a field has already been assigned to the field symbol `<fs>`.

The new statement [`UNASSIGN` <fs>](ABAPUNASSIGN.html) sets the field symbol <fs> so that it is not pointing to a field.

The expression [`IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html), and the [`ASSIGN`](ABAPASSIGN.html) and [`UNASSIGN`](ABAPUNASSIGN.html) statements enable the state of a field symbol to be established and modified at any time. This makes `ABAP` programs simpler and less error-prone.

**Further changes**

If the field symbol <fs> was not yet assigned (using [`ASSIGN`](ABAPASSIGN.html)), it is ignored in the following statements:

[`INSERT <fs> INTO fg.`](ABAPINSERT_FG.html)

[`SORT BY <fs>.`](ABAPSORT_EXTRACT.html)

[`SORT itab BY <fs>.`](ABAPSORT_ITAB.html)

[`AT NEW <fs>.`](ABAPAT_EXTRACT.html)

[`AT END OF <fs>.`](ABAPAT_EXTRACT.html)

-   The behavior of [typed and untyped field symbols](ABAPFIELD-SYMBOLS.html) has been standardized.
-   New predicate expression [<fs> `IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html)
-   New statement [`UNASSIGN <fs>`](ABAPUNASSIGN.html)

-   Dynamic `ASSIGN` (`ASSIGN (f) TO <fs>.`):
-   If `<fs>` is an untyped field symbol and the content of `f` are invalid, the field symbol is not set.
-   `ASSIGN` with offset and length for `VALUE` parameters in `FORMS` and `FUNCTIONS`:
-   A runtime error is produced if `ASSIGN f+off(len) TO <fs>` is used to address areas beyond the range of the `VALUE` parameter `f`.
-   Non-assigned field symbols in `INSERT`, `SORT`, and `AT`:

abenabap.html abennews.html abennews-4.html abennews-40.html