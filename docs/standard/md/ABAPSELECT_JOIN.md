---
title: "ABAPSELECT_JOIN"
description: |
  ABAPSELECT_JOIN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECT_JOIN.htm"
abapFile: "ABAPSELECT_JOIN.html"
keywords: ["select", "do", "if", "case", "class", "data", "internal-table", "ABAPSELECT", "JOIN"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

``... [(]\ \{[`data_source`](ABAPSELECT_DATA_SOURCE.html)\ [AS tabalias]\}|join            \{[INNER [cardinality]] JOIN\}|\{LEFT|RIGHT [OUTER [cardinality]] JOIN\}|\{CROSS JOIN\}\               \{[`data_source`](ABAPSELECT_DATA_SOURCE.html)\ [AS tabalias]\}|join [ON [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html)]\ [)] ... .``

[1. `... ON sql_cond`](#ABAP_ADDITION_1@3@)

[2. `... cardinality`](#ABAP_ADDITION_2@3@)

Joins the columns of two or more [data sources](ABAPSELECT_DATA_SOURCE.html) in a result set of a [query](ABENASQL_QUERY_GLOSRY.html) in a join expression. A join expression joins a left side with a right side, using

Every join expression for an inner or outer join must contain a join condition [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) after `ON` (see below). A join expression for a cross join cannot contain any join conditions.

The following applies to possible specifications on the left side and on the right side:

The priority in which nested join expressions are evaluated is specified as follows:

**Result set for inner joins**

An inner join joins the columns of the rows in the result set of the left side with the columns of the rows in the result set of the right side into a single result set. This result set contains all combinations of rows for whose columns the join condition [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) is jointly true. If there are no rows in the result set of the left and right sides that meet `sql_cond`, no row is created in the resulting result set.

**Result set for outer joins**

The outer join creates the same result set as the inner join. The difference is that, for each selected row on the left side as `LEFT OUTER JOIN` or on the right side as `RIGHT OUTER JOIN`, at least one row is created in the result set, even if no rows on the other side meet the condition `sql_cond`. The columns on the other side that do not meet the condition [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) are filled with [null values](ABENNULL_VALUE_GLOSRY.html).

**Result set for cross join**

The cross join forms a cross product of the result set of the left side and the result set of the right side. The cross join joins the columns of the rows in the result set of the left side with the columns of the rows in the result set of the right side. This result set contains all possible combinations of rows. The number of rows in the result set of the cross join is the product of the number of rows of both joined result sets.

Join of the columns `CARRNAME`, `CONNID`, and `FLDATE` of the DDIC database tables `SCARR`, `SPFLI`, and `SFLIGHT` using two inner joins. This creates a list of flights from `CITYFROM` to `CITYTO`. Alternative names are used for each table.

Join of the database tables `SCARR` and `SPFLI` using a left outer join. For all flights not departing from `CITYFROM`, the value of the column `CONNID` is the null value. Due to the `WHERE` condition, all airlines that do not fly from `CITYFROM` are output.

Cross join of the DDIC database table `T000` of all clients of an AS ABAP with the entries for the message class `SABAPDEMOS` in the table `T100`. Without the `WHERE` condition, the result set would be very large.

Join condition. A join condition must be specified for an inner or outer join. A join condition must not be specified for a cross join.

The syntax of the [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html) of a join condition [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html) is subject to the following restrictions:

A join condition is met if the logical expression `sql_cond` is true.

[Implicit ABAP SQL client handling](ABENABAP_SQL_CLIENT_HANDLING.html) applies. In joins between client-dependent tables, a comparison for equality between the client columns is added to the `ON` condition implicitly. The [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent data source cannot be used as an operand in the `ON` condition.

Specifies the [cardinality](ABENCARDINALITY_GLOSRY.html)\\ `cardinality` of an inner, left outer, or right outer join. It has an effect only on certain specific database systems.

The following cardinality specifications are possible:

The cardinality specification documents the semantics of the data model. It is used by the [SAP HANA SQL Optimizer](ABENQUERY_OPTIMIZER_GLOSRY.html) for performance optimizations by suppressing surplus joins on any databases that support this addition. It is important that the cardinality specification matches the data in question. Otherwise, the result is undefined and can depend on the entries in the [`SELECT` list](ABAPSELECT_LIST.html).

If no cardinality is specified, the implicit default cardinality is *many-to-many*.

Incorrect use of the cardinality `MANY TO ONE`. The data in the DDIC database tables `SCARR` and `SPFLI` do not have the [cardinality](ABENCARDINALITY_GLOSRY.html)\\ `MANY TO ONE`, but the reverse cardinality. On an SAP HANA database, for example, the result depends on the [`SELECT` list](ABAPSELECT_LIST.html). If the left and right side are specified here, no optimization takes place. If no columns are specified on the right side and the aggregate function [`COUNT(*)`](ABENSQL_AGG_FUNC.html) is used as an aggregate expression, an optimization takes place. Here, only that data is read that meets the prerequisite cardinality.

-   `[INNER] JOIN` ([inner join](ABENINNER_JOIN_GLOSRY.html))
-   `LEFT|RIGHT [OUTER] JOIN` ([outer join](ABENOUTER_JOIN_GLOSRY.html))
-   `CROSS JOIN` ([cross join](ABENCROSS_JOIN_GLOSRY.html))

-   [`data_source`](ABAPSELECT_DATA_SOURCE.html) is a single data source. DDIC database tables must be [transparent](ABENTRANSPARENT_TABLE_GLOSRY.html). As with the individual specification after [`FROM`](ABAPFROM_CLAUSE.html) using `AS`, an alias name can be specified for the data source. A data source can exist more than once within a join expression and must then be given different names.
-   A join expression can be specified for `join` on both sides. A join expression can therefore be nested recursively. The number of data sources linked to each other is limited. The maximum number is set to allow the `SELECT` statement to be executed on all supported database systems and is currently 50. More than 49 joins, if known statically, produce a syntax error. If they are not known statically, they produce a runtime error.

-   For inner and outer joins, the priority is determined by the position of the `ON` conditions. From left to right, each `ON` condition is assigned to the directly preceding `JOIN` and creates a join expression. Join expressions of this type can optionally be enclosed in parentheses, `( )`. Explicitly specified parentheses must match the parentheses specified implicitly by the `ON` conditions.
-   By default, cross joins are evaluated from left to right. The priority of the evaluation can be affected by parentheses `( )`.

-   If multiple cross joins are combined, the order of the evaluation is irrelevant. The result is always the same and the number of rows is the product of the number of rows of all involved data sources.
-   If cross joins are combined with inner and outer joins, the result can depend on the order of evaluation or the parentheses.

-   Certain restrictions apply to other clauses in the current `SELECT` statement when join expressions are used. For example, a join expression cannot be used together with the addition [`ORDER BY PRIMARY KEY`](ABAPORDERBY_CLAUSE.html). These restrictions are documented in the corresponding clauses.
-   A `WHERE` condition for a `SELECT` statement with joins affects the result set created using the joins.
-   An inner join or a cross join between two individual data sources is commutative. If the left and right side are switched, the result remains the same.
-   A cross join behaves like an inner or outer join whose `ON` condition is always true. A cross join with a `WHERE` condition has the same result as an inner join with an identical `ON` condition. Unlike the inner join, in a cross join all data is read first before the condition is evaluated. In an inner join only data that meets the `ON` condition is read.
-   A cross join should only be used with extreme caution. Since it is not possible to specify an `ON` condition, all data of all involved data sources is read. In the case of very large datasets, the result set, whose number of rows is always the product of the number of all rows of both data sources, can quickly become very large.
-   A cross join of two client-dependent data sources is converted internally to an inner join, whose `ON` condition checks whether the client columns of the left and right side are equal. If one side is not client-dependent, the cross join is executed completely.
-   If the same column name appears in multiple data sources of a single join expression, these sources must be identified in all other additions of the `SELECT` statement using the [column selector](ABENTABLE_COMP_SELECTOR_GLOSRY.html)\\ `~`.
-   Only join expressions that access only [internal tables](ABAPSELECT_ITAB.html) but no database tables can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). If a database table is joined, the ABAP SQL statement bypasses the [table buffer](ABENTABLE_BUFFER_GLOSRY.html) and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   Join expressions should not be applied to buffered tables. Instead the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) should be used, which can be processed by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html).
-   If columns from the right side are specified as `LEFT OUTER JOIN` or columns from the left side are specified as `RIGHT OUTER JOIN`, after the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html), the sort order can depend on the database system in the case of null values.
-   The function [`coalesce`](ABENSQL_COALESCE.html) can be used to replace null values created due to an external join with other values or the result of expressions.
-   The syntax check is performed in [strict mode for ABAP release 7.40, SP05](ABENABAP_SQL_STRICTMODE_740_SP05.html) in the following cases:

