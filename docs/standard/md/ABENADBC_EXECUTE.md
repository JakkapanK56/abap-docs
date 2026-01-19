---
title: "ABENADBC_EXECUTE"
description: |
  ABENADBC_EXECUTE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_EXECUTE.htm"
abapFile: "ABENADBC_EXECUTE.html"
keywords: ["select", "insert", "update", "delete", "while", "if", "try", "catch", "method", "class", "data", "ABENADBC", "EXECUTE"]
---

The generic method `EXECUTE` of the class `CL_SQL_STATEMENT` allows all SQL statements mentioned in the preceding topics to be executed.

Instead of the specific methods `EXECUTE_DDL`, `EXECUTE_UPDATE`, ... the method `EXECUTE` can also be used.

The type of the return value of `EXECUTE` is a reference to `CL_SQL_RESULT_SET`. `EXECUTE` can fully replace methods with a return value of the same type. Methods with a return value of another type can only be replaced without problems if the return value is not assigned to a data object. Otherwise, the method call must be adapted appropriately.

Same as the example from [ADBC -DDL and DML Statements](ABENADBC_DDL_DML.html) but with `EXECUTE` instead of `EXECUTE_UPDATE`. The type of the return values differs but is not evaluated.

Same as the example from [ADBC - Queries](ABENADBC_QUERY.html) but with `EXECUTE` instead of `EXECUTE_QUERY`. The type of the return values is the same and can be evaluated in the same way.

[ADBC - Multiple Result Sets](ABENADBC_MULTI_RESULT_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\n\\ \\nTRY. \\n FINAL(sql) = NEW cl\_sql\_statement( ). \\n\\ \\n sql->set\_param\_struct( NEW demo\_update( \\n client = sy-mandt id = 'X' \\n col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) ). \\n\\ \\n sql->execute( \\n \`INSERT INTO demo\_update VALUES( ?, ?, ?, ?, ?, ? )\` ). \\n\\ \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nSELECT SINGLE \* \\n FROM demo\_update \\n WHERE id = 'X' \\n INTO @FINAL(wa). \\n\\ \\nout->write( wa ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_update. \\nINSERT demo\_update FROM TABLE @( \\n VALUE #( ( id = 'X' col1 = 1 col2 = 2 col3 = 3 col4 = 4 ) \\n ( id = 'Y' col1 = 5 col2 = 6 col3 = 7 col4 = 8 ) ) ). \\n\\ \\nDATA result TYPE demo\_update. \\nTRY. \\n FINAL(query) = NEW cl\_sql\_statement( )->execute( \\n \`SELECT client, id, col1, col2, col3, col4 \` && \\n \` FROM demo\_update \` && \\n \` WHERE client = '\` && sy-mandt && \`' \` ). \\n query->set\_param\_struct( struct\_ref = REF #( result ) ). \\n WHILE query->next( ) > 0. \\n out->write( result ). \\n ENDWHILE. \\n query->close( ). \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_storage\_obsolete.html abendatabase\_access\_obsolete.html abennative\_sql\_obsolete.html abenadbc.html abencl\_sql\_statement.html