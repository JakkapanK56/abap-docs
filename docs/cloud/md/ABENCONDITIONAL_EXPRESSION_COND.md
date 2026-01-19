---
title: "ABENCONDITIONAL_EXPRESSION_COND"
description: |
  ABENCONDITIONAL_EXPRESSION_COND - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONDITIONAL_EXPRESSION_COND.htm"
abapFile: "ABENCONDITIONAL_EXPRESSION_COND.html"
keywords: ["select", "if", "case", "method", "class", "data", "types", "ABENCONDITIONAL", "EXPRESSION", "COND"]
---

``... COND type( [[`let_exp`](ABAPLET.html)]\                 WHEN [`log_exp1`](ABENLOGEXP.html) THEN [[`let_exp`](ABAPLET.html)]\ [`result1`](ABENCONDITIONAL_EXPRESSION_RESULT.html)\               [ WHEN [`log_exp2`](ABENLOGEXP.html) THEN [[`let_exp`](ABAPLET.html)]\ [`result2`](ABENCONDITIONAL_EXPRESSION_RESULT.html)\ ]\               ...               [ ELSE [[`let_exp`](ABAPLET.html)]\ [`resultn`](ABENCONDITIONAL_EXPRESSION_RESULT.html)\ ] ) ...``

A [conditional expression](ABENCONDITIONAL_EXPRESSION_GLOSRY.html) with the conditional operator `COND` has a result [`result`](ABENCONDITIONAL_EXPRESSION_RESULT.html) that is dependent on logical expressions. Either a value with the data type specified by `type` is created or a class-based exception is raised. The following can be specified for `type`:

All operands specified after `THEN` must be convertible to the data type determined by `type`. In the case of reference variables, an [upcast](ABENUP_CAST_GLOSRY.html) must be possible.

`WHEN` must be specified at least once with any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html)\\ [`log_exp`](ABENLOGEXP.html) in the parentheses. This can be followed by any number of `WHEN` statements with further logical expressions. An `ELSE` can be specified at the end. The expression evaluates the logical expressions one after the other and selects the [`result`](ABENCONDITIONAL_EXPRESSION_RESULT.html) specified after `THEN` of the first logical expression whose result is true. The selected [`result`](ABENCONDITIONAL_EXPRESSION_RESULT.html) determines the result of the conditional expression. If none of the logical expressions are true, the [`result`](ABENCONDITIONAL_EXPRESSION_RESULT.html) specified after `ELSE` is selected. If `ELSE` is not specified, the result is the initial value of the data type `type`.

To define local helper fields, an optional [`LET` expression](ABAPLET.html) can be specified before the first `WHEN`, after every `THEN`, and after `ELSE`.

Transformation of a time to 12 hour format using a conditional expression in an operand position. The type of the result is used by the operand after the first `THEN` specification and is therefore `string`.

-   A non-generic data type `dtype`.
-   The `#` character as a symbol for the [operand type](ABENOPERAND_TYPE_GLOSRY.html).

-   If the data type required in an operand position is unique and known completely, this type is used.
-   If the operand type is not known completely, an operand with a type known statically must be specified after the first `THEN`, except when passing the constructor parameter to an actual parameter with a generically typed formal parameter, and this type is then used. No [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) statement can be specified after `THEN` in this case.
-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](ABENCOND_CONSTRUCTOR_INFERENCE.html).
-   In other cases, the character `#` cannot be specified.

-   The rules for derivations of the type where `#` is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   No suitable complete type can be derived for formal parameters with the generic types `c`, `n`, and `x`.

CLASS cx\_cant\_be DEFINITION INHERITING FROM cx\_no\_check. \\nENDCLASS. \\n\\ \\nCLASS exa DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS exa IMPLEMENTATION. \\n METHOD main. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ). \\n out->write( \\n COND #( LET t = '120000' IN \\n WHEN time < t THEN \\n |\\{ time TIME = ISO \\} AM| \\n WHEN time > t AND time < '240000' THEN \\n |\\{ CONV t( time - 12 \* 3600 ) TIME = ISO \\} PM| \\n WHEN time = t THEN \\n \`High Noon\` \\n ELSE \\n THROW cx\_cant\_be( ) ) ). \\n\\ \\n out->display( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenconditional\_expressions.html