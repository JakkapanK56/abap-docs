---
title: "ABAPCOMPUTE_ARITH"
description: |
  ABAPCOMPUTE_ARITH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMPUTE_ARITH.htm"
abapFile: "ABAPCOMPUTE_ARITH.html"
keywords: ["do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "ABAPCOMPUTE", "ARITH"]
---

[Short Reference](ABENARITH_EXP_SHORTREF.html)

``... [+|-] operand1      [\{[`+|-|*|/|DIV|MOD|**`](ABENARITH_OPERATORS.html)\}\ [+|-] operand2      [\{[`+|-|*|/|DIV|MOD|**`](ABENARITH_OPERATORS.html)\}\ [+|-] operand3      ... ]] ...``

An arithmetic expression expresses a calculation. The result of an arithmetic expression is a numeric value that exists in the [calculation type](ABENARITH_TYPE.html) that is assigned to the arithmetic expression. In an arithmetic expression `arith_exp`, the [arithmetic operators](ABENARITH_OPERATORS.html)\\ `+`, `-`, `*`, `/`, `DIV`, `MOD`, or `**` can be used to combine an operand `operand1` with one or more operands `operand2`, `operand3` ... [Brackets](ABENARITH_BRACKETS.html) are also possible. The calculation is based on [calculation rules](ABENARITH_TYPE.html) that depend on the respective calculation type.

Arithmetic expressions can occur in the read positions of [certain statements](ABENEXPRESSION_POSITIONS.html), in particular on the right side of an [assignment](ABENEQUALS_ARITH_EXPR.html) with the [assignment operator `=`](ABENEQUALS_OPERATOR.html). When used as the operand of the lossless operator `EXACT`, an arithmetic expression can be checked for a [lossless calculation](ABENLOSSLESS_CALCULATION.html).

The operand positions `operand` are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html), that is, numeric data objects, [built-in functions](ABENBUILT_IN_FUNCTIONS.html), [functional methods](ABAPMETHODS_FUNCTIONAL.html), or compound arithmetic expressions can be specified. The arithmetic operators `+`, `-`, `*`, `/`, `DIV`, `MOD`, and `**` combine two adjacent operands. When the expression is evaluated, a numeric value is calculated and combined with the next adjacent operand. The priority of this combination depends on the [operators](ABENARITH_OPERATORS.html) used.

Each operand can be preceded by the signs `+` or `-`, in any order and separated by one or more blanks. The effect of a plus/minus sign is the same as specifying the expression `+1 *` or `-1 *` in its place, which means that a sign has the same priority as a multiplication.

If [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) or [character-like expressions](ABENCHARLIKE_EXPRESSION_GLOSRY.html) are specified as operands, they are executed from left to right and from inside to outside before the remainder of the expression is evaluated. The return values are buffered for use in the corresponding operand positions. Here, [character-like processing functions](ABENPROCESS_FUNCTIONS.html) and [string expressions](ABAPCOMPUTE_STRING.html) are only possible as arguments for [description functions](ABENDESCRIPTIVE_FUNCTIONS.html).

The following program section calculates the hyperbolic sine with the Eulerian formula in the explicit calculation type `decfloat34` and with the [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html)\\ `sinh` in the implicit calculation type `f` and displays the difference.

The following program demonstrates the rule specifying how [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) are evaluated in arithmetic expressions. The first calculation sets the variable `changing` to 6 and returns the expected result of 9. The result of the second calculation is 15 and not 10 as might be expected. The functional method is called first and its result 9 is added to the changed value 6 of variable `changing` and not to its initial value 1.

`CX_SY_ARG_OUT_OF_DOMAIN`

`CX_SY_ARITHMETIC_OVERFLOW`

`CX_SY_CONVERSION_NO_NUMBER`

`CX_SY_CONVERSION_OVERFLOW`

`CX_SY_PRECISION_LOSS`

`CX_SY_UNSUPPORTED_FUNCTION`

`CX_SY_ZERODIVIDE`

