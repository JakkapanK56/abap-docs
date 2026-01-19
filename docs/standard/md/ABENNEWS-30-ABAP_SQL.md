---
title: "ABENNEWS-30-ABAP_SQL"
description: |
  ABENNEWS-30-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-30-ABAP_SQL.htm"
abapFile: "ABENNEWS-30-ABAP_SQL.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "case", "data", "internal-table", "ABENNEWS", "ABAP", "SQL"]
---

[1. Dynamic `WHERE` Condition in `SELECT`](#ABAP_MODIFICATION_1@4@)

[2\. Specification of the Name of the Database Table or of the View at Runtime in ABAP SQL](#ABAP_MODIFICATION_2@4@)

[3. Return of `DUPREC` Errors from `INSERT ... FROM TABLE itab`](#ABAP_MODIFICATION_3@4@)

[4. Union of Solution Sets in `SELECT` with `FOR ALL ENTRIES in itab`](#ABAP_MODIFICATION_4@4@)

[5. Database Rows Read Package-by-Package in `SELECT` with `PACKAGE SIZE n`](#ABAP_MODIFICATION_5@4@)

[6\. Explicit Cursor Processing](#ABAP_MODIFICATION_6@4@)

[7. `SELECT` List with Aggregate Functions in `SELECT`](#ABAP_MODIFICATION_7@4@)

[8. `INTO` List in `SELECT` and `FETCH`](#ABAP_MODIFICATION_8@4@)

The `WHERE` condition can be specified partly or fully in an internal table. This means that `WHERE` conditions can be constructed dynamically at runtime. Unlike a [`RANGES`](ABAPRANGES.html) table, an internal table contains a `WHERE` condition as text. The internal table can then be accessed using `SELECT ... WHERE (itab)` or `SELECT ... WHERE sql_cond AND (itab)`. Here, `itab` stands for the name of the internal table and `sql_cond` for the statically specified part of the `WHERE` condition.

Examples and further information can be found in the documentation for the [`WHERE` clause](ABAPWHERE.html).

When using [`SELECT`](ABAPSELECT.html), [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html) and [`DELETE`](ABAPDELETE_DBTAB.html):

The name of a database table or a view can be specified dynamically as the content of a field. Instead of specifying the table name statically in the source code, a field name in brackets is given. The content of this field is then interpreted as the table name.

Examples and further information can be found in the documentation for the [`FROM` clause](ABAPFROM_CLAUSE.html).

In cases where one or more rows cannot be inserted because rows with the specified keys already exist, a runtime error always occurred in the past. The addition `... ACCEPTING DUPLICATE KEYS` has the effect of setting the return code `SY-SUBRC` to 4 rather than aborting the process. The remaining rows are then added after the statement has been executed.

Further information can be found in the documentation of the statement [`INSERT`](ABAPINSERT_DBTAB.html).

A `SELECT` statement with `...FOR ALL ENTRIES IN itab WHERE sql_cond` forms the union of solution sets of all `SELECT` statements produced when the fields of the internal table `itab` referenced in the `WHERE` condition are replaced by the corresponding values of a table row. This variant is very useful if, for example, an internal table is filled with composite [primary keys](ABENPRIMARY_KEY_GLOSRY.html). All corresponding database rows can be selected with a single `SELECT` statement. This technique avoids the need for a loop containing a `SELECT SINGLE ...` for each row of the internal table.

Examples and further information can be found in the documentation for the [`WHERE` clause](ABAPWHERE.html).

`SELECT ... INTO TABLE itab PACKAGE SIZE n` places the selected rows in the internal table in packages of `n` rows rather than all at once. Each new package overwrites the content of `itab`. This is a good way of making sure that the internal table does not get too big. If `PACKAGE SIZE` is used together with `SELECT ... APPENDING TABLE itab`, the previous content of `itab` is preserved and each new package is added at the end of the table.

Examples and further information can be found in the documentation for the [`INTO` clause](ABAPINTO_CLAUSE.html).

The statements `OPEN CURSOR`, `FETCH`, and `CLOSE CURSOR` enable nested processing of one or more database tables without the need to keep redefining the datasets. By using the addition `WITH HOLD`, a cursor can be opened which is then preserved across [database commits](ABENDATABASE_COMMIT_GLOSRY.html).

Examples and further information can be found in the documentation for the ABAP statements [`OPEN CURSOR`](ABAPOPEN_CURSOR.html), [`FETCH`](ABAPFETCH.html), and [`CLOSE CURSOR`](ABAPCLOSE_CURSOR.html).

Alongside `SELECT *`, `SELECT COUNT( * )`, and `SELECT SINGLE *`, the aggregate functions `MIN`, `MAX`, `SUM`, `COUNT`, and `AVG` can be specified plus fields of the database table in the `SELECT` list. Specifying `DISTINCT` causes duplicate rows to be removed automatically from the solution set.

Examples and further information can be found in the documentation for the [`SELECT`](ABAPSELECT.html) statement.

If the `SELECT` list specifies individual columns, the `INTO` clause can include a list of `ABAP` fields of equal length to be used as the target area.

Examples and further information can be found in the documentation for the [`INTO` clause](ABAPINTO_CLAUSE.html).

abenabap.html abennews.html abennews-30.html