---
title: "ABENLOGEXP_COMP"
description: |
  ABENLOGEXP_COMP - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_COMP.htm"
abapFile: "ABENLOGEXP_COMP.html"
keywords: ["select", "if", "method", "data", "ABENLOGEXP", "COMP"]
---

``... \{ operand1   [`\{=|EQ|<>|NE|>|GT|<|LT|>=|GE|<=|LE\}`](ABENLOGEXP_ANY_OPERAND.html)\                 |\ [`\{CO|CN|CA|NA|CS|NS|CP|NP\}`](ABENLOGEXP_STRINGS.html)\                 |\ [`\{BYTE-CO|BYTE-CN|BYTE-CA|BYTE-NA|BYTE-CS|BYTE-NS\}`](ABENLOGEXP_BYTES.html)\                 |\ [`\{O|Z|M\}`](ABENLOGEXP_BITMASKS.html) operand2 \}\    |\ \{\ [`operand [NOT] BETWEEN operand1 AND operand2`](ABENLOGEXP_BETWEEN.html)\ \}\    |\ \{\ [`operand [NOT] IN range_tab`](ABENLOGEXP_SELECT_OPTION.html)\ \}  ...``

In [Comparison expressions](ABENCOMPARISON_EXPRESSION_GLOSRY.html), two or more operands are combined to a [relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) using a [comparison operator](ABENCOMP_OPERATOR_GLOSRY.html). A [truth value](ABENTRUTH_VALUE_GLOSRY.html) is determined as the result of the comparison.

`operand1`, `operand2`, and `operand` are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html), which means that the following can be specified:

When a built-in function, a functional method, or a constructor expression is specified, its return value or result is used as an operand. When a calculation expression is specified, its result is used. A single operand can be compared with all single operands listed in the [comparison rules for single operands](ABENLOGEXP_RULES_OPERANDS.html). A calculation expression can be compared with all single operands or comparisons listed in the [comparison rules for calculation expressions](ABENLOGEXP_RULES_EXPRESSIONS.html).

Typical use of a logical expression, here a comparison of a built-in function with a literal, in an `IF` statement.

-   The operands are compared using one of the [comparison operators](ABENLOGEXP_OP.html) shown here.
-   The comparisons take place according to [comparison rules](ABENLOGEXP_RULES.html).

-   [Data objects](ABENDATA_OBJECT_GLOSRY.html)
-   [Built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html)
-   [Functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html)
-   [Calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html)
-   [Constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html)
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html)

DATA flag TYPE c LENGTH 1. \\n\\ \\n... \\n\\ \\nIF to\_upper( flag ) = 'X'. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html