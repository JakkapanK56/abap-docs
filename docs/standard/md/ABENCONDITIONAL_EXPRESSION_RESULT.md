---
title: "ABENCONDITIONAL_EXPRESSION_RESULT"
description: |
  ABENCONDITIONAL_EXPRESSION_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONDITIONAL_EXPRESSION_RESULT.htm"
abapFile: "ABENCONDITIONAL_EXPRESSION_RESULT.html"
keywords: ["select", "delete", "do", "if", "try", "catch", "method", "class", "data", "ABENCONDITIONAL", "EXPRESSION", "RESULT"]
---

``...   operand    |\ \{ THROW [RESUMABLE|SHORTDUMP] cx_class( [[`message`](ABAPRAISE_EXCEPTION_MESSAGE.html)]\                                              [p1 = a1 p2 = a2 ...] ) \} ...``

[1. `... operand`](#ABAP_ALTERNATIVE_1@2@)

[2. `... THROW [RESUMABLE|SHORTDUMP] cx_class( [message]\ [p1 = a1 p2 = a2 ...] )`](#ABAP_ALTERNATIVE_2@2@)

These specifications after `THEN` and `ELSE` in the [conditional expressions](ABENCONDITIONAL_EXPRESSION_GLOSRY.html)\\ [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html) and [`SWITCH`](ABENCONDITIONAL_EXPRESSION_COND.html) determine the result of the expression when the corresponding branch is selected.

If an operand `operand` is specified, its value is converted to the data type `type` if necessary and returned as the result of the conditional expression. `operand` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html) with the following restrictions:

When an operand is specified, the conditional operators `COND` and `SWITCH` create a temporary data object whose data type is determined by the specified type and whose content is determined by the selected operand. This data object is used as the operand of a statement and then deleted. It is deleted either when the current statement is completed or when a relational expression is evaluated after the truth value is determined.

Specification of the operands `sum` and `sum + 1`. The number of times a random number is less than half of its maximum value is counted.

The specification of `THROW` raises either an exception or a runtime error.

Raising of an exception of the class `CX_DEMO_DYN_T100` that implements the interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html).

Raising of a runtime error with an exception object of the class `CX_DEMO_DYN_T100`, which implements the interface [`IF_T100_DYN_MSG`](ABENIF_T100_DYN_MSG.html).

-   If `operand` is specified as a [string expression](ABENSTRING_EXPRESSION_GLOSRY.html), `type` must be character-like.
-   If `operand` is specified as a [bit expression](ABENBIT_EXPRESSION_GLOSRY.html), `type` must be byte-like.

-   If the addition `SHORTDUMP` is not specified, `THROW` works like the statement [`RAISE EXCEPTION TYPE`](ABAPRAISE_EXCEPTION_CLASS.html) and raises an exception of the [exception class](ABENEXCEPTION_CLASS_GLOSRY.html)\\ `cx_class`. The following applies here:

-   The addition `RESUMABLE` can be used to make the exception resumable.
-   A message can be passed to the exception object using the addition [`message`](ABAPRAISE_EXCEPTION_MESSAGE.html).
-   The input parameters `p1`, `p2`, ... of the instance constructor can be filled with actual parameters `a1`, `a2`.

-   If the addition `SHORTDUMP` is specified, `THROW` works like the statement [`RAISE SHORTDUMP TYPE`](ABAPRAISE_SHORTDUMP.html) and raises a runtime error with the [exception class](ABENEXCEPTION_CLASS_GLOSRY.html)\\ `cx_class`, whereby a message can be also passed and the input parameters can be filled.

-   If the exception class is specified after `THROW`, the parentheses must always be specified, even if no messages or actual parameters are passed. `EXPORTING` cannot be specified, nor is it necessary.
-   Like the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html), the specification `THROW` without the addition `SHORTDUMP` cannot be used in a method or function module in whose interface [non-class-based](ABENEXCEPTIONS_NON_CLASS.html) exceptions are declared. Furthermore, it does not allow simultaneous use of the statement [`CATCH SYSTEM-EXCEPTIONS`](ABAPCATCH_SYS.html) for the obsolete handling of [catchable runtime errors](ABENCATCHABLE_RUNTIME_ERROR_GLOSRY.html), and the statements [`RAISE`](ABAPRAISE_EXCEPTION.html) or [`MESSAGE RAISING`](ABAPMESSAGE_RAISING.html) to raise non-class-based exceptions in the current processing block.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( t ) min = 1 max = 101 ). \\n\\ \\nDATA(sum) = 0. \\nDO 100 TIMES. \\n sum = COND i( WHEN rnd->get\_next( ) <= 50 THEN sum + 1 \\n ELSE sum ). \\nENDDO. \\nout->write( sum ). \\n\\ \\nout->display( ). DATA cflag TYPE abap\_boolean. \\n\\ \\n... \\n\\ \\nTRY. \\n FINAL(iflag) = COND i( WHEN cflag = abap\_true THEN 1 \\n WHEN cflag = abap\_false THEN 0 \\n ELSE THROW cx\_demo\_dyn\_t100( \\n MESSAGE e888(sabapdemos) \\n WITH 'Illegal value!' '' '' '' ) ). \\n CATCH cx\_demo\_dyn\_t100. \\n ... \\nENDTRY. FINAL(t) = cl\_demo\_date\_time=>get\_user\_time( ). \\nFINAL(time) = COND t( WHEN t BETWEEN '090000' AND '170000' \\n THEN t \\n ELSE \\n THROW SHORTDUMP cx\_demo\_dyn\_t100( \\n MESSAGE e888(sabapdemos) \\n WITH \`I\` \`don't\` \`work\` \`now!\` ) ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenconditional\_expressions.html