---
title: "ABENNEWS-772-NATIVE_SQL"
description: |
  ABENNEWS-772-NATIVE_SQL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-772-NATIVE_SQL.htm"
abapFile: "ABENNEWS-772-NATIVE_SQL.html"
keywords: ["if", "method", "class", "ABENNEWS", "772", "NATIVE", "SQL"]
---

The new method [`GET_ABAP_CONNECTION`](ABENCL_SQL_CONNECTION.html) of the class `CL_SQL_CONNECTION` works in the same way as the existing method [`GET_CONNECTION`](ABENCL_SQL_CONNECTION.html) if the latter is passed the value `abap_true`\\ `SHARABLE` for a connection shared in ABAP SQL, Native SQL, and AMDP. `GET_ABAP_CONNECTION` can generally be used instead of `GET_CONNECTION`, unless it needs to be called with the value `abap_false` (default) for the parameter `SHARABLE` to create an exclusive connection.

abenabap.html abennews.html abennews-77.html abennews-772.html