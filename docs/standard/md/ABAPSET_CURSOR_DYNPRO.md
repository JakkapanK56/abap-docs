---
title: "ABAPSET_CURSOR_DYNPRO"
description: |
  ABAPSET_CURSOR_DYNPRO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_CURSOR_DYNPRO.htm"
abapFile: "ABAPSET_CURSOR_DYNPRO.html"
keywords: ["select", "loop", "if", "case", "data", "ABAPSET", "CURSOR", "DYNPRO"]
---

[Short Reference](ABAPSET_CURSOR_SHORTREF.html)

`SET CURSOR \{\ \{ FIELD field [LINE line]\ [[DISPLAY] OFFSET off]\ \}`\\ 
           `|\ \{ col lin \}\ \}.`

[1. `... FIELD field [LINE line]\ [[DISPLAY] OFFSET off]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... col lin`](#ABAP_ALTERNATIVE_2@2@)

During [PBO](ABENPBO_GLOSRY.html) processing, this statement sets the cursor in the [screen layout](ABENSCREEN_GLOSRY.html) of the current [dynpro](ABENDYNPRO_GLOSRY.html). The cursor can be positioned by specifying a screen element after `FIELD` or by specifying the absolute positions `col` and `lin`. Outside of PBO processing, the cursor is positioned in the next [list](ABAPSET_CURSOR_LIST.html) displayed on the screen.

If the statement `SET CURSOR` is not specified, the cursor is set according to the following hierarchy, depending on the definition of the dynpro:

The latter also applies if the command field in the system toolbar is not displayed.

The cursor is positioned on the screen element whose name is contained in uppercase letters in `field`. The data object `field` must be character-like and [flat](ABENFLAT_GLOSRY.html). The screen layout or a [table control](ABENTABLE_CONTROL_GLOSRY.html) is scrolled in the display so that the screen element on which the cursor is positioned is visible. If the specified screen element is not found, the statement is ignored.

If the specified screen element is part of a table control or a [step loop](ABENSTEP_LOOP_GLOSRY.html), the line of the table control or group of the step loop in which the cursor is positioned on the specified screen element must be specified using the addition `LINE`. The data object `line` expects the type `i`. If there is no row or group for the value of `line`, or the addition `LINE` is not specified, the statement is ignored. The statement is also ignored if the addition `LINE` is specified and the screen element is not part of a table control or step loop.

If the addition `OFFSET` is not specified, the cursor is set to the first position of the screen element. Using the addition `OFFSET`, the cursor can be set to the position in a screen element entered in `off`, where the counter begins at 0. The position of the cursor is only visible in input/output fields. In other screen elements, the whole element is selected. The data object `off` expects the type `i`. If the value of `off` is greater than the length of the screen element, the addition is ignored. If the value of `off` is negative, the cursor is positioned at the end of the screen element. The addition `DISPLAY` is standard and can be omitted.

The cursor is positioned in the column specified in `col` and the line specified in `lin` in the screen layouts, if a screen element exists in this position that is not part of a [table control](ABENTABLE_CONTROL_GLOSRY.html) or [tabstrip control](ABENTABSTRIP_CONTROL_GLOSRY.html). `col` and `lin` expect data objects of the type `i`. The counting of the columns starts at 2. If the screen element is not an input/output field, the entire element is selected. If no screen element is available at the specified positions, or if the cursor is positioned in a table control or tabstrip control, or if negative values are entered in `col` or `lin`, the statement is ignored.

1.  on the cursor position determined statically in the dynpro properties,
2.  on the first input field of the dynpro,
3.  on the first screen element of the dynpro,
4.  on the command field in the [system toolbar](ABENSTANDARD_TOOLBAR_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html