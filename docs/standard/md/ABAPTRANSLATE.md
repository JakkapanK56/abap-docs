---
title: "ABAPTRANSLATE"
description: |
  ABAPTRANSLATE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTRANSLATE.htm"
abapFile: "ABAPTRANSLATE.html"
keywords: ["if", "case", "data", "ABAPTRANSLATE"]
---

[Short Reference](ABAPTRANSLATE_SHORTREF.html)

`TRANSLATE text \{TO \{UPPER|LOWER\} CASE\}`\\ 
             `|\ \{USING mask\}.`

[1. `... TO \{UPPER|LOWER\} CASE`](#ABAP_ADDITION_1@3@)

[2. `... USING mask`](#ABAP_ADDITION_2@3@)

This statement translates the individual characters of the character-like variable `text`. Either `CASE` can be used to translate the case or `USING` can be used for a translation according to a pattern. The variable `text` must be a character-like variable.

If `UPPER` is specified, all lowercase letters of the data object `text` are translated to uppercase. If `LOWER` is specified, all uppercase letters are translated to lowercase.

To change the case of the letters in a character string in an operand position, a [case function](ABENCASE_FUNCTIONS.html) can be used that includes the functions of the statement `TRANSLATE`.

After the translation, the variable `text` contains *CAREFUL WITH THAT AXE, EUGENE*.

If `USING` is specified, the characters in `text` are translated in accordance with the rule specified in the data object `mask`. `mask` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) whose value is interpreted as a string of character pairs. Starting with the first pair, a search is performed in `text` for the first character in every pair and each occurrence is replaced with the second character of the pair. The search is case-sensitive. If `mask` contains a character multiple times as the first character of a pair, only the first pair is respected. A character in `text` that has already been replaced cannot be replaced again in the same `TRANSLATE` statement. Therefore, if the second character of a pair in `mask` is listed as the first character of a subsequent pair, the second pair affects only the original characters in `text`.

Trailing blanks in data objects `text` and `mask` are respected for data objects. If `mask` contains an odd number of characters, the last character is ignored. If `mask` is an empty string, no replacements are made.

To translate a character string in an operand position, a [translate function](ABENTRANSLATE_FUNCTIONS.html) that includes the functions of the statement `TRANSLATE` can also be used.

Translation of the characters *A* to *B*, *a* to *b* and back. After execution, `text` contains *Abracadabra*.

DATA text TYPE string. \\ntext = \`Careful with that Axe, Eugene\`. \\nTRANSLATE text TO UPPER CASE. DATA text TYPE string. \\ntext = \`Barbcbdbarb\`. \\nTRANSLATE text USING 'ABBAabba'. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html