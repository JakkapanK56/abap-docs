---
title: "ABENNEWS-610-SQL"
description: |
  ABENNEWS-610-SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-610-SQL.htm"
abapFile: "ABENNEWS-610-SQL.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "while", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "ABENNEWS", "610", "SQL"]
---

[1. `COMMIT WORK` in Local Updates](#ABAP_MODIFICATION_1@4@) 

[2\. Additional Syntax Checks](#ABAP_MODIFICATION_2@4@)

[3. Type Check in the Addition `VERSION`](#ABAP_MODIFICATION_3@4@)

[4\. Dynamic SQL](#ABAP_MODIFICATION_4@4@)

[5\. Implicit Client Handling](#ABAP_MODIFICATION_5@4@)

[6. Use of `DISTINCT` in Pooled Tables and Cluster Tables](#ABAP_MODIFICATION_6@4@) 

[7\. Database Changes Using Read-Only Views](#ABAP_MODIFICATION_7@4@)

[8\. Catchable Exceptions in ABAP SQL and Native SQL](#ABAP_MODIFICATION_8@4@)

[9. `INSERT`, `UPDATE`, and `MODIFY` of the System Table `TRDIR`](#ABAP_MODIFICATION_9@4@)

[10. Selection Table and Target Table in `FOR ALL ENTRIES`](#ABAP_MODIFICATION_10@4@)

[11\. New Exception for Pooled Tables and Cluster Tables](#ABAP_MODIFICATION_11@4@)

[12\. Strings on the Database](#ABAP_MODIFICATION_12@4@)

[13. `WHERE` Condition Optional in `DELETE` Statement](#ABAP_MODIFICATION_13@4@)

As in the asynchronous update, the system now also sets the system field `SY-ONCOM` = V in the local update. Therefore the system recognizes a [`COMMIT WORK`](ABAPCOMMIT.html) in the function module that makes the local update, and this raises an uncatchable exception (a runtime error)

Additional syntax checks were introduced for the following constructs:

In the case of the statements [`MODIFY`](ABAPMODIFY_DBTAB.html), [`DELETE`](ABAPDELETE_DBTAB.html), [`READ TABLE`](ABAPREAD_TABLE_DBTAB.html), and [`LOOP AT`](ABAPLOOP_AT_DBTAB.html) only fields of types C, N, D, T, and [flat](ABENFLAT_GLOSRY.html) structures of the same types are allowed for the addition `VERSION`.

Dynamic specifications are now possible for the following language constructs:

The client is now specified in the database interface. Previously the system changed the client field in an internal table or work area, as soon as the user carried out an [`INSERT`](ABAPINSERT_DBTAB.html) or [`UPDATE`](ABAPUPDATE.html) on the database table. Now the system enters the [current client](ABENCURRENT_CLIENT_GLOSRY.html) in the database table, while the client in the work area or internal table remains unchanged.

If `DISTINCT` is used in the [`SELECT`](ABAPSELECT_CLAUSE.html) clause with pooled tables and cluster tables, this always produces (statically) a syntax error if individual columns are accessed. This combination was not detected dynamically and the addition `DISTINCT` was simply not executed. In dynamic cases, the catchable exception `CX_SY_DYNAMIC_OSQL_SEMANTICS` is now raised.

Previously, an attempt to change database tables using read-only views simply caused a runtime error. If this is known statically, a syntax error is now produced.

In ABAP SQL, [exceptions](ABENABAP_SQL_EXCEPTIONS.html) that occur when the source code is being parsed can now be handled using [`TRY ... ENDTRY`](ABAPTRY.html). As before, various runtime errors were assigned exception classes.

In statically embedded [Native SQL](ABENNATIVE_SQL_GLOSRY.html), all runtime errors of the database interface are now assigned exception classes, so that the exceptions between [`TRY ... ENDTRY`](ABAPTRY.html) can be handled. In addition, the opening of too many [cursors](ABAPOPEN_CURSOR.html) and connections can be caught.

Previously, `INSERT TRDIR` and `UPDATE TRDIR` were valid ABAP SQL statements. In the case of `UPDATE TRDIR`, program properties could be changed by the runtime synchronization without registration. Both statements now cause a syntax error. Only `MODIFY TRDIR` is still allowed, because there the runtime synchronization is switched on. The statement is for internal usage only and not documented.

The table of selection conditions for [`FOR ALL ENTRIES`](ABAPWHERE.html) and the target table of the [`SELECT`](ABAPINTO_CLAUSE.html) statement can be the same. This makes the form `SELECT ... INTO itab FOR ALL ENTRIES IN itab` possible.

If pooled tables or cluster tables are used in subqueries, joins, [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html), or with `GROUP BY`, this raises the exception `CX_SY_DYNAMIC_OSQL_SEMANTICS`.

It is now possible to process character strings and binary data saved to database columns as [strings](ABENDDIC_BUILTIN_TYPES.html) in ABAP SQL.

In the statement [`DELETE FROM dbtab`](ABAPDELETE_DBTAB.html), the `WHERE` condition is no longer required. A `DELETE` statement without a `WHERE` condition deletes all rows of a table.

-   [Subqueries](ABENSUBQUERY_GLOSRY.html) in `WHERE` conditions are only allowed if the source table is transparent.
-   The addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) is now also only possible with transparent tables.
-   [`INTO CORRESPONDING`](ABAPINTO_CLAUSE.html) is now only possible when moving data to structured work areas or internal tables.
-   [`ESCAPE`](ABENWHERE_LOGEXP_LIKE.html) in `WHERE conditions` for `SELECT`, `DELETE`, and `UPDATE` of pooled tables

-   ABAP variables in [`WHERE`](ABAPWHERE.html), [`HAVING`](ABAPHAVING_CLAUSE.html), [`FROM`](ABAPFROM_CLAUSE.html), and [`SET`](ABAPUPDATE.html).
-   Lowercase spelling when specifying table names dynamically.
-   Dynamic `WHERE` in [`DELETE`](ABAPDELETE_DBTAB.html) and [`UPDATE`](ABAPUPDATE.html)
-   Dynamic `SET` in [`UPDATE`](ABAPUPDATE.html).
-   Dynamic [aggregate expressions](ABAPSELECT_AGGREGATE.html) in the [`HAVING`](ABAPHAVING_CLAUSE.html) clause
-   Dynamic [`FROM`](ABAPFROM_CLAUSE.html) in `SELECT ... FROM` for joins, [`ON` conditions](ABAPSELECT_JOIN.html), and [table aliases](ABAPALIASES.html)
-   Strings, tables of strings, and C fields for all operand positions for which statements could previously be specified dynamically in an internal table.

abenabap.html abennews.html abennews-6.html abennews-610.html