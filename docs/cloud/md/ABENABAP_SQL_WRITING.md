---
title: "ABENABAP_SQL_WRITING"
description: |
  ABENABAP_SQL_WRITING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_WRITING.htm"
abapFile: "ABENABAP_SQL_WRITING.html"
keywords: ["select", "insert", "update", "delete", "loop", "if", "case", "data", "internal-table", "ABENABAP", "SQL", "WRITING"]
---

Write accesses include inserting, modifying, and deleting content in [writable database objects](ABENWRITABLE_DB_OBJ_GLOSRY.html), such as [CDS table entities](ABENCDS_TABLE_ENTITY_GLOSRY.html), [writable CDS view entities](ABENWRITABLE_V2_GLOSRY.html), or [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html). All write accesses can be made as individual accesses or as bulk access. If multiple rows of a [writable database object](ABENWRITABLE_DB_OBJ_GLOSRY.html) are to be changed, bulk access using internal tables generally gives better performance than individual accesses.

The following ABAP SQL statements implement the [DML](ABENDML_GLOSRY.html) part of [SQL](ABENSQL_GLOSRY.html) in the ABAP language:

-   [`INSERT`](ABAPINSERT_DBTAB.html)
-   [`UPDATE`](ABAPUPDATE.html)
-   [`MODIFY`](ABAPMODIFY_DBTAB.html)
-   [`DELETE`](ABAPDELETE_DBTAB.html)

-   In the case of writes, [data consistency](ABENDATA_CONSISTENCY.html) must always be ensured. The [LUW](ABENLUW_GLOSRY.html) concept is designed for this purpose. In application programs of an AS ABAP, the implicit [database LUWs](ABENDATABASE_LUW_GLOSRY.html) are normally not sufficient for consistent data storage. Instead, explicit [SAP LUWs](ABENSAP_LUW_GLOSRY.html) must be programmed, which normally contain multiple database LUWs.
-   Once a [global temporary table](ABENDDIC_DATABASE_TABLES_GTT.html) is filled using ABAP SQL, this table must be emptied again explicitly before the next implicit [database commit](ABENDATABASE_COMMIT_GLOSRY.html) using the ABAP SQL statement [`DELETE FROM`](ABAPDELETE_DBTAB.html) without `WHERE` or using an explicit [database commit](ABENDB_COMMIT.html) or [database rollback](ABENDB_ROLLBACK.html), otherwise the runtime error `COMMIT_GTT_ERROR` is produced.
-   When making writes to a DDIC database table for which a database cursor is opened in a [`SELECT` loop](ABAPSELECT.html), the result set is database-dependent and undefined. This kind of parallel access should therefore be avoided.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html