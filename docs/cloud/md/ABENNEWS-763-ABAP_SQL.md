---
title: "ABENNEWS-763-ABAP_SQL"
description: |
  ABENNEWS-763-ABAP_SQL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-763-ABAP_SQL.htm"
abapFile: "ABENNEWS-763-ABAP_SQL.html"
keywords: ["select", "delete", "if", "ABENNEWS", "763", "ABAP", "SQL"]
---

[1. New Addition `OFFSET` in `SELECT`](#ABAP_MODIFICATION_1@4@)

[2\. SQL Functions](#ABAP_MODIFICATION_2@4@)

[3. New Additions in `DELETE dbtab`](#ABAP_MODIFICATION_3@4@)

An addition [`OFFSET`](ABAPSELECT_UP_TO_OFFSET.html) can now be specified to specify the first row of the result set.

The new string functions [`LEFT`](ABENSQL_STRING_FUNC.html), [`CONCAT_WITH_SPACE`](ABENSQL_STRING_FUNC.html), [`INSTR`](ABENSQL_STRING_FUNC.html), and [`RPAD`](ABENSQL_STRING_FUNC.html) perform operations on strings. This means ABAP SQL now supports the same string functions as [ABAP CDS](ABENCDS_SQL_FUNCTIONS_CHARACTER_V1.html).

In the variant `DELETE FROM target` of the statement [`DELETE`](ABAPDELETE_DBTAB.html), the additions [`ORDER BY`](ABAPDELETE_WHERE.html), [`OFFSET`](ABAPDELETE_WHERE.html), and [`UP TO`](ABAPDELETE_WHERE.html) can now be specified to restrict the number of rows to delete.

abenabap.html abennews.html abennews-76.html abennews-763.html