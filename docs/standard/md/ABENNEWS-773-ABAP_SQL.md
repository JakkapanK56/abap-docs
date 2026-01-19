---
title: "In queries, both"
description: |
  can be specified as data sources(ABAPSELECT_DATA_SOURCE.html). Accessing hierarchy data triggers the strict mode from ABAP release 7.73(ABENABAP_SQL_STRICTMODE_773.html). In the ABAP SQL write statement `MODIFY`(ABAPMODIFY_DBTAB.html), a parenthesized subquery `SELECT subquery_clauses`(ABAPI
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-773-ABAP_SQL.htm"
abapFile: "ABENNEWS-773-ABAP_SQL.html"
keywords: ["select", "insert", "update", "do", "if", "case", "method", "data", "types", "internal-table", "ABENNEWS", "773", "ABAP", "SQL"]
---

[1\. Access to Hierarchy Data](#ABAP_MODIFICATION_1@4@)

[2. Subquery as Data Source of `MODIFY`](#ABAP_MODIFICATION_2@4@)

[3. `GROUP BY` Addition `GROUPING SETS`](#ABAP_MODIFICATION_3@4@)

[4. Aggregate Function `GROUPING`](#ABAP_MODIFICATION_4@4@)

[5\. Open SQL Renamed as ABAP SQL](#ABAP_MODIFICATION_5@4@)

[6. `USING CLIENT` and Session Variable `client`](#ABAP_MODIFICATION_6@4@)

[7. Client Handling in Subquery of the Statement `INSERT`](#ABAP_MODIFICATION_7@4@)

[8\. Secondary Connections](#ABAP_MODIFICATION_8@4@)

[9\. Stricter Checks on Syntax Rules](#ABAP_MODIFICATION_9@4@)

In queries, both

can be specified as [data sources](ABAPSELECT_DATA_SOURCE.html). Accessing hierarchy data triggers the [strict mode from ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html).

In the ABAP SQL write statement [`MODIFY`](ABAPMODIFY_DBTAB.html), a parenthesized subquery [`SELECT subquery_clauses`](ABAPINSERT_SOURCE.html) can now be specified as a data source after `FROM`. The rows of the result set of the subquery are modified or inserted in the target table directly on the database. No data transport is required between the database and AS ABAP. When used in `MODIFY`, a subquery demands [strict mode from ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html).

In a [`SELECT`](ABAPSELECT.html) statement, the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html) can now be used. The addition `GROUPING SETS` makes it possible to group multiple grouping sets under one `GROUP BY` clause. This is the same as specifying [`UNION ALL`](ABAPUNION.html) with different `GROUP BY` clauses. The addition `GROUPING SETS` has an advantage over a `UNION` clause grouping because the `SELECT` clause only needs to be specified once.

Using `GROUPING SETS` triggers [strict mode from ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html).

The aggregate function [`GROUPING`](ABENGROUPING_FUNCTION.html) can now be used in a [`SELECT`](ABAPSELECT.html) statement. The grouping function `GROUPING` can be used to verify whether a specific column is part of the [aggregation](ABENAGGREGATE_EXPRESSION_GLOSRY.html). The grouping function can be used only if the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause contains the addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html).

The existing name [Open SQL](ABENOPEN_SQL_GLOSRY.html) was changed to [ABAP SQL](ABENABAP_SQL_GLOSRY.html). This renaming reflects that some parts of ABAP SQL now only support certain database platforms, specifically [SAP HANA database](ABENNEWS-773-DB.html), and hence that it is no longer fully platform-independent.

In an ABAP SQL read in which multiple [queries](ABENASQL_QUERY_GLOSRY.html) access client-dependent [CDS views](ABENCDS_VIEW_GLOSRY.html) and the client handling method is defined using the annotation [`@ClientHandling.algorithm:#SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html), the [session variable](ABENCDS_SESSION_VARIABLE_V1.html)\\ `client` (which corresponds to the [ABAP-specific session variable](ABENHANA_SESSION_VARIABLES.html)\\ `CDS_CLIENT` on the SAP HANA database) must be set to the same value in all of these queries. The runtime error `SAPSQL_DIFFERENT_CLIENT_VALUES` occurs if [`USING CLIENT`](ABAPSELECT_CLIENT.html) is used to specify a different client ID in one of these queries. This situation can occur in the statement [`WITH`](ABAPWITH.html) or when using [`UNION`](ABAPUNION.html).

The addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) of the statement [`INSERT`](ABAPINSERT_DBTAB.html) can now be specified in a [subquery](ABAPINSERT_FROM_SELECT.html). This means that the client specified for the target table of the insert operation can be different from the client specified for the data source of the subquery.

If `USING CLIENT` is not specified in the subquery, the current client ID is now always applied to [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html). Before ABAP release 7.73, the client ID specified after `INSERT` using [`USING CLIENT`](ABAPIUMD_TARGET.html) was also used in the subquery.

The `FROM` clause of the subquery can now access the database table or DDIC table view filled using the `INSERT` statement. This makes it possible to copy the data from one client to another.

In the subquery, using `USING CLIENT` or accessing the database table or DDIC view filled by the `INSERT` statement enables [strict mode from ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html).

On an AS ABAP with a [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as its [standard database](ABENSTANDARD_DB_GLOSRY.html), only those [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) should be used from the database table `DBCON` whose [secondary database](ABENSECONDARY_DB_GLOSRY.html) is also a SAP HANA database. Alongside the `CONNECTION` addition in ABAP SQL, this also applies to Native SQL (ADBC and `EXEC SQL`).

[SAP HANA Smart Data Access (SDA)](ABENSAP_HANA_SDA_GLOSRY.html) should be used instead. In SDA, secondary databases are addressed from the SAP HANA database using special qualified names or by using virtual tables. If a SAP HANA database is used as a standard AS ABAP database, ABAP programs can use these names across the standard connection. This is only possible in AMDP and Native SQL. Database Shared Libraries (DBSL) are no longer required here.

A violation of the following rules now always produces a syntax error. In the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check, these violations already produced a syntax error. Outside the strict modes, they produced a syntax check warning and in most cases a runtime error when the program was executed.

-   [hierarchies](ABENSELECT_HIERARCHY.html) and
-   [hierarchy node navigators](ABENSELECT_HIERARCHY_NODE_NAVIS.html)

-   When a view is accessed, its key fields must be located together at the start.
-   The additions [`USING CLIENT`](ABAPSELECT_CLIENT.html) and [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) cannot be used when a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed that is linked with a [CDS role](ABENCDS_ROLE_GLOSRY.html).
-   Even when using [path expressions](ABENABAP_SQL_PATH.html), the addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) can only be used for client-dependent data sources.
-   When a [column is specified](ABENABAP_SQL_COLUMNS.html), the actual names of the components must be used for a database table containing an [include structure](ABENDDIC_INCLUDE_STRUCTURE.html), and not the names of any groups defined in ABAP Dictionary.
-   An alias name of the [`SELECT`](ABAPSELECT_LIST.html) list defined using `AS` can have a maximum of 30 characters. Alias names with more than 30 characters are also not allowed after [`ORDER BY`](ABAPORDERBY_CLAUSE.html).
-   Columns of the types `LCHR` and `LRAW` can be read in a query only if they are read together with the associated length fields.
-   The following applies when using [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) in the `SELECT` statement:

-   The decimal places in the comparisons between columns of a data source and columns of the internal table of type `p` must match.
-   All columns of the primary key specified after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) using `PRIMARY KEY` must also occur in the [`SELECT`](ABAPSELECT_LIST.html) list.
-   The pseudo component `table_line` can be specified only for internal tables with an elementary row type.

-   A [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) grouping must be applied to columns specified after [`HAVING`](ABAPHAVING_CLAUSE.html) outside aggregate functions. The same applies to columns specified directly in the [`SELECT` list](ABAPSELECT_LIST.html) when a `HAVING` clause is specified, but that are not specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html).
-   If a [`SELECT` list](ABAPSELECT_LIST.html) is specified as `*`, a [`HAVING`](ABAPHAVING_CLAUSE.html) clause can only be used together with a [`GROUP BY` clause](ABAPGROUPBY_CLAUSE.html).
-   If an [alias name](ABAPSELECT_LIST.html) is used after [`ORDER BY`](ABAPORDERBY_CLAUSE.html), this name must be unique and cannot be the same name as a column that does not have an alias name.
-   A work area `wa` specified in the [`INTO`](ABAPINTO_CLAUSE.html) clause has fewer components than explicit columns in the [`SELECT`](ABAPSELECT_LIST.html) list.
-   A column specified explicitly in the [`SELECT`](ABAPSELECT_LIST.html) list cannot be [assigned](ABENSELECT_INTO_CONVERSION.html) to the associated component of a structured work area `wa` specified in the [`INTO`](ABAPINTO_CLAUSE.html) clause or to a data object `dobj` specified in a parenthesized comma-separated list.
-   No [character literals](ABENCHARACTER_LITERAL_GLOSRY.html) or [constants](ABENCONSTANT_GLOSRY.html) can be specified on the right side of [`LIKE`](ABENWHERE_LOGEXP_LIKE.html) that are more than twice as long as the left side.
-   The statements [`UPDATE FROM`](ABAPUPDATE.html) or [`MODIFY FROM`](ABAPMODIFY_DBTAB.html) are used to access a [DDIC projection view](ABENDDIC_PROJ_VIEW_GLOSRY.html) in which all fields are key fields.
-   A reference that is too general is specified in the statements [`INSERT FROM`](ABAPINSERT_DBTAB.html), [`UPDATE FROM`](ABAPUPDATE.html), or [`MODIFY FROM`](ABAPMODIFY_DBTAB.html) when a [writer stream](ABENABAP_SQL_STREAMING.html) is created.
-   In the statement [`UPDATE`](ABAPUPDATE.html), a column can occur only on the left side of a single [update expression](ABAPUPDATE_SET_EXPRESSION.html).

abenabap.html abennews.html abennews-77.html abennews-773.html