---
title: "ABAPTABLE_LINE"
description: |
  ABAPTABLE_LINE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTABLE_LINE.htm"
abapFile: "ABAPTABLE_LINE.html"
keywords: ["do", "if", "class", "data", "types", "ABAPTABLE", "LINE"]
---

`[TYPES](ABAPTYPES_ITAB.html) ... [WITH](ABAPTYPES_KEYDEF.html) ... [KEY](ABAPTYPES_PRIMARY_KEY.html) TABLE LINE`. 
`[DATA](ABAPDATA_ITAB.html)  ... [WITH](ABAPDATA_KEYDEF.html) ... [KEY](ABAPDATA_PRIMARY_KEY.html) TABLE LINE`. 
`...`

The addition `TABLE LINE` can also be specified outside of classes in the declaration statements `TYPES`, `DATA`, and so on, instead of the pseudo component `table_line` in the definition of the primary table key.

The ABAP Compiler should consider this addition an error, retained only for reasons of downward compatibility. The pseudo component `table_line` should always be specified instead of `TABLE LINE`.

Usage of `TABLE LINE`.

Usage of `table_line`.

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY TABLE LINE. TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenitab\_declare\_obsolete.html