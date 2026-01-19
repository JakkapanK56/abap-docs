---
title: "ABAPAT_SELECTION-SCREEN_SHORTREF"
description: |
  ABAPAT_SELECTION-SCREEN_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_SELECTION-SCREEN_SHORTREF.htm"
abapFile: "ABAPAT_SELECTION-SCREEN_SHORTREF.html"
keywords: ["select", "ABAPAT", "SELECTION", "SCREEN", "SHORTREF"]
---

[Reference](ABAPAT_SELECTION-SCREEN.html)

`AT SELECTION-SCREEN [ OUTPUT                      |\ \{ON \{par|selcrit\}\}\                      |\ \{ON END OF selcrit\}\                      |\ \{ON BLOCK block\}\                      |\ \{ON RADIOBUTTON GROUP group\}\                      |\ \{ON \{HELP-REQUEST|VALUE-REQUEST\}\                         FOR \{par|selcrit-low|selcrit-high\}\}\                      |\ \{ON EXIT-COMMAND\}\ ].`

Introduces event blocks whose events are raised at certain times in [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html). Without an addition, the event is raised when selection screen processing is completed.

-   [`OUTPUT`](ABAPAT_SELECTION-SCREEN_EVENTS.html)\\
    [PBO](ABENPBO_GLOSRY.html) event of the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html).
-   [`ON \{par|selcrit\}`](ABAPAT_SELECTION-SCREEN_EVENTS.html)\\
    Passes single parameters `par` or single fields from selection criteria `selcrit`.
-   [`ON END OF selcrit`](ABAPAT_SELECTION-SCREEN_EVENTS.html)\\
    Passes a [selection table](ABENSELECTION_TABLE_GLOSRY.html)\\ `selcrit`.
-   [`ON BLOCK block`](ABAPAT_SELECTION-SCREEN_EVENTS.html)\\
    Passes a block `block`.
-   [`ON RADIOBUTTON GROUP group`](ABAPAT_SELECTION-SCREEN_EVENTS.html)\\
    Passes a radio button group `group`.
-   [`ON \{HELP-REQUEST|VALUE-REQUEST\}\ FOR \{par|selcrit-low|selcrit-high\}`](ABAPAT_SELECTION-SCREEN_EVENTS.html)\\
    Requests the [field help](ABENFIELD_HELP_GLOSRY.html) or [input help](ABENINPUT_HELP_GLOSRY.html) for the input fields of parameters `par` or selection criteria `selcrit`.
-   [`ON EXIT-COMMAND`](ABAPAT_SELECTION-SCREEN_EVENTS.html)\\
    Cancels selection screen processing.

abenabap.html abenabap\_reference.html abenabap\_shortref.html