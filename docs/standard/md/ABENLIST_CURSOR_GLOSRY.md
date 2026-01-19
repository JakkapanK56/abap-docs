---
title: "ABENLIST_CURSOR_GLOSRY"
description: |
  ABENLIST_CURSOR_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_CURSOR_GLOSRY.htm"
abapFile: "ABENLIST_CURSOR_GLOSRY.html"
keywords: ["class", "ABENLIST", "CURSOR", "GLOSRY"]
---

Current cursor position for the output in a [list](ABENCLASSIC_LIST_GLOSRY.html) in the [list buffer](ABENLIST_BUFFER_GLOSRY.html). This is represented by the content of the [system fields](ABENSYSTEM_FIELD_GLOSRY.html)\\ [`sy-colno`](ABENSYSTEM_FIELDS.html) (position) and [`sy-linno`](ABENSYSTEM_FIELDS.html) (line) and refers to the current page in the list. Since a single character can occupy more columns in the list than positions in the list buffer, the horizontal position of the list cursor is only guaranteed to correspond to the column in the displayed list for the lower and upper output limits of the individual output.

ABENSAP\_GUI\_GLOSSARY.html