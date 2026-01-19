---
title: "ABAPFIND_SECTION_OF"
description: |
  ABAPFIND_SECTION_OF - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPFIND_SECTION_OF.htm"
abapFile: "ABAPFIND_SECTION_OF.html"
keywords: ["do", "if", "data", "ABAPFIND", "SECTION"]
---

`... SECTION [OFFSET off]\ [LENGTH len] OF ...`

This addition restricts the search of the statements [`FIND`](ABAPFIND.html) and [`REPLACE`](ABAPREPLACE_IN_PATTERN.html) in `dobj` to the section from the [offset](ABENOFFSET_GLOSRY.html) specified in `off` with the length specified in `len`. Without the addition `SECTION`, the entire data object is searched. With `SECTION`, at least one of the additions `OFFSET` or `LENGTH` must be specified. If an offset is specified without specifying the length, the data object `dobj` is searched from the offset `off` to its end. If a length is specified but no offset, the offset 0 is used implicitly.

`off` and `len` are [numeric expression positions](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with the operand type `i`. Apart from one exception, the values of `off` and `len` must be greater than or equal to 0 and the section specified by `off` and `len` must be within the length of `dobj`. As an exception, the value of `len` can also be `-1` and this value has the same effect as omitting the addition `LENGTH`.

The specification `-1` for `len` works in the same way as not using the addition `LENGTH` by passing a value to the statement.

The `FIND` statement searches from offset 12 and finds the *html* substring at offset 20.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFIND 'html' IN SECTION OFFSET 12 \\n OF \`This is html\` \\n MATCH OFFSET FINAL(moff). \\nout->write( moff ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_statements.html abapfind.html