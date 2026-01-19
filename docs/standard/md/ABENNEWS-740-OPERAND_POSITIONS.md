---
title: "ABENNEWS-740-OPERAND_POSITIONS"
description: |
  ABENNEWS-740-OPERAND_POSITIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-OPERAND_POSITIONS.htm"
abapFile: "ABENNEWS-740-OPERAND_POSITIONS.html"
keywords: ["insert", "delete", "loop", "do", "if", "case", "method", "data", "internal-table", "ABENNEWS", "740", "OPERAND", "POSITIONS"]
---

[1\. Declaration Positions](#ABAP_MODIFICATION_1@4@)

[2. Operand Position in `CALL FUNCTION ... EXPORTING`](#ABAP_MODIFICATION_2@4@)

[3. Operand Position After `CASE`](#ABAP_MODIFICATION_3@4@)

[4. Operand Position in Dynamic `ASSIGN`](#ABAP_MODIFICATION_4@4@)

[5\. Operand Positions in Statements for Internal Tables](#ABAP_MODIFICATION_5@4@)

[6\. Operand Positions for Events in ABAP Objects](#ABAP_MODIFICATION_6@4@)

[7. Operand Positions After `MESSAGE`](#ABAP_MODIFICATION_7@4@)

[8. Operand Position in `WRITE` and `WRITE TO`](#ABAP_MODIFICATION_8@4@)

[9. Case Sensitivity of Name in `ASSIGN COMPONENT`](#ABAP_MODIFICATION_9@4@)

The [new](ABENNEWS-740-EXPRESSIONS.html)\\ [inline declarations](ABENINLINE_DECLARATIONS.html) can be made in the new [declaration positions](ABENDECLARATION_POSITIONS.html).

Actual parameters specified after [`CALL FUNCTION ... EXPORTING`](ABAPCALL_FUNCTION_PARAMETER.html) have now become a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

The operand position after [`CASE`](ABAPCASE.html) was changed to a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

The operand `comp` in the statement [`ASSIGN COMPONENT comp OF STRUCTURE`](ABAPASSIGN_DYNAMIC_COMPONENTS.html) is now a [character-like](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) or [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html).

The following changes have been made:

The following changes have been made:

The following operand positions of the statement [`MESSAGE`](ABAPMESSAGE.html) were changed:

Until now, the statements [`WRITE`](ABAPWRITE-.html) and [`WRITE TO`](ABAPWRITE_TO.html) could only be used to produce or assign a single data object `dobj`. Now the following can also be specified instead of `dobj`:

[Arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) and [bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) cannot be specified directly, but can be specified as [embedded expressions](ABENEMBEDDED_EXPRESSION_GLOSRY.html) in [string templates](ABENSTRING_TEMPLATE_GLOSRY.html).

A component name specified as a character string in [`ASSIGN COMPONENT`](ABAPASSIGN_DYNAMIC_COMPONENTS.html) no longer has to be in uppercase letters.

-   The operands after the addition `WITH TABLE KEY` of the statements [`READ TABLE itab`](ABAPREAD_TABLE.html) and [`DELETE TABLE itab`](ABAPDELETE_ITAB_LINE.html) are now [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html).
-   The work area `wa` of the following statements was changed from functional operand positions to [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html):

-   [`APPEND wa TO ...`](ABAPAPPEND_LINESPEC.html)
-   [`INSERT wa INTO ...`](ABAPINSERT_ITAB_LINESPEC.html)
-   [`MODIFY ... FROM wa ...`](ABAPMODIFY_ITAB_SINGLE.html)

-   The internal table `itab` specified in the statements [`READ TABLE itab ...`](ABAPREAD_TABLE.html) and [`LOOP AT itab ...`](ABAPLOOP_AT_ITAB.html) is now a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).
-   In the statement [`SORT itab`](ABAPSORT_ITAB.html), the internal table `(otab)` can now be specified for dynamic sorts as the result of an expression or functional method call.

-   The operand positions for formal parameters of the statement [`RAISE EVENT`](ABAPRAISE_EVENT.html) are now [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). [Functions and expressions](ABENTYPING_ARITH_EXPR.html) can now also be passed to event handlers as actual parameters.
-   `oref` specified after [`SET HANDLER ... FOR`](ABAPSET_HANDLER_INSTANCE.html) is now a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

-   [`oref`](ABAPMESSAGE_MSG.html) is now a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).
-   [`text`](ABAPMESSAGE_TEXT.html) is now a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html).
-   `dobj` through `dobj4` after [`WITH`](ABAPMESSAGE.html) are now [character-like expression positions](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) or [functional operand positions](ABENFUNCTIONAL_POSITION_GLOSRY.html).

-   A [built-in function](ABENBUILTIN_FUNCTION_GLOSRY.html), a [functional method call](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) or [method chaining](ABENMETHOD_CHAINING_GLOSRY.html), or a [constructor expression](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html) If the return value/result meets the conditions for `dobj`.
-   A [string expression](ABENSTRING_EXPRESSION_GLOSRY.html).

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html