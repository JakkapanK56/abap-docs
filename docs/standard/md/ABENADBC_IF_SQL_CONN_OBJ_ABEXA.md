---
title: "ABENADBC_IF_SQL_CONN_OBJ_ABEXA"
description: |
  ABENADBC_IF_SQL_CONN_OBJ_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENADBC_IF_SQL_CONN_OBJ_ABEXA.htm"
abapFile: "ABENADBC_IF_SQL_CONN_OBJ_ABEXA.html"
keywords: ["insert", "update", "delete", "if", "try", "catch", "method", "class", "data", "ABENADBC", "SQL", "CONN", "OBJ", "ABEXA"]
---

This example demonstrates how to access an [ABAP SQL connection object](ABENABAP_SQL_CONN_OBJ_GLOSRY.html) using ADBC.

The example uses an ABAP SQL connection object to delete a database table.

\* Public class definition \\nCLASS cl\_demo\_adbc\_if\_sql\_conn\_obj DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_adbc\_if\_sql\_conn\_obj IMPLEMENTATION. \\n METHOD main. \\n FINAL(conn) = CONV dbcon-con\_name( \`R/3\*DEMO\` ). \\n FINAL(asql\_con) = cl\_abap\_sql\_connection\_builder=>service( \\n conn )->enable\_adbc\_adapter( )->create( ). \\n\\ \\n TRY. \\n FINAL(adbc\_con) = \\n cl\_sql\_adbc\_connection\_builder=>adapter\_2\_abap\_sql( \\n asql\_con )->get( ). \\n FINAL(conn\_test) = cl\_sql\_adbc\_connection\_builder=>default( \\n )->get( ). \\n FINAL(builder) = conn\_test->build\_new\_statement( ). \\n\\ \\n builder->sequence( \`DELETE FROM\` )->table( \`DEMO\_UPDATE\` ). \\n\\ \\n FINAL(delete) = builder->create\_regular( )->delete( ). \\n delete->execute\_and\_get\_rows\_processed( ). \\n\\ \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n INSERT demo\_update \\n FROM @( VALUE #( id = 'Z' col1 = 1 col2 = 2 \\n col3 = 3 col4 = 4 ) ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_adbc\_if\_sql\_conn\_obj DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_adbc\_if\_sql\_conn\_obj IMPLEMENTATION. \\n METHOD main. \\n FINAL(conn) = CONV dbcon-con\_name( \`R/3\*DEMO\` ). \\n FINAL(asql\_con) = cl\_abap\_sql\_connection\_builder=>service( \\n conn )->enable\_adbc\_adapter( )->create( ). \\n\\ \\n TRY. \\n FINAL(adbc\_con) = \\n cl\_sql\_adbc\_connection\_builder=>adapter\_2\_abap\_sql( \\n asql\_con )->get( ). \\n FINAL(conn\_test) = cl\_sql\_adbc\_connection\_builder=>default( \\n )->get( ). \\n FINAL(builder) = conn\_test->build\_new\_statement( ). \\n\\ \\n builder->sequence( \`DELETE FROM\` )->table( \`DEMO\_UPDATE\` ). \\n\\ \\n FINAL(delete) = builder->create\_regular( )->delete( ). \\n delete->execute\_and\_get\_rows\_processed( ). \\n\\ \\n CATCH cx\_sql\_exception INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n INSERT demo\_update \\n FROM @( VALUE #( id = 'Z' col1 = 1 col2 = 2 \\n col3 = 3 col4 = 4 ) ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abennative\_sql.html abenadbc\_intf.html abenadbc\_if\_abexas.html