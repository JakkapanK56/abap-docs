---
title: "ABENLOGEXP_RULES_OPERANDS"
description: |
  ABENLOGEXP_RULES_OPERANDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_RULES_OPERANDS.htm"
abapFile: "ABENLOGEXP_RULES_OPERANDS.html"
keywords: ["do", "if", "method", "data", "types", "ABENLOGEXP", "RULES", "OPERANDS"]
---

If `operand1` and `operand2` of a [comparison expression](ABENCOMPARISON_EXPRESSION_GLOSRY.html) have elementary data types, they are used to determine a common elementary [comparison type](ABENCOMPARISON_TYPE_GLOSRY.html). Every comparison type has [comparison rules](ABENCOMPARISON_TYPE.html) used to perform the comparison. Operands that are not compatible with the comparison type are converted to this type. The following sections show how the comparison type is determined for the various comparisons:

The return values or results of functional methods, built-in functions, constructor expressions, and table expressions are handled like elementary data objects.

-   [Comparison type of elementary data objects](ABENLOGEXP_RULES_OPERANDS_DOBJ.html)
-   [Comparison type of calculation expressions](ABENLOGEXP_RULES_EXPRESSIONS.html)

-   Previous assignments to helper variables of certain types or the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) can be used to force comparison types and conversions other than a direct comparison of the operands.
-   It should be noted that some built-in functions operate have the same effect as an [arithmetic expression](ABENARITHMETIC_EXPRESSION_GLOSRY.html) if they are passed a [numeric expression](ABENNUMERICAL_EXPRESSION_GLOSRY.html) as an argument.
-   For [enumerated types](ABENENUM_TYPE_GLOSRY.html), a special [rule](ABENLOGEXP_RULES_OPERANDS_ENUM.html) applies.

abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html