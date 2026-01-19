---
title: "ABAPGET_CURSOR_SHORTREF"
description: |
  ABAPGET_CURSOR_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_CURSOR_SHORTREF.htm"
abapFile: "ABAPGET_CURSOR_SHORTREF.html"
keywords: ["loop", "ABAPGET", "CURSOR", "SHORTREF"]
---

[Reference](ABAPGET_CURSOR_DYNPRO.html)

`GET CURSOR \{\ \{ FIELD field                  [VALUE val]\                  [LENGTH len]\                  [[DISPLAY|MEMORY] OFFSET off]\                  [LINE line]\                  [AREA area]\ \}\             |\ \{ LINE line                  [VALUE val]\                  [LENGTH len]\                  [[DISPLAY|MEMORY] OFFSET off]\ \}\ \}.`

Evaluates the cursor position on [screens](ABENSCREEN_GLOSRY.html) and lists.

-   [`FIELD field`](ABAPGET_CURSOR_LIST_FIELD.html)\\
    Returns the name of the screen element of the field displayed on a list in `field` and determines further field-related properties of the cursor position.
    \\
    `VALUE val` - Returns the value of the screen element or the output area of a list in `val`.
    \\
    `LENGTH len` - Returns the length of the screen element or the output area of a list in `len`.
    \\
    `[DISPLAY|MEMORY] OFFSET off` - Returns the offset of the cursor in the screen element or in the output area of a list in `off`. In lists, `DISPLAY` and `MEMORY` distinguish between the screen position and the position in the list buffer.
    \\
    `LINE line` - Returns the number of the line for a [table control](ABENTABLE_CONTROL_GLOSRY.html), for a [step loop](ABENSTEP_LOOP_GLOSRY.html), or the list in `line`.
    \\
    `AREA area` - Returns the name of a table control in `area`.
-   [`LINE line`](ABAPGET_CURSOR_LIST_FIELD.html)\\
    Returns the number of the line of a table control, of a step loop, or the list in `line` and determines further line-related properties of the cursor position in lists.
    \\
    `VALUE val` - Returns the value of the list line in `val`.
    \\
    `LENGTH len` - Returns the length of the list line in `len`.
    \\
    `[DISPLAY|MEMORY] OFFSET off` - Returns the offset of the cursor in the list line in `off`. `DISPLAY` and `MEMORY` distinguish between screen position and position in the list buffer.

abenabap.html abenabap\_reference.html abenabap\_shortref.html