---
title: "ABAPSELECTION-SCREEN_BOS_SHORTREF"
description: |
  ABAPSELECTION-SCREEN_BOS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_BOS_SHORTREF.htm"
abapFile: "ABAPSELECTION-SCREEN_BOS_SHORTREF.html"
keywords: ["select", "do", "if", "ABAPSELECTION", "SCREEN", "BOS", "SHORTREF"]
---

[Reference](ABAPSELECTION-SCREEN_DEFINITION.html)

`SELECTION-SCREEN BEGIN OF SCREEN dynnr \{\ \{\ [TITLE title]\                                             [AS WINDOW]\ \}\                                         |\ \{ AS SUBSCREEN                                             [NO INTERVALS]\                                             [NESTING LEVEL n]\ \}\ \}.  ...  SELECTION-SCREEN END OF SCREEN dynnr.`

Defines a standalone [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) with the [dynpro number](ABENDYNPRO_NUMBER_GLOSRY.html)\\ `dynnr`. The elements of the selection screen are defined between the two statements. Any selection screen elements declared outside of these statements are part of the standard selection screen with the dynpro number 1000.

-   [`TITLE title`](ABAPSELECTION-SCREEN_NORMAL.html)\\
    Specifies a title `title` in the title bar.
-   [`AS WINDOW`](ABAPSELECTION-SCREEN_NORMAL.html)\\
    Defines a selection screen for a modal dialog box.
-   [`AS SUBSCREEN`](ABAPSELECTION-SCREEN_SUBSCREEN.html)\\
    Defines a selection screen as a [subscreen dynpro](ABENSUBSCREEN_DYNPRO_GLOSRY.html).
-   [`NO INTERVALS`](ABAPSELECTION-SCREEN_SUBSCREEN.html)\\
    Sets the addition `NO INTERVALS` for all selection criteria of the selection screen.
-   [`NESTING LEVEL n`](ABAPSELECTION-SCREEN_SUBSCREEN.html)\\
    Adjusts the width of the [subscreens](ABENSUBSCREEN_GLOSRY.html) within [tabstrips](ABENTABSTRIP_CONTROL_GLOSRY.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html