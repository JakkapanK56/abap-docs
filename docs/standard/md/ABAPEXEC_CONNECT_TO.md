---
title: "ABAPEXEC_CONNECT_TO"
description: |
  ABAPEXEC_CONNECT_TO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_CONNECT_TO.htm"
abapFile: "ABAPEXEC_CONNECT_TO.html"
keywords: ["if", "case", "catch", "class", "data", "ABAPEXEC", "CONNECT"]
---

`EXEC SQL.`\\ 
  `CONNECT TO conn [AS name]`\\ 
`ENDEXEC.`

`CONNECT TO conn` opens a connection. This static Native SQL statement requests a database connection called `conn`. This connection is opened or reused if it already exists in an inactive state for the current work process. Once `CONNECT TO` is executed, the specified connection is the current connection of the internal session, which means that all subsequent static Native SQL statements work with this connection until a connection other than the current is set using a new `CONNECT TO` statement or using `SET CONNECTION`.

For `conn`, a literal or a [host variable](ABAPEXEC_HOST.html) that contains one of the following values can be specified:

Both of these instances are case-sensitive. If a secondary connection that is not in the database table `DBCON` is specified, a catchable exception of the class `CX_SY_NATIVE_SQL_ERROR` is raised. If a [secondary database](ABENSECONDARY_DB_GLOSRY.html) cannot be accessed, `sy-subrc` is set to 4.

The addition `AS` can be used to specify a name `name` for the connection. For `name`, a literal or a character-like host variable can be specified whose content is used as the name. A connection called `name` is not the same connection as a connection requested without using the addition `AS`. This makes it possible to open parallel connections with separate database LUWs for the same secondary connection or service connection within an internal session. In an internal session, only one active database session can be called `name`. Any attempt to activate a further connection with the same name produces a runtime error. A connection called `name` can only be specified in the statement `SET CONNECTION` using this name.

-   A name from the column `CON_NAME` of the database table `DBCON` used to specify a [secondary connection](ABENSECONDARY_DB_CONNECTION_GLOSRY.html)
-   A name with the prefix `R/3*` used to specify a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html)

-   The [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) cannot be requested using `CONNECT TO`.
-   A name granted using `AS` can also be used in ABAP SQL after the addition `CONNECTION` and in the statements [`COMMIT CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html) and [`ROLLBACK CONNECTION`](ABAPCOMMIT_ROLLBACK_CONNECTION.html), as long as it is in uppercase letters.

abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html abapexec\_connection.html