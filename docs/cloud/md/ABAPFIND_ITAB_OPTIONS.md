---
title: "ABAPFIND_ITAB_OPTIONS"
description: |
  ABAPFIND_ITAB_OPTIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFIND_ITAB_OPTIONS.htm"
abapFile: "ABAPFIND_ITAB_OPTIONS.html"
keywords: ["do", "if", "case", "data", "types", "internal-table", "ABAPFIND", "ITAB", "OPTIONS"]
---

`... [\{RESPECTING|IGNORING\} CASE]\      [MATCH COUNT  mcnt]\      \{\ \{[MATCH LINE   mlin]\         [MATCH OFFSET moff]\         [MATCH LENGTH mlen]\}\      |\ [RESULTS result_tab|result_wa]\ \}\      [SUBMATCHES s1 s2 ...] ...`

The addition `MATCH LINE` returns the number of the line in which the last substring was found using [`FIND IN TABLE`](ABAPFIND_ITAB.html) in data object `mlin`. The following can be specified for `mlin`:

If the substring is not found, `mlin` retains its previous value or stays initial.

The remaining additions used for searching in the individual table lines have the same [meaning](ABAPFIND_OPTIONS.html) as in the statement [`FIND`](ABAPFIND.html) for elementary character strings and byte strings.

If the addition `RESULTS` is used, the line numbers of each occurrence in the component `LINE` of the table line in question in `result_tab` or the line number of the last occurrence are also saved to `result_wa` and the lines in `result_tab` are sorted by the columns `LINE`, `OFFSET`, and `LENGTH`.

Reading of a text into an internal table in `ITF` format and search for all strings *ABAP* and *XML*. The table returned contains the positions of the occurrences. The line type of the internal table is interpreted as a single field of the type `c` despite being a structured type.

-   An existing variable that expects the data type `i`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The declared variable has the data type `i`.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF result, \\n line TYPE i, \\n offset TYPE i, \\n length TYPE i, \\n END OF result, \\n result\_tab TYPE TABLE OF result WITH EMPTY KEY. \\n\\ \\nDATA itf\_tab TYPE tline\_tab. \\nIF cl\_abap\_docu\_itf=>get\_docu( EXPORTING id = 'SD' \\n object = 'ABENABAP\_XML' \\n IMPORTING itf = itf\_tab ) = 0. \\n\\ \\n FIND ALL OCCURRENCES OF PCRE 'ABAP|XML' \\n IN TABLE itf\_tab \\n RESPECTING CASE \\n RESULTS FINAL(results). \\n\\ \\n IF sy-subrc = 0. \\n out->write( CORRESPONDING result\_tab( results ) ). \\n ENDIF. \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapfind\_itab.html