---
title: "ABENNUMBERS_GUIDL"
description: |
  ABENNUMBERS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNUMBERS_GUIDL.htm"
abapFile: "ABENNUMBERS_GUIDL.html"
keywords: ["if", "method", "class", "data", "types", "ABENNUMBERS", "GUIDL"]
---

There are no special literals available for numbers with decimal places, or with mantissa plus exponent. If required, these numbers must be expressed using character literals. The following notations can be used:

**Use globally valid notation for numeric values**

When using numbers in character strings that are intended for assignments to a numeric data object, create them so that they are accepted by all possible target types. The sign must always be on the left, and there must be no blanks.

When converting a character string to a numeric variable, the type of the target variables decides which notations are accepted:

To make sure that a program is readable, and also that numbers in character strings can be converted to as many numeric data types as possible, always use mathematical notation without blanks between the sign and the string of digits. This notation also confirms to other standards, such as the canonic representation of XML schema data types.

The following source code demonstrates the initialization of a generically typed parameter with commercial notation, where the sign is separated by a blank. If an actual parameter with a type other than f is passed, the assignment produces the value -1000 (as expected); if an actual parameter of the type `f` is passed, however, the value is +1000.

The following source code demonstrates an assignment using globally valid notation that is easy to read and which produces the same result, the value -1000, for all numeric data types.

-   **Mathematical notation**
-   A string of digits with a maximum of one period (.) as a decimal separator and an optional sign *+* or *\-* on the left. This sign can be separated from the digits by blanks, for example: - 1234.56
-   **Commercial notation**
-   A string of digits with a maximum of one period (.) as a decimal separator and an optional sign *+* or *\-* on the right. This sign can be separated from the digits by blanks, for example: 1234.56-
-   **Scientific notation**
-   An uninterrupted string consisting of a mantissa (an optional sign *+* or *\-*, digits with a maximum of one period (.) as a decimal separator), a character `e` or *E*, and an exponent (an optional sign *+* or *\-* and further digits), for example: -1.23456E03

-   If the type of the target variable is `decfloat16` or `decfloat34`, all three notations are accepted.
-   If the type of the target variable is `f`, all three notations are accepted. The mathematical and commercial notations are only accepted, however, if the sign is not separated from the string of digits by one or more blanks and there are blanks in front of the string of digits.
-   If the type of the target variable is `p` or `i`, only the mathematical and commercial notations are accepted.

CLASS class DEFINITION. \\n PUBLIC SECTION. \\n METHODS calculate\_something \\n EXPORTING number TYPE numeric. \\nENDCLASS. \\nCLASS class IMPLEMENTATION. \\n METHOD calculate\_something. \\n number = '1000 -'. \\n ... \\n ENDMETHOD. \\nENDCLASS. METHOD calculate\_something. \\nnumber = '-1000'. \\n... \\nENDMETHOD. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html