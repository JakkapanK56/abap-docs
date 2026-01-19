---
title: "ABAPCALL_SCREEN_SHORTREF"
description: |
  ABAPCALL_SCREEN_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_SCREEN_SHORTREF.htm"
abapFile: "ABAPCALL_SCREEN_SHORTREF.html"
keywords: ["if", "ABAPCALL", "SCREEN", "SHORTREF"]
---

[Reference](ABAPCALL_SCREEN.html)

`CALL SCREEN dynnr              [STARTING AT col1 lin1              [ENDING   AT col2 lin2]].`

Calls the [dynpro](ABENDYNPRO_GLOSRY.html) of the number specified in `dynnr` and starts a [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html) defined by the [next dynpros](ABENNEXT_DYNPRO_GLOSRY.html) of the called dynpro.

-   `STARTING AT col1 lin1`\\
    Opens a modal dialog box at the position specified in `col1` and `lin1`.
-   `ENDING AT col2 lin2`\\
    Defines the lower right corner of the modal dialog box at the position specified in `col2` and `lin2`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html