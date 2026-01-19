---
title: "ABENBIT_FUNC_ABEXA"
description: |
  ABENBIT_FUNC_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBIT_FUNC_ABEXA.htm"
abapFile: "ABENBIT_FUNC_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENBIT", "FUNC", "ABEXA"]
---

This example demonstrates how `bit-set` works.

The output of the class shows how bits are set in a specified place in hexadecimal form.

\* Public class definition \\nCLASS cl\_demo\_bit\_set DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_bit\_set IMPLEMENTATION. \\n METHOD main. \\n DATA(number) = 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n IF abs( number ) <= 200. \\n out->write( CONV xstring( bit-set( number ) ) ). \\n ELSE. \\n out->write( \\n 'Number in Example must not exceed 200' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_bit\_set DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_bit\_set IMPLEMENTATION. \\n METHOD main. \\n DATA(number) = 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = number ). \\n IF abs( number ) <= 200. \\n out->write( CONV xstring( bit-set( number ) ) ). \\n ELSE. \\n out->write( \\n 'Number in Example must not exceed 200' ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenbyte\_processing\_expr\_func.html abenbinary\_functions.html abenbit\_functions.html