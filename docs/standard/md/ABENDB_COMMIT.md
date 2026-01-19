---
title: "ABENDB_COMMIT"
description: |
  ABENDB_COMMIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_COMMIT.htm"
abapFile: "ABENDB_COMMIT.html"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "case", "method", "class", "data", "ABENDB", "COMMIT"]
---

In [AS ABAP](ABENAS_ABAP_GLOSRY.html), database commits are triggered either implicitly or explicitly.

A database commit closes all opened [database cursors](ABENDATABASE_CURSOR_GLOSRY.html). In particular, in [`SELECT`](ABAPSELECT.html) loops and after the statement [`OPEN CURSOR`](ABAPOPEN_CURSOR.html), database commits should not be triggered by mistake in one of the ways listed here.

The implicit database commits in an AS ABAP are caused by the fact that an [AS ABAP](ABENAS_ABAP_GLOSRY.html) uses its own [work processes](ABENWORK_PROCESS_GLOSRY.html) to log on to the database system. A work process can only ever execute a single [database LUW](ABENDATABASE_LUW_GLOSRY.html) but cannot interfere with the database LUWs belonging to other work processes. Since an ABAP program can be executed by different work processes during its runtime, the database LUW for the current work process must be completed for every action that can lead to a change of work process. As a result, a database commit is performed implicitly in the following situation:

The implicit database commit takes place on all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html) of the current work process. The situations above cause a work process to be switched while a program is running, but it is also possible for entire programs to be executed in a different work process, such as when a program is called in a background work process in [background processing](ABENBACKROUND_PROCESSING_GLOSRY.html). Here, a database commit is also made when the work process is switched.

Database commits can be triggered explicitly in ABAP programs in the following ways:

`COMMIT` statements are not allowed in [AMDP](ABENAMDP_METHOD_GLOSRY.html) methods.

Implicit deactivations of a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) or a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) at the end of an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) trigger a database commit in the transaction context of this [database connection](ABENDATABASE_CONNECTION_GLOSRY.html). For more information, see [Database Connections](ABENDB_CONNECTIONS.html).

If the internal session is switched on the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html), there is no database commit and no [database rollback](ABENDB_ROLLBACK.html).

-   Completion of a [dialog step](ABENDIALOG_STEP_GLOSRY.html)
-   The program waits for a user action and does not occupy a work process during this time. The next free work process is assigned to the program in the next dialog step.
-   Calling a function module in a [synchronous](ABENSYNCHRONOUS_RFC_GLOSRY.html) or [asynchronous remote function call](ABENASYNCHRONOUS_RFC_GLOSRY.html)
-   The current work process passes control to a different work process or system. An exception to this are [updates](ABENUPDATE_GLOSRY.html). During updates, [sRFC](ABENSRFC_GLOSRY.html) and [aRFC](ABENSRFC_GLOSRY.html) do not cause work processes to be switched or database commits to be executed.
-   Completion of a function module called in a separate work process using a synchronous remote function call.
-   Usually, a new work process is assigned to the calling program. If a new [sRFC](ABENSRFC_GLOSRY.html) follows quickly enough, and enough free work processes exist, the work process sRFC continues to be used, but an implicit database commit is performed regardless.
-   Use of the statement [`RECEIVE`](ABAPRECEIVE.html) in a callback routine specified in an asynchronous RFC
-   To receive data from another AS instance, the current work process must be interrupted before the callback routine is executed. A database commit is performed, except during the update.
-   HTTP/HTTPS/SMTP communication executed using the [Internet Communication Framework](ABENINTERNET_CON_FRA_GLOSRY.html)
-   A database commit is executed before each response is sent in an ICF server program or ICF client program. An exception to this are updates. This behavior is independent of whether the communication is stateless or stateful.
-   Receiving messages from [ABAP messaging channels](ABENABAP_MESSAGING_CHANNELS_GLOSRY.html)
-   A database commit is executed while the methods `START_MESSAGE_DELIVERY` and `STOP_MESSAGE_DELIVERY` of a consumer object are executed.
-   Execution of WebSocket or TCP communication using ABAP Push Channels
-   Each time a message is sent, and each time [APC processing](ABENAPC_PROCESSING_GLOSRY.html) is exited, a database commit is executed. An exception to this are [updates](ABENUPDATE_GLOSRY.html). More specifically, the methods `BIND_AMC_MESSAGE_CONSUMER` and `UNBIND_AMC_MESSAGE_CONSUMER` for binding an ABAP messaging channel produce a database commit.
-   Current work process interrupted using the statement [`WAIT UP TO`](ABAPWAIT_UP_TO.html), [`WAIT FOR ASYNCHRONOUS TASKS`](ABAPWAIT_ARFC.html), or [`WAIT FOR MESSAGING CHANNELS`](ABAPWAIT_AMC.html).
-   After the interruption, the program is assigned the next free work process. An exception to this are updates.
-   Sending [error messages](ABENERROR_MESSAGE_GLOSRY.html), [information messages](ABENINFORMATION_MESSAGE_GLOSRY.html), and [warnings](ABENWARNING_GLOSRY.html).
-   These messages interrupt the current dialog step (see above).