-   It should be ensured that the value of a data object that is also used as an operand is changed in a specified functional method. Even if such an operand is to the left of the functional method, its value will always be changed by the method before it is evaluated.
-   Arithmetic expressions, [string expressions](ABENSTRING_EXPRESSION_GLOSRY.html), and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) cannot be combined. To built-in functions that are used as operands for arithmetic expressions can, however, string expressions or bit expressions be passed as arguments.
-   If an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is specified as an argument for one of the overloaded [numeric functions](ABENMATHEMATICAL_FUNCTIONS.html), the entire function works like an arithmetic expression.
-   A simple arithmetic expression `+|- literal`, which is comprised of an operator `+|-`, a blank, and an unsigned [numeric literal](ABENNUMERIC_LITERAL_GLOSRY.html)\\ `literal`, has the same value as the corresponding numeric literal `+|-literal` prefixed directly with a plus/minus sign. However, since the expression is handled like an expression and always evaluated at runtime, the numeric literal should always be used in these cases for performance reasons.
-   The above rule specifying how [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) or [character-like expressions](ABENCHARLIKE_EXPRESSION_GLOSRY.html) are evaluated might lead to unexpected results.

-   *Cause:* Illegal argument in powers
    *Runtime error:*\\ `COMPUTE_POW_DOMAIN`

-   *Cause:* Overflow in arithmetic operation (type `p`)
    *Runtime error:*\\ `BCD_OVERFLOW`
-   *Cause:* Overflow in arithmetic operation (all operands type `p`)
    *Runtime error:*\\ `COMPUTE_BCD_OVERFLOW`
-   *Cause:* Overflow in `cosh`\\
    *Runtime error:*\\ `COMPUTE_COSH_OVERFLOW`
-   *Cause:* Overflow or underflow in `exp`\\
    *Runtime error:*\\ `COMPUTE_EXP_RANGE`
-   *Cause:* Overflow in addition (type `decfloat`)
    *Runtime error:*\\ `COMPUTE_DECFLOAT_ADD_OVERFLOW`
-   *Cause:* Overflow in subtraction (type `decfloat`)
    *Runtime error:*\\ `COMPUTE_DECFLOAT_SUB_OVERFLOW`
-   *Cause:* Overflow in multiplication (type `decfloat`)
    *Runtime error:*\\ `COMPUTE_DECFLOAT_MUL_OVERFLOW`
-   *Cause:* Overflow in division (type `decfloat`)
    *Runtime error:*\\ `COMPUTE_DECFLOAT_DIV_OVERFLOW`
-   *Cause:* Overflow in division (type `decfloat`)
    *Runtime error:*\\ `COMPUTE_DECFLOAT_DIV_OVERFLOW`
-   *Cause:* Overflow in division (type `f`)
    *Runtime error:*\\ `COMPUTE_FLOAT_DIV_OVERFLOW`
-   *Cause:* Overflow in subtraction (type `f`)
    *Runtime error:*\\ `COMPUTE_FLOAT_MINUS_OVERFLOW`
-   *Cause:* Overflow in addition (type `f`)
    *Runtime error:*\\ `COMPUTE_FLOAT_PLUS_OVERFLOW`
-   *Cause:* Overflow in multiplication (type `f`)
    *Runtime error:*\\ `COMPUTE_FLOAT_TIMES_OVERFLOW`
-   *Cause:* Overflow in |-2147483648|
    *Runtime error:*\\ `COMPUTE_INT_ABS_OVERFLOW`
-   *Cause:* Integer overflow in division
    *Runtime error:*\\ `COMPUTE_INT_DIV_OVERFLOW`
-   *Cause:* Integer overflow after subtraction
    *Runtime error:*\\ `COMPUTE_INT_MINUS_OVERFLOW`
-   *Cause:* Integer overflow while adding
    *Runtime error:*\\ `COMPUTE_INT_PLUS_OVERFLOW`
-   *Cause:* Integer overflow in multiplication
    *Runtime error:*\\ `COMPUTE_INT_TIMES_OVERFLOW`
-   *Cause:* Invalid call of `log10`\\
    *Runtime error:*\\ `COMPUTE_LOG10_ERROR`
-   *Cause:* Invalid call of `log`\\
    *Runtime error:*\\ `COMPUTE_LOG_ERROR`
-   *Cause:* Overflow or underflow in powers
    *Runtime error:*\\ `COMPUTE_POW_RANGE`
