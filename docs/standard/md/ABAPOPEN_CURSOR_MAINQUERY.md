---
title: "ABAPOPEN_CURSOR_MAINQUERY"
description: |
  ABAPOPEN_CURSOR_MAINQUERY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_CURSOR_MAINQUERY.htm"
abapFile: "ABAPOPEN_CURSOR_MAINQUERY.html"
keywords: ["select", "if", "data", "ABAPOPEN", "CURSOR", "MAINQUERY"]
---

``... \{\ [`FROM`](ABAPFROM_CLAUSE.html) source        [`FIELDS`](ABAPFIELDS_CLAUSE.html)\ [`select_clause`](ABAPSELECT_CLAUSE.html)\ \}\    |\ \{\ [`select_clause`](ABAPSELECT_CLAUSE.html)\        [`FROM`](ABAPFROM_CLAUSE.html) source \}\      [[[`FOR ALL ENTRIES IN`](ABENWHERE_ALL_ENTRIES.html) itab]\        [`WHERE`](ABAPWHERE.html) sql_cond]\      [[`GROUP BY`](ABAPGROUPBY_CLAUSE.html) group]\ [[`HAVING`](ABAPHAVING_CLAUSE.html) group_cond]\      [[`ORDER BY`](ABAPORDERBY_CLAUSE.html) sort_key]\      [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)] ...``

Possible [clauses and additions](ABENSELECT_CLAUSES.html) of the [main query](ABENMAINQUERY_GLOSRY.html) after [`OPEN CURSOR`](ABAPOPEN_CURSOR.html). All the same clauses are possible as for a standalone [`SELECT`](ABAPSELECT.html) statement except for [`SINGLE`](ABAPSELECT_SINGLE.html). The clauses define the result set, which can be accessed using the [`FETCH`](ABAPFETCH.html) statement. The result set is regarded as having multiple rows.

The addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) cannot be used if [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) are defined using `WITH`.

[`OPEN CURSOR`](ABAPOPEN_CURSOR.html) statement with all possible clauses.

OPEN CURSOR @DATA(dbcur) FOR \\n SELECT FROM sflight \\n FIELDS carrid, \\n connid, \\n SUM( seatsocc ) AS seatsocc \\n WHERE carrid = 'LH' \\n GROUP BY carrid, connid \\n HAVING SUM( seatsocc ) > 1000 \\n ORDER BY carrid, connid. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapopen\_cursor.html