---
title: "ABENNEWS-740_SP08-ABAP_SQL"
description: |
  ABENNEWS-740_SP08-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740_SP08-ABAP_SQL.htm"
abapFile: "ABENNEWS-740_SP08-ABAP_SQL.html"
keywords: ["select", "do", "if", "case", "catch", "method", "class", "data", "types", "internal-table", "ABENNEWS", "740", "SP08", "ABAP", "SQL"]
---

[1. New Column `dbtab~*` Specified After `SELECT`](#ABAP_MODIFICATION_1@4@)

[2. Inline Declarations for the Target Area of `SELECT`](#ABAP_MODIFICATION_2@4@)

[3\. SQL Expressions](#ABAP_MODIFICATION_3@4@)

[4\. Reads on CDS Views with Parameters](#ABAP_MODIFICATION_4@4@)

[5\. Restrictions Removed](#ABAP_MODIFICATION_5@4@)

[6. Position of the `INTO` Clause](#ABAP_MODIFICATION_6@4@) 

[7\. Stricter Checks for Syntax Rules](#ABAP_MODIFICATION_7@4@)

[8\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_8@4@)

[9\. Comparable Types](#ABAP_MODIFICATION_9@4@)

In the definition of the result set in the [`SELECT` list](ABAPSELECT_LIST.html) of a `SELECT` statement, `data_source~*` can be specified as an element of the `SELECT` list from ABAP release 7.40, SP08 to include all columns of different database tables or views used after `FROM` in the result set. If specified, `data_source~*` can be combined with individual specified columns [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) (with the exception of [aggregate expressions](ABAPSELECT_AGGREGATE.html)).

When `data_source~*` is specified in the result set, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

After the addition [`INTO`](ABAPINTO_CLAUSE.html) of a `SELECT` statement, [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) can be made from ABAP release 7.40, SP08 using the declaration operator [`DATA(...)`](ABAPSELECT_INTO_TARGET.html) with the prefixed escape character `@`. Inline declarations can be made for individual parenthesized data objects `(@DATA(elem1),@DATA(elem2),...)`, for individual work areas `INTO @DATA(wa)`, and for internal tables `INTO TABLE @DATA(itab)`. Either an elementary data object, a structure, or an internal table is declared depending on the result set defined in the [`SELECT` list](ABAPSELECT_LIST.html) and the database tables used after `FROM`.

When inline declarations are used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

The [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html) introduced in ABAP release 7.40, SP05 were revised in the following ways:

If one of the new features is used, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

From ABAP release 7.40, SP08, [CDS views](ABENCDS_VIEW_GLOSRY.html) can be defined with [input parameters](ABENCDS_PARAMETER_LIST_V1.html) that are assigned actual parameters when used. To enable this, the option of a parenthesized comma-separated list for parameter passing was added to the [data source](ABAPSELECT_DATA_SOURCE.html) specified in the statement [`SELECT`](ABAPSELECT.html):

[`( pname1 = act1, pname1 = act2, ...)`](ABAPSELECT_DATA_SOURCE.html)

Since not all database systems support views with parameters, the new class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) with the method `USE_FEATURES` is available, which detects whether this is possible for the current database system. Furthermore, accessing a view with parameters triggers a warning from the syntax check; this warning can be hidden by a pragma.

The following previous restrictions were removed:

When one of the rule changes is exploited, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

From ABAP release 7.40, SP08, the [`INTO` clause](ABAPINTO_CLAUSE.html) can and should be specified as the final clause of a [`SELECT`](ABAPSELECT.html) statement. In this case, the additions [`UP TO`](ABAPSELECT_UP_TO_OFFSET.html), [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) and the additions behind [`OPTIONS`](ABAPSELECT_OPTIONS.html) of the `SELECT` statement must be specified after `INTO`.

If the `INTO` clause is specified as the final clause, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html). This handles the statement more strictly than the regular syntax check.

From ABAP release 7.40, SP08, the following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

If one the new features listed here is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html), which handles the statement more strictly than the regular syntax check.

A table of [comparable types](ABENWHERE_LOGEXP_COMPARE_TYPES.html) was constructed for comparisons performed on the database. The results of comparisons made between non-comparable types are determined by the database system and produce a syntax error (in the [strict mode of the syntax check](ABENABAP_SQL_STRICTMODE_740_SP08.html)) or a syntax warning.

-   The operator [`CASE`](ABENSQL_CASE.html) can now be used to perform [complex case distinctions](ABENSQL_SEARCHED_CASE.html) (searched case) as well as simple case distinctions.
-   SQL expressions can be specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html).
-   SQL expressions can be specified together with aggregate expressions in the `SELECT` list.
-   SQL expressions can be specified as arguments of [aggregate functions](ABAPSELECT_AGGREGATE.html) (except `avg`) in the `SELECT` list and the `HAVING` clause.

-   For [SQL expressions](ABAPSQL_EXPR.html):

-   From ABAP release 7.40, SP08, a negative sign `-` can be placed in front of an operand of an [arithmetic expression](ABENSQL_ARITH.html) that does not follow an arithmetic operator directly.
-   From ABAP release 7.40, SP08, an operand `operand1`, `operand2`, ... in a [simple case distinction](ABENSQL_SIMPLE_CASE.html) can now also be an SQL expression.
-   From ABAP release 7.40, SP08, SQL expressions can also be specified together with [aggregate expressions](ABAPSELECT_AGGREGATE.html) and the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html).

-   For [joins](ABAPSELECT_JOIN.html):

-   From ABAP release 7.40, SP08, the operators `LIKE` and [`IN (...)`](ABENWHERE_LOGEXP_OPERAND_IN.html) can be used in `ON` conditions.
-   From ABAP release 7.40, SP08, individual comparisons can be joined using `OR` and negated using `NOT`.
-   From ABAP release 7.40, SP08, outer joins no longer need to contain at least one comparison between columns on the left and right side.

-   For [dynamic `WHERE` conditions](ABENWHERE_LOGEXP_DYNAMIC.html):

-   [Subqueries](ABENSUBQUERY_GLOSRY.html) can now also be specified dynamically.

-   Correction for the `HAVING` Condition
-   Any columns that are specified in a [`HAVING` clause](ABAPHAVING_CLAUSE.html) outside of an aggregate expression must also be specified after [`GROUP BY`](ABAPGROUPBY_CLAUSE.html). Before ABAP release 7.40, SP08, this was not recorded by the static syntax check, but did raise a catchable exception. From ABAP release 7.40, SP08, this produces a syntax check warning and raises an uncatchable exception outside of the [strict mode](ABENABAP_SQL_STRICTMODE_740_SP08.html) of the syntax check.
    \\
    **Example**\\
    \\
    From ABAP release 7.40, SP08, a syntax warning and uncatchable exception for:
    \\
    `DATA itab TYPE TABLE OF scarr. SELECT * FROM scarr INTO TABLE itab HAVING carrid = 'LH'.`

abenabap.html abennews.html abennews-740.html abennews-740\_sp08.html