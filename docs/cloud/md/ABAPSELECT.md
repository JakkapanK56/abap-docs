---
title: "ABAPSELECT"
description: |
  ABAPSELECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT.htm"
abapFile: "ABAPSELECT.html"
keywords: ["select", "update", "loop", "if", "case", "data", "ABAPSELECT"]
---

``SELECT [`mainquery_clauses`](ABAPSELECT_MAINQUERY.html)\    [[`UNION|INTERSECT|EXCEPT ...`](ABAPUNION.html)]\    [`INTO|APPENDING`](ABAPINTO_CLAUSE.html) target    [[`UP TO ...]\ [OFFSET ...]`](ABAPSELECT_UP_TO_OFFSET.html)\    [[`OPTIONS ...`](ABAPSELECT_OPTIONS.html)].    ...  [[`ENDSELECT`](ABAPENDSELECT.html)].``

Use of the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `SELECT` as a standalone statement. This statement reads data from one or more [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) or [CDS persistent entities](ABENCDS_SQL_ENTITY_GLOSRY.html), uses this data to create a multirow or a single row result set, and assigns this result set to suitable ABAP data objects.

The additions [`mainquery_clauses`](ABAPSELECT_MAINQUERY.html) define which data is read from the database in which form. The [set operators](ABENCDS_SET_OPERATORS_GLOSRY.html)\\ [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), and [`EXCEPT`](ABAPUNION.html) can be used to combine the result sets of multiple queries. In this case, special rules [`query_clauses`](ABAPUNION_CLAUSE.html) apply when specifying clauses. Finally, the following properties are defined:

In the following cases, the statement `SELECT` opens a loop that must be closed using [`ENDSELECT`](ABAPENDSELECT.html).

In each loop iteration, the `SELECT` statement assigns a row or a package of rows to the data objects specified in `target`. If the last row has been assigned or the result set is empty, `SELECT` jumps to `ENDSELECT`. A [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) is opened implicitly to process a `SELECT` loop, and is closed again when the loop has ended. In a program, a maximum of 17 database cursors can be open simultaneously across the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html). If more than 17 database cursors are opened, the runtime error `DBSQL_TOO_MANY_OPEN_CURSOR` occurs. If the entire result set is passed to the data object in one step, no loop is opened and the statement `ENDSELECT` cannot be specified.

A `SELECT` loop can be exited with one of the following statements:

In order to exit the current loop pass and to continue with the next loop pass, the statements [`CONTINUE`](ABAPCONTINUE.html) and [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html) can be used.

The [`INTO` clause](ABAPINTO_CLAUSE.html) introduced using `INTO|APPENDING` must be specified as the final clause of the `SELECT` statement and the optional additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html), [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html), and [`abap_options`](ABAPSELECT_OPTIONS.html) must be specified after the `INTO` clause.

The statement `SELECT` sets the values of the system fields `sy-subrc` and `sy-dbcnt`.

After each value that is passed to an ABAP data object, the statement `SELECT` sets `sy-dbcnt` to the number of rows passed. If an overflow occurs because the number or rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1. If the result set is empty, `sy-dbcnt` is set to 0. As with `sy-subrc`, special rules apply when only [aggregate expressions](ABAPSELECT_AGGREGATE.html)\\ [specified in columns](ABAPSELECT_CLAUSE_COL_SPEC.html) are used in the [`SELECT` list](ABAPSELECT_LIST.html) of the `SELECT` clause.

The example shows two `SELECT` statements that differ only in the arrangement of their [`SELECT`](ABAPSELECT_CLAUSE.html) and [`FROM`](ABAPFROM_CLAUSE.html) clauses. The result of both statements, which access two DDIC database tables via an [`INNER JOIN`](ABAPSELECT_JOIN.html), is identical.

-   ABAP target objects
-   In the [`INTO`](ABAPINTO_CLAUSE.html) clause after `INTO` or `APPENDING`, the `target` data objects are specified, to which the result set is assigned by row or by package.
-   Restricting the result set
-   The additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html) and [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) determine the number of rows to be read.
-   ABAP-specific additions
-   Optional additions behind [`OPTIONS`](ABAPSELECT_OPTIONS.html) disable [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html), define whether [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is to be bypassed.

-   If an assignment is made to a non-table-like target range, that is, a `SELECT` statement without the addition [`INTO|APPENDING ... TABLE`](ABAPINTO_CLAUSE.html), a loop closed by `ENDSELECT` always occurs, except in the following instances:

-   The addition [`SINGLE`](ABAPSELECT_SINGLE.html) for reading a single row is specified after `SELECT`
-   The columns of the result set are specified statically in the [`SELECT` list](ABAPSELECT_LIST.html), they contain only [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html), and the additions [`GROUP BY`](ABAPGROUPBY_CLAUSE.html), [`UNION`](ABAPUNION_CLAUSE.html), [`INTERSECT`](ABAPUNION_CLAUSE.html), and [`EXCEPT`](ABAPUNION_CLAUSE.html) are not specified.

-   If an assignment is made to a table-like target range, that is, a `SELECT` statement with the addition [`INTO|APPENDING ... TABLE`](ABAPINTO_CLAUSE.html), a loop closed by `ENDSELECT` occurs whenever the addition `PACKAGE SIZE` is used.

-   [`EXIT`](ABAPEXIT_LOOP.html) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](ABENLEAVE_PROCESSING_BLOCKS.html)

