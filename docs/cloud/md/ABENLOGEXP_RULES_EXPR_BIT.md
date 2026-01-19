---
title: "ABENLOGEXP_RULES_EXPR_BIT"
description: |
  ABENLOGEXP_RULES_EXPR_BIT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_RULES_EXPR_BIT.htm"
abapFile: "ABENLOGEXP_RULES_EXPR_BIT.html"
keywords: ["if", "data", "types", "ABENLOGEXP", "RULES", "EXPR", "BIT"]
---

[Bit expressions](ABENBIT_EXPRESSION_GLOSRY.html) can be used as operands of comparison expressions with the following:

A [bit expression](ABAPCOMPUTE_BIT.html) can be compared with a single operand of a [byte-like data type](ABENBYTE_LIKE_DATA_TYP_GLOSRY.html) or with a different bit expression.

Each bit expression of a comparison expression is calculated based on the length of the single longest operand, for which shorter operands are padded on the right with hexadecimal 0. All operands of the entire comparison expression are considered. The result of the involved bit expressions is contained in this length and, if necessary, a single operand is padded with hexadecimal 0 on the right before comparison. The comparison is then performed according to the [comparison rule](ABENCOMPARISON_TYPE.html) for a byte-like [comparison type](ABENCOMPARISON_TYPE_GLOSRY.html).

A bit expression cannot be specified as the operand of a [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html).

This example shows the different ways lengths are handled in comparisons between byte fields and bit expressions. The bit expression in the first comparison is evaluated with length 4 and produces the value hexadecimal 1100. The single operand on the right is lengthened to the value hexadecimal 1100 by filling with hexadecimal 00 and the equality comparison is true. In the second comparison, on the other hand, the operand on the left is converted to the type `xstring` and the operand on the right is not lengthened, which is why the inequality comparison is true.

-   [Comparison operators for all data types](ABENLOGEXP_COMPARE_ALL.html)
-   [Comparison operators for byte-like data types](ABENLOGEXP_BYTES.html)
-   [Comparison operators for bit patterns](ABENLOGEXP_BITMASKS.html)

IF x\`FFFF\` BIT-AND x\`11\` = xstring\`11\`. \\n ... \\nENDIF. \\n\\ \\nIF x\`1100\` <> xstring\`11\`. \\n ... \\nENDIF. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html abenlogexp\_rules\_operands.html abenlogexp\_rules\_expressions.html