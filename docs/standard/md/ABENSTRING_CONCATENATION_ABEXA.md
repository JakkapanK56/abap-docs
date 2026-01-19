---
title: "ABENSTRING_CONCATENATION_ABEXA"
description: |
  ABENSTRING_CONCATENATION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_CONCATENATION_ABEXA.htm"
abapFile: "ABENSTRING_CONCATENATION_ABEXA.html"
keywords: ["loop", "if", "case", "method", "class", "data", "ABENSTRING", "CONCATENATION", "ABEXA"]
---

This example demonstrates how string concatenations can be optimized.

This example demonstrates the optimization of a string concatenation, if a string is lengthened on the right side by appending content during an [assignment](ABENEQUALS_STRING_EXPR.html) to a string. In this case, the strings are processed in a loop using a [`REDUCE` expression](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html).

Without optimization, the runtime increases quadratically with the number of iterations, which has a noticeable effect for large numbers `n`.

-   There is no optimization in the first `REDUCE` expression since an expression is appended to the string `s`.
-   In the second `REDUCE` expression, the expression is assigned to a helper variable `num` using `LET`. This variable can be appended to `s` directly without an interim result needing to be produced.

\* Public class definition \\nCLASS cl\_demo\_str\_concatenation DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_concatenation IMPLEMENTATION. \\n METHOD main. \\n DATA(n) = 10000. \\n\\ \\n\\ \\n FINAL(t1) = utclong\_current( ). \\n FINAL(result1) = \\n REDUCE string( INIT s = \`\` \\n FOR i = 1 UNTIL i > n \\n NEXT s &&= CONV string( i ) ). \\n FINAL(t2) = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(t21) ). \\n\\ \\n FINAL(t3) = utclong\_current( ). \\n FINAL(result2) = \\n REDUCE string( INIT s = \`\` \\n FOR i = 1 UNTIL i > n \\n LET num = CONV string( i ) IN \\n NEXT s &&= num ). \\n FINAL(t4) = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t4 \\n low = t3 \\n IMPORTING seconds = DATA(t43) ). \\n ASSERT result1 = result2. \\n out->write( |Optimization factor: \\{ CONV i( t21 / t43 ) \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_str\_concatenation DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_concatenation IMPLEMENTATION. \\n METHOD main. \\n DATA(n) = 10000. \\n\\ \\n\\ \\n FINAL(t1) = utclong\_current( ). \\n FINAL(result1) = \\n REDUCE string( INIT s = \`\` \\n FOR i = 1 UNTIL i > n \\n NEXT s &&= CONV string( i ) ). \\n FINAL(t2) = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(t21) ). \\n\\ \\n FINAL(t3) = utclong\_current( ). \\n FINAL(result2) = \\n REDUCE string( INIT s = \`\` \\n FOR i = 1 UNTIL i > n \\n LET num = CONV string( i ) IN \\n NEXT s &&= num ). \\n FINAL(t4) = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t4 \\n low = t3 \\n IMPORTING seconds = DATA(t43) ). \\n ASSERT result1 = result2. \\n out->write( |Optimization factor: \\{ CONV i( t21 / t43 ) \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_expr\_perfo.html