---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_LITERAL_ABEXA.htm"
abapFile: "ABENSQL_EXPR_LITERAL_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSQL", "EXPR", "LITERAL", "ABEXA"]
---

This example demonstrates one way to use a constant value in the `SELECT` list.

It is to be determined whether a row exists for a `WHERE` condition, regardless of the content of the row. A constant is specified to make specifying a column of the database and transporting it unnecessary. The target object `exists` is created using an inline declaration.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_literal DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_literal IMPLEMENTATION. \\n METHOD main. \\n DATA carrier TYPE scarr-carrid. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n SELECT SINGLE @abap\_true \\n FROM scarr \\n WHERE carrid = @carrier \\n INTO @FINAL(exists). \\n IF exists = abap\_true. \\n out->write( \\n |Carrier \\{ carrier \\} exists in SCARR| ). \\n ELSE. \\n out->write( \\n |Carrier \\{ carrier \\} does not exist in SCARR| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_literal DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_literal IMPLEMENTATION. \\n METHOD main. \\n DATA carrier TYPE scarr-carrid. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n SELECT SINGLE @abap\_true \\n FROM scarr \\n WHERE carrid = @carrier \\n INTO @FINAL(exists). \\n IF exists = abap\_true. \\n out->write( \\n |Carrier \\{ carrier \\} exists in SCARR| ). \\n ELSE. \\n out->write( \\n |Carrier \\{ carrier \\} does not exist in SCARR| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_elem.html