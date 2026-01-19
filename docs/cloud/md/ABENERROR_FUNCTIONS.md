---
title: "ABENERROR_FUNCTIONS"
description: |
  ABENERROR_FUNCTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENERROR_FUNCTIONS.htm"
abapFile: "ABENERROR_FUNCTIONS.html"
keywords: ["loop", "do", "while", "if", "case", "try", "catch", "data", "types", "ABENERROR", "FUNCTIONS"]
---

`... erf( arg ) ...  ... erfc( arg ) ...  ... erf_inv( arg ) ...  ... erfc_inv( arg ) ...`

[Built-in](ABENBUILT_IN_FUNCTIONS.html) arithmetic functions for calculating the error function, complementary error function, and their inverses. These functions are typically used in statistics and probability theory. The functions expect a numeric value as single argument (`arg`), which can be a single data object outside an arithmetic expression or an arithmetic expression itself. They are overloaded functions, returning values of types `f` or `decfloat34`. `arg` is implicitly converted to `f` or `decfloat34`.

The following applies to the [floating point arithmetic](ABENFLOATING_POINT_ARITH_GLOSRY.html) in which a floating point function is calculated, and to the data type of the return value:

The following example demonstrates a loop that performs calculations using error functions in each iteration. It constructs a value table by adding calculation results or exceptions raised.

-   If the argument has the type `decfloat16` or `decfloat34`, a floating point function is calculated in decimal floating point arithmetic and the return value has the type `decfloat34`.
-   If a floating point function is used in an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) whose [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is `decfloat34`, or that contains a [numeric expression](ABENNUMERICAL_EXPRESSION_GLOSRY.html) of type `decfloat34` as an argument, it also calculates a return value with the type `decfloat34` and the argument is first converted to the data type `decfloat34`, if necessary.
-   In all other cases, floating point functions use binary floating point arithmetic to calculate a return value with type `f` and the argument is first converted to the data type `f`, if necessary.

-   If `arg` cannot be converted to a numeric value, the exception `CX_SY_CONVERSION_NO_NUMBER` is raised.
-   If `arg` is outside of the definition range, the exception `CX_SY_ARG_OUT_OF_DOMAIN` is raised.
-   When the poles are used as arguments for `erf_inv` or `erfc_inv`, for example, `erf_inv( 1 )`, then the exception `CX_SY_ARITHMETIC_OVERFLOW` is raised.

TYPES: BEGIN OF erf\_struc, \\n value TYPE string, \\n erf TYPE string, \\n erfc TYPE string, \\n erf\_inv TYPE string, \\n erfc\_inv TYPE string, \\n END OF erf\_struc, \\n erf\_tab\_type TYPE TABLE OF erf\_struc WITH EMPTY KEY. \\n\\ \\n DATA(num) = CONV decfloat34( '-2.5' ). \\n DATA(max) = CONV decfloat34( '2.5' ). \\n DATA erf\_tab TYPE erf\_tab\_type. \\n DATA err type ref to cx\_root. \\n WHILE num <= max. \\n\\ \\n APPEND VALUE #( value = num ) \\n TO erf\_tab REFERENCE INTO DATA(erf\_ref). \\n\\ \\n TRY. \\n DATA(erf) = erf( num ). \\n erf\_ref->erf = erf. \\n CATCH cx\_sy\_arithmetic\_overflow \\n cx\_sy\_arg\_out\_of\_domain INTO err. \\n erf\_ref->erf = |Exception \\{ \\n cl\_abap\_typedescr=>describe\_by\_object\_ref( \\n err )->get\_relative\_name( ) \\} raised|. \\n ENDTRY. \\n\\ \\n TRY. \\n DATA(erfc) = erfc( num ). \\n erf\_ref->erfc = erfc. \\n CATCH cx\_sy\_arithmetic\_overflow \\n cx\_sy\_arg\_out\_of\_domain INTO err. \\n erf\_ref->erfc = |Exception \\{ \\n cl\_abap\_typedescr=>describe\_by\_object\_ref( \\n err )->get\_relative\_name( ) \\} raised|. \\n ENDTRY. \\n\\ \\n TRY. \\n DATA(erf\_inv) = erf\_inv( num ). \\n erf\_ref->erf\_inv = erf\_inv. \\n CATCH cx\_sy\_arithmetic\_overflow \\n cx\_sy\_arg\_out\_of\_domain INTO err. \\n erf\_ref->erf\_inv = |Exception \\{ \\n cl\_abap\_typedescr=>describe\_by\_object\_ref( \\n err )->get\_relative\_name( ) \\} raised|. \\n ENDTRY. \\n\\ \\n TRY. \\n DATA(erfc\_inv) = erfc\_inv( num ). \\n erf\_ref->erfc\_inv = erfc\_inv. \\n CATCH cx\_sy\_arithmetic\_overflow \\n cx\_sy\_arg\_out\_of\_domain INTO err. \\n erf\_ref->erfc\_inv = |Exception \\{ \\n cl\_abap\_typedescr=>describe\_by\_object\_ref( \\n err )->get\_relative\_name( ) \\} raised|. \\n ENDTRY. \\n\\ \\n num += CONV decfloat34( '0.1' ). \\n\\ \\n ENDWHILE. \\n\\ \\n FINAL(out) = cl\_demo\_output=>new( ). \\n out->write( erf\_tab ). \\n out->display( ). **Function** **Meaning** **Definition Range** `erf` (Gauss) error function, which is the probability function of the normal distribution All real numbers `erfc` Complementary error function All real numbers; defined as `erfc( arg ) = 1 - erf( arg ).` `erf_inv` Inverse error function -1 < `arg` < 1 `erfc_inv` Inverse complementary error function 0 < `arg` < 2 abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html abenmathematical\_functions.html