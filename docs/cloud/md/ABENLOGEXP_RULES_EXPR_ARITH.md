---
title: "ABENLOGEXP_RULES_EXPR_ARITH"
description: |
  ABENLOGEXP_RULES_EXPR_ARITH - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_RULES_EXPR_ARITH.htm"
abapFile: "ABENLOGEXP_RULES_EXPR_ARITH.html"
keywords: ["do", "if", "data", "types", "ABENLOGEXP", "RULES", "EXPR", "ARITH"]
---

[Arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) are possible as operands of comparison expressions using [comparison operators for all data types](ABENLOGEXP_COMPARE_ALL.html). It is possible to compare an [arithmetic expression](ABAPCOMPUTE_ARITH.html) with a single operand of a [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) or with another arithmetic expression.

The [calculation type](ABENCALCULATION_TYPE_GLOSRY.html) of all arithmetic expressions of a comparison expression is determined from all single operands of the entire comparison expression as well as by any operators `**` in accordance with the [usual rules](ABENARITH_TYPE.html). The result of the involved arithmetic expressions involved exists in the calculation type. This calculation type is also the [comparison type](ABENCOMPARISON_TYPE_GLOSRY.html) whose [comparison rules](ABENCOMPARISON_TYPE.html) are used to perform the comparison. If necessary, single operands are [converted](ABENNUMERIC_SOURCE_FIELDS.html) to the comparison type before comparison.

If multiple relational expressions are combined into a logical expression using [Boolean operators](ABENLOGEXP_BOOLE.html), the calculation type or comparison type are determined separately for each relational expression.

The following comparisons are both true. In the first one, the calculation type is `i` and the result of the calculation is rounded to 1. In the second, the calculation type is `decfloat34` and there is no rounding.

-   If a conversion error occurs in an arithmetic expression in a relational expression, the associated exception can be handled differently than in direct [comparisons of data objects](ABENLOGEXP_RULES_OPERANDS_DOBJ.html).
-   To compare an arithmetic expression with a single non-numeric operand, the operand can be prefixed with the `+` sign to turn it into an arithmetic expression.
-   An arithmetic expression cannot be specified as the operand of a [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html).

IF 4 / 3 = 1. \\n cl\_demo\_output=>write( '4 / 3 = 1' ). \\nENDIF. \\n\\ \\nIF 4 / 3 > CONV decfloat34( 1 ). \\n cl\_demo\_output=>write( '4 / 3 > CONV decfloat34( 1 )' ). \\nENDIF. \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html abenlogexp\_rules\_expressions.html