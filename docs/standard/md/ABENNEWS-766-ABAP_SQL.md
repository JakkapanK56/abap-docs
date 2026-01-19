---
title: "ABENNEWS-766-ABAP_SQL"
description: |
  ABENNEWS-766-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-766-ABAP_SQL.htm"
abapFile: "ABENNEWS-766-ABAP_SQL.html"
keywords: ["select", "if", "data", "ABENNEWS", "766", "ABAP", "SQL"]
---

[1. Cardinality in `LEFT OUTER JOIN`](#ABAP_MODIFICATION_1@4@)

[2\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_2@4@)

In a [`LEFT OUTER JOIN`](ABAPSELECT_JOIN.html), an addition `ONE TO MANY` can now be specified for the [cardinality](ABENCARDINALITY_GLOSRY.html). This is evaluated as a note for optimization by [SAP HANA databases](ABENHANA_DATABASE_GLOSRY.html).

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_766.html), which handles the statement more strictly than the regular syntax check.

abenabap.html abennews.html abennews-76.html abennews-766.html