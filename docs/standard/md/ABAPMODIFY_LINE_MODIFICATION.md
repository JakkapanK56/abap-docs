---
title: "ABAPMODIFY_LINE_MODIFICATION"
description: |
  ABAPMODIFY_LINE_MODIFICATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMODIFY_LINE_MODIFICATION.htm"
abapFile: "ABAPMODIFY_LINE_MODIFICATION.html"
keywords: ["do", "if", "data", "ABAPMODIFY", "LINE", "MODIFICATION"]
---

[Short Reference](ABAPMODIFY_LINE_SHORTREF.html)

`... [LINE VALUE FROM wa]\      [FIELD VALUE dobj1 [FROM wa1]\                   dobj2 [FROM wa2] ...]\      [LINE FORMAT ext_format_options]\      [FIELD FORMAT dobj1 ext_format_options1                    dobj2 ext_format_options2 ...].`

[1. `... LINE VALUE FROM wa`](#ABAP_ADDITION_1@3@)

[2. `... FIELD VALUE dobj1 [FROM wa1] dobj2 [FROM wa2] ...`](#ABAP_ADDITION_2@3@)

[3. `... LINE FORMAT ext_format_options`](#ABAP_ADDITION_3@3@)

[4. `... FIELD FORMAT dobj1 ext_format_options1 ...`](#ABAP_ADDITION_4@3@)

Specifies source fields for `MODIFY LINE`. The additions modify the list line once this has been overwritten with the content of the `sy-lisel` system field.

The addition `LINE VALUE` overwrites the entire list line with the content of `wa`.

The addition `FIELD VALUE` overwrites the output areas of individual `dobj1 dobj2 ...` data objects that are shown in the list line with the current content of these objects, or (if specified) the content of the data objects `wa1 wa2 ...`. `wa` or `wa1 wa2 ...` expect character-like data objects, which are truncated if they are too long. For data objects that are too short, the line or the output areas are filled from the right with blanks. If specified, `FIELD VALUE` overrides `LINE VALUE`.

If data objects `dobj1 dobj2...` appear more than once in a line with the same name, only the first one is processed. If a data object `dobj1 dobj2 ...` does not exist at all, the specification is ignored.

For `ext_format_options`, one or more additions of the statement [`FORMAT`](ABAPFORMAT.html) can be specified. The addition `FRAMES` cannot be used. The addition `LINE FORMAT` formats the whole list line accordingly; `FIELD FORMAT` formats only the output areas of the `dobj1 dobj2 ...` data objects displayed in the list line. If specified, `FIELD FORMAT` overrides `LINE FORMAT`.

If data objects `dobj1 dobj2...` appear more than once in a line with the same name, only the first one is processed. If a data object `dobj1 dobj2 ...` does not exist at all, the specification is ignored.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_complex.html abapmodify\_line.html