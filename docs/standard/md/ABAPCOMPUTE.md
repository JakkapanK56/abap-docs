---
title: "ABAPCOMPUTE"
description: |
  ABAPCOMPUTE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOMPUTE.htm"
abapFile: "ABAPCOMPUTE.html"
keywords: ["do", "if", "case", "method", "data", "types", "ABAPCOMPUTE"]
---

[Short Reference](ABAPCOMPUTE_SHORTREF.html)

\\ `COMPUTE [EXACT] lhs =|?= rhs.`

The keyword `COMPUTE` can be written before every [assignment](ABENASSIGNMENT_GLOSRY.html) with an [assignment operator](ABENASSIGNMENT_OPERATOR_GLOSRY.html)\\ [`=`](ABENEQUALS_OPERATOR.html) or [`?=`](ABAPMOVE_CAST.html), except when an [inline declaration](ABENINLINE_DECLARATION_GLOSRY.html) is made on the left side or a [writable expression](ABENWRITABLE_EXPRESSION_GLOSRY.html) exists. The keyword `COMPUTE` is ignored by the assignment, unless the addition `EXACT` is specified.

If the addition `EXACT` is specified, the statement works as follows:

lhs = [EXACT #( rhs ).](ABENLOSSLESS_CALCULATION.html)

In this case, `COMPUTE` performs a [lossless calculation](ABENLOSSLESS_CALCULATION_GLOSRY.html) in accordance with the same rules as apply when using the [lossless operator](ABENLOSSLESS_OPERATOR_GLOSRY.html)\\ [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) for [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html). Only the [simplified arithmetic expressions](ABENLOSSLESS_CALCULATION.html) described here can be specified for `rhs` and `lhs` cannot have the type `f`. If a rounding raises an exception, the target variable is not modified.

The keyword `COMPUTE` is a historical relic and was originally designed for arithmetic calculations where the right side is an arithmetic expression:

COMPUTE \[EXACT\] result = [arith\_exp](ABAPCOMPUTE_ARITH.html).

Strictly speaking, the statement applies only in this case; more loosely, it applies even if a [string expression](ABENSTRING_EXPRESSION_GLOSRY.html) or [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) is specified as a different form of [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) on the right side.

In addition to the introduction using a calculation expression on the right side, the following variants also exist:

This means that the keyword `COMPUTE` does not produce a calculation. More specifically, `COMPUTE` does not modify the way a [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) is determined:

For this reason, it is not advisable to specify the keyword `COMPUTE` before assignments. If the right side is not a calculation expression, the keyword produces false information. If the right side is a calculation expression, the keyword is ignored if specified.

When `COMPUTE` is used for assignments to [enumerated variables](ABENENUMERATED_VARIABLE_GLOSRY.html), addition`EXACT` and the lossless operator [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) have the special effect that they can enable assignments, which otherwise would not have been possible.

[Assignments with the assignment operators `=` and `?=`](ABENASSIGN_CALC_GUIDL.html) only

It is not possible to make two commented out assignments of a calculation to the [enumerated variable](ABENENUMERATED_VARIABLE_GLOSRY.html)\\ `num`. The assignment is possible using `EXACT`, because in this case the assignment follows the same [rules](ABENEXACT_CONSTRUCTOR_ENUM.html) as the lossless operator shown below.

-   `COMPUTE destination = dobj.`
-   If a data object `dobj` is specified on the right side, `COMPUTE` works like an [assignment of data objects](ABAPMOVE.html).
-   `COMPUTE destination_ref =|?= source_ref.`
-   If the source objects and target objects have reference types, `COMPUTE` works like an [upcast or downcast](ABAPMOVE_CAST.html).
-   `COMPUTE destination = meth( ) | func( ) | constr_expr`
-   If functional method calls, built-in functions, constructor expressions, or table expressions are specified on the right side, `COMPUTE` works like an [assignment of return values](ABENEQUALS_RETURN_VALUES.html).
-   `COMPUTE destination1 = destination2 = ... = destination = rhs.`
-   If a [multiple assignment](ABAPMOVE_MULTIPLES.html) is specified on the right side, `COMPUTE` works like a multiple assignment.

-   When a data object is assigned to a target object, the type of the source object is always converted to the type of the target object, even if prefixed with `COMPUTE`.
-   When an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) is assigned, the calculation type is always determined from all operands involved, including the left side, even if not prefixed with `COMPUTE`.

TYPES: \\n BEGIN OF ENUM number, \\n n0, n1, n2, \\n END OF ENUM number. \\n\\ \\nDATA num TYPE number. \\n\\ \\n"num = + 1. \\nCOMPUTE EXACT num = + 1. \\n\\ \\nnum = EXACT number( + 1 ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abencomputing\_obsolete.html