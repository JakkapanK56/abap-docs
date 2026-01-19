---
title: "ABAPUNION_CLAUSE"
description: |
  ABAPUNION_CLAUSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPUNION_CLAUSE.htm"
abapFile: "ABAPUNION_CLAUSE.html"
keywords: ["select", "if", "case", "data", "types", "ABAPUNION", "CLAUSE"]
---

``... \{\ [`FROM`](ABAPFROM_CLAUSE.html) source        [`FIELDS`](ABAPFIELDS_CLAUSE.html)\ [`select_clause`](ABAPSELECT_CLAUSE.html)\ \}\    |\ \{\ [`select_clause`](ABAPSELECT_CLAUSE.html)\        [`FROM`](ABAPFROM_CLAUSE.html) source \}\        [[`WHERE`](ABAPWHERE.html)\ [`sql_cond`](ABENABAP_SQL_STMT_LOGEXP.html)]\        [[`GROUP BY`](ABAPGROUPBY_CLAUSE.html) group]\ [[`HAVING`](ABAPHAVING_CLAUSE.html) group_cond]\        [[`ORDER BY`](ABAPORDERBY_CLAUSE.html)\ [`[UP TO n ROWS [OFFSET o]]`](ABAPSELECT_UP_TO_OFFSET.html)]\        [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)]  ...``

Possible [clauses and additions](ABENSELECT_CLAUSES.html) of [queries](ABENASQL_QUERY_GLOSRY.html) whose result sets are joined using [`UNION`](ABAPUNION.html), [`INTERSECT`](ABAPUNION.html), or [`EXCEPT`](ABAPUNION.html). The result set of `SELECT` statements joined using `UNION`, `INTERSECT`, or `EXCEPT` is tabular and the [target area](ABAPINTO_CLAUSE.html) must be used appropriately.

The following special conditions apply to clauses and additions of the `SELECT` statements joined using `UNION`, `INTERSECT`, or `EXCEPT`:

The number of `SELECT` statements that can be joined using `UNION`, `INTERSECT`, or `EXCEPT` is not limited by a fixed value.

Creates the union set of three [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) on the same DDIC database table in a subquery of a [`WITH`](ABAPWITH.html) statement. The union set is selected in a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html), which makes it possible to use a single `WHERE` condition for the entire result set in the main query of the `WITH` statement. If the union set were created in a main query, every single `SINGLE` statement would have to contain the same `WHERE` condition or `HAVING` condition.

-   The [`SELECT` list](ABAPSELECT_LIST.html) must consist of a list of specified columns [`col_spec`](ABAPSELECT_CLAUSE_COL_SPEC.html) as [SQL expressions](ABAPSQL_EXPR.html). `*` and `data_source~*` cannot be specified.
-   All [`SELECT` lists](ABAPSELECT_LIST.html) of `SELECT` statements grouped using `UNION`, `INTERSECT`, or `EXCEPT` must have the same number of elements.
-   The columns assigned to each other must have the same type properties with respect to [built-in data type](ABENDDIC_BUILTIN_TYPES.html), length, and number of digits after the decimal point, with the following exceptions:

