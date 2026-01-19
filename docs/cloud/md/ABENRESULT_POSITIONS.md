---
title: "ABENRESULT_POSITIONS"
description: |
  ABENRESULT_POSITIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRESULT_POSITIONS.htm"
abapFile: "ABENRESULT_POSITIONS.html"
keywords: ["do", "if", "method", "data", "field-symbol", "ABENRESULT", "POSITIONS"]
---

Result positions are [write positions](ABENWRITE_POSITION_GLOSRY.html) in which [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) can be specified. Writes are performed on the result of the expression. Result positions include the following:

Uses a table expression `itab[ sy-index ]` on the left side of a [calculation assignment](ABENCALCULATION_ASSIGNMENT_GLOSRY.html).

-   Actual parameter in [method calls](ABENMETHOD_CALLS.html) for [output parameters](ABAPCALL_METHOD_PARAMETERS.html), [input/output parameters](ABAPCALL_METHOD_PARAMETERS.html), and [return values](ABAPCALL_METHOD_PARAMETERS.html)
-   Left side of an assignment with the [assignment operator `=`](ABENEQUALS_OPERATOR.html)
-   Memory area `mem_area` of the statement [`ASSIGN mem_area TO`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html)
-   Structure `struc` of the statement [`ASSIGN COMPONENT comp OF STRUCTURE struc`](ABAPASSIGN_DYNAMIC_COMPONENTS.html)
-   Right side in the declaration of a local field symbol in a [`LET` expression](ABAPLET.html)
-   Operand `dobj` of the statement [`CLEAR`](ABAPCLEAR.html)
-   Operand `byte_string` of the statement [`SET BIT`](ABAPSET_BIT.html).

DATA itab TYPE TABLE OF i. \\n\\ \\nitab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\nDO 3 TIMES. \\n itab\[ sy-index \] \*= 10. \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html abenoperand\_positions.html abenexpression\_positions.html abenexpression\_positions\_write.html