-   Not all comparisons of an `ON` condition contain a column from a data source specified on the right side as an operand.
-   Multiple consecutive joins are explicitly parenthesized so that a join expression is on the right side of a join expression and not a data source.
-   `RIGHT OUTER JOIN` is used.
-   In `LEFT OUTER JOIN`, fields from the right side of the `WHERE` condition of the current `SELECT` statement are specified. In `RIGHT OUTER JOIN`, fields from the left side are specified.

-   The syntax check is performed in [strict mode for ABAP release 7.40, SP08](ABENABAP_SQL_STRICTMODE_740_SP08.html) in the following cases:

-   Use of the additions `LIKE`, `IN`, and `NOT` plus the operators `OR` or `NOT` in an `ON` condition.
-   Outer join without a comparison between columns on the left and right sides.

-   The syntax check is performed in [strict mode for ABAP release 7.65](ABENABAP_SQL_STRICTMODE_765.html) in the following cases:

-   Use of `CROSS JOIN`.

-   After `ON`, at least one comparison must be specified.
-   The expression [`[NOT] IN range_tab`](ABENWHERE_LOGEXP_SELTAB.html) cannot be used.
-   [Subqueries](ABENSUBQUERY_GLOSRY.html) cannot be used.
-   [Path expressions](ABENABAP_SQL_PATH.html) cannot be used.
-   Within a [subquery](ABENSUBQUERY_GLOSRY.html), only columns of the [data sources](ABAPSELECT_DATA_SOURCE.html) of this subquery can be specified.
-   A dynamic condition [`(cond_syntax)`](ABENWHERE_LOGEXP_DYNAMIC.html) can be specified only if the [`FROM` clause](ABAPFROM_CLAUSE.html) is specified statically and is not specified dynamically as `(source_syntax)`.

