---
title: "ABAPINSERT_ITAB_RESULT"
description: |
  ABAPINSERT_ITAB_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_ITAB_RESULT.htm"
abapFile: "ABAPINSERT_ITAB_RESULT.html"
keywords: ["insert", "loop", "do", "if", "data", "internal-table", "field-symbol", "ABAPINSERT", "ITAB", "RESULT"]
---

[Short Reference](ABAPINSERT_ITAB_SHORTREF.html)

`... \{ ASSIGNING <fs> [CASTING]\ [ELSE UNASSIGN]\ \}`\\ 
  `|\ \{ REFERENCE INTO dref \}.`

These additions can only be used when inserting single lines. If the insertion is successful, the addition `ASSIGNING` is used to assign the inserted line to a field symbol `<fs>` or the addition `REFERENCE INTO` is used to set a reference to the inserted line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [`READ TABLE`](ABAPREAD_TABLE_OUTDESC.html) and the same restrictions apply regarding the modification of key fields for [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). In particular, inline declarations using the declaration operators [`DATA`](ABENDATA_INLINE.html), [`FINAL`](ABENFINAL_INLINE.html) and [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html) are possible. The addition `ELSE UNASSIGN` sets the state of the field symbol behind `ASSIGNING` to unassigned if the insertion was not successful and `sy-subrc` is set to 4. Otherwise, the field symbol keeps its previous state.

See addition [`INITIAL LINE`](ABAPINSERT_ITAB_LINESPEC.html).

After the `DO` loop, the internal table `ref_tab` contains references to each line of the internal table `itab`.

DATA: \\n itab TYPE SORTED TABLE OF string WITH UNIQUE KEY table\_line, \\n ref\_tab TYPE STANDARD TABLE OF REF TO string. \\n\\ \\nFINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`. \\nDO strlen( abcde ) TIMES. \\n INSERT substring( val = abcde off = sy-index - 1 len = 1 ) \\n INTO TABLE itab \\n REFERENCE INTO FINAL(dref). \\n APPEND dref TO ref\_tab. \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapinsert\_itab.html