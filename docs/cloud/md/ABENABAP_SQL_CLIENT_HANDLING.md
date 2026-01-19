---
title: "ABENABAP_SQL_CLIENT_HANDLING"
description: |
  ABENABAP_SQL_CLIENT_HANDLING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_SQL_CLIENT_HANDLING.htm"
abapFile: "ABENABAP_SQL_CLIENT_HANDLING.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "data", "internal-table", "ABENABAP", "SQL", "CLIENT", "HANDLING"]
---

The term [client handling](ABENCLIENT_HANDLING_GLOSRY.html) means the handling of the application data of a [client](ABENCLIENT_GLOSRY.html). The aim of client handling is generally that an [ABAP user](ABENABAP_USER_GLOSRY.html) can only have access to the application data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) whose [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) was specified in the logon. ABAP SQL uses implicit client handling. This method of client handling has the effect that ABAP SQL statements handle the [client column](ABENCLIENT_COLUMN_GLOSRY.html) in a special way when [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data sources are accessed:

Implicit client handling uses the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) by default. This ID is also contained in the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-mandt`.

This means that ABAP SQL uses only the data of the current data by default and this does not need to be specified explicitly by the developer.

-   The client column cannot be evaluated in the [SQL conditions](ABENSQL_COND_GLOSRY.html) of the [`SELECT`](ABAPSELECT.html) statements of [queries](ABENASQL_QUERY_GLOSRY.html) and of the write statements [`UPDATE SET`](ABAPUPDATE.html) and [`DELETE FROM`](ABAPDELETE_DBTAB.html).

-   Instead, the SQL statements passed to the database by the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) contain an additional condition for the client column.
-   Furthermore, joins between client-dependent data sources insert an `ON` condition that checks the client columns for equality.

-   The variants of the write statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html), which use data from work areas, internal tables, or subqueries specified after `FROM`, ignore their client columns and the value is set by ABAP SQL instead.

-   The condition passed implicitly in selections checks the content of the client column for equality with the client ID of the current client.
-   In write statements, ABAP SQL uses the client ID of the current client for the client column of the target instead of the values of the client column of the work areas, internal tables, or subqueries specified after `FROM`.

-   The implicit client handling of ABAP SQL does not concern the [`INTO` clause](ABAPINTO_CLAUSE.html) and the rules described there. In particular, the client column of a target structure can be filled with other values than the client ID, for example when assigning individually specified columns of a [select list](ABAPSELECT_LIST.html).
-   For information about accessing client-dependent [CDS entities](ABENCDS_ENTITY_GLOSRY.html), see the following descriptions:

-   [ABAP CDS - Client Handling in CDS Table Entities](ABENCDS_TABLE_ENTITY_CLIENT.html)
-   [Client Handling in CDS View Entities](ABENCDS_V2_VIEW_CLIENT_HANDLING.html)
-   [Client Handling in CDS DDIC-Based Views](ABENCDS_VIEW_CLIENT_HANDLING_V1.html)
-   [Client Handling in CDS Table Functions](ABENCDS_FUNC_CLIENT_HANDLING.html).

-   The DDIC database table `T000` contains the potential [client IDs](ABENCLIENT_IDENTIFIER_GLOSRY.html) in [AS ABAP](ABENAS_ABAP_GLOSRY.html). Client columns of application tables should contain only those client IDs specified in `T000`. This is not, however, checked by ABAP SQL.
-   The client data from an AS ABAP is represented in self-contained units. No client-independent access to databases should take place in application programs.
-   For [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) data sources, any column of type `CHAR` with length 3 can be declared as a client column with the addition [`DECLARE CLIENT`](ABAPSELECT_DECLARE_CLIENT.html) in ABAP SQL Queries. Then, the data source is handled as client-dependent and implicit client handling is applied.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html