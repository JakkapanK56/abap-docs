---
title: "In queries, both"
description: |
  can be specified as data sources(ABAPSELECT_DATA_SOURCE.html). Accessing hierarchy data triggers the strict mode from ABAP release 7.73(ABENABAP_SQL_STRICTMODE_773.html). The relational expression `IS NOT INITIAL`(ABENWHERE_LOGEXP_INITIAL.html) can now be used in a condition `sql_cond`(ABE
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-753-ABAP_SQL.htm"
abapFile: "ABENNEWS-753-ABAP_SQL.html"
keywords: ["select", "insert", "update", "do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENNEWS", "753", "ABAP", "SQL"]
---

[1\. Open SQL Renamed as ABAP SQL](#ABAP_MODIFICATION_1@4@)

[2\. Access to Hierarchy Data](#ABAP_MODIFICATION_2@4@)

[3. Relational Expression `IS INITIAL`](#ABAP_MODIFICATION_3@4@)

[4\. Date/Time Functions](#ABAP_MODIFICATION_4@4@)

[5\. Exposing CDS Associations of Common Table Expressions](#ABAP_MODIFICATION_5@4@)

[6. Numeric Literals in the `SELECT` List](#ABAP_MODIFICATION_6@4@) 

[7\. Enhanced Cast Matrix](#ABAP_MODIFICATION_7@4@)

[8. Subquery as Data Source of `MODIFY`](#ABAP_MODIFICATION_8@4@)

[9\. Null Values in the Table Buffer](#ABAP_MODIFICATION_9@4@)

[10\. Restrictions Removed](#ABAP_MODIFICATION_10@4@)

[11\. New Check](#ABAP_MODIFICATION_11@4@)

[12. `GROUP BY` Addition `GROUPING SETS`](#ABAP_MODIFICATION_12@4@)

[13. Aggregate Function `GROUPING`](#ABAP_MODIFICATION_13@4@)

[14\. Secondary Connections](#ABAP_MODIFICATION_14@4@)

[15. `USING CLIENT` and Session Variable `client`](#ABAP_MODIFICATION_15@4@)

[16. Client Handling in Subquery of the Statement `INSERT`](#ABAP_MODIFICATION_16@4@)

[17\. Replacement Service in Program Calls](#ABAP_MODIFICATION_17@4@)

[18\. Weaker Check](#ABAP_MODIFICATION_18@4@)

[19\. Stricter Checks on Syntax Rules](#ABAP_MODIFICATION_19@4@)

The existing name Open SQL has been changed to [ABAP SQL](ABENABAP_SQL_GLOSRY.html). This renaming reflects that some parts of ABAP SQL now only support certain database platforms, specifically [SAP HANA database](ABENNEWS-753-DB.html), and hence that it is no longer fully platform-independent.

In queries, both

can be specified as [data sources](ABAPSELECT_DATA_SOURCE.html). Accessing hierarchy data triggers the [strict mode from ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html).

The relational expression [`IS [NOT] INITIAL`](ABENWHERE_LOGEXP_INITIAL.html) can now be used in a condition [`sql_cond`](ABENASQL_COND.html) to compare operands with their type-dependent initial value.

When used, this expression leads to the [strict mode from ABAP release 7.72](ABENABAP_SQL_STRICTMODE_772.html).

ABAP SQL now supports the following new date/time functions:

When used, these functions require the [strict mode from ABAP release 7.71](ABENABAP_SQL_STRICTMODE_771.html).

When [CDS views](ABENCDS_VIEW_GLOSRY.html) are accessed within a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html), the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html) of the statement [`WITH`](ABAPWITH.html) can now be used to publish [associations](ABENCDS_ASSOCIATION_GLOSRY.html) of these views for use in [path expressions](ABENABAP_SQL_PATH.html) of the current `WITH` statement. The addition `REDIRECTED TO` can also be used to replace the target data source of the published association with a previous CTE or the current CTE.

When used, this addition leads to the [strict mode from ABAP release 7.72](ABENABAP_SQL_STRICTMODE_772.html).

Until now, only those [numeric literals](ABENNUMERIC_LITERAL_GLOSRY.html) whose value matched the value range of the type [`INT4`](ABENDDIC_BUILTIN_TYPES.html) could be specified as [elementary SQL expressions](ABENSQL_ELEM.html) in the [`SELECT` list](ABAPSELECT_LIST.html) of a query. Now numeric literals of up to 31 digits can be specified, which are interpreted as numbers of the type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) if the value range of `INT4` is exceeded.

A [cast expression](ABENSQL_CAST.html) can now be used to convert the data types `INT1`, `INT2`, `INT4`, and `INT8` to `DEC`.

In the ABAP SQL write statement [`MODIFY`](ABAPMODIFY_DBTAB.html), a parenthesized subquery [`SELECT subquery_clauses`](ABAPINSERT_SOURCE.html) can now be specified as a data source after `FROM`. The rows of the results set of the subquery are modified or inserted in the target table directly on the database. No data transport is required between the database and AS ABAP. When used in `MODIFY`, a subquery demands [strict mode from ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html).

The [table buffer](ABENTABLE_BUFFER_GLOSRY.html) now supports real [null values](ABENNULL_VALUE_GLOSRY.html). In [table buffering](ABENTABLE_BUFFERING_GLOSRY.html), null values are no longer transformed to type-dependent initial values. When the buffer is accessed, the same results are produced as when the database is accessed directly. The corresponding restrictions now no longer apply. The following are some of the aspects affected:

The following restrictions were removed:

If the data of the [internal table](ABAPSELECT_ITAB.html) needs to be transported to the database in cases where the internal table is used as a [data source](ABAPSELECT_DATA_SOURCE.html) of the ABAP SQL statement [`SELECT`](ABAPSELECT.html), a syntax check warning occurs that can be hidden using the pragma `##itab_db_select`.

In a [`SELECT`](ABAPSELECT.html) statement, the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html) can now be used. The addition `GROUPING SETS` makes it possible to group multiple grouping sets under one `GROUP BY` clause. This is the same as specifying [`UNION ALL`](ABAPUNION.html) with different `GROUP BY` clauses. The addition `GROUPING SETS` has an advantage over a `UNION` clause grouping because the `SELECT` clause only needs to be specified once.

Using `GROUPING SETS` triggers [strict mode from ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html).

The aggregate function [`GROUPING`](ABENGROUPING_FUNCTION.html) can now be used in a [`SELECT`](ABAPSELECT.html) statement. The grouping function `GROUPING` can be used to verify whether a specific column is part of the [aggregation](ABENAGGREGATE_EXPRESSION_GLOSRY.html). The grouping function can be used only if the [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause contains the addition [`GROUPING SETS`](ABAPGROUPING_SETS_CLAUSE.html).

On an AS ABAP with a [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) as its [standard database](ABENSTANDARD_DB_GLOSRY.html), only those [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) should be used from the database table `DBCON` whose [secondary database](ABENSECONDARY_DB_GLOSRY.html) is also a SAP HANA database. Alongside the `CONNECTION` addition in ABAP SQL, this also applies to Native SQL (ADBC and `EXEC SQL`).

[SAP HANA Smart Data Access (SDA)](ABENSAP_HANA_SDA_GLOSRY.html) should be used instead. In SDA, secondary databases are addressed from the SAP HANA database using special qualified names or by using virtual tables. If a SAP HANA database is used as a standard AS ABAP database, ABAP programs can use these names across the standard connection. This is only possible in AMDP and Native SQL. Database Shared Libraries (DBSL) are no longer required here.

In an ABAP SQL read in which multiple [queries](ABENASQL_QUERY_GLOSRY.html) access client-specific [CDS views](ABENCDS_VIEW_GLOSRY.html) and the client handling method is defined using the annotation [`@ClientHandling.algorithm:#SESSION_VARIABLE`](ABENCDS_VIEW_CLIENT_HANDLING_V1.html), the [session variable](ABENCDS_SESSION_VARIABLE_V1.html)\\ `client` (which corresponds to the [ABAP-specific session variable](ABENHANA_SESSION_VARIABLES.html)\\ `CDS_CLIENT` on the SAP HANA database) must be set to the same value in all of these queries. The runtime error `SAPSQL_DIFFERENT_CLIENT_VALUES` occurs if [`USING CLIENT`](ABAPSELECT_CLIENT.html) is used to specify a different client ID in one of these queries. This situation can occur in the statement [`WITH`](ABAPWITH.html) or when using [`UNION`](ABAPUNION.html).

The addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) of the statement [`INSERT`](ABAPINSERT_DBTAB.html) can now be specified in a [subquery](ABAPINSERT_FROM_SELECT.html). This means that the client specified for the target table of the insert operation can be different from the client specified for the data source of the subquery.

If `USING CLIENT` is not specified in the subquery, the current client ID is now always applied to automatic client handling. Before ABAP release 7.73, the client ID specified after `INSERT` using [`USING CLIENT`](ABAPIUMD_TARGET.html) was also used in the subquery.

The `FROM` clause of the subquery can now access the database table or classic view filled using the `INSERT` statement. This makes it possible to copy the data from one client to another.

In the subquery, using `USING CLIENT` or accessing the database table or classic view filled by the `INSERT` statement enables [strict mode from ABAP release 7.73](ABENABAP_SQL_STRICTMODE_773.html).

The method `ACTIVATE_REPLACEMENT` of the class [`CL_OSQL_REPLACE`](ABENCL_OSQL_REPLACE.html) has the new parameter `FLG_SURVIVE_SUBMIT`, which now also permits redirections in called programs.

ABAP SQL statements that exploit a database property not supported by all database platforms no longer produce a syntax check warning and produce a syntax warning in the [extended program checks](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html) instead.

A violation of the following rules now always produces a syntax error. In the [strict modes](ABENABAP_SQL_STRICT_MODES.html) of the syntax check, these violations already produced a syntax error. Outside the strict modes, they produced a syntax check warning and in most cases a runtime error when the program was executed.

-   [hierarchies](ABENSELECT_HIERARCHY.html) and
-   [hierarchy navigators](ABENSELECT_HIERARCHY_NAVIGATORS.html)

-   [Time functions](ABENSQL_TIME_FUNC.html)

-   `TIMS_IS_VALID`

-   [Time stamp functions](ABENSQL_TIMESTAMP_FUNC.html)

-   `TSTMP_IS_VALID`
-   `TSTMP_CURRENT_UTCTIMESTAMP`
-   `TSTMP_SECONDS_BETWEEN`
-   `TSTMP_ADD_SECONDS`

-   [Date/time conversions](ABENSQL_DATE_TIME_CONVERSIONS.html)

-   `TSTMP_TO_DATS`
-   `TSTMP_TO_TIMS`
-   `TSTMP_TO_DST`
-   `DATS_TIMS_TO_TSTMP`

-   [Time zone functions](ABENSQL_TIMEZONE_FUNC.html)

-   `ABAP_SYSTEM_TIMEZONE`
-   `ABAP_USER_TIMEZONE`

-   [Relational expressions](ABENASQL_COND.html) with operands that contain null values. The result of a comparison of this type is now also unknown when the comparison is made in the buffer (except in the expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html)).
-   If used, [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) no longer bypasses table buffering.
-   Accesses to [buffered CDS views](ABENCDS_V1_BUFFERING.html). When the buffer is accessed, the same results are now produced as when the database is accessed directly. Null values are often produced by [outer joins](ABENCDS_JOINED_DATA_SOURCE_V1.html) or in expressions such as [case distinction](ABENCDS_CASE_EXPRESSION_V1.html) expressions. The restriction specifying that only those CDS views are buffered whose elements do not contain [null values](ABENNULL_VALUE_GLOSRY.html) no longer applies.

-   For [certain SQL expressions and functions](ABENSQL_ENGINE_EXPR.html), an ABAP SQL read statement no longer bypasses [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).
-   ABAP SQL read statements no longer bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) in cases where a column is specified on the right side of [comparisons](ABENWHERE_LOGEXP_COMPARE.html) or of [`BETWEEN`](ABENWHERE_LOGEXP_INTERVAL.html) in a [condition](ABENASQL_COND.html) that is not required to identify a single row or a generic range. The prerequisite for this is that both operands are numeric but do not have the type `DF16_DEC` or `DF34_DEC`, that both operands are character-like, or that both operands have the type `RAW` with the same lengths.

-   When a view is accessed, its key fields must be located together at the start.
-   The additions [`USING CLIENT`](ABAPSELECT_CLIENT.html) and [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) cannot be used when a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed that is associated with a [CDS role](ABENCDS_ROLE_GLOSRY.html).
-   Even when using [path expressions](ABENABAP_SQL_PATH.html), the addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT.html) can only be used for client-specific data sources.
-   When a [column is specified](ABENABAP_SQL_COLUMNS.html), the actual names of the components must be used for a database table containing an [include structure](ABENDDIC_INCLUDE_STRUCTURE.html), and not the names of any groups defined in ABAP Dictionary.
-   An alternative column name of the [`SELECT`](ABAPSELECT_LIST.html) list defined using `AS` can have a maximum of 30 characters. Alternative column names with more than 30 characters are also not allowed after [`ORDER BY`](ABAPORDERBY_CLAUSE.html).
-   Columns of the types `LCHR` and `LRAW` can be read in a query only if they are read together with the associated length fields.
-   The following applies when using [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) in the `SELECT` statement:

-   The decimal places in the comparisons between columns of a data source and columns of the internal table of type `p` must match.
-   All columns of the primary key specified after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) using `PRIMARY KEY` must also occur in the [`SELECT`](ABAPSELECT_LIST.html) list.
-   The pseudo component `table_line` can be specified only for internal tables with an elementary row type.

-   A [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) grouping must be applied to columns specified after [`HAVING`](ABAPHAVING_CLAUSE.html) outside aggregate functions. The same applies to columns specified directly in the [`SELECT` list](ABAPSELECT_LIST.html) when a `HAVING` clause is specified, but that are not specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html).
-   If a [`SELECT` list](ABAPSELECT_LIST.html) is specified as `*`, a [`HAVING`](ABAPHAVING_CLAUSE.html) clause can only be used together with a [`GROUP BY` clause](ABAPGROUPBY_CLAUSE.html).
-   If an [alternative name](ABAPSELECT_LIST.html) is used after [`ORDER BY`](ABAPORDERBY_CLAUSE.html), this name must be unique and cannot be the same name as a column that does not have any alternative names.
-   A work area `wa` specified in the [`INTO`](ABAPINTO_CLAUSE.html) clause has fewer components than explicit columns in the [`SELECT`](ABAPSELECT_LIST.html) list.
-   A column specified explicitly in the [`SELECT`](ABAPSELECT_LIST.html) list cannot be [assigned](ABENSELECT_INTO_CONVERSION.html) to the associated component of a structured work area `wa` specified in the [`INTO`](ABAPINTO_CLAUSE.html) clause or to a data object `dobj` specified in a parenthesized comma-separated list.
-   No [character literals](ABENCHARACTER_LITERAL_GLOSRY.html) or [constants](ABENCONSTANT_GLOSRY.html) can be specified on the right side of [`LIKE`](ABENWHERE_LOGEXP_LIKE.html) that are more than twice as long as the left side.
-   The statements [`UPDATE FROM`](ABAPUPDATE.html) or [`MODIFY FROM`](ABAPMODIFY_DBTAB.html) are used to access a [projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html) in which all fields are key fields.
-   A reference that is too general is specified in the statements [`INSERT FROM`](ABAPINSERT_DBTAB.html), [`UPDATE FROM`](ABAPUPDATE.html), or [`MODIFY FROM`](ABAPMODIFY_DBTAB.html) when a [writer stream](ABENABAP_SQL_STREAMING.html) is created.
-   In the statement [`UPDATE`](ABAPUPDATE.html), a column can occur only on the left side of a single [update expression](ABAPUPDATE_SET_EXPRESSION.html).

abenabap.html abennews.html abennews-75.html abennews-753.html