---
title: "ABENLOGEXP_ANY_OPERAND"
description: |
  ABENLOGEXP_ANY_OPERAND - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_ANY_OPERAND.htm"
abapFile: "ABENLOGEXP_ANY_OPERAND.html"
keywords: ["loop", "do", "if", "data", "types", "ABENLOGEXP", "ANY", "OPERAND"]
---

The following table shows the binary comparison operators for comparisons between two operands (data objects or return values or [calculation expressions](ABENCALCULATION_EXPRESSION_GLOSRY.html)) of any data types in [comparison expressions](ABENCOMPARISON_EXPRESSION_GLOSRY.html).

The values are compared in accordance with the [comparison rules](ABENLOGEXP_RULES.html).

Logical expression as a termination condition of an unlimited [`DO`](ABAPDO.html) loop.

-   The operators `=`, `<>`, `<`, `>`, `<=`, and `>=` are equivalent to `EQ`, `NE`, `LT`, `GT`, `LE`, and `GE` respectively. It is recommended that only one or the other set of operators is used within the context of a program. If in doubt, the variant with the characters `=`, `<`, and `>` is considered to be more up-to-date, however this also contributes to the overload of these characters. Comparison operators that consist of two letters, on the other hand, are better suited to other comparison operators such as [`CO`](ABENLOGEXP_STRINGS.html), [`CN`](ABENLOGEXP_STRINGS.html), and so on, for which there are no alternative forms.
-   Due to the [comparison rules](ABENLOGEXP_RULES.html), the size comparisons shown here are not suitable for determining the textual order of character-like data objects.

CONSTANTS limit TYPE i VALUE 1000. \\nDATA variable TYPE i. \\n\\ \\n... \\n\\ \\nDO. \\n IF variable > limit. \\n EXIT. \\n ENDIF. \\n ... \\nENDDO. `**operator**` **Meaning** `=`, `EQ` Equal: True, if the value of `operand1` is equal to the value of `operand2`. `<>`, `NE` Not Equal: True, if the value of `operand1` is not equal to the value of `operand2`. `<`, `LT` Less Than: True, if the value of `operand1` is less than the value of `operand2`. `>`, `GT` Greater Than: True, if the value of `operand1` is greater than the value of `operand2`. `<=`, `LE` Less Equal: True, if the value of `operand1` is less than or equal to the value of `operand2`. `>=`, `GE` Greater Equal: True, if the value of `operand1` is greater than or equal to the value of `operand2`. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_op.html abenlogexp\_compare\_all.html