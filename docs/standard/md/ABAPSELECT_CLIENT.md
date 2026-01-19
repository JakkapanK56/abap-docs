---
title: "ABAPSELECT_CLIENT"
description: |
  ABAPSELECT_CLIENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_CLIENT.htm"
abapFile: "ABAPSELECT_CLIENT.html"
keywords: ["select", "insert", "do", "while", "if", "case", "data", "internal-table", "ABAPSELECT", "CLIENT"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... \{ USING CLIENT clnt \}\    |\ \{\ [EXPOSE CLIENT AS clnt_col]\        USING \{ CLIENTS IN @client_range_tab \}\            |\ \{ CLIENTS IN T000 \}\            |\ \{ ALL CLIENTS \}\ \} ...`

[1. `... USING CLIENT clnt`](#ABAP_VARIANT_1@1@)

[2. `... [EXPOSE CLIENT AS clnt_col] USING [ALL] CLIENTS [IN] ...`](#ABAP_VARIANT_2@1@)

The optional addition `USING` in the [`FROM`](ABAPFROM_CLAUSE.html) clause of a [query](ABENASQL_QUERY_GLOSRY.html) switches [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) from the [current client](ABENCURRENT_CLIENT_GLOSRY.html) to other clients.

When a single data source is specified, the addition `USING` must be inserted directly after [`data_source`](ABAPSELECT_DATA_SOURCE.html) in the join condition. When a join expression is specified, the addition must be inserted after the last addition `ON` of the join condition. Client handling can be switched exactly once for each [query](ABENASQL_QUERY_GLOSRY.html) and is applied to all client-dependent data sources specified there. These include:

Client handling can, however, be switched in subqueries defined using [`WITH`](ABAPWITH.html) and in queries joined using [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html). If the data source is specified statically, the addition can be specified only if at least one client-dependent data source is used. Otherwise a syntax error occurs.

The addition `USING CLIENT` cannot be used to access a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) that is linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html) and for which [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) is performed:

The addition `USING ALL CLIENTS` is not allowed when accessing [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html). For more details, see [ABAP CDS - Client Handling in CDS View Entities](ABENCDS_V2_VIEW_CLIENT_HANDLING.html).

The addition `USING CLIENT` modifies automatic [client handling](ABENCLIENT_HANDLING_GLOSRY.html) in ABAP SQL for the current [query](ABENASQL_QUERY_GLOSRY.html) so that the client ID from `clnt` is used instead of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) ID. The client specified in `clnt` is used in all places where, in `SELECT` statements, the current client is implicitly used in implicit client handling. An implicit condition is created for this client and, in joins, the client columns of the client-dependent data sources involved are compared for equality. If it is known statically that the data sources [`data_source`](ABAPSELECT_DATA_SOURCE.html) are not client-dependent, the addition `USING CLIENT` cannot be specified.

`clnt` expects a data object of the type `c` with length 3 and containing a client ID. A literal or a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) can be specified. If specified, the system field `sy-mandt` would be ignored and cannot be specified directly for `clnt`.

When accessing [CDS entities](ABENCDS_ENTITY_GLOSRY.html), the HANA session variable `CDS_CLIENT` (that is addressed as [`client`](ABENCDS_SESSION_VARIABLE_V2.html) in ABAP CDS) is set to the client ID specified in `clnt` while the current `SELECT` statement is executed. The following restrictions apply:

Reading of all customers in client *800* from a client-dependent DDIC database table.

[1. `... USING CLIENTS IN @client_range_tab`](#ABAP_ALTERNATIVE_1@2@)

[2. `... USING CLIENTS IN T000`](#ABAP_ALTERNATIVE_2@2@)

[3. `... USING ALL CLIENTS`](#ABAP_ALTERNATIVE_3@2@)

[`... EXPOSE CLIENT AS clnt_col`](#ABAP_ONE_ADD@1@)

The additions `USING [ALL] CLIENTS [IN]` modify implicit ABAP SQL client handling so that the data of all clients specified by the addition is read and not just the data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html). The additions modify the implicit `WHERE` condition for the client column passed to the database when it is accessed. They do not modify the equality condition for the client columns of client-dependent data sources in joins.

When [CDS entities](ABENCDS_ENTITY_GLOSRY.html) are accessed, the additions `USING [ALL] CLIENTS [IN]` do not set the HANA session variable `CDS_CLIENT` (that is addressed as [`client`](ABENCDS_SESSION_VARIABLE_V2.html) in ABAP CDS). They cannot be used when accessing the following [CDS entities](ABENCDS_ENTITY_GLOSRY.html):

The additions `USING [ALL] CLIENTS [IN]` cannot be specified together with the following [path expressions](ABENABAP_SQL_PATH.html):

This addition modifies implicit client handling in ABAP SQL for the current query so that, instead of the [current client](ABENCURRENT_CLIENT_GLOSRY.html), the data of all clients is selected whose client IDs meet the conditions in a [ranges tables](ABENRANGES_TABLE_GLOSRY.html)\\ `client_range_tab`. If the ranges table is empty, the data of all clients is selected.

For `client_range_tab`, an internal table can be specified as a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) or a [host expression](ABENABAP_SQL_HOST_VARIABLES.html) whose row structure matches the structure of a ranges table. The columns `low` and `high` must have the type `c` with length 3.

Selection of the data of all clients whose client IDs meet the conditions of ranges table constructed in a host expression with the [value operator](ABENVALUE_OPERATOR_GLOSRY.html)\\ [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).

This addition modifies implicit client handling in ABAP SQL for the current query so that, instead of the [current client](ABENCURRENT_CLIENT_GLOSRY.html), the data of all clients is selected implicitly, whose client IDs are in the column `MANDT` of the system table `T000`.

See below.

This addition modifies implicit client handling in ABAP SQL for the current query so that, instead of the data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html), all data is selected regardless of the content of the client column.

For the table `SFLIGHT`, this example checks whether a selection of all data without a condition for the client column has the same result as a selection of the client from the system table `T000`.

This optional addition to `USING ... CLIENTS ...` can be specified when a client-dependent [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed that has no client column. A column named `clnt_col` is added as the first column to the result set of the query and contains the client IDs.

The name `clnt_col` should follow the [naming conventions](ABENNAMING_CONVENTIONS.html).

-   The variant `USING CLIENT` replaces the current client with the specified client in client handling.
-   The variant `USING [ALL] CLIENTS [IN]` selects the data of any number of other clients instead of the current client.

-   Join expressions, the addition `USING` cannot be used for individual data sources.
-   Conditions `sql_cond`, the addition `USING` cannot be specified in [subqueries](ABENWHERE_LOGEXP_SUBQUERY.html) here.

-   If the addition `USING CLIENT` is used statically recognizable to access a CDS entity defined without the annotation `AccessControl.authorizationCheck:#NOT_ALLOWED` and the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) is not used in the [`FROM`](ABAPFROM_CLAUSE.html) clause, a syntax check error occurs.
-   If the addition `USING CLIENT` is used to access a CDS entity linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html) and for which CDS access control is performed, an exception is raised.

