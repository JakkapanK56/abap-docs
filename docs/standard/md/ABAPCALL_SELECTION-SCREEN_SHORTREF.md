---
title: "ABAPCALL_SELECTION-SCREEN_SHORTREF"
description: |
  ABAPCALL_SELECTION-SCREEN_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_SELECTION-SCREEN_SHORTREF.htm"
abapFile: "ABAPCALL_SELECTION-SCREEN_SHORTREF.html"
keywords: ["select", "if", "ABAPCALL", "SELECTION", "SCREEN", "SHORTREF"]
---

[Reference](ABAPCALL_SELECTION_SCREEN.html)

`CALL SELECTION-SCREEN dynnr                        [STARTING AT col1 lin1                        [ENDING   AT col2 lin2]]\                        [USING SELECTION-SET variant].`

Calls the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) of the number specified in `dynnr` and starts [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

-   `STARTING AT col1 lin1`\\
    Opens a modal dialog box at the position specified in `col1` and `lin1`.
-   `ENDING AT col2 lin2`\\
    Defines the lower right corner of the modal dialog box at the position specified in `col2` and `lin2`.
-   `USING SELECTION-SET variant`\\
    Specifies a [selection screen variant](ABENVARIANT_GLOSRY.html) from which the default values are taken.

abenabap.html abenabap\_reference.html abenabap\_shortref.html