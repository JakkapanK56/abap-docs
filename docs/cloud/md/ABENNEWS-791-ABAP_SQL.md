---
title: "ABENNEWS-791-ABAP_SQL"
description: |
  ABENNEWS-791-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-791-ABAP_SQL.htm"
abapFile: "ABENNEWS-791-ABAP_SQL.html"
keywords: ["select", "if", "ABENNEWS", "791", "ABAP", "SQL"]
---

[1\. New Cardinality Syntax for Joins](#ABAP_MODIFICATION_1@4@)

[2. New Addition `PRIVILEGED ACCESS`](#ABAP_MODIFICATION_2@4@)

A new syntax for specifying the [cardinality](ABENCARDINALITY_GLOSRY.html) of [joins](ABENJOIN_GLOSRY.html) is available:

\\{MANY | ONE |\\ \\{EXACT ONE\\}\\} TO \\{MANY | ONE |\\ \\{EXACT ONE\\}\\}

This syntax allows specifying a [source](ABENSOURCE_CARDINALITY_GLOSRY.html) and a [target cardinality](ABENTARGET_CARDINALITY_GLOSRY.html). The new cardinality syntax can be used to improve query performance. It can also be used in [SQL path expressions](ABENABAP_SQL_PATH_FILTER.html) and [CTE associations](ABAPWITH_ASSOCIATIONS_DEFINING.html).

With the new addition [`PRIVILEGED ACCESS`](ABAPSELECT_PRIVILEGED_ACCESS.html), [CDS access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html) can be disabled for a complete `SELECT` statement.

abenabap.html abennews.html abennews-79.html abennews-791.html