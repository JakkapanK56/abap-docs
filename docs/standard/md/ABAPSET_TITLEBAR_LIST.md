---
title: "ABAPSET_TITLEBAR_LIST"
description: |
  ABAPSET_TITLEBAR_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_TITLEBAR_LIST.htm"
abapFile: "ABAPSET_TITLEBAR_LIST.html"
keywords: ["do", "if", "ABAPSET", "TITLEBAR", "LIST"]
---

[Short Reference](ABAPSET_TITLEBAR_SHORTREF.html)

 `SET TITLEBAR title [OF PROGRAM prog]\                     [WITH text1 ... text9].`

[1. `... OF PROGRAM prog`](#ABAP_ADDITION_1@3@)

[2. `... WITH text1 ... text9`](#ABAP_ADDITION_2@3@)

In list processing, this statement sets the GUI title specified in `title` for the display window of the current list level and all following list levels up to the next statement `SET TITLEBAR`. The statement has mostly the same syntax and semantics as for [dynpros](ABAPSET_TITLEBAR_DYNPRO.html).

Unlike in [screens](ABENSCREEN_GLOSRY.html) of dynpros, each list level remains automatically linked with the title set for it. When the display of a higher list level is switched to the display of a lower list level, the latter is displayed with the title that was set for it.

As for [dynpros](ABAPSET_TITLEBAR_DYNPRO.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenlists\_displayed.html