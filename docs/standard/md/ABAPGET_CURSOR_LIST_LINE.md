---
title: "ABAPGET_CURSOR_LIST_LINE"
description: |
  ABAPGET_CURSOR_LIST_LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_CURSOR_LIST_LINE.htm"
abapFile: "ABAPGET_CURSOR_LIST_LINE.html"
keywords: ["if", "data", "ABAPGET", "CURSOR", "LIST", "LINE"]
---

[Short Reference](ABAPGET_CURSOR_SHORTREF.html)

`... [VALUE val]\ [LENGTH len]\ [[DISPLAY|MEMORY] OFFSET off].`

[1. `... VALUE val`](#ABAP_ADDITION_1@3@)

[2. `... LENGTH len`](#ABAP_ADDITION_2@3@)

[3. `... [DISPLAY|MEMORY] OFFSET off`](#ABAP_ADDITION_3@3@)

Using these additions, further information about the cursor position can be read using the addition `LINE` of the statement [`GET CURSOR`](ABAPGET_CURSOR_LIST.html).

The addition `VALUE` assigns the formatted content of the list line on which the cursor is positioned to the data object `val`. `val` expects a character-like variable.

The addition `LENGTH` assigns the line length of the line on which the cursor is positioned, set using the addition `LINE-SIZE` of the program-initiating statement or using `NEW-PAGE` to the data object `len`. `len` expects a variable of the type `i`.

The addition `OFFSET` without an addition or with the addition `DISPLAY` assigns the position of the cursor in the displayed line on which it is positioned to the data object `off`. `off` expects a variable of the type `i`.

The addition `OFFSET` with the addition `MEMORY` assigns the position of the character in the list buffer line on whose output the cursor is currently positioned to the data object `off`. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. `off` expects a variable of the type `i`.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html abapget\_cursor\_list.html