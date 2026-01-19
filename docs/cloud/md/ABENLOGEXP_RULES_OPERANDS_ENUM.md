---
title: "ABENLOGEXP_RULES_OPERANDS_ENUM"
description: |
  ABENLOGEXP_RULES_OPERANDS_ENUM - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOGEXP_RULES_OPERANDS_ENUM.htm"
abapFile: "ABENLOGEXP_RULES_OPERANDS_ENUM.html"
keywords: ["if", "case", "data", "types", "ABENLOGEXP", "RULES", "OPERANDS", "ENUM"]
---

An operand with an [enumerated type](ABENENUM_TYPE_GLOSRY.html) can only be compared with [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) of the same enumerated type. There is no implicit conversion. The values of the operands are compared according to the [rules](ABENLOGEXP_RULES_OPERANDS.html) that apply to the elementary [base type](ABENBASE_TYPE_GLOSRY.html) of the enumerated type.

An operand of an enumerated type cannot be compared directly with a character-like operand of type `c` or `string`, even though there is a [conversion rule](ABENCONVERSION_ENUMERATED.html) for this case. In this case, helper variables or the conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) can be used to perform an explicit conversion.

In the first two comparisons, [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) of the enumerated type `number` are compared with each other. The third comparison shows how an operand with an enumerated type can be converted to be compared like a character.

TYPES: \\n BEGIN OF ENUM number, \\n n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, \\n END OF ENUM number. \\n\\ \\nDATA: num2 TYPE number VALUE n2, \\n num5 TYPE number VALUE n5. \\n\\ \\nIF num2 < num5. \\n cl\_demo\_output=>write( |num2 < num5| ). \\nENDIF. \\n\\ \\nIF num2 > n0. \\n cl\_demo\_output=>write( |num2 > n0| ). \\nENDIF. \\n\\ \\nIF CONV string( n7 ) = \`N7\`. \\n cl\_demo\_output=>write( |CONV string( n7 ) = \`N7\`| ). \\nENDIF. \\n\\ \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abenlogical\_expr\_func.html abenlogexp.html abenlogexp\_comp.html abenlogexp\_rules.html