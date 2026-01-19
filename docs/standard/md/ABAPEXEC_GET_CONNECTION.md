---
title: "ABAPEXEC_GET_CONNECTION"
description: |
  ABAPEXEC_GET_CONNECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_GET_CONNECTION.htm"
abapFile: "ABAPEXEC_GET_CONNECTION.html"
keywords: ["if", "data", "ABAPEXEC", "GET", "CONNECTION"]
---

`EXEC SQL.`\\ 
  `GET CONNECTION :conn`\\ 
`ENDEXEC.`

`GET CONNECTION` determines the connection. This static Native SQL statement assigns the name of the current connection to `conn`. `conn` expects a character-like host variable. If the current connection was activated using the statement `CONNECT TO` and `AS` was used to give it a name at the same time, this name is assigned. If the connection is activated without being given a name, the name of the secondary connection or service connection is assigned. If the current connection is the standard connection, the value *DEFAULT* is assigned.

The current connection can be active or inactive after its database LUW is closed.

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html abapexec\_connection.html