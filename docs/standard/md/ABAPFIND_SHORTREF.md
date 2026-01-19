---
title: "ABAPFIND_SHORTREF"
description: |
  ABAPFIND_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPFIND_SHORTREF.htm"
abapFile: "ABAPFIND_SHORTREF.html"
keywords: ["do", "if", "case", "data", "internal-table", "ABAPFIND", "SHORTREF"]
---

[Reference](ABAPFIND.html)

`FIND [\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF]\       \{[SUBSTRING] substring\}\ |\ \{PCRE|REGEX regex\} IN       \{\ \{[SECTION [OFFSET off]\ [LENGTH len] OF] dobj\}\       |\ \{TABLE itab [FROM lin1 [OFFSET off1]]\                     [TO   lin2 [OFFSET off2]]\}\ \}\       [IN \{CHARACTER|BYTE\} MODE]\       [\{RESPECTING|IGNORING\} CASE]\       [MATCH COUNT  mcnt]\       \{\ \{[MATCH LINE   mlin]\          [MATCH OFFSET moff]\          [MATCH LENGTH mlen]\}\       |\ [RESULTS result_tab|result_wa]\ \}\       [SUBMATCHES s1 s2 ...].`

Searches for character strings or byte strings or for [regular expressions](ABENREGULAR_EXPRESSION_GLOSRY.html) in a character-like or byte-like data object (`dobj`) or in an internal table (`itab`).

-   [`\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES OF\}`](ABAPFIND.html)\\
    Defines whether the system searches for the first occurrence only or for all occurrences.
-   [`\{[SUBSTRING] substring\}\ |\ \{PCRE|REGEX regex\}`](ABAPFIND_PATTERN.html)\\
    Defines whether the system searches for a `substring` or a [regular expression](ABENREGULAR_EXPRESSION_GLOSRY.html) (`regex`).
-   [`SECTION [OFFSET off]\ [LENGTH len] OF dobj`](ABAPFIND_SECTION_OF.html)\\
    Searches in a character string or byte string (`dobj`) with restriction of the search range to the section starting from the offset specified in `off` with the length specified in `len`.
-   [`TABLE itab [FROM lin1 [OFFSET off1]]\ [TO lin2 [OFFSET off2]]`](ABAPFIND_ITAB.html)\\
    Searches in an `itab` with restriction of the search range to the section from the line specified in `lin1` with the offset specified in `off1` up to the line specified in `lin2` with the offset specified in `off2`.
-   [`IN \{CHARACTER|BYTE\} MODE`](ABAPFIND.html)\\
    Specifies character string or byte string processing.
-   [`\{RESPECTING|IGNORING\} CASE`](ABAPFIND_OPTIONS.html)\\
    Defines whether case is respected in `substring`, `regex`, and `dobj`.
-   [`MATCH COUNT mcnt`](ABAPFIND_OPTIONS.html)\\
    Gets the number of occurrences in `mcnt`.
-   [`MATCH LINE mlin`](ABAPFIND_ITAB_OPTIONS.html)\\
    When searching in internal tables, gets the line number of the last occurrence in `mlin`.
-   [`MATCH OFFSET moff`](ABAPFIND_OPTIONS.html)\\
    Gets the offset of the last occurrence in `moff`.
-   [`MATCH LENGTH mlen`](ABAPFIND_OPTIONS.html)\\
    Gets the length of the last found substring in `mlen`.
-   [`RESULTS result_tab|result_wa`](ABAPFIND_OPTIONS.html)\\
    Gets the properties of all occurrences or the last occurrence in an internal table (`result_tab`) or a structure (`result_wa`).
-   [`SUBMATCHES s1 s2 ...`](ABAPFIND_OPTIONS.html)\\
    When searching for regular expressions, gets the content of the subgroup tabs of the last occurrence in `s1`, `s2`, and so on.

abenabap.html abenabap\_reference.html abenabap\_shortref.html