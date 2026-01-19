---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_CAST_ABEXA.htm"
abapFile: "ABENSQL_EXPR_CAST_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "ABENSQL", "EXPR", "CAST", "ABEXA"]
---

This example demonstrates [cast expressions](ABENSQL_CAST.html) in ABAP SQL.

Transforms numeric columns and a date field from a DDIC database table to columns of the type `CHAR`, which makes it possible to process them as character strings in the ABAP class.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_cast DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_cast IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM @( VALUE #( \\n id = 'X' \\n num1 = 111 \\n numlong1 = '123456789' \\n dec3 = '123.456' \\n dats2 = cl\_demo\_date\_time=>get\_system\_date( ) ) ). \\n\\ \\n SELECT SINGLE \\n FROM demo\_expressions \\n FIELDS CAST( num1 AS CHAR( 20 ) ) AS col1, \\n CAST( numlong1 AS CHAR( 20 ) ) AS col2, \\n CAST( dec3 AS CHAR( 20 ) ) AS col3, \\n CAST( dats2 AS CHAR( 20 ) ) AS col4 \\n WHERE id = 'X' \\n INTO @FINAL(result). \\n\\ \\n DATA(text) = \`\`. \\n DO. \\n ASSIGN result-(sy-index) TO FIELD-SYMBOL(). \\n IF sy-subrc = 0. \\n text = text && && \`, \`. \\n ELSE. \\n EXIT. \\n ENDIF. \\n ENDDO. \\n CONDENSE text. \\n SHIFT text RIGHT DELETING TRAILING \`,\`. \\n out->write( text ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_cast DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_cast IMPLEMENTATION. \\n METHOD main. \\n DELETE FROM demo\_expressions. "#EC CI\_NOWHERE \\n INSERT demo\_expressions FROM @( VALUE #( \\n id = 'X' \\n num1 = 111 \\n numlong1 = '123456789' \\n dec3 = '123.456' \\n dats2 = cl\_demo\_date\_time=>get\_system\_date( ) ) ). \\n\\ \\n SELECT SINGLE \\n FROM demo\_expressions \\n FIELDS CAST( num1 AS CHAR( 20 ) ) AS col1, \\n CAST( numlong1 AS CHAR( 20 ) ) AS col2, \\n CAST( dec3 AS CHAR( 20 ) ) AS col3, \\n CAST( dats2 AS CHAR( 20 ) ) AS col4 \\n WHERE id = 'X' \\n INTO @FINAL(result). \\n\\ \\n DATA(text) = \`\`. \\n DO. \\n ASSIGN result-(sy-index) TO FIELD-SYMBOL(). \\n IF sy-subrc = 0. \\n text = text && && \`, \`. \\n ELSE. \\n EXIT. \\n ENDIF. \\n ENDDO. \\n CONDENSE text. \\n SHIFT text RIGHT DELETING TRAILING \`,\`. \\n out->write( text ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_cast.html