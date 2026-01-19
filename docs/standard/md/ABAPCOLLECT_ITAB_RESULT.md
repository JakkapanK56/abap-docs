---
title: "ABAPCOLLECT_ITAB_RESULT"
description: |
  ABAPCOLLECT_ITAB_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCOLLECT_ITAB_RESULT.htm"
abapFile: "ABAPCOLLECT_ITAB_RESULT.html"
keywords: ["insert", "do", "if", "data", "types", "field-symbol", "ABAPCOLLECT", "ITAB", "RESULT"]
---

[Short Reference](ABAPCOLLECT_SHORTREF.html)

`... \{ ASSIGNING <fs> [CASTING]\ \}`\\ 
  `|\ \{ REFERENCE INTO dref \}.`

The addition `ASSIGNING` is used to assign the inserted or existing line to a field symbol `<fs>` and the addition `REFERENCE INTO` is used to set a reference to the line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [`READ TABLE`](ABAPREAD_TABLE_OUTDESC.html) with the exception that the addition `ELSE UNASSIGN` cannot be used. The same restrictions apply regarding the modification of key fields for [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). In particular, inline declarations using the declaration operators [`DATA`](ABENDATA_INLINE.html), [`FINAL`](ABENFINAL_INLINE.html) and [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html) are possible.

The statement `COLLECT` is executed until the column `num` reaches the value 100 for one of the three possible key values.

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nTYPES: \\n BEGIN OF line, \\n key TYPE c LENGTH 1, \\n num TYPE i, \\n END OF line. \\nDATA \\n itab TYPE SORTED TABLE OF line \\n WITH UNIQUE KEY key. \\nDATA(t) = CONV i( cl\_demo\_date\_time=>get\_utc\_time( ) ). \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = t \\n min = 1 \\n max = 3 ). \\n\\ \\nDO. \\n COLLECT VALUE line( key = COND #( LET r = rnd->get\_next( ) IN \\n WHEN r = 1 THEN 'X' \\n WHEN r = 2 THEN 'Y' \\n WHEN r = 3 THEN 'Z' ) \\n num = 1 ) INTO itab \\n ASSIGNING FIELD-SYMBOL(). \\n IF \-num = 100. \\n EXIT. \\n ENDIF. \\nENDDO. \\n\\ \\nout->write( itab ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapcollect.html