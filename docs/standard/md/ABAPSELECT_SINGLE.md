---
title: "ABAPSELECT_SINGLE"
description: |
  ABAPSELECT_SINGLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_SINGLE.htm"
abapFile: "ABAPSELECT_SINGLE.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "method", "class", "data", "internal-table", "ABAPSELECT", "SINGLE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... SINGLE ... [FOR UPDATE] ...`

`... SINGLE ... [FOR UPDATE NOWAIT].`

[`[... FOR UPDATE ... | ... FOR UPDATE NOWAIT.]`](#ABAP_ONE_ADD@1@)

Using the ABAP-specific addition `SINGLE`, the result set of a [query](ABENASQL_QUERY_GLOSRY.html) contains a single row set. The addition is possible with a standalone [`SELECT`](ABAPSELECT.html) statement or with the [main query](ABENMAINQUERY_GLOSRY.html) of a standalone [`WITH`](ABAPWITH.html) statement. If `SINGLE` is specified, a `SELECT` statement does not open a loop that must be closed using [`ENDSELECT`](ABAPENDSELECT.html) or [`ENDWITH`](ABAPENDWITH.html) when reading into a non-table-like [target area](ABAPINTO_CLAUSE.html). No internal tables can be specified as a [target area](ABAPINTO_CLAUSE.html).

The following restrictions apply:

Reads the row with the information about Lufthansa flight 0400 from the DDIC database table `SPFLI`.

The class `CL_DEMO_SELECT_SINGLE_VS_UP_TO` compares the performance of `SELECT` statements with the addition `SINGLE` with equivalent statements with the addition [`UP TO 1 ROWS`](ABAPSELECT_UP_TO_OFFSET.html).

When reading an individual row using `SINGLE`, the addition `FOR UPDATE` sets a [database lock](ABENDATABASE_LOCK_GLOSRY.html) as an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) for this row on the database. With this addition, the `SELECT` statement is only executed if, in the [`WHERE` condition](ABAPWHERE.html), all primary key fields in logical expression that are joined using `AND` are checked for equivalence. Otherwise the result set is empty and `sy-subrc` is set to 8.

The addition `FOR UPDATE` can only be used when accessing data sources where writes are allowed. This addition cannot be used for reading from internal tables with [`FROM @itab`](ABAPSELECT_ITAB.html) and when accessing views where only reads are allowed.

The addition `FOR UPDATE NOWAIT` works in the same way as the addition `FOR UPDATE` and must be specified at the end of a `SELECT SINGLE` statement. Using the addition `NOWAIT`, an attempt is made to set the lock without waiting. If no lock can be set, `sy-subrc` is set to 6. In this case, no data is read.

In the following example, the [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) set by the statement [`DELETE`](ABAPDELETE_DBTAB.html) is released using a [database commit](ABENDB_COMMIT.html). Then, an exclusive lock is already set by the `SELECT` statement and not only by the [`UPDATE`](ABAPUPDATE.html) statement.

-   If the selection of the `SELECT` statement covers exactly one row, this row is included in the result set.
-   If the selection of the `SELECT` statement covers more than one row, one of these rows is included in the result set.

-   The additions [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html), [`ORDER BY`](ABAPORDERBY_CLAUSE.html), [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html), and [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) cannot be used together with `SINGLE`.
-   The addition `SINGLE` cannot be used in the [main query](ABENMAINQUERY_GLOSRY.html) of the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) or in [subqueries](ABENSUBQUERY_GLOSRY.html).

-   A `SELECT` statement with the addition `SINGLE` is generally faster for completely specified rows than for incompletely specified rows.
-   The result set of `SELECT` statements with the addition `SINGLE` matches the set from the addition [`UP TO 1 ROWS`](ABAPSELECT_UP_TO_OFFSET.html) without using the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html). The difference between the statements is:

-   If the addition `SINGLE` is used, ABAP SQL handles the result set as a single row. The target area is a structure or a list of elementary fields, but the statement [`ENDSELECT`](ABAPENDSELECT.html) or [`ENDWITH`](ABAPENDWITH.html) is not necessary. The row cannot be read into an internal table. Not all additions of the `SELECT` statement, however, can be used.
-   If the addition [`UP TO 1 ROWS`](ABAPSELECT_UP_TO_OFFSET.html) is used, ABAP SQL handles the result set as tabular. The statement [`ENDSELECT`](ABAPENDSELECT.html) or [`ENDWITH`](ABAPENDWITH.html) must be specified or the row must be read into an internal table. The addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) can, however, be specified.

-   A `SELECT` statement with the addition `SINGLE` is optimized for reading a single row. This means that a `SELECT` statement with the addition `SINGLE` is generally slightly faster than with the addition [`UP TO 1 ROWS`](ABAPSELECT_UP_TO_OFFSET.html), since no loop has to be opened. In practice, however, this difference can usually be ignored. The following is recommended:

-   Use of the addition `SINGLE` to read exactly one completely specified row.
-   Use of the addition [`UP TO 1 ROWS`](ABAPSELECT_UP_TO_OFFSET.html) to read a maximum of one row from a set of selected rows.

-   The addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) cannot be specified together with `SINGLE`, which means that it is not possible to define which row is read from a non-unique selection. Instead, the addition [`UP TO 1 ROWS`](ABAPSELECT_UP_TO_OFFSET.html) can be specified with the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) to define which row is read from a non-unique selection.
-   If `SINGLE` is specified and [LOB handles](ABENSELECT_INTO_LOB_HANDLES.html) are created in the [`INTO` clause](ABAPINTO_CLAUSE.html), all primary key fields joined by `AND` in logical expressions must be checked for equality in the [`WHERE` condition](ABAPWHERE.html). If this is not possible, the addition [`UP TO 1 ROWS`](ABAPSELECT_UP_TO_OFFSET.html) can be used instead of `SINGLE`.
-   If the addition `SINGLE` is used and [LOB handles](ABENSELECT_INTO_LOB_HANDLES.html) are created, all [reader streams](ABENSELECT_INTO_LOB_HANDLES.html) that are created when the `SELECT` statement is executed as well as [locators](ABENSELECT_INTO_LOB_HANDLES.html) continue to exist until they are closed, either explicitly with one of their methods, or implicitly at the end of the current database LUW. During this time, the associated database operation is not completed. It is recommended that all LOB handles are closed explicitly as soon as possible.
-   The addition `SINGLE` is designed to pass exactly one row to a [flat structure](ABENFLAT_STRUCTURE_GLOSRY.html) as a work area without opening a loop that must be closed using [`ENDSELECT`](ABAPENDSELECT.html) or [`ENDWITH`](ABAPENDWITH.html).

-   Usually, the row must be identified exactly, and it must be specified uniquely in the [`WHERE` condition](ABAPWHERE.html). In a [data source](ABAPSELECT_DATA_SOURCE.html), this is usually done by specifying comparison values for the [primary key](ABENPRIMARY_KEY_GLOSRY.html).
-   If a row is not uniquely determined, the addition `SINGLE` can also be used to detect whether a corresponding row exists. In this case, the warning from the extended program check must be hidden using a [pragma](ABENPRAGMA_GLOSRY.html). To avoid unnecessary transports of data, a `SELECT` list can also be used that contains nothing but a single constant.
-   For the latter see the [executable example](ABENSQL_EXPR_LITERAL_ABEXA.html).
-   The [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) produces a warning if no exact row is determined.

-   If set incorrectly, the lock can produce a [deadlock](ABENDEADLOCK_GLOSRY.html).
-   The addition `FOR UPDATE` cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). A standalone `SELECT` statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html).

SELECT SINGLE \* \\n FROM spfli \\n WHERE carrid = 'LH' AND \\n connid = '0400' \\n INTO @FINAL(wa). DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ). \\nCOMMIT CONNECTION default. \\n\\ \\n... \\n\\ \\n\\ \\nSELECT SINGLE id, num1 \\n FROM demo\_expressions \\n WHERE id = 'X' \\n INTO @FINAL(wa) \\n FOR UPDATE NOWAIT. \\n\\ \\nSELECT SINGLE \\n FROM demo\_expressions \\n FIELDS id, num1 \\n WHERE id = 'X' \\n INTO @FINAL(wa2) \\n FOR UPDATE NOWAIT. \\n\\ \\n\\ \\n... \\n\\ \\nUPDATE demo\_expressions SET num1 = 111 WHERE id = 'X'. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html