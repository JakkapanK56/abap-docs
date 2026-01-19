---
title: "ABAPSET_CURSOR_SHORTREF"
description: |
  ABAPSET_CURSOR_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_CURSOR_SHORTREF.htm"
abapFile: "ABAPSET_CURSOR_SHORTREF.html"
keywords: ["loop", "if", "class", "ABAPSET", "CURSOR", "SHORTREF"]
---

[Reference](ABAPSET_CURSOR_DYNPRO.html)

`SET CURSOR \{\ \{ FIELD field [LINE line]\                       [[DISPLAY|MEMORY] OFFSET off]\ \}\             |\ \{ LINE line                      [[DISPLAY|MEMORY] OFFSET off]\ \}\             |\ \{ col lin \}\ \}.`

Sets the cursor position on [screens](ABENSCREEN_GLOSRY.html) and [lists](ABENCLASSIC_LIST_GLOSRY.html).

-   [`FIELD field [LINE line]`](ABAPSET_CURSOR_DYNPRO.html)\\
    Sets the cursor on the screen element or the field `field` displayed in a list, where `line` specifies the number of a line in a [table control](ABENTABLE_CONTROL_GLOSRY.html) for a [step loop](ABENSTEP_LOOP_GLOSRY.html) or a list.
-   [`LINE line`](ABAPSET_CURSOR_LIST.html)\\
    Sets the cursor on the line of a table control, a step loop, or a list, specified in `line`.
-   [`[DISPLAY|MEMORY] OFFSET off`](ABAPSET_CURSOR_LIST.html)\\
    Defines the offset `off` on which the cursor is set in the specified element. In lists, `DISPLAY` and `MEMORY` distinguish between the screen position and the position in the list buffer.
-   [`col lin`](ABAPSET_CURSOR_DYNPRO.html)\\
    Sets the cursor to the column of the screen specified in `col` and the line of the screen specified in `lin`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html