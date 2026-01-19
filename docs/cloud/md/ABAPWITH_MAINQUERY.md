---
title: "ABAPWITH_MAINQUERY"
description: |
  ABAPWITH_MAINQUERY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPWITH_MAINQUERY.htm"
abapFile: "ABAPWITH_MAINQUERY.html"
keywords: ["select", "update", "loop", "do", "if", "case", "data", "internal-table", "ABAPWITH", "MAINQUERY"]
---

``... [[`SINGLE [FOR UPDATE]`](ABAPSELECT_SINGLE.html)]\      \{\ [`FROM`](ABAPFROM_CLAUSE.html) source        [`FIELDS`](ABAPFIELDS_CLAUSE.html)\ [`select_clause`](ABAPSELECT_CLAUSE.html)\ \}\    |\ \{\ [`select_clause`](ABAPSELECT_CLAUSE.html)\        [`FROM`](ABAPFROM_CLAUSE.html) source \}\      [[`WHERE`](ABAPWHERE.html) sql_cond]\      [[`GROUP BY`](ABAPGROUPBY_CLAUSE.html) group]\ [[`HAVING`](ABAPHAVING_CLAUSE.html) group_cond]\      [[`ORDER BY`](ABAPORDERBY_CLAUSE.html) sort_key]\      [[`db_hints`](ABENABAP_SQL_DB_HINTS.html)] ...``

Possible [clauses and additions](ABENSELECT_CLAUSES.html) of the main query of a [`WITH`](ABAPWITH.html) statement. All clauses are possible as in a standalone [`SELECT`](ABAPSELECT.html) statement except for [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html), and they have the same effect. In particular, a `SELECT` loop is opened under the same circumstances as in the standalone [`SELECT`](ABAPSELECT.html) statement. In this case, this loop must be closed with [`ENDWITH`](ABAPENDWITH.html).

The result set of a common table expression does not have a client column, which means that the [`FROM`](ABAPFROM_CLAUSE.html) clause of the main query cannot contain the addition `USING` for switching for disabling [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html).

If an internal table [`@itab`](ABAPSELECT_DATA_SOURCE.html) with elementary row type is accessed in the [`FROM`](ABAPFROM_CLAUSE.html) clause of a common table expression, the [`SELECT` list](ABAPSELECT_LIST.html) cannot be `*` or contain `data_source~*`.

The example shows a `WITH` statement whose main query creates a tabular result set. Since the example writes to an internal table `itab`, no `SELECT` loop is opened.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nWITH \\n +carriers AS ( SELECT FROM scarr \\n FIELDS carrid, carrname ) \\n SELECT FROM spfli AS s \\n INNER JOIN +carriers AS c \\n ON s~carrid = c~carrid \\n FIELDS c~carrname, s~connid \\n WHERE s~carrid = 'UA' \\n INTO TABLE @FINAL(itab) \\n UP TO 10 ROWS. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapwith.html