-   When an [internal session](ABENINTERNAL_SESSION_GLOSRY.html) is exited, there is no implicit database commit on the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) and no [database rollback](ABENDB_ROLLBACK.html). This must be programmed explicitly if required.
-   If a [global temporary table](ABENDDIC_DATABASE_TABLES_GTT.html) filled using ABAP SQL statements is not emptied by an explicit database commit or database rollback in the case of implicit database commits or by the statement [`DELETE FROM`](ABAPDELETE_DBTAB.html) without `WHERE` condition, the runtime error `COMMIT_GTT_ERROR` occurs.

-   The relevant database-specific [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statement is used.

-   In [ADBC](ABENADBC_GLOSRY.html), only the method [`COMMIT`](ABENADBC_TRANSACTION.html) of the interface [`IF_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html) can be used to do this. In other cases, the database interface does not detect the end of the transaction and might not be able to perform certain actions.
-   Any `COMMIT` statement embedded statically between [`EXEC`](ABAPEXEC.html) and [`ENDEXEC`](ABAPENDEXEC.html) is detected by the database interface and any required actions performed.

-   Executing the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html). The database commit takes place on the specified [database connection](ABENDATABASE_CONNECTION_GLOSRY.html).
-   Calling the function module `DB_COMMIT`. This function module encapsulates the corresponding Native SQL statement. By default, the database commit is triggered on the [connection](ABAPEXEC_CONNECTION.html) currently open for [`EXEC SQL`](ABAPEXEC.html). The commit is triggered explicitly on the standard connection by passing the value of `abap_true` to the input parameter `IV_DEFAULT`. The function module `DB_COMMIT` raises the event `DB_TRANSACTION_FINISHED` of the class `CL_DBI_TRANSACTION_STATE`, which is handled by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b) framework.
-   Executing the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement [`COMMIT WORK`](ABAPCOMMIT.html). The database commit takes place on all currently open [database connections](ABENDATABASE_CONNECTION_GLOSRY.html). The statement `COMMIT WORK` also closes the current [SAP LUW](ABENSAP_LUW.html) and performs the associated actions.

-   A simple database commit in an ABAP program is generally done using the statement [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html), where the standard connection can be specified using `default`. The database LUW can be monitored by the [application log](https://help.sap.com/docs/ABAP_PLATFORM_NEW/addb96cd90c945dfb3182865363bbc47/4e21012c35d44180e10000000a15822b) by using the function module `DB_COMMIT`, if required. Apart from the database commit itself, using the statement [`COMMIT WORK`](ABAPCOMMIT.html) also has certain other consequences with respect to the [SAP LUW](ABENSAP_LUW_GLOSRY.html).
-   All methods specified here for explicit database commits empty [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) and prevent the runtime error `COMMIT_GTT_ERROR` in the case of implicit database commits.

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abendb\_transaction.html