---
title: "ABAPREPLACE_TABLE_RANGE"
description: |
  ABAPREPLACE_TABLE_RANGE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREPLACE_TABLE_RANGE.htm"
abapFile: "ABAPREPLACE_TABLE_RANGE.html"
keywords: ["if", "data", "types", "ABAPREPLACE", "TABLE", "RANGE"]
---

`... [FROM lin1 [OFFSET off1]]\      [TO   lin2 [OFFSET off2]] ...`

This addition restricts the search performed by the statement [`REPLACE IN TABLE`](ABAPREPLACE_ITAB.html) on the table section specified in the [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html)\\ `lin1`, `off1`, `lin2`, and `off2`. The syntax and semantics are the same as for the statement [`FIND`](ABAPFIND_TABLE_RANGE.html).

The following replacement creates the result shown below. It should be noted that the `OFFSET` addition of `TO` defines the end of the replacement range.

Result:

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 5, \\n col2 TYPE c LENGTH 5, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\nDATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 5 \\n ( col1 = 'abcde' col2 = 'abcde' ) ). \\n\\ \\nREPLACE ALL OCCURRENCES OF \`cd\` \\n IN TABLE itab \\n FROM 2 OFFSET 5 \\n TO 4 OFFSET 5 \\n WITH 'XX'. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). **col1** **col2**\\ `abcde` `abcde`\\ `abcde` `abXXe`\\ `abXXe` `abXXe`\\ `abXXe` `abcde`\\ `abcde` `abcde` abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapreplace\_itab.html