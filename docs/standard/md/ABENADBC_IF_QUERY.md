---
title: "ABENADBC_IF_QUERY"
description: |
  ABENADBC_IF_QUERY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_IF_QUERY.htm"
abapFile: "ABENADBC_IF_QUERY.html"
keywords: ["select", "insert", "update", "delete", "do", "while", "if", "try", "catch", "method", "data", "types", "internal-table", "ABENADBC", "QUERY"]
---

Regular and prepared statements provide interfaces for executing [DQL](ABENDQL_GLOSRY.html) statements (queries):

As with [`DML` statements](ABENADBC_IF_DDL_DML.html), the methods `ADD_INPUT_PARAM_BY_ELEMENTARY` and `ADD_INPUT_PARAM_BY_INPUT_TABLE` can bind ABAP data objects to placeholders `?`.

As the result of a query, a reference to an object is returned in the return value `RESULT` of the method `EXECUTE_AND_GET_RESULT_SET`. The methods of this object allow access to the result set of the query.

The regular and prepared statements for DQL statements provide the following instance methods for reading a result set into ABAP data objects:

If a query returns more than one result set, the above methods access the first result set by default, and the method `SET_NEXT_AND_GET_ROWS_PROCESSED` can be used to switch to the following result set. For each result set, the above `SET_...` methods must be used again to attach an ABAP data object.

If a result set is no longer needed, it should be closed using the instance method `CLOSE` so that all resources required in the database are released.

The method `EXECUTE_AND_GET_RESULT_SET` permits access to the result set of the query, and the `GET_CONNECTION` method gets the connection.

Use ADBC to read rows sequentially from a database table filled previously using ABAP SQL to a work area.

Use ADBC to read rows from a database table filled previously with ABAP SQL to an internal table.

-   `IF_SQL_STMT_RGLR_QUERY`
-   `IF_SQL_STMT_PRPD_QUERY`

-   `SET_OUTPUT_PARAMS_BY_STRUCT`, `SET_NEXT_AND_GET_ROWS_PROCESSED`, `CLOSE`
-   These methods provide access to individual rows of the result set. `SET_OUTPUT_PARAMS_BY_STRUCT` must be used to assign a fully compatible ABAP structure to the rows of the result set by passing corresponding data references to the method. An internal table that specifies the names and order of the columns to be read can be passed to the parameter `CORRESPONDING_FIELDS`. `SET_NEXT_AND_GET_ROWS_PROCESSED` is used to address the rows of the result set one after another. The return value is 1 if the row can be addressed and 0 if not. Reads are closed using `CLOSE`.
-   `SET_OUTPUT_PARAMS_BY_ITAB`, `NEXT_PACKAGE_GET_ROWS_PRCSSD`, `CLOSE`
-   These methods provide access to multiple rows of the result set. `SET_OUTPUT_PARAMS_BY_ITAB` must be used to assign a fully compatible structured internal table to the rows of the result set by passing a corresponding data reference to the method. As with `SET_OUTPUT_PARAMS_BY_STRUCT`, a `CORRESPONDING_FIELDS` parameter is used to specify which columns are to be transported. Here, `NEXT_PACKAGE_GET_ROWS_PRCSSD` is used instead of `SET_NEXT_AND_GET_ROWS_PROCESSED` and reads at most the number of rows that are passed to the input parameter `UPTO`. If no value is passed to `UPTO`, all rows are read. In each call of `NEXT_PACKAGE_GET_ROWS_PRCSSD`, the rows read are appended to the internal table without deleting the previous content, and the number of rows read is returned in the return value `RESULT`. The same applies when changing parameter bindings and to `CLOSE` as to `SET_OUTPUT_PARAMS_BY_STRUCT`.

-   For security reasons, it is better to parameterize a query using the placeholder `?` rather than concatenating dynamic content. This is also a way of preventing [SQL injections](ABENSQL_INJECTION_GLOSRY.html). If the statement only contains static content from the program and dynamic content from outside the program, it is possible only in operand positions using placeholders, and the statement cannot be modified from outside.
-   An open result set is connected to an open database cursor. Therefore, a result set should always be explicitly closed with the method `CLOSE` after its usage to avoid inadvertently keeping too many database cursors open.
-   In assignments between fields in database tables and ABAP data objects, a [mapping](ABENNATIVE_SQL_TYPE_MAPPING.html) takes place between the ABAP types and the database types. The ABAP types should match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.
-   The methods `SET_OUTPUT_PARAMS_BY_STRUCT` and `SET_OUTPUT_PARAMS_BY_TABLE` have a parameter `LOB_FIELDS` that should be used to pass the names of [LOB](ABENLOB_GLOSRY.html) columns that are read into `xtring` or `xstring` fields. By doing so, the database uses special LOB functions to handle these columns.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), it is also possible to specify fully dynamic `SELECT` statements, namely in the dynamic forms of statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\n\\ \\nINSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ). \\n\\ \\nTRY. \\n FINAL(connection) = cl\_sql\_adbc\_connection\_builder=>default( \\n )->get( ). \\n DATA(builder) = connection->build\_new\_statement( ). \\n\\ \\n builder->sequence( \\n |select "CLIENT", "ID", "COL1", "COL2", "COL3", "COL4" from | \\n )->table( |DEMO\_UPDATE| )->sequence( \\n |where "CLIENT" = ? | ). \\n\\ \\n DATA(query) = builder->create\_regular( )->query( ). \\n query->add\_input\_param\_by\_elementary( NEW symandt( sy-mandt ) ). \\n\\ \\n DATA(result\_set) = query->execute\_and\_get\_result\_set( ). \\n\\ \\n DATA row TYPE demo\_update. \\n result\_set->set\_output\_params\_by\_struct( REF #( row ) ). \\n\\ \\n WHILE result\_set->next\_and\_get\_rows\_processed( ) > 0. \\n out->write( row ). \\n ENDWHILE. \\n result\_set->close( ). \\n\\ \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\n\\ \\nINSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ). \\n\\ \\nTRY. \\n FINAL(connection) = cl\_sql\_adbc\_connection\_builder=>default( \\n )->get( ). \\n DATA(builder) = connection->build\_new\_statement( ). \\n\\ \\n builder->sequence( \\n |select "CLIENT", "ID", "COL1", "COL2", "COL3", "COL4" from | \\n )->table( |DEMO\_UPDATE| )->sequence( \\n |where "CLIENT" = ? | ). \\n\\ \\n DATA(query) = builder->create\_regular( )->query( ). \\n query->add\_input\_param\_by\_elementary( NEW symandt( sy-mandt ) ). \\n\\ \\n DATA(result\_set) = query->execute\_and\_get\_result\_set( ). \\n\\ \\n DATA rows TYPE TABLE OF demo\_update WITH EMPTY KEY. \\n result\_set->set\_output\_params\_by\_itab( REF #( rows ) ). \\n result\_set->next\_package\_get\_rows\_prcssd( ). \\n result\_set->close( ). \\n\\ \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->write( rows ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abenadbc\_intf.html abenif\_sql\_statement.html