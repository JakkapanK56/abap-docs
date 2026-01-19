---
title: "ABENTABLE_EXP_DYNAMIC_COMP_ABEXA"
description: |
  ABENTABLE_EXP_DYNAMIC_COMP_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_EXP_DYNAMIC_COMP_ABEXA.htm"
abapFile: "ABENTABLE_EXP_DYNAMIC_COMP_ABEXA.html"
keywords: ["select", "if", "try", "catch", "method", "class", "data", "internal-table", "ABENTABLE", "EXP", "DYNAMIC", "COMP", "ABEXA"]
---

This example demonstrates how components or internal tables can be accessed dynamically.

Method `GET` of class `CL_DEMO_ITAB_STRUCT_COMP` returns the textual content of any component of any structured line of an internal table:

The above example calls that method for an internal table `scarr_tab`. The line and column can be freely specified.

\* Public class definition \\nCLASS cl\_demo\_itab\_get\_component DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_itab\_get\_component IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(scarr\_tab). \\n\\ \\n DATA(line) = 1. \\n DATA(column) = 1. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = line \\n )->add\_field( CHANGING field = column \\n )->request( ). \\n\\ \\n out->write( scarr\_tab \\n )->write( |Line \\{ line \\}, Column \\{ column \\}: \\{ \\n cl\_demo\_itab\_struct\_comp=>get( itab = scarr\_tab \\n line = line \\n comp = column ) \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. METHOD get. \\n TRY. \\n comp\_string = CONV string( itab\[ line \]-(comp) ). \\n CATCH cx\_sy\_itab\_line\_not\_found \\n cx\_sy\_assign\_illegal\_component INTO FINAL(exc). \\n comp\_string = \`Error: \` && exc->get\_text( ). \\n ENDTRY. \\nENDMETHOD. \* Public class definition \\nCLASS cl\_demo\_itab\_get\_component DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_itab\_get\_component IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT \* \\n FROM scarr \\n INTO TABLE @FINAL(scarr\_tab). \\n\\ \\n DATA(line) = 1. \\n DATA(column) = 1. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = line \\n )->add\_field( CHANGING field = column \\n )->request( ). \\n\\ \\n out->write( scarr\_tab \\n )->write( |Line \\{ line \\}, Column \\{ column \\}: \\{ \\n cl\_demo\_itab\_struct\_comp=>get( itab = scarr\_tab \\n line = line \\n comp = column ) \\}| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html abentable\_exp\_chaining.html