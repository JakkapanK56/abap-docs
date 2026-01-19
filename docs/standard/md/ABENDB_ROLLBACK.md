---
title: "ABENDB_ROLLBACK"
description: |
  ABENDB_ROLLBACK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_ROLLBACK.htm"
abapFile: "ABENDB_ROLLBACK.html"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "types", "ABENDB", "ROLLBACK"]
---

Database rollbacks are triggered implicitly or explicitly in [AS ABAP](ABENAS_ABAP_GLOSRY.html).

A database rollback closes all opened [database cursors](ABENDATABASE_CURSOR_GLOSRY.html). It is particularly important that database rollbacks are not triggered in [`SELECT`](ABAPSELECT.html) loops and after the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) using one of the options listed here.

The following exceptions trigger an implicit database rollback:

The implicit database rollback takes place on all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html).

Explicit database rollbacks in ABAP programs can be triggered in the following ways:

`ROLLBACK` statements are not allowed in [AMDP](ABENAMDP_METHOD_GLOSRY.html) methods.

When a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) or a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) is closed explicitly in Native SQL, a database rollback is triggered in the transaction context of this [database connection](ABENDATABASE_CONNECTION_GLOSRY.html). For more information, see [Database Connections](ABENDB_CONNECTIONS.html).

-   A [runtime error](ABENRUNTIME_ERROR_GLOSRY.html).
-   A [termination message](ABENTERMINATION_MESSAGE_GLOSRY.html) is sent.
-   A program is terminated by sending a respective [message](ABENMESSAGE_GLOSRY.html).

-   A termination message also produces a database rollback if the message is handled by the predefined exception [`error_message`](ABAPCALL_FUNCTION_PARAMETER.html) during the call of a function module.
-   Termination and [exit messages](ABENEXIT_MESSAGE_GLOSRY.html) always terminate the program. Other message types can also terminate a program in certain [contexts](ABENOBJ_CONTEXT_GLOSRY.html).
-   When an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is exited, there is no implicit [database commit](ABENDB_COMMIT.html) on the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) and there is no database rollback. This must be programmed explicitly if required.

-   The corresponding database-specific [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statement is used.

-   In [ADBC](ABENADBC_GLOSRY.html), only the method [`ROLLBACK`](ABENADBC_TRANSACTION.html) of the interface [`IF_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html) can be used to do this. In other cases, the database interface does not recognize the end of the transaction and might not be able to perform any necessary actions.
-   Any `ROLLBACK` statement embedded statically between [`EXEC`](ABAPEXEC.html) and [`ENDEXEC`](ABAPENDEXEC.html) is detected by the database interface and any required actions performed.

-   Executing the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html). The database rollback takes place on the specified [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).
-   Calling the function module `DB_ROLLBACK`. This function module encapsulates the corresponding Native SQL statement. By default, the database rollback is triggered on the [connection](ABAPEXEC_CONNECTION.html) currently open for [`EXEC SQL`](ABAPEXEC.html). The rollback is triggered explicitly on the standard connection by passing the value of `abap_true` to the input parameter `IV_DEFAULT`. The function module `DB_ROLLBACK` raises the event `DB_TRANSACTION_FINISHED` of the class `CL_DBI_TRANSACTION_STATE`, which is handled by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b) framework.
-   Executing the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`ROLLBACK WORK`](ABAPROLLBACK.html). The database rollback takes place on all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html). The statement `ROLLBACK WORK` also closes the current [SAP LUW](ABENSAP_LUW.html) and performs the associated actions.

-   For a simple database rollback in an ABAP program the statement [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) is usually sufficient. The standard connection can be specified here using `default`. If the database LUW is to be monitored by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b), the function module `DB_ROLLBACK` can be used. The statement [`ROLLBACK WORK`](ABAPROLLBACK.html) should not be used for the sole purpose of a database rollback itself but only for rolling back a complete [SAP LUW](ABENSAP_LUW_GLOSRY.html).
-   Generally, the use of the statement [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) with the addition `default` is recommended for an explicit database rollback in an ABAP program.
-   All the methods specified here for explicit database rollbacks empty any [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) and prevent the runtime error `COMMIT_GTT_ERROR` in the case of implicit [database commits](ABENDB_COMMIT.html).

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abendb\_transaction.html