-   Numeric types [`INT1`](ABENDDIC_BUILTIN_TYPES.html), [`INT2`](ABENDDIC_BUILTIN_TYPES.html), [`INT4`](ABENDDIC_BUILTIN_TYPES.html) and [`INT8`](ABENDDIC_BUILTIN_TYPES.html) can create a column. The resulting column has the data type with the greatest value range.
-   Numeric types [`DEC`](ABENDDIC_BUILTIN_TYPES.html) can have different lengths but must have the same number of decimal places. The resulting column has the data type with the greatest length. The corresponding special types [`CURR`](ABENDDIC_BUILTIN_TYPES.html) and [`QUAN`](ABENDDIC_BUILTIN_TYPES.html) are handled here like [`DEC`](ABENDDIC_BUILTIN_TYPES.html).
-   The numeric types [`DF16_DEC`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_DEC`](ABENDDIC_BUILTIN_TYPES.html) are handled like the numbers of type [`DEC`](ABENDDIC_BUILTIN_TYPES.html) as they are stored, and the rule above applies with respect to lengths and decimal places.
-   Character-like types [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) can have different lengths. The resulting column has the data type with the greatest length. The corresponding special types [`CLNT`](ABENDDIC_BUILTIN_TYPES.html), [`LANG`](ABENDDIC_BUILTIN_TYPES.html), [`CUKY`](ABENDDIC_BUILTIN_TYPES.html), and [`UNIT`](ABENDDIC_BUILTIN_TYPES.html) are handled here like [`CHAR`](ABENDDIC_BUILTIN_TYPES.html).

-   All other types must be exactly the same. This applies specifically to [`NUMC`](ABENDDIC_BUILTIN_TYPES.html) and [`RAW`](ABENDDIC_BUILTIN_TYPES.html), where the lengths must match. The different categories of [strings](ABENDDIC_CHARACTER_BYTE_TYPES.html) cannot be combined either.
-   The addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) is not allowed in the [`WHERE`](ABAPWHERE.html) conditions of the `SELECT` statements involved.
-   An [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause cannot be specified for individual result sets. Instead, `ORDER BY` can be applied to the union, intersection, or difference result set of main queries.

-   If required, the column names of the individual result sets can be modified using alias names after `AS`.
-   If the column names of the result sets are not identical, the column names are used from the result set of the `SELECT` statement on the left of `UNION`, `INTERSECT`, or `EXCEPT`. In this type of case, the names are usually not visible, except for subqueries in the [`WITH`](ABAPWITH.html) statement.
-   The numeric types [`DF16_DEC`](ABENDDIC_BUILTIN_TYPES.html) and [`DF34_DEC`](ABENDDIC_BUILTIN_TYPES.html) can only be used together in a column if their decimal places match.
-   SQL expressions, host expressions, and host variables can be used to synchronize the columns of the result set of the `SELECT` statements involved.
-   Each of the joined `SELECT` statements has its own [client handling](ABENCLIENT_HANDLING_GLOSRY.html).
-   An addition [`USING`](ABAPSELECT_CLIENT.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause only affects the `SELECT` statement for which it is specified.
-   The obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) in the [`FROM`](ABAPFROM_CLAUSE.html) clause only affects the `SELECT` statement for which it is specified.

-   `UNION`

-   [Union of Different Tables](ABENSELECT_UNION_ABEXA.html)
-   [Union with Aggregate Expression](ABENSELECT_UNION_SUM_ABEXA.html)
-   [Union with Global Temporary Table](ABENSELECT_UNION_SUM_GTT_ABEXA.html)
-   [Union for Building a Ranges Table](ABENDEMO_UNION_RANGES_ABEXA.html)
-   [Union of CDS View Entity with Input Parameters](ABENSELECT_UNION_CDS_PARA_ABEXA.html)

-   `INTERSECT`

-   [Intersection of Multiple Tables](ABENSELECT_INTERSECT_ABEXA.html)
-   [Intersection with Aggregate Expression](ABENSELECT_INTERSECT_MAX_ABEXA.html)
-   [Intersection with Global Temporary Table](ABENSELECT_INTERSECT_MAX_GTT_ABEXA.html)
-   [Intersection of CDS View Entity with Input Parameters](ABENSELECT_INTER_CDS_PARA_ABEXA.html)

-   `EXCEPT`

-   [Difference of Multiple Tables](ABENSELECT_EXCEPT_ABEXA.html)
-   [Difference with Aggregate Expression](ABENSELECT_EXCEPT_MIN_ABEXA.html)
-   [Difference with Global Temporary Table](ABENSELECT_EXCEPT_MIN_GTT_ABEXA.html)
-   [Difference of CDS View Entity with Input Parameters](ABENSELECT_EXCEPT_CDS_PARA_ABEXA.html)

WITH +aggregates AS ( \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n 'MAX' AS function, \\n MAX( CAST( seatsocc AS DEC( 31,2 ) ) ) AS agg \\n GROUP BY carrid, connid \\n UNION \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n 'MIN' AS function, \\n MIN( CAST( seatsocc AS DEC( 31,2 ) ) ) AS agg \\n GROUP BY carrid, connid \\n UNION \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, 'AVG' AS function, \\n AVG( seatsocc AS DEC( 31,2 ) ) AS agg \\n GROUP BY carrid, connid ) \\n SELECT \* \\n FROM +aggregates \\n WHERE carrid = 'LH' AND connid = '0400' \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapunion.html