-   Comparisons between database columns or SQL expressions and database columns are performed on the database, which means it is essential that appropriate join conditions are formulated only between operands of the same type and the same length. This avoids the need for platform-dependent conversions.
-   If the pattern consists of exactly one *%* character in a comparison using [`LIKE`](ABENWHERE_LOGEXP_LIKE.html), the same optimization takes place as for `WHERE`. The condition `col LIKE '%'` is always true, even if the column `col` contains [null values](ABENNULL_VALUE_GLOSRY.html).
-   If one of the following two conditions apply:

-   [SQL expressions](ABENSQL_EXPRESSION_GLOSRY.html) are used on the left side of the `ON` condition of any join.
-   The expression [`IS [NOT] NULL`](ABENWHERE_LOGEXP_NULL.html) is used in the `ON` condition of an outer join.

-   The [client column](ABENCLIENT_COLUMN_GLOSRY.html) of a client-dependent data source can still be used in the `ON` condition if implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) is disabled using the obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html).
-   If a [host expression](ABENABAP_SQL_HOST_EXPRESSIONS.html) occurs on the right side of the `ON` condition, the syntax check is performed in a [strict mode from ABAP release 7.60](ABENABAP_SQL_STRICTMODE_760.html), which handles the statement more strictly than the regular syntax check.
-   The syntax check is performed in a [strict mode from ABAP release 7.61](ABENABAP_SQL_STRICTMODE_761.html), which handles the statement more strictly than the regular syntax check.

-   [Inner, outer, and cross joins](ABENJOINS_ABEXA.html)
-   [Multiple joins](ABENJOIN_JOINS_ABEXA.html)

