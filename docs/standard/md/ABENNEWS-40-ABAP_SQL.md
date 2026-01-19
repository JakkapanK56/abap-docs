---
title: "ABENNEWS-40-ABAP_SQL"
description: |
  ABENNEWS-40-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-ABAP_SQL.htm"
abapFile: "ABENNEWS-40-ABAP_SQL.html"
keywords: ["select", "update", "delete", "loop", "do", "if", "data", "ABENNEWS", "ABAP", "SQL"]
---

[1. `INNER JOIN` and `LEFT OUTER JOIN`](#ABAP_MODIFICATION_1@4@)

[2\. Subqueries](#ABAP_MODIFICATION_2@4@)

[3. `HAVING` Clause](#ABAP_MODIFICATION_3@4@)

It is now possible to read records from multiple logically associated database tables using a single `SELECT` statement. This can be done using the new constructs `INNER JOIN` and `LEFT OUTER JOIN` in the [`FROM` clause](ABAPFROM_CLAUSE.html). In the past this was normally done using a nested `SELECT` loop. Replacing these loops with joins produces greatly improved runtime performance.

[Subqueries](ABENSUBQUERY_GLOSRY.html) are now possible in the `WHERE` conditions of `SELECT`, `UPDATE`, and `DELETE` statements. Tasks that previously required multiple `SQL` statements can now be solved more efficiently. A description of these subqueries is available in the documentation of the [relational expressions](ABENABAP_SQL_STMT_LOGEXP.html).

The new [`HAVING` clause](ABAPHAVING_CLAUSE.html) makes it possible to define further conditions for a set of results of a `SELECT` statement created using [aggregation](ABAPSELECT_AGGREGATE.html) and [grouping](ABAPGROUPBY_CLAUSE.html).

abenabap.html abennews.html abennews-4.html abennews-40.html