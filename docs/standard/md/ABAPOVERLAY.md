---
title: "ABAPOVERLAY"
description: |
  ABAPOVERLAY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPOVERLAY.htm"
abapFile: "ABAPOVERLAY.html"
keywords: ["if", "case", "data", "ABAPOVERLAY"]
---

[Short Reference](ABAPOVERLAY_SHORTREF.html)

`OVERLAY text1 WITH text2 [ONLY mask].`

Characters in the variable `text1` are replaced by the characters in the operand `text2` that are in the same place there. `text2` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html).

If the addition `ONLY` is not specified, all blanks in `text1` are replaced. If the addition `ONLY` is specified, all characters are replaced that occur in the operand `mask`. This is case-sensitive. `mask` is also a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html).

If the lengths of `text1` and `text2` are different, `text1` is processed using the shorter length only.

The operands `text1`, `text2`, and `mask` must be character-like operands. In operands of fixed length, trailing blanks are respected. If `mask` is an empty string, no replacements are made.

After the `text` field has been assigned to the `time` field, it contains the invalid time *12\_\_00* due to the [conversion rules](ABENCONVERSION_TYPE_C.html). As a result of the overlay with the `initial_time` constants, the two blanks are replaced by *00* and the result is the valid time *120000*.

CONSTANTS initial\_time TYPE t VALUE IS INITIAL. \\nDATA: time TYPE t, \\n text TYPE c LENGTH 4. \\n\\ \\ntext = '12'. \\ntime = text. \\nOVERLAY time WITH initial\_time. `sy-subrc` **Meaning** 0 At least one character in `text1` has been replaced. 4 No characters in `text1` have been replaced. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html