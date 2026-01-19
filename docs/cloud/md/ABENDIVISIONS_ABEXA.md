---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDIVISIONS_ABEXA.htm"
abapFile: "ABENDIVISIONS_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABENDIVISIONS", "ABEXA"]
---

This example demonstrates the function of arithmetic operators.

The possible [arithmetic operators](ABENARITH_OPERATORS.html) are applied to numbers that can be entered.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_data\_calculate DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_data\_calculate IMPLEMENTATION. \\n METHOD main. \\n DATA num1 TYPE decfloat34 VALUE 2. \\n DATA num2 TYPE decfloat34 VALUE 3. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = num1 \\n )->request( CHANGING field = num2 ). \\n\\ \\n TRY. \\n out->write( |\\{ num1 \\} + \\{ num2 \\} = \\{ num1 + num2 \\}| \\n )->write( |\\{ num1 \\} - \\{ num2 \\} = \\{ num1 - num2 \\}| \\n )->write( |\\{ num1 \\} \* \\{ num2 \\} = \\{ num1 \* num2 \\}| \\n )->write( |\\{ num1 \\} / \\{ num2 \\} = \\{ num1 / num2 \\}| \\n )->write( |\\{ num1 \\} DIV \\{ num2 \\} = \\{ num1 DIV num2 \\}| \\n )->write( |\\{ num1 \\} MOD \\{ num2 \\} = \\{ num1 MOD num2 \\}| \\n )->write( |\\{ num1 \\} \*\* \\{ num2 \\} = \\{ num1 \*\* num2 \\}| ). \\n CATCH cx\_sy\_arithmetic\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_data\_calculate DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_data\_calculate IMPLEMENTATION. \\n METHOD main. \\n DATA num1 TYPE decfloat34 VALUE 2. \\n DATA num2 TYPE decfloat34 VALUE 3. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = num1 \\n )->request( CHANGING field = num2 ). \\n\\ \\n TRY. \\n out->write( |\\{ num1 \\} + \\{ num2 \\} = \\{ num1 + num2 \\}| \\n )->write( |\\{ num1 \\} - \\{ num2 \\} = \\{ num1 - num2 \\}| \\n )->write( |\\{ num1 \\} \* \\{ num2 \\} = \\{ num1 \* num2 \\}| \\n )->write( |\\{ num1 \\} / \\{ num2 \\} = \\{ num1 / num2 \\}| \\n )->write( |\\{ num1 \\} DIV \\{ num2 \\} = \\{ num1 DIV num2 \\}| \\n )->write( |\\{ num1 \\} MOD \\{ num2 \\} = \\{ num1 MOD num2 \\}| \\n )->write( |\\{ num1 \\} \*\* \\{ num2 \\} = \\{ num1 \*\* num2 \\}| ). \\n CATCH cx\_sy\_arithmetic\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abapcompute\_arith.html abenarith\_operators.html