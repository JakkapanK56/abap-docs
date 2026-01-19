---
title: "ABENSQL_EXPR_LITERAL_ABEXA"
description: |
  ABENSQL_EXPR_LITERAL_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_EXPR_LITERAL_ABEXA.htm"
abapFile: "ABENSQL_EXPR_LITERAL_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSQL", "EXPR", "LITERAL", "ABEXA"]
---

This example demonstrates one way to use a constant value in the `SELECT` list.

It is to be determined whether a row exists for a `WHERE` condition, regardless of the content of the row. A constant is specified to make specifying a column of the database and transporting it unnecessary. The target object `exists` is created using an inline declaration.

\* Public class definition \\nCLASS cl\_demo\_sql\_expr\_literal DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_literal IMPLEMENTATION. \\n METHOD main. \\n DATA carrier TYPE scarr-carrid. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n SELECT SINGLE @abap\_true \\n FROM scarr \\n WHERE carrid = @carrier \\n INTO @FINAL(exists). \\n IF exists = abap\_true. \\n out->write( \\n |Carrier \\{ carrier \\} exists in SCARR| ). \\n ELSE. \\n out->write( \\n |Carrier \\{ carrier \\} does not exist in SCARR| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_sql\_expr\_literal DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_literal IMPLEMENTATION. \\n METHOD main. \\n DATA carrier TYPE scarr-carrid. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n SELECT SINGLE @abap\_true \\n FROM scarr \\n WHERE carrid = @carrier \\n INTO @FINAL(exists). \\n IF exists = abap\_true. \\n out->write( \\n |Carrier \\{ carrier \\} exists in SCARR| ). \\n ELSE. \\n out->write( \\n |Carrier \\{ carrier \\} does not exist in SCARR| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_elem.html