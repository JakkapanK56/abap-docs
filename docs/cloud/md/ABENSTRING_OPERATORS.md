---
title: "ABENSTRING_OPERATORS"
description: |
  ABENSTRING_OPERATORS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_OPERATORS.htm"
abapFile: "ABENSTRING_OPERATORS.html"
keywords: ["loop", "do", "if", "case", "method", "data", "types", "ABENSTRING", "OPERATORS"]
---

`... operand1 && operand2 ...`

The [concatenation operator](ABENCONCATENATION_OPERATOR_GLOSRY.html)\\ `&&` concatenates two operands in a string expression into one character string.

The operand positions `operand` are enhanced [character-like expression positions](ABENSTRING_EXPRESSION_POSITIONS.html), which means that [character-like data objects](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html), [string expressions](ABENSTRING_EXPRESSION_GLOSRY.html), and [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html), or [functional methods](ABENFUNCTIONAL_METHOD_GLOSRY.html) and [method chainings](ABENMETHOD_CHAINING_GLOSRY.html) whose return value has a [character-like data type](ABENCHARLIKE_DATA_TYPE_GLOSRY.html), can be specified. Furthermore, apart from built-in functions, generic expressions with non-character-like data types can also be specified, which can be converted to the type `string`. The operand `operand` must be elementary. Structures with character-like-only flat components cannot be specified.

In the case of character-like operands with a fixed length, trailing blanks are ignored. An operand that does not have a character-like data type is regarded implicitly as an [embedded expression](ABENEMBEDDED_EXPRESSION_GLOSRY.html) of a [string template](ABENSTRING_TEMPLATE_GLOSRY.html) and formatted as a text string before the concatenation in accordance with the associated [predefined format](ABENSTRING_TEMPLATES_PREDEF_FORMAT.html).

Concatenation of four operands into the character string *Hello world!*. The last operand is a [string template](ABENSTRING_TEMPLATE_GLOSRY.html) that has only literal content.

This example demonstrates that a non-character-like operand in a concatenation is handled like an [embedded expression](ABENEMBEDDED_EXPRESSION_GLOSRY.html) and is not converted in accordance with the [conversion rules](ABENCONVERSION_ELEMENTARY.html). After handling as an embedded expression, the minus sign is placed to the left of the number. After the conversion, it is placed to the right of the number.

-   In particular, [string templates](ABENSTRING_TEMPLATES.html) can be specified as operands.
-   [Character string functions](ABENCSTRING_FUNCTION_GLOSRY.html) with character-like return values are particularly suitable when specifying built-in functions as operands.
-   The concatenation operator `&&` must not be confused with the [literal operator `&`](ABENLITERAL_OPERATOR.html), which combines two [character literals](ABENCHARACTER_LITERAL_GLOSRY.html) to one literal. The literal operator is generally used if a literal is to be defined across multiple program lines. The operator is executed only once when the program is compiled, and trailing blanks of character literals are always respected. A string expression with a concatenation operator, on the other hand, is recalculated each time, like all expressions, and can be used to concatenate any number of character-like operands.
-   If on the right side of an [assignment](ABENEQUALS_STRING_EXPR.html), strings are appended using `&&` to a variable specified with the type `string` on the left side of the assignment, the variable is used directly in [some cases](ABENSTRING_EXPR_PERFO.html) without producing an interim result. It should be ensured that this optimization is preserved, especially in loops.
-   It should be noted that the handling of non-character-like operands as [embedded expressions](ABENEMBEDDED_EXPRESSION_GLOSRY.html) can have different results than simple [conversions](ABENCONVERSION_ELEMENTARY.html).
-   A calculation assignment with the operator [`&&=`](ABENCALCULATION_ASSIGNMENT_STRING.html) can be used as a short form for assignments of concatenations.

DATA text TYPE string VALUE \`Hello\`. \\n\\ \\ntext = text && \` \` && 'world' && |!|. ASSERT \`\` && -1 \\n = \`\` && |\\{ -1 \\}|. \\n\\ \\nASSERT \`\` && -1 \\n <> \`\` && CONV string( -1 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html