---
title: "ABENGENERAL_EXPRESSION_POSITIONS"
description: |
  ABENGENERAL_EXPRESSION_POSITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENGENERAL_EXPRESSION_POSITIONS.htm"
abapFile: "ABENGENERAL_EXPRESSION_POSITIONS.html"
keywords: ["insert", "delete", "if", "case", "method", "class", "data", "types", "ABENGENERAL", "EXPRESSION", "POSITIONS"]
---

General expression positions are [read positions](ABENREAD_POSITION_GLOSRY.html) where appropriate [data objects](ABENDATA_OBJECT_GLOSRY.html), [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html), [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html), or [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) and [method chainings](ABENMETHOD_CHAINING_GLOSRY.html) can be specified. The following general expression positions are available:

The type restrictions determined by the [operand type](ABENOPERAND_TYPE.html) apply in the operand positions. For example, no [numeric functions](ABENMATHEMATICAL_FUNKTION_GLOSRY.html) can be specified in a bit expression.

Specification of a constructor expressions with the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) on the right side of an assignment and of a constructor expression with the reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) as an input parameter for the method `DISPLAY` of the class `CL_DEMO_OUTPUT`.

-   Right side of an assignment with the [assignment operator `=`](ABENEQUALS_OPERATOR.html)
-   Operands of [arithmetic expressions](ABAPCOMPUTE_ARITH.html) and [bit expressions](ABAPCOMPUTE_BIT.html)
-   [Embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) in [string templates](ABENSTRING_TEMPLATES.html)
-   Operands of [comparison expressions](ABENCOMPARISON_EXPRESSION_GLOSRY.html) in [logical expressions](ABENLOGEXP.html)
-   Operand of the statement [`CASE`](ABAPCASE.html)
-   [Actual parameters](ABENTYPING_ARITH_EXPR.html) for input parameters of methods in [`meth( ... )`](ABAPCALL_METHOD_PARAMETERS.html), [`RAISE EVENT`](ABAPRAISE_EVENT.html), [`CREATE OBJECT`](ABAPCREATE_OBJECT.html), and [`RAISE EXCEPTION`](ABAPRAISE_EXCEPTION_CLASS.html) or [`THROW`](ABENCONDITIONAL_EXPRESSION_RESULT.html) in a [conditional expression](ABENCONDITIONAL_EXPRESSIONS.html)
-   [Actual parameters](ABENTYPING_ARITH_EXPR.html) for input parameters of function modules in the case of [`CALL FUNCTION`](ABAPCALL_FUNCTION_PARAMETER.html)
-   Arguments of [built-in](ABENBUILT_IN_FUNCTIONS.html)\\ [numeric functions](ABENMATHEMATICAL_FUNCTIONS.html) if these are specified in an arithmetic expression
-   Reference variable `oref` of the statement [`RAISE EXCEPTION oref.`](ABAPRAISE_EXCEPTION_CLASS.html)
-   The operands after the addition `WITH TABLE KEY` of the statements [`READ TABLE itab`](ABAPREAD_TABLE.html) and [`DELETE TABLE itab`](ABAPDELETE_ITAB_LINE.html)
-   The operands after the addition [`WITH KEY`](ABAPREAD_TABLE_FREE.html) of the statement [`READ TABLE itab`](ABAPREAD_TABLE.html)
-   Work area `wa` of the following statements:

-   [`APPEND wa TO ...`](ABAPAPPEND_LINESPEC.html)
-   [`INSERT wa INTO ...`](ABAPINSERT_ITAB_LINESPEC.html)
-   [`MODIFY ... FROM wa ...`](ABAPMODIFY_ITAB_SINGLE.html)

-   Expression `exp` for dynamic sorting at:

-   [`SORT itab BY exp`](ABAPSORT_ITAB.html)

-   Source fields of the statements [`WRITE`](ABAPWRITE-.html) and [`WRITE TO`](ABAPWRITE_TO.html), with the restriction that [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) cannot be specified directly but can only be specified as content of [embedded expressions](ABENEMBEDDED_EXPRESSION_GLOSRY.html) in [string templates](ABENSTRING_TEMPLATE_GLOSRY.html)

-   By specifying [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) as actual parameters of methods, it is possible to nest method calls in an operand position.
-   The three types of [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) can be listed as operands of relational expressions, but they cannot be combined in one calculation expression.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\ncl\_demo\_output=>display( \\n REDUCE string( INIT s = \`\` \\n FOR IN itab \\n NEXT s &&= && \` \` ) ). abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html abenoperand\_positions.html abenexpression\_positions.html abenexpression\_positions\_read.html