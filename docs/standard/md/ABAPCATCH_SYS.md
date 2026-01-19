---
title: "ABAPCATCH_SYS"
description: |
  ABAPCATCH_SYS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCATCH_SYS.htm"
abapFile: "ABAPCATCH_SYS.html"
keywords: ["if", "case", "try", "catch", "class", "data", "ABAPCATCH", "SYS"]
---

[Short Reference](ABAPCATCH_SYSTEM-EXCEPT_SHORTREF.html)

`CATCH SYSTEM-EXCEPTIONS [exc1 = n1 exc2 = n2...]\                          [OTHERS = n_others].`\\ 
  `[statement_block]`\\ 
`ENDCATCH.`

Handling [catchable runtime errors](ABENCATCHABLE_RUNTIME_ERROR_GLOSRY.html). The statement `CATCH SYSTEM-EXCEPTIONS` introduces a control structure containing a statement block `statement_block` that is always processed. In the list `exc1 = n1 exc2 = n2 ...`, [catchable runtime errors](ABENCATCHABLE_RUNTIME_ERROR_GLOSRY.html) and [exception groups](ABENEXCEPTION_GROUP_GLOSRY.html) can be specified in any order. A directly specified number `n1 n2 ...` must be assigned to each of them.

The `OTHERS` addition can be specified independently or after the list `exc1 = n1 exc2 = n2 ...`. Its effect is the same as specifying an exception group that includes all catchable runtime errors of the runtime framework.

The system handles the `CATCH` control structure as follows:

A `CATCH` control structure cannot be defined in the same [processing block](ABENPROCESSING_BLOCK_GLOSRY.html), in which the class-based exceptions are handled in a [`TRY`](ABAPTRY.html) control structure or are raised by the statement [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or by the addition [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html).

Catches all possible catchable runtime errors in a statement block. Catchable runtime errors of the exception group `ARITHMETIC_ERRORS` set `sy-subrc` to 4, all other catchable runtime errors set `sy-subrc` to 8. The division by 0 causes the catchable runtime error `COMPUTE_INT_ZERODIVIDE`, which is contained in the exception group `ARITHMETIC_ERRORS`. In this case, `sy-subrc` is also set to 4.

-   If one of the specified catchable runtime errors or a catchable runtime error contained in the specified exception groups occurs, the execution of the `statement block` is immediately terminated, the program continues after the statement `ENDCATCH`, and the number `n1 n2 ...` assigned to the catchable runtime error or the exception group, is stored for evaluation in the system field `sy-subrc`. If the list contains a catchable runtime error and its exception group or if a catchable runtime error occurs in some of the specified exception groups, `sy-subrc` contains the assigned number of the first position in the list.
-   If a catchable runtime error occurs in the statement block that is not specified in the statement `CATCH SYSTEM-EXCEPTIONS` or is not contained in one of the specified exception groups, the program terminates with a [short dump](ABENSHORT_DUMP_GLOSRY.html)
-   If the end of the statement block is reached and no runtime error occurs, `sy-subrc` is set to 0.

-   Catchable runtime errors are not passed from called [procedures](ABENPROCEDURE_GLOSRY.html) to the caller. They can only be caught within a processing block. Within a processing block, catchable runtime errors are caught in control structures that can be nested in any depth. If multiple `CATCH` control structures are nested, the system branches behind the `ENDCATCH` statement of the innermost `CATCH` control structure that handles the runtime error.
-   The handling of catchable runtime errors using `CATCH SYSTEM-EXCEPTIONS` is obsolete and should be replaced by a [`TRY`](ABAPTRY.html) control structure. Since class-based exceptions are assigned to all catchable runtime errors, this is possible without restriction. The class-based exceptions can also be passed from a procedure using `RAISING`, as well as by using `TRY`.

DATA: result TYPE i, \\n number TYPE i. \\n\\ \\nCATCH SYSTEM-EXCEPTIONS arithmetic\_errors = 4 \\n OTHERS = 8. \\n ... \\n result = 1 / number. \\n ... \\nENDCATCH. \\n\\ \\nIF sy-subrc <> 0. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abensystem-exceptions.html