---
title: "ABAPREPLACE_ITAB"
description: |
  ABAPREPLACE_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREPLACE_ITAB.htm"
abapFile: "ABAPREPLACE_ITAB.html"
keywords: ["loop", "do", "if", "case", "data", "types", "internal-table", "ABAPREPLACE", "ITAB"]
---

``REPLACE [\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF]\ [`pattern`](ABAPREPLACE_PATTERN.html)``\\ 
        ``IN TABLE itab [[`table_range`](ABAPREPLACE_TABLE_RANGE.html)] WITH new``\\ 
        `[IN \{CHARACTER|BYTE\} MODE]`\\ 
        ``[[`replace_options]`](ABAPREPLACE_ITAB_OPTIONS.html).``

The internal table `itab` is searched line-by-line for the character or byte strings specified by [`pattern`](ABAPREPLACE_PATTERN.html) and replaces any occurrences with the content of the operand `new`. `new` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html).

`itab` expects a standard table without [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The lines in the table must be [character](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html)\-like or [byte](ABENBYTE_LIKE_DATA_OBJECT_GLOSRY.html)\-like, depending on the addition `CHARACTER` or `BYTE MODE`. Byte or character strings that cover multiple table lines are not replaced.

The addition [`table_range`](ABAPREPLACE_TABLE_RANGE.html) can be used to restrict the search range in the table. When searching in individual table lines, the other additions operate in the same way as in the statement [`REPLACE pattern IN`](ABAPREPLACE_IN_PATTERN.html) for elementary character or byte strings, with a further addition, [`REPLACEMENT LINE`](ABAPREPLACE_ITAB_OPTIONS.html) that also returns the line number of an occurrence.

In string processing for line types of fixed length, trailing blanks are respected, whereas in `new` they are ignored.

If the internal table is empty, a replacement is never successful and `sy-subrc` is set to 4.

The values of `sy-tabix` and `sy-fdpos` are not changed.

A simple *DM-Euro Conversion*.

`CX_SY_REPLACE_INFINITE_LOOP`

`CX_SY_TAB_RANGE_OUT_OF_BOUNDS`

`CX_SY_INVALID_REGEX`

-   `REPLACE IN TABLE` can be used in tables with structured line types to replace character strings if the structure only contains [flat](ABENFLAT_GLOSRY.html)\\ [character-like](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) components. Every line is then handled in the same way as a field of type `c`.
-   Replacements using `REPLACE IN TABLE` give better performance than running a [`LOOP`](ABAPLOOP_AT_ITAB.html) and using [`REPLACE`](ABAPREPLACE_IN_PATTERN.html) to make replacements in individual lines.

-   *Cause:* Substring of length **0** creates an endless loop when searching for all occurrences.
    *Runtime error:*\\ `REPLACE_INFINITE_LOOP`

-   *Cause:* Illegal offset or line specification in the addition of `FROM ... OFFSET ... TO OFFSET`.
    *Runtime error:*\\ `INVALID_TABLE_RANGE`

-   *Cause:* Invalid expression after the addition `PCRE|REGEX`.
    *Runtime error:*\\ `INVALID_REGEX`

DATA menu TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nmenu = value #( ( \`Beer - 3 DM\` ) \\n ( \`Pizza - 10 DM\` ) ). \\n\\ \\nREPLACE ALL OCCURRENCES OF PCRE \`\\\\b(DM)\\\\b\` \\n IN TABLE menu WITH 'EUR' \\n RESPECTING CASE. `sy-subrc` **Meaning** 0 The search pattern was replaced by the content of `new` and the full result is available in the table lines. 2 The search pattern was replaced by the content of `new` and the result of the replacement was truncated on the right in at least one table line. 4 The search pattern in `pattern` was not found in the internal table. 8 The operands `pattern` or `new` do not contain interpretable double-byte characters. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html