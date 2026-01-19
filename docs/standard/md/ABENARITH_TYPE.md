---
title: "ABENARITH_TYPE"
description: |
  ABENARITH_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENARITH_TYPE.htm"
abapFile: "ABENARITH_TYPE.html"
keywords: ["select", "do", "while", "if", "case", "catch", "method", "data", "types", "field-symbol", "ABENARITH", "TYPE"]
---

An arithmetic expression is assigned a calculation type that defines the calculation rules for the arithmetic expression. The calculation type is determined at program runtime from the data types involved that can be identified. The calculation type only needs to be determined statically if the target field is an [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html), where generically type operands are included using a [standard type](ABENSTANDARD_TYPE_GLOSRY.html).

The calculation type corresponds to one of the numeric data types `i`, `int8`, `p`, `f`, or `decfloat34`. It is determined by the following hierarchy, and in the order of decreasing priority:

The data type that has the largest [value range](ABENBUILT_IN_TYPES_COMPLETE.html) therefore determines the calculation type with the exception that each [decimal floating point number](ABENDECFLOAT_GLOSRY.html) produces the calculation type `decfloat34`, and that use of the operator `**` is handled like a data type of type `f`.

Involved data types include:

For operands with complete numeric data types, this data type is used. Operands with other data types are handled as follows:

In the case of operands that are not specified as data objects, the type is determined as follows:

The calculation type of the following arithmetic expression is `f`. Accordingly, a data object of the type `f` is declared in the inline declaration.

Before the calculation is performed, all operands for which it is necessary are converted to the calculation type, in accordance with the [conversion rules for elementary data types](ABENCONVERSION_ELEMENTARY.html).

The calculation type determines the calculation method and the calculation precision:

Commercial rounding of interim results in the calculation types `i`, `int8`, `p`, and `decfloat34` is a characteristic that distinguishes ABAP greatly from other programming languages where the decimal places are usually cut off rather than rounded. This can produce different results, in particular in divisions with the calculation types `i`.

The result of the second arithmetic expression is 0. The calculation type is `i` and the interim results of each division are rounded to 0. The result of the second arithmetic expression is `0.9999999999999999999999999999999999`. The calculation type `decfloat34` and the interim results `0.3333333333333333333333333333333333` are not rounded. The outer conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) creates the integer 1 from this data.

After the calculation is performed, the result of the arithmetic expression is handled as follows:

Calculation type `f` of the following arithmetic expression is [converted](ABENCONVERSION_TYPE_F.html) to `string`, whereby the value is formatted in [scientific notation](ABENSCIENTIFIC_NOTATION_GLOSRY.html). After the assignment, the text string contains the character string `1.0240000000000000E+03`.

-   The right side of an [assignment](ABENEQUALS_ARITH_EXPR.html) in arithmetic expressions:

-   If it is not an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), the data types of all operands of the entire arithmetic expressions, and the data type of the result field `result`.
-   If `result` is an inline declaration, the calculation type derived from the data types of the arithmetic expression determines the data type of the declared variable. Here, a calculation type `p` always produces the data type `p` with length 8 and no decimal places.

-   as the operand of a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) in an arithmetic expression, the data types of all operands of the entire relational expression. The calculation type of each arithmetic expression involved is not created first and the [comparison type](ABENCOMPARISON_TYPE_GLOSRY.html) then derived. All operands of the relational expression are part of the calculation type, which is also the comparison type, regardless of the arithmetic expressions they belong to.
-   in an arithmetic expression after the statement [`CASE`](ABAPCASE.html), the operands of the arithmetic expression, ignoring the operands specified after `WHEN`.
-   as [actual parameters](ABENTYPING_ARITH_EXPR.html) for [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) of [methods](ABENMETHOD_GLOSRY.html) in an arithmetic expression, the data types of all operands of the entire arithmetic expression and the [typing](ABENTYPING_GLOSRY.html) of the formal parameter, provided that it is completely typed. If the formal parameter is typed generically, then only the operands of the expression are evaluated.
-   as [actual parameters](ABENTYPING_ARITH_EXPR.html) for [input parameters](ABENINPUT_PARAMETER_GLOSRY.html) of [function modules](ABENFUNCTION_MODULE_GLOSRY.html), the data types of all operands of the entire arithmetic expression. The typing of the formal parameter is ignored.
-   as an argument of a built-in function in an arithmetic expression, the data types of all operands of the entire arithmetic expression and the type of the input parameter, if it is fully determined. An overloaded [numeric function](ABENMATHEMATICAL_FUNCTIONS.html) where an arithmetic expression is used as an argument, on the other hand, acts like an arithmetic operator and is handled in its position like an arithmetic expression.
-   as an [embedded expression](ABENEMBEDDED_EXPRESSION_GLOSRY.html) in a [string template](ABENSTRING_TEMPLATE_GLOSRY.html) in an arithmetic expression, only the operands of the expression are evaluated.
-   as an argument in a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) in an arithmetic expression, the calculation type is determined as in an [assignment](ABENEQUALS_ARITH_EXPR.html). The left side of the assignment is either the result of the constructor expression with the type [`type`](ABENCONSTRUCTOR_EXPRESSIONS.html) specified in front of the parentheses or a structure component.

