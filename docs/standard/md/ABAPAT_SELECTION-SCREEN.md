---
title: "ABAPAT_SELECTION-SCREEN"
description: |
  ABAPAT_SELECTION-SCREEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_SELECTION-SCREEN.htm"
abapFile: "ABAPAT_SELECTION-SCREEN.html"
keywords: ["select", "if", "data", "ABAPAT", "SELECTION", "SCREEN"]
---

[Short Reference](ABAPAT_SELECTION-SCREEN_SHORTREF.html)

``AT SELECTION-SCREEN [`selscreen_event`](ABAPAT_SELECTION-SCREEN_EVENTS.html).``

This statement defines event blocks for different events [`selscreen_event`](ABAPAT_SELECTION-SCREEN_EVENTS.html) that are raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) during [selection screen processing](ABENSELSCREEN_PROCESSING_GLOSRY.html).

Selection screen events occur immediately before sending a [selection screen](ABENSELECTION_SCREEN_GLOSRY.html) and after certain user actions on a displayed selection screen. They are used for selection screen processing in the ABAP program.

`AT SELECTION-SCREEN` is raised at least twice during actions on selection screens that are included in another selection screen as a [subscreen](ABENSUBSCREEN_GLOSRY.html): first for the included selection screen itself, and then for the including selection screens.

The event blocks after `AT SELECTION-SCREEN` are implemented internally as [procedures](ABENPROCEDURE_GLOSRY.html). Declarative statements in these event blocks create local data.

The program `DEMO_SELECTION_SCREEN_EVENTS` demonstrates all selection screen events.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenselection\_screen.html abenselection\_screen\_events.html