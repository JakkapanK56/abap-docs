---
title: "ABAPCOMPUTE_STRING"
description: |
  ABAPCOMPUTE_STRING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCOMPUTE_STRING.htm"
abapFile: "ABAPCOMPUTE_STRING.html"
keywords: ["loop", "do", "if", "case", "data", "types", "ABAPCOMPUTE", "STRING"]
---

``... \{\ [`|string_tmpl|`](ABENSTRING_TEMPLATES.html)\ \}\    |\ \{ operand1 [`&&`](ABENSTRING_OPERATORS.html) operand2 [[`&&`](ABENSTRING_OPERATORS.html)  operand3 ... ]\ \} ...``

A string expression formulates an operation (calculation) with character-like operands. The result of a string expression is a character string. A string expression consists of

String expressions can occur in the read positions of [certain statements](ABENEXPRESSION_POSITIONS.html) and, in particular, on the right side of an [assignment](ABENEQUALS_STRING_EXPR.html) with the [assignment operator `=`](ABENEQUALS_OPERATOR.html).

The operands of string expressions must be elementary and convertible to [character-like data types](ABENCHARLIKE_DATA_TYPE_GLOSRY.html). Structures with purely character-like flat components cannot, however, be specified.

If [constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html) are specified as operands of string expressions, their data type is not determined by the string expression. The `#` character can be specified for the data type of the constructor expression only if the type can be determined from the constructor expression itself.

Output of a string expression. The expression concatenates a text string literal with a string template that contains an embedded expression.

-   exactly one [string template](ABENSTRING_TEMPLATE_GLOSRY.html)\\ [`|string_tmpl|`](ABENSTRING_TEMPLATES.html) or
-   two or more operands `operand1`, `operand2` ... that are concatenated as a character string using the [string operator](ABENSTRING_OPERATOR_GLOSRY.html)\\ [`&&`](ABENSTRING_OPERATORS.html), where one of the operands can itself be a string template.

-   String expressions and [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.html) cannot be mixed. Arithmetic expressions can, however, also be specified as [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html) of [string templates](ABENSTRING_TEMPLATES.html). Furthermore, in the [formatting options](ABAPCOMPUTE_STRING_FORMAT_OPTIONS.html) of embedded expressions or [string functions](ABENSTRING_FUNCTIONS.html) in operand positions, arithmetic expressions can be passed as arguments.
-   The conversion operator [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) can be applied to a structure with character-like-only components to use it as an operand of a string expression.
-   Due to their special [conversion rules](ABENCONVERSION_ENUMERATED.html), [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html) can be used as operands of string expressions regardless of their base type, which can produce unwanted results. This is why an extended program check message can be produced in this case. A special rule for the conversion operator [`CONV`](ABENCONV_CONSTRUCTOR_ENUM.html) can be implemented to use the name of the enumerated object instead of the actual enumerated value.
-   If, on the right side of an [assignment](ABENEQUALS_STRING_EXPR.html), strings are appended to a variable specified with the type `string` on the left side of the assignment, the variable is used directly in [specific cases](ABENSTRING_EXPR_PERFO.html) without producing an interim result. It should be ensured that this optimization is not undone, especially in loops.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nout->write( \\n\\ \\n \`Hello \` && |\\{ sy-uname \\}!| \\n\\ \\n ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html