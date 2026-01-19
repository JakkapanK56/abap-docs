---
title: "ABAPOPEN_CURSOR_SHORTREF"
description: |
  ABAPOPEN_CURSOR_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOPEN_CURSOR_SHORTREF.htm"
abapFile: "ABAPOPEN_CURSOR_SHORTREF.html"
keywords: ["select", "if", "case", "data", "ABAPOPEN", "CURSOR", "SHORTREF"]
---

[Reference](ABAPOPEN_CURSOR.html)

``OPEN CURSOR [WITH HOLD] @dbcur FOR    [[`WITH`](ABAPWITH_SHORTREF.html)\      +cte1 AS [`subquery`](ABENSUBQUERY_SHORTREF.html)[,      +cte2 AS [`subquery`](ABENSUBQUERY_SHORTREF.html)\      ...]]\    SELECT \{ ...             FROM ... \}\         |\ \{ FROM ...             FIELDS ... \}\           [[FOR ALL ENTRIES IN itab] WHERE [`sql_cond`](ABENSQL_COND_SHORTREF.html)]\           [GROUP BY ...]\ [HAVING [`sql_cond`](ABENSQL_COND_SHORTREF.html)]\           [ORDER BY ...]\           [UP TO n ROWS]\           [OFFSET o]\           [BYPASSING BUFFER]\           [CONNECTION con|(con_syntax)].``

[ABAP SQL](ABENABAP_SQL_GLOSRY.html) statement. Opens a [database cursor](ABENDATABASE_CURSOR_GLOSRY.html) for the selection defined using `SELECT` and associates a cursor variable `dbcur` with this database cursor.

-   [`WITH +cte`](ABAPWITH.html)\\
    Introduces a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html)`+cte`.
-   [`WITH HOLD`](ABAPOPEN_CURSOR.html)\\
    Leaves the cursor open in the case of an explicitly triggered [database commit](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html).
-   [`[FIELDS] ...`](ABAPSELECT.html)\\
    Defines a selection set.
-   [`FROM ...`](ABAPFROM_CLAUSE.html)\\
    Specifies the database tables.
-   [`[FOR ALL ENTRIES IN itab] WHERE sql_cond`](ABAPWHERE.html)\\
    Specifies a condition for the result set.
-   [`GROUP BY ... [HAVING sql_cond]`](ABAPGROUPBY_CLAUSE.html)\\
    Groups rows and sets a condition on the grouped rows.
-   [`ORDER BY ...`](ABAPORDERBY_CLAUSE.html)\\
    Sorts the result set.
-   [`OFFSET, UP TO`](ABAPSELECT_UP_TO_OFFSET.html)\\
    Restricts the result set.
-   [ABAP-specific additions](ABAPSELECT_OPTIONS.html)

abenabap.html abenabap\_reference.html abenabap\_shortref.html