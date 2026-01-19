---
title: "ABENASSIGN_CALC_GUIDL"
description: |
  ABENASSIGN_CALC_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENASSIGN_CALC_GUIDL.htm"
abapFile: "ABENASSIGN_CALC_GUIDL.html"
keywords: ["do", "if", "method", "data", "ABENASSIGN", "CALC", "GUIDL"]
---

For explicit assignments in which the value of a source is assigned to a target, ABAP contains the general assignment operator [`=`](ABENEQUALS_OPERATOR.html) and the special casting operator [`?=`](ABAPMOVE_CAST.html). Statements with these operators

lhs =|?= rhs.

enable assignments of

to be made to variables that can also be declared inline and to [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html).

Alongside the assignment operators, two obsolete statements exist for historical reasons that can also perform assignments:

**Assignments with the assignment operators `=` and `?=` only**

Use the assignment operators instead of the statement `MOVE`. Do not use the keyword `COMPUTE` in front of assignments.

Assignments with the assignment operators [`=`](ABENEQUALS_OPERATOR.html) and [`?=`](ABAPMOVE_CAST.html) implement the most global concept. The right side is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and the left side is a [declaration position](ABENDECLARATION_POSITION_GLOSRY.html) (except in downcasts).

The statements `MOVE` and `COMPUTE` have the following drawbacks:

The statements `MOVE` and `COMPUTE` were created at a time when assignments were only made between individual data objects and calculations were exclusively arithmetic. Neither of these statements is appropriate in a modern, expression-oriented ABAP program that exploits all options on the left and right sides of an assignments.

The optional addition `EXACT` of the statements [`MOVE`](ABAPMOVE_OBS.html) and [`COMPUTE`](ABAPCOMPUTE.html), which produces lossless assignments and lossless calculations, has been replaced in full by the lossless operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html).

The following source code shows a simple assignment using `MOVE` and the assignment of an arithmetic expression after `COMPUTE`.

The following source code shows the same example as above but without specifying the keywords `MOVE` and `COMPUTE`. This makes inline declarations possible on the left side.

-   data objects,
-   return values or results of functional methods, built-in functions or construction expressions, table expressions and
-   results of calculation expressions (arithmetic expressions, bit expressions, and string expressions)

-   The statement
-   [`MOVE source TO|?TO destination.`](ABAPMOVE_OBS.html)
-   assigns a source `source` to a target `destination`. It covers some of the operators performed by the assignment operators [`=`](ABENEQUALS_OPERATOR.html) and [`?=`](ABAPMOVE_CAST.html).
-   The statement
-   [`COMPUTE lhs =|?= rhs.`](ABAPCOMPUTE.html)
-   has the same semantics as `lhs =|?= rhs`. The keyword `COMPUTE` can be written in front of each assignment with the assignment operators [`=`](ABENEQUALS_OPERATOR.html) and [`?=`](ABAPMOVE_CAST.html) where the left side is not an inline declaration, but is ignored.

-   The statement `MOVE` cannot be used globally. The only sources allowed are data objects, function methods, and certain built-in functions whose arguments must be single data objects. The only targets allowed are variables; inline declarations are not possible. Any future enhancements to operand positions will not be applied to `MOVE`.
-   The keyword `COMPUTE` is both confusing and surplus to requirements. If an arithmetic expression or other calculation expression is on the right side, the keyword `COMPUTE` has the correct meaning, but is redundant. If a data object, a function method, a built-in function, or a constructor expression is on the right side, the keyword `COMPUTE` has the wrong meaning, since a return value is assigned instead of an expression being calculated.

DATA text1 TYPE string. \\nDATA text2 TYPE string. \\n... \\nMOVE text1 TO text2. \\n\\ \\nDATA result TYPE decfloat34. \\nDATA number1 TYPE i. \\nDATA number2 TYPE i. \\n... \\nCOMPUTE result = number1 \* number2. DATA text1 TYPE string. \\n... \\nDATA(text2) = text1. \\n\\ \\nDATA number1 TYPE i. \\nDATA number2 TYPE i. \\n... \\nFINAL(result) = CONV decfloat34( number1 \* number2 ). abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abenalternative\_spelling\_gdl.html