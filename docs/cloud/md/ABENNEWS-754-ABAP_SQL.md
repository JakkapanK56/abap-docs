---
title: "ABENNEWS-754-ABAP_SQL"
description: |
  ABENNEWS-754-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-754-ABAP_SQL.htm"
abapFile: "ABENNEWS-754-ABAP_SQL.html"
keywords: ["select", "do", "if", "case", "data", "types", "ABENNEWS", "754", "ABAP", "SQL"]
---

[1. Extensions of the `INTO` Clause](#ABAP_MODIFICATION_1@4@) 

[2\. Definition of Associations](#ABAP_MODIFICATION_2@4@)

[3. New Aggregate Function `STRING_AGG`](#ABAP_MODIFICATION_3@4@)

[4. Addition `DISTINCT` Optional in Aggregate Function `COUNT`](#ABAP_MODIFICATION_4@4@)

[5\. Window Expressions](#ABAP_MODIFICATION_5@4@)

[6\. Temporal SQL Hierarchies](#ABAP_MODIFICATION_6@4@)

[7\. Hierarchy Navigators](#ABAP_MODIFICATION_7@4@)

[8\. Aggregate Expressions in SQL Expressions](#ABAP_MODIFICATION_8@4@)

[9. Extension of the `CAST` Matrix](#ABAP_MODIFICATION_9@4@) 

[10\. Extension of Arithmetic Expressions](#ABAP_MODIFICATION_10@4@)

[11\. Syntax Check for Literals and Host Constants](#ABAP_MODIFICATION_11@4@)

[12\. SQL Conditions](#ABAP_MODIFICATION_12@4@)

[13\. New Window Functions](#ABAP_MODIFICATION_13@4@)

[14\. New Built-In Functions](#ABAP_MODIFICATION_14@4@)

The [`INTO` clause](ABAPINTO_CLAUSE.html) has been extended as follows:

When associations of a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) are published using the addition [`WITH ASSOCIATIONS`](ABAPWITH_ASSOCIATIONS.html), new [CTE associations](ABENCTE_ASSOCIATION_GLOSRY.html) can be defined by specifying [`JOIN TO ONE|MANY`](ABAPWITH_ASSOCIATIONS_DEFINING.html). These CTE associations can be used in the subsequent queries of the current [`WITH`](ABAPWITH.html) statement, either in [path expressions](ABENABAP_SQL_PATH.html) or as [hierarchy associations](ABENHIERARCHY_ASSOCIATION_GLOSRY.html) in the [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html).

Definitions of associations require strict mode from ABAP release 7.74.

The new aggregate function [`STRING_AGG`](ABAPSELECT_AGGREGATE.html) can be used to chain character-like results of the rows of the results set of a query or of the current group as a string.

The aggregate function [`COUNT( sql_exp )`](ABAPSELECT_AGGREGATE.html) can now be used without the addition `DISTINCT`. In this case, it counts all rows in which the value of the argument is not the [null value](ABENNULL_VALUE_GLOSRY.html).

Window expressions defined using [`OVER`](ABAPSELECT_OVER.html) can now be used in the [`SELECT` list](ABAPSELECT_LIST.html) of a query. Window expressions define windows as a subset of the results set and apply [window functions](ABENWINDOW_FUNCTION_GLOSRY.html) to them.

The [hierarchy generator](ABENHIERARCHY_GENERATOR_GLOSRY.html)\\ [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) can now use the new addition `PERIOD FROM TO VALID FROM TO` to create [temporal hierarchies](ABENTEMPORAL_HIERARCHY_GLOSRY.html) in which the hierarchy nodes are limited by time intervals.

The new [hierarchy navigator](ABENHIERARCHY_NAVIGATOR_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_AGG_NAVIS.html) can be used to calculate [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html) for [descendant nodes](ABENDESCENDANT_NODE_GLOSRY.html).

From ABAP release 7.54, [aggregate expressions](ABAPSELECT_AGGREGATE.html) can be specified as operands of [SQL expressions](ABAPSQL_EXPR.html).

The matrix of types that can be converted to each other with a [`CAST`](ABENSQL_CAST.html) expression has been expanded. In particular, the [new data types](ABENNEWS-754-DDIC.html) of the ABAP Dictionary are taken into account.

In [arithmetic expressions](ABENSQL_ARITH.html), decimal floating point expressions with operators of types `DECFLOAT16` or `DECFLOAT34` are possible now.

The fact that conversions of [host variables](ABENHOST_VARIABLE_GLOSRY.html) in read positions need to be [lossless](ABAPMOVE_EXACT.html) is checked for [untyped literals](ABENABAP_SQL_UNTYPED_LITERALS.html) and [host constants](ABENHOST_CONSTANT_GLOSRY.html) in the strict syntax check modes from ABAP release 7.62 and ABAP release 7.63 and hence can produce syntax errors. From ABAP release 7.54, a syntax check warning is produced when this rule is broken outside of the strict mode too.

The [SQL conditions](ABENASQL_COND.html) were revised as follows:

ABAP SQL now supports the following new [window functions](ABENWINDOW_FUNCTION_GLOSRY.html) in [window expressions](ABENWINDOW_EXPRESSION_GLOSRY.html):

ABAP SQL Now supports the following new built-in functions:

-   The new addition [`NEW`](ABAPSELECT_INTO_TARGET.html) can be used to implicitly create anonymous data objects as target areas.
-   The new addition [`INDICATORS`](ABAPSELECT_INDICATORS.html) can be used to specify a [null indicator](ABENNULL_INDICATOR_GLOSRY.html).

-   Unlike in all other [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) in ABAP SQL, the relational expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) can now be used to check [LOBs](ABENLOB_GLOSRY.html) and [geodata types](ABENGEO_DATA_TYPE_GLOSRY.html).
-   A new variant of the operator [`IN`](ABENWHERE_LOGEXP_LIST_IN.html) can be used to compare multiple operands with a list of value tuples.

-   [`LEAD`](ABENSQL_WIN_FUNC.html) and [`LAG`](ABENSQL_WIN_FUNC.html).

-   [`UUID`](ABENSQL_UUID.html)

abenabap.html abennews.html abennews-75.html abennews-754.html