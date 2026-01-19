---
title: "ABAPUNASSIGN"
description: |
  ABAPUNASSIGN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPUNASSIGN.htm"
abapFile: "ABAPUNASSIGN.html"
keywords: ["do", "if", "data", "field-symbol", "ABAPUNASSIGN"]
---

`UNASSIGN <fs>.`

This statement initializes the field symbol `<fs>`. After the statement, the field symbol does not reference a memory area and the [predicate expression](ABENPREDICATE_EXPRESSION_GLOSRY.html)\\ [`<fs> IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) is false.

A field symbol to which a memory area is assigned is initialized with `UNASSIGN`.

-   The statement [`CLEAR <fs>`](ABAPCLEAR.html) does not initialize the field symbol and the memory area that is assigned to the field symbol is initialized instead.
-   Unlike the initialization of reference variables, the statement `UNASSIGN` does not affect the [Garbage Collector](ABENGARBAGE_COLLECTOR_GLOSRY.html).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nFIELD-SYMBOLS TYPE string. \\n\\ \\nASSIGN \`text\` TO . \\nIF IS ASSIGNED. \\n out->write( 'assigned' ). \\nENDIF. \\n\\ \\nUNASSIGN . \\nIF IS NOT ASSIGNED. \\n out->write( 'unassigned' ). \\nENDIF. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html