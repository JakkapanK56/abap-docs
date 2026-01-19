---
title: "ABENADBC_IF_DDL_DML"
description: |
  ABENADBC_IF_DDL_DML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_IF_DDL_DML.htm"
abapFile: "ABENADBC_IF_DDL_DML.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "catch", "method", "data", "types", "internal-table", "ABENADBC", "DDL", "DML"]
---

Regular and prepared statements provide interfaces for executing [DDL](ABENDDL_GLOSRY.html) and [DML](ABENDML_GLOSRY.html) statements.

In DML statements, values passed to the database system can be parameterized using the placeholder `?`. When the statement is executed, compatible ABAP Objects must be bound to these parameters. This binding is made using the following methods of the interfaces listed in the table above, which expect a reference to an elementary, structured, or table-like data object and can be used as an alternative:

After each SQL statement is executed, the binding is removed.

The `EXECUTE_AND_GET_ROWS_PROCESSED` method executes the statement and returns the number of rows processed, and the `GET_CONNECTION` method gets the connection.

Insertion of a row in a database table with ADBC. The table is first emptied using ABAP SQL and then read using ABAP SQL. The values of the columns are determined by binding the components of a temporary internal table to `?` placeholders.

-   `ADD_INPUT_PARAM_BY_ELEMENTARY`
-   This method must be called exactly once for each placeholder `?` before the SQL statement is executed. The order of the calls determines the assignment of the elementary data objects to the placeholders from left to right.
-   `ADD_INPUT_PARAM_BY_INPUT_TABLE`
-   This method must be called exactly once for each placeholder `?` before the SQL statement is executed. The order of the calls determines the assignment of the internal table to the placeholders from left to right.
-   `SET_INPUT_PARAMS_BY_STRUCTURE`
-   This method must be called exactly once before the SQL statement is executed. The components of the structure are bound to the placeholders from left to right. The structure must contain appropriate components for the number and type of the placeholders.

-   The method `DDL` is only available for regular statements.
-   For security reasons, it is better to parameterize a DML statement using the placeholder `?` rather than concatenating dynamic content. This is also a way of preventing [SQL injections](ABENSQL_INJECTION_GLOSRY.html). If the statement only contains static content from the program and dynamic content from outside the program is possible only in operand positions using placeholders and the statement cannot be modified from outside.
-   In assignments between ABAP data objects and fields in database tables, a [mapping](ABENNATIVE_SQL_TYPE_MAPPING.html) takes place between the ABAP types and the database types. The ABAP types should match the database types. If they do not match, conversions must be made in the Native SQL interface that are platform-dependent and can raise exceptions.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\n\\ \\nTRY. \\n FINAL(connection) = cl\_sql\_adbc\_connection\_builder=>default( \\n )->get( ). \\n DATA(builder) = connection->build\_new\_statement( ). \\n\\ \\n builder->sequence( |insert into| )->table( |demo\_update| \\n )->sequence( \\n | ( "CLIENT", "ID", "COL1", "COL2", "COL3", "COL4" ) | && \\n | values ( ?, ?, ?, ?, ?, ? )| ). \\n\\ \\n DATA(insert) = builder->create\_regular( )->insert( ). \\n\\ \\n DATA row TYPE demo\_update. \\n insert->set\_input\_params\_by\_structure( REF #( row ) ). \\n\\ \\n row = VALUE demo\_update( client = sy-mandt id = 'X' \\n col1 = 1 col2 = 2 col3 = 3 col4 = 4 ). \\n\\ \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nINSERT demo\_update FROM row. \\n\\ \\nSELECT SINGLE \* \\n FROM demo\_update \\n WHERE id = 'X' \\n INTO @FINAL(wa). \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). **Operation** **Interface** **Description** **Instance Method** `DDL` `IF_SQL_STMT_RGLR_DDL` DDL statements such as `CREATE`, `DROP`, or `ALTER`. `ADD_INPUT_PARAM_BY_ELEMENTARY`,\\
`EXECUTE_AND_GET_ROWS_PROCESSED`,\\
`GET_CONNECTION` `DELETE` `IF_SQL_STMT_RGLR_DELETE`,\\
`IF_SQL_STMT_PRPD_DELETE` DML statement for deleting content. `ADD_INPUT_PARAM_BY_ELEMENTARY`,\\
`ADD_INPUT_PARAM_BY_INPUT_TABLE`,\\
`EXECUTE_AND_GET_ROWS_PROCESSED`,\\
`GET_CONNECTION` `INSERT` `IF_SQL_STMT_RGLR_INSERT`,\\
`IF_SQL_STMT_PRPD_INSERT` DML statement for inserting content. `ADD_INPUT_PARAM_BY_ELEMENTARY`,\\
`ADD_INPUT_PARAM_BY_INPUT_TABLE`,\\
`EXECUTE_AND_GET_ROWS_PROCESSED`,\\
`GET_CONNECTION`,\\
`SET_INPUT_PARAMS_BY_STRUCTURE` `UPDATE` `IF_SQL_STMT_RGLR_UPDATE`,\\
`IF_SQL_STMT_PRPD_UPDATE` DML statement for updating content. `ADD_INPUT_PARAM_BY_ELEMENTARY`,\\
`ADD_INPUT_PARAM_BY_INPUT_TABLE`,\\
`EXECUTE_AND_GET_ROWS_PROCESSED`,\\
`GET_CONNECTION` `UPSERT` `IF_SQL_STMT_RGLR_UPSERT`,\\
`IF_SQL_STMT_PRPD_UPSERT` Statement for changing or inserting content. `ADD_INPUT_PARAM_BY_ELEMENTARY`,\\
`ADD_INPUT_PARAM_BY_INPUT_TABLE`,\\
`EXECUTE_AND_GET_ROWS_PROCESSED`,\\
`GET_CONNECTION`,\\
`SET_INPUT_PARAMS_BY_STRUCTURE` abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abenadbc\_intf.html abenif\_sql\_statement.html