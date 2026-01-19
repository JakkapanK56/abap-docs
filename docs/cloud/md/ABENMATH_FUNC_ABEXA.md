---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMATH_FUNC_ABEXA.htm"
abapFile: "ABENMATH_FUNC_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENMATH", "FUNC", "ABEXA"]
---

This example demonstrates the use of general numeric functions.

The output of the class shows how each of the general numeric functions affects the number -5.55.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_numerical\_function DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_numerical\_function IMPLEMENTATION. \\n METHOD main. \\n DATA n TYPE decfloat16. \\n DATA m TYPE decfloat16 VALUE '-5.55'. \\n\\ \\n n = abs( m ). \\n out->write( |ABS: \\{ n \\}| ). \\n n = sign( m ). \\n out->write( |SIGN: \\{ n \\}| ). \\n n = ceil( m ). \\n out->write( |CEIL: \\{ n \\}| ). \\n n = floor( m ). \\n out->write( |FLOOR: \\{ n \\}| ). \\n n = trunc( m ). \\n out->write( |TRUNC: \\{ n \\}| ). \\n n = frac( m ). \\n out->write( |FRAC: \\{ n \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_numerical\_function DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_numerical\_function IMPLEMENTATION. \\n METHOD main. \\n DATA n TYPE decfloat16. \\n DATA m TYPE decfloat16 VALUE '-5.55'. \\n\\ \\n n = abs( m ). \\n out->write( |ABS: \\{ n \\}| ). \\n n = sign( m ). \\n out->write( |SIGN: \\{ n \\}| ). \\n n = ceil( m ). \\n out->write( |CEIL: \\{ n \\}| ). \\n n = floor( m ). \\n out->write( |FLOOR: \\{ n \\}| ). \\n n = trunc( m ). \\n out->write( |TRUNC: \\{ n \\}| ). \\n n = frac( m ). \\n out->write( |FRAC: \\{ n \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abennumerical\_functions\_abexas.html