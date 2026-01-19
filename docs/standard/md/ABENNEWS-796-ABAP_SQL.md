---
title: "ABENNEWS-796-ABAP_SQL"
description: |
  ABENNEWS-796-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-796-ABAP_SQL.htm"
abapFile: "ABENNEWS-796-ABAP_SQL.html"
keywords: ["select", "do", "if", "data", "ABENNEWS", "796", "ABAP", "SQL"]
---

[1. Dynamic `SELECT`](#ABAP_MODIFICATION_1@4@)

[2. `ORDER BY n`](#ABAP_MODIFICATION_2@4@)

[3. `OPTIONS`](#ABAP_MODIFICATION_3@4@)

[4. `PROVIDED BY`](#ABAP_MODIFICATION_4@4@)

[5\. Syntax Warning for Replacement Objects](#ABAP_MODIFICATION_5@4@)

[6\. CDS Scalar Functions](#ABAP_MODIFICATION_6@4@)

[7\. Client Parameter in SQL Functions](#ABAP_MODIFICATION_7@4@)

The new dynamic forms of the statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html) enable fully dynamic `SELECT` statements, where all clauses except the `INTO` clause and the ABAP-specific additions can be specified in one dynamic token. The new dynamic forms can be compared to an [ADBC query](ABENADBC_QUERY.html) that is also passed as a string.

In the [column list](ABAPORDERBY_CLAUSE.html) of the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause, a literal or a host constant of an integer type is handled as the column position in the result set of the query. This feature is available since the introduction of SQL expressions in the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause with release 7.89 but was undocumented and behaved partly undefined. With release 7.95 the behavior is defined and documented.

A new addition [`OPTIONS`](ABAPSELECT_OPTIONS.html) can and should be used in front of the ABAP-specific additions [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html), [`BYPASSING BUFFER`](ABAPSELECT_BYPASSING_BUFFER.html) and [`CONNECTION`](ABAPSELECT_CONNECTION.html) at the end of the statement [`SELECT`](ABAPSELECT.html) or [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).

A new addition [`PROVIDED BY`](ABAPSELECT_DATA_SOURCE.html) to the [data source](ABAPSELECT_DATA_SOURCE.html) of the [`FROM`](ABAPFROM_CLAUSE.html) clause specifies a [logical external schema](ABENCDS_LOGICAL_SCHEMA_GLOSRY.html) in order to map a [CDS external entity](ABENCDS_EXTERNAL_ENTITY_GLOSRY.html) to an external system.

Each ABAP SQL access to a DDIC database table or a DDIC database view with a [replacement object](ABENREPLACEMENT_OBJECT_GLOSRY.html) produces a syntax check warning that can be suppressed by the pragma `##open_sql_redirect_dml[...]`. The pragma is used to highlight such accesses in the code and indicates the special rules that must be observed for them. Before release 7.96, only write accesses led to warnings.

[CDS scalar functions](ABENCDS_SCALAR_FUNCTION_GLOSRY.html) can be used as [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html) at all operand positions where expressions are allowed.

In the following built-in functions, the optional formal parameter `client` must not be used in language version ABAP for Cloud Development any more:

Only the [current client](ABENCURRENT_CLIENT_GLOSRY.html) as the default value of the parameter must be used in these functions. Passing an explicit client leads to a syntax warning and later to a syntax error.

-   [`UNIT_CONVERSION`](ABENSQL_CURR_UNIT_CONV_FUNC.html)
-   [`CURRENCY_CONVERSION`](ABENSQL_CURR_UNIT_CONV_FUNC.html)
-   [`ABAP_SYSTEM_TIMEZONE`](ABENSQL_TIMEZONE_FUNC.html)
-   [`ABAP_USER_TIMEZONE`](ABENSQL_TIMEZONE_FUNC.html)
-   [`TSTMP_TO_DATS`](ABENSQL_DATE_TIME_CONVERSIONS.html)
-   [`TSTMP_TO_TIMS`](ABENSQL_DATE_TIME_CONVERSIONS.html)
-   [`TSTMP_TO_DST`](ABENSQL_DATE_TIME_CONVERSIONS.html)
-   [`DATS_TIMS_TO_TSTMP`](ABENSQL_DATE_TIME_CONVERSIONS.html)

abenabap.html abennews.html abennews-79.html abennews-796.html