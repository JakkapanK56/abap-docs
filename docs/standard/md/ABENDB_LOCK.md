---
title: "ABENDB_LOCK"
description: |
  ABENDB_LOCK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_LOCK.htm"
abapFile: "ABENDB_LOCK.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "method", "data", "types", "ABENDB", "LOCK"]
---

Simultaneous access by multiple transactions to the same dataset requires database locks to manage and synchronize access in each database. The tasks of this mechanism are to:

The following sections are a short discussion of the properties of database locks:

Database systems do not usually provide commands for explicitly setting locks. Database locks are set **implicitly** each time data on the database is accessed. In ABAP, databases are accessed in the following ways:

Database systems set **physical** locks: All rows affected by a database call are locked. In the case of `SELECT`, these are the selected rows, in the case of `UPDATE`, `DELETE`, `INSERT`, and `MODIFY`, these are rows to be changed, deleted, or inserted.

Take the following call, for example:

SELECT SINGLE FOR UPDATE \* FROM sflight \\n  WHERE \\n    carrid   = 'LH'       AND \\n    connid   = '0400'     AND \\n    fldate   = '19960516' \\n  INTO ... .

It locks the entry in the table `SFLIGHT` for Lufthansa flight 0400 on May 16, 1996.

It is not always the table row that is locked. Tables, data pages, and index pages can also be locked, for example. The units locked depend on the database system used and the respective access.

In principle, one type of lock is sufficient to control competing data access. However, to allow a larger number of transactions to run in parallel, database systems use a range of lock types. These can vary from system to system, but the following two examples outline sufficiently how locks work:

Exclusive locks are set by the ABAP SQL statements [`SELECT SINGLE FOR UPDATE`](ABAPSELECT_SINGLE.html), [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html), the corresponding Native SQL statements or platform-dependent statements in [AMDP methods](ABENAMDP_METHOD_GLOSRY.html), plus [`EXPORT TO DATABASE`](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html).

The current [isolation level](ABENDB_ISOLATION.html) specifies whether the SQL statement `SELECT` sets a shared lock.

If a transaction cannot lock an object because it is already locked by another transaction, it waits until the other transaction releases this lock. This can produce a **deadlock**. A [deadlock](ABENDEADLOCK_GLOSRY.html) occurs, for example, when two transactions are waiting for a lock held by the other.

A booking needs to be made in a flight reservation system for Lufthansa flight 0400 on May 16, 1996. This is possible only if there are enough free seats. To prevent two bookings from being made at the same time and avoid overbooking, the entry in the DDIC database table `SFLIGHT` for this flight must be locked to prevent it from being changed by other transactions. This ensures that the query to determine the number of free seats in the `SEATSOCC` field can be carried out, the flight can be booked, and the `SEATSOCC` field can be updated by other transactions. The following program excerpt shows a solution for this problem:

The table row selected by `SELECT SINGLE FOR UPDATE` and inserted by `INSERT` is locked until the end of the [database LUW](ABENDATABASE_LUW_GLOSRY.html). This prevents the flight from being overbooked and inconsistencies from occurring between tables `SFLIGHT` and `SBOOK` in the event of a database rollback after an error.

Database systems do not usually provide statements for explicitly releasing locks. All database locks are released no later than the next [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [rollback](ABENDATABASE_ROLLBACK_GLOSRY.html). Shared locks usually have an even shorter lifetime. Sometimes, this causes problems for transactions that involve multiple dialog steps:

After the user has selected a flight in the above example, further dialog steps are usually performed to enter additional data for the reservation. Here, the flight reservation is added in a different database LUW than the original selection of the flight. Database locking does not prevent another transaction from booking this flight in the meantime, which can mean that the scheduled booking may have to be canceled after all.

From the point of view of the user, this solution is very inconvenient. To avoid this scenario, a flight reservation system must use the [SAP locking mechanism](ABENSAP_LOCK_GLOSRY.html) to lock the flight for the entire duration of the transaction.

The [DBA Cockpit](ABENDBA_COCKPIT_GLOSRY.html) allows monitoring database locks.

-   protect data objects currently being changed or read by a transaction from being changed by other transactions at the same time
-   protect a transaction from reading data objects that have not yet been committed by another transaction

-   Using one of the [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements [`SELECT`](ABAPSELECT.html), [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), or [`DELETE`](ABAPDELETE_DBTAB.html).
-   Using a [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statement.
-   Calling [AMDP methods](ABENAMDP_METHOD_GLOSRY.html).
-   Using other statements that access the database, such as [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) and [`EXPORT`](ABAPEXPORT_DATA_CLUSTER.html)\\ `FROM` and `TO`\\ `DATABASE`.

-   Shared lock
-   Shared locks allow the system to set other shared locks simultaneously, but prevent other transactions from setting exclusive locks for the locked objects.
-   Exclusive lock
-   Exclusive locks do not allow other transactions to set any locks for the locked objects.

-   The following settings are possible in all databases except the SAP HANA database and Oracle databases:

-   [*Uncommitted reads*](ABENDB_ISOLATION.html) (the default setting) do not attempt to set shared locks. Data is also read that is still protected by an exclusive lock and not yet committed using a [database commit](ABENDATABASE_COMMIT_GLOSRY.html).
-   [*Committed reads*](ABENDB_ISOLATION.html) (which can be configured using the function module `DB_SET_ISOLATION_LEVEL`) set a shared lock during the read and then remove it again. This is possible only when exclusive locks do not exist, which can entail wait times.

-   The SAP HANA database and Oracle databases do not set shared locks, but also only read data committed by a [database commit](ABENDATABASE_COMMIT_GLOSRY.html).

DATA: sflight\_wa TYPE sflight, sbook\_wa type sbook. \\nSELECT SINGLE FOR UPDATE \* \\n FROM sflight \\n WHERE \\n carrid = 'LH' AND \\n connid = '0400' AND \\n fldate = '19960516' \\n INTO @sflight\_wa. \\nIF sy-subrc <> 0. \\n MESSAGE e... \\nENDIF. \\nIF sflight\_wa-seatsocc < sflight\_wa-seatsmax. \\n sbook\_wa-carrid = 'LH'. \\n sbook\_wa-connid = '0400'. \\n sbook\_wa-fldate = '19960516'. \\n ... \\n INSERT sbook FROM sbook\_wa. \\n IF sy-subrc <> 0. \\n MESSAGE e... \\n ENDIF. \\n UPDATE sflight \\n SET \\n seatsocc = seatsocc + 1 \\n WHERE \\n carrid = 'LH' AND \\n connid = '0400' AND \\n fldate = '19960516'. \\nELSE. \\n MESSAGE e... \\nENDIF. \\nCOMMIT WORK. abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html