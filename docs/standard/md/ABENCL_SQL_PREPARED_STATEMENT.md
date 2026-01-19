---
title: "ABENCL_SQL_PREPARED_STATEMENT"
description: |
  ABENCL_SQL_PREPARED_STATEMENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_SQL_PREPARED_STATEMENT.htm"
abapFile: "ABENCL_SQL_PREPARED_STATEMENT.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENCL", "SQL", "PREPARED", "STATEMENT"]
---

The class `CL_SQL_PREPARED_STATEMENT` is a subclass of [`CL_SQL_STATEMENT`](ABENCL_SQL_STATEMENT.html). It makes it possible to execute a SQL statement passed to it multiple times with different parameters.

For this purpose, the instance constructor contains a mandatory input parameter `STATEMENT` of type `string`, to which a syntactically correct SQL statement must be passed. The SQL statement can contain placeholder `?`, as is the case with the methods of `CL_SQL_STATEMENT`.

Using the methods inherited from `CL_SQL_STATEMENT`, the placeholders can be linked to parameters and the instantiated SQL statement can be executed. In doing so, the SQL statement is not passed to the corresponding method.

After the work process has been switched (see [implicit database commit](ABENDB_COMMIT.html)), a prepared statement can no longer be used.

If a prepared statement is no longer needed, it should be closed using instance method `close` so that all resources that are needed in the database are released.

Insertion of multiple rows in a database table using a prepared statement in ADBC. The table is first emptied using ABAP SQL and then read using ABAP SQL. The values of the columns are determined by binding the components of temporary structures created using [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) to `?` placeholders.

[ADBC, Prepared Statement](ABENADBC_SQL_PREPARED_ABEXA.html)

-   Unlike in JDBC, the use of `?` placeholders in ADBC is not restricted to prepared statements. In ADBC, the use of prepared statements is not a prerequisite for using placeholders to prevent [SQL injections](ABENSQL_INJECTION_GLOSRY.html). Prepared statements are used only to improve performance in ADBC.
-   As with `CL_SQL_STATEMENT`, `CL_SQL_PREPARED_STATEMENT` should not be used to execute transaction control statements.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\n\\ \\nTRY. \\n FINAL(sql) = NEW cl\_sql\_prepared\_statement( \\n \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\` ). \\n\\ \\n sql->set\_param\_struct( NEW demo\_update( \\n client = sy-mandt id = 'X' \\n col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ). \\n sql->execute\_update( ). \\n\\ \\n sql->set\_param\_struct( NEW demo\_update( \\n client = sy-mandt id = 'Y' \\n col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ). \\n sql->execute\_update( ). \\n\\ \\n sql->close( ). \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nSELECT \* \\n FROM demo\_update \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenadbc.html