-   `d` and `t` as `i`
-   `c`, `n`, and `string` as `p`
-   `x` and `xstring` as `i`
-   `utclong` is not allowed

-   In the case of operands that are specified as non-overloaded [integrated functions](ABENBUILTIN_FUNCTION_GLOSRY.html), the data type of the return value applies.
-   Operands of overloaded [general numeric functions](ABENNUMERICAL_FUNCTIONS.html), and of the overloaded power function [`ipow`](ABENPOWER_FUNCTION.html), are used to determine the calculation type.
-   When a [floating point function](ABENFLOATING_POINT_FUNCTIONS.html) is used, the calculation type is either `decfloat34` or `f`.
-   In the case of operands specified as [functional method calls](ABAPCALL_METHOD_FUNCTIONAL.html), the data type of the return value applies.
-   In the case of operands specified as [constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html), the data type specified by `type` here applies. The arithmetic expression itself, however, does not determine the type of the constructor expression. If constructor expressions are used as operands of arithmetic expressions, the `#` character can only be specified for the data type of the constructor expression if the type can be determined from the constructor expression itself.
-   In the case of operands specified as [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), the data type of the result applies.
-   If operands are specified as generically typed field symbols or formal parameters and an existing variable is used as the target field of an [assignment](ABENEQUALS_ARITH_EXPR.html), these operands contribute to the calculation type assigned to them at runtime with their data type.
-   If operands are specified as generically typed field symbols or formal parameters and an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) is used as the target field of an [assignment](ABENEQUALS_ARITH_EXPR.html), the generic types are part of the statically known calculation type, from which the data type of the declaration is determined as follows:

-   `any`, `data`, `simple`, `numeric`, and `decfloat` as `decfloat34`
-   `csequence`, `clike`, `c`, and `n`, as `p`. If there is no involved type with a higher priority, type `p` with length 8 and without decimal places is used for the declaration.
-   `xsequence` and `x` as `i`

-   The calculation type determined at runtime from all operands including the target field always matches the data type of the variable declared inline, because this is always the data type with the greatest value range.

-   The determination of a calculation type before the calculation is performed and while respecting all operands including the result field (as the right side of an [assignment](ABENEQUALS_ARITH_EXPR.html) or as an actual parameter in the case of an arithmetic expression) is a special ABAP feature that differs considerably from how other programming languages perform calculations. To avoid unnecessary conversions, all operands and a result field should have the same numeric data type.
-   In the case of arithmetic expressions as operands of [relational expressions](ABENRELATIONAL_EXPRESSION_GLOSRY.html) in [logical expressions](ABENLOGICAL_EXPRESSION_GLOSRY.html) combined using [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html), the rule above only applies to the relational expression in question. The calculation type is not determined while skipping the Boolean operators `AND`, `OR`, or `EQUIV`.
-   If the calculation type is `f`, it should be ensured that the precision is only approximately 15 places and integers are only represented accurately up to an absolute value of 2\*\*53, that is, 9,007,199,254,740,992. Other interim results are rounded. This is especially important when using the operator `**`, which can produce the calculation type `f` if no decimal floating point number is involved.
-   To avoid that the operator `**` produces the calculation type `f`, the built-in function [`ipow`](ABENPOWER_FUNCTION.html) can be used for integer exponents, for which the calculation type is determined by the argument.
-   The time stamp type `utclong` cannot be converted implicitly to a numeric type, and therefore cannot be specified directly as an operand of an arithmetic expression.
-   The conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) can be used to convert parts of arithmetic expressions to other types and hence modify the calculation type.
-   A calculation type `p` in [assignments](ABENEQUALS_ARITH_EXPR.html) to an inline declaration can produce the data type `p` with length 8 and no decimal places, which can produce unexpected results and raise exceptions. It is best to either avoid inline declarations when using the calculation type `p` or to determine the data type by applying the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) to the arithmetic expression.

