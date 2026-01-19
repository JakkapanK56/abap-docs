---
title: "ABAPEXEC_CONNECTION"
description: |
  ABAPEXEC_CONNECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC_CONNECTION.htm"
abapFile: "ABAPEXEC_CONNECTION.html"
keywords: ["select", "do", "if", "try", "catch", "data", "ABAPEXEC", "CONNECTION"]
---

A connection to a database must be defined in order to be able to use [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statements. When an [AS ABAP](ABENAS_ABAP_GLOSRY.html) is started, a [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) from the database interface to the [standard AS ABAP database](ABENSTANDARD_DB_GLOSRY.html) is opened. This connection is defined as the current connection for embedded Native SQL statements and as a standard connection for [ABAP SQL](ABENABAP_SQL_GLOSRY.html) statements when an ABAP program is started. The following SAP-specific Native SQL statements can be used to open additional database connections, which can then be accessed in static Native SQL.

The possible additional AS ABAP connections to database systems are [secondary connections](ABENSECONDARY_DB_CONNECTION_GLOSRY.html) defined in the database table `DBCON` or [service connections](ABENSERVICE_CONNECTION_GLOSRY.html) whose name starts with `R/3*`.

For detailed information about database connections, see [database connections](ABENDB_CONNECTIONS.html).

Opening of a connection to an SAP HANA database and importing of all entries of a column in the database table `SCARR`.

-   [`CONNECT TO conn`](ABAPEXEC_CONNECT_TO.html)
-   [`SET CONNECTION`](ABAPEXEC_SET_CONNECTION.html)
-   [`GET CONNECTION`](ABAPEXEC_GET_CONNECTION.html)
-   [`DISCONNECT conn`](ABAPEXEC_DISCONNECT.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA conn TYPE dbcon-con\_name. \\ncl\_demo\_input=>request( CHANGING field = conn ). \\n\\ \\nSELECT SINGLE dbms \\n FROM dbcon \\n WHERE con\_name = @conn AND \\n dbms = 'HDB' \\n INTO @FINAL(dbtype). \\n\\ \\nIF sy-subrc <> 0. \\n RETURN. \\nENDIF. \\n\\ \\nTRY. \\n EXEC SQL. \\n CONNECT TO :conn \\n ENDEXEC. \\n IF sy-subrc <> 0. \\n RAISE EXCEPTION TYPE cx\_sy\_native\_sql\_error \\n EXPORTING \\n textid = cx\_sy\_native\_sql\_error=>cx\_sy\_native\_sql\_error. \\n ENDIF. \\n EXEC SQL. \\n OPEN dbcur FOR \\n SELECT carrid \\n FROM scarr \\n WHERE mandt = :sy-mandt \\n ENDEXEC. \\n DATA carrid TYPE scarr-carrid. \\n DO. \\n EXEC SQL. \\n FETCH NEXT dbcur INTO :carrid \\n ENDEXEC. \\n IF sy-subrc <> 0. \\n EXIT. \\n ELSE. \\n out->write( |\\{ carrid \\}| ). \\n ENDIF. \\n ENDDO. \\n EXEC SQL. \\n CLOSE dbcur \\n ENDEXEC. \\n EXEC SQL. \\n DISCONNECT :conn \\n ENDEXEC. \\n CATCH cx\_sy\_native\_sql\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html abapexec.html