-   *Cause:* Overflow in `sinh`\\
    *Runtime error:*\\ `COMPUTE_SINH_OVERFLOW`
-   *Cause:* Overflow in function `round` or `rescale`\\
    *Runtime error:*\\ `COMPUTE_ROUND_RESCALE_OVERFLOW`

-   *Cause:* Operand cannot be interpreted as a number
    *Runtime error:*\\ `CONVT_NO_NUMBER`

-   *Cause:* Overflow in arithmetic operation (type `p`, with specified length)
    *Runtime error:*\\ `BCD_FIELD_OVERFLOW`
-   *Cause:* Operand too big or (interim) result too big
    *Runtime error:*\\ `CONVT_OVERFLOW`

-   *Cause:* Result of `cos` not exact
    *Runtime error:*\\ `COMPUTE_COS_LOSS`
-   *Cause:* Result of `sin` not exact
    *Runtime error:*\\ `COMPUTE_SIN_LOSS`
-   *Cause:* Result of `tan` not exact
    *Runtime error:*\\ `COMPUTE_TAN_LOSS`

-   *Cause:* Invalid function for calculation type `decfloat34`\\
    *Runtime error:*\\ `COMPUTE_UNSUPPORTED_DECF_FUNC`

-   *Cause:* Division by 0 (type `p`)
    *Runtime error:*\\ `BCD_ZERODIVIDE`
-   *Cause:* Division by 0 (type `f`)
    *Runtime error:*\\ `COMPUTE_FLOAT_ZERODIVIDE`
-   *Cause:* Division by 0 (types (`b`, `s`), `i`, `int8`)
    *Runtime error:*\\ `COMPUTE_INT_ZERODIVIDE`
-   *Cause:* Division by 0 (type `decfloat`)
    *Runtime error:*\\ `COMPUTE_DECFLOAT_ZERODIVIDE`\\
    

-   *Cause:*\\ `p` field does not contain the correct BCD format
    *Runtime error:*\\ `BCD_BADDATA`
-   *Cause:*\\ `p` field does not contain a correct sign
    *Runtime error:*\\ `BCD_NO_SIGN`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF line, \\n x TYPE string, \\n result1 TYPE string, \\n result2 TYPE string, \\n diff TYPE string, \\n END OF line. \\nDATA \\n output TYPE TABLE OF line WITH EMPTY KEY. \\n\\ \\nDO 2001 TIMES. \\n TRY. \\n FINAL(x) = sy-index - 1001. \\n FINAL(result1) = CONV decfloat34( \\n ( exp( x ) - exp( -1 \* x ) ) / 2 ). \\n FINAL(result2) = sinh( x ). \\n FINAL(diff) = abs( result1 - result2 ). \\n IF diff <> 0. \\n APPEND VALUE #( \\n x = |\\{ x \\}| \\n result1 = |\\{ result1 STYLE = SCIENTIFIC \\}| \\n result2 = |\\{ result2 STYLE = SCIENTIFIC \\}| \\n diff = |\\{ diff STYLE = SCIENTIFIC \\}| ) TO output. \\n ENDIF. \\n CATCH cx\_sy\_conversion\_overflow cx\_sy\_arithmetic\_overflow. \\n ENDTRY. \\nENDDO. \\nout->write( output ). \\n\\ \\nout->display( ). CLASS demo DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS meth \\n IMPORTING i\_par TYPE i \\n CHANGING c\_par TYPE i OPTIONAL \\n RETURNING VALUE(r\_par) TYPE i. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n METHOD meth. \\n c\_par = i\_par + c\_par. \\n r\_par = i\_par + 4. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA changing TYPE i. \\n changing = 1. \\n FINAL(result1) = demo=>meth( EXPORTING i\_par = 5 \\n CHANGING c\_par = changing ). \\n out->write( |changing: \\{ changing \\}\\\\n| & \\n |result1: \\{ result1 \\}| ). \\n changing = 1. \\n FINAL(result2) = changing + demo=>meth( EXPORTING i\_par = 5 \\n CHANGING c\_par = changing ). \\n out->write( |changing: \\{ changing \\}\\\\n| & \\n |result2: \\{ result2 \\}| ). \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html