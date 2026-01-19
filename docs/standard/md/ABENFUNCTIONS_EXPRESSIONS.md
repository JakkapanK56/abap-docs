---
title: "ABENFUNCTIONS_EXPRESSIONS"
description: |
  ABENFUNCTIONS_EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFUNCTIONS_EXPRESSIONS.htm"
abapFile: "ABENFUNCTIONS_EXPRESSIONS.html"
keywords: ["do", "if", "method", "class", "data", "internal-table", "ABENFUNCTIONS", "EXPRESSIONS"]
---

The following expressions can be specified in [write positions](ABENWRITE_POSITION_GLOSRY.html):

Functions that can be specified in a read position include the following:

The following expressions can be specified in read positions:

Numeric expression used for specification of a table index for an internal table.

-   [Declaration expressions](ABENDECLARATION_EXPRESSION_GLOSRY.html)

-   `... [DATA(...)](ABENDATA_INLINE.html) ...`
-   `... [FINAL(...)](ABENFINAL_INLINE.html) ...`
-   `... [FIELD-SYMBOL(...)](ABENFIELD-SYMBOL_INLINE.html) ...`

-   [Writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html)

-   The [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)\\ [`NEW class( ... )->attr`](ABENNEW_CONSTRUCTOR_PARAMS_CLASS.html) and [`CAST type( ... )->dobj`](ABENCONSTRUCTOR_EXPRESSION_CAST.html)
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`itab[ ... ]`](ABENTABLE_EXPRESSIONS.html) and their [chainings](ABENTABLE_EXP_CHAINING.html)

-   [Built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html)
-   `... [func( arg )](ABENBUILT_IN_FUNCTIONS_SYNTAX.html) ...`\\
    `... [... func( val = arg p1 = arg1 p2 = arg2 ... )](ABENBUILT_IN_FUNCTIONS_SYNTAX.html) ...`
-   [Functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html)
-   `... [meth( )](ABAPCALL_METHOD_FUNCTIONAL.html) ...`\\
    `... [meth( a )](ABAPCALL_METHOD_FUNCTIONAL.html) ...`\\
    `... [meth( p1 = a1 p2 = a2 ... )](ABAPCALL_METHOD_FUNCTIONAL.html) ...`\\
    `... [meth( [EXPORTING p1 = a1 p2 = a2 ...]](ABAPCALL_METHOD_FUNCTIONAL.html)\ [[IMPORTING p1 = a1 p2 = a2 ...]](ABAPCALL_METHOD_FUNCTIONAL.html)\ [[CHANGING p1 = a1 p2 = a2 ...] )](ABAPCALL_METHOD_FUNCTIONAL.html) ...`
-   [Method chaining](ABENMETHOD_CHAINING_GLOSRY.html)

-   Chained method call:
-   `... [...->meth1( ... )->meth2( ... )->...->meth( ... )](ABAPCALL_METHOD_STATIC_CHAIN.html) ...`
-   Chained attribute access:
-   `... [...->meth1( ... )->meth2( ... )->...->attr](ABAPCALL_METHOD_STATIC_CHAIN.html) ...`

-   [Calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html):

-   [Arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html)
-   `... [arith_exp](ABAPCOMPUTE_ARITH.html) ...`
-   [Bit expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html)
-   `... [bit_exp](ABAPCOMPUTE_BIT.html) ...`
-   [String Expressions](ABENSTRING_EXPRESSION_GLOSRY.html)
-   `... [string_exp](ABAPCOMPUTE_STRING.html) ...`

-   [Constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html):

-   [Instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)
-   [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html)
-   [Value operator](ABENVALUE_OPERATOR_GLOSRY.html)
-   [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html)
-   [Conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.html)
-   [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html)
-   [Component operator](ABENCORRESPONDING_OPERATOR_GLOSRY.html)\\ [`CORRESPONDING`](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html)

-   [Casting operator](ABENINSTANCE_OPERATOR_GLOSRY.html)
-   [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html)
-   [Reference operator](ABENREFERENCE_OPERATOR_GLOSRY.html)
-   [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html)
-   [Lossless operator](ABENLOSSLESS_OPERATOR_GLOSRY.html)
-   [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html)
-   [Reduction operator](ABENREDUCE_OPERATOR_GLOSRY.html)
-   [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html)
-   [Filter operator](ABENFILTER_OPERATOR_GLOSRY.html)
-   [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html)
-   [Conditional operator](ABENCONDITIONAL_OPERATOR_GLOSRY.html)
-   [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html), [`SWITCH`](ABENCONDITIONAL_EXPRESSION_SWITCH.html)

-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`itab[ ... ]`](ABENTABLE_EXPRESSIONS.html) and their [chainings](ABENTABLE_EXP_CHAINING.html)

-   Functions with numeric return values and arithmetic expressions are summarized as [numeric expressions](ABENNUMERICAL_EXPRESSION_GLOSRY.html).
-   Functions with character-like return values and string expressions are summarized as [character-like expressions](ABENCHARLIKE_EXPRESSION_GLOSRY.html).
-   Functions with a byte-like return values and bit expressions are summarized as [byte-like expressions](ABENBYTE_LIKE_EXPRESSION_GLOSRY.html).

DATA: itab TYPE STANDARD TABLE OF i, \\n n TYPE i. \\n\\ \\n... \\n\\ \\nREAD TABLE itab INDEX lines( itab ) - n \\n INTO FINAL(wa). abenabap.html abenabap\_reference.html abenoperands.html abenoperands\_expressions.html