---
title: "ABAPREPLACE_OPTIONS"
description: |
  ABAPREPLACE_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPLACE_OPTIONS.htm"
abapFile: "ABAPREPLACE_OPTIONS.html"
keywords: ["insert", "do", "while", "if", "case", "class", "data", "types", "internal-table", "ABAPREPLACE", "OPTIONS"]
---

[Short Reference](ABAPREPLACE_SHORTREF.html)

`... [VERBATIM]`\\ 
    `[RESPECTING|IGNORING CASE]`\\ 
    `[REPLACEMENT COUNT rcnt]`\\ 
    `\{\ \{[REPLACEMENT OFFSET roff]`\\ 
       `[REPLACEMENT LENGTH rlen]\}`\\ 
    `|\ [RESULTS result_tab|result_wa]\ \} ...`

[1. `... VERBATIM`](#ABAP_ADDITION_1@3@)

[2. `... RESPECTING|IGNORING CASE`](#ABAP_ADDITION_2@3@)

[3. `... REPLACEMENT COUNT rcnt`](#ABAP_ADDITION_3@3@)

[4. `... REPLACEMENT OFFSET roff`](#ABAP_ADDITION_4@3@)

[5. `... REPLACEMENT LENGTH rlen`](#ABAP_ADDITION_5@3@)

[6. `... RESULTS result_tab|result_wa`](#ABAP_ADDITION_6@3@)

These additions control the statement [`REPLACE pattern IN`](ABAPREPLACE_IN_PATTERN.html) and provide extended evaluation options. The addition `CASE` can be used to determine whether the search is case-sensitive. The additions `REPLACEMENT` and `RESULTS` can be used to determine the number, position, and length of the strings replaced.

The addition `VERBATIM` can only be used together with [`PCRE|REGEX`](ABAPREPLACE_PATTERN.html). It causes all characters in the operand `new` to be used literally. Special characters for replacement patterns have no effect.

A `REPLACE` statement with addition `VERBATIM` is always faster than one without.

While in the first `REPLACE` statement the `$` characters have a special meaning as operators for addressing subgroups, this is not the case when the addition `VERBATIM` is used in the second `REPLACE` statement. In the third `REPLACE` statement, the special characters are escaped using `\\`. While the effect of escaping is the same as for the addition, the addition `VERBATIM` is faster.

This addition is only allowed in character string processing. It has the same syntax and effect as the corresponding [addition](ABAPFIND_OPTIONS.html) for searching for a substring in a data object using the [`FIND`](ABAPFIND.html) statement. This addition is not allowed when using an instance of class `CL_ABAP_REGEX`.

Replacement of all uppercase characters in a string with a backquote. If `IGNORING CASE` were specified, all characters would be replaced.

This addition saves the number of replacements made in data object `dobj` to `rcnt`. The following can be specified for `rcnt`:

If no replacements are made, `rcnt` is set to 0.

In data objects with a fixed length, the number of replacements made in data object `dobj` can be less than the number of occurrences.

This addition saves the [offset](ABENOFFSET_GLOSRY.html) related to the data object `dobj` at which the last replacement was made to `roff`. The following can be specified for `roff`:

If no replacement is made, `roff` retains its previous value or stays initial.

This addition saves the length of the last substring inserted into `dobj` to `rlen`. The following can be specified for `rlen`:

If no replacement is made, `rlen` retains its previous value or stays initial.

In data objects with a fixed length, the length of the last inserted string can be shorter than the length of `new` if the interim result is truncated.

Pattern-based replacement of all occurrences of the substring *know* in the data objects `text1` and `text2` with *should know that*. After the first `REPLACE` statement, `text1` contains the complete content *I should know that you know* and `sy-subrc` contains 0. The data objects `cnt`, `off`, and `len` have the values 2, 23, and 16. After the second `REPLACE` statement, `text2` contains the truncated content *I should know that* and `sy-subrc` contains 2. The data objects `cnt`, `off`, and `len` have the values 1, 2, and 16.

If at least one replacement is made, the `RESULTS` addition saves the offsets of the positions at which replacements were made and the lengths of the inserted substrings either in an internal table `result_tab` or in a structure `result_wa`. The syntax and meaning of the addition are otherwise the same as those for the identically named [addition](ABAPFIND_OPTIONS.html) for the [`FIND`](ABAPFIND.html) statement, with the difference that the data types for `result_tab` and `result_wa` must be `REPL_RESULT_TAB` and `REPL_RESULT`, for which there is no `SUBMATCHES` component. As in `FIND`, an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) can be specified after `RESULTS`.

A result table `results` is declared inline and supplied with the properties of the seven replaced characters.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `i`.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `i`.

-   When `ALL OCCURRENCES` is used, `REPLACEMENT OFFSET` generally returns a different value than [`MATCH OFFSET`](ABAPFIND_OPTIONS.html) for the [`FIND`](ABAPFIND.html) statement because the position of the last found location can be shifted by previous replacements.
-   In data objects of fixed length, the value in `roff` refers to the last replacement within the data object. Occurrences that are shifted by previous replacements in the data object are no longer relevant.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `i`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(text1) = \`123XXX456\`. \\nDATA(text2) = text1. \\nDATA(text3) = text1. \\n\\ \\nFINAL(regex) = \`(\\\\d\*)(\\\\D\*)(\\\\d\*)\`. \\n\\ \\nREPLACE PCRE regex IN text1 WITH \`$1\_\_\_$3\`. \\nREPLACE PCRE regex IN text2 WITH \`$1\_\_\_$3\` VERBATIM. \\nREPLACE PCRE regex IN text3 WITH \`\\\\$1\_\_\_\\\\$3\`. \\n\\ \\nout->write( |\\{ text1 \\}\\\\n\\{ text2 \\}\\\\n\\{ text3 \\}| ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(str) = \`Hello\`. \\nREPLACE ALL OCCURRENCES OF PCRE \`\[A-Z\]\` IN str WITH '\`' \\n RESPECTING CASE. \\nout->write( str ). \\n\\ \\n\\ \\nTYPES: \\n BEGIN OF result, \\n line TYPE i, \\n offset TYPE i, \\n length TYPE i, \\n END OF result, \\n result\_tab TYPE TABLE OF result WITH EMPTY KEY. \\n\\ \\nTYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 5, \\n col2 TYPE c LENGTH 5, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\nDATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 5 \\n ( col1 = 'abcde' col2 = 'abcde' ) ). \\n\\ \\nREPLACE ALL OCCURRENCES OF \`cd\` \\n IN TABLE itab \\n FROM 2 OFFSET 5 \\n TO 4 OFFSET 5 \\n WITH 'XX' \\n RESULTS FINAL(results). \\n\\ \\nout->write( CORRESPONDING result\_tab( results ) ). \\n\\ \\nout->display( ). DATA: text1 TYPE string, \\n text2 TYPE c LENGTH 18. \\n\\ \\ntext1 = text2 = 'I know you know'. \\n\\ \\nREPLACE ALL OCCURRENCES OF 'know' IN \\n text1 WITH 'should know that' \\n REPLACEMENT COUNT DATA(cnt) \\n REPLACEMENT OFFSET DATA(off) \\n REPLACEMENT LENGTH DATA(len). \\n\\ \\nREPLACE ALL OCCURRENCES OF 'know' IN \\n text2 WITH 'should know that' \\n REPLACEMENT COUNT cnt \\n REPLACEMENT OFFSET off \\n REPLACEMENT LENGTH len. FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA(str) = \`Diddeldummdideldei\`. \\nREPLACE ALL OCCURRENCES OF \`d\` IN str WITH 't' \\n IGNORING CASE \\n RESULTS FINAL(results). \\nout->write( results ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapreplace.html abapreplace\_in\_pattern.html