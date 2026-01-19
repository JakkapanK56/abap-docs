---
title: "ABAPFIND_TABLE_RANGE"
description: |
  ABAPFIND_TABLE_RANGE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFIND_TABLE_RANGE.htm"
abapFile: "ABAPFIND_TABLE_RANGE.html"
keywords: ["delete", "loop", "do", "if", "case", "data", "internal-table", "ABAPFIND", "TABLE", "RANGE"]
---

`... [FROM lin1 [OFFSET off1]]\      [TO   lin2 [OFFSET off2]] ...`

This addition limits the search in the statement [`FIND IN TABLE`](ABAPFIND_ITAB.html) to the table range specified in `lin1`, `off1`, `lin2` and `off2`. Without this addition, the program searches the entire table line by line. `lin1`, `off1`, `lin2` and `off2` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) of operand type `i`.

The table range begins in line `lin1` after the [offset](ABENOFFSET_GLOSRY.html)\\ `off1`, and ends in line `lin2` in front of the offset `off2`. If `FROM` is specified without `OFFSET`, the range implicitly begins at the start of `lin1`. If `TO` is specified without `OFFSET`, the range ends implicitly at the end of line `lin2`.

The value of `lin1` must be greater than or equal to 1, and the value of `lin2` must be greater than or equal to the value of `lin1`, and both must refer to valid table lines. The values of `off1` and `off2` must be greater than or equal to 0 and be within the respective line length. If `lin1` and `lin2` refer to the same line, the value of `off2` must be greater than or equal to the value of `off1`. Both offsets may refer to the end of the line.

This addition is also used in the statement [`REPLACE IN TABLE`](ABAPREPLACE_ITAB.html).

Reading of a text into an internal table in `ITF` format and search for the first string *AS* in a non-case-sensitive search. The line type of the internal table is interpreted as a single field of the type `c` despite being a structured type. The first search finds the first paragraph format *AS* in the column `tdformat`. The second search is limited to the lines of the first paragraph and finds the word `as` in the column `tdline`, if it exists here. By specifying the offset, the paragraph format is not found in the first line of the paragraph.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itf\_tab TYPE tline\_tab. \\nIF cl\_abap\_docu\_itf=>get\_docu( EXPORTING id = 'SD' \\n object = 'ABENABAP\_XML' \\n IMPORTING itf = itf\_tab ) = 0. \\n DELETE itf\_tab FROM 18. \\n out->write( itf\_tab ). \\n\\ \\n FIND FIRST OCCURRENCE OF SUBSTRING 'as' \\n IN TABLE itf\_tab \\n IGNORING CASE \\n MATCH LINE DATA(mline) \\n MATCH OFFSET DATA(moff) \\n MATCH LENGTH DATA(mlen). \\n IF sy-subrc = 0. \\n out->write( |\\{ mline \\}, \\{ moff \\}, \\{ mlen \\}| ). \\n ENDIF. \\n\\ \\n DATA: \\n idx1 TYPE i, \\n idx2 TYPE i. \\n LOOP AT itf\_tab TRANSPORTING NO FIELDS WHERE tdformat = 'AS'. \\n idx2 = COND i( WHEN idx1 IS NOT INITIAL THEN sy-tabix ). \\n IF idx2 IS NOT INITIAL. \\n EXIT. \\n ENDIF. \\n idx1 = COND i( WHEN idx1 IS INITIAL THEN sy-tabix ). \\n ENDLOOP. \\n\\ \\n FIND FIRST OCCURRENCE OF SUBSTRING 'as' \\n IN TABLE itf\_tab \\n FROM idx1 OFFSET 2 TO idx2 - 1 \\n IGNORING CASE \\n MATCH LINE mline \\n MATCH OFFSET moff \\n MATCH LENGTH mlen. \\n IF sy-subrc = 0. \\n out->write( |\\{ mline \\}, \\{ moff \\}, \\{ mlen \\}| ). \\n ENDIF. \\n\\ \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapfind\_itab.html