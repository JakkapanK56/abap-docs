---
title: "ABAPMODIFY_ITAB_RESULT"
description: |
  ABAPMODIFY_ITAB_RESULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_ITAB_RESULT.htm"
abapFile: "ABAPMODIFY_ITAB_RESULT.html"
keywords: ["select", "loop", "if", "data", "internal-table", "field-symbol", "ABAPMODIFY", "ITAB", "RESULT"]
---

[Short Reference](ABAPMODIFY_ITAB_SHORTREF.html)

`... \{ ASSIGNING <fs> [CASTING]\ [ELSE UNASSIGN]\}`\\ 
  `|\ \{ REFERENCE INTO dref \}.`

These additions are possible only when modifying [single lines](ABAPMODIFY_ITAB_SINGLE.html). If modified successfully, the addition `ASSIGNING` is used to assign the line to a field symbol and the addition `REFERENCE INTO` is used to set a reference to the modified line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [`READ TABLE`](ABAPREAD_TABLE_OUTDESC.html) and the same restrictions apply regarding the modification of key fields for [primary](ABENPRIMARY_TABLE_KEY_GLOSRY.html) and [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). In particular, inline declarations using the declaration operators [`DATA`](ABENDATA_INLINE.html), [`FINAL`](ABENFINAL_INLINE.html) and [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html) are possible. The addition `ELSE UNASSIGN` sets the state of the field symbol behind `ASSIGNING` to unassigned if the modification was not successful and `sy-subrc` is set to 4. Otherwise, the field symbol keeps its previous state.

Conversion of smoking seats to non-smoking seats in an internal table of flight bookings. After the loop, each line in the reference table `reftab` references a line in `itab` in which a change took place.

DATA itab TYPE HASHED TABLE OF sbook \\n WITH UNIQUE KEY carrid connid fldate bookid. \\n\\ \\nSELECT \* \\n FROM sbook \\n INTO TABLE @itab. \\n\\ \\nDATA reftab TYPE TABLE OF REF TO sbook WITH EMPTY KEY. \\nLOOP AT itab INTO DATA(line) WHERE smoker = 'X'. \\n CLEAR line-smoker. \\n MODIFY TABLE itab FROM line TRANSPORTING smoker \\n REFERENCE INTO FINAL(dref). \\n APPEND dref TO reftab. \\nENDLOOP. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapmodify\_itab.html abapmodify\_itab\_single.html