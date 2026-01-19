---
title: "ABAPMODIFY_DBTAB"
description: |
  ABAPMODIFY_DBTAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_DBTAB.htm"
abapFile: "ABAPMODIFY_DBTAB.html"
keywords: ["insert", "update", "delete", "do", "if", "data", "internal-table", "ABAPMODIFY", "DBTAB"]
---

[Short Reference](ABAPMODIFY_DBTAB_SHORTREF.html)

``MODIFY [`target`](ABAPIUMD_TARGET.html) FROM [`source`](ABAPMODIFY_SOURCE.html)\         [[`OPTIONS`](ABAPIUMD_OPTIONS.html)]\           [[`PRIVILEGED ACCESS`](ABAPIUMD_PRIV.html)]\           [[`CONNECTION ...`](ABAPIUMD_CONN.html)].``

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `MODIFY` inserts one or more rows specified in `source` into the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) specified in `target`, or overwrites existing rows.

Behind the addition [`OPTIONS`](ABAPIUMD_CONN.html), ABAP-specific additions can be specified:

If `OPTIONS` is not used, `CONNECTION` can also be specified behind `target`.

The statement `MODIFY` sets the values of the system fields `sy-subrc` and `sy-dbcnt`.

The statement `MODIFY` sets `sy-dbcnt` to the number of processed rows. If an overflow occurs because the number of rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1. If `sy-subrc` is 2, `sy-dbcnt` is also set to the value -1 (for undefined).

The first `MODIFY` statement inserts a row into an empty table. The second `MODIFY` statement modifies the values of the non-key fields of this row and inserts two additional rows.

-   The addition [`PRIVILEGED ACCESS`](ABAPIUMD_PRIV.html) disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   The addition [`CONNECTION`](ABAPIUMD_CONN.html) can be used to specify a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) or a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html).

-   The changes are finally applied to the database at the next [database commit](ABENDATABASE_COMMIT_GLOSRY.html). Until that point, they can still be undone using a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). The current [isolation level](ABENDB_ISOLATION.html) defines whether the modified data can no longer be read into other [database LUWs](ABENDATABASE_LUW_GLOSRY.html) before or only after the database commit.
-   The number of rows that can be inserted or modified in the tables of a database within a [database LUW](ABENDATABASE_LUW_GLOSRY.html) is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
-   Once rows have been inserted into a [global temporary table](ABENDDIC_DATABASE_TABLES_GTT.html), this table must be emptied again explicitly before the next implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) using the ABAP SQL statement [`DELETE FROM`](ABAPDELETE_DBTAB.html) without `WHERE` or using an explicit [database commit](ABENDB_COMMIT.html) or [database rollback](ABENDB_ROLLBACK.html). If not, the runtime error `COMMIT_GTT_ERROR` is produced.
-   The statement `MODIFY writable_obj FROM wa` has the statement [`MODIFY itab FROM wa`](ABAPMODIFY_ITAB_SINGLE.html) with identical syntax. If an internal table has the same name as a [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html), a statement like this accesses the internal table.
-   The statement `MODIFY` sets a [database lock](ABENDATABASE_LOCK_GLOSRY.html) as an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) until the next database commit or rollback.
-   If used incorrectly, setting the lock can produce a [deadlock](ABENDEADLOCK_GLOSRY.html).

DELETE FROM demo\_update. \\n\\ \\nMODIFY demo\_update FROM @( \\n VALUE #( id = 'X' col1 = 10 col2 = 20 col3 = 30 col4 = 40 ) ). \\n\\ \\nMODIFY demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 ) \\n ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ). `**sy-subrc**` **Meaning** 0 When a work area was specified in `source`, the specified row was inserted or modified. When an internal table was specified in `source`, all specified rows were inserted or modified, or the internal table is empty. 2 When a [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) was specified with a component for [writer streams](ABENWRITER_STREAM_GLOSRY.html), the non-LOB handle components were not yet written to the database, and instead are passed when the stream is closed at the latest. Whether this situation occurs or not depends on the database. See [LOB handles](ABENIUM_LOB.html). 4 When a work area or a subquery was specified in `source`, no rows were processed, or when an internal table was specified in `source`, not all specified rows were processed because there is already a row with the same unique [secondary index](ABENSECONDARY_INDEX_GLOSRY.html) in the database table. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html