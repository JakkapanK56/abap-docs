---
title: "ABAPREPLACE_ITAB_OPTIONS"
description: |
  ABAPREPLACE_ITAB_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPLACE_ITAB_OPTIONS.htm"
abapFile: "ABAPREPLACE_ITAB_OPTIONS.html"
keywords: ["if", "case", "data", "types", "ABAPREPLACE", "ITAB", "OPTIONS"]
---

[Short Reference](ABAPREPLACE_SHORTREF.html)

`... [VERBATIM]`\\ 
    `[RESPECTING|IGNORING CASE]`\\ 
    `[REPLACEMENT COUNT rcnt]`\\ 
    `\{\ \{[REPLACEMENT LINE rlin]`\\ 
       `[REPLACEMENT OFFSET roff]`\\ 
       `[REPLACEMENT LENGTH rlen]\}`\\ 
    `|\ [RESULTS result_tab|result_wa]\ \} ...`

The addition `REPLACEMENT LINE` returns the last line number in which the search pattern was found using the statement [`REPLACE IN TABLE`](ABAPREPLACE_ITAB.html) in `rlin`. The following can be specified for `rlin`:

If no replacement is made, `rlin` retains its existing value or remains initial.

The remaining additions used for making replacements in individual table lines have the same [meaning](ABAPREPLACE_OPTIONS.html) as pattern-based replacements made using [`REPLACE`](ABAPREPLACE_IN_PATTERN.html) in elementary character strings or byte strings.

When the `RESULTS` addition is used, the line numbers of each occurrence in the component `LINE` of the table line in `result_tab` or the line number of the last occurrence are stored in `result_wa`.

This example performs the same replacement as the [replacement range](ABAPREPLACE_TABLE_RANGE.html) example. Here, the positions of the replaced occurrences are returned.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `i`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF result, \\n line TYPE i, \\n offset TYPE i, \\n length TYPE i, \\n END OF result, \\n result\_tab TYPE TABLE OF result WITH EMPTY KEY. \\n\\ \\nTYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 5, \\n col2 TYPE c LENGTH 5, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\nDATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 5 \\n ( col1 = 'abcde' col2 = 'abcde' ) ). \\n\\ \\nREPLACE ALL OCCURRENCES OF \`cd\` \\n IN TABLE itab \\n FROM 2 OFFSET 5 \\n TO 4 OFFSET 5 \\n WITH 'XX' \\n RESULTS FINAL(results). \\n\\ \\nout->write( CORRESPONDING result\_tab( results ) ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapreplace\_itab.html