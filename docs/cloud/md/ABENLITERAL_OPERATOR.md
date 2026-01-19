---
title: "ABENLITERAL_OPERATOR"
description: |
  ABENLITERAL_OPERATOR - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLITERAL_OPERATOR.htm"
abapFile: "ABENLITERAL_OPERATOR.html"
keywords: ["while", "if", "data", "ABENLITERAL", "OPERATOR"]
---

`... \{ '...' & '...' [& '...' [...]\ ]\ \}`\\ 
  ``|\ \{ `...` & `...` [& `...` [...]\ ]\ \} ...``

The literal operator `&` can be used to combine two [character literals](ABENUNTYPED_CHARACTER_LITERALS.html) of the same type into a single character literal. The two categories of literals cannot be mixed. As a result, the definition of one literal can span multiple program lines. The content of the resulting literal must match its type and its length must not exceed the associated maximum length.

The literal operator can normally be specified to combine literals in all [read positions](ABENREAD_POSITION_GLOSRY.html). Exceptions to this are literals [specified dynamically in parentheses](ABENOPERANDS_SPECIFYING.html), literals in parenthesized lists separated by commas (here the only relevant operand position is [`WHERE IN`](ABENWHERE_LOGEXP_OPERAND_IN.html)).

Construction of an HTML string from literals.

-   The literal operator cannot be used for [numeric literals](ABENUNTYPED_CHARACTER_LITERALS.html).
-   Apart from character literals, the literal operator can also be used to combine [string templates](ABENSTRING_TEMPLATE_GLOSRY.html).
-   Any trailing blanks in text field literals are respected by the literal operator.
-   When used for literals, the literal operator `&` must not be confused with the [concatenation operator `&&`](ABENSTRING_OPERATORS.html) that can be used in [string expressions](ABENSTRING_EXPRESSION_GLOSRY.html) to concatenate character-like operators. While literals are combined using the literal operator once when a program is compiled, the concatenation operator executes a real operation at runtime and concatenates any number of character-like operands. The trailing blanks of operands with fixed lengths, particularly text field literals, are ignored.
-   Character literals combined using the literal operator `&` are subject to the upper limit of 255 characters. Longer character strings can only be concatenated at runtime, for example using the [concatenation operator `&&`](ABENSTRING_OPERATORS.html).

DATA html TYPE string. \\n\\ \\nhtml = \\n \`\` & \\n \`\` & \\n \`Text\` & \\n \`\` & \\n \`\`. \\n\\ \\ncl\_abap\_browser=>show\_html( html\_string = html ). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abenliteral.html