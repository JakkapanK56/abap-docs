---
title: "ABAPSELECT_MAINQUERY"
description: |
  ABAPSELECT_MAINQUERY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPSELECT_MAINQUERY.htm"
abapFile: "ABAPSELECT_MAINQUERY.html"
keywords: ["select", "update", "loop", "if", "case", "data", "internal-table", "ABAPSELECT", "MAINQUERY"]
---

``... [[`SINGLE [FOR UPDATE]`](ABAPSELECT_SINGLE.html)]\      \{\ [`FROM`](ABAPFROM_CLAUSE.html) source        [`FIELDS`](ABAPFIELDS_CLAUSE.html)\ [`select_clause`](ABAPSELECT_CLAUSE.html)\ \}\    |\ \{\ [`select_clause`](ABAPSELECT_CLAUSE.html)\        [`FROM`](ABAPFROM_CLAUSE.html) source \}\      [[[`FOR ALL ENTRIES IN`](ABENWHERE_ALL_ENTRIES.html) itab]\        [`WHERE`](ABAPWHERE.html) sql_cond]\      [[`GROUP BY`](ABAPGROUPBY_CLAUSE.html) group]\ [[`HAVING`](ABAPHAVING_CLAUSE.html) group_cond]\      [[`ORDER BY`](ABAPORDERBY_CLAUSE.html) sort_key]\      [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)]  ...``

Possible [clauses and additions](ABENSELECT_CLAUSES.html) of a [main query](ABENMAINQUERY_GLOSRY.html) represented by a standalone [`SELECT`](ABAPSELECT.html) statement. The clauses and additions define the result set of the `SELECT` statement:

The `SELECT` clause [`select_clause`](ABAPSELECT_CLAUSE.html) can be specified before or after the [`FROM` clause](ABAPFROM_CLAUSE.html). After the `FROM` clause, the `SELECT` clause must be prefixed with the addition `FIELDS`.

[`SELECT`](ABAPSELECT.html) statement with all possible clauses.

-   Rows of the result set

-   Multirow result set
-   If `SINGLE` is not specified and if [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) are not exclusively specified in the [`SELECT` list](ABAPSELECT_LIST.html) of the `SELECT` clause [`select_clause`](ABAPSELECT_CLAUSE.html), the result set is multirow or tabular by default. All database rows that are selected by the remaining additions of the statement `SELECT` are included in the result set. If the addition [`ORDER BY`](ABAPORDERBY_CLAUSE.html) is not used, the order of the rows in the result set is not defined and can be different if the same statement `SELECT` is executed multiple times. A data object specified after [`INTO`](ABAPINTO_CLAUSE.html) can be an internal table and the addition [`APPENDING`](ABAPINTO_CLAUSE.html) can be used. If no internal table is specified after `INTO` or `APPENDING`, the statement `SELECT` for multirow result sets initiates a loop that must be closed using `ENDSELECT`.
-   Single row result set
-   The optional addition [`SINGLE`](ABAPSELECT_SINGLE.html) defines a single-row result set that can be protected against parallel changes by another program. When using `SINGLE`, it is not possible to specify an internal table as the target object, and the addition `SINGLE` cannot be combined with all additions of the `SELECT` statement.

-   Columns of the result set
-   The `SELECT` clause [`select_clause`](ABAPSELECT_CLAUSE.html) defines the structure of the result set. It consists mainly of a [`SELECT` list](ABAPSELECT_LIST.html) that defines the columns of the result set. Optionally, duplicate rows can be excluded.
-   Data Sources
-   The [`FROM`](ABAPFROM_CLAUSE.html) clause specifies [data sources](ABAPSELECT_DATA_SOURCE.html)\\ `source` from which data is read. These can either be data sources in the database accessed by the current query or they can be [internal tables](ABAPSELECT_ITAB.html). Data sources in the database must be defined in the ABAP Dictionary.
-   Conditions
-   The result set can be restricted using the [`WHERE`](ABAPWHERE.html) clause. The optional addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) can be used to compare the content of a column on the database with a component with all rows of a structured internal table `itab`.
-   Grouping
-   The [`GROUP BY`](ABAPGROUPBY_CLAUSE.html) clause merges multiple database rows into one row of the result set. The [`HAVING`](ABAPHAVING_CLAUSE.html) clause restricts the merged rows.
-   Database Hints
-   [`db_hints`](ABENABAP_SQL_DB_HINTS.html) can be used to specify [database hints](ABENDATABASE_HINT_GLOSRY.html).
-   Sorting
-   The [`ORDER BY`](ABAPORDERBY_CLAUSE.html) clause sorts the result set. If `ORDER BY` is not specified, the order of the rows in the result set is undefined.

-   Although the `WHERE` condition is optional, it should always be specified for performance reasons. In most cases, the result should already be restricted by the database system and not only on the application server.

SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n SUM( seatsocc ) AS seatsocc \\n WHERE carrid = 'LH' \\n GROUP BY carrid, connid \\n HAVING SUM( seatsocc ) > 1000 \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapselect.html