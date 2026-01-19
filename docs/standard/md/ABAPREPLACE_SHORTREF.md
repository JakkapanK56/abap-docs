---
title: "ABAPREPLACE_SHORTREF"
description: |
  ABAPREPLACE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPREPLACE_SHORTREF.htm"
abapFile: "ABAPREPLACE_SHORTREF.html"
keywords: ["do", "while", "if", "case", "data", "internal-table", "ABAPREPLACE", "SHORTREF"]
---

[Reference](ABAPREPLACE.html)

`REPLACE \{\ \{\ [\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES OF\}]\              \{[SUBSTRING] substring\}\ |\ \{PCRE|REGEX regex\} IN              \{\ \{[SECTION [OFFSET off]\ [LENGTH len] OF] dobj\}\              |\ \{TABLE itab [FROM lin1 [OFFSET off1]]\                            [TO   lin2 [OFFSET off2]]\}\ \}\              WITH new              [IN \{CHARACTER|BYTE\} MODE]\              [\{RESPECTING|IGNORING\} CASE]\              [REPLACEMENT COUNT  rcnt]\              \{\ \{[REPLACEMENT OFFSET roff]\                 [REPLACEMENT LENGTH rlen]\                 [REPLACEMENT LINE   rlin]\}\              |\ [RESULTS result_tab|result_wa]\ \}\ \}\          |\ \{ SECTION [OFFSET off]\ [LENGTH len] OF dobj              WITH new              [IN \{CHARACTER|BYTE\} MODE]\ \}\ \}.`

Replaces character strings or byte strings in a character-like or byte-like data object `dobj` or in an internal table `itab` with the content of `new`. Determines the characters or bytes to be replaced using a search for substrings or regular expressions or by specifying the offset and length directly.

-   [`\{FIRST OCCURRENCE\}|\ \{ALL OCCURRENCES OF\}`](ABAPREPLACE_IN_PATTERN.html)\\
    Defines whether the first occurrence found or all occurrences found are replaced with the content of the data object `new`.
-   [`\{[SUBSTRING] substring\}\ |\ \{PCRE|REGEX regex\}`](ABAPFIND_PATTERN.html)\\
    Defines whether a `substring` or a [regular expression](ABENREGULAR_EXPRESSION_GLOSRY.html)\\ `regex` is searched for and replaced.
-   [`SECTION [OFFSET off]\ [LENGTH len] OF`](ABAPREPLACE.html)\\
    Specifies a section of `dobj` from the offset specified in `off` and the length specified in `len`. Either the section to be searched or the section to be replaced.
-   [`TABLE itab [FROM lin1 [OFFSET off1]]\ [TO lin2 [OFFSET off2]]`](ABAPREPLACE_ITAB.html)\\
    In an internal table `itab`, performs replacements while restricting the search range to the section from the line specified in `lin1` with the offset specified in `off1` to the line specified in `lin2` with the offset specified in `off2`.
-   [`IN \{BYTE|CHARACTER\} MODE`](ABAPREPLACE.html)\\
    Specifies character string or byte string processing.
-   [`\{RESPECTING|IGNORING\} CASE`](ABAPREPLACE_OPTIONS.html)\\
    Specifies whether the search is case-sensitive.
-   [`REPLACEMENT COUNT rcnt`](ABAPREPLACE_OPTIONS.html)\\
    Gets the number of replacements in `rcnt`.
-   [`REPLACEMENT LINE rlin`](ABAPREPLACE_ITAB_OPTIONS.html)\\
    Gets the table line of the last replacement in `rlin`.
-   [`REPLACEMENT OFFSET roff`](ABAPREPLACE_OPTIONS.html)\\
    Gets the offset of the last replacement in `roff`.
-   [`REPLACEMENT LENGTH rlen`](ABAPREPLACE_OPTIONS.html)\\
    Gets the length of the last replacement in `rlen`.
-   [`RESULTS result_tab|result_wa`](ABAPREPLACE_OPTIONS.html)\\
    Gets the attributes of all replaced positions or the last replaced position in an internal table `result_tab` or a structure `result_wa` of type `MATCH_RESULT`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html