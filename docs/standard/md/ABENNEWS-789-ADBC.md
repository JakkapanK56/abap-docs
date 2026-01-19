---
title: "ABENNEWS-789-ADBC"
description: |
  ABENNEWS-789-ADBC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-789-ADBC.htm"
abapFile: "ABENNEWS-789-ADBC.html"
keywords: ["method", "class", "data", "ABENNEWS", "789", "ADBC"]
---

The class [`CL_SQL_CONNECTION`](ABENCL_SQL_CONNECTION.html) has a new method `CLOSE_NO_DISCONNECT` that closes an ADBC connection object and sets the database connection to inactive instead of closing it completely. Such a connection must not be reopened but can be reused.

abenabap.html abennews.html abennews-79.html abennews-792.html