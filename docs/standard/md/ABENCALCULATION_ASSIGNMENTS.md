---
title: "ABENCALCULATION_ASSIGNMENTS"
description: |
  ABENCALCULATION_ASSIGNMENTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCALCULATION_ASSIGNMENTS.htm"
abapFile: "ABENCALCULATION_ASSIGNMENTS.html"
keywords: ["do", "if", "catch", "data", "ABENCALCULATION", "ASSIGNMENTS"]
---

`lhs +=    | -=    | *=    | /= rhs.`

[Calculation assignment](ABENCALCULATION_ASSIGNMENT_GLOSRY.html) with one of the following [calculation assignment operators](ABENCALC_ASSIGNMENT_OP_GLOSRY.html):

As long as no [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) using the character `#` for type inference are used as `rhs`, these assignments have the same effect as the following [assignments of arithmetic expressions](ABENEQUALS_ARITH_EXPR.html):

`lhs = [lhs + ( rhs )](ABAPCOMPUTE_ARITH.html).`\\
`lhs = [lhs - ( rhs )](ABAPCOMPUTE_ARITH.html).`\\
`lhs = [lhs * ( rhs )](ABAPCOMPUTE_ARITH.html).`\\
`lhs = [lhs / ( rhs )](ABAPCOMPUTE_ARITH.html).`

The content of `lhs`

and the result is assigned to `lhs`. The [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is [determined](ABENARITH_TYPE.html) accordingly.

The following applies to the operands `lhs` and `rhs`:

Division by the value 0 is undefined and raises a catchable exception. The only situation where division by 0 does not raise an exception is if the dividend is also 0. Here, the result is set to 0.

**Caution** If *rhs* is a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) using the character *#* for type inference, the type is not derived as in the respective arithmetic expression but as in an assignment of *rhs* to *lhs*.

The variable `n` has the value *1.50* after the calculation assignments.

The calculation assignment gives a different result than the respective arithmetic expression because of different type inference for the constructor expression.

-   addition assignment operator `+=`
-   subtraction assignment operator `-=`
-   multiplication assignment operator `*=`
-   division assignment operator `/=`

-   gets the result of the parenthesized expression `rhs` added to it,
-   or has the result of the parenthesized expression `rhs` subtracted from it,
-   or is multiplied by the result of the parenthesized expression `rhs`,
-   or is divided by the result of the parenthesized expression `rhs`,

-   `lhs` is a [result position](ABENRESULT_POSITION_GLOSRY.html) and the following can be specified:

-   numeric [variables](ABENVARIABLE_GLOSRY.html)
-   numeric [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html)

-   `rhs` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) and the following can be specified:

-   numeric [data objects](ABENNUMERIC_DATA_OBJECT_GLOSRY.html)
-   numeric [constructor expressions](ABENCONSTRUCTOR_GLOSRY.html)
-   numeric [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html)
-   numeric [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)
-   numeric [functions](ABENFUNCTION_GLOSRY.html)

-   [Character-like expressions](ABENCHARLIKE_EXPRESSION_GLOSRY.html) and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) cannot be specified.

-   Apart from data objects, calculation assignments also allow expressions in the operand positions. This makes them more powerful than the statements [`ADD`](ABAPADD.html), [`SUBTRACT`](ABAPSUBTRACT_MULTIPLY_DIVIDE.html), [`MULTIPLY`](ABAPSUBTRACT_MULTIPLY_DIVIDE.html), [`DIVIDE`](ABAPSUBTRACT_MULTIPLY_DIVIDE.html), and also makes them obsolete.
-   No [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) are possible for `lhs`.
-   Calculation assignments can currently only be specified as standalone statements. They are not possible in other expressions, such as after `NEXT` in the reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html).
-   See also the [concatenation assignment operator](ABENCONCAT_ASSIGNMENT_OP_GLOSRY.html) ([`&&=`](ABENCALCULATION_ASSIGNMENT_STRING.html)).

-   In the calculation assignment, the type `i` is taken from the left hand side of the assignment. The result of the constructor expression is converted from `c` to `i` and the value *0,5* is rounded up to *1*. The calculated value is `2`
-   In the arithmetic expression, the rules for its [calculation type](ABENARITH_TYPE.html) are followed. The type of the constructor expression is taken from the expression itself, that is type `c` of operand `txt`. This type is handled as type `p` and thus determines the calculation type. The calculated value is `1`.

DATA n TYPE p DECIMALS 2. \\n\\ \\nn += 1. \\nn += 1. \\nn += 1. \\nn += 1. \\nn -= 2. \\nn \*= 3. \\nn /= 4. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(txt) = '0.5'. \\n\\ \\nDATA(num) = 2. \\n"# takes type i from num, expression is rounded up to 1 \\nnum \*= COND #( WHEN 1 = 1 THEN txt ). "2 \\nout->write( num ). \\n\\ \\nnum = 2. \\n"# takes type c from txt, expression is converted to calculation type p \\nnum = num \* COND #( WHEN 1 = 1 THEN txt ). "1 \\nout->write( num ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abencompute\_expressions.html