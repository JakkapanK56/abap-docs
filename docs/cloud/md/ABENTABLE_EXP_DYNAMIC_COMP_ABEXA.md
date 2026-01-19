---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_EXP_DYNAMIC_COMP_ABEXA.htm"
abapFile: "ABENTABLE_EXP_DYNAMIC_COMP_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "ABENTABLE", "EXP", "DYNAMIC", "COMP", "ABEXA"]
---

This example demonstrates how components or internal tables can be accessed dynamically.

Method `GET` of class `CL_DEMO_ITAB_STRUCT_COMP` returns the textual content of any component of any structured line of an internal table:

The above example calls that method for an internal table `scarr_tab`. The line and column can be freely specified.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_itab\_get\_component DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_itab\_get\_component IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(scarr\_tab). \\n\\ \\n DATA(line) = 1. \\n DATA(column) = 1. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = line \\n )->add\_field( CHANGING field = column \\n )->request( ). \\n\\ \\n out->write( scarr\_tab \\n )->write( |Line \\{ line \\}, Column \\{ column \\}: \\{ \\n cl\_demo\_itab\_struct\_comp=>get( itab = scarr\_tab \\n line = line \\n comp = column ) \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. METHOD get. \\n TRY. \\n comp\_string = CONV string( itab\[ line \]-(comp) ). \\n CATCH cx\_sy\_itab\_line\_not\_found \\n cx\_sy\_assign\_illegal\_component INTO FINAL(exc). \\n comp\_string = \`Error: \` && exc->get\_text( ). \\n ENDTRY. \\nENDMETHOD. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_itab\_get\_component DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_itab\_get\_component IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(scarr\_tab). \\n\\ \\n DATA(line) = 1. \\n DATA(column) = 1. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = line \\n )->add\_field( CHANGING field = column \\n )->request( ). \\n\\ \\n out->write( scarr\_tab \\n )->write( |Line \\{ line \\}, Column \\{ column \\}: \\{ \\n cl\_demo\_itab\_struct\_comp=>get( itab = scarr\_tab \\n line = line \\n comp = column ) \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html abentable\_exp\_chaining.html