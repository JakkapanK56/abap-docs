---
title: "ABENABAP_SQL_DB_HINTS"
description: |
  ABENABAP_SQL_DB_HINTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_DB_HINTS.htm"
abapFile: "ABENABAP_SQL_DB_HINTS.html"
keywords: ["select", "update", "delete", "do", "if", "data", "internal-table", "ABENABAP", "SQL", "HINTS"]
---

\\ `... %_HINTS db @dbhint1             [db @dbhint2              ... ]  ...`

The addition `%_HINTS` can be used to specify [database hints](ABENDATABASE_HINT_GLOSRY.html) at the following positions in ABAP SQL statements:

One or more database hints can be specified after `%_HINTS` as a blank-separated list in flat, character-like [literals](ABENABAP_SQL_LITERALS.html) or [host variables](ABENABAP_SQL_HOST_VARIABLES.html)\\ `dbhint1`, `dbhint2`, .... The addition `db` must be used in front of each database hint to specify the database system for which the hint is intended. The following table shows the possible additions and the associated database system:

A database system can be specified more than once if there are multiple database hints for this system. The possible database hints are database-specific and may depend on the release of the database system.

An empty hint is ignored. Database hints are considered by the respective database system. If the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) is used for accessing the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) or an internal table with [`FROM @itab`](ABAPSELECT_ITAB.html), only the database hints listed behind `ABAP` are evaluated.

Specification of a [HANA-specific database hint](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f) for the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

-   After the [main query](ABENMAINQUERY_GLOSRY.html) or [subquery](ABENSUBQUERY_GLOSRY.html) clauses of `SELECT` statements.
-   After the `WHERE` condition of the statements [`UPDATE`](ABAPUPDATE.html) and [`DELETE`](ABAPDELETE_DBTAB.html).

-   The database hints for the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) are listed under [ABAP SQL In-Memory Engine, Database Hints](ABENSQL_ENGINE_DBHINTS.html).
-   The database hints for [database systems](ABENDATABASE_SYSTEM_GLOSRY.html) can be found in the documentation of the respective database system.

-   A database hint usually only affects the part of an ABAP SQL statement for which is it specified. It does not usually affect the way a statement works, but may affect performance.
-   Database hints should only be used with extreme caution. For example, they can be used as a last resort to affect the optimizer of the database system when selecting a secondary index.
-   If database hints are used, they should generally be checked every time the database release or system configuration is changed.
-   Database hints of the [database interface](ABENDATABASE_INTERFACE_GLOSRY.html) are intended for internal use only. These are noted between `&` characters and are evaluated by the database interface before they are transferred to the database system.
-   Database hints specified as literals are also not evaluated until runtime. If the syntax is incorrect, they can cause exceptions at runtime or are ignored. In the [strict mode as of ABAP release 7.65](ABENABAP_SQL_STRICTMODE_765.html) only, statically known database hints are also checked statically.
-   In the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05, the escape character `@` must be specified in front of a hint that is not specified as a literal.

SELECT \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n %\_HINTS HDB 'INDEX\_SEARCH' \\n INTO TABLE @FINAL(result). **Addition `db`** **Database System**\\ `ABAP` [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html)\\ `ADABAS` SAP MaxDB `AS400` IBM System i (AS/400) `DB2` IBM DB2 `DB6` IBM DB2 UDB `HDB` SAP HANA database `MSSQLNT` Microsoft SQL Server `ORACLE` Oracle DB `SYBASE` Sybase ASE abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html