-   If the data source is specified dynamically after [`FROM`](ABAPFROM_CLAUSE.html), the addition `USING` in `SELECT` can always be specified. No exception is raised if no client-dependent tables or views are used, and the addition is ignored instead.
-   The addition `USING` can also be used for [writes](ABENABAP_SQL_WRITING.html).
-   Each client represents a self-contained unit, which means that implicit client handling should never be disabled in application programs.
-   If data has to be accessed in a different client, `USING` should be used instead of the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html), since all necessary conditions are set implicitly and accessing client-dependent CDS entities is also easier.
-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) does not work for client-independent access. For this reason, the addition `USING` can only be used when accessing CDS entities for which access control is disabled using the annotation `AccessControl.authorizationCheck:#NOT_ALLOWED` or using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause.
-   The addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) only works on the CDS entity specified in the [`FROM`](ABAPFROM_CLAUSE.html) clause. If a [path expression](ABENABAP_SQL_PATH.html) is used to access a CDS entity in the current query and if a CDS access control is enabled for this entity, the addition `USING` cannot be used.
-   As an alternative to `USING`, the addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) can be specified outside [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html). This addition disables implicit client handling completely and is completely obsolete in queries.
-   See also the associated [security note](ABENCLIENT_DEPENDENT_SCRTY.html) and the [programming guideline](ABENCLIENT_HANDLING_GUIDL.html).
-   The variants of the addition `USING` can also be placed behind the [`OPTIONS`](ABAPSELECT_OPTIONS.html) addition in order to switch the client handling for all data sources of an ABAP SQL statement. Then, they cannot be used for individual data sources.
-   The addition `USING` is not allowed in the [obsolete short form](ABAPSELECT_OBSOLETE.html) of `SELECT`.

