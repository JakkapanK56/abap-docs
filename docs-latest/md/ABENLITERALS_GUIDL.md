---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLITERALS_GUIDL.html"
abapFile: "ABENLITERALS_GUIDL.html"
type: "abap-reference"
---

## Exception

In certain situations, however, using constants can affect the readability of a program. It is better to specify a literal in these cases, as in the following examples:

-   `CALL FUNCTION 'MY_FUNC'.`
-   `IF sy-subrc = 0`.
-   `READ TABLE itab INDEX 1` or `itab[ 1 ]`
-   `ADD 1 TO counter`.

These examples make the semantic meaning of the literals clear and translatability is not an issue.

Another area where character literals are vital is dynamic programming. Here, parts of statements or entire programs are generated, which is virtually impossible without using character literals. In addition, string templates offer various enhanced options for using literal texts.

## Hint

If literals are used, ensure that literals are actually used, not equivalent expressions:

-   Numeric literal `+|-literal` instead of arithmetic expression `+|- literal`
-   Text string literal `` `...` `` instead of string expression `|...|`

The expressions are not evaluated until runtime, meaning that they have a lower performance. This distinction is irrelevant only if the literals are parts of expressions anyway.

## Bad Example

The following source code uses the same literal multiple times to specify `pi` in operand positions. This multiple use makes the program unclear and error-prone.

```
DATA: radius TYPE decfloat34, 
      circumference TYPE decfloat34, 
      area TYPE decfloat34. 
... 
circumference = 
  2* '3.141592653589793238462643383279503' * radius. 
area = 
  '3.141592653589793238462643383279503' * radius ** 2.
```

## Good Example

The following source code declares a constant that requires the literal the value of `pi` only once, and uses it in the respective operand positions.

```
CONSTANTS pi TYPE decfloat34 
             VALUE '3.141592653589793238462643383279503'. 
DATA: radius        TYPE decfloat34, 
      circumference TYPE decfloat34, 
      area          TYPE decfloat34. 
... 
circumference = 2 * pi * radius. 
area          = pi * radius ** 2.
```
