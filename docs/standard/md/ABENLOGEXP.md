---
title: "ABENLOGEXP"
description: |
  ABENLOGEXP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP.htm"
abapFile: "ABENLOGEXP.html"
keywords: ["do", "if", "case", "method", "data", "internal-table", "ABENLOGEXP"]
---

[Short Reference](ABENLOG_EXP_SHORTREF.html)

 `...   rel_exp      |\ [NOT] log_exp [AND|OR|EQUIV log_exp] ...`

A logical expression formulates a condition for operands. The result of a logical expression `log_exp` is a [truth value](ABENTRUTH_VALUE_GLOSRY.html), which means it can be true or false.

A logical expression is either a single [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html)\\ `rel_exp`, or an expression combined from one or more logical expressions with the [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html)\\ [`NOT`, `AND`, `OR`, `EQUIV`](ABENLOGEXP_BOOLE.html) where [parentheses](ABENLOGEXP_BRACKET.html) are possible. An atomic component of a compound logical expression is always one of the following relational expressions:

Logical expressions can be used as follows:

Logical expression that is composed of a predicate expression, a comparison expression, and a predicate function using the Boolean operator `AND`, in a control statement.

-   [Comparisons](ABENCOMPARISON_GLOSRY.html)

-   [Comparison expressions](ABENLOGEXP_COMP.html)

-   [Predicates](ABENPREDICATE_GLOSRY.html)

-   [Predicate expressions](ABENPREDICATE_EXPRESSIONS.html)
-   [Predicate functions](ABENPREDICATE_FUNCTIONS.html)
-   [Predicative method calls](ABENPREDICATIVE_METHOD_CALLS.html)

-   To formulate conditions in [control statements](ABENCONTROL_STATEMENT_GLOSRY.html) and other statements used to control the program flow.
-   in [conditional expressions](ABENCONDITIONAL_EXPRESSION_GLOSRY.html)
-   As an argument of a [Boolean function](ABENBOOLE_FUNCTION_GLOSRY.html) to represent a truth value in a character-like or byte-like data object.
-   In `WHERE` conditions of [processing statements](ABENTABLE_PROCESSING_STATEMENTS.html) for [internal tables](ABENINTERNAL_TABLE_GLOSRY.html).

-   The operand positions `operand` of most relational expressions are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html), which means that, depending on the expression, [data objects](ABENDATA_OBJECT_GLOSRY.html), [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html), [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html), [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html), [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), or [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) can be specified.
-   If [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) are specified as operands of a relational expression in a logical expression, they are executed from left to right and from inside to outside before the relational expression is evaluated. In the case of [combination](ABENLOGEXP_BOOLE.html) of relational expressions, this applies to each individual relational expression and not to the entire logical expression.
-   Since ABAP does not recognize Boolean data objects for the truth values true or false, the result of a logical expression cannot currently be directly assigned to a data object, as is possible for [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html). Instead, the return value of a [Boolean function](ABENBOOLE_FUNCTION_GLOSRY.html) can be used.
-   Logical expressions cannot be mixed with [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html). However, a logical expression can be listed as an argument of a [Boolean function](ABENBOOLE_FUNCTION_GLOSRY.html) in a suitable calculation expression.
-   The program `DEMO_EXPRESSIONS` also shows examples of how to use logical expressions.

IF p1 IS SUPPLIED AND \\n p1 <= upper\_limit AND \\n matches( val = p2 pcre = regular\_expression ). \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html