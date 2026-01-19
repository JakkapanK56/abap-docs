---
title: "ABAPFETCH"
description: |
  ABAPFETCH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFETCH.htm"
abapFile: "ABAPFETCH.html"
keywords: ["select", "do", "if", "catch", "class", "data", "types", "internal-table", "ABAPFETCH"]
---

[Short Reference](ABAPFETCH_SHORTREF.html)

``FETCH NEXT CURSOR dbcur [`INTO|APPENDING ...`](ABAPINTO_CLAUSE.html).``

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `FETCH` takes the rows requested by the `INTO` or `APPENDING` addition from the result set of the [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) linked with the cursor variable `dbcur` from the current cursor position and assigns them to the data objects specified there.

The cursor variable `dbcur` must be a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) declared with the special predefined data type `cursor`, which was opened with the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) or that was assigned an open cursor. Otherwise, a catchable exception of the class `CX_SY_OPEN_SQL_DB` is raised.

The syntax and meaning of the addition `INTO` or `APPENDING` are the same as the identically named [additions](ABAPINTO_CLAUSE.html) of the `SELECT` statement, with the exception that no inline declarations can be made there without the addition [`NEW`](ABAPSELECT_INTO_TARGET.html) and no [LOB handles](ABENSELECT_INTO_LOB_HANDLES.html) can be created.

If non-table-like data objects are specified after `INTO`, one row is extracted. If an internal table is specified after `INTO` or `APPENDING`, either all rows are extracted or as many as specified in the addition [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html).

The statement `FETCH` moves the position of the database cursor that is linked with `dbcur` by the number of extracted rows to the next row to be extracted. If the last row of the result set was extracted in a `FETCH` statement, each subsequent `FETCH` statement in which `dbcur` is linked with the same database cursor sets `sy-subrc` to 4, without affecting the data objects specified after `INTO` or `APPENDING`.

The statement `FETCH` sets the values of the system fields `sy-subrc` and `sy-dbcnt`.

After every row extraction, the statement `FETCH` sets `sy-dbcnt` to the number of rows extracted so far from the relevant result set. If an overflow occurs because the number or rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1. If no row can be extracted, `sy-dbcnt` is set to 0.

Reading of data from the DDIC database table `SPFLI` in packets of varying size using two parallel cursors. The packet size is determined by the first cursor using the [aggregation function](ABENAGGREGATE_EXPRESSION_GLOSRY.html)\\ `count( * )` and using the second cursor for access. Variable control of the addition `PACKAGE SIZE` is not possible within a single `SELECT` statement.

-   Consecutive `FETCH` statements that access the same result set can have the different additions `INTO` or `APPENDING`. The specification of work areas can be combined with any internal table specifications and various combinations of `PACKAGE SIZE` can be specified as well. In doing so, the addition `CORRESPONDING FIELDS` must either not be listed at all in any of the `FETCH` statements involved, or has to be listed in every statement. Moreover, the data types of all work areas `wa` involved or the row types of the internal tables `itab` must be identical. The specifications of a parenthesized list of data objects after `INTO` cannot be combined with the specification of work areas or internal tables, but every involved `FETCH` statement must contain a list of this type.
-   It depends on the database system whether the database cursor in the database is closed implicitly after the extraction of the final row of the result set or not. For this reason, it is always better to use the [`CLOSE CURSOR`](ABAPCLOSE_CURSOR.html) statement explicitly.
-   If a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is defined as a [replacement object](ABENDDIC_REPLACEMENT_OBJECTS.html) for a DDIC database table or DDIC database view specified as a [data source](ABAPSELECT_DATA_SOURCE.html) of the `SELECT` statement of [`OPEN CURSOR`](ABAPOPEN_CURSOR.html), the statement `FETCH` accesses the CDS entity and not the DDIC database table or the DDIC database view.
-   The specifications of host variables without the escape character `@` is [obsolete](ABENABAP_SQL_HOSTVAR_OBSOLETE.html). The escape character `@` must be specified in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05.
-   If a statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) is checked in accordance with the rules for [strict mode](ABENABAP_SQL_STRICTMODE_760.html) from ABAP release 7.60, this also applies to every statement `FETCH` that accesses the open database cursor. Conversely, a strict syntax check mode in the statement `FETCH` from [ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html) triggered by the use of `NEW` in the [`INTO`](ABAPINTO_CLAUSE.html) clause also applies the strict mode to the associated statement `OPEN CURSOR`. A violation of the rules specified by `FETCH` in `OPEN CURSOR` raises an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nOPEN CURSOR @DATA(dbcur1) FOR \\n SELECT carrid, COUNT(\*) AS count \\n FROM spfli \\n GROUP BY carrid \\n ORDER BY carrid. \\n\\ \\nOPEN CURSOR @DATA(dbcur2) FOR \\n SELECT \* \\n FROM spfli \\n ORDER BY carrid. \\n\\ \\nDATA: BEGIN OF counter, \\n carrid TYPE spfli-carrid, \\n count TYPE i, \\n END OF counter, \\n spfli\_tab TYPE TABLE OF spfli. \\nDO. \\n FETCH NEXT CURSOR @dbcur1 INTO @counter. \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n out->next\_section( |\\{ counter-carrid \\n \\}, \\{ counter-count \\}| ). \\n FETCH NEXT CURSOR @dbcur2 \\n INTO TABLE @spfli\_tab PACKAGE SIZE @counter-count. \\n out->write( spfli\_tab ). \\nENDDO. \\n\\ \\nCLOSE CURSOR: @dbcur1, \\n @dbcur2. \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** 0 At least one row was extracted from the result set. 4 No row was extracted. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapopen\_cursor.html