-   The query formulated in the `SELECT` statement is implemented in the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) for the programming interface of the database system and is passed to this system. The data is read in [packages](ABENABAP_SQL_OVIEW.html) from the database and transported from the database server to the current AS ABAP. On AS ABAP, the data is passed to the data objects of the ABAP program in accordance with the settings specified in the [`INTO`](ABAPINTO_CLAUSE.html) and [`APPENDING`](ABAPINTO_CLAUSE.html) additions.
-   `SELECT` loops can be nested. For performance reasons, it may be more efficient to use a join or a [subquery](ABENSUBQUERY_GLOSRY.html).
-   Within a `SELECT` loop, no statements can be used that produce a [database commit](ABENDB_COMMIT.html) or a [database rollback](ABENDB_ROLLBACK.html), causing the corresponding [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) to be closed as a result.
-   The dynamic forms of the statements [`WITH`](ABAPWITH.html) enable fully dynamic `SELECT` statements, where all clauses except the `INTO` clause and the ABAP-specific additions can be specified in one dynamic token.
-   If [write accesses](ABENABAP_SQL_WRITING.html) are performed on the data sources read by a `SELECT` loop within the loop, the behavior is database-dependent and undefined. Such accesses should therefore be avoided.
-   The statement `ENDSELECT` closes all the [reader streams](ABENSELECT_INTO_LOB_HANDLES.html) linked to the `SELECT` loop.
-   The current [isolation level](ABENDB_ISOLATION.html) determines whether a `SELECT` statement accesses only data released by a [database commit](ABENDB_COMMIT.html) or whether it also accesses unreleased data in a different [database LUW](ABENDATABASE_LUW_GLOSRY.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA cityfrom TYPE spfli-cityfrom VALUE 'NEW YORK'. \\n\\ \\nSELECT c~carrname, p~connid, p~cityfrom, p~cityto \\n FROM scarr AS c \\n INNER JOIN spfli AS p \\n ON c~carrid = p~carrid \\n WHERE p~cityfrom = @cityfrom \\n ORDER BY c~carrname, p~connid, p~cityfrom, p~cityto \\n INTO TABLE @FINAL(result1) \\n UP TO 10 ROWS. \\n\\ \\nSELECT FROM scarr AS c \\n INNER JOIN spfli AS p \\n ON c~carrid = p~carrid \\n FIELDS c~carrname, p~connid, p~cityfrom, p~cityto \\n WHERE p~cityfrom = @cityfrom \\n ORDER BY c~carrname, p~connid, p~cityfrom, p~cityto \\n INTO TABLE @FINAL(result2) \\n UP TO 10 ROWS. \\n\\ \\nASSERT result2 = result1. \\nout->write( result1 ). \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** 0 In each value passing to an ABAP data object, the statement `SELECT` sets `sy-subrc` to 0. In addition, `SELECT` sets `sy-subrc` to 0 before a `SELECT` loop is exited using `ENDSELECT`, if at least one row was passed in the loop. 4 The statement `SELECT` sets `sy-subrc` to 4 if the result set is empty. This usually means that no data was found on the database. Special rules apply when only [aggregate expressions](ABAPSELECT_AGGREGATE.html)\\ [specified as columns](ABAPSELECT_CLAUSE_COL_SPEC.html) are used in the [`SELECT` list](ABAPSELECT_LIST.html) of the `SELECT` clause. 6 The statement `SELECT` sets `sy-subrc` to 6 if no lock can be set for the addition [`FOR UPDATE NOWAIT`](ABAPSELECT_SINGLE.html). 8 The statement `SELECT` sets `sy-subrc` to 8 if the addition [`FOR UPDATE`](ABAPSELECT_SINGLE.html) is used in `result`, and the [primary key](ABENPRIMARY_KEY_GLOSRY.html) is not fully specified after `WHERE`. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html