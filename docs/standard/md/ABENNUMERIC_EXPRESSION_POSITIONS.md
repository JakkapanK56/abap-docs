---
title: "ABENNUMERIC_EXPRESSION_POSITIONS"
description: |
  ABENNUMERIC_EXPRESSION_POSITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNUMERIC_EXPRESSION_POSITIONS.htm"
abapFile: "ABENNUMERIC_EXPRESSION_POSITIONS.html"
keywords: ["insert", "delete", "loop", "do", "if", "method", "data", "internal-table", "ABENNUMERIC", "EXPRESSION", "POSITIONS"]
---

Numeric expression positions are [read positions](ABENREAD_POSITION_GLOSRY.html) where [numeric data objects](ABENNUMERIC_DATA_OBJECT_GLOSRY.html), [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html), [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), and [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html), or [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) and [method chainings](ABENMETHOD_CHAINING_GLOSRY.html) whose return value has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html), can be specified. The following numeric expression positions exist:

Specifies a built-in function `lines( itab )` for specifying the loop passes of a [`DO`](ABAPDO.html) loop.

-   Arguments of functions

-   Numeric arguments of [string functions](ABENSTRING_FUNCTIONS.html)
-   Numeric arguments of [extremum functions](ABENNMAX_NMIN_FUNCTIONS.html)

-   Counters and positions:

-   Operand `comp` of the statement
-   [`ASSIGN COMPONENT comp OF STRUCTURE`](ABAPASSIGN_DYNAMIC_COMPONENTS.html)
-   Operand `n` of the statement
-   [`DO n TIMES`](ABAPDO.html)
-   Operand `sec` of the statement
-   [`WAIT UP TO sec SECONDS`](ABAPWAIT_UP_TO.html)
-   Operand `num` of the statement
-   \\ [`SHIFT ... BY num PLACES`](ABAPSHIFT_PLACES.html)
-   Operands `bitpos` and `val` of the statement
-   [`SET BIT bitpos ... TO val`](ABAPSET_BIT.html).
-   Operand `bitpos` of the statement
-   [`GET BIT bitpos ...`](ABAPGET_BIT.html).

-   Positions specifications in the statements `FIND` and `REPLACE`:

-   Operands `off` and `len` of the statements
-   [`FIND ... IN SECTION ... OF`](ABAPFIND_SECTION_OF.html)\\ \\n[`REPLACE ... IN SECTION ... OF`](ABAPFIND_SECTION_OF.html)
-   Operands `lin1`, `off1`, `lin2`, and `off2` of the statements
-   [`FIND ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...`](ABAPFIND_TABLE_RANGE.html)\\ \\n[`REPLACE ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...`](ABAPREPLACE_TABLE_RANGE.html)
-   Operands `off` and `len` of the statement
-   [`REPLACE SECTION OFFSET off LENGTH len OF ...`](ABAPREPLACE_IN_POSITION.html)

-   Specification of the line number `idx` with respect to a table index when accessing internal tables in the following:

-   [`READ TABLE itab INDEX idx ...`](ABAPREAD_TABLE_INDEX.html)
-   [`LOOP AT itab ...FROM idx1 TO idx2 STEP n ...`](ABAPLOOP_AT_ITAB_COND.html)
-   [`INSERT itab ... INDEX idx ...`](ABAPINSERT_ITAB_POSITION.html)
-   [`INSERT LINES OF jtab FROM idx1 TO idx2 STEP n ...`](ABAPINSERT_ITAB_LINESPEC.html)
-   [`APPEND LINES OF jtab FROM idx1 TO idx2 STEP n ...`](ABAPAPPEND_LINESPEC.html)
-   [`MODIFY itab INDEX idx ...`](ABAPMODIFY_ITAB_INDEX.html)
-   [`DELETE itab INDEX idx ...`](ABAPDELETE_ITAB_LINE.html)
-   [`DELETE itab FROM idx1 TO idx2 STEP n ...`](ABAPDELETE_ITAB_LINES.html)

DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\n... \\n\\ \\nDO lines( itab ) TIMES. \\n ... \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html abenoperand\_positions.html abenexpression\_positions.html abenexpression\_positions\_read.html