-   **Calculation types**\\ `i` and `int8`
-   The arithmetic expression is calculated using integer arithmetic, in which each interim result that is not an integer (after a division) is rounded commercially to the nearest integer. Each interim result must be in the [value range](ABENBUILTIN_TYPES_NUMERIC.html) of the data type `i` or `int8`, otherwise the catchable exception `CX_SY_ARITHMETIC_OVERFLOW` is raised.
-   **Calculation type**\\ `p`
-   Fixed point arithmetic. The arithmetic expression is calculated with an internal precision of 31 [places](ABENPLACE_GLOSRY.html) and a special decimal floating point arithmetic for interim results. During the calculation, the decimal point for numbers of type `p` is not fixed. If an overflow occurs because an interim result is greater than 10^31 - 1, the whole expression is recalculated to an internal precision of 63 places, or a maximum value of 10^63 -1 for interim results. If another overflow occurs, the catchable exception `CX_SY_ARITHMETIC_OVERFLOW` is raised. An overflow always occurs if the level of precision is not sufficient for all integral digits before the decimal separator. Surplus [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) do not raise an exception but are rounded commercially to the nearest whole number for each interim result.
-   **Calculation type**\\ `f`
-   The arithmetic expression is calculated using the binary floating point arithmetic of the current platform. Each interim result must be in [value range](ABENBUILTIN_TYPES_NUMERIC.html) of the data type `f`, otherwise the catchable exception `CX_SY_ARITHMETIC_OVERFLOW` is raised. Since the decimal places of a floating point number are represented internally using a dual fraction, there is not an exact equivalent for every number that can be represented in the decimal system, which can produce rounding errors in the interim results.
-   **Calculation type**\\ `decfloat34`
-   The arithmetic expression is calculated with decimal floating point arithmetic according to norm IEEE-754-2008, where division by 0 does not raise an exception if the dividend is 0 as for all calculation types. Each interim result must be in [value range](ABENBUILTIN_TYPES_NUMERIC.html) of the data type `decfloat34`, otherwise the catchable exception `CX_SY_ARITHMETIC_OVERFLOW` is raised. Interim results are rounded commercially to the nearest whole number. The [scaling](ABENSCALE_GLOSRY.html) of each interim result is defined so that the smallest possible exponent is selected if the result is not precise, and the following procedure is used to determine the scaling if the result is precise:

-   For addition and subtraction, the exponent of the result is the smaller of the exponents of the two operands.
-   For multiplication, the exponent of the result is the sum of the exponents of the two operands.
-   For division, the exponent of the result is the difference between the exponents of the dividend and of the divisor.
-   If the `sqrt` function is used, the exponent is the integer part of half of the exponent of the operand.

-   In the case of an arithmetic expression as the right side of an [assignment](ABENEQUALS_ARITH_EXPR.html) to an existing data object, the result is converted to the data type of the result field if the calculation type is different.
-   With an arithmetic expression on the right side of an [assignment](ABENEQUALS_ARITH_EXPR.html) to an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), the statically known calculation type of variable `var`, whereby generically typed field symbols and formal parameters are included with the [standard type](ABENSTANDARD_TYPE_GLOSRY.html) described above. In the case of the calculation type `p`, the data type of the declared variable is always `p` with the length 8 without decimal places.
-   In the case of an arithmetic expression as an operand of a relational expression, no conversion takes place, since the calculation type and the comparison type are identical.
-   In the case of an arithmetic expression as an actual parameter for input values of methods, and if the formal parameter is completely typed, the result is converted into the formal parameter type in the static method call and passed. If the formal parameter is generically typed, it inherits the calculation type, where in the case of calculation type `p`, the number of decimal places is determined based on the precision required in the calculation.

1.  If one of the data types involved is `decfloat16` or `decfloat34`, the calculation type is `decfloat34`.
2.  If one of the data types involved is `f` or if the operator `**` is used, the calculation type is `f`.
3.  If one of the data types involved is `p`, the calculation type is `p`.
4.  If one of the data types involved is `int8`, the calculation type is `int8`.
5.  If one of the data types involved is `i`, (`b` or `s`), the calculation type is `i`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(result) = 2 \*\* 10. \\n\\ \\nFINAL(t) = cl\_abap\_typedescr=>describe\_by\_data( result )->type\_kind. \\nout->write( |\\{ result \\} of type \\{ t \\}| ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(result1) = 1 / 3 + 1 / 3 + 1 / 3. \\nFINAL(result2) = CONV i( CONV decfloat34( 1 / 3 + 1 / 3 + 1 / 3 ) ). \\n\\ \\nout->write( |\\{ result1 \\}, \\{ result2 \\}| ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA result TYPE string. \\n\\ \\nresult = 2 \*\* 10. \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abapcompute\_arith.html