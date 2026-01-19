---
title: "ABENNEWS-781-ABAP_SQL"
description: |
  ABENNEWS-781-ABAP_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-781-ABAP_SQL.htm"
abapFile: "ABENNEWS-781-ABAP_SQL.html"
keywords: ["update", "if", "ABENNEWS", "781", "ABAP", "SQL"]
---

[1\. New String Functions](#ABAP_MODIFICATION_1@4@)

[2. Addition to the `UPDATE FROM` Clause](#ABAP_MODIFICATION_2@4@) 

[3\. Strict Mode of the Syntax Check](#ABAP_MODIFICATION_3@4@)

ABAP SQL now supports the new string functions [`REPLACE_REGEXPR`](ABENSQL_STRING_FUNC.html), [`LIKE_REGEXPR`](ABENSQL_STRING_FUNC.html), and [`OCCURRENCES_REGEXPR`](ABENSQL_STRING_FUNC.html), which support regular expressions.

[Set indicators](ABAPUPDATE_SET_INDICATOR.html) can now be used as additions after the [`UPDATE FROM`](ABAPUPDATE_SOURCE.html) clause to indicate columns for updating.

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](ABENABAP_SQL_STRICTMODE_781.html), which handles the statement more strictly than the regular syntax check.

abenabap.html abennews.html abennews-78.html abennews-781.html