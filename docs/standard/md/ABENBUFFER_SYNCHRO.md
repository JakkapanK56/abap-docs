---
title: "ABENBUFFER_SYNCHRO"
description: |
  ABENBUFFER_SYNCHRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBUFFER_SYNCHRO.htm"
abapFile: "ABENBUFFER_SYNCHRO.html"
keywords: ["update", "delete", "do", "while", "if", "case", "method", "data", "ABENBUFFER", "SYNCHRO"]
---

A buffered table or view usually exists in the [table buffers](ABENTABLE_BUFFER_GLOSRY.html) of every AS instance. If a program in one of the AS instances modifies data from a table using ABAP SQL, the data is updated as follows:

If buffered tables were changed using a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) and the transaction of the service connection is committed but the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) is rolled back, the buffer invalidation will take place only on the current AS instance but not on other AS instances.

If the free memory in the buffer falls below a preset value or the quality of access is poor, data is displaced from the buffer. The quality of access depends on the number of accesses that can be met directly from the buffer.

The need for displacements is checked asynchronously at specific points in time that are determined dynamically using the accesses to the buffer, which means that the length of time between two displacements depends on the buffer load.

Data is displaced from those tables that are accessed least often. Here, accesses to a table are weighted differently depending on the time they take place. Older accesses, for example, are weighted less than those that take place shortly before the displacement. This makes it possible to displace those tables from the buffer that are accessed a lot at one particular point in time but then no longer used.

The individual generic areas of [generically buffered tables](ABENBUFFER_GENERIC_BUFFERING.html) are handled like standalone tables, which means that certain generic areas of a table can be displaced while other generic areas of the same table are kept in the buffer.

The table buffer of the current AS instance can be reset by invalidating all its data. This is done by entering `/$TAB` in the [command field](ABENCOMMAND_FIELD_GLOSRY.html) in the [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html) in SAP GUI.

The table buffer should only be reset if inconsistencies have arisen in the buffer. It can take a long time to fill the table buffer in large systems and this can seriously affect performance.

-   The data is modified in the database table on the database.
-   The buffers of the current AS instance are invalidated immediately.

-   In changes made using [work areas](ABENWORK_AREA_GLOSRY.html), the affected row is invalidated in tables with single record buffering. In generically buffered tables, the affected generic area is invalidated and in fully buffered tables, the whole table is invalidated.
-   In changes made using [](ABAPUPDATE_SOURCE.html)`UPDATE` ... `SET ... WHERE ...` or [](ABAPDELETE_WHERE.html)`DELETE ... WHERE ...`, the entire table is invalidated in tables with single record buffering and full buffering. In generically buffered tables, all generic areas are invalidated that are affected by a left-aligned generic subkey.
-   In buffered [DDIC database views](ABENDDIC_DATABASE_VIEWS.html) or [CDS views](ABENCDS_V1_VIEWS.html), the entire buffer is invalidated regardless of the buffering type. In client-dependent views, however, this only affects the content of the [current client](ABENCURRENT_CLIENT_GLOSRY.html).

-   The invalidated data is written to the log table `DDLOG` of the database interface.
-   Provided that no [database commits](ABENDATABASE_COMMIT_GLOSRY.html) have been performed for a change to the buffered table, all database reads on the AS instance in which the change was performed access the database directly and bypass the buffer. After a [database commit](ABENDATABASE_COMMIT_GLOSRY.html), the following applies to reads on this AS instance:

-   In the case of single record buffering and a change, which only relates to a single record in this type of table, the buffer is updated immediately on read access.
-   In the case of generic, completely buffered tables, the number of reads that access the database directly bypassing the buffer is 5 by default. The value is specified in the profile parameter `zcsa/inval_reload_c`. The buffer is updated afterwards during the read with the data from the database.

-   On all other AS instances, the buffers are still in the old state. Reads are still performed via the buffer and can potentially access obsolete data. The buffers of this AS instance are synchronized using the following asynchronous method:

-   A synchronization is performed on every AS instance in a specified time interval. The default interval is two minutes. The value is specified in the profile parameter `rdisp/bufreftime`. The database interface reads the log table `DDLOG` and invalidates the buffer content in the same way as on the AS instance where the original change was made.
-   After synchronization, in the case of single record buffering and a change, which only relates to a single record, the buffer is updated via read access. In the case of generic, completely buffered tables, the number of reads that access the database is 5 by default. The buffer is only properly updated afterwards during the next read. The value is specified in the profile parameter `zcsa/sync_reload_c`.

-   Asynchronous synchronization has the benefit of keeping the network load on the system low, particularly when compared with synchronous methods where each change made to the buffered data of an AS instance is broadcast immediately to all other AS instances. The drawback of asynchronous synchronization is that, unlike synchronous methods, the data is not up-to-date in the time between two synchronizations.
-   The asynchronous method of buffer synchronization affects the decision as to whether or not a DDIC database table can be buffered. Tables where many writes are performed are not suited to buffering, since the table buffers would then often be inconsistent, and the system would constantly be invalidating and loading the buffers.
-   Changes made using a `WHERE` condition place a far greater load on buffer management on the current AS instance than changes made to single rows.
-   In fully buffered client-specified tables or views, it should be noted that generic buffering is performed internally with the client column as a generic key. This means that an invalidation of the entire buffer only affects the content of the current client.
-   In systems with only one AS instance, it is not necessary to fill the log table `DDLOG` with the modifications of the buffered tables and this can be switched off by setting the profile parameter `rdisp/bufrefmode` to `sendoff, exeauto`.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abensap\_puffering.html