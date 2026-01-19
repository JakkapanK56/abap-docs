---
title: "ABAPINSERT_DBTAB"
description: |
  ABAPINSERT_DBTAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPINSERT_DBTAB.htm"
abapFile: "ABAPINSERT_DBTAB.html"
keywords: ["select", "insert", "delete", "if", "catch", "class", "data", "internal-table", "ABAPINSERT", "DBTAB"]
---

``INSERT \{ INTO [`target`](ABAPIUMD_TARGET.html) VALUES [`@wa|@( expr )`](ABAPINSERT_SOURCE.html)\ \}``\\ 
     ``|\ \{      [`target`](ABAPIUMD_TARGET.html) FROM [`@wa|@( expr )`](ABAPINSERT_SOURCE.html)\ \}``\\ 
     ``|\ \{      [`target`](ABAPIUMD_TARGET.html) FROM [`TABLE @itab|@( expr )`](ABAPINSERT_SOURCE.html)\ \}``\\ 
     ``|\ \{      [`target`](ABAPIUMD_TARGET.html) FROM [`( SELECT subquery_clauses [UNION|INTERSECT|EXCEPT ...] )`](ABAPINSERT_SOURCE.html)\ \}\         [[`OPTIONS`](ABAPIUMD_OPTIONS.html)]\           [`PRIVILEGED ACCESS`]           [[`CONNECTION ...`](ABAPIUMD_CONN.html)].``

[1. `INSERT INTO target VALUES @wa|@( expr ).`](#ABAP_VARIANT_1@1@)

[2. `INSERT target FROM @wa|@( expr ).`](#ABAP_VARIANT_2@1@)

[3. `INSERT target FROM TABLE @itab|@( expr ).`](#ABAP_VARIANT_3@1@)

[4. `INSERT target FROM ( SELECT subquery_clauses [UNION|INTERSECT|EXCEPT ...] )`](#ABAP_VARIANT_4@1@)

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `INSERT` inserts one or more rows into the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) specified in `target`. The rows to be inserted are taken from a work area [`wa`](ABAPINSERT_SOURCE.html), an internal table [`itab`](ABAPINSERT_SOURCE.html), or the result set of an embedded subquery [`SELECT subquery_clauses`](ABAPINSERT_SOURCE.html). Behind the addition [`OPTIONS`](ABAPIUMD_CONN.html), ABAP-specific additions can be specified:

If `VALUES` is used, `INTO` must be specified between `INSERT` and [`target`](ABAPIUMD_TARGET.html). If `FROM` is used, `INTO` must not be specified. If `OPTIONS` is not used, `CONNECTION` can also be specified behind `target`.

The statement `INSERT` sets the values of the system fields `sy-subrc` (see below) and `sy-dbcnt`. `sy-dbcnt` is set to the number of rows that are inserted. If an overflow occurs because the number of rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1. If `sy-subrc` is 2 when inserting a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) with a component for [writer streams](ABENWRITER_STREAM_GLOSRY.html), `sy-dbcnt` is also set to -1 (meaning undefined).

These two variants insert a single row contained in a work area [`wa`](ABAPINSERT_SOURCE.html). Both variants have the same behavior and only their syntax is different.

These variants of the statement `INSERT` set the value of the system field `sy-subrc` as follows:

Insertion of two individual rows into a CDS table entity.

A [host expression](ABENHOST_EXPRESSION_GLOSRY.html) with the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can be used instead of an explicit work area.

This variant inserts the rows contained in an internal table [`itab`](ABAPINSERT_SOURCE.html).

There is no syntax variant with `VALUES` for internal tables.

This variant of the statement `INSERT` can raise exceptions if an attempt is made to insert rows from the internal table for which there are already rows with the same key in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). If no exception is raised, the value of the system field `sy-subrc` is set as follows:

For more information about exceptions when inserting rows from internal tables, see [`TABLE itab`](ABAPINSERT_SOURCE.html).

Insertion of two individual rows into a CDS table entity.

A [host expression](ABENHOST_EXPRESSION_GLOSRY.html) with the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) can be used instead of an explicit internal table.

This variant inserts the rows of the [result set](ABAPINSERT_FROM_SELECT.html) of an embedded [subquery](ABENSUBQUERY_GLOSRY.html)\\ [`SELECT subquery_clauses`](ABAPINSERT_SOURCE.html), where multiple result sets can be joined with [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html).

This variant of the statement `INSERT` sets the value of the system field `sy-subrc` as follows:

Insertion of all rows of the CDS table entity `DEMO_CDS_JOIN1_TE` into the table `DEMO_CDS_JOIN3_TE`.

-   The addition `PRIVILEGED ACCESS` disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).

