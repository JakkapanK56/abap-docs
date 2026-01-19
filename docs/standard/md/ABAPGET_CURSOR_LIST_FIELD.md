---
title: "ABAPGET_CURSOR_LIST_FIELD"
description: |
  ABAPGET_CURSOR_LIST_FIELD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_CURSOR_LIST_FIELD.htm"
abapFile: "ABAPGET_CURSOR_LIST_FIELD.html"
keywords: ["if", "data", "ABAPGET", "CURSOR", "LIST", "FIELD"]
---

[Short Reference](ABAPGET_CURSOR_SHORTREF.html)

`... [VALUE val]\ [LENGTH len]\      [[DISPLAY|MEMORY] OFFSET off]\ [LINE lin].`

[1. `... VALUE val`](#ABAP_ADDITION_1@3@)

[2. `... LENGTH len`](#ABAP_ADDITION_2@3@)

[3. `... [DISPLAY|MEMORY] OFFSET off`](#ABAP_ADDITION_3@3@)

[4. `... LINE lin`](#ABAP_ADDITION_4@3@)

Using these additions, further information about the cursor position can be read during list processing with the addition `FIELD` of the [`GET CURSOR`](ABAPGET_CURSOR_LIST.html) statement.

The addition `VALUE` assigns the formatted content of the output area on which the cursor is positioned to the data object `val`. `val` expects a character-like variable.

The addition `LENGTH` assigns the length of the output area on which the cursor is positioned to the data object `len`. `len` expects a variable of the type `i`.

The addition `OFFSET` without an addition or with the addition `DISPLAY` assigns the position of the cursor in the output area on which it is positioned to the data object `off`. `off` expects a variable of the type `i`. Counting begins at 0.

The addition `OFFSET` with the addition `MEMORY` assigns the offset of the character in the area of the data object in the list buffer on whose output the cursor is positioned to the data object `off`. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. `off` expects a variable of the type `i`.

If [substrings](ABENOFFSET_LENGTH.html) are displayed in lists, the returned offset is counted starting from the offset of the substring.

The addition `LINE` assigns the number of the list line on which the cursor is positioned to the data object `lin`. `lin` expects a variable of the type `i`.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html abapget\_cursor\_list.html