---
title: "ABENBUILT_IN_FUNCTIONS_HIDING"
description: |
  ABENBUILT_IN_FUNCTIONS_HIDING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBUILT_IN_FUNCTIONS_HIDING.htm"
abapFile: "ABENBUILT_IN_FUNCTIONS_HIDING.html"
keywords: ["select", "if", "method", "class", "data", "ABENBUILT", "FUNCTIONS", "HIDING"]
---

Within a class, a built-in function is always hidden by [methods](ABENMETHOD_GLOSRY.html) of the class if they have the same name, regardless of the number and type of its parameters. The function is also hidden regardless of the number and type of method parameters. This especially takes place in method calls for which no selector `=>` or `->` is specified in front of the method name:

The function is hidden regardless of the operand position. More specifically, any built-in functions used as arguments of other functions are also hidden.

Methods should never be given the same name as a built-in function.

The following class returns a syntax error. The specification of `strlen` on the right side of the assignment addresses the method of the class and not the built-in function. It cannot be specified in this operand position since it is not a functional method with a return value.

-   A [static method](ABENSTATIC_METHOD_GLOSRY.html) hides a built-in function with the same name in all methods of the associated class.
-   An [instance method](ABENINSTANCE_METHOD_GLOSRY.html) hides a built-in function with the same name in the instance methods of the associated class.

CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\n CLASS-METHODS strlen IMPORTING text TYPE string \\n EXPORTING len TYPE i. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD main. \\n DATA(len) = strlen( \`xxx\` ). \\n ENDMETHOD. \\n METHOD strlen. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenbuilt\_in.html abenbuilt\_in\_functions.html