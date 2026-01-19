---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTRY_ABEXA.htm"
abapFile: "ABENTRY_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "ABENTRY", "ABEXA"]
---

This example demonstrates the `TRY` control structure.

-   If the content of `number` is greater than 100, the `TRY` control structure of the [compilation unit](ABENCOMPILATION_UNIT_GLOSRY.html) raises an exception of the class `CX_DEMO_ABS_TOO_LARGE` in the `TRY` block. This exception is handled by the second `CATCH` block of the same `TRY` control structure, since the subclass of the most general exception is `CX_ROOT`.
-   If the content of `number` is 0, the runtime framework in the `TRY` block of the `TRY` control structure of the called method `calculation` raises an exception of the predefined class `CX_SY_ZERODIVIDE`. This is handled in the `CATCH` block of the same `TRY` control structure.
-   If the content of `number` is a negative number, the runtime framework in the `TRY` block of the `TRY` control structure of the called method `calculation` raises an exception of the predefined class `CX_SY_ARG_OUT_OF_DOMAIN`. Since no handler is defined for this exception in this `TRY` control structure, the exception is propagated from the method, which is made possible by the declaration of the superclass `CX_SY_ARITHMETIC_ERROR` using `RAISING` in the method interface. The `CLEANUP` block of the inner `TRY` control structure is executed first.
-   Any other exceptions are handled in the final `CATCH` block of the `TRY` control structure of the compilation unit, which catches all possible exceptions by specifying the most generic exception class `CX_ROOT`. If, for example, `CX_SY_ARG_OUT_OF_DOMAIN` or one of its superclasses was not declared in the method interface, the exception `CX_SY_NO_HANDLER` would be raised and would be handled in the final `CATCH` block.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_try DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n DATA: result TYPE p LENGTH 8 DECIMALS 2, \\n oref TYPE REF TO cx\_root, \\n text TYPE string. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA number TYPE i. \\n METHODS calculation \\n IMPORTING p\_number LIKE number \\n CHANGING p\_result LIKE result \\n p\_text LIKE text \\n RAISING cx\_sy\_arithmetic\_error. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_try IMPLEMENTATION. \\n METHOD main. \\n\\ \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n TRY. \\n IF abs( number ) > 100. \\n RAISE EXCEPTION TYPE cx\_demo\_abs\_too\_large. \\n ENDIF. \\n calculation( EXPORTING p\_number = number \\n CHANGING p\_result = result \\n p\_text = text ). \\n CATCH cx\_sy\_arithmetic\_error INTO oref. \\n text = oref->get\_text( ). \\n CATCH cx\_root INTO oref. \\n text = oref->get\_text( ). \\n ENDTRY. \\n IF NOT text IS INITIAL. \\n out->write( text ). \\n ENDIF. \\n out->write( |Final result: \\{ result ALIGN = LEFT \\}| ). \\n ENDMETHOD. \\n METHOD calculation. \\n DATA l\_oref TYPE REF TO cx\_root. \\n TRY. \\n p\_result = 1 / p\_number. \\n out->write( \\n |Result of division: \\{ p\_result ALIGN = LEFT \\}| ). \\n p\_result = sqrt( p\_number ). \\n out->write( \\n |Result of square root: \\{ p\_result ALIGN = LEFT \\}| ). \\n CATCH cx\_sy\_zerodivide INTO l\_oref. \\n p\_text = l\_oref->get\_text( ). \\n CLEANUP. \\n CLEAR p\_result. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_try DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n DATA: result TYPE p LENGTH 8 DECIMALS 2, \\n oref TYPE REF TO cx\_root, \\n text TYPE string. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n DATA number TYPE i. \\n METHODS calculation \\n IMPORTING p\_number LIKE number \\n CHANGING p\_result LIKE result \\n p\_text LIKE text \\n RAISING cx\_sy\_arithmetic\_error. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_try IMPLEMENTATION. \\n METHOD main. \\n\\ \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n TRY. \\n IF abs( number ) > 100. \\n RAISE EXCEPTION TYPE cx\_demo\_abs\_too\_large. \\n ENDIF. \\n calculation( EXPORTING p\_number = number \\n CHANGING p\_result = result \\n p\_text = text ). \\n CATCH cx\_sy\_arithmetic\_error INTO oref. \\n text = oref->get\_text( ). \\n CATCH cx\_root INTO oref. \\n text = oref->get\_text( ). \\n ENDTRY. \\n IF NOT text IS INITIAL. \\n out->write( text ). \\n ENDIF. \\n out->write( |Final result: \\{ result ALIGN = LEFT \\}| ). \\n ENDMETHOD. \\n METHOD calculation. \\n DATA l\_oref TYPE REF TO cx\_root. \\n TRY. \\n p\_result = 1 / p\_number. \\n out->write( \\n |Result of division: \\{ p\_result ALIGN = LEFT \\}| ). \\n p\_result = sqrt( p\_number ). \\n out->write( \\n |Result of square root: \\{ p\_result ALIGN = LEFT \\}| ). \\n CATCH cx\_sy\_zerodivide INTO l\_oref. \\n p\_text = l\_oref->get\_text( ). \\n CLEANUP. \\n CLEAR p\_result. \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenabap\_exceptions.html abenexceptions.html abenexception\_abexas.html