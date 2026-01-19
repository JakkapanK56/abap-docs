---
title: "ABENIPOW_FUNCTION_ABEXA"
description: |
  ABENIPOW_FUNCTION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIPOW_FUNCTION_ABEXA.htm"
abapFile: "ABENIPOW_FUNCTION_ABEXA.html"
keywords: ["if", "case", "method", "class", "data", "ABENIPOW", "FUNCTION", "ABEXA"]
---

This example demonstrates the integer power function [`ipow`](ABENPOWER_FUNCTION.html).

The class demonstrates that the integer power function `ipow` can be used to achieve more precise results than with the [arithmetic operator `**`](ABENARITH_OPERATORS.html). In the cases shown here, the operator `**` produces the [calculation type](ABENCALCULATION_TYPE_GLOSRY.html)\\ `f`. If `ipow` is used, the calculation type is determined by the arguments `arg1` and `arg2`.

\* Public class definition \\nCLASS cl\_demo\_ipow DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ipow IMPLEMENTATION. \\n METHOD main. \\n DATA n TYPE i. \\n DATA arg1 TYPE p DECIMALS 1. \\n DATA arg2 TYPE int8. \\n\\ \\n n = 2. \\n arg1 = \`1.2\`. \\n out->write( |\*\* : \\{ arg1 \*\* n \\}| \\n )->write( |ipow: \\{ ipow( base = arg1 exp = n ) \\}| ). \\n\\ \\n out->line( ). \\n\\ \\n n = 62. \\n arg2 = 2. \\n out->write( |\*\* : \\{ arg2 \*\* n \\}| \\n )->write( |ipow: \\{ ipow( base = arg2 exp = n ) \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_ipow DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_ipow IMPLEMENTATION. \\n METHOD main. \\n DATA n TYPE i. \\n DATA arg1 TYPE p DECIMALS 1. \\n DATA arg2 TYPE int8. \\n\\ \\n n = 2. \\n arg1 = \`1.2\`. \\n out->write( |\*\* : \\{ arg1 \*\* n \\}| \\n )->write( |ipow: \\{ ipow( base = arg1 exp = n ) \\}| ). \\n\\ \\n out->line( ). \\n\\ \\n n = 62. \\n arg2 = 2. \\n out->write( |\*\* : \\{ arg2 \*\* n \\}| \\n )->write( |ipow: \\{ ipow( base = arg2 exp = n ) \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html abennumerical\_functions\_abexas.html