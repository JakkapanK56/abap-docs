---
title: "ABAPFIND"
description: |
  ABAPFIND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFIND.htm"
abapFile: "ABAPFIND.html"
keywords: ["loop", "do", "if", "case", "data", "internal-table", "ABAPFIND"]
---

[Short Reference](ABAPFIND_SHORTREF.html)

``FIND [\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF]\ [`pattern`](ABAPFIND_PATTERN.html)\    IN [[`section_of`](ABAPFIND_SECTION_OF.html)] dobj    [IN \{CHARACTER|BYTE\} MODE]\    [[`find_options`](ABAPFIND_OPTIONS.html)].``

[1. `... \{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF`](#ABAP_ADDITION_1@3@)

[2. `... [IN \{CHARACTER|BYTE\} MODE]`](#ABAP_ADDITION_2@3@)

The operand `dobj` is searched for the character or byte sequence determined by a search pattern [`pattern`](ABAPFIND_PATTERN.html).

The additions `FIRST OCCURRENCE` and `ALL OCCURRENCES` determine whether all occurrences or only the first one is searched. The addition [`section_of`](ABAPFIND_SECTION_OF.html) can be used to restrict the search range. The search is terminated if the search pattern is found for the first time, all search patterns in the entire search range have been found, or if the end of the search range was reached. The search result is communicated by setting `sy-subrc`. The addition `MODE` determines whether a character or byte string is processed, and the addition [`find_options`](ABAPFIND_OPTIONS.html) provides additional options for controlling and evaluating the statement.

When a character string is processed, `dobj` is a [character-like expression position](ABENCHARLIKE_EXPR_POSITION_GLOSRY.html) and the blanks are respected for `dobj` operands of a fixed length.

The simplest form of the statement `FIND`.

The optional addition `\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF` specifies whether all or only the first occurrence of the search pattern is searched. If the addition `FIRST OCCURRENCE` or none of the additions is specified, only the first occurrence is searched for. Otherwise, all occurrences are searched for.

If `substring` is an empty string in [`pattern`](ABAPFIND_PATTERN.html) or is of type `c`, `n`, `d`, or `t` and only contains blanks, the place in front of the first character or byte of the search range is found when searching for the first occurrence. In searches for all occurrences, the exception `CX_SY_FIND_INFINITE_LOOP` is raised in this case.

If `regex` in [pattern](ABENREGEX_SYNTAX.html) contains a [`regular expression`](ABAPFIND_PATTERN.html) that matches the empty character string, the search for the first occurrence also finds the place in front of the first character. When searching for all occurrences in this case, the search finds the place in front of the first character, all interim places that are not within a match, and the place after the last character.

All three occurrences of the letter *a* are searched for and found.

The optional addition `IN \{CHARACTER|BYTE\} MODE` determines whether [character string or byte string processing](ABENSTRING_PROCESSING_STATEMENTS.html) is performed. If the addition is not specified, character string processing is performed. Depending on the processing type, `dobj` and `substring` in [`pattern`](ABAPFIND_PATTERN.html) must be character-like or byte-like. If [regular expressions](ABENREGEX_SYNTAX.html) are used in `pattern`, only character string processing is allowed.

Search for the first byte that represents a blank space in the code page UTF-8.

`CX_SY_FIND_INFINITE_LOOP`

`CX_SY_RANGE_OUT_OF_BOUNDS`

`CX_SY_INVALID_REGEX`

`CX_SY_REGEX_TOO_COMPLEX`

-   The statement [`FIND IN TABLE`](ABAPFIND_ITAB.html) is available for searching in internal tables.
-   [Search functions](ABENSEARCH_FUNCTIONS.html) can be used to search in a string in an operand position. They cover some of the functions of the statement `FIND`.
-   The statement `FIND` and the search functions can be quicker than the comparison operator [`CS`](ABENLOGEXP_STRINGS.html) by some magnitude.

-   *Cause:* Substring of length **0** creates an endless loop when searching for all occurrences.
    *Runtime error:*\\ `FIND_INFINITE_LOOP`

-   *Cause:* Illegal offset or length specified in the addition `SECTION OF`.
    *Runtime error:*\\ `REFI_WRONG_SECTION`

-   *Cause:* Invalid expression after the addition `PCRE|REGEX`.
    *Runtime error:*\\ `INVALID_REGEX`

-   *Cause:* More information: [Exceptions in Regular Expressions](ABENREGEX_EXCEPTIONS.html).
    *Runtime error:*\\ `REGEX_TOO_COMPLEX`

FIND 'bcd' in 'abcde'. \\nASSERT sy-subrc = 0. FIND ALL OCCURRENCES OF 'a' in 'ababa' MATCH COUNT FINAL(mcnt). \\nASSERT mcnt = 3. FINAL(xstr) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \`a b c\` ). \\nFINAL(xspc) = \\n cl\_abap\_conv\_codepage=>create\_out( )->convert( \` \` ). \\nFIND xspc IN xstr IN BYTE MODE MATCH OFFSET FINAL(moff). \\nASSERT moff = 1. `sy-subrc` **Meaning** 0 The search pattern was found at least once in the search range. 4 The search pattern was not found in the search range. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html