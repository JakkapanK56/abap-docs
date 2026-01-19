---
title: "ABENNEWS-768-ABAP_SQL"
description: |
  ABENNEWS-768-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-768-ABAP_SQL.htm"
abapFile: "ABENNEWS-768-ABAP_SQL.html"
keywords: ["select", "if", "types", "ABENNEWS", "768", "ABAP", "SQL"]
---

[1\. Conversion Functions](#ABAP_MODIFICATION_1@4@)

[2. `FOR ALL ENTRIES` and Strings in the `SELECT` List](#ABAP_MODIFICATION_2@4@) 

[3\. Strict Mode in the Syntax Check](#ABAP_MODIFICATION_3@4@)

The new type conversion functions [`BINTOHEX`](ABENSQL_TYPE_CONV_FUNC.html) and [`HEXTOBIN`](ABENSQL_TYPE_CONV_FUNC.html) make it possible to convert byte strings to character strings (and the other way round) in [SQL expressions](ABAPSQL_EXPR.html), which is not possible with a [`CAST`](ABENSQL_CAST.html) expression.

In the previous [strict modes of the syntax check](ABENABAP_SQL_STRICT_MODES.html), the addition [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) of statement [`SELECT`](ABAPSELECT.html) could not be specified together with columns of the types `STRING` and `RAWSTRING` or `LCHR` and `LRAW` in the [`SELECT` list](ABAPSELECT_LIST.html). This restriction has been removed and now the syntax check simply issues a warning.

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_768.html), which handles the statement more strictly than the regular syntax check.

abenabap.html abennews.html abennews-76.html abennews-768.html