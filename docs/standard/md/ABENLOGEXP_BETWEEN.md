---
title: "ABENLOGEXP_BETWEEN"
description: |
  ABENLOGEXP_BETWEEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_BETWEEN.htm"
abapFile: "ABENLOGEXP_BETWEEN.html"
keywords: ["data", "ABENLOGEXP", "BETWEEN"]
---

`... operand [NOT] BETWEEN operand1 AND operand2 ...`

A comparison expression with the comparison operator `BETWEEN` checks the assignment of an interval. The comparison expression checks whether the content of an operand `operand` is within a closed interval that is restricted by the operands `operand1` and `operand2`. The ternary comparison expression is equivalent to the following combination of two binary comparison expressions:

`... [[NOT](ABENLOGEXP_BOOLE.html)] ( operand [>=](ABENLOGEXP_ANY_OPERAND.html) operand1 [AND](ABENLOGEXP_BOOLE.html) operand [<=](ABENLOGEXP_ANY_OPERAND.html) operand2 ) ...`

All operands are [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html) and the usual [comparison rules](ABENLOGEXP_RULES.html) apply.

Check whether today is a working day and assigning the result to a variable declared inline.

FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ). \\nFINAL(day\_of\_week) = ( 5 + date MOD 7 ) MOD 7 + 1. \\nDATA(work\_day\_flag) = xsdbool( day\_of\_week BETWEEN 1 AND 5 ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_op.html abenlogexp\_compare\_all.html