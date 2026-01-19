---
title: "ABENDIVISIONS_ABEXA"
description: |
  ABENDIVISIONS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDIVISIONS_ABEXA.htm"
abapFile: "ABENDIVISIONS_ABEXA.html"
keywords: ["try", "catch", "method", "class", "data", "ABENDIVISIONS", "ABEXA"]
---

This example demonstrates the function of arithmetic operators.

The possible [arithmetic operators](ABENARITH_OPERATORS.html) are applied to numbers that can be entered.

\* Public class definition \\nCLASS cl\_demo\_data\_calculate DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_data\_calculate IMPLEMENTATION. \\n METHOD main. \\n DATA num1 TYPE decfloat34 VALUE 2. \\n DATA num2 TYPE decfloat34 VALUE 3. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = num1 \\n )->request( CHANGING field = num2 ). \\n\\ \\n TRY. \\n out->write( |\\{ num1 \\} + \\{ num2 \\} = \\{ num1 + num2 \\}| \\n )->write( |\\{ num1 \\} - \\{ num2 \\} = \\{ num1 - num2 \\}| \\n )->write( |\\{ num1 \\} \* \\{ num2 \\} = \\{ num1 \* num2 \\}| \\n )->write( |\\{ num1 \\} / \\{ num2 \\} = \\{ num1 / num2 \\}| \\n )->write( |\\{ num1 \\} DIV \\{ num2 \\} = \\{ num1 DIV num2 \\}| \\n )->write( |\\{ num1 \\} MOD \\{ num2 \\} = \\{ num1 MOD num2 \\}| \\n )->write( |\\{ num1 \\} \*\* \\{ num2 \\} = \\{ num1 \*\* num2 \\}| ). \\n CATCH cx\_sy\_arithmetic\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_data\_calculate DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_data\_calculate IMPLEMENTATION. \\n METHOD main. \\n DATA num1 TYPE decfloat34 VALUE 2. \\n DATA num2 TYPE decfloat34 VALUE 3. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = num1 \\n )->request( CHANGING field = num2 ). \\n\\ \\n TRY. \\n out->write( |\\{ num1 \\} + \\{ num2 \\} = \\{ num1 + num2 \\}| \\n )->write( |\\{ num1 \\} - \\{ num2 \\} = \\{ num1 - num2 \\}| \\n )->write( |\\{ num1 \\} \* \\{ num2 \\} = \\{ num1 \* num2 \\}| \\n )->write( |\\{ num1 \\} / \\{ num2 \\} = \\{ num1 / num2 \\}| \\n )->write( |\\{ num1 \\} DIV \\{ num2 \\} = \\{ num1 DIV num2 \\}| \\n )->write( |\\{ num1 \\} MOD \\{ num2 \\} = \\{ num1 MOD num2 \\}| \\n )->write( |\\{ num1 \\} \*\* \\{ num2 \\} = \\{ num1 \*\* num2 \\}| ). \\n CATCH cx\_sy\_arithmetic\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abapcompute\_arith.html abenarith\_operators.html