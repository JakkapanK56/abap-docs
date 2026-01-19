---
title: "ABENSQL_INJ_ADBC_SCRTY"
description: |
  ABENSQL_INJ_ADBC_SCRTY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_INJ_ADBC_SCRTY.htm"
abapFile: "ABENSQL_INJ_ADBC_SCRTY.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "ABENSQL", "INJ", "ADBC", "SCRTY"]
---

When [ADBC](ABENADBC_GLOSRY.html) is used, SQL statements are passed as strings to objects of class ADBC and then passed on to the database system. If all of part of one of these SQL statements originates from outside of the program, there is a risk of an SQL injection.

To prevent SQL Injections, make sure that SQL statements passed to ADBC contain as few parts as possible that originate from outside of the program. If the statements do contain parts from outside the program, the content of these parts should not be chained to the SQL statement. Instead these content should be addressed using the `?` placeholder and the associated `SET_PARAM` methods. If this is not possible, the parts from outside must be checked using the `CL_ABAP_DYN_PRG` class and escaped if necessary.

In the following program section, the key value `key` (entered from outside ) is chained to the SQL statement. It must therefore be escaped using the method `QUOTE` (which also adds quotation marks at the start and at the end), to prevent SQL injections.

In this example, the same functionality is used as in the previous example. Here it is not necessary to mask the value, because the input is connected to a parameter (and not chained).

DATA key TYPE string. \\ncl\_demo\_input=>request( CHANGING field = key ). \\n\\ \\nTRY. \\n FINAL(result) = NEW cl\_sql\_statement( )->execute\_query( \\n \`SELECT carrname \` && \\n \`FROM scarr \` && \\n \`WHERE mandt = \` && \`'\` && sy-mandt && \`' AND\` && \\n \` carrid = \` && \\n cl\_abap\_dyn\_prg=>quote( to\_upper( key ) ) ). \\n DATA name TYPE scarr-carrname. \\n result->set\_param( REF #( name ) ). \\n result->next( ). \\n result->close( ). \\n cl\_demo\_output=>display( name ). \\n CATCH cx\_sql\_exception INTO FINAL(err). \\n cl\_demo\_output=>display( err->get\_text( ) ). \\nENDTRY. DATA key TYPE string. \\ncl\_demo\_input=>request( CHANGING field = key ). \\n\\ \\nTRY. \\n FINAL(sql) = NEW cl\_sql\_statement( ). \\n sql->set\_param( REF #( sy-mandt ) ). \\n sql->set\_param( REF #( key ) ). \\n FINAL(result) = sql->execute\_query( \\n \`SELECT carrname \` && \\n \`FROM scarr \` && \\n \`WHERE mandt = ? AND carrid = ?\` ). \\n DATA name TYPE scarr-carrname. \\n result->set\_param( REF #( name ) ). \\n result->next( ). \\n result->close( ). \\n cl\_demo\_output=>display( name ). \\n CATCH cx\_sql\_exception INTO FINAL(err). \\n cl\_demo\_output=>display( err->get\_text( ) ). \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_security.html abendynamic\_programming\_scrty.html abensql\_injections\_scrty.html