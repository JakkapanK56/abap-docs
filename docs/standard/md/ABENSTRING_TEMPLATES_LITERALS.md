---
title: "ABENSTRING_TEMPLATES_LITERALS"
description: |
  ABENSTRING_TEMPLATES_LITERALS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_TEMPLATES_LITERALS.htm"
abapFile: "ABENSTRING_TEMPLATES_LITERALS.html"
keywords: ["if", "data", "ABENSTRING", "TEMPLATES", "LITERALS"]
---

`c...c`

Within a string template `|...|`, a literal text `c...c` represents the exact character string it displays. Literal text consists of all characters in `c` that

In particular, blanks in string templates are always significant. To display a special character `|`, `\{`, `\}`, or `\\` as a literal character, it can be prefixed with the escape character `\\`.

A standalone string template that contains nothing but literal text is not handled like a literal but evaluated as an expression during runtime, even if it is not part of an expression. For such operands, a [text string literal](ABENTEXT_STRING_LITERAL_GLOSRY.html) with backquotes should be used instead, for performance reasons.

The following string template creates the character string shown below it.

-   are not enclosed in curly brackets `\{ \}`
-   are not [control characters](ABENCONTROL_CHARACTER_GLOSRY.html)
-   are not the special characters `|`, `\{`, `\}`, or `\\`.

FINAL(txt) = \\n |Characters \\\\|, \\\\\\\\{, and \\\\\\\\} have to be escaped by \\\\\\\\\\ in literal text.|. Characters |, \\{, and \\} have to be escaped by \\\\ in literal text. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html