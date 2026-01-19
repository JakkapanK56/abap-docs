---
title: "ABENNEWS-758-ABAP_SQL"
description: |
  ABENNEWS-758-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-758-ABAP_SQL.htm"
abapFile: "ABENNEWS-758-ABAP_SQL.html"
keywords: ["select", "while", "if", "data", "internal-table", "ABENNEWS", "758", "ABAP", "SQL"]
---

[1\. ABAP SQL Expressions on the Right Side](#ABAP_MODIFICATION_1@4@)

[2\. New Cardinality Syntax for Joins](#ABAP_MODIFICATION_2@4@)

[3\. Access to Multiple Internal Tables](#ABAP_MODIFICATION_3@4@)

[4. New Addition `PRIVILEGED ACCESS`](#ABAP_MODIFICATION_4@4@)

[ABAP SQL expressions](ABENABAP_SQL_EXPR_LOGEXP.html) can be defined on the right side of a condition enclosed in parentheses.

A new syntax for specifying the [cardinality](ABENCARDINALITY_GLOSRY.html) of [joins](ABENJOIN_GLOSRY.html) is available:

\\{MANY | ONE |\\ \\{EXACT ONE\\}\\} TO \\{MANY | ONE |\\ \\{EXACT ONE\\}\\}

This syntax allows specifying a [source](ABENSOURCE_CARDINALITY_GLOSRY.html) and a [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html), while the previously available numeric syntax only allowed specifying the target cardinality. The new cardinality syntax can be used to improve query performance. It can also be used in [SQL path expressions](ABENABAP_SQL_PATH_FILTER.html) and [CTE associations](ABAPWITH_ASSOCIATIONS_DEFINING.html).

It is now possible to process multiple internal tables accessed with [`FROM @itab`](ABAPSELECT_ITAB.html) within one ABAP SQL statement with the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html). Currently, this is restricted to joins of internal tables where no database tables are involved.

The new addition [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html) can be used to disable [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) for a complete `SELECT` statement.

abenabap.html abennews.html abennews-75.html abennews-758.html