---
title: "ABENNEWS-914-ABAP_SQL"
description: |
  ABENNEWS-914-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-914-ABAP_SQL.htm"
abapFile: "ABENNEWS-914-ABAP_SQL.html"
keywords: ["select", "insert", "do", "if", "data", "ABENNEWS", "914", "ABAP", "SQL"]
---

[1\. Connection Objects](#ABAP_MODIFICATION_1@4@)

[2\. Declaring a Client Column for Client-independent Data Sources](#ABAP_MODIFICATION_2@4@)

[3. Addition `OPTIONS` for DML Statements](#ABAP_MODIFICATION_3@4@) 

[4. Placing `USING` Behind `OPTIONS`](#ABAP_MODIFICATION_4@4@)

[5\. Exposing Client Columns of CDS Entities](#ABAP_MODIFICATION_5@4@)

An [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) implementing the interface [`IF_ABAP_SQL_CONNECTION`](ABENIF_ABAP_SQL_CONNECTION.html) represents a [database connection](ABENDATABASE_CONNECTION_GLOSRY.html) that can be used behind the `CONNECTION` addition of ABAP SQL statements. Connection objects enable using [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

The addition [`DECLARE CLIENT`](ABAPSELECT_DECLARE_CLIENT.html) in the [`FROM` clause](ABAPFROM_CLAUSE.html) of an ABAP SQL query declares a column of a [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) data source as a client column and the data source as client-dependent during the current access. Implicit client handling takes place and can be affected by the addition [`USING`](ABAPSELECT_CLIENT.html).

The addition `OPTIONS` can now also be used for DML statements to introduce ABAP-specific additions.

In an ABAP DQL statement, the addition [`USING`](ABAPSELECT_OPTIONS_USING.html) can be placed behind [`OPTIONS`](ABAPSELECT_OPTIONS.html) in order to switch the implicit client handling of the client-dependent data sources of all queries of the statement at once.

The addition [`EXPOSE CLIENT`](ABAPSELECT_CLIENT.html) to [`USING ... CLIENTS ...`](ABAPSELECT_CLIENT.html) allows access to the client IDs of certain client-dependent CDS entities that do not have a client column.

-   It can be used as [`OPTIONS`](ABAPIUMD_OPTIONS.html) for the DML statement itself.
-   It can be used for [subqueries](ABAPINSERT_FROM_SELECT.html) of DML statements.

abenabap.html abennews.html abennews-91.html abennews-914.html