-   The inserted rows are included permanently in the table in the next [database commit](ABENDATABASE_COMMIT_GLOSRY.html). Until then, they can still be removed by a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). The current [isolation level](ABENDB_ISOLATION.html) defines whether the inserted data can be read into other [database LUWs](ABENDATABASE_LUW_GLOSRY.html) before or only after the database commit.
-   The number of rows that can be inserted into the tables of a database within a [database LUW](ABENDATABASE_LUW_GLOSRY.html) is limited on a database-dependent level, since a database system can only manage a limited amount of locks and data in the rollback area.
-   Once rows have been inserted into a [global temporary table](ABENDDIC_DATABASE_TABLES_GTT.html), this table must be emptied again explicitly before the next implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) using the ABAP SQL statement [`DELETE FROM`](ABAPDELETE_DBTAB.html) without `WHERE` or using an explicit [database commit](ABENDB_COMMIT.html) or [database rollback](ABENDB_ROLLBACK.html), otherwise the runtime error `COMMIT_GTT_ERROR` is produced.
-   The statement `INSERT` sets a [database lock](ABENDATABASE_LOCK_GLOSRY.html) as an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) until the next database commit or rollback.

-   The statement `INSERT` with subquery cannot be used if [logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) is enabled for the table to be filled.
-   If a row cannot be inserted when the result set of the embedded subquery was inserted, since a row with the same primary key or the same unique secondary index already exists, a catchable exception of the class `CX_SY_OPEN_SQL_DB` is always raised and the system field `sy-subrc` is not set.

DELETE FROM demo\_cds\_table\_entity. \\n\\ \\nDATA wa TYPE demo\_cds\_table\_entity. \\n\\ \\nwa = VALUE #( key\_field = 1 char\_field\_not\_null = 'A' ). \\nINSERT INTO demo\_cds\_table\_entity VALUES @wa. \\n\\ \\nwa = VALUE #( key\_field = 2 char\_field\_not\_null = 'B' ). \\nINSERT demo\_cds\_table\_entity FROM @wa. DELETE FROM demo\_cds\_table\_entity. \\n\\ \\nINSERT INTO demo\_cds\_table\_entity VALUES @( VALUE #( \\n key\_field = 1 char\_field\_not\_null = 'A' ) ). \\n\\ \\nINSERT demo\_cds\_table\_entity FROM @( VALUE #( \\n key\_field = 1 char\_field\_not\_null = 'A' ) ). DELETE FROM demo\_cds\_table\_entity. \\n\\ \\nDATA itab TYPE TABLE OF demo\_cds\_table\_entity. \\n\\ \\nitab = VALUE #( ( key\_field = 1 char\_field\_not\_null = 'A' ) \\n ( key\_field = 2 char\_field\_not\_null = 'B' ) ). \\nINSERT demo\_cds\_table\_entity FROM TABLE @itab. DELETE FROM demo\_cds\_table\_entity. \\n\\ \\nINSERT demo\_cds\_table\_entity \\n FROM TABLE @( VALUE #( \\n ( key\_field = 1 char\_field\_not\_null = 'A' ) \\n ( key\_field = 12 char\_field\_not\_null = 'B' ) ) ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_cds\_join1\_te. \\nINSERT demo\_cds\_join1\_te \\n FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' c = 'c1' d = 'd1' ) \\n ( a = 'a2' b = 'b2' c = 'c2' d = 'd2' ) \\n ( a = 'a3' b = 'b3' c = 'd3' d = 'd3' ) ) ). \\n\\ \\nDELETE FROM demo\_cds\_join3\_te. \\nINSERT demo\_cds\_join3\_te FROM ( SELECT \* FROM demo\_cds\_join1\_te ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_join3\_te \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** `**sy-subrc**` **Meaning** `**sy-subrc**` **Meaning** 0 The row specified in the work area in [`wa`](ABAPINSERT_SOURCE.html) was inserted. 2 When a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) was specified with a component for [writer streams](ABENWRITER_STREAM_GLOSRY.html), the non-LOB handle components were not yet written to the database, and are passed, at the latest, when the stream is closed instead. Whether this situation occurs or not depends on the database. See [LOB handles](ABENIUM_LOB.html). 4 The row specified in the work area in [`wa`](ABAPINSERT_SOURCE.html) was not inserted, since a row with the same [primary key](ABENPRIMARY_KEY_GLOSRY.html) or a unique [secondary index](ABENSECONDARY_INDEX_GLOSRY.html) already exists in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). 0 All rows of the internal table [`itab`](ABAPINSERT_SOURCE.html) were inserted or the internal table is empty. 4 The addition [`ACCEPTING DUPLICATE KEYS`](ABAPINSERT_SOURCE.html) is specified and not all rows of the internal table were inserted, since a row with the same [primary key](ABENPRIMARY_KEY_GLOSRY.html) or a unique [secondary index](ABENSECONDARY_INDEX_GLOSRY.html) already exists in the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html). 0 All rows of the result set of the embedded subquery were inserted. 4 The result set of the embedded subquery is empty and no rows were inserted. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html