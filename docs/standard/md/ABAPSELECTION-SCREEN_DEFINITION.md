---
title: "ABAPSELECTION-SCREEN_DEFINITION"
description: |
  ABAPSELECTION-SCREEN_DEFINITION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSELECTION-SCREEN_DEFINITION.htm"
abapFile: "ABAPSELECTION-SCREEN_DEFINITION.html"
keywords: ["select", "do", "ABAPSELECTION", "SCREEN", "DEFINITION"]
---

[Short Reference](ABAPSELECTION-SCREEN_BOS_SHORTREF.html)

1\. `SELECTION-SCREEN BEGIN OF SCREEN dynnr [TITLE title]`\\
`[AS WINDOW].`\\
`...`\\
`SELECTION-SCREEN END OF SCREEN dynnr.`

2\. `SELECTION-SCREEN BEGIN OF SCREEN dynnr AS SUBSCREEN`\\
`[NO INTERVALS]`\\
`[NESTING LEVEL n].`\\
`...`\\
`SELECTION-SCREEN END OF SCREEN dynnr.`

These variants of the statement `SELECTION-SCREEN` create selection screens. Selection screens can be created as regular [dynpros](ABENDYNPRO_GLOSRY.html) or as [subscreen dynpros](ABENSUBSCREEN_DYNPRO_GLOSRY.html).

The [standard selection screen](ABAPSELECTION-SCREEN_STANDARD.html) for executable programs is created automatically.

[Selection Screens as Regular Dynpros](ABAPSELECTION-SCREEN_NORMAL.html)

[Selection Screens as Subscreen Dynpros](ABAPSELECTION-SCREEN_SUBSCREEN.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_create.html abapselection-screen.html