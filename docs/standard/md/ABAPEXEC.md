---
title: "ABAPEXEC"
description: |
  ABAPEXEC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEXEC.htm"
abapFile: "ABAPEXEC.html"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "try", "catch", "class", "data", "ABAPEXEC"]
---

[Short Reference](ABAPEXEC_SQL_SHORTREF.html)

`EXEC SQL.`\\ 
  `...`\\ 
`ENDEXEC.`

These statements define an area in an ABAP program in which one or more [Native SQL](ABENNATIVE_SQL_GLOSRY.html) statements can be specified statically. The area between `EXEC` and `ENDEXEC` is not checked completely by the syntax check. The statements specified there are passed to the Native SQL interface and processed there as follows:

All Native SQL statements bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html), and no [implicit client handling](ABENABAP_SQL_CLIENT_HANDLING.html) is performed.

The statement `ENDEXEC` sets the system fields `sy-subrc` and `sy-dbcnt`. When using the obsolete addition [`PERFORMING`](ABAPEXEC_IMPLICIT.html), it should be noted that implicit cursor processing is carried out and the system fields are set for every read.

The statement `ENDEXEC` sets `sy-dbcnt` to the number of table rows processed in the last Native SQL statement. After implicit cursor processing with `PERFORMING`, `sy-dbcnt` contains the total number of rows read. If an overflow occurs because the number or rows is greater than 2,147,483,647, `sy-dbcnt` is set to -1.

The following example demonstrates how an embedded Native SQL statement can be replaced by [ADBC](ABENADBC.html). For single statements, the use of the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) removes the need for a helper variable of type `CL_SQL_STATEMENT` when creating objects.

[Static Native SQL](ABENNATIVE_SQL_ABEXA.html)

`CX_SY_NATIVE_SQL_ERROR`

-   SQL statements that are valid for the addressed database system can be listed between `EXEC` and `ENDEXEC`, in particular the [DDL](ABENDDL_GLOSRY.html) statements. These SQL statements are passed from the Native SQL interface to the database system largely unchanged. The syntax rules are determined by the database system, in particular the case sensitivity rules for database objects. If the syntax allows a separator between individual statements, multiple Native SQL statements can be included between `EXEC` and `ENDEXEC`. Generally, the semicolon (`;`) is used as the separator.
-   SAP-specific Native SQL language elements can also be specified between `EXEC` and `ENDEXEC`. These statements are not passed directly from the Native SQL interface to the database, but are converted appropriately. These SAP-specific language elements are:

-   [Literals](ABAPEXEC_LITERAL.html)
-   [Host variables](ABAPEXEC_HOST.html)
-   [`INTO` clause](ABAPEXEC_INTO.html)
-   [Statements for cursor processing](ABAPEXEC_CURSOR.html)
-   [Database procedure calls](ABAPEXEC_PROCEDURE.html)
-   [Statements for establishing database connections](ABAPEXEC_CONNECTION.html)

