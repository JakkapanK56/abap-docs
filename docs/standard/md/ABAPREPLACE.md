---
title: "ABAPREPLACE"
description: |
  ABAPREPLACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPLACE.htm"
abapFile: "ABAPREPLACE.html"
keywords: ["do", "if", "data", "internal-table", "ABAPREPLACE"]
---

[Short Reference](ABAPREPLACE_SHORTREF.html)

1\. `REPLACE [\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF]\ [pattern](ABAPREPLACE_PATTERN.html)`\\
`IN [[section_of](ABAPFIND_SECTION_OF.html)] dobj WITH new`\\
`[IN \{CHARACTER|BYTE\} MODE]`\\
`[[replace_options](ABAPREPLACE_OPTIONS.html)].`

2\. `REPLACE SECTION [OFFSET off]\ [LENGTH len] OF dobj WITH new`\\
`[IN \{CHARACTER|BYTE\} MODE].`

This statement replaces characters or bytes of the variable `dobj` with characters or bytes of the operand `new`, which is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html). Here, a distinction is made between pattern-based and position-based replacements.

When the replacement is performed, an interim result without a length limit is created implicitly and passed to the data object `dobj`. If the length of the interim result is longer than the length of `dobj`, data objects of fixed length are truncated on the right. If the length of the interim result is shorter than the length of `dobj`, data objects of fixed length are padded on the right with blanks or hexadecimal zeros. Data objects of variable length are adjusted accordingly. If the interim result is truncated during the assignment, `sy-subrc` is set to 2.

In character string processing, the trailing blanks are respected for data objects `dobj` of fixed length. For `new` the closing blanks are ignored.

The simplest form of the statement `REPLACE`.

[Pattern-Based Replacement](ABAPREPLACE_IN_PATTERN.html)

[Position-Based Replacement](ABAPREPLACE_IN_POSITION.html)

-   The statement [`REPLACE IN TABLE`](ABAPREPLACE_ITAB.html) can be used to make replacements in internal tables.
-   To replace parts of a character string in an operand position, a [replace function](ABENREPLACE_FUNCTIONS.html) can be used that includes some of the functions of the statement `REPLACE`.
-   These forms of the statement `REPLACE` replace the following obsolete form:
-   [`REPLACE substring WITH new INTO dobj ...`](ABAPREPLACE_OBSOLETE.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(str) = \`Hallo\`. \\nREPLACE \`a\` IN str WITH \`e\`. \\nout->write( str ). \\n\\ \\nout->display( ). `sy-subrc` **Meaning** 0 The search pattern or specified section was replaced by the content of `new` and the result is available in full in `dobj`. 2 The search pattern or specified section was replaced by the content of `new` in `dobj` and the result of the replacement was truncated on the right. 4 The search pattern in `pattern` was not found in `dobj` in the pattern-based search. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html