---
title: "ABENCASE_TYPE_OF_EXCEPTION_ABEXA"
description: |
  ABENCASE_TYPE_OF_EXCEPTION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCASE_TYPE_OF_EXCEPTION_ABEXA.htm"
abapFile: "ABENCASE_TYPE_OF_EXCEPTION_ABEXA.html"
keywords: ["if", "case", "try", "catch", "method", "class", "data", "ABENCASE", "TYPE", "EXCEPTION", "ABEXA"]
---

This example demonstrates the case distinction [`CASE TYPE OF`](ABAPCASE_TYPE.html) for exception classes.

Non-specific exceptions of the superclass `CX_DYNAMIC_CHECK` can be propagated from a method `my_sqrt`. The actual exception class is determined in the calling method using the case distinction [`CASE TYPE OF`](ABAPCASE_TYPE.html).

\* Public class definition \\nCLASS cl\_demo\_case\_type\_of\_exception DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS my\_sqrt IMPORTING num TYPE any \\n RAISING cx\_dynamic\_check. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_case\_type\_of\_exception IMPLEMENTATION. \\n METHOD main. \\n DATA number TYPE string VALUE -1. \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n TRY. \\n my\_sqrt( number ). \\n CATCH cx\_root INTO FINAL(exc). \\n CASE TYPE OF exc. \\n WHEN TYPE cx\_sy\_arithmetic\_error. \\n out->write( 'Arithmetic error' ). \\n WHEN TYPE cx\_sy\_conversion\_error. \\n out->write( 'Conversion error' ). \\n WHEN OTHERS. \\n out->write( 'Other error' ). \\n ENDCASE. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD my\_sqrt. \\n FINAL(sqrt) = sqrt( CONV decfloat34( num ) ). \\n out->write( sqrt ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_case\_type\_of\_exception DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS my\_sqrt IMPORTING num TYPE any \\n RAISING cx\_dynamic\_check. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_case\_type\_of\_exception IMPLEMENTATION. \\n METHOD main. \\n DATA number TYPE string VALUE -1. \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n TRY. \\n my\_sqrt( number ). \\n CATCH cx\_root INTO FINAL(exc). \\n CASE TYPE OF exc. \\n WHEN TYPE cx\_sy\_arithmetic\_error. \\n out->write( 'Arithmetic error' ). \\n WHEN TYPE cx\_sy\_conversion\_error. \\n out->write( 'Conversion error' ). \\n WHEN OTHERS. \\n out->write( 'Other error' ). \\n ENDCASE. \\n ENDTRY. \\n ENDMETHOD. \\n METHOD my\_sqrt. \\n FINAL(sqrt) = sqrt( CONV decfloat34( num ) ). \\n out->write( sqrt ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abencontrol\_structures.html abenabap\_branches.html abapcase\_type.html