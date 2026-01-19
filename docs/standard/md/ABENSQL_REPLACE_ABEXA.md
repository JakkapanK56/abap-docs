---
title: "ABENSQL_REPLACE_ABEXA"
description: |
  ABENSQL_REPLACE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_REPLACE_ABEXA.htm"
abapFile: "ABENSQL_REPLACE_ABEXA.html"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "ABENSQL", "REPLACE", "ABEXA"]
---

This example demonstrates the maximum length of the result of the [`REPLACE` function](ABENSQL_STRING_FUNC.html) in ABAP SQL.

The example shows a maybe somewhat unexpected behavior of the [`REPLACE` function](ABENSQL_STRING_FUNC.html) in ABAP SQL. The limit of 1333 characters is already exceeded at the 18th iteration. Although the resulting text content has a length of only *75*, ABAP SQL has to reserve *73 x 18* characters which is greater than *1333*. In the preceding iterations, the reserved but unused characters are filled with blanks.

The built-in CDS function [`REPLACE`](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) has the same behavior.

\* Public class definition \\nCLASS cl\_demo\_sql\_function\_replace DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_function\_replace IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n repl TYPE c LENGTH 100, \\n result TYPE string. \\n\\ \\n DO. \\n repl &&= 'X'. \\n TRY. \\n SELECT SINGLE (\`REPLACE( text, '&', @repl ) as msg\`) \\n FROM t100 \\n WHERE sprsl = 'E' AND \\n arbgb = 'SABAPDEMOS' AND \\n msgnr = '104' \\n INTO @result. \\n out->write( |\\{ result \\} (\\{ strlen( result ) \\})| ). \\n CATCH cx\_sy\_open\_sql\_db INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n EXIT. \\n ENDTRY. \\n ENDDO. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_sql\_function\_replace DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_function\_replace IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n repl TYPE c LENGTH 100, \\n result TYPE string. \\n\\ \\n DO. \\n repl &&= 'X'. \\n TRY. \\n SELECT SINGLE (\`REPLACE( text, '&', @repl ) as msg\`) \\n FROM t100 \\n WHERE sprsl = 'E' AND \\n arbgb = 'SABAPDEMOS' AND \\n msgnr = '104' \\n INTO @result. \\n out->write( |\\{ result \\} (\\{ strlen( result ) \\})| ). \\n CATCH cx\_sy\_open\_sql\_db INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n EXIT. \\n ENDTRY. \\n ENDDO. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html abensql\_string\_func.html