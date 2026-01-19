---
title: "ABENNEWS-816-ABAP_SQL"
description: |
  ABENNEWS-816-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-816-ABAP_SQL.htm"
abapFile: "ABENNEWS-816-ABAP_SQL.html"
keywords: ["select", "insert", "do", "if", "method", "data", "types", "internal-table", "ABENNEWS", "816", "ABAP", "SQL"]
---

[1. Dynamic `SELECT`](#ABAP_MODIFICATION_1@4@)

[2\. Connection Objects](#ABAP_MODIFICATION_2@4@)

[3\. Level-based Hierarchies](#ABAP_MODIFICATION_3@4@)

[4\. Caching of Hierarchies](#ABAP_MODIFICATION_4@4@)

[5\. Database Hints for the ABAP SQL In-Memory Engine](#ABAP_MODIFICATION_5@4@)

[6. `ORDER BY n`](#ABAP_MODIFICATION_6@4@)

[7. `OPTIONS`](#ABAP_MODIFICATION_7@4@)

[8. `PROVIDED BY`](#ABAP_MODIFICATION_8@4@)

[9\. Syntax Warning for Replacement Objects](#ABAP_MODIFICATION_9@4@)

[10\. CDS Scalar Functions](#ABAP_MODIFICATION_10@4@)

[11\. Client Parameter in SQL Functions](#ABAP_MODIFICATION_11@4@)

[12. Enhancement of `STRING_AGG` Function](#ABAP_MODIFICATION_12@4@) 

[13. Enhancement of `LTRIM` and `RTRIM` Functions](#ABAP_MODIFICATION_13@4@) 

[14\. Aggregate Functions Processed by the ABAP SQL In-Memory Engine](#ABAP_MODIFICATION_14@4@)

[15\. Binary Floating Point Types in Arithmetic Expressions](#ABAP_MODIFICATION_15@4@)

[16\. Declaring a Client Column for Client-independent Data Sources](#ABAP_MODIFICATION_16@4@)

[17. Addition `OPTIONS` for DML Statements](#ABAP_MODIFICATION_17@4@) 

[18\. Non-numeric Results in Aggregate Functions](#ABAP_MODIFICATION_18@4@)

[19\. Aggregate Functions in Hierarchy Aggregate Navigators](#ABAP_MODIFICATION_19@4@)

[20\. Spatial Functions](#ABAP_MODIFICATION_20@4@)

[21\. New Spatial Functions](#ABAP_MODIFICATION_21@4@)

[22. `DISTINCT` in `OVER` Clause](#ABAP_MODIFICATION_22@4@) 

[23. Enhancement of `LPAD` and `RPAD` Functions](#ABAP_MODIFICATION_23@4@) 

[24. `HIERARCHY_COMPOSITE_ID`](#ABAP_MODIFICATION_24@4@)

[25\. New Aggregate Spatial Functions](#ABAP_MODIFICATION_25@4@)

[26. New SQL Functions `GREATEST` and `LEAST`](#ABAP_MODIFICATION_26@4@)

The new dynamic forms of the statements [`WITH`](ABAPWITH.html) enable fully dynamic `SELECT` statements, where all clauses except the `INTO` clause and the ABAP-specific additions can be specified in one dynamic token.

An [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) implementing the interface [`IF_ABAP_SQL_CONNECTION`](ABENIF_ABAP_SQL_CONNECTION.html) represents a [database connection](ABENDATABASE_CONNECTION_GLOSRY.html) that can be used behind the `CONNECTION` addition of ABAP SQL statements. Connection objects enable using [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

A new variant of the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) uses the addition [`LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html) in order to generate [level-based hierarchies](ABENLEVEL_BASED_HIERA_GLOSRY.html). These allow access to hierarchical data in data sources that are defined by level columns.

In contrast, the former variant of `HIERARCHY` uses the addition [`CHILD TO PARENT ASSOCIATION`](ABENSELECT_HIERARCHY_GEN_ASSOC.html) in order to generate [parent-child-based hierarchies](ABENPC_BASED_HIERA_GLOSRY.html) from [parent-child relationships](ABENPCR_GLOSRY.html).

The new addition `CACHE` for [`SELECT, FROM HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) allows the caching policy to be defined for hierarchies.

Behind the addition [`%_HINTS`](ABENABAP_SQL_DB_HINTS.html), the database system `ABAP` can now be specified for listing [database hints](ABENDATABASE_HINT_GLOSRY.html) for the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html). These database are documented under [ABAP SQL In-Memory Engine, Database Hints](ABENSQL_ENGINE_DBHINTS.html). In the current release, there are not yet any hints available for the ABAP SQL in-memory engine.

In the [column list](ABAPORDERBY_CLAUSE.html) of the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause, a literal or a host constant of an integer type is handled as the column position in the result set of the query. This feature is available since the introduction of SQL expressions in the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause with release 7.57 but was undocumented and behaved partly undefined. With release 8.16 the behavior is defined and documented.

A new addition [`OPTIONS`](ABAPSELECT_OPTIONS.html) can and should be used in front of the ABAP-specific additions [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html), [`BYPASSING BUFFER`](ABAPSELECT_BYPASSING_BUFFER.html) at the end of the statement2 [`SELECT`](ABAPSELECT.html), [`WITH`](ABAPWITH.html).

A new addition [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html) to the [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM`](ABAPFROM_CLAUSE.html) clause specifies a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) in order to map a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) to an external system.

Each ABAP SQL access to a DDIC database table or a DDIC database view with a [replacement object](ABENREPLACEMENT_OBJECT_GLOSRY.html) produces a syntax check warning that can be suppressed by the pragma `##open_sql_redirect_dml[...]`. The pragma is used to highlight such accesses in the code and indicates the special rules that must be observed for them. Before release 8.16, only write accesses led to warnings.

[CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) can be used as [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html) at all operand positions where expressions are allowed.

In the following built-in functions, the optional formal parameter `client` must not be used in language version ABAP for Cloud Development any more:

Only the [current client](ABENCURRENT_CLIENT_GLOSRY.html) as the default value of the parameter must be used in these functions. Passing an explicit client leads to a syntax warning and later to a syntax error.

The optional separator `sep` of the [`STRING_AGG` function](ABENSQL_AGG_FUNC.html) can now be a host variable.

The character `char` of the [`LTRIM`](ABENSQL_STRING_FUNC.html) and [`RTRIM`](ABENSQL_STRING_FUNC.html) functions can now be a host variable or an SQL expression. Additionally, the length of `char` can be other than 1.

The [aggregate functions](ABENSQL_AGG_FUNC.html)\\ `MIN`, `MAX`, and `SUM` can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) in the [`SELECT`](ABAPSELECT_LIST.html) list now. They no longer bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) and do not cause the transport of an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) to the database.

Operands of type `FLTP` or `f` can now be used in a [decimal floating point expression](ABENSQL_ARITH.html) and integer types can be used in a [binary floating expression](ABENSQL_ARITH.html).

The addition [`DECLARE CLIENT`](ABAPSELECT_DECLARE_CLIENT.html) in the [`FROM` clause](ABAPFROM_CLAUSE.html) of an ABAP SQL query declares a column of a [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html) data source as a client column and the data source as client-dependent during the current access. Implicit client handling takes place.

The addition `OPTIONS` can now also be used for DML statements to introduce ABAP-specific additions.

The result of the aggregate functions [`MIN`](ABENSQL_AGG_FUNC.html) and [`MAX`](ABENSQL_AGG_FUNC.html) can now be non-numeric for [window expressions](ABAPSELECT_OVER.html) and [hierarchy aggregate navigators](ABENSELECT_HIERARCHY_DESC_AGG.html).

The aggregate function [`AVG`](ABENSQL_AGG_FUNC.html) can now be used for the hierarchy aggregate navigator [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) if a `JOIN` condition is not defined and for the hierarchy aggregate navigator [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html).

SAP HANA constructors, methods, and functions for accessing and manipulating spatial data are now available as [functions](ABENSQL_SPATIAL_FUNC.html) in ABAP SQL.

The following [spatial functions](ABENSQL_SPATIAL_FUNC.html) are now available:

The addition `DISTINCT` is now allowed for the aggregate function `COUNT` in a [window expression](ABENSQL_WIN_FUNC.html).

The length `len` of the [`LPAD`](ABENSQL_STRING_FUNC.html) and [`RPAD`](ABENSQL_STRING_FUNC.html) functions can now be a host variable or an SQL expression. Additionally, the length of `len` can be less than 1 and greater than 1333. Both functions can produce the result type `SSTRING` with an undefined length.

The function [`HIERARCHY_COMPOSITE_ID`](ABENSQL_HIERARCHY_COMP_ID.html) can be used to generate composite node identifiers free of name clashes.

The following [aggregate spatial functions](ABENSQL_SPATIAL_FUNC_A.html) are now available:

The SQL functions [`GREATEST`](ABENSQL_ARITH_FUNC.html) and [`LEAST`](ABENSQL_ARITH_FUNC.html) are now available. These functions determine the largest and smallest value of a set of arguments.

-   [`UNIT_CONVERSION`](ABENSQL_CURR_UNIT_CONV_FUNC.html)
-   [`CURRENCY_CONVERSION`](ABENSQL_CURR_UNIT_CONV_FUNC.html)
-   [`ABAP_SYSTEM_TIMEZONE`](ABENSQL_TIMEZONE_FUNC.html)
-   [`ABAP_USER_TIMEZONE`](ABENSQL_TIMEZONE_FUNC.html)
-   [`TSTMP_TO_DATS`](ABENSQL_DATE_TIME_CONVERSIONS.html)
-   [`TSTMP_TO_TIMS`](ABENSQL_DATE_TIME_CONVERSIONS.html)
-   [`TSTMP_TO_DST`](ABENSQL_DATE_TIME_CONVERSIONS.html)
-   [`DATS_TIMS_TO_TSTMP`](ABENSQL_DATE_TIME_CONVERSIONS.html)

-   It can be used as [`OPTIONS`](ABAPIUMD_OPTIONS.html) for the DML statement itself.
-   It can be used for [subqueries](ABAPINSERT_FROM_SELECT.html) of DML statements.

-   `ST_3DLENGTH`
-   `ST_ASMVTGEOM`
-   `ST_BUFFER`
-   `ST_CLOSESTPOINTOFAPPROACH`
-   `ST_FRECHETDISTANCE`
-   `ST_INTERIORRINGN`
-   `ST_ISVALIDTRAJECTORY`
-   `ST_MAKEPOLYGON`
-   `ST_NEW_POINTM`
-   `ST_NEW_POINTZ`
-   `ST_NEW_POINTZM`
-   `ST_REMOVEPOINT`
-   `ST_REVERSE`
-   `ST_TOUCHES`
-   `ST_WITHIN`

-   `ST_ALPHASHAPEAGGR`
-   `ST_ALPHASHAPEAREAAGGR`
-   `ST_ASESRIJSON_MULTICOLUMN`
-   `ST_ASGEOJSON_MULTICOLUMN`
-   `ST_ASMVT`
-   `ST_ASSVGAGGR`
-   `ST_COLLECTAGGR`
-   `ST_CONCAVEHULLAGGR`
-   `ST_CONVEXHULLAGGR`
-   `ST_ENVELOPEAGGR`
-   `ST_INTERSECTIONAGGR`
-   `ST_UNIONAGGR`

abenabap.html abennews.html abennews-81.html abennews-816.html