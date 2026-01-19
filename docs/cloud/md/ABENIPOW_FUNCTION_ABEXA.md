---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENIPOW_FUNCTION_ABEXA.htm"
abapFile: "ABENIPOW_FUNCTION_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENIPOW", "FUNCTION", "ABEXA"]
---

This example demonstrates the integer power function [`ipow`](ABENPOWER_FUNCTION.html).

The class demonstrates that the integer power function `ipow` can be used to achieve more precise results than with the [arithmetic operator `**`](ABENARITH_OPERATORS.html). In the cases shown here, the operator `**` produces the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `f`. If `ipow` is used, the calculation type is determined by the arguments `arg1` and `arg2`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ipow DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ipow IMPLEMENTATION. \\n METHOD main. \\n DATA n TYPE i. \\n DATA arg1 TYPE p DECIMALS 1. \\n DATA arg2 TYPE int8. \\n\\ \\n n = 2. \\n arg1 = \`1.2\`. \\n out->write( |\*\* : \\{ arg1 \*\* n \\}| \\n )->write( |ipow: \\{ ipow( base = arg1 exp = n ) \\}| ). \\n\\ \\n out->line( ). \\n\\ \\n n = 62. \\n arg2 = 2. \\n out->write( |\*\* : \\{ arg2 \*\* n \\}| \\n )->write( |ipow: \\{ ipow( base = arg2 exp = n ) \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_ipow DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ipow IMPLEMENTATION. \\n METHOD main. \\n DATA n TYPE i. \\n DATA arg1 TYPE p DECIMALS 1. \\n DATA arg2 TYPE int8. \\n\\ \\n n = 2. \\n arg1 = \`1.2\`. \\n out->write( |\*\* : \\{ arg1 \*\* n \\}| \\n )->write( |ipow: \\{ ipow( base = arg1 exp = n ) \\}| ). \\n\\ \\n out->line( ). \\n\\ \\n n = 62. \\n arg2 = 2. \\n out->write( |\*\* : \\{ arg2 \*\* n \\}| \\n )->write( |ipow: \\{ ipow( base = arg2 exp = n ) \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abennumerical\_functions\_abexas.html