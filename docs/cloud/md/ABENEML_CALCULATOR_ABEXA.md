---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENEML_CALCULATOR_ABEXA.htm"
abapFile: "ABENEML_CALCULATOR_ABEXA.html"
keywords: ["select", "delete", "loop", "do", "if", "try", "catch", "method", "class", "data", "ABENEML", "CALCULATOR", "ABEXA"]
---

This example demonstrates a calculator that is implemented in a RAP context using a simple managed RAP BO. The calculator uses a create operation with an ABAP EML `MODIFY ENTITY` statement to perform calculations based on user input, which includes numbers and an arithmetic operator. The RAP BO is draft-enabled, but it does not play a role in this particular example. For more information refer to the related example [ABAP EML in Use: Managed, Draft-Enabled RAP BO with Late Numbering](ABENSHEET_RAP_CALC_DR_LN_M_ABEXA.html).

**Access with ABAP using EML**

The above source code uses [EML](ABENEML_GLOSRY.html) to access the RAP business object from an ABAP class.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_eml\_u\_calculator DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n num1 TYPE c LENGTH 7, \\n num2 TYPE c LENGTH 7, \\n arithm\_op TYPE c LENGTH 1. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_eml\_u\_calculator IMPLEMENTATION. \\n METHOD main. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_text( \`RAP Calculator with a managed RAP BO\` \\n )->add\_text( \`Please enter numbers and an operand \` && \\n \`(+ - \* P) for the calculation:\` \\n )->add\_field( CHANGING field = num1 \\n )->add\_line( \\n )->add\_field( CHANGING field = arithm\_op \\n )->add\_line( \\n )->add\_field( CHANGING field = num2 \\n )->request( ). \\n\\ \\n out->begin\_section( \`RAP Calculator with a managed RAP BO\` ). \\n\\ \\n TRY. \\n MODIFY ENTITY demo\_cs\_rap\_draft\_m \\n CREATE AUTO FILL CID \\n FIELDS ( num1 num2 arithm\_op ) WITH VALUE #( \\n ( num1 = num1 \\n num2 = num2 \\n arithm\_op = arithm\_op ) ). \\n CATCH cx\_root INTO FINAL(err). \\n ENDTRY. \\n\\ \\n IF err IS NOT INITIAL. \\n out->write( err->get\_text( ) ). \\n ENDIF. \\n\\ \\n COMMIT ENTITIES RESPONSE OF demo\_cs\_rap\_draft\_m REPORTED DATA(rep). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n IF rep-calc IS NOT INITIAL. \\n out->write\_html( '**The calculation cannot be executed:**' ). \\n LOOP AT rep-calc \\n ASSIGNING FIELD-SYMBOL(). \\n out->write( \-%msg->if\_message~get\_text( ) ). \\n ENDLOOP. \\n ENDIF. \\n\\ \\n SELECT SINGLE num1, arithm\_op, num2, calc\_result \\n FROM demo\_cs\_tab\_calc INTO @FINAL(calculation). \\n\\ \\n IF calculation IS NOT INITIAL. \\n out->write\_html( \\n '**Calculation result**' \\n )->write( calculation ). \\n ENDIF. \\n\\ \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_cs\_tab\_calc. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_eml\_u\_calculator DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n num1 TYPE c LENGTH 7, \\n num2 TYPE c LENGTH 7, \\n arithm\_op TYPE c LENGTH 1. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_eml\_u\_calculator IMPLEMENTATION. \\n METHOD main. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_text( \`RAP Calculator with a managed RAP BO\` \\n )->add\_text( \`Please enter numbers and an operand \` && \\n \`(+ - \* P) for the calculation:\` \\n )->add\_field( CHANGING field = num1 \\n )->add\_line( \\n )->add\_field( CHANGING field = arithm\_op \\n )->add\_line( \\n )->add\_field( CHANGING field = num2 \\n )->request( ). \\n\\ \\n out->begin\_section( \`RAP Calculator with a managed RAP BO\` ). \\n\\ \\n TRY. \\n MODIFY ENTITY demo\_cs\_rap\_draft\_m \\n CREATE AUTO FILL CID \\n FIELDS ( num1 num2 arithm\_op ) WITH VALUE #( \\n ( num1 = num1 \\n num2 = num2 \\n arithm\_op = arithm\_op ) ). \\n CATCH cx\_root INTO FINAL(err). \\n ENDTRY. \\n\\ \\n IF err IS NOT INITIAL. \\n out->write( err->get\_text( ) ). \\n ENDIF. \\n\\ \\n COMMIT ENTITIES RESPONSE OF demo\_cs\_rap\_draft\_m REPORTED DATA(rep). \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n IF rep-calc IS NOT INITIAL. \\n out->write\_html( '**The calculation cannot be executed:**' ). \\n LOOP AT rep-calc \\n ASSIGNING FIELD-SYMBOL(). \\n out->write( \-%msg->if\_message~get\_text( ) ). \\n ENDLOOP. \\n ENDIF. \\n\\ \\n SELECT SINGLE num1, arithm\_op, num2, calc\_result \\n FROM demo\_cs\_tab\_calc INTO @FINAL(calculation). \\n\\ \\n IF calculation IS NOT INITIAL. \\n out->write\_html( \\n '**Calculation result**' \\n )->write( calculation ). \\n ENDIF. \\n\\ \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_cs\_tab\_calc. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapmodify\_entity\_entities.html abapeml\_modify\_examples\_abexas.html