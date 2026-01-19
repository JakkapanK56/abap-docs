---
title: "ABENABAP_SQL_CLIENT_HANDLING"
description: |
  ABENABAP_SQL_CLIENT_HANDLING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SQL_CLIENT_HANDLING.htm"
abapFile: "ABENABAP_SQL_CLIENT_HANDLING.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "method", "data", "internal-table", "ABENABAP", "SQL", "CLIENT", "HANDLING"]
---

The term [client handling](ABENCLIENT_HANDLING_GLOSRY.html) means the handling of the application data of a [client](ABENCLIENT_GLOSRY.html). The aim of client handling is generally that an [ABAP user](ABENABAP_USER_GLOSRY.html) can only have access to the application data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) whose [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) was specified in the logon. ABAP SQL uses implicit client handling. This method of client handling has the effect that ABAP SQL statements handle the [client column](ABENCLIENT_COLUMN_GLOSRY.html) in a special way when [client-dependent](ABENCLIENT_DEPENDENT_GLOSRY.html) data sources are accessed:

Implicit client handling uses the [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) by default. This ID is also contained in the [system field](ABENSYSTEM_FIELD_GLOSRY.html)\\ `sy-mandt`.

This means that ABAP SQL uses only the data of the current data by default and this does not need to be specified explicitly by the developer. Implicit client handling can, however, also be switched from the default current client to other clients using additions of the ABAP SQL statements. The cases described above must also be distinguished here:

In addition to the case described above, the addition `CLIENT SPECIFIED` can also be used instead of `USING` in the other cases for modifying statements with data sources after `FROM`. This use is [obsolete](ABAPSELECT_CLIENT_OBSOLETE.html) in queries and [obsolete](ABAPUD_CLIENT_OBSOLETE.html) in the write statements `UPDATE SET` and `DELETE FROM`. The addition `CLIENT SPECIFIED` completely deactivates implicit client handling in these statements. This means that no implicit `WHERE` condition is created for the client column and no `ON` condition is created between the client columns in joins. The client column in the SQL conditions of the ABAP SQL statements, on the other hand, can or must itself be evaluated. Deactivating implicit client handling in this way is prone to errors and hence not recommended. The `USING` additions for switching implicit handling should be used instead.

[Client Handling](ABENCLIENT_HANDLING_GUIDL.html)

-   The client column cannot be evaluated in the [SQL conditions](ABENSQL_COND_GLOSRY.html) of the [`SELECT`](ABAPSELECT.html) statements of [queries](ABENASQL_QUERY_GLOSRY.html) and of the write statements [`UPDATE SET`](ABAPUPDATE.html) and [`DELETE FROM`](ABAPDELETE_DBTAB.html).

-   Instead, the SQL statements passed to the database by the [ABAP SQL interface](ABENABAP_SQL_INTERFACE_GLOSRY.html) contain an additional condition for the client column.
-   Furthermore, joins between client-dependent data sources insert an `ON` condition that checks the client columns for equality.

-   The variants of the write statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html), which use data from work areas, internal tables, or subqueries specified after `FROM`, ignore their client columns and the value is set by ABAP SQL instead.

-   The condition passed implicitly in selections checks the content of the client column for equality with the client ID of the current client.
-   In write statements, ABAP SQL uses the client ID of the current client for the client column of the target instead of the values of the client column of the work areas, internal tables, or subqueries specified after `FROM`.

-   The implicit condition of queries and the write statements `UPDATE SET` and `DELETE FROM` can be switched from the current client to other clients as follows:

-   The addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) of the `SELECT` statement and the addition [`USING CLIENT`](ABAPIUMD_CLIENT.html) of the write statements are used to specify the client ID from the addition instead of the current client ID. Implicit client handling works as if the current user was logged on with the specified client ID.
-   The additions [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html) of the `SELECT` statement and [`USING [ALL] CLIENTS [IN]`](ABAPIUMD_CLIENT.html) of the write statements are used to replace or remove the equality condition for a client with different conditions for multiple clients. The condition is then non-unique instead of unique.

-   In both cases, the joins of queries preserve the additional implicit `ON` condition.
-   The value set implicitly for the client column of the work areas, internal tables, or subqueries specified after `FROM` in write statements can be switched from the current client to other clients as follows:

-   ABAP SQL uses the addition [`USING CLIENT`](ABAPIUMD_CLIENT.html) to specify the client ID from the addition instead of the current ID. Implicit client handling works as if the current user is logged on with the specified client ID.
-   If ABAP SQL specifies the addition [`CLIENT SPECIFIED`](ABAPIUMD_CLIENT.html), no replacement takes place. The values of the client column of the work areas, internal tables, or subqueries specified after `FROM` are used. In internal tables and subqueries, there may be multiple client IDs.

-   The implicit client handling of ABAP SQL does not concern the [`INTO` clause](ABAPINTO_CLAUSE.html) and the rules described there. In particular, the client column of a target structure can be filled with other values than the client ID, for example when assigning individually specified columns of a [select list](ABAPSELECT_LIST.html).
-   For information about accessing client-dependent [CDS entities](ABENCDS_ENTITY_GLOSRY.html), see the following descriptions:

-   [ABAP CDS - Client Handling in CDS Table Entities](ABENCDS_TABLE_ENTITY_CLIENT.html)
-   [Client Handling in CDS View Entities](ABENCDS_V2_VIEW_CLIENT_HANDLING.html)
-   [Client Handling in CDS DDIC-Based Views](ABENCDS_VIEW_CLIENT_HANDLING_V1.html)
-   [Client Handling in CDS Table Functions](ABENCDS_FUNC_CLIENT_HANDLING.html).

-   The DDIC database table `T000` contains the potential [client IDs](ABENCLIENT_IDENTIFIER_GLOSRY.html) in [AS ABAP](ABENAS_ABAP_GLOSRY.html). Client columns of application tables should contain only those client IDs specified in `T000`. This is not, however, checked by ABAP SQL.
-   [Native SQL](ABENNATIVE_SQL.html) and [AMDP](ABENAMDP_GLOSRY.html) do not implement implicit client handling. The current client must always be specified explicitly here.
-   The client data from an AS ABAP is represented in self-contained units. No client-independent access to databases should take place in application programs.
-   For [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) data sources, any column of type `CHAR` with length 3 can be declared as a client column with the addition [`DECLARE CLIENT`](ABAPSELECT_DECLARE_CLIENT.html) in ABAP SQL Queries. Then, the data source is handled as client-dependent and implicit client handling is applied.
-   This is why the additions `USING` and `CLIENT SPECIFIED` should never be used here. If ABAP SQL is used, there is generally no need to access `sy-mandt` in application programs either.
-   True [multitenancy](ABENMEGATENANCY_GLOSRY.html), with which the system ensures that different tenants' application data is isolated from each other, is not supported by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) in the current release.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html