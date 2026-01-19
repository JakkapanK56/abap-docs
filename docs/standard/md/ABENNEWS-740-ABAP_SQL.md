---
title: "ABENNEWS-740-ABAP_SQL"
description: |
  ABENNEWS-740-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-ABAP_SQL.htm"
abapFile: "ABENNEWS-740-ABAP_SQL.html"
keywords: ["select", "loop", "do", "if", "case", "class", "data", "types", "internal-table", "field-symbol", "ABENNEWS", "740", "ABAP", "SQL"]
---

[1\. Optimized Table Buffering](#ABAP_MODIFICATION_1@4@)

[2. Result Type of the Aggregate Function `COUNT( * )`](#ABAP_MODIFICATION_2@4@)

[3. Decimal Places in the `INTO` Clause](#ABAP_MODIFICATION_3@4@) 

[4\. Conditions in Outer Joins](#ABAP_MODIFICATION_4@4@)

[5\. Enhancements for Sorting by Primary Key](#ABAP_MODIFICATION_5@4@)

[6\. Handling Strings](#ABAP_MODIFICATION_6@4@)

[7. Field Symbols and Data Reference Variables in `SELECT` Loops](#ABAP_MODIFICATION_7@4@) 

[8. Comma-Separated List in `INTO` Clause](#ABAP_MODIFICATION_8@4@) 

[9\. Specifying Dynamic Tokens](#ABAP_MODIFICATION_9@4@)

[10\. Stricter Checks on Syntax Rules](#ABAP_MODIFICATION_10@4@)

The following improvements were made:

In cases where the aggregate function [`COUNT( * )`](ABAPSELECT_AGGREGATE.html) or [`COUNT(*)`](ABAPSELECT_AGGREGATE.html) is specified as the only element in the `SELECT` list and without a `GROUP BY` clause, `INT8` was added to the internal data type of the result. If the value range is to be used in full, a target object with the data type `p` or `decfloat34` must be used after [`INTO`](ABAPINTO_CLAUSE.html). The system field `sy-dbcnt` is set to the value -1 in events outside its value range.

The [assignment rules](ABENSELECT_INTO_CONVERSION.html) of the [`INTO` clause](ABAPINTO_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html) were modified so that surplus decimal places are now always cut off when numbers are assigned to target fields with too few decimal places. Until now, it was possible to round the numbers (depending on the database and table buffering).

The restriction in previous versions, which meant that only equality comparisons (`=`, `EQ`) were possible in the `ON` condition of [outer joins](ABAPSELECT_JOIN.html), no longer applies.

If the addition `PRIMARY KEY` is used after [`ORDER BY`](ABAPORDERBY_CLAUSE.html), the following restrictions no longer apply:

The following (previously undocumented) restrictions were lifted:

When field symbols or dereferenced reference variables are specified for the work area, individual data objects, or internal tables in a `SELECT` loop after [`INTO`](ABAPINTO_CLAUSE.html), the data object that is the target of a field symbol or reference variable is identified exactly once, from ABAP release 7.40, SP02, when the loop is entered. This data object is used as a target area in each loop pass. Any modifications to the assignment of a field symbol or reference variable within the loop are ignored. From ABAP release 7.40, SP02, the assignment of a field symbol or reference variable is determined again for each loop pass and the current data object is used as the target area.

With ABAP release 7.40 SP02 and higher, a whitespace character can be placed behind the opening bracket of a [comma-separated list](ABAPINTO_CLAUSE.html) in the `INTO` clause. Then, a whitespace character must also be placed in front of the closing bracket.

With ABAP release 7.40 SP02 and higher, internal tables, which are specified as dynamic tokens of statement [`SELECT`](ABAPSELECT.html), can also have secondary keys.

In ABAP release 7.40 SP02, a new SQL parser was introduced for ABAP SQL. These parser performs stricter checks on some rules than the old parser. More specifically, the same parser is now used for statically specified ABAP SQL and for the content of dynamic tokens. In ABAP release 7.40, SP02, this parser will initially only be used for the statement [`SELECT`](ABAPSELECT.html). One consequence of this is that any following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

-   [Table buffering](ABENTABLE_BUFFERING_GLOSRY.html) was optimized so that, if the database table is specified statically, its [secondary indexes](ABENSECONDARY_INDEX_GLOSRY.html) are also respected when data is read from the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) (in cases where generic buffering or full buffering is activated).
-   If `SELECT` is used with [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html), [table buffering](ABENSAP_PUFFERING.html) is now also used when accessing tables with single record buffering and is no longer bypassed.

-   If individual columns are specified in the [`SELECT` list](ABAPSELECT_LIST.html), it is not necessary to specify the [client column](ABENCLIENT_COLUMN_GLOSRY.html) explicitly if the addition [`DISTINCT`](ABAPSELECT_CLAUSE.html) is used.
-   A [view](ABENVIEW_GLOSRY.html) can also be specified statically after `FROM`, provided that the view contains fewer key fields than view fields.
-   The addition `PRIMARY KEY` can now also be specified dynamically.

-   Before ABAP release 7.40 SP02, it was not possible to use [`DISTINCT *`](ABAPSELECT_CLAUSE.html) to read database tables containing short strings of type `SSTRING`.
-   Before ABAP release 7.40, SP02, it was not possible to access database tables with short or long strings of the data types `SSTRING`, `STRING`, or `RAWSTRING` using `*` in the [`SELECT` list](ABAPSELECT_LIST.html) in cases where a join is specified dynamically after [`FROM`](ABAPFROM_CLAUSE.html).

-   General corrections

-   From ABAP release 7.40, SP02, the content of the operand `n` of the additions [`UP TO n ROWS`](ABAPSELECT_UP_TO_OFFSET.html) and [`PACKAGE SIZE`](ABAPINTO_CLAUSE.html) of the statement [`SELECT`](ABAPSELECT.html) meet the rules of a [lossless assignment](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html) for the data type `i`.
-   Before ABAP release 7.40, SP02, the operator [`IN range_tab`](ABENWHERE_LOGEXP_SELTAB.html) of a `WHERE` condition was not always checked statically to see whether the columns `LOW` and `HIGH` of the ranges table `range_tab` could be converted to the data type of the database and non-convertible columns did not produce a runtime error in cases where the ranges table was empty. Now, a static check is always made a non-convertible columns always raise an exception.
-   **Example**
-   From ABAP release 7.40 SP02, syntax errors for:
-   `DATA: range_tab TYPE RANGE OF t, itab TYPE TABLE OF sflight. SELECT * FROM sflight INTO TABLE itab WHERE fldate IN range_tab.`
-   Before ABAP release 7.40, SP02, multiple [`NOT`](ABENWHERE_LOGEXP_ANDORNOT.html) operators could be placed consecutively in a `WHERE` condition. An even or odd number of consecutive `NOT` operators is the same as no `NOT` or a single `NOT`, which means that surplus `NOT` operators can now no longer be specified.
-   **Example**
-   From ABAP release 7.40 SP02, syntax errors for:
-   `SELECT SINGLE * FROM spfli INTO wa WHERE NOT NOT carrid = 'LH'.`
-   Before ABAP release 7.40 SP02, it was possible to read the [client column](ABENCLIENT_COLUMN_GLOSRY.html) when using alias names defined with [`AS`](ABAPFROM_CLAUSE.html) or [joins](ABAPFROM_CLAUSE.html) in `ON` and `WHERE` conditions, without disabling [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) using [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html). In this case, the result set is empty whenever the explicitly specified client is not the [current client](ABENCURRENT_CLIENT_GLOSRY.html). From ABAP release 7.40 SP02, this situation produces a syntax check warning.
-   **Example**
-   From ABAP release 7.40 SP02, syntax warnings for:
-   \\
    `SELECT * FROM scarr AS carriers INTO TABLE itab WHERE carriers~mandt = '...'.`
-   and
    `SELECT * FROM scarr INNER JOIN spfli on scarr~mandt = spfli~mandt INTO CORRESPONDING FIELDS OF TABLE itab WHERE scarr~mandt = '...'.`
-   The addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) cannot be specified for [pooled tables](ABENPOOLED_TABLE_GLOSRY.html) and [cluster tables](ABENCLUSTER_TABLE_GLOSRY.html). Before ABAP release 7.40 SP02, it was possible to specify a column dynamically after `GROUP BY`; however this always raised an exception. From ABAP release 7.40 SP02, a dynamically specified `GROUP BY` clause in pooled tables and cluster tables produces a syntax warning; this warning will become a syntax error in a future SP.
-   **Example**
-   From ABAP release 7.40 SP02, a syntax warning or error for:
-   ``SELECT id object langu typ FROM doktl INTO TABLE itab GROUP BY (`ID OBJECT LANGU TYP`).``

-   Corrections for Dynamic Tokens

-   Before ABAP release 7.40 SP02, a single period (`.`) could be specified in the dynamic tokens of any ABAP SQL statements. This period was ignored when the token was evaluated at runtime. From ABAP release 7.40 SP02, a period like this raises an exception of the class `CX_SY_DYNAMIC_OSQL_SYNTAX`.
-   **Example**
-   From ABAP release 7.40 SP02, exception for:
-   ``SELECT * FROM (`SPFLI .`) INTO TABLE itab WHERE (`. CARRID = 'LH'`).``
-   Before ABAP release 7.40, SP02, an alias name could be given more than once in cases where columns were specified dynamically in the [`SELECT` list](ABAPSELECT_LIST.html) of the columns after `SELECT` using `column_syntax`, even though this is not allowed statically. From ABAP release 7.40 SP02, this raises an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS`.
-   **Example**
-   From ABAP release 7.40 SP02, exception for:
-   `SELECT SINGLE ('carrid AS col carrname AS col') FROM scarr INTO CORRESPONDING FIELDS OF wa WHERE carrid = 'LH'.`
-   Before ABAP release 7.40, SP02 the statically compulsory addition `DISTINCT` could be omitted when the aggregate function [`COUNT( DISTINCT col )`](ABAPSELECT_AGGREGATE.html) was specified dynamically and all rows of the result set were counted. From ABAP release7.40 SP02, the omission of `DISTINCT` raises an exception of the class `CX_SY_DYNAMIC_OSQL_SYNTAX`.
-   **Example**
-   From ABAP release 7.40 SP02, exception for:
    \\
    `SELECT ('COUNT( carrid )') FROM spfli INTO count. ENDSELECT.`
-   In previous releases (before 7.40 SP02), a `NOT` could be mistakenly written directly in front of a comparison operator in a dynamic `WHERE` condition (which is not possible in the static case). With ABAP release 7.40 SP02 and higher, this raises an exception of class `CX_SY_DYNAMIC_OSQL_SYNTAX`.
-   **Example**
-   From ABAP release 7.40 SP02, exception for:
-   ``SELECT SINGLE * FROM spfli INTO wa WHERE (`carrid NOT = 'LH'`).``
-   Before ABAP release 7.40, SP02 it was possible to use (incorrectly) a dynamic `FROM` clause combined with the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html) to access [DDIC projection views](ABENDDIC_PROJ_VIEW_GLOSRY.html) containing the same number of key fields and view fields, which is not possible in static cases. From ABAP release 7.40, SP02, this raises the exception `CX_SY_DYNAMIC_OSQL_SYNTAX`.
-   **Example**
-   From ABAP release 7.40, SP02, an exception is raised when `projection_view` has the same number of key fields and view fields.
-   `DATA itab TYPE TABLE OF projection_view. \ SELECT * FROM ('KELLERH_VIEW') INTO TABLE itab ORDER BY PRIMARY KEY.`

-   Corrections for the aggregate function `count( * )`

-   As in all aggregate functions, the target field must be chosen appropriately in the case of [`count( * )`](ABAPSELECT_AGGREGATE.html) or [`count(*)`](ABAPSELECT_AGGREGATE.html) and no values must be lost when the result is assigned. This was not checked before ABAP release 7.40 SP02, and assignments were made in accordance with the conversions rules. This did not always raise an exception when values were lost. From ABAP release 7.40 SP02, the target field must be numeric and a loss of values always produces an exception.
-   **Example**
-   From ABAP release 7.40 SP02, a syntax warning and exception (if the value does not fit in the target field) for:
-   `DATA cnt TYPE c LENGTH 1. SELECT COUNT(*) FROM scarr INTO cnt.`
-   When individual columns or [aggregate expressions](ABAPSELECT_AGGREGATE.html) are specified in the [`SELECT` list](ABAPSELECT_LIST.html), an explicit work area must usually be specified and the obsolete short form is not possible. The only exception here is when `count( * )` is used to specify *nothing*, if no alias name and no `GROUP BY` clause was specified. Before ABAP release 7.40 SP02, the short form using `count( * )`, specified together with an alias name or a `GROUP BY` clause, produced a runtime error. From ABAP release 7.40 SP02, this also produces a syntax error if known statically.
-   **Example**
-   From ABAP release 7.40 SP02, syntax errors for:
-   `TABLES scarr. SELECT COUNT( * ) AS cnt FROM scarr. SELECT count( * ) FROM scarr GROUP BY carrid. ... ENDSELECT.`

-   Corrections when using the built-in types [`LCHR`](ABENDDIC_BUILTIN_TYPES.html) and [`LRAW`](ABENDDIC_BUILTIN_TYPES.html) from ABAP Dictionary.

-   Columns of the types `LCHR` and `LRAW` cannot be used in [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) of the [SQL conditions](ABENABAP_SQL_STMT_LOGEXP.html). Before ABAP release 7.40 SP02, this produced a runtime error. From ABAP release 7.40 SP02, this also produces a syntax error if known statically.
-   **Example**
-   From ABAP release 7.40 SP02, syntax errors for:
-   `SELECT SINGLE * FROM indx INTO wa WHERE clustd = '...'.`
-   Columns of the types `LCHR` and `LRAW` cannot be read using `SELECT` if the addition [`DISTINCT`](ABAPSELECT_CLAUSE.html) is specified. Before ABAP release 7.40 SP02, this produced a runtime error. From ABAP release 7.40 SP02, this also produces a syntax error if known statically.
-   **Example**
-   From ABAP release 7.40 SP02, syntax errors for:
-   `SELECT DISTINCT * FROM indx INTO TABLE itab.`
-   Columns of the types `LCHR` and `LRAW` can be read using `SELECT` only if they are read together with the associated length fields. Before ABAP release 7.40 SP02, columns of this type read without length fields produced a syntax warning. From ABAP release 7.40 SP02, this situation always produces a runtime error.
-   **Example**
-   From ABAP release 7.40 SP02, runtime errors for:
-   `SELECT clustd FROM indx INTO TABLE itab.`

-   Corrections for `FOR ALL ENTRIES`

-   If [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is used in front of a `WHERE` condition of a `SELECT` statement, a column of the internal table must be specified in at least one comparison (the comparison can also be specified in a [subquery](ABENSUBQUERY_GLOSRY.html)). Before ABAP release 7.40 SP02, the subquery was not checked. From ABAP release 7.40 SP02, the comparison must be specified (statically or dynamically) even if a subquery is specified.
-   **Example**
-   From ABAP release 7.40 SP02, syntax errors for:
-   `SELECT carrid connid fldate FROM sflight INTO CORRESPONDING FIELDS OF TABLE rtab FOR ALL ENTRIES IN itab WHERE EXISTS ( SELECT * FROM sflight ).`
-   When [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is used in front of a `WHERE` condition of a `SELECT` statement, no database fields of the built-in types `STRING` and `RAWSTRING` plus `LCHR` and `LRAW` can occur in the [`SELECT` list](ABAPSELECT_LIST.html), since the implicit addition `DISTINCT` cannot be passed to the database system in this case. From ABAP release 7.40, SP02, a syntax warning occurs in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GLOSRY.html). This warning can be hidden by a pragma.
-   **Example**
-   From ABAP release 7.40 SP02, pragma required for:
-   `SELECT * FROM snwd_bpa INTO TABLE bupas FOR ALL ENTRIES IN orders WHERE node_key = orders-buyer_guid ##select_fae_with_lob[web_address].`
-   If [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is used in front of a `WHERE` condition of a `SELECT` statement, no [LOB handles](ABENSELECT_INTO_LOB_HANDLES.html) can be created in the target area, since this produces an undefined result. Before ABAP release 7.40 SP02, this was not identified correctly for [locators](ABENLOCATOR_GLOSRY.html), either statically or at runtime. From ABAP release 7.40 SP02, this produces a syntax error or raises an exception.
-   **Example**
-   From ABAP release 7.40 SP02, syntax errors for:
-   `SELECT picture FROM demo_blob_table INTO wa-picture FOR ALL ENTRIES IN name_tab WHERE name = name_tab-table_line. ENDSELECT.`
-   The addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) should not be used with the addition [`GROUP BY`](ABAPGROUPBY_CLAUSE.html). The addition `GROUP BY` is ignored if used together with `FOR ALL ENTRIES`. From ABAP release 7.40 SP02, this situation produces a syntax check warning.
-   **Example**
-   From ABAP release 7.40 SP02, syntax warning for:
-   `SELECT COUNT( * ) FROM spfli INTO cnt FOR ALL ENTRIES IN carriers WHERE carrid = carriers-table_line GROUP BY carrid.`

-   Corrections for `ORDER BY`

-   Before ABAP release 7.40 SP02, it was possible to specify any text between a dynamically specified column after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) and the closing period of a `SELECT` statement and this text was ignored when the statement was executed. Before ABAP release 7.40 SP02, this text produced a syntax warning; from ABAP release 7.40 SP02, it produces a syntax error.
-   **Example**
-   From ABAP release 7.40 SP02, syntax warning for:
-   ``SELECT * FROM scarr INTO TABLE itab ORDER BY (`CARRID`) carrname and so on.``
-   If the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) is specified together with [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html), all columns of the primary key must be read; if not, the result is undefined. From ABAP release 7.40 SP02, a syntax warning is produced in this case if known statically; at runtime, an exception is always raised.
-   **Example**
-   From ABAP release 7.40 SP02, a syntax warning or exception for:
-   `SELECT carrid connid FROM sflight INTO CORRESPONDING FIELDS OF TABLE rtab FOR ALL ENTRIES IN itab WHERE carrid = itab-carrid AND connid = itab-connid ORDER BY PRIMARY KEY.`
-   If [aggregate functions](ABENAGGREGATE_FUNCTION_GLOSRY.html) are specified after `SELECT`, all columns that are specified after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) and that do not have an alias name for an aggregation function must also be specified after `SELECT` and after `GROUP BY`. Before ABAP release 7.40 SP02, the checks on this situation at runtime were not strict enough and the behavior was platform-dependent. From ABAP release 7.40 SP02, a violation of this rule always raises an exception of the class `CX_SY_DYNAMIC_OSQL_SEMANTICS`.
-   **Example**
-   From ABAP release 7.40 SP02, an exception from the class `CX_SY_DYNAMIC_OSQL_SEMANTICS` for:
-   `SELECT COUNT( * ) FROM spfli INTO (cnt) GROUP BY ('CARRID') ORDER BY ('CARRID'). ... ENDSELECT.`
-   An alias name in the [`SELECT` list](ABAPSELECT_LIST.html) cannot be the name of a column to which no alias name is assigned. Before ABAP release 7.40 SP02, the use of a name of this type after [`ORDER BY`](ABAPORDERBY_CLAUSE.html) raised an exception. From ABAP release 7.40 SP02, this also produces a syntax error if known statically.
-   **Example**
-   From ABAP release 7.40 SP02, syntax errors for:
-   `SELECT carrid connid AS carrid FROM spfli INTO TABLE itab ORDER BY carrid.`

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html