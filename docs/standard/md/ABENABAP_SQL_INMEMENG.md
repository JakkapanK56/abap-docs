---
title: "ABENABAP_SQL_INMEMENG"
description: |
  ABENABAP_SQL_INMEMENG - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_INMEMENG.htm"
abapFile: "ABENABAP_SQL_INMEMENG.html"
keywords: ["select", "if", "case", "catch", "data", "types", "internal-table", "ABENABAP", "SQL", "INMEMENG"]
---

The [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) is a part of the [ABAP SQL engine](ABENABAP_SQL_ENGINE_GLOSRY.html) for processing [read accesses](ABENABAP_SQL_READING.html) to tabular data in the memory of an [AS ABAP](ABENAS_ABAP_GLOSRY.html) with [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements. The following tabular data can be accessed:

The ABAP SQL in-memory engine produces the same results as if the ABAP SQL statements were processed on the database, for example:

The ABAP SQL in-memory engine supports a large subset of [ABAP SQL](ABENABAP_SQL_GLOSRY.html) but there are some [restrictions](ABENSQL_ENGINE_RESTR.html). If an ABAP SQL statement cannot be processed by the ABAP SQL in-memory engine, the following situations can occur:

If an ABAP SQL statement can be processed by the ABAP SQL in-memory engine, there are no further restrictions for internal tables accessed with [`SELECT ... FROM @itab`](ABAPSELECT_ITAB.html) and database tables with the buffering type [full buffering](ABENBUFFER_COMPLETE_BUFFERING.html). They can be processed on the AS ABAP. For database tables with other [buffering types](ABENBUFFER_TYPE.html), there are further [restrictions](ABENBUFFER_RESTRICTIONS.html) that can cause the buffer to be bypassed and the statement to be processed on the database. In this case, only one internal table can be accessed within the SQL statement.

-   Data from [database tables](ABENDATABASE_TABLE_GLOSRY.html) buffered in the [table buffer](ABENTABLE_BUFFER_GLOSRY.html).
-   [Internal tables](ABENINTERNAL_TABLE_GLOSRY.html) of [internal sessions](ABENINTERNAL_SESSION_GLOSRY.html) accessed with [`SELECT ... FROM @itab`](ABAPSELECT_ITAB.html).

-   [Null values](ABENNULL_VALUE_GLOSRY.html) of database tables stored in able buffer are handled as null values. They are not transformed to type-dependent initial values.
-   [Supported SQL expressions](ABENSQL_ENGINE_EXPR.html) produce the same results as on the database, even for internal tables accessed with [`SELECT ... FROM @itab`](ABAPSELECT_ITAB.html).

-   When accessing buffered database tables in the table buffer, the buffer is bypassed and the ABAP SQL statement is converted to database-specific SQL, passed to the database and used for the actual database tables.
-   When accessing internal tables with [`SELECT ... FROM @itab`](ABAPSELECT_ITAB.html):

-   If only one internal table is accessed in the ABAP SQL statement, the data of the table can be passed to a temporary table in the database before the query is actually executed. Only the columns that are to be accessed are transported. Then the SQL statement is passed to the database and processed there. This option is not supported by all databases. If it is known statically that data is required on the database, a syntax check warning occurs that can be hidden by the pragma `##itab_db_select`.
-   If more than one internal table is accessed in the ABAP SQL statement, their content cannot be passed to the database. The statement cannot be executed and a syntax error or a catchable exception occurs.

-   The above rule about accessing only one internal table in an ABAP SQL statement that is processed on the database currently means that even the same internal table cannot be accessed more than once within one statement. As a workaround, the access to an internal table can be placed in a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) that then can be accessed multiple times in following subqueries.
-   Generally, only one internal table can be accessed together with database tables within one ABAP SQL statement. All multiple accesses are obtained using joins or subqueries which are currently not supported by the ABAP SQL in-memory engine.

-   [ABAP SQL In-Memory Engine, Multiple Internal Tables](ABENABAP_SQL_ENGINE_ABEXA.html)
-   [ABAP SQL In-Memory Engine, Restrictions](ABENABAP_SQL_ENGINE_RESTR_ABEXA.html)
-   [ABAP SQL In-Memory Engine, Restriction to One Internal Table](ABENABAP_SQL_ENGINE_ITAB_ABEXA.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html