---
title: "ABAPSET_CURSOR_LIST"
description: |
  ABAPSET_CURSOR_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_CURSOR_LIST.htm"
abapFile: "ABAPSET_CURSOR_LIST.html"
keywords: ["select", "do", "if", "case", "try", "data", "field-symbol", "ABAPSET", "CURSOR", "LIST"]
---

[Short Reference](ABAPSET_CURSOR_SHORTREF.html)

`SET CURSOR \{\ \{ FIELD field LINE line                       [[DISPLAY|MEMORY] OFFSET off]\ \}`\\ 
           `|\ \{ LINE  line [[DISPLAY|MEMORY] OFFSET off]\ \}`\\ 
           `|\ \{ col lin \}\ \}.`

[1. `... FIELD field LINE line [[DISPLAY|MEMORY] OFFSET off]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... LINE line [[DISPLAY|MEMORY] OFFSET off]`](#ABAP_ALTERNATIVE_2@2@)

[3. `... col lin`](#ABAP_ALTERNATIVE_3@2@)

In list processing, this statement sets the cursor in the next list displayed on the screen. This is either the current list or, if no details list is created in an event block after an interactive list event, the previous list. The cursor can be positioned by specifying a field after `FIELD` or a line after `LINE`, or by specifying a specific position using `col` and `lin`.

If the statement `SET CURSOR` is not specified, the cursor is set by default on the first field in the list that is ready for input or in the command field in the [standard toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html).

The statement is ignored if the specified position is outside the display area of the list, or if it points to [line elements](ABENLINE_ELEMENT_GLOSRY.html).

The exact position of the cursor is only visible in output areas that are ready for input. Otherwise the entire area in which the cursor is positioned is selected.

The cursor is positioned in the list line specified in `line` in the output area of the data object whose name is contained in `field`. The entry is not case-sensitive.

The data object `field` must be character-like and [flat](ABENFLAT_GLOSRY.html). `line` and `off` expect data objects of type `i`.

If the data object specified in `field` was contained in the output more than once in the visible area of the line, the cursor is positioned in the first output area. If the data object specified in `field` does not occur in the visible area of the line, the specification is ignored.

If the cursor is to be positioned in the output area of a data object addressed in the `WRITE` statement using a field symbol, and the same data object is no longer assigned to the field symbol, the name of the data object must be contained in `field`, and not the name of the field symbol.

In the following output, the cursor is positioned in the output area ready for input of the field `input`. Without the `SET CURSOR` statement, the cursor would be positioned on the previous checkbox.

The cursor is positioned in the list line specified in `line`.

`line` and `off` expect data objects of type `i`.

This variant of the `SET CURSOR` statement does not work in [screen layouts](ABENSCREEN_GLOSRY.html).

The cursor is positioned in the column specified in `col` and the line specified in `lin` in the list window. `col` and `lin` expect data objects of the type `i`. Column counting begins at 2.

-   If `OFFSET` is not specified, the cursor is positioned in the first column of the output area.
-   If `OFFSET` is specified without an addition, or with the addition `DISPLAY`, the cursor is positioned in the column of the output area entered in `off`.
-   If `OFFSET` is specified with the addition `MEMORY`, the cursor is positioned on the character in the output area that is specified in `off` in the list buffer in the output of the data object in `field`. If this character is cut off in the list display, the cursor is set on the corresponding indicator (< or >).

-   If `OFFSET` is not specified, the cursor is positioned in the first column of the row.
-   If `OFFSET` is specified without an addition, or with the addition `DISPLAY`, the cursor is positioned in the column entered in `off`.
-   If `OFFSET` is specified with the addition `MEMORY`, the cursor is positioned on the character in the position specified in `off` in the list buffer. If this character is cut off in the list display, the cursor is set on the corresponding indicator (< or >).

DATA: flag TYPE c LENGTH 1, \\n inp TYPE c LENGTH 10. \\n\\ \\nSET BLANK LINES ON. \\nWRITE: / flag AS CHECKBOX, inp INPUT. \\nSET CURSOR FIELD 'inp' LINE sy-linno. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html