-   When [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) are accessed, `CDS_CLIENT` is set to a value other than the current client only if it is needed to evaluate the view on the database. When [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) are accessed, the session variable is always set to the value specified by `USING`.
-   If multiple [queries](ABENASQL_QUERY_GLOSRY.html) that access client-dependent CDS views are accessed, and the type of client handling is defined by the annotation [`@ClientHandling.algorithm:#SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) in these views, the session variable `client` must be the set to the same value in each of these queries. The runtime error `SAPSQL_DIFFERENT_CLIENT_VALUES` occurs if `USING CLIENT` is used to specify a different client ID in one of these queries. This situation can occur in the statement [`WITH`](ABAPWITH.html) or when using [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html).

-   If the addition `USING CLIENT` is used, the statement `SELECT` functions as if the current user were logged on with the client ID specified in `clnt`.
-   If `clnt` contains a client ID for a nonexistent client, the statement `SELECT` is executed with this ID and the result set is empty.
-   If the addition `USING CLIENT` is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP05.html), which handles the statement more strictly than the regular syntax check.

-   CDS entities that implicitly depend on the HANA session variable `CDS_CLIENT`
-   CDS entities in which an [input parameter](ABENCDS_F1_PARAM.html) is annotated with the annotation [`@Environment.systemField:#CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html).
-   [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) in which the view annotation [`@ClientHandling.algorithm:#SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) is specified and the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) is evaluated implicitly.
-   CDS views that use the session variable `client`.

-   Path expressions in any positions in which [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) occur whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is client-dependent.
-   Path expressions in the [`FROM`](ABAPFROM_CLAUSE.html) clause in which [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) occur whose [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) is client-dependent.

-   The additions `USING [ALL] CLIENTS [IN]` replaced the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) in all cases where it disabled implicit client handling to make it possible to access more than one client. Unlike `CLIENT SPECIFIED`, `USING [ALL] CLIENTS [IN]` preserves client handling in joins.
-   If the addition `USING CLIENTS` is used, the syntax check is performed in [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html).

-   The conditions of the ranges table are transformed to implicit `WHERE` conditions and passed to the database system.
-   In the case of joins, the client columns of the client-dependent data sources involved are still checked for equality implicitly.

-   The DDIC database table `T000` contains the potential [client IDs](ABENCLIENT_IDENTIFIER_GLOSRY.html) in [AS ABAP](ABENAS_ABAP_GLOSRY.html). Client columns of application tables should contain only those client IDs specified in `T000`. This is not, however, checked by ABAP SQL.
-   Implicit checks on the content of the DDIC database table `T000` are implemented internally by passing a `WHERE` condition with a corresponding subquery to the database system.
-   In the case of joins, the client columns of the client-dependent data sources involved are still checked for equality implicitly.

-   The addition `USING ALL CLIENTS` does not pass an implicit `WHERE` for the client column to the database system.
-   In the case of joins, the client columns of the client-dependent data sources involved are still checked for equality implicitly.
-   The addition `USING ALL CLIENTS` replaces the addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) without specifying a `WHERE` condition for the client column.

-   The CDS entity must fulfill the requirements listed above.
-   The addition `EXPOSE CLIENT` enables processing the result set with respect to the client ID what is otherwise not possible for CDS entities without a client column.

SELECT \* \\n FROM scustom USING CLIENT '800' \\n INTO TABLE @FINAL(customers). SELECT \* \\n FROM scarr \\n INNER JOIN spfli ON scarr~carrid = spfli~carrid \\n USING CLIENTS IN @( \\n VALUE #( \\n ( sign = 'I' option = 'EQ' low = '000' ) \\n ( sign = 'I' option = 'BT' low = '100' high = '200' ) ) ) \\n INTO TABLE @FINAL(itab). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT mandt \\n FROM sflight USING CLIENTS IN T000 \\n ORDER BY mandt, carrid, connid, fldate \\n INTO TABLE @FINAL(res\_t000). \\n\\ \\nSELECT mandt \\n FROM sflight USING ALL CLIENTS \\n ORDER BY mandt, carrid, connid, fldate \\n INTO TABLE @FINAL(res\_all). \\n\\ \\nIF res\_t000 <> res\_all. \\n out->write( 'Illegal client ids in SFLIGHT' ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html