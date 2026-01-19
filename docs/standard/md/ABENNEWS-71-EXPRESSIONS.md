---
title: "ABENNEWS-71-EXPRESSIONS"
description: |
  ABENNEWS-71-EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-71-EXPRESSIONS.htm"
abapFile: "ABENNEWS-71-EXPRESSIONS.html"
keywords: ["select", "if", "method", "ABENNEWS", "EXPRESSIONS"]
---

[1\. Using Functions and Calculation Expressions](#ABAP_MODIFICATION_1@4@)

[2\. Method Chainings](#ABAP_MODIFICATION_2@4@)

[3\. Access to Components of Structured Return Values](#ABAP_MODIFICATION_3@4@)

[4\. Built-In Functions with Multiple Parameters](#ABAP_MODIFICATION_4@4@)

The program `DEMO_EXPRESSIONS` shows examples of the enhanced expressions in ABAP release 7.0, EhP2.

The usability of [functions and expressions in operand positions](ABENOPERANDS_EXPRESSIONS.html) has been substantially improved in ABAP release 7.0, EhP2:

From ABAP release 7.0, EhP2, the following [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html) are available:

Before ABAP release 7.0, EhP2, operand positions on the right side of assignments with `=` were the only general expression positions.

From EhP1, the character-like arguments of [description functions](ABENDESCRIPTIVE_FUNCTIONS.html) are (with one exception) [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). Before EhP1, they were character-like [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html).

As well as the previous [chained names](ABENCHAINED_NAME_GLOSRY.html), [operand positions](ABENEXPRESSION_POSITIONS.html) that accept functional methods now also accept [method chainings](ABENMETHOD_CHAINING_GLOSRY.html), that is [chained method calls](ABENCHAINED_METHOD_CALL_GLOSRY.html) and [chained attributes accesses](ABENCHAINED_ATTRIBUTE_ACC_GLOSRY.html).

If the result of a [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html) or [method chaining](ABENMETHOD_CHAINING_GLOSRY.html) is structured, the call can (like the name of a structure) be written directly in front of the [structure component selector](ABENSTRUCTURE_COMPONENT_SEL_GLOSRY.html) to access a component of the result.

ABAP release 7.0, EhP2 introduces new [built-in functions](ABENBUILT_IN_FUNCTIONS.html) that can now accept multiple arguments. A built-in function of this type is called in the same way as a functional method with multiple input parameters.

`... func( p1 = arg1 p2 = arg2 ... ) ...`

The new functions are include:

-   [Calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html), [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html), and [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) can be used in [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html).
-   [Numeric expressions](ABENNUMERICAL_EXPRESSION_GLOSRY.html) can be used in [numeric expression positions](ABENNUMERIC_EXPRESSION_POSITIONS.html).
-   [String expressions](ABENSTRING_EXPRESSION_GLOSRY.html) can be used in [character-like expression positions](ABENSTRING_EXPRESSION_POSITIONS.html).
-   \\ [Functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) can be used in [functional operand positions](ABENFUNCTIONAL_POSITIONS.html).

-   Operands of [relational expressions](ABENRELATIONAL_EXPRESSION_GLOSRY.html)
-   Example: `a + b < oref->meth( )`
-   [Actual parameters](ABENTYPING_ARITH_EXPR.html) for input parameters of methods
-   Example: `oref1->meth1( oref2->meth2( ... ) )`

-   [Rounding functions](ABENDEC_FLOATING_POINT_FUNCTIONS.html)
-   [Search](ABENSEARCH_FUNCTIONS.html), [similarity](ABENDISTANCE_FUNCTIONS.html), and [processing functions](ABENPROCESS_FUNCTIONS.html) for character strings
-   [Logical functions](ABENLOGIC_FUNCTIONS.html)

abenabap.html abennews.html abennews-70\_ehps.html abennews-71.html