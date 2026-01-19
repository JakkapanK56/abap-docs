---
title: "ABAPSELECT_CLIENT_OBSOLETE"
description: |
  ABAPSELECT_CLIENT_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_CLIENT_OBSOLETE.htm"
abapFile: "ABAPSELECT_CLIENT_OBSOLETE.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABAPSELECT", "CLIENT", "OBSOLETE"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... CLIENT SPECIFIED \{\ [entity1~clnt]\ [, entity2~clnt] ... \}\                       |\ [(clnt_syntax)] ...`

[1. `... [entity1~clnt]\ [, entity2~clnt] ...`](#ABAP_ADDITION_1@3@)

[2. `... (clnt_syntax)`](#ABAP_ADDITION_2@3@)

Generally, the addition `CLIENT SPECIFIED` can be specified in the statement `SELECT` of [queries](ABENASQL_QUERY_GLOSRY.html) in the same places as [`USING`](ABAPSELECT_CLIENT.html). This is obsolete and forbidden in [strict mode from ABAP release 7.77](ABENABAP_SQL_STRICTMODE_777.html) and whenever [global temporary tables](ABENDDIC_DATABASE_TABLES_GTT.html) are accessed. Moreover, the addition `CLIENT SPECIFIED` is not allowed when accessing [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) (for more details, see [ABAP CDS - Client Handling in CDS View Entities](ABENCDS_V2_VIEW_CLIENT_HANDLING.html)). The addition [`USING`](ABAPSELECT_CLIENT.html) should be used instead of `CLIENT SPECIFIED`.

The addition `CLIENT SPECIFIED` disables implicit ABAP SQL [client handling](ABENCLIENT_HANDLING_GLOSRY.html) for the current [query](ABENASQL_QUERY_GLOSRY.html). No implicit condition is created for the [current client](ABENCURRENT_CLIENT_GLOSRY.html) and, in the case of joins, no equality condition is created for the client columns of the client-dependent data sources involved. Instead, the [client column](ABENCLIENT_COLUMN_GLOSRY.html) of client-dependent data sources can be specified in the SQL conditions of the query used to select clients.

The addition `CLIENT SPECIFIED` is applied only to the current [query](ABENASQL_QUERY_GLOSRY.html). If multiple queries are used in a [`SELECT`](ABAPSELECT.html) statement or [`WITH`](ABAPWITH.html) statement, client handling must be examined separately for each query. More specifically, client handling in a main query is disabled separately from client handling in the subqueries used there. Unlike `USING`, `CLIENT SPECIFIED` can also be specified in the [subqueries](ABENWHERE_LOGEXP_SUBQUERY.html) of conditions `sql_cond` to achieve the same client handling as in the main query.

If `CLIENT SPECIFIED` is specified for a client-dependent [CDS entity](ABENCDS_ENTITY_GLOSRY.html), the client field is read from the database and added to the result set. The structure of a [client-dependent CDS DDIC-based view (obsolete)](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) or a [client-dependent CDS table function](ABENCDS_FUNC_CLIENT_HANDLING.html) does not have a component for the client field, which means that a client column is added to the result set here implicitly. If the client field is accessed explicitly or implicitly in the `SELECT` statement, an addition `entity~clnt` must be used to assign the field a name that can be used in the current statement.

If known statically that the data sources [`data_source`](ABAPSELECT_DATA_SOURCE.html) are not client-dependent, the addition `CLIENT SPECIFIED` must not be specified. Furthermore, the addition `CLIENT SPECIFIED` cannot be used when the following [CDS entities](ABENCDS_ENTITY_GLOSRY.html) are accessed:

The addition `CLIENT SPECIFIED` cannot be used together with the following [path expressions](ABENABAP_SQL_PATH.html):

Like the example for [`USING CLIENT`](ABAPSELECT_CLIENT.html), this example reads all customers in client 800 from a client-dependent database table, but needs an explicit `WHERE` condition to do this.

Accesses a client-dependent CDS view with the addition `CLIENT SPECIFIED`. To do this, the line type of the internal table used as a target range is defined using the addition [`CLIENT SPECIFIED`](ABAPTYPES_CLIENT_SPECIFIED.html) of the statement `TYPES`. If the addition `CLIENT SPECIFIED` of the statement `TYPES` is not used, the column `clnt` would not exist in the table `scarr_spfli_clnt` and could not be used as a target range.

The following example shows how the recommended addition [`USING ALL CLIENTS`](ABAPSELECT_CLIENT.html) is used, for which no special target area is required.

Declares the names `clnt` of the client fields of the client-dependent [CDS entities](ABENCDS_ENTITY_GLOSRY.html). If `CLIENT SPECIFIED` is used, the result set for a client-dependent CDS entity has a client field, although the structure of the entity does not have a component of this type. The declaration of a name with `entity~clnt` is necessary when accessing this type of client field explicitly or implicitly in the `SELECT` statement:

Here `entity` is the name of a client-dependent CDS entity used as a [data source](ABAPSELECT_DATA_SOURCE.html) and `clnt` is a freely definable unique name for its client column, which is valid throughout the current `SELECT` statement.

A name defined with `entity~clnt` is completely independent of the actual name of a client column in a data source of a CDS entity. It is used, for example, in a `WHERE` condition or `ON` condition to select specific clients in a CDS entity.

Like the previous example for accessing a CDS view with addition `CLIENT SPECIFIED`. In this case, a `WHERE` condition is specified for the client column. This requires a name to be defined after `CLIENT SPECIFIED`.

[CDS Views, Client Handling](ABENCDS_CLIENT_HANDL_V1_ABEXA.html)

If `(source_syntax)` is specified dynamically after [`FROM`](ABAPFROM_CLAUSE.html), a parenthesized data object `clnt_syntax` can be specified instead of a static `[entity1~clnt]\ [, entity2~clnt] ...` This data object must contain the static syntax when the statement is executed. The data object `clnt_syntax` can be a character-like data object or a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a character-like line type. The syntax in `clnt_syntax` is not case-sensitive, as in the static syntax. When an internal table is specified, the syntax can span multiple rows.

Like in the previous example for accessing a CDS view using the addition`CLIENT SPECIFIED`, but with dynamic specifications.

-   CDS entities in which an [input parameter](ABENCDS_F1_PARAM.html) is annotated with the annotation [`@Environment.systemField:#CLIENT`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html).
-   [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) and CDS DDIC-based views (obsolete) in which the view annotation [`@ClientHandling.algorithm:#SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) is specified and the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) is evaluated implicitly.
-   CDS DDIC-based views (obsolete) that use the session variable `client`.
-   CDS view entities, because the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V2.html) is always evaluated implicitly.
-   [CDS entities](ABENCDS_ENTITY_GLOSRY.html) linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html) and that are subject to [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html):

-   If the addition `CLIENT SPECIFIED` is used to access a CDS entity defined without the annotation `AccessControl.authorizationCheck:#NOT_ALLOWED` and the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) is not used in the [`FROM`](ABAPFROM_CLAUSE.html) clause, a syntax check error occurs.
-   If the addition `CLIENT SPECIFIED` is used to access a CDS entity linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html) and that is subject to CDS access control, an exception is raised.

