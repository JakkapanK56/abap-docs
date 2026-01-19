---
title: "ABENSTRING_TEMPLATES"
description: |
  ABENSTRING_TEMPLATES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_TEMPLATES.htm"
abapFile: "ABENSTRING_TEMPLATES.html"
keywords: ["loop", "do", "if", "case", "data", "ABENSTRING", "TEMPLATES"]
---

``|[[`literal_text`](ABENSTRING_TEMPLATES_LITERALS.html)][[`embedded_expressions`](ABENSTRING_TEMPLATES_EXPRESSIONS.html)][[`control_characters`](ABENSTRING_TEMPLATES_SEPARATORS.html)]|``

A string template is enclosed by two characters `|` and creates a character string that is used by the string expression at the operand position of the string template. The characters in this character string are determined by any sequence of the following syntax elements of the string template:

A string template that starts with `|` must be closed with `|` within the same line of source code. The only exceptions to this rule are line breaks in [embedded expressions](ABENSTRING_TEMPLATES_EXPRESSIONS.html). However, a string template is not subject to any length restrictions. The [literal operator](ABENLITERAL_OPERATOR_GLOSRY.html)\\ `&` or the [concatenation operator](ABENCONCATENATION_OPERATOR_GLOSRY.html)\\ `&&` can be used to combine multiple string templates into a single string template. A string template can be defined across multiple lines of source code and be given [comments](ABENCOMMENT_GLOSRY.html).

String template with literal text and an embedded expression. The result is made up of the content of the literal text and the result of the embedded expression.

The following section of source code shows three identical string templates, all of which represent the character string *Hello World!*. The first string template contains the entire character string as literal text. The next two string expressions distribute the literal text across multiple parts of the string template and these are combined into the same character string using the literal operator `&` as in the first string template.

-   Literal text [`literal_text`](ABENSTRING_TEMPLATES_LITERALS.html)
-   Embedded expressions [`embedded_expressions`](ABENSTRING_TEMPLATES_EXPRESSIONS.html)
-   Control characters [`control_characters`](ABENSTRING_TEMPLATES_SEPARATORS.html)

-   To display the delimiters `|` within [literal text](ABENSTRING_TEMPLATES_LITERALS.html) of a string template, it must be prefixed with the escape symbol `\\`.
-   Using the string function [`escape`](ABENESCAPE_FUNCTIONS.html), all special characters for string templates can be put in front of their escape character.
-   When string templates are combined, the literal operator [`&`](ABENLITERAL_OPERATOR.html) behaves differently than with literals. This operator is executed at runtime in the same way as the concatenation operator [`&&`](ABENSTRING_OPERATORS.html) and not just once during compilation. This means, however, that the restriction of 255 characters for literals no longer applies. The two combinations
-   `|...| & |...|`
-   `|...| && |...|`
-   are identical for string templates. For purely literal content, they are the same as
-   `` `...` && `...` ``
-   However, they are different to
-   `` `...` & `...` ``
-   `'...' & '...'`
-   `'...' && '...'`
-   In the first two cases, a length restriction of 255 characters applies. In the third case, trailing blanks are ignored.
-   If on the right side of an [assignment](ABENEQUALS_STRING_EXPR.html), strings are appended to a variable specified with the type `string` on the left side of the assignment, the variable is used directly in [specific cases](ABENSTRING_EXPR_PERFO.html) without producing an interim result. It should be ensured that this optimization is not undone, especially in loops.

FINAL(result) = |Hello \\{ sy-uname \\}!|. FINAL(result1) = |Hello World!|. \\n\\ \\nFINAL(result2) = |Hello| & | | & |World| & |!|. \\n\\ \\nFINAL(result3) = |Hello| & "sub template 1 \\n | | & \\n |World| & "sub template 3 \\n\* sub template 4: \\n |!|. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html