-   `ONE TO ONE`
-   `ONE TO MANY`
-   `ONE TO EXACT ONE`
-   `EXACT ONE TO ONE`
-   `EXACT ONE TO MANY`
-   `EXACT ONE TO EXACT ONE`
-   `MANY TO ONE`
-   `MANY TO MANY`
-   `MANY TO EXACT ONE`

-   For more information, see the documentation of the current database system. The [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), for example, supports the cardinality specification and its description is part of the documentation of [HANA-specific SQL](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).
-   To avoid undefined and platform-dependent behavior, a cardinality should be specified only if the data to be read meets the relevant prerequisites.
-   The cardinality is mainly descriptive, not prescriptive. It does not force a matching result set.
-   If a cardinality is specified, the syntax check is executed in [strict mode as of release 7.91](ABENABAP_SQL_STRICTMODE_791.html).

DATA: \\n cityfr TYPE spfli-cityfrom VALUE 'FRANKFURT', \\n cityto TYPE spfli-cityto VALUE 'NEW YORK'. \\n\\ \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = cityfr \\n )->add\_field( CHANGING field = cityto )->request( ). \\n\\ \\nSELECT c~carrname, p~connid, f~fldate \\n FROM ( ( scarr AS c \\n INNER JOIN spfli AS p ON p~carrid = c~carrid \\n AND p~cityfrom = @cityfr \\n AND p~cityto = @cityto ) \\n INNER JOIN sflight AS f ON f~carrid = p~carrid \\n AND f~connid = p~connid ) \\n ORDER BY c~carrname, p~connid, f~fldate \\n INTO TABLE @FINAL(itab). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA cityfr TYPE spfli-cityfrom VALUE 'FRANKFURT'. \\ncl\_demo\_input=>request( CHANGING field = cityfr ). \\n\\ \\nSELECT s~carrid, s~carrname \\n FROM scarr AS s \\n LEFT OUTER JOIN spfli AS p ON s~carrid = p~carrid \\n AND p~cityfrom = @cityfr \\n WHERE p~connid IS NULL \\n ORDER BY s~carrid, s~carrname \\n INTO TABLE @FINAL(itab). \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA BEGIN OF wa. \\nDATA mandt TYPE t000-mandt. \\nDATA mtext TYPE t000-mtext. \\nINCLUDE TYPE t100. \\nDATA END OF wa. \\nDATA itab LIKE STANDARD TABLE OF wa WITH EMPTY KEY. \\n\\ \\nSELECT t000~mandt, t000~mtext, t100~\* \\n FROM t000 CROSS JOIN t100 \\n WHERE t100~arbgb = 'SABAPDEMOS' \\n ORDER BY t000~mandt, t100~sprsl, t100~msgnr \\n INTO TABLE @itab. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nout->next\_section( \`Fields of left and right table\` ). \\nSELECT FROM scarr AS c \\n LEFT OUTER MANY TO ONE JOIN spfli AS p \\n ON c~carrid = p~carrid \\n FIELDS c~carrid AS carrid, \\n c~carrname AS carrname, \\n p~connid AS connid \\n ORDER BY c~carrid \\n INTO TABLE @DATA(itab). \\nout->write( itab ). \\nout->write( sy-dbcnt ). \\n\\ \\nout->next\_section( \`Fields of left table only\` ). \\nSELECT FROM scarr AS c \\n LEFT OUTER MANY TO ONE JOIN spfli AS p \\n ON c~carrid = p~carrid \\n FIELDS c~carrid AS carrid, \\n c~carrname AS carrname \\n ORDER BY c~carrid \\n INTO CORRESPONDING FIELDS OF TABLE @itab. \\nout->write( itab ). \\nout->write( sy-dbcnt ). \\n\\ \\nout->next\_section( \`COUNT(\*)\` ). \\nSELECT FROM scarr AS c \\n LEFT OUTER MANY TO ONE JOIN spfli AS p \\n ON c~carrid = p~carrid \\n FIELDS COUNT( \* ) AS count \\n INTO @FINAL(count). \\nout->write( count ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html