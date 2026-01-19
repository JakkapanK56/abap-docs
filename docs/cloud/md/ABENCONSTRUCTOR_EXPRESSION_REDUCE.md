---
title: "ABENCONSTRUCTOR_EXPRESSION_REDUCE"
description: |
  ABENCONSTRUCTOR_EXPRESSION_REDUCE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONSTRUCTOR_EXPRESSION_REDUCE.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSION_REDUCE.html"
keywords: ["do", "if", "case", "data", "internal-table", "field-symbol", "ABENCONSTRUCTOR", "EXPRESSION", "REDUCE"]
---

``... REDUCE type(        [[`let_exp`](ABAPLET.html)]\        INIT \{x1 = rhs1\}|\{<x1> = wrexpr1\}|\{x1|<x1> TYPE dtype1\}\             \{x2 = rhs2\}|\{<x2> = wrexpr2\}|\{x2|<x2> TYPE dtype2\}\             ...        [`FOR for_exp1`](ABENFOR.html)\        [`FOR for_exp2`](ABENFOR.html)\        ...        NEXT ...             \{x1 =|+=|-=|*=|/=|&&= rhs1\}|\{<x1> =|+=|-=|*=|/=|&&= wrexpr1\}\             \{x2 =|+=|-=|*=|/=|&&= rhs2\}|\{<x2> =|+=|-=|*=|/=|&&= wrexpr2\}\             ... ) ...``

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the reduction operator `REDUCE` creates a result of a data type specified using `type` from one or more [iteration expressions](ABENITERATION_EXPRESSION_GLOSRY.html). The following can be specified for `type`:

The operands of the constructor expression must be specified as follows:

After the full evaluation, the content of the first variable `x1` or the memory area pointed to by the first field symbol `<x1>` is assigned to the temporary result of the expression of type `type` in accordance with the [assignment rules](ABENCONVERSION_RULES.html).

Calculation of the total of the numbers from 1 to 10 via `REDUCE`.

-   A non-generic data type `dtype`.
-   The `#` character as a symbol for the [operand type](ABENOPERAND_TYPE_GLOSRY.html).

-   If the data type required in an operand position is unique and known completely, this type is used.
-   If the operand type is not known completely, the type of the first declaration after `INIT`, which is always known, is used, except when the constructor expression is passed to an actual parameter with a generically typed formal parameter.
-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](ABENREDUCE_CONSTRUCTOR_INFERENCE.html).

-   First, an optional [`LET` expression](ABAPLET.html) can be specified for defining local helper fields whose value can be used within the expression but can no longer be changed there.
-   Then, an addition `INIT` must be specified followed by any number of declarations. The declarations after `INIT` create local variables `x1`, `x2`, ... or field symbols `<x1>`, `<x2>`, ... to which the same applies with respect to namespace and visibility as to the helper fields declared in a [`LET` expression](ABAPLET.html). The syntax of the declaration is either:

-   the same as in a [`LET` expression](ABAPLET.html) and it follows the rules that apply here.
-   initial variables or field symbols of the specified data type `dtype` can be created using `TYPE`.

-   At least one variable or field symbol must be specified. The variables or field symbols declared after `INIT` can only be used after `NEXT`. In particular, they cannot be used to declare other variables or field symbols.

-   The first variable `x1` or the first field symbol `<x1>` determines the result of the expression and the data type must be convertible to the result type `type`.
-   All other variables or field symbols declared after `INIT` are optional additional helper fields that can be on the left side of assignments after `NEXT`, unlike those declared after `LET`.

-   Then, at least one [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) must be specified using [`FOR`](ABENFOR.html) but it is also possible to specify multiple expressions.

-   If [conditional iterations](ABENFOR_CONDITIONAL.html) are used, the result is created in custom iteration steps.
-   If [table iterations](ABENFOR_ITAB.html) are used, the lines of existing internal tables are evaluated. This is referred to as a [table reduction](ABENTABLE_REDUCTION_GLOSRY.html), since any values are constructed from the lines of existing internal tables.

-   Then, assignments must be specified after `NEXT` that are executed for every iteration of the last `FOR` expression. For the assignments, either the [assignment operator](ABENASSIGNMENT_OPERATOR_GLOSRY.html)\\ `=` or the [calculation assignment operators](ABENCALC_ASSIGNMENT_OP_GLOSRY.html)\\ `+=`, `-=`, `*=`, `/=`, or `&&=` can be specified and the assignment is carried out accordingly. A value or memory area must be assigned to all variables and field symbols declared after `INIT`. In the case of structured variables or field symbols, an assignment to one of their components is sufficient.

-   The assignment on the right side `rhs` to variables `x` takes place in accordance with the rules of a regular assignment using the [assignment operator `=`](ABENEQUALS_OPERATOR.html) or a [calculation assignment operator `+=`, `+=`, `*=`, `/=`](ABENCALCULATION_ASSIGNMENTS.html) or [`&&=`](ABENCALCULATION_ASSIGNMENT_STRING.html), which means that any of the possible calls and expressions can be specified for `rhs`.
-   Only the result of a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html)\\ `wrexp` can be assigned to a field symbol. The same applies here as to assignments of writable expressions using [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html), which means that only the expressions listed there can be specified.

-   The assignments can be listed in any order and they are evaluated from to left to right. Each non-structured variable or field symbol declared after `INIT` can be specified exactly once as the left side. In the case of structured variables or field symbols, either the entire structure or each component once can be specified as the left side. In addition to the data objects of the program, all local variables and field symbols of the expression visible after the last `FOR` expression can be used in the operand positions on the right side:

-   All variables and field symbols declared after `LET`.
-   All variables and field symbols declared after `INIT`.
-   The `wa1`, `wa2`, ... or `<fs1>`, `<fs2>`, .... filled by the `FOR` expressions. This enables the content of the lines of the internal tables to be accessed and the result constructed.

-   All helper fields declared after `INIT` can only be specified in read positions on the right side.

-   The name of the operator `REDUCE` is explained as follows:

-   [Conditional iterations](ABENFOR_CONDITIONAL.html) are generally used to reduce sets of data objects to a single data object.
-   [Table iterations](ABENFOR_ITAB.html) for [table reductions](ABENTABLE_REDUCTION_GLOSRY.html) are generally used to reduce the content of the internal tables in question to a summary value. Any result type is possible and does not have to be less complex than the involved internal tables, but this should only be used in exceptional cases. When constructing tables from tables, it is best to use [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html) instead.

-   When a local field symbol `<xi>` is used on the left side of assignments after `NEXT`, it should be noted that the assignments are not made to the value referenced by the field symbol like in `INIT` and `LET`. Instead, the field symbol is set in the same way as in the statement [`ASSIGN`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html).
-   Unlike in [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html) with the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html), an assignment of a `REDUCE` expression to a structure or an internal table does not overwrite them completely before the `FOR` expressions are processed and can be used directly anywhere in the entire expression.
-   If a variable is declared in the first position after `INIT` and the `VALUE` operator is specified with the character `#` on the right side, the result type `type` of the `REDUCE` expression is used for this character if possible.
-   Table reductions are also possible with [`FOR` expressions](ABENMESH_FOR.html) for [mesh paths](ABENMESH_PATH_GLOSRY.html).

-   [Creating Values with `FOR` and `REDUCE`](ABENCOND_ITERATION_REDUCE_ABEXA.html)
-   [Examples of Table Reductions](ABENTABLE_REDUCTIONS_ABEXAS.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nout->write( \\n REDUCE i( INIT s = 0 \\n FOR i = 1 UNTIL i > 10 \\n NEXT s += i ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html