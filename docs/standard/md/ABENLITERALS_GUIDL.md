---
title: "ABENLITERALS_GUIDL"
description: |
  ABENLITERALS_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLITERALS_GUIDL.htm"
abapFile: "ABENLITERALS_GUIDL.html"
keywords: ["if", "case", "data", "types", "ABENLITERALS", "GUIDL"]
---

A literal is a data object defined in the source code of a program by specifying a character-like value. Possible literals are:

In numeric literals, neither decimal separators nor scientific notation with mantissa and exponent are possible. Character literals with [correct content](ABENNUMBERS_GUIDL.html) must be used to represent these types of numeric values.

**Avoid using literals in operand positions**

Avoid using literals to specify values directly in the source code. Instead constants should be declared with these values. This applies to numeric values in particular.

Certain values are required in more than one place in the source code. It is therefore not helpful to specify these values directly in the source code, since multiple statements would need to be modified each time the value is changed. An appropriate constant can be used instead to enable the value to modified at a central position in the source code. Literals are, of course, allowed when specifying values in the declaration of the constants. This can make the program significantly easier to maintain and enhance at a later date.

It can also be a good idea to create an appropriate constant for values used in only one place. The name of the constant gives the values semantics that make the source code easier to understand.

Numeric literals that appear in source code seemingly without any semantic meaning are often known as *magic numbers*. Avoid using these in ABAP programs. When using character literals, [translatability](ABENSYSTEM_TEXT_GUIDL.html) is also important.

In certain situations, however, using constants can affect the readability of a program. It is better to specify a literal in these cases, as in the following examples:

These examples make the semantic meaning of the literals clear and translatability is not an issue.

Another area where character literals are vital is dynamic programming. Here, parts of statements or entire programs are generated, which is virtually impossible without using character literals. In addition, string templates offer various enhanced options for using literal texts.

If literals are used, ensure that literals are actually used, not equivalent expressions:

The expressions are not evaluated until runtime, meaning that they have a lower performance. This distinction is irrelevant only if the literals are parts of expressions anyway.

The following source code uses the same literal multiple times to specify `pi` in operand positions. This multiple use makes the program unclear and error-prone.

The following source code declares a constant that requires the literal the value of `pi` only once, and uses it in the respective operand positions.

-   **Numeric literals**
-   String of digits with an optional sign. The data type is either `i` or `p`.
-   **Character literals**

-   Text field literals enclosed in single quotation marks ('). The data type is `c`.
-   Text string literals, which are enclosed in backquotes (\`). The data type is `string`.

-   `CALL FUNCTION 'MY_FUNC'.`
-   `IF sy-subrc = 0`.
-   `READ TABLE itab INDEX 1` or `itab[ 1 ]`
-   `ADD 1 TO counter`.

-   Numeric literal `+|-literal` instead of arithmetic expression `+|- literal`
-   Text string literal `` `...` `` instead of string expression `|...|`

DATA: radius TYPE decfloat34, \\n circumference TYPE decfloat34, \\n area TYPE decfloat34. \\n... \\ncircumference = \\n 2\* '3.141592653589793238462643383279503' \* radius. \\narea = \\n '3.141592653589793238462643383279503' \* radius \*\* 2. CONSTANTS pi TYPE decfloat34 \\n VALUE '3.141592653589793238462643383279503'. \\nDATA: radius TYPE decfloat34, \\n circumference TYPE decfloat34, \\n area TYPE decfloat34. \\n... \\ncircumference = 2 \* pi \* radius. \\narea = pi \* radius \*\* 2. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendata\_type\_obj\_gdl.html