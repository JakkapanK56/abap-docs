---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBIT_FUNC_ABEXA.htm"
abapFile: "ABENBIT_FUNC_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENBIT", "FUNC", "ABEXA"]
---

This example demonstrates how `bit-set` works.

The output of the class shows how bits are set in a specified place in hexadecimal form.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_bit\_set DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_bit\_set IMPLEMENTATION. \\n METHOD main. \\n DATA(number) = 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n IF abs( number ) <= 200. \\n out->write( CONV xstring( bit-set( number ) ) ). \\n ELSE. \\n out->write( \\n 'Number in Example must not exceed 200' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_bit\_set DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_bit\_set IMPLEMENTATION. \\n METHOD main. \\n DATA(number) = 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n IF abs( number ) <= 200. \\n out->write( CONV xstring( bit-set( number ) ) ). \\n ELSE. \\n out->write( \\n 'Number in Example must not exceed 200' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenbyte\_processing\_expr\_func.html abenbinary\_functions.html abenbit\_functions.html