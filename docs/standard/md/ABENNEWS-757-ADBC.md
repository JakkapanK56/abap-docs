---
title: "ABENNEWS-757-ADBC"
description: |
  ABENNEWS-757-ADBC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-757-ADBC.htm"
abapFile: "ABENNEWS-757-ADBC.html"
keywords: ["if", "method", "class", "data", "ABENNEWS", "757", "ADBC"]
---

[1. Generic Method `EXECUTE`](#ABAP_MODIFICATION_1@4@)

[2\. Switching Result Sets](#ABAP_MODIFICATION_2@4@)

[3\. New Method for Closing a Connection](#ABAP_MODIFICATION_3@4@)

The new method `EXECUTE` of ADBC class `CL_SQL_STATEMENT` can be used to replace specific methods, see [ADBC - All Statements](ABENADBC_EXECUTE.html).

The new method `NEXT_RESULT_SET` of ADBC class `CL_SQL_RESULT_SET` can be used to access more than one result set, see example [ADBC - Multiple Result Sets](ABENADBC_MULTI_RESULT_ABEXA.html).

The class [`CL_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html) has a new method `CLOSE_NO_DISCONNECT` that closes an ADBC connection object and sets the database connection to inactive instead of closing it completely. Such a connection must not be reopened but can be reused.

abenabap.html abennews.html abennews-75.html abennews-757.html