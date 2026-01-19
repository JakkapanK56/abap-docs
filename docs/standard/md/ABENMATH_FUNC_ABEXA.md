---
title: "ABENMATH_FUNC_ABEXA"
description: |
  ABENMATH_FUNC_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMATH_FUNC_ABEXA.htm"
abapFile: "ABENMATH_FUNC_ABEXA.html"
keywords: ["method", "class", "data", "ABENMATH", "FUNC", "ABEXA"]
---

This example demonstrates the use of general numeric functions.

The output of the class shows how each of the general numeric functions affects the number -5.55.

\* Public class definition \\nCLASS cl\_demo\_numerical\_function DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_numerical\_function IMPLEMENTATION. \\n METHOD main. \\n DATA n TYPE decfloat16. \\n DATA m TYPE decfloat16 VALUE '-5.55'. \\n\\ \\n n = abs( m ). \\n out->write( |ABS: \\{ n \\}| ). \\n n = sign( m ). \\n out->write( |SIGN: \\{ n \\}| ). \\n n = ceil( m ). \\n out->write( |CEIL: \\{ n \\}| ). \\n n = floor( m ). \\n out->write( |FLOOR: \\{ n \\}| ). \\n n = trunc( m ). \\n out->write( |TRUNC: \\{ n \\}| ). \\n n = frac( m ). \\n out->write( |FRAC: \\{ n \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_numerical\_function DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_numerical\_function IMPLEMENTATION. \\n METHOD main. \\n DATA n TYPE decfloat16. \\n DATA m TYPE decfloat16 VALUE '-5.55'. \\n\\ \\n n = abs( m ). \\n out->write( |ABS: \\{ n \\}| ). \\n n = sign( m ). \\n out->write( |SIGN: \\{ n \\}| ). \\n n = ceil( m ). \\n out->write( |CEIL: \\{ n \\}| ). \\n n = floor( m ). \\n out->write( |FLOOR: \\{ n \\}| ). \\n n = trunc( m ). \\n out->write( |TRUNC: \\{ n \\}| ). \\n n = frac( m ). \\n out->write( |FRAC: \\{ n \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abennumerical\_functions\_abexas.html