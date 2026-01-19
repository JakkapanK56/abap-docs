---
title: "ABAPFIND_ITAB"
description: |
  ABAPFIND_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFIND_ITAB.htm"
abapFile: "ABAPFIND_ITAB.html"
keywords: ["loop", "do", "if", "case", "data", "types", "internal-table", "ABAPFIND", "ITAB"]
---

``FIND [\{FIRST OCCURRENCE\}|\{ALL OCCURRENCES\} OF]\ [`pattern`](ABAPFIND_PATTERN.html)\    IN TABLE itab [[`table_range`](ABAPFIND_TABLE_RANGE.html)]\    [IN \{CHARACTER|BYTE\} MODE]\    [[`find_options`](ABAPFIND_ITAB_OPTIONS.html)]``.

The internal table `itab` is searched line-by-line for the character strings or byte strings specified in [`pattern`](ABAPFIND_PATTERN.html). `itab` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html).

`itab` must be a standard table with no [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). The lines in the table must be [character](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html)\-like or [byte](ABENBYTE_LIKE_DATA_OBJECT_GLOSRY.html)\-like, depending on the addition `CHARACTER` or `BYTE MODE`. Character strings or byte strings that cover multiple table lines are not found.

The [`table_range`](ABAPFIND_TABLE_RANGE.html) addition can be used to restrict the search range in the table. When making replacements in the individual table lines, the other additions generally have the same meaning as the statement [`FIND`](ABAPFIND.html) for elementary character or byte strings. Here, a further addition [`MATCH LINE`](ABAPFIND_ITAB_OPTIONS.html) also returns the line number of any occurrence.

The search is terminated if the search pattern was found for the first time, or if all search patterns were found in the entire search range, or if the end of the search range was reached. The search result is communicated by setting `sy-subrc`.

In string processing for line types of fixed length, trailing blanks are respected.

If the internal table is empty, a search is never successful and `sy-subrc` is set to 4 with one exception: A search for a obsolete [POSIX regular expression](ABENREGEX_POSIX_SYNTAX.html) that matches an empty string sets `sy-subrc` to 0 and behaves as if the internal table contained an empty first line by returning 1 for [`MATCH LINE`](ABAPFIND_ITAB_OPTIONS.html) and 0 for [`MATCH OFFSET`](ABAPFIND_ITAB_OPTIONS.html) and [`MATCH LENGTH`](ABAPFIND_ITAB_OPTIONS.html).

The values of `sy-tabix` and `sy-fdpos` are not changed.

Reading of a text into an internal table in `ITF` format and search for the first string *ABAP* or *XML*. The positions the occurrence are written in variables. The line type of the internal table is interpreted as a single field of the type `c` despite being a structured type.

`CX_SY_RANGE_OUT_OF_BOUNDS`

`CX_SY_TAB_RANGE_OUT_OF_BOUNDS`

`CX_SY_INVALID_REGEX`

-   `FIND IN TABLE` can be used to search tables with structured line types for character strings, if the structure only contains [flat](ABENFLAT_GLOSRY.html)\\ [character-like](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) components. Every line is then handled in the same way as a field of type `c`.
-   Searching using `FIND IN TABLE` produces better performance than running a [`LOOP`](ABAPLOOP_AT_ITAB.html) and using [`FIND`](ABAPFIND.html) to search the individual lines.
-   For searching multiple lines, the lines can be converted to a string by using the concatenation function [`concat_lines_of`](ABENCONCATENATION_FUNCTIONS.html) or the statement [`CONCATENATE LINES OF`](ABAPCONCATENATE.html). It must be ensured that trailing blanks are handled correctly.

-   *Cause:* Illegal offset or length specified in the addition `SECTION OF`.
    *Runtime error:*\\ `REFI_WRONG_SECTION`

-   *Cause:* Illegal offset or length specification in the addition of `FROM ... OFFSET ... TO OFFSET`.
    *Runtime error:*\\ `INVALID_TABLE_RANGE`

-   *Cause:* Invalid expression after the addition `PCRE|REGEX`.
    *Runtime error:*\\ `INVALID_REGEX`

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itf\_tab TYPE tline\_tab. \\nIF cl\_abap\_docu\_itf=>get\_docu( EXPORTING id = 'SD' \\n object = 'ABENABAP\_XML' \\n IMPORTING itf = itf\_tab ) = 0. \\n\\ \\n FIND FIRST OCCURRENCE OF PCRE 'ABAP|XML' \\n IN TABLE itf\_tab \\n RESPECTING CASE \\n MATCH LINE FINAL(mline) \\n MATCH OFFSET FINAL(moff) \\n MATCH LENGTH FINAL(mlen). \\n\\ \\n IF sy-subrc = 0. \\n out->write( |\\{ mline \\}, \\{ moff \\}, \\{ mlen \\}| ). \\n ENDIF. \\nENDIF. \\n\\ \\nout->display( ). `**sy-subrc**` **Meaning** 0 The search pattern was found at least once in the search range. 4 The search pattern was not found in the search range. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html