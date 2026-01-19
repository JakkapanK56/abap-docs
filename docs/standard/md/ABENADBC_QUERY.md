---
title: "ABENADBC_QUERY"
description: |
  ABENADBC_QUERY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_QUERY.htm"
abapFile: "ABENADBC_QUERY.html"
keywords: ["select", "insert", "update", "delete", "do", "while", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENADBC", "QUERY"]
---

[DQL](ABENDQL_GLOSRY.html) statements (queries) can be executed using the following instance method from class `CL_SQL_STATEMENT`:

The method has a mandatory input parameter `STATEMENT` of type `string`, to which a syntactically correct `SELECT` statement must be passed. As with [`DML` statements](ABENADBC_DDL_DML.html), the method `SET_PARAM` can be used to bind ABAP data objects to place holders `?`.

As the result of a query, a reference to an object of the class `CL_SQL_RESULT_SET` is returned in the return value `RESULT_SET`. The methods of this object allow access to the result set of the query. To preserve the result set beyond the end of a database LUW, the input parameter `HOLD_CURSOR` of the method `EXECUTE_QUERY` can be filled with *X*.

The class `CL_SQL_RESULT_SET` of the result object provides the following instance methods for reading a result set into ABAP data objects:

If a query returns more than one result set, the above methods by default access the first result set and the method `NEXT_RESULT_SET` can be used to switch to the following result set. For each result set, the above `SET_...` methods must be used again in order to attach an ABAP data object.

If a result set is no longer needed, it should be closed using instance method `CLOSE` so that all resources that are needed in the database are released.

Use of ADBC to read rows sequentially from a database table filled previously using ABAP SQL to a work area.

Use of ADBC to read rows from to a database table filled previously with ABAP SQL to an internal table.

The program `ADBC_QUERY` allows interactive queries that are executed using ADBC to be entered.

-   `EXECUTE_QUERY`

-   `SET_PARAM`, `NEXT`, and `CLOSE`
-   These methods provide access to individual rows and columns of the result set. `SET_PARAM` must be used to assign compatible ABAP data objects to the columns from left to right by passing corresponding data references for each column to this method. `NEXT` is used to address the rows of the result set one after another. The return value is 1 if the row can be addressed and 0 if not. Reads are closed using `CLOSE`. If the parameter binding between two calls of `NEXT` is to be modified, the method `CLEAR_PARAMETERS` must be called first.
-   `SET_PARAM_STRUCT`, `NEXT`, and `CLOSE`
-   These methods provide access to individual rows of the result set. `SET_PARAM_STRUCT` must be used to assign a fully compatible ABAP structure to the rows of the result set by passing corresponding data references to the method. An internal table that specifies the names and order of the columns to be read can be passed to the parameter `CORRESPONDING_FIELDS`. For the remaining methods, the same applies as to `SET_PARAM`.
-   `SET_PARAM_TABLE`, `NEXT_PACKAGE`, and `CLOSE`
-   These methods provide access to multiple rows of the result set. `SET_PARAM_TABLE` must be used to assign a fully compatibly structured internal table to the rows of the result set by passing a corresponding data reference to the method. As with `SET_PARAM_STRUCT`, a `CORRESPONDING_FIELDS` parameter is used to specify which columns are to be transported. Here, `NEXT_PACKAGE` is used instead of `NEXT` and reads at most the number of rows that are passed to the input parameter `UPTO`. If no value is passed to `UPTO`, all rows are read. In each call of `NEXT_PACKAGE`, the rows read are appended to the internal table without deleting the previous content and the number of rows read is returned in the return value `ROWS_RET`. The same applies when changing parameter bindings and to `CLOSE` as to `SET_PARAM`.

-   A data reference to an indicator variable with the built-in type `INT2` from the ABAP Dictionary can be passed to the optional input parameter `IND_REF` of the method `SET_PARAM`. In this data reference, the value -1 indicates whether a null value existed on the database.
-   For security reasons, it is better parameterize a query using the placeholder `?` rather than concatenating dynamic content. This is also a way of preventing [SQL injections](ABENSQL_INJECTION_GLOSRY.html). If the statement only contains static content from the program and dynamic content from outside the program is possible only in operand positions using placeholders and the statement cannot be modified from outside.
-   An open result set is connected to an open database cursor. Therefore, a result set should be always closed explicitly with the method `CLOSE` after its usage to avoid inadvertently keeping too many database cursors open.
-   In assignments between fields in database tables and ABAP data objects, a [mapping](ABENNATIVE_SQL_TYPE_MAPPING.html) takes place between the ABAP types and the database types. The ABAP types should match the database types. If they do not match, conversions must be made in the Native SQL interface. These conversions are platform-dependent and can raise exceptions.
-   The method `EXECUTE_QUERY` can also be used to call [stored procedures](ABENSTORED_PROCEDURE_GLOSRY.html). In databases that meet the requirements, internal tables, for example, can then be bound to the result set. This is not possible with the method [`EXECUTE PROCEDURE`](ABENADBC_PROCEDURE.html) (see the example under this method).
-   The generic method `EXECUTE` also has a return value of type `CL_SQL_RESULT_SET` and can be used in the same way as `EXECUTE_QUERY`.
-   The methods `SET_PARAM_STRUCT` and `SET_PARAM_TABLE` have a parameter `LOB_FIELDS` that should be used to pass the names of [LOB](ABENLOB_GLOSRY.html) columns that are read into `xtring` or `xstring` fields. By doing so, special LOB functions are used by the database to handle these columns.
-   Multiple results can occur e.g. when calling database procedures with more than one output parameters.
-   In [ABAP SQL](ABENABAP_SQL_GLOSRY.html), it is also possible to specify fully dynamic `SELECT` statements, namely in the dynamic forms of statements [`WITH`](ABAPWITH.html) and [`OPEN CURSOR`](ABAPOPEN_CURSOR.html).

-   [ADBC - Query](ABENADBC_QUERY_ABEXA.html)
-   [ADBC - DDL, and DML](ABENADBC_DML_DDL_ABEXA.html), [ADBC - Parameter Binding](ABENADBC_DML_DDL_BINDING_ABEXA.html), [ADBC - Bulk Access](ABENADBC_DML_DDL_BULK_ABEXA.html)
-   [ADBC - Multiple Result Sets](ABENADBC_MULTI_RESULT_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\nINSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ). \\n\\ \\nDATA result TYPE demo\_update. \\nTRY. \\n FINAL(query) = NEW cl\_sql\_statement( )->execute\_query( \\n \`SELECT client, id, col1, col2, col3, col4 \` && \\n \` FROM demo\_update \` && \\n \` WHERE client = '\` && sy-mandt && \`' \` ). \\n query->set\_param\_struct( struct\_ref = REF #( result ) ). \\n WHILE query->next( ) > 0. \\n out->write( result ). \\n ENDWHILE. \\n query->close( ). \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\nINSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ). \\n\\ \\nDATA result TYPE TABLE OF demo\_update WITH EMPTY KEY. \\nTRY. \\n FINAL(query) = NEW cl\_sql\_statement( )->execute\_query( \\n \`SELECT client, id, col1, col2, col3, col4 \` && \\n \` FROM demo\_update \` && \\n \` WHERE client = '\` && sy-mandt && \`' \` ). \\n query->set\_param\_table( itab\_ref = REF #( result ) ). \\n query->next\_package( ). \\n query->close( ). \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenadbc.html abencl\_sql\_statement.html