-   Programs with Native SQL statements are generally dependent on the database system used and cannot be executed in all [AS ABAP](ABENAS_ABAP_GLOSRY.html) systems. This is especially true for the examples in this section, which were tested on a [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), unless otherwise stated.
-   If insertions or modifications using the Native SQL statements `INSERT` or `UPDATE` would produce duplicate rows with respect to the primary table key, no exception is raised. Instead, `sy-subrc` is set to 4. However, if another operation, such as executing a [Stored Procedure](ABENSTORED_PROCEDURE_GLOSRY.html), would produce a duplicate row, an exception would be raised.
-   The [client ID](ABENCLIENT_IDENTIFIER_GLOSRY.html) of a database table or a view must be specified explicitly. It should be noted that application programs should only use data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html). See also the associated [security note](ABENCLIENT_DEPENDENT_SCRTY.html) and the [programming guideline](ABENCLIENT_HANDLING_GUIDL.html).
-   When the database object of a client-dependent [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is accessed using Native SQL and the client handling algorithm of the entity is governed by the HANA session variable [`CDS_CLIENT`](ABENHANA_SESSION_VARIABLES.html), this variable must have an appropriate value.
-   The obsolete addition [`PERFORMING`](ABAPEXEC_IMPLICIT.html), which is not allowed in classes, executes implicit cursor processing and must no longer be used. The obsolete statement [`EXIT FROM SQL`](ABAPEXIT_SQL.html) can be used to exit this type of processing.
-   Native SQL statements used for transaction control (`COMMIT` and `ROLLBACK`) are detected by the database interface and the actions required at the end of a transaction are performed.
-   The static embedding of Native SQL statements between `EXEC SQL` and `ENDEXEC` is replaced by dynamic passes to objects from [ADBC](ABENADBC.html) classes. New features in the Native SQL interface are now developed only in ADBC. Only ADBC should be used in new programs.

-   *Cause:* Error when making a secondary connection.
    *Runtime error:*\\ `DBIF_DSQL2_CONNECTERR`
-   *Cause:* Illegal interruption of a database selection. The cursor was closed.
    *Runtime error:*\\ `DBIF_DSQL2_INVALID_CURSOR`:
-   *Cause:* There is insufficient memory available for a Native SQL statement.
    *Runtime error:*\\ `DBIF_DSQL2_NO_MEMORY`
-   *Cause:* Database object already exists in the database. An attempt was made to create a database object (for example, table, view, index) on the database, but this object already exists.
    *Runtime error:*\\ `DBIF_DSQL2_OBJ_EXISTS`
-   *Cause:* The name of a table or view that does not exist on the database was used.
    *Runtime error:*\\ `DBIF_DSQL2_OBJ_UNKNOWN`
-   *Cause:* An SQL error occurred while executing a native SQL statement.
    *Runtime error:*\\ `DBIF_DSQL2_SQL_ERROR`
-   *Cause:* The maximum number of secondary connections was exceeded.
    *Runtime error:*\\ `EXSQL_CONNECTION_LIMIT`
-   *Cause:* The maximum number of database cursors was exceeded.
    *Runtime error:*\\ `EXSQL_DSQL_CURSOR_LIMIT`\\
    

-   *Cause:* The specified cursor does not exist. A `CLOSE` or `SELECT` statement in Native SQL has a specified cursor, but this cursor is unknown to cursor administration.
    *Runtime error:*\\ `EXSQL_DSQL_CURSOR_NOT_FOUND`
-   *Cause:* The specified cursor is already open. An `OPEN` statement in Native SQL has a specified cursor, which the cursor administration knows is already open.
    *Runtime error:*\\ `EXSQL_DSQL_DUPLICATE_CURSOR`
-   *Cause:* There is insufficient roll memory available. When a Native SQL statement is processed, the internal memory is needed for preparing the SQL Call.
    *Runtime error:*\\ `EXSQL_DSQL_NOROLL`
-   *Cause:* An indicator variable has an incorrect type. It must be the type `INT2`.
    *Runtime error:*\\ `EXSQL_DSQL_WRONG_IVAR_TYPE`
-   *Cause:* The connection name has already been used for another connection. A `CONNECT` statement in Native SQL has a specified connection name, which is already used for another connection.
    *Runtime error:*\\ `EXSQL_ILLEGAL_CONNECTION`
-   *Cause:* The connection *DEFAULT* was specified for a `DISCONNECT` statement in Native SQL. This connection cannot be terminated with `DISCONNECT`.
    *Runtime error:*\\ `EXSQL_ILLEGAL_DISCONNECTION`
-   *Cause:* A Native SQL statement contains too many variables. In this context, variables means all ABAP fields preceded by a colon (*:*). If the `INTO` clause has the form `INTO :wa` for a work area `wa`, then all the fields of `wa` also count as variables.
    *Runtime error:*\\ `EXSQL_TOO_MANY_VARS`
-   *Cause:* A `SET CONNECTION` or `DISCONNECT` statement in Native SQL has a specified connection that is unknown to the connection administration.
    *Runtime error:*\\ `EXSQL_UNKNOWN_CONNECTION`
-   *Cause:* The target area specified in the `INTO` clause is not structured despite the assertion `INTO STRUCTURE`.
    *Runtime error:*\\ `EXSQL_UNSTRUCTURED_INTO`
-   *Cause:* A LOB variable has the wrong type. LOB variables must have the type `string`, `xstring`, `c`, `x`, or `n`.
    *Runtime error:*\\ `EXSQL_WRONG_TYPE_FOR_LOB`

"Embedded Native SQL \\nEXEC SQL. \\n INSERT INTO demo\_update VALUES( :sy-mandt, 'X', 1, 2, 3, 4 ) \\nENDEXEC. \\n\\ \\n"ADBC \\nTRY. \\n NEW cl\_sql\_statement( )->execute\_update( \\n |INSERT INTO demo\_update VALUES( '\\{ \\n sy-mandt \\}', 'X', 1, 2, 3, 4 )| ). \\n CATCH cx\_sql\_exception. \\n ... \\nENDTRY. \\n\\ \\n `**sy-subrc**` **Meaning** 0 The statements between `EXEC` and `ENDEXEC` were executed successfully. 4 The statements between `EXEC` and `ENDEXEC` were not successful. After implicit cursor processing with `PERFORMING`, `sy-subrc` always contains the value 4. abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abennativesql.html