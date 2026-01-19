---
title: "ABAPAPPEND_RESULT"
description: |
  ABAPAPPEND_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAPPEND_RESULT.htm"
abapFile: "ABAPAPPEND_RESULT.html"
keywords: ["loop", "do", "if", "data", "internal-table", "field-symbol", "ABAPAPPEND", "RESULT"]
---

[Short Reference](ABAPAPPEND_SHORTREF.html)

`... \{ ASSIGNING <fs> [CASTING]\}`\\ 
  `|\ \{ REFERENCE INTO dref \}.`

These additions can only be used when appending single lines. If the append was successful, the addition `ASSIGNING` is used to assign the appended line to a field symbol `<fs>`; the addition `REFERENCE INTO` is used to set a reference to the appended line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [`READ TABLE`](ABAPREAD_TABLE_OUTDESC.html) with the exception that the addition `ELSE UNASSIGN` cannot be used. The same restrictions apply regarding the modification of key fields for [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). In particular, inline declarations using the declaration operators [`DATA`](ABENDATA_INLINE.html), [`FINAL`](ABENFINAL_INLINE.html) and [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html) are possible.

Append two lines to an internal table and assign a field symbol to the first line and set a reference in the second line.

After the `DO` loop, the data references in `stab` point to the random numbers up to 50 and those in `ltab` point to the random numbers greater than 50 that were appended to `itab`.

DATA itab TYPE TABLE OF string WITH EMPTY KEY. \\n\\ \\nAPPEND \`First line\` TO itab ASSIGNING FIELD-SYMBOL(). \\nAPPEND \`Second line\` TO itab REFERENCE INTO FINAL(dref). \\n\\ \\ncl\_demo\_output=>new( \\n )->write( \\ \\n )->write( dref->\* \\n )->display( ). DATA: \\n itab TYPE TABLE OF i WITH EMPTY KEY, \\n stab TYPE TABLE OF REF TO i WITH EMPTY KEY, \\n ltab TYPE TABLE OF REF TO i WITH EMPTY KEY. \\n\\ \\nFINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit \\n min = 1 \\n max = 100 ). \\n\\ \\nDO 100 TIMES. \\n APPEND rnd->get\_next( ) TO itab REFERENCE INTO FINAL(dref). \\n IF dref->\* <= 50. \\n APPEND dref TO stab. \\n ELSE. \\n APPEND dref TO ltab. \\n ENDIF. \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapappend.html