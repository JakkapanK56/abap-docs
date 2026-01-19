---
title: "ABENNEWS-640-SQL"
description: |
  ABENNEWS-640-SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-SQL.htm"
abapFile: "ABENNEWS-640-SQL.html"
keywords: ["update", "if", "internal-table", "ABENNEWS", "640", "SQL"]
---

[1\. Dynamic Checks on Ranges Tables](#ABAP_MODIFICATION_1@4@)

[2\. Dynamic Checks on Internal Tables](#ABAP_MODIFICATION_2@4@)

[3\. Upper Limit for Values in Conditions Increased](#ABAP_MODIFICATION_3@4@)

From ABAP release 6.40, it is possible to analyze a [ranges table](ABENRANGES_TABLE_GLOSRY.html) in a [dynamic `WHERE` condition](ABENWHERE_LOGEXP_DYNAMIC.html)

From ABAP release 6.40, it is possible to analyze an internal table specified in [`FOR ALL ENTRIES`](ABENWHERE_ALL_ENTRIES.html) in a [dynamic `WHERE` condition](ABENWHERE_LOGEXP_DYNAMIC.html). The syntax comparison with a column in the internal table can be made statically or dynamically.

This change was also transported back to ABAP release 6.20.

From ABAP release 6.40, the upper limit for the space required for all comparison values in `WHERE`, `HAVING`, or `ON` conditions as well as the values in the addition `SET` of the statement `UPDATE` is 64 MB. Previously, this limit was 64 KB.

This change was also transported back to ABAP release 6.20.

abenabap.html abennews.html abennews-6.html abennews-640.html