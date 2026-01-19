---
title: "ABENCONDITIONAL_EXPRESSION_SWITCH"
description: |
  ABENCONDITIONAL_EXPRESSION_SWITCH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONDITIONAL_EXPRESSION_SWITCH.htm"
abapFile: "ABENCONDITIONAL_EXPRESSION_SWITCH.html"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENCONDITIONAL", "EXPRESSION", "SWITCH"]
---

``... SWITCH type( [[`let_exp`](ABAPLET.html)]\                   operand                   WHEN const1 THEN [[`let_exp`](ABAPLET.html)]\ [`result1`](ABENCONDITIONAL_EXPRESSION_RESULT.html)\                 [ WHEN const2 THEN [[`let_exp`](ABAPLET.html)]\ [`result2`](ABENCONDITIONAL_EXPRESSION_RESULT.html)\ ]\                 ...                 [ ELSE [[`let_exp`](ABAPLET.html)]\ [`resultn`](ABENCONDITIONAL_EXPRESSION_RESULT.html)\ ] ) ...``

A [conditional expression](ABENCONDITIONAL_EXPRESSION_GLOSRY.html) with the conditional operator `SWITCH` has a result, [`result`](ABENCONDITIONAL_EXPRESSION_RESULT.html), that is dependent on a case distinction. Either a value with the data type specified by `type` is produced or a class-based exception is raised. The following can be specified for `type`:

All operands specified after `THEN` must be convertible to the data type determined by `type`. In the case of reference variables, an [upcast](ABENUP_CAST_GLOSRY.html) must be possible.

The position `operand` in the parentheses is the value that is checked in the case distinction. This is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html). It must be followed by at least one `WHEN`. Literals and [constants](ABENCONSTANT_GLOSRY.html) can be specified for `const` after `WHEN`. It must be possible to [compare](ABENLOGEXP_RULES.html) them with `operand`. [Substring access](ABENOFFSET_LENGTH.html) is not possible. This can be followed by any number of `WHEN` statements with further constant values. An `ELSE` can be specified at the end. This expression compares the values of the operand `operand` with the specified constant values one after another and chooses the [`result`](ABENCONDITIONAL_EXPRESSION_RESULT.html) after `THEN` for which the values of operand and constant are identical for the first time. The selected [`result`](ABENCONDITIONAL_EXPRESSION_RESULT.html) determines the result of the conditional expression. If no matches are found, the [`result`](ABENCONDITIONAL_EXPRESSION_RESULT.html) specified after `ELSE` is selected. If `ELSE` is not specified, the result is the initial value of the data type `type`.

If a specification after `THEN` or `ELSE` can be selected, either the result is set or a class-based exception is raised, just as with a conditional expression [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html).

To define local helper fields, an optional [`LET` expression](ABAPLET.html) can be specified in front of the operand `operand`, after every `THEN`, and after `ELSE`.

Conditional operator `SWITCH` in an operand position in a loop. The loop is exited when the exception after `ELSE` is caught.

-   A non-generic data type `dtype`.
-   The `#` character as a symbol for the [operand type](ABENOPERAND_TYPE_GLOSRY.html).

-   If the data type required in an operand position is unique and known completely, this type is used.
-   If the operand type is not known completely, an operand with a type known statically must be specified after the first `THEN`, except when passing the constructor parameter to an actual parameter with a generically typed formal parameter, and this type is then used. No [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) statement can be specified after `THEN` in this case.
-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](ABENCOND_CONSTRUCTOR_INFERENCE.html).
-   In other cases, the character `#` cannot be specified.

-   No [text symbols](ABENTEXT_SYMBOL_GLOSRY.html) for `const` can be specified after `WHEN`.
-   A conditional expression with `SWITCH` has the same meaning as the following conditional expression with [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html):
-   `COND type( WHEN operand = const1 THEN result1 [ WHEN operand = const2 THEN result2 ]\ ... [ ELSE resultn ] )`
-   The rules for derivations of the type where `#` is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   No suitable complete type can be derived for formal parameters with the generic types `c`, `n`, and `x`.

CLASS cx\_overflow DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n DO. \\n TRY. \\n out->write( \\n SWITCH string( sy-index \\n WHEN 1 THEN 'one' \\n WHEN 2 THEN 'two' \\n WHEN 3 THEN 'three' \\n ELSE THROW cx\_overflow( ) ) ). \\n CATCH cx\_overflow. \\n out->display( ). \\n EXIT. \\n ENDTRY. \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenconditional\_expressions.html