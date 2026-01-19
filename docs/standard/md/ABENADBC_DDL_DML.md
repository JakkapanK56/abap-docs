---
title: "ABENADBC_DDL_DML"
description: |
  ABENADBC_DDL_DML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_DDL_DML.htm"
abapFile: "ABENADBC_DDL_DML.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENADBC", "DDL", "DML"]
---

The `CL_SQL_STATEMENT` class provides the following instance methods for executing [DDL](ABENDDL_GLOSRY.html) and [DML](ABENDML_GLOSRY.html) statements

The first method is for DDL statements such as `CREATE`, `DROP`, or `ALTER`, whereas the second method is intended for the DML statements `INSERT`, `UPDATE`, and `DELETE`.

Both methods have a mandatory input parameter `STATEMENT` of type `string`, to which a syntactically correct SQL statement must be passed. The method `EXECUTE_UPDATE` also has a return value `ROWS_PROCESSED`, which returns the number of table rows processed.

In DML statements values that are passed to the database system can be parameterized using the placeholder `?`. When the statement is executed, compatible ABAP Objects must be bound to these parameters. This binding is made using the following methods of the class `CL_SQL_STATEMENT`, which expect a reference to an elementary, structured, or table-like data object and can be used as an alternative:

After each SQL statement is executed, the binding is removed.

Insertion of a row in a database table with ADBC. The table is first emptied using ABAP SQL and then read using ABAP SQL. The values of the columns are determined by binding the components of a temporary structure created using instance operator [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) to `?` placeholders.

-   `EXECUTE_DDL`
-   `EXECUTE_UPDATE`

-   `SET_PARAM`
-   Before the SQL statement is executed, this method must be called exactly once for each placeholder `?`. The order of the calls determines the assignment of the elementary data objects to the placeholders from left to right.
-   `SET_PARAM_STRUCT`
-   Before the SQL statement is executed, this method must be called exactly once. The components of the structure are bound to the placeholders from left to right. The structure must contain appropriate components for the number and type of the placeholders.
-   `SET_PARAM_TABLE`
-   This method is appropriate only for the modifying SQL statements `INSERT`, `UPDATE`, and `DELETE`. It must be called exactly once before the SQL statement is executed. As with a structure, the components of the internal table are bound to the placeholders from left to right. The Native SQL interface converts the content of the table rows to appropriate bulk accesses, such as bulk insertions or bulk deletions.

-   The two methods `EXECUTE_DDL` and `EXECUTE_UPDATE` are technically different only in that `EXECUTE_UPDATE` returns the number of rows processed. However, for reasons of readability of the program it is advisable to only use the methods as intended.
-   A data reference to an indicator variable of the built-in type `INT2` in the ABAP Dictionary can be passed to the optional input parameter `IND_REF` of the method `SET_PARAM`. If the value of this indicator variable is -1, the value 0 of a parameter on the database is converted to a null value.
-   For security reasons, it is better parameterize a DML statement using the placeholder `?` rather than concatenating dynamic content. This is also a way of preventing [SQL injections](ABENSQL_INJECTION_GLOSRY.html). If the statement only contains static content from the program and dynamic content from outside the program is possible only in operand positions using placeholders and the statement cannot be modified from outside.
-   In assignments between ABAP data objects and fields in database tables, a [mapping](ABENNATIVE_SQL_TYPE_MAPPING.html) takes place between the ABAP types and the database types. The ABAP types should match the database types. If they do not match, conversions must be made in the Native SQL interface that are platform-dependent and can raise exceptions.

-   [ADBC, DDL, and DML](ABENADBC_DML_DDL_ABEXA.html)
-   [ADBC, Parameter Binding](ABENADBC_DML_DDL_BINDING_ABEXA.html)
-   [ADBC, Bulk Access](ABENADBC_DML_DDL_BULK_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\n\\ \\nTRY. \\n FINAL(sql) = NEW cl\_sql\_statement( ). \\n\\ \\n sql->set\_param\_struct( NEW demo\_update( \\n client = sy-mandt id = 'X' \\n col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ). \\n\\ \\n sql->execute\_update( \\n \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\` ). \\n\\ \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nSELECT SINGLE \* \\n FROM demo\_update \\n WHERE id = 'X' \\n INTO @FINAL(wa). \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenadbc.html abencl\_sql\_statement.html