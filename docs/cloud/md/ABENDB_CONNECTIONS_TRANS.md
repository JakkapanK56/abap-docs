---
title: "ABENDB_CONNECTIONS_TRANS"
description: |
  ABENDB_CONNECTIONS_TRANS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDB_CONNECTIONS_TRANS.htm"
abapFile: "ABENDB_CONNECTIONS_TRANS.html"
keywords: ["insert", "update", "delete", "do", "if", "data", "ABENDB", "CONNECTIONS", "TRANS"]
---

Every active database connection creates a separate transaction context or is linked with its own [database LUW](ABENDATABASE_LUW_GLOSRY.html). This means that database changes on one connection can be committed or rolled back independently of changes on other database connections. In this way, for example, log data can be stored in and committed on a service connection without modifying the database LUW of the standard connection.

Database changes can be committed or rolled back as follows specifically for database connections:

In addition, there are the statements [`COMMIT WORK`](ABAPCOMMIT.html) and [`ROLLBACK WORK`](ABAPROLLBACK.html), as well as the implicit [database commits](ABENDB_COMMIT.html) and [database rollbacks](ABENDB_ROLLBACK.html), that act on all active connections.

A service connection is always set to inactive when its database changes are committed or rolled back. A connection deactivated in this way can, however, still be used in the same internal session without being opened explicitly. The first time an inactive service connection previously active in the current internal session is reused, it is made active again and a new database LUW is opened.

If the statement `COMMIT CONNECTION` were not used for the standard connection represented by a connection object referred by the reference variable `conn_default`, the following program section would produce a lock situation because the standard connection and a service connection represented by a connection object referred by the reference variable `conn_service` would be used in independent database LUWs to access the same row of a database table.

-   The statements [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) and [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) trigger targeted [database commits](ABENDATABASE_COMMIT_GLOSRY.html) or [database rollbacks](ABENDATABASE_ROLLBACK_GLOSRY.html) on specific connections.
-   When a database connection is made inactive implicitly at the end of an internal session, a [database commit](ABENDATABASE_COMMIT_GLOSRY.html) is triggered.
-   When a database connection is closed explicitly, a [database rollback](ABENDATABASE_ROLLBACK_GLOSRY.html) is triggered.

-   Service connections can be used to implement independent database LUWs on the standard database. Care must be taken to avoid lock situations here.
-   Working with multiple database connections, namely independent database LUWs, can produce lock situations where only one work process is involved: a program changes a database row on the first connection and tries to change the same row on a second connection. This results in the program waiting for the lock of the first database LUW, without this first LUW ever being able to continue. This situation can only be resolved by ending the work process. This is done automatically for dialog processes, but it must be done manually for background jobs. It is therefore not advisable to change the same table within the a single program using multiple database connections.

FINAL(conn\_default) = \\n cl\_abap\_sql\_connection\_builder=>default( )->create( ). \\n\\ \\nFINAL(conn\_service) = \\n cl\_abap\_sql\_connection\_builder=>service( \\n \`R/3\*DEMO\` )->create( ). \\n\\ \\nINSERT demo\_update FROM @( VALUE #( id = 'X' ) ). \\nDELETE FROM demo\_update. \\nCOMMIT CONNECTION @conn\_default. \\n\\ \\nINSERT demo\_update \\n FROM @( VALUE #( id = 'X' \\n col1 = 1 \\n col2 = 2 \\n col3 = 3 \\n col4 = 4 ) ) \\n OPTIONS \\n CONNECTION @conn\_service. abenabap.html abenabap\_reference.html abendb\_access.html abendb\_connections.html