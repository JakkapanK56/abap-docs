---
title: "ABAPORDERBY_CLAUSE_ADDITIONS"
description: |
  ABAPORDERBY_CLAUSE_ADDITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPORDERBY_CLAUSE_ADDITIONS.htm"
abapFile: "ABAPORDERBY_CLAUSE_ADDITIONS.html"
keywords: ["select", "if", "method", "class", "data", "types", "internal-table", "ABAPORDERBY", "CLAUSE", "ADDITIONS"]
---

[Short Reference](ABAPSELECT_SHORTREF.html)

`... [ASCENDING|DESCENDING]\      [\{NULLS FIRST\}|\{NULLS LAST\}] ...`

[1. `... ASCENDING|DESCENDING`](#ABAP_ADDITION_1@3@)

[2. `... \{NULLS FIRST\}|\{NULLS LAST\}`](#ABAP_ADDITION_2@3@)

These additions to single column specifications in the [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause of a `SELECT` statement determine the sort direction and the handling of [null values](ABENNULL_VALUE_GLOSRY.html).

The additions `ASCENDING` and `DESCENDING` determine whether the column or expression in question is sorted in ascending or descending order. If neither addition is specified, the column or expression is sorted in ascending order. The priority of sorting is based on the order in which the components `col1, col2...` or `a1, a2 ...` are specified.

The rows of DDIC database table `sflight` are grouped by the columns `carrid` and `connid`, where for each group the minimum of column `seatsocc` is determined. The selection is sorted in ascending order by `carrid` and in descending order by the minimum of occupied seats. The alternative name `min` is used for the aggregate expression.

The additions `NULLS FIRST` and `NULLS LAST` determine whether [null values](ABENNULL_VALUE_GLOSRY.html) are placed in front of or after non-null values. If neither addition is specified, potential [null values](ABENNULL_VALUE_GLOSRY.html) are placed at the beginning of the result set. If only `DESCENDING` is specified and no [nulls](ABENNULL_VALUE_GLOSRY.html) occur, [null values](ABENNULL_VALUE_GLOSRY.html) are placed at the end of the result set.

The following table shows the default behavior of the additions `ASCENDING`, `DESCENDING`, `NULLS FIRST`, and `NULLS LAST`.

Columns specified after `ORDER BY` cannot be of the [type](ABENDDIC_BUILTIN_TYPES.html)\\ `LCHR`, `LRAW`, `STRING`, `RAWSTRING`, or `GEOM_EWKB`.

To generate null values, a left outer join is performed on table `DEMO_SFLIGHT_AGG` and the result set is sorted by its column `CARRID` with nulls at the end of the table. The class `CL_DEMO_SELECT_ORDER_NULLS` executes the statement and displays the result.

-   The additions `NULLS FIRST` and `NULLS LAST` are not supported by all databases. In an ABAP program, it is possible to use the method `USE_FEATURES` of the class [`CL_ABAP_DBFEATURES`](ABENCL_ABAP_DBFEATURES.html) to check whether the current database system or a database system accessed using a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) supports the use of these additions. This requires the constant `ORDER_BY_NULLS_FIRST_LAST` of this class to be passed to the method in an internal table.
-   `NULLS FIRST` and `NULLS LAST` enforce [strict mode from ABAP release 7.78](ABENABAP_SQL_STRICTMODE_778.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT carrid, connid, MIN( seatsocc ) AS min \\n FROM sflight \\n GROUP BY carrid, connid \\n ORDER BY carrid ASCENDING, min DESCENDING \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write\_data( result ). \\n\\ \\nout->display( ). SELECT FROM demo\_sflight\_agg AS a LEFT OUTER JOIN demo\_sflight\_agg AS b \\n ON a~carrid = b~carrid AND \\n a~connid = b~connid AND \\n a~fldate = b~fldate AND \\n a~connid LIKE '04%' \\n FIELDS a~carrid, \\n a~fldate AS a\_fldate, \\n a~connid, \\n a~seatsocc, \\n b~carrid AS b\_carrid, \\n b~fldate AS b\_fldate, \\n b~connid AS b\_connid, \\n b~seatsocc AS b\_seatsocc \\n WHERE a~carrid LIKE 'A%' \\n AND a~fldate LIKE '%' \\n AND a~connid LIKE '0%' \\n ORDER BY b~carrid NULLS LAST \\n INTO TABLE @FINAL(result). **Addition** **Default Behavior of Result Set**\\ No addition `ASCENDING` + `NULLS FIRST`\\ `NULLS LAST` `ASCENDING` + `NULLS LAST`\\ `DESCENDING` `DESCENDING` + `NULLS LAST` abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abaporderby\_clause.html