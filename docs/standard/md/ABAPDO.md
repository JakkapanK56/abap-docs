---
title: "ABAPDO"
description: |
  ABAPDO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDO.htm"
abapFile: "ABAPDO.html"
keywords: ["loop", "do", "if", "data", "internal-table", "ABAPDO"]
---

[Short Reference](ABAPDO_SHORTREF.html)

`DO [n TIMES].    [statement_block]\  ENDDO.`

[`... n TIMES`](#ABAP_ONE_ADD@1@)

Unconditional loop. The statements `DO` and `ENDDO` define a control structure, which can contain a complete [statement block](ABENSTATEMENT_BLOCK_GLOSRY.html)\\ `statement_block`.

Without the addition [`n TIMES`](ABAPDO.html), the statement block is repeated until it is exited using one of the following statements:

In order to exit the current loop pass and to continue with the next loop pass, the statements [`CONTINUE`](ABAPCONTINUE.html) and [`CHECK`](ABAPCHECK_PROCESSING_BLOCKS.html) can be used.

Within the statement block, the system field `sy-index` contains the number of previous loop passes, including the current pass. In nested loops, `sy-index` always refers to the current loop.

Exit a `DO` loop based on a condition.

The addition `n TIMES` limits the number of loop passes in a `DO` loop. `n` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`.

The numeric value of `n` when entering the loop determines the maximum number of times the statement block is executed. The control structure ignores changes to the value `n` within the loop. If `n` contains a value less than or equal to 0, the statement block is not executed.

Calculation and display of the first ten square numbers in a `DO` loop.

-   [`EXIT`](ABAPEXIT_LOOP.html) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](ABENLEAVE_PROCESSING_BLOCKS.html)
-   A statement for [exiting the current program](ABENABAP_LEAVE_PROGRAM.html)

-   If `DO` loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [`FOR`](ABENFOR_CONDITIONAL.html) in constructor expressions.
-   If the addition [`n TIMES`](ABAPDO.html) is not specified, the loop has to be terminated by a statement; otherwise it is executed endlessly. A maximum runtime can be configured using the [profile parameters](ABENPROFILE_PARAMETER_GLOSRY.html)\\ `rdisp/scheduler/prio_low/max_runtime`, `rdisp/scheduler/prio_normal/max_runtime`, and `rdisp/scheduler/prio_high/max_runtime`. If this is exceeded, the program is terminated by the runtime framework.
-   The obsolete addition [`VARYING`](ABAPDO_VARYING.html) can be used to process a sequence of data objects in the memory.

DATA(str) = \`xxx\`. \\nDO. \\n str = str && str. \\n IF strlen( str ) > 10000. \\n EXIT. \\n ENDIF. \\nENDDO. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA square TYPE i. \\n\\ \\nDO 10 TIMES. \\n square = ipow( base = sy-index exp = 2 ). \\n out->write( |\\{ sy-index \\} \\{ square \\}| ). \\nENDDO. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abencontrol\_structures.html abenabap\_loops.html