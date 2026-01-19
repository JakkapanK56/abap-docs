---
title: "ABENDDIC_DATABASE_TABLES_GTT"
description: |
  ABENDDIC_DATABASE_TABLES_GTT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_GTT.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_GTT.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "ABENDDIC", "DATABASE", "TABLES", "GTT"]
---

Global temporary tables (GTTs) are a special kind of [transparent tables](ABENTRANSPARENT_TABLE_GLOSRY.html) intended for storing temporary data. This data exists only within a [database LUW](ABENDATABASE_LUW_GLOSRY.html) and can be accessed only by a consumer. GTTs are used to store temporary interim results to split complicated database processes into multiple steps. GTTs are designed for this purpose only and hence incur far lower administration costs than regular transparent tables.

The GTT concept specifies that a GTT is always empty at the start of a database LUW and hence always must be cleared at the end of each database LUW. Most database systems provide native support for this concept by implicitly defining data in a GTT database table as transaction-specific data. This data is deleted automatically at the end of a database LUW, that means, during a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html).

In ABAP Dictionary, the [table category](ABENDDIC_DATABASE_TABLES_TAB_CAT.html)\\ *global temporary table* can be specified for a DDIC database table. Tables in this category are created as a GTT in the database. The following additional rules apply in [ABAP SQL](ABENABAP_SQL_GLOSRY.html) access to GTTs to avoid platform-dependent behavior and unexpected responses when handling GTTs:

Besides these rules, GTTs can be used like regular transparent tables. Regarding their definition in ABAP Dictionary, the following settings are predefined and cannot be modified:

The number of [key fields](ABENDDIC_DATABASE_TABLES_KEY.html) of a GTT is limited to 15.

-   If an ABAP Dictionary GTT was filled by a modifying ABAP SQL statement, it must be cleared explicitly before the end of the current [database LUW](ABENDATABASE_LUW_GLOSRY.html). The following can be used here:

-   The ABAP SQL statement [`DELETE FROM dbtab`](ABAPDELETE_DBTAB.html) without specifying a `WHERE` condition.
-   All explicit [database commits](ABENDB_COMMIT.html) and [database rollbacks](ABENDB_ROLLBACK.html), such as the ABAP SQL statements [`COMMIT WORK`](ABAPCOMMIT.html), [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html), [`ROLLBACK WORK`](ABAPROLLBACK.html), [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html)

-   If an ABAP Dictionary GTT filled using ABAP SQL was not cleared explicitly using one of these methods before an [implicit database commit](ABENDB_COMMIT.html), the runtime error `COMMIT_GTT_ERROR` occurs independently of its content.

-   The [data type](ABENDDIC_DATABASE_TABLES_DAT_TYPE.html) and [size category](ABENDDIC_DATABASE_TABLES_SIZ_CAT.html) are irrelevant and undefined.
-   [Table buffering](ABENDDIC_DATABASE_TABLES_BUFFER.html) is not allowed.
-   [Logging](ABENDDIC_DATABASE_TABLES_PROTOCOL.html) is disabled.
-   The [storage type](ABENDDIC_DATABASE_TABLES_STORAGE.html) is row store.
-   The [delivery class](ABENDDIC_DATABASE_TABLES_DELIVERY.html) is L.
-   No replacement objects can be defined.

-   Only the variant [`DELETE FROM dbtab`](ABAPDELETE_DBTAB.html) without a `WHERE` condition specified prevents the runtime error `COMMIT_GTT_ERROR`. Other variants of the `DELETE` statement do not prevent the runtime error, even if they clear the entire table.
-   It is advisable to only use [ABAP SQL](ABENABAP_SQL_GLOSRY.html) to access ABAP Dictionary GTTs.
-   [`INSERT`](ABAPINSERT_DBTAB.html) statements with a [subquery](ABENSUBQUERY_GLOSRY.html) after [`FROM`](ABAPINSERT_SOURCE.html) are particularly well suited for filling GTTs, since the operation is then performed only on the database and no data transports are required between the database and the AS ABAP.
-   If the data of a GTT is only required for the time span of a database access, [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) might be an alternative option.
-   When accessed using ABAP SQL, explicit clears of ABAP Dictionary GTTs are enforced before implicit database commits for the following reasons:

-   It prevents errors caused by any platform dependencies. It cannot be guaranteed that every database platform deletes the data of a GTT in an implicit database commit. This is guaranteed, however, when the GTT is cleared explicitly.

-   [Union with Global Temporary Table](ABENSELECT_UNION_SUM_GTT_ABEXA.html)

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html