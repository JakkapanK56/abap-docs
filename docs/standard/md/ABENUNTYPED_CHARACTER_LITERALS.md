---
title: "ABENUNTYPED_CHARACTER_LITERALS"
description: |
  ABENUNTYPED_CHARACTER_LITERALS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUNTYPED_CHARACTER_LITERALS.htm"
abapFile: "ABENUNTYPED_CHARACTER_LITERALS.html"
keywords: ["if", "case", "data", "ABENUNTYPED", "CHARACTER", "LITERALS"]
---

``... 'c[c[c[...]]]' | `[c[c[c[...]]]]` ...``

Character literals can be either text field literals or text string literals.

The following table lists the properties of these literals:

Character literals that span multiple lines are not allowed. The [literal operator](ABENLITERAL_OPERATOR.html)\\ `&` can, however, be used to combine multiple literals with the same type into a literal of this type.

If a text field literal is specified at an operand position at which a [text symbol](ABENTEXT_SYMBOL_GLOSRY.html) is possible, the three-digit identifier `idf` of a text symbol can be appended in round brackets.

`... 'Literal'(idf) ...`

If the text symbol exists in the currently loaded [text pool](ABENTEXT_POOL_GLOSRY.html), then the content of the text symbol is used instead of the literal, otherwise the literal is used. Text string literals cannot be combined with text symbols.

Representation of quotation marks and backquotes in character literals. The first two and the last two literals have the same result.

If quotation marks and backquotes are required within a string, [string templates](ABENSTRING_TEMPLATE_GLOSRY.html) are also suitable, whose special characters are uniformly escaped with `\\`.

-   A text field literal is a string of characters `c` enclosed in single quotes (`'`).
-   A text string literal is a string of characters `c` enclosed in single backquotes (`` ` ``).

-   [Trailing blanks in character literals](ABENTRAILING_BLANKS_LITERALS_GUIDL.html)
-   [Character set in source code](ABENCHARACTER_SET_GUIDL.html)

-   Only text field literals, not text string literals, can be used if a literal is to be combined with a text symbol.
-   Trailing blanks in text field literals use memory, but are [generally](ABENSTRING_PROCESSING_TRAIL_BLANKS.html) ignored in operand positions, like all data objects of the type `c`. In text string literals they are always relevant, as is the case for all data objects of type `string`.
-   Quotation marks can be represented directly in text string literals and backquotes in text field literals.
-   [String templates](ABENSTRING_TEMPLATE_GLOSRY.html), which only contain literal text, behave like text string literals, but are not evaluated until runtime. For standalone operands that are not part of an expression, only real text string literals with backquotes should be used for performance reasons.
-   The characters that can be contained in character literals are restricted to those that can be used in ABAP source code.
-   The maximum length of the content of a character literal is 255. Since the maximum line length in the ABAP Editor is restricted to 255 characters, a literal with 255 characters can never be specified within a single line of a program due to the quotation marks or backquotes. The maximum length of 255 characters can be achieved only by using the [literal operator](ABENLITERAL_OPERATOR.html)\\ `&`.

cl\_demo\_output=>write\_text( 'This is John''s bike' ). \\ncl\_demo\_output=>write\_text( \`This is John's bike\` ). \\ncl\_demo\_output=>write\_text( 'This is a backquote: \`' ). \\ncl\_demo\_output=>write\_text( \`This is a backquote: \`\`\` ). \\ncl\_demo\_output=>display( ). cl\_demo\_output=>display( |Quote: ', Backquote: \`, Bar: \\\\| | ). **Syntax** **Name** **Properties** `'...'` [Text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html) String of characters. The data type is `c` with the length of the enclosed characters, including trailing blanks. A text field literal is between 1 and 255 characters long. There is no empty text field literal: The text field literal `''` has the same meaning as the text field literal `' '` with length 1, containing one blank. To represent a quotation mark in a text field literal, two consecutive quotation marks `''` must be specified. `` `...` `` [Text string literal](ABENTEXT_STRING_LITERAL_GLOSRY.html) String of characters. The data type is `string`. A text string literal can have a maximum of 255 characters. The empty text string literal \`\` represents an empty string with length 0. To represent a backquote in a text string literal, two consecutive backquotes ` `` ` must be specified. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abenliteral.html