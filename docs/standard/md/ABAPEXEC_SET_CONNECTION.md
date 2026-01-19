---
title: "ABAPEXEC_SET_CONNECTION"
description: |
  ABAPEXEC_SET_CONNECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_SET_CONNECTION.htm"
abapFile: "ABAPEXEC_SET_CONNECTION.html"
keywords: ["select", "while", "if", "case", "data", "ABAPEXEC", "SET", "CONNECTION"]
---

`EXEC SQL.`\\ 
  `SET CONNECTION \{conn|DEFAULT\}`\\ 
`ENDEXEC.`

`SET CONNECTION` selects a connection. This static Native SQL statement sets the current connection for all following static Native SQL statements. For `conn`, a literal or a character-like host variable can be specified that contains the name of connection activated in the current session.

All of these instances are case-sensitive. When an unknown connection is specified, the current connection remains unchanged and `sy-subrc` is set to 4.

-   `DEFAULT` in uppercase letters or `DEFAULT` specified directly can be used to specify the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html).
-   A secondary or service connection activated using `CONNECT TO` without specifying a name after `AS` can be specified under its name `conn`.
-   A secondary or service connection activated using `CONNECT TO` while specifying a name after `AS` can be specified under this name `name`.

-   When a current connection is switched to a different current connection, no database LUW is closed and no new LUW is opened.
-   Any changes to the current connection only affect static Native SQL after `EXEC SQL`. ABAP SQL and any other variant of Native SQL remain unaffected.
-   The current connection is switched regardless of whether the connections involved are active or inactive after their database LUWs are closed.

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html abapexec\_connection.html