-   Path expressions in any positions in which [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) occur whose [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is client-dependent.
-   Path expressions in the [`FROM`](ABAPFROM_CLAUSE.html) clause in which [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html) and [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) occur whose [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) is client-dependent.

-   If data is to be accessed in a different client, `CLIENT SPECIFIED` is replaced by [`USING`](ABAPSELECT_CLIENT.html), since all necessary conditions are set implicitly and accessing client-dependent CDS entities is more simple.
-   The fact that the addition `CLIENT SPECIFIED` disables implicit client handling and the addition [`USING`](ABAPSELECT_CLIENT.html) switches it is a big difference that is particularly significant when accessing client-dependent [CDS entities](ABENCDS_ENTITY_GLOSRY.html). Here, `CLIENT SPECIFIED` modifies the structure of the result set.
-   If the addition `CLIENT SPECIFIED` is specified, the client column is handled like any other column of a data source. If the client ID is then not specified in the `WHERE` condition, the selection is made across all clients. Similarly, an explicit comparison of the client columns must generally be made in the `ON` conditions of joins between client-dependent tables.
-   If the addition `CLIENT SPECIFIED` is specified without the client ID in the `WHERE` condition, the statement cannot be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). The statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   If the data source is specified dynamically after [`FROM`](ABAPFROM_CLAUSE.html), the addition `CLIENT SPECIFIED` in `SELECT` can always be specified. If no client-dependent tables or views are used, no exception is raised and the addition is ignored, except when `entity~clnt` is used to defined a static name for the client column of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html).
-   When implicit client handling is disabled for CDS entities, a suitable target area can be declared by using the addition [`CLIENT SPECIFIED`](ABAPTYPES_CLIENT_SPECIFIED.html) (also obsolete) of the statement `TYPES`.
-   [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) does not work for client-independent access. For this reason, the addition `CLIENT SPECIFIED` can only be used in accesses to CDS entities for which access control is disabled using the annotation [`AccessControl.authorizationCheck:#NOT_ALLOWED`](ABENCDS_VIEW_ANNO_V1.html) or using the addition [`WITH PRIVILEGED ACCESS`](ABAPSELECT_DATA_SOURCE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause.
-   If specified for client-independent data sources, the addition `CLIENT SPECIFIED` produces a syntax error in the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check from ABAP release 7.40, SP05 or else a syntax warning.
-   See also the associated [security note](ABENCLIENT_DEPENDENT_SCRTY.html) and the [programming guideline](ABENCLIENT_HANDLING_GUIDL.html).
-   In [obsolete](ABENABAP_SQL_CDS_OBSOLETE.html) accesses on a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) using the name of its [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html), this view is handled like a DDIC view. The existence of a client column is the only relevant aspect for client dependency and the addition `CLIENT SPECIFIED` disables implicit handling of this column. The structure type and the result set of the CDS-managed DDIC view (obsolete) of a client-dependent CDS view always have a client column. If the obsolete annotation [`@ClientDependent:false`](ABENCDS_VIEW_CLIENT_HANDLING_OBS.html) is used, the CDS-managed DDIC view (obsolete) of a client-independent CDS DDIC-based view (obsolete) can, however, also be client-dependent because the `SELECT` list of the view has a client column.
-   The addition `CLIENT SPECIFIED` is only forbidden for access to CDS DDIC-based views (obsolete) with the annotation [`@ClientHandling.algorithm:#SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) if the session variable [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) is actually used in the view in question. This is only the case here if client-dependent database tables are accessed or if client-dependent data sources are joined with client-independent data sources in outer joins.

-   Specifies the client field explicitly as a column name in a clause of the `SELECT` statement.
-   Implicit use in [`CORRESPONDING`](ABAPINTO_CLAUSE.html). If a name has not been declared for a client field, this field is ignored.
-   Implicit use in [inline declarations](ABENINLINE_DECLARATIONS.html) using [`@DATA|@FINAL(...)`](ABAPSELECT_INTO_TARGET.html) after [`INTO`](ABAPINTO_CLAUSE.html). If a name is not declared for a client field, inline declarations are not possible.

SELECT \* \\n FROM scustom CLIENT SPECIFIED \\n WHERE mandt = '800' \\n INTO TABLE @DATA(customers). TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt. \\n\\ \\nDATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY. \\n\\ \\nSELECT \* \\n FROM demo\_cds\_scarr\_spfli CLIENT SPECIFIED \\n INTO TABLE @scarr\_spfli\_clnt. DATA scarr\_spfli TYPE TABLE OF demo\_cds\_scarr\_spfli WITH EMPTY KEY. \\n\\ \\nSELECT \* \\n FROM demo\_cds\_scarr\_spfli USING ALL CLIENTS \\n INTO TABLE @scarr\_spfli. TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt. \\n\\ \\nDATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY. \\n\\ \\nSELECT \* \\n FROM demo\_cds\_scarr\_spfli \\n CLIENT SPECIFIED demo\_cds\_scarr\_spfli~client \\n WHERE client = '800' \\n INTO TABLE @scarr\_spfli\_clnt. TYPES scarr\_spfli\_clnt TYPE demo\_cds\_scarr\_spfli CLIENT SPECIFIED clnt. \\n\\ \\nDATA scarr\_spfli\_clnt TYPE TABLE OF scarr\_spfli\_clnt WITH EMPTY KEY. \\n\\ \\nDATA(source) = \`demo\_cds\_scarr\_spfli\`. \\nDATA(client) = \`client\`. \\n\\ \\nDATA(clnt\_syntax) = source && \`~\` && client. \\nDATA(cond) = client && \` = '800'\`. \\n\\ \\nSELECT \* \\n FROM (source) \\n CLIENT SPECIFIED (clnt\_syntax) \\n WHERE (cond) \\n INTO TABLE @scarr\_spfli\_clnt. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abenabap\_sql\_obsolete.html abenabap\_sql\_syntax\_obsolete.html