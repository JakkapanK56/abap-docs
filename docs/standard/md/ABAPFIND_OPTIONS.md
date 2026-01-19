---
title: "ABAPFIND_OPTIONS"
description: |
  ABAPFIND_OPTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFIND_OPTIONS.htm"
abapFile: "ABAPFIND_OPTIONS.html"
keywords: ["insert", "do", "if", "case", "class", "data", "internal-table", "ABAPFIND", "OPTIONS"]
---

[Short Reference](ABAPFIND_SHORTREF.html)

`...  [\{RESPECTING|IGNORING\} CASE]\       [MATCH COUNT  mcnt]\       \{\ \{[MATCH OFFSET moff]\          [MATCH LENGTH mlen]\}\       |\ [RESULTS result_tab|result_wa]\ \}\       [SUBMATCHES s1 s2 ...] ...`

[1. `... \{RESPECTING|IGNORING\} CASE`](#ABAP_ADDITION_1@3@)

[2. `... MATCH COUNT mcnt`](#ABAP_ADDITION_2@3@)

[3. `... MATCH OFFSET moff`](#ABAP_ADDITION_3@3@)

[4. `... MATCH LENGTH mlen`](#ABAP_ADDITION_4@3@)

[5. `... RESULTS result_tab|result_wa`](#ABAP_ADDITION_5@3@)

[6. `... SUBMATCHES s1 s2 ...`](#ABAP_ADDITION_6@3@)

These additions control the [`FIND`](ABAPFIND.html) statement and provide advanced evaluation options. The addition `CASE` can be used to specify whether the search is case-sensitive. The additions `MATCH`, `SUBMATCHES`, and `RESULTS` can be used to determine the number, position, and length of the sequences found.

This addition is only allowed for character string processing. It specifies whether the search in `pattern` and `dobj` is case-sensitive. If `RESPECTING CASE` is specified, the search is case-sensitive and if `IGNORING CASE` is used, it is not. If neither of these additions is specified, `RESPECTING CASE` is used implicitly. If a regular expression is passed as an object of class `CL_ABAP_REGEX` for [`pattern`](ABAPFIND_PATTERN.html), this addition is not allowed. Instead, the properties of the object are respected by the search.

The first search finds the letter *a*, the second finds the letter *A*.

If the search pattern `pattern` is found in the search range, the `MATCH COUNT` addition saves the number of occurrences in `mcnt`. The following can be specified for `mcnt`:

If `FIRST OCCURRENCE` is used, the value after a successful search is always 1. If the search is not successful, `mcnt` is set to 0.

Check whether the numbers of opening and closing tags in an HTML file match.

If the search pattern `pattern` is found in the search range, the `MATCH OFFSET` addition saves the [offset](ABENOFFSET_GLOSRY.html) of the last occurrence with reference to the `dobj` operand in `moff`. The following can be specified for `moff`:

If `FIRST OCCURRENCE` is used, the result is the offset of the first occurrence. If the search is not successful, `moff` retains its previous value or remains initial.

The system field `sy-fdpos` is not filled by `FIND`.

If the search pattern `pattern` is found in the search range, the `MATCH LENGTH` addition saves the length of the last substring found in `mlen`. The following can be specified for `mlen`:

If `FIRST OCCURRENCE` is used, the result is the length of the first occurrence. If the search is not successful, `mlen` retains its previous value or remains initial.

Determination of the first string of digits within a string and its output.

If the search pattern `pattern` is found in the search range, the `RESULTS` addition saves the offsets of the occurrences, the lengths of the substrings found, and information about the subgroup registers of regular expressions either in an internal table `result_tab` or in a structure `result_wa`. The internal table or structure can be specified as follows:

When an internal table is used, it is initialized before the search starts and a line is inserted into the internal table for each match found. If a structure is used, it is assigned the values of the last occurrence. If `FIRST OCCURRENCE` is used and an internal table is specified, exactly one line is inserted into this table if the search is successful.

The line type or structure type `MATCH_RESULT` has the following components:

The lines from `result_tab` are sorted according to the `OFFSET` and `LENGTH` columns. An additional component `LINE` is only relevant for the [`FIND IN TABLE`](ABAPFIND_ITAB.html) variant.

After an unsuccessful search, the content of the internal table `result_tab` is empty, whereas the structure `result_wa` preserves its content.

The `RESULTS` addition is particularly useful when used with the `ALL OCCURRENCES` addition if an internal table is specified, and with the `FIRST OCCURRENCE` addition if a structure is specified.

The following search for a regular expression finds the two substrings *ab* and *ba* at offset 0 and 2 and fills the internal table `result_tab` accordingly with two lines. Since the regular expression contains three subgroups, the `submatches` component contains three lines. The first line of `submatches` relates to the outer parenthesis, the second line relates to the first inner parenthesis, and the third line relates to the second inner parenthesis. The first and second lines contain the offset and length of the first occurrence, and the third line remains undefined. The first and third lines contain the offset and length of the second occurrence, and the second line remains undefined.

This addition can be used only if a [regular expression](ABENREGEX_SYNTAX.html) is used in [`pattern`](ABAPFIND_PATTERN.html). The current content of the [subgroup register](ABENREGEX_POSIX_SYNTAX_OPERATORS.html) of the regular expression is written to `s1`, `s2`, ... for the current occurrence. The operands can be specified as follows:

When `ALL OCCURRENCES` is used, the last occurrence is evaluated. If more operands `s1`, `s2`, ... than subgroups are listed, the surplus variables of fixed length are filled with blanks and strings are initialized. If fewer operands `s1`, `s2`, ... than subgroups are listed, the surplus subgroups are ignored.

The regular expression after `PCRE` has two subgroups. The search finds the substring at offset 0 with length 14. The content of the subgroup registers is *Hey* and *my*.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `i`.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `i`.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `i`.

-   An existing internal table with the table type `MATCH_RESULT_TAB` with the line type `MATCH_RESULT` from the ABAP Dictionary is specified for `result_tab`. A structure of the type `MATCH_RESULT` from the ABAP Dictionary is specified for `result_wa`
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html) is specified after `RESULTS`. If `ALL OCCURRENCES` is used, an internal table of the type `MATCH_RESULT_TAB` is declared. If `FIRST OCCURRENCE` is used, a structure of the type `MATCH_RESULT` is declared.

-   `OFFSET` of type `INT4` for storing the offset of the substring
-   `LENGTH` of type `INT4` for storing the length of the substring
-   `SUBMATCHES` of table type `SUBMATCH_RESULT_TAB` with the line type `SUBMATCH_RESULT` for storing the offset and length of the substring of the current occurrence, which are stored in the [subgroup registers](ABENREGEX_POSIX_SYNTAX_OPERATORS.html) of a regular expression

-   As existing variables that expect a character-like type.
-   As an inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html), where a variable of type `string` is declared.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFIND 'A' in \`aA\` IGNORING CASE MATCH OFFSET FINAL(moff1). \\nFIND 'A' in \`aA\` RESPECTING CASE MATCH OFFSET FINAL(moff2). \\nout->write( |\\{ moff1 \\}, \\{ moff2 \\}| ). \\n\\ \\nout->display( ). DATA html TYPE string. \\n\\ \\n... \\n\\ \\nFIND ALL OCCURRENCES OF 'new( ). \\n\\ \\nFIND PCRE '\\\\d+' IN 'abc123def' \\n MATCH OFFSET FINAL(moff) \\n MATCH LENGTH FINAL(mlen). \\n\\ \\nout->write( substring( val = 'abc123def' \\n off = moff \\n len = mlen ) ). \\n\\ \\nout->display( ). FIND ALL OCCURRENCES OF pcre \`((ab)|(ba))\` \\n IN 'abba' \\n RESULTS FINAL(result\_tab). DATA text TYPE string. \\n\\ \\ntext = \`Hey hey, my my, Rock and roll can never die\`. \\n\\ \\nFIND PCRE \`(\\\\w+)\\\\W+\\\\1\\\\W+(\\\\w+)\\\\W+\\\\2\` \\n IN text \\n IGNORING CASE \\n MATCH OFFSET FINAL(moff) \\n MATCH LENGTH FINAL(mlen) \\n SUBMATCHES FINAL(s1) FINAL(s2). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapfind.html