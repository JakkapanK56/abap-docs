---
title: "ABENLOGEXP_RULES_EXPRESSIONS"
description: |
  ABENLOGEXP_RULES_EXPRESSIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_RULES_EXPRESSIONS.htm"
abapFile: "ABENLOGEXP_RULES_EXPRESSIONS.html"
keywords: ["select", "if", "data", "ABENLOGEXP", "RULES", "EXPRESSIONS"]
---

Any [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) can be specified as an operand of a [comparison expression](ABENCOMPARISON_EXPRESSION_GLOSRY.html).

The table below summarizes the combinations in which calculation expressions can be listed in comparison expressions:

The [comparison type](ABENCOMPARISON_TYPE_GLOSRY.html) is determined differently depending on the type of calculation expression.

In comparison expressions with the comparison operators [`BETWEEN`](ABENLOGEXP_BETWEEN.html) and [`IN`](ABENLOGEXP_SELECT_OPTION.html), which are converted internally to combinations of comparisons with the binary operators above, the rules of the respective comparisons apply.

-   [Comparison type of arithmetic expressions](ABENLOGEXP_RULES_EXPR_ARITH.html)
-   [Comparison type of string expressions](ABENLOGEXP_RULES_EXPR_CHAR.html)
-   [Comparison type of bit expressions](ABENLOGEXP_RULES_EXPR_BIT.html)

-   [Relational expression](ABENRELATIONAL_EXPRESSION_GLOSRY.html) cannot yet be compared. Instead, they can be combined using [Boolean operators](ABENBOOLEAN_OPERATOR_GLOSRY.html), where the combination with the operator [`EQUIV`](ABENLOGEXP_EQUIV.html) corresponds to the comparison of the resulting [truth values](ABENTRUTH_VALUE_GLOSRY.html) for equality.
-   A [calculation expression](ABENCALCULATION_EXPRESSION_GLOSRY.html) cannot be specified as the operand of a [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html).

**One side** **Comparison operator** **Other side** Single operand with [numeric data type](ABENNUMERIC_DATA_TYPE_GLOSRY.html) or [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html)\\ [`=`, `EQ`, `<>`, `NE`, `<`, `LT`, `>`, `GT`, `<=`, `LE`, `>=`, `GE`](ABENLOGEXP_ANY_OPERAND.html) \\ [Arithmetical expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) Single operand with any [elementary data type](ABENELEMENTARY_DATA_TYPE_GLOSRY.html) or [string expression](ABENSTRING_EXPRESSION_GLOSRY.html) [`=`, `EQ`, `<>`, `NE`, `<`, `LT`, `>`, `GT`, `<=`, `LE`, `>=`, `GE`](ABENLOGEXP_ANY_OPERAND.html), [`CO`, `CN`, `CA`, `NA`, `CS`, `NS`, `CP`, `NP`](ABENLOGEXP_STRINGS.html) [String expression](ABENSTRING_EXPRESSION_GLOSRY.html) Single operand with [byte-like data type](ABENBYTE_LIKE_DATA_TYP_GLOSRY.html) or [bit expression](ABENBIT_EXPRESSION_GLOSRY.html) \\ [`=`, `EQ`, `<>`, `NE`, `<`, `LT`, `>`, `GT`, `<=`, `LE`, `>=`, `GE`](ABENLOGEXP_ANY_OPERAND.html), [`BYTE-CO`, `BYTE-CN`, `BYTE-CA`, `BYTE-NA`, `BYTE-CS`, `BYTE-NS`](ABENLOGEXP_BYTES.html), [`O`, `Z`, `M`](ABENLOGEXP_BITMASKS.html)\\ \\ [Bit expression](ABENBIT_EXPRESSION_GLOSRY.html) abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html