---
title: "Literals - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliterals_guidl.htm"
abapFile: "abenliterals_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Data Types and Data Objects](ABENDATA_TYPE_OBJ_GUIDL.md) → 

Literals

Background

A literal is a data object defined in the source code of a program by specifying a character-like value. Possible literals are:

-   Numeric literals
    String of digits with an optional sign. The data type is either i or p.

-   Character literals

-   Text field literals enclosed in single quotation marks ('). The data type is c.

-   String literals, which are enclosed in backquotes (\`). The data type is string.

In numeric literals, neither decimal separators nor scientific notation with mantissa and exponent are possible. Character literals with [correct content](ABENNUMBERS_GUIDL.md "Guideline") must be used to represent these types of numeric values.

Rule

Avoid using literals in operand positions

Avoid using literals to specify values directly in the source code. Instead constants should be declared with these values. This applies to numeric values in particular.

Details

Certain values are required in more than one place in the source code. It is therefore not helpful to specify these values directly in the source code, since multiple statements would need to be modified each time the value is changed. An appropriate constant can be used instead to enable the value to modified at a central position in the source code. Literals are, of course, allowed when specifying values in the declaration of the constants. This can make the program significantly easier to maintain and enhance at a later date.

It can also be a good idea to create an appropriate constant for values used in only one place. The name of the constant gives the values semantics that make the source code easier to understand.

Number literals that appear in source code seemingly without any semantic meaning are often known as "magic numbers". Avoid using these in ABAP programs. When using character literals, [translatability](ABENSYSTEM_TEXT_GUIDL.md "Guideline") is also important.

Exception

In certain situations, however, using constants can affect the readability of a program. It is better to specify a literal in these cases, as in the following examples:

-   CALL FUNCTION 'MY\_FUNC'.

-   IF sy-subrc = 0.

-   READ TABLE itab INDEX 1 or itab\[ 1 \]

-   ADD 1 TO counter.

These examples make the semantic meaning of the literals clear and translatability is not an issue.

Another area where character literals are vital is dynamic programming. Here, parts of statements or entire programs are generated, which is virtually impossible without using character literals. In addition, string templates offer various enhanced options for using literal texts.

Note

If literals are used, ensure that literals are actually used, not equivalent expressions:

-   Numeric literal +*|*\-literal instead of arithmetic expression +*|*\- literal

-   Text string literal \`...\` instead of string expression |...|

The expressions are not evaluated until runtime, meaning that they have a lower performance. This distinction is irrelevant only if the literals are parts of expressions anyway.

Bad Example

The following source code uses the same literal multiple times to specify pi (π) in operand positions. This multiple use makes the program unclear and error-prone.

DATA: radius TYPE decfloat34,
      circumference TYPE decfloat34,
      area TYPE decfloat34.
...

circumference =
  2\* '3.141592653589793238462643383279503' \* radius.
area =
  '3.141592653589793238462643383279503' \* radius \*\* 2.

Good Example

The following source code declares a constant that requires the literal with the value pi (π) only once, and uses it in the appropriate operand positions.

CONSTANTS pi TYPE decfloat34
             VALUE '3.141592653589793238462643383279503'.

DATA: radius        TYPE decfloat34,
      circumference TYPE decfloat34,
      area          TYPE decfloat34.
...
circumference = 2 \* pi \* radius.
area          = pi \* radius \*\* 2.
