---
title: "ABAPUPDATE"
description: |
  ABAPUPDATE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPUPDATE.htm"
abapFile: "ABAPUPDATE.html"
keywords: ["insert", "update", "delete", "do", "if", "data", "internal-table", "ABAPUPDATE"]
---

``UPDATE [`target`](ABAPIUMD_TARGET.html)\ [`source`](ABAPUPDATE_SOURCE.html)\         [[`OPTIONS`](ABAPIUMD_OPTIONS.html)]\           [`PRIVILEGED ACCESS`]           [[`CONNECTION ...`](ABAPIUMD_CONN.html)].``

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `UPDATE` changes the content of one or more rows of the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) specified in [`target`](ABAPIUMD_TARGET.html). The specifications in [`source`](ABAPUPDATE_SOURCE.html) determine which columns of which rows are changed, and how they are changed.

Behind the addition [`OPTIONS`](ABAPIUMD_CONN.html), ABAP-specific additions can be specified:

If `OPTIONS` is not used, `CONNECTION` can also be specified behind `target`.

The statement `UPDATE` sets the values of the system fields `sy-subrc` and `sy-dbcnt`.

The statement `UPDATE` sets `sy-dbcnt` to the number of changed rows. If an overflow occurs because the number of rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1. If `sy-subrc` is 2, `sy-dbcnt` is also set to the value -1 (for undefined).

The statement `UPDATE` overwrites the content of the columns of a CDS table entity row specified by a key with values from a work area created using the value operator `VALUE`.

-   The addition `PRIVILEGED ACCESS` disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).

-   The changes are committed to the database at the next [database commit](ABENDATABASE_COMMIT_GLOSRY.html). Until that point, they can still be undone using a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). The current [isolation level](ABENDB_ISOLATION.html) defines whether the modified data can no longer be read into other [database LUWs](ABENDATABASE_LUW_GLOSRY.html) before or only after the database commit.
-   The number of rows that can be modified in the tables of a database within a [database LUW](ABENDATABASE_LUW_GLOSRY.html) is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
-   The statement `UPDATE` sets a [database lock](ABENDATABASE_LOCK_GLOSRY.html) as an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) until the next database commit or rollback.

DELETE FROM demo\_cds\_table\_entity. \\nINSERT demo\_cds\_table\_entity FROM @( VALUE #( key\_field = 1 ) ). \\n\\ \\nUPDATE demo\_cds\_table\_entity FROM @( VALUE #( key\_field = 1 \\n char\_field\_not\_null = 'A' \\n char\_field\_null = 'B' \\n numc\_field = '123' \\n string\_field = 'abc' ) ). `**sy-subrc**` **Meaning** 0 When `SET` was specified in `source`, at least one row was changed. When a work area was specified in `source`, the specified row was changed. When an internal table was specified in `source`, all specified rows were changed, or the internal table is empty. 2 If a [LOB handle](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) structure with a component for [writer streams](ABENWRITER_STREAM_GLOSRY.html) or a reference variable for writer streams was specified after `SET`, the components that are not linked with writer streams were not yet written to the database, and instead are passed when the stream is closed at latest. Whether this situation occurs or not depends on the database system. See [LOB handles](ABENIUM_LOB.html). 4 When `SET` or a work area was specified in `source`, no row was changed; or when an internal table was specified in `source`, not all specified rows were changed. This is either because no suitable row was found, or because the change would create a row that would lead to duplicate entries in the [primary key](ABENPRIMARY_KEY_GLOSRY.html) or a unique [secondary index](ABENSECONDARY_INDEX_GLOSRY.html) in the database table. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html