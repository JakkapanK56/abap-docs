---
title: "The new additions"
description: |
  make it possible to switch implicit client handling(ABENCLIENT_HANDLING_GLOSRY.html) from the current default client to multiple clients. This makes the addition `CLIENT SPECIFIED` obsolete(ABAPSELECT_CLIENT_OBSOLETE.html) in queries and obsolete(ABAPUD_CLIENT_OBSOLETE.html) in the write sta
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-777-ABAP_SQL.htm"
abapFile: "ABENNEWS-777-ABAP_SQL.html"
keywords: ["select", "update", "delete", "do", "if", "data", "types", "ABENNEWS", "777", "ABAP", "SQL"]
---

[1. Extensions of the `INTO` Clause](#ABAP_MODIFICATION_1@4@) 

[2. Extension of the `CAST` Matrix](#ABAP_MODIFICATION_2@4@) 

[3\. Extension of Arithmetic Expressions](#ABAP_MODIFICATION_3@4@)

[4\. New Built-In Functions](#ABAP_MODIFICATION_4@4@)

[5\. New Window Functions](#ABAP_MODIFICATION_5@4@)

[6\. SQL Conditions](#ABAP_MODIFICATION_6@4@)

[7\. Hierarchy Navigators](#ABAP_MODIFICATION_7@4@)

[8\. Syntax Check for Literals and Host Constants](#ABAP_MODIFICATION_8@4@)

[9\. Client Handling](#ABAP_MODIFICATION_9@4@)

[10\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_10@4@)

The [`INTO` clause](ABAPINTO_CLAUSE.html) has been extended as follows:

The matrix of types that can be converted to each other using a [`CAST`](ABENSQL_CAST.html) expression was revised. In particular, the [new data types](ABENNEWS-777-DDIC.html) in ABAP Dictionary are respected. The new types `DECFLOAT16` and `DECFLOAT34` can also be specified after the addition [`AS`](ABAPSELECT_AVG_AS.html) of the aggregate function `AVG`.

In [arithmetic expressions](ABENSQL_ARITH.html), decimal floating point expressions with operators of types `DECFLOAT16` or `DECFLOAT34` are possible now.

ABAP SQL Now supports the following new built-in functions:

ABAP SQL now supports the following new [window functions](ABENWINDOW_FUNCTION_GLOSRY.html) in [window expressions](ABENWINDOW_EXPRESSION_GLOSRY.html):

The [SQL conditions](ABENASQL_COND.html) were revised as follows:

The [hierarchy aggregate navigators](ABENHIERARCHY_AGG_NAVI_GLOSRY.html) were revised as follows:

The fact that conversions of [host variables](ABENHOST_VARIABLE_GLOSRY.html) in read positions need to be [lossless](ABAPMOVE_EXACT.html) is checked for [untyped literals](ABENABAP_SQL_UNTYPED_LITERALS.html) and [host constants](ABENHOST_CONSTANT_GLOSRY.html) in the strict syntax check modes from [ABAP release 7.62](ABENABAP_SQL_STRICTMODE_762.html) and [ABAP release 7.63](ABENABAP_SQL_STRICTMODE_763.html) and hence can produce syntax errors. From ABAP release 7.77, a syntax check warning is produced when this rule is broken outside of the strict mode too.

The new additions

make it possible to switch implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) from the current default client to multiple clients.

This makes the addition `CLIENT SPECIFIED`\\ [obsolete](ABAPSELECT_CLIENT_OBSOLETE.html) in queries and [obsolete](ABAPUD_CLIENT_OBSOLETE.html) in the write statements `UPDATE SET` and `DELETE FROM`.

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_777.html), which handles the statement more strictly than the regular syntax check.

-   The new addition [`NEW`](ABAPSELECT_INTO_TARGET.html) can be used to implicitly create anonymous data objects as target areas. The addition `NEW` now also makes inline declarations using [`@DATA(...)`](ABAPSELECT_INTO_TARGET.html) possible when using dynamic tokens and after the statement [`FETCH`](ABAPFETCH.html).
-   The new addition [`INDICATORS`](ABAPSELECT_INDICATORS.html) can be used to specify a [null indicator](ABENNULL_INDICATOR_GLOSRY.html).

-   [`UUID`](ABENSQL_UUID.html)

-   [`LEAD`](ABENSQL_WIN_FUNC.html) and [`LAG`](ABENSQL_WIN_FUNC.html).

-   Unlike in all other [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) in ABAP SQL, the relational expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) can now be used to check [LOBs](ABENLOB_GLOSRY.html) and [geodata types](ABENGEO_DATA_TYPE_GLOSRY.html).
-   A new variant of the operator [`IN`](ABENWHERE_LOGEXP_LIST_IN.html) can be used to compare multiple operands with a list of value tuples.

-   New `WITH` additions in the hierarchy navigator [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) make it possible to evaluate the aggregate functions specified using `MEASURES` for further row sets in the hierarchy.
-   The new hierarchy navigator [`HIERARCHY_ANCESTORS_AGGREGATE`](ABENSELECT_HIERARCHY_ANCS_AGG.html) makes it possible to calculate aggregate functions for ancestor nodes and also supports the new aggregate function [`PRODUCT`](ABENSQL_AGG_FUNC.html).

-   [`USING [ALL] CLIENTS [IN]`](ABAPSELECT_CLIENT.html) in queries
-   [`USING [ALL] CLIENTS [IN]`](ABAPIUMD_CLIENT.html) in write statements

abenabap.html abennews.html abennews-77.html abennews-777.html