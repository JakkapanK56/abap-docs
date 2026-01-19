---
title: "ABAPEXEC_DISCONNECT"
description: |
  ABAPEXEC_DISCONNECT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_DISCONNECT.htm"
abapFile: "ABAPEXEC_DISCONNECT.html"
keywords: ["while", "if", "case", "data", "ABAPEXEC", "DISCONNECT"]
---

`EXEC SQL.`\\ 
  `DISCONNECT conn`\\ 
`ENDEXEC.`

`DISCONNECT conn` closes a connection. This static Native SQL statement closes the connection `conn` for the current work process, which discards all database changes not yet committed using a [database commit](ABENDB_COMMIT.html). For `conn`, a literal or a character-like host variable can be specified that contains the name of a secondary connection or service connection activated in the internal session.

All other specifications, most specifically the value *DEFAULT*, produce a runtime error. If the closed secondary connection or service connection is the current connection, the standard connection is set as the new current connection implicitly. All of these instances are case-sensitive.

-   A secondary or service connection activated using `CONNECT TO` without specifying a name after `AS` can be specified under its name `conn`.
-   A secondary or service connection activated using `CONNECT TO` while specifying a name after `AS` can be specified under this name `name`.

-   The closed connection can be active or inactive after its database LUW is closed.
-   It is recommended that database connections are only closed implicitly by the ABAP runtime framework and not explicitly, since it takes a lot of resources to restore a connection.

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html abapexec\_connection.html