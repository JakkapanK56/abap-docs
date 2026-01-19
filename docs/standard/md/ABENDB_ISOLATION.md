---
title: "ABENDB_ISOLATION"
description: |
  ABENDB_ISOLATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_ISOLATION.htm"
abapFile: "ABENDB_ISOLATION.html"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "ABENDB", "ISOLATION"]
---

The term *isolation* refers to the separation of different transactions performed on the same data in a database. Different isolation levels control how a database user can perform reads on the data of another user that was modified in a [database LUW](ABENDATABASE_LUW_GLOSRY.html). Isolation is realized by applying appropriate [database locks](ABENDATABASE_LOCK_GLOSRY.html).

The following isolation levels are significant when accessing a database from an AS ABAP:

For databases that can be accessed by an [AS ABAP](ABENAS_ABAP_GLOSRY.html), the following settings apply to the isolation level:

Many database systems employ additional isolation levels, such as `serializable` and `repeatable read`. These work in a similar way as `committed reads`, but the shared lock is preserved until the next data is read or until the [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) is closed. Since these isolation levels are not sufficiently standardized, they are not currently used by an [AS ABAP](ABENAS_ABAP_GLOSRY.html).

-   **Uncommitted read**
-   In uncommitted reads, every database user performing a read can see the modified data directly, not just the owner of the database LUW where the data was modified, even if no [database commit](ABENDB_COMMIT.html) has been performed yet. The read is performed without trying to set a shared lock (dirty read), which means that the existing exclusive lock has no effect on the read. Data in a temporary state can, therefore, be read, even if it is to be removed again by a database rollback.
-   **Committed read**
-   In committed reads, only the owner of a database LUW has access to data modified in the LUW. Other database users cannot access the modified data before a [database commit](ABENDB_COMMIT.html). A parallel read by another user tries to set a shared lock, which is not possible for the modified data due to the existing exclusive lock. Data can be accessed by another user only when released by a database commit.

-   The SAP HANA database and Oracle databases do not support these isolation levels in their strict form. In the case of reads:

-   Regarding the shared lock, they behave as in `uncommitted reads` by not setting a shared lock.
-   Regarding the data read, they behave like in a `committed read`. If the data is locked in a different LUW by a write, the state of the data that was cached after the last database commit is accessed.

-   This setting cannot be changed by the method `SET_ISOLATION_LEVEL` of the class `CL_SQL_CONNECTION`.
-   On all other databases both isolation levels are possible, with `uncommitted read` as the default setting. The method `SET_ISOLATION_LEVEL` of the class `CL_SQL_CONNECTION` can be used to set the isolation level of a database connection to `committed read`. In the case of reads, an attempt is actually made to set a shared lock, which can lead to waiting times. The same method can be used to reset the isolation level to the default setting. This happens anyway after the next database commit or database rollback.

-   In databases that support the isolation levels `committed read` and `uncommitted read`, the latter must be the default setting, since otherwise deadlocks occur quickly. There is no risk of this on SAP HANA databases and on Oracle databases. These databases read the same data as in a `committed read` but do not set shared locks.
-   When the database is accessed from an AS ABAP, the [database user](ABENDATABASE_USER_GLOSRY.html) is always a [work process](ABENWORK_PROCESS_GLOSRY.html) of an [application server instance](ABENAS_INSTANCE_GLOSRY.html). This means that, for the isolation level `uncommitted read`, a work process can perform reads on data in a database LUW of its current or another [ABAP user](ABENABAP_USER_GLOSRY.html) that has not yet been committed using a database commit.
-   The isolation level does not modify how [buffered tables in ABAP SQL](ABENSAP_PUFFERING.html) are accessed. Also, for the isolation level `committed read`, the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) is accessed. Therefore, data may be obsolete if it has been changed since the last buffer synchronization in the database. It is guaranteed, however, that data is only read if it was committed on the database using a database commit. To explicitly access current data in a buffered table, the addition [`BYPASSING BUFFER`](ABAPSELECT_BYPASSING_BUFFER.html) must also be used for the isolation level `committed read`.
-   The method `SET_ISOLATION_LEVEL` of the class `CL_SQL_CONNECTION` replaces the function modules `DB_SET_ISOLATION_LEVEL` and `DB_RESET_ISOLATION_TO_DEFAULT`.

abenabap.html abenabap\_reference.html abendb\_access.html abendata\_consistency.html abendb\_transaction.html