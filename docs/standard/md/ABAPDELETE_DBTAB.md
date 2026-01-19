---
title: "ABAPDELETE_DBTAB"
description: |
  ABAPDELETE_DBTAB - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_DBTAB.htm"
abapFile: "ABAPDELETE_DBTAB.html"
keywords: ["update", "delete", "do", "if", "data", "internal-table", "ABAPDELETE", "DBTAB"]
---

[Short Reference](ABAPDELETE_DBTAB_SHORTREF.html)

``DELETE \{ FROM [`target`](ABAPIUMD_TARGET.html)\ [[`WHERE sql_cond`](ABAPDELETE_WHERE.html)]\ [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)]\                       [`[ORDER BY ... [OFFSET o]]\ [UP TO n ROWS`](ABAPDELETE_WHERE.html)]``\\ \\}\\ 
     ``|\ \{\ [`target`](ABAPIUMD_TARGET.html) FROM [`source`](ABAPDELETE_SOURCE.html)\ \}\         [[`OPTIONS`](ABAPIUMD_OPTIONS.html)]\           [[`PRIVILEGED ACCESS`](ABAPIUMD_PRIV.html)]\           [[`CONNECTION ...`](ABAPIUMD_CONN.html)].``

[1. `DELETE FROM target ...`](#ABAP_VARIANT_1@1@)

[2. `DELETE target FROM source ...`](#ABAP_VARIANT_2@1@)

The [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement `DELETE` deletes one or more rows from the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) specified in `target`. The rows to be deleted can be specified as follows:

Behind the addition [`OPTIONS`](ABAPIUMD_CONN.html), ABAP-specific additions can be specified:

If `OPTIONS` is not used, `CONNECTION` can also be specified behind `target`.

The statement `DELETE` sets the values of the system fields `sy-subrc` and `sy-dbcnt`.

The statement `DELETE` sets `sy-dbcnt` to the number of deleted rows. If an overflow occurs because the number of rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1.

In the variant `DELETE FROM target`, either all rows are deleted or the rows to be deleted are restricted using a [`WHERE` condition](ABAPDELETE_WHERE.html) or additions [`ORDER BY`](ABAPDELETE_WHERE.html), [`OFFSET`](ABAPDELETE_WHERE.html), and [`UP TO`](ABAPDELETE_WHERE.html).

Deletion of a row in a CDS table entity. The row is specified using a `WHERE` condition.

In the variant `DELETE target FROM`, either a row specified by a [work area](ABAPDELETE_SOURCE.html) is deleted or multiple rows specified by an [internal table](ABAPDELETE_SOURCE.html) are deleted.

Deletion of a row in a CDS table entity. The row is specified using a work area.

-   In a variant `DELETE FROM target` using [conditions](ABAPDELETE_WHERE.html)
-   In a variant `DELETE target FROM` using data objects in [`source`](ABAPDELETE_SOURCE.html)

-   The addition [`PRIVILEGED ACCESS`](ABAPIUMD_PRIV.html) disables [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html).
-   The addition [`CONNECTION`](ABAPIUMD_CONN.html) can be used to specify a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) or a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html).

-   The rows are deleted permanently from the [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) in the next [database commit](ABENDATABASE_COMMIT_GLOSRY.html). Until that point, they can still be undone using a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). The current [isolation level](ABENDB_ISOLATION.html) defines whether the deleted data can no longer be read into other [database LUWs](ABENDATABASE_LUW_GLOSRY.html) before or only after the database commit.
-   The number of rows that can be deleted from the tables of a database within a [database LUW](ABENDATABASE_LUW_GLOSRY.html) is limited, since a database system can only manage a limited amount of locks and data in the rollback area.
-   The statement `DELETE FROM writable_obj` has the statement [`DELETE FROM itab`](ABAPDELETE_ITAB_LINES.html) with identical syntax. If an internal table has the same name as a [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html), a statement like this accesses the internal table.
-   The statement `DELETE` sets a [database lock](ABENDATABASE_LOCK_GLOSRY.html) as an [exclusive lock](ABENEXCLUSIVE_LOCK_GLOSRY.html) until the next database commit or rollback.
-   If used incorrectly, the latter can produce a [deadlock](ABENDEADLOCK_GLOSRY.html).

DELETE FROM demo\_cds\_update\_te WHERE id = 'X'. DELETE demo\_cds\_update\_te FROM @( VALUE #( id = 'X' ) ). `**sy-subrc**` **Meaning** 0 In the variant `DELETE FROM target`, at least one row was deleted if a `WHERE` condition was specified and all or `n` rows were deleted if no condition was specified. In the variant `DELETE target FROM`, the specified row was deleted if a work area was specified in `source` and all specified rows were deleted if an internal table was specified in `source` or the internal table is empty. 4 In the variant `DELETE FROM target`, no row was deleted if a `WHERE` condition was specified or no row was deleted if no condition was specified, since the database table was already empty. In the variant `DELETE target FROM`, no row was deleted if a work area was specified in `source` or not all specified rows were deleted if an internal table was specified in `source`. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_writing.html