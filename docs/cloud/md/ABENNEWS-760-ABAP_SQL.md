---
title: "ABENNEWS-760-ABAP_SQL"
description: |
  ABENNEWS-760-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-760-ABAP_SQL.htm"
abapFile: "ABENNEWS-760-ABAP_SQL.html"
keywords: ["select", "update", "if", "case", "data", "ABENNEWS", "760", "ABAP", "SQL"]
---

[1\. Unions](#ABAP_MODIFICATION_1@4@)

[2\. SQL Expressions](#ABAP_MODIFICATION_2@4@)

[3\. Host Expressions](#ABAP_MODIFICATION_3@4@)

[4. Columns Specified After `BETWEEN`](#ABAP_MODIFICATION_4@4@)

[5. Result Type of `COUNT`](#ABAP_MODIFICATION_5@4@)

[6\. CDS Path Expressions](#ABAP_MODIFICATION_6@4@)

From ABAP release 7.60, the set operator [`UNION`](ABAPUNION.html) creates the union of the result sets of two [`SELECT`](ABAPSELECT.html) statements.

From ABAP release 7.60, [SQL expressions](ABAPSQL_EXPR.html) can be specified in the following operand positions (except in the `SELECT` list):

If an SQL expression can be specified, any individual literals, host variables, and host expressions can also be specified.

From ABAP release 7.60, [host expressions](ABENABAP_SQL_HOST_VARIABLES.html) with the syntax `@( expr )` can be specified in many operand positions in which [host variables](ABENABAP_SQL_HOST_VARIABLES.html) are possible. For `expr`, all ABAP expressions can calls are possible that can be specified in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

Operand positions for host expressions in ABAP release 7.60:

From ABAP release 7.60, numeric columns can be specified on the right side in an interval condition using [`BETWEEN`](ABENWHERE_LOGEXP_INTERVAL.html), providing the name of the database table or view is prefixed using `~`.

From ABAP release 7.60, the result type of all aggregate functions [`COUNT`](ABENSQL_AGG_FUNC.html) is `INT8`.

From ABAP release 7.60, [path expressions](ABENABAP_SQL_PATH.html) closed with an element can be specified for columns specified in `SELECT` statements that access CDS views with [CDS associations exposed](ABENCDS_SELECT_LIST_ASSOCIATION_V1.html) for outside use.

-   Left side of any [`WHERE`](ABAPWHERE.html) condition
-   Left side of a [`HAVING`](ABAPHAVING_CLAUSE.html) condition
-   Left side of a [complex case distinction](ABENSQL_SEARCHED_CASE.html)

-   Operands of [SQL expressions](ABAPSQL_EXPR.html) and hence all operand positions in which these are possible.
-   Right sides of [`WHERE`](ABAPWHERE.html), [`ON`](ABAPSELECT_JOIN.html), or [`HAVING`](ABAPHAVING_CLAUSE.html) conditions, except for `LIKE` and `IN`.
-   [Actual parameters](ABAPSELECT_DATA_SOURCE.html) for input parameters of CDS views.
-   Right side of a [`SET` expression](ABAPUPDATE_SET_EXPRESSION.html) in `UPDATE`.

abenabap.html abennews.html abennews-76.html abennews-760.html