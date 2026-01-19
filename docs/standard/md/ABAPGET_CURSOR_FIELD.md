---
title: "ABAPGET_CURSOR_FIELD"
description: |
  ABAPGET_CURSOR_FIELD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPGET_CURSOR_FIELD.htm"
abapFile: "ABAPGET_CURSOR_FIELD.html"
keywords: ["loop", "if", "data", "ABAPGET", "CURSOR", "FIELD"]
---

[Short Reference](ABAPGET_CURSOR_SHORTREF.html)

`... [VALUE val]\ [LENGTH len]\ [OFFSET off]\ [LINE lin]\ [AREA area].`

[1. `... VALUE val`](#ABAP_ADDITION_1@3@)

[2. `... LENGTH len`](#ABAP_ADDITION_2@3@)

[3. `... OFFSET off`](#ABAP_ADDITION_3@3@)

[4. `... LINE lin`](#ABAP_ADDITION_4@3@)

[5. `... AREA area`](#ABAP_ADDITION_5@3@)

Using these additions, further information about the cursor position can be imported during [PAI](ABENPAI_GLOSRY.html) processing if the addition `FIELD` is specified for the statement [`GET CURSOR`](ABAPGET_CURSOR_DYNPRO.html).

The addition `VALUE` assigns the formatted content of the screen element on which the cursor is positioned to the data object `val` as a character string. `val` expects a character-like variable.

The addition `LENGTH` assigns the length of the screen element on which the cursor is positioned to the data object `len`. `len` expects a variable of the type `i`.

The addition `OFFSET` assigns the position of the cursor within the screen element on which the cursor is positioned to the data object `off`. `off` expects a variable of the type `i`.

If the screen element on which the cursor is positioned is within a [table control](ABENTABLE_CONTROL_GLOSRY.html) or a [step loop](ABENSTEP_LOOP_GLOSRY.html), the addition `LINE` assigns the number of the line of the table control or the group of the step loop to the data object `lin`. If not, `lin` is set to 0. `lin` expects a variable of the type `i`.

If the screen element on which the cursor is positioned is within a [table control](ABENTABLE_CONTROL_GLOSRY.html), the addition `AREA` assigns the name of the table control to the data object `area`. If not, `area` is initialized. `area` expects a character-like variable.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpros\_abap\_statements.html abapget\_cursor\_dynpro.html