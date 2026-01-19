---
title: "ABENFOR_CONDITIONAL"
description: |
  ABENFOR_CONDITIONAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFOR_CONDITIONAL.htm"
abapFile: "ABENFOR_CONDITIONAL.html"
keywords: ["insert", "loop", "do", "while", "if", "case", "method", "data", "internal-table", "field-symbol", "ABENFOR", "CONDITIONAL"]
---

``... FOR var = rhs [THEN expr] UNTIL|WHILE [`log_exp`](ABENLOGEXP.html)\ [[`let_exp`](ABAPLET.html)] ...``

This syntax form of an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) executes a conditional iteration.

The operands of the iteration expression must be specified as follows:

The variables declared in `FOR` expressions are local. The local data of all outer `FOR` expressions can be used when their values are set. The iteration variable and any helper variables can be used after the `FOR` expression, either in additional subexpressions or to construct the result.

The system field `sy-index` is not set by a `FOR` expression.

The example creates a string from the numbers 0 to 9.

[Examples of Iteration Expressions](ABENITERATION_EXPRESSIONS_ABEXAS.html)

-   If it is used in a constructor expression with the reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html), the reduction result is created in the iteration steps.
-   If it is used in a constructor expression with the instance operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) or with the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for internal tables, new table lines are created in the iteration steps and inserted into the tabular result.

-   First, a local helper variable `var` must be declared as an iteration variable and assigned a start value `rhs` with `=`. The same applies to the namespace and visibility of `var` as to the helper fields declared in a [`LET` expression](ABAPLET.html). The syntax of the declaration is exactly the same as in a [`LET` expression](ABAPLET.html) and it follows the rules that apply here.
-   The next position depends on the data type of the iteration variable `var`:

-   If the iteration variable `var` does not have a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) and is not of type `d` or `t`, an expression `expr` must be specified after `THEN`. The result of this expression can be converted into a data type of `var`. The expression is calculated for every iteration and its result is assigned to the iteration variable `var`. This is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).
-   If the iteration variable `var` has a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html), or is of type `d` or `t`, `THEN expr` is optional. If `THEN expr` is not specified explicitly, `THEN var + 1` is added implicitly or the value of the iteration variable is increased by 1 for every iteration.

-   Afterwards, a termination condition [`log_exp`](ABENLOGEXP.html) must be specified after `UNTIL` or `WHILE`. `log_exp` is any [logical expression](ABENLOGICAL_EXPRESSION_GLOSRY.html) whose operands can be any data objects visible at this position and any calls possible here.

-   If the termination condition is specified after `UNTIL`, the logical expression `log_exp` is evaluated after every iteration step. If the result of the logical expression is true, the iteration is ended. At least one iteration step is executed.
-   If the termination condition is specified after `WHILE`, the logical expression `log_exp` is evaluated before every iteration step. If the result of the logical expression is false, the iteration is terminated. If the result of the logical expression is already false before the first iteration step, no iteration steps are executed.

-   An optional `LET` expression [`let_exp`](ABAPLET.html) can be specified at the end to define local helper fields that can be used in the context of the `FOR` loop. The helper fields are filled in every iteration step and can be used to construct the result.

-   Usually, the expression `expr` (after `THEN`) and the termination condition `log_exp` after `UNTIL` or `WHILE` depend on the iteration variable `var`, but this not a prerequisite. The value of the iteration variable or the termination condition can also be determined in other ways. Status changes, for example, can be queried using method calls.
-   Usually, a termination condition after `UNTIL` is preferable to a termination condition after `WHILE` in all cases where the termination condition does not have to be checked before the first iteration step.
-   In many cases, iteration expressions for conditional iterations can replace [`DO`](ABAPDO.html) and [`WHILE`](ABAPWHILE.html) loops, which construct values and internal tables.
-   Multiple sequential `FOR` expressions with different variants, including the [tabular iterations](ABENFOR_ITAB.html), can be specified in a constructor expression. These expressions then work in the same way as nested loops.
-   Unlike in a [`LET` expression](ABAPLET.html), a local field symbol cannot be declared instead of the iteration variable `var`.

cl\_demo\_output=>display( \\n REDUCE string( INIT s = \`\` \\n FOR i = 1 UNTIL i > 10 \\n NEXT s &&= |\\{ i - 1 \\}| ) ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html abenfor.html