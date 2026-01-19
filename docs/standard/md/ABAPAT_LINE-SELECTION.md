---
title: "ABAPAT_LINE-SELECTION"
description: |
  ABAPAT_LINE-SELECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPAT_LINE-SELECTION.htm"
abapFile: "ABAPAT_LINE-SELECTION.html"
keywords: ["select", "do", "if", "ABAPAT", "LINE", "SELECTION"]
---

[Short Reference](ABAPAT_LINE-SELECTION_SHORTREF.html)

`AT LINE-SELECTION.`

This statement defines an event block whose event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) when a screen list is displayed if the screen cursor is on a list line and a function is selected using the function code `PICK`. By defining this event block, the [standard list status](ABENSTANDARD_LIST_STATUS_GLOSRY.html) is enhanced automatically in such a way that the function code F2 and, with it, the double-click mouse functionality is linked with the function code `PICK`.

If the function key F2 is linked with a function code other than `PICK`, each double click raises its event, usually `AT USER-COMMAND`, and not `AT LINE-SELECTION`.

If the following section of an executable program is executed with the standard list status, selecting a line with the left mouse key raises the event `AT LINE-SELECTION` and creates details lists.

START-OF-SELECTION. \\n WRITE 'Click me!' COLOR = 5 HOTSPOT. \\n\\ \\nAT LINE-SELECTION. \\n WRITE: / 'You clicked list', sy-listi, \\n / 'You are on list', sy-lsind. \\n IF sy-lsind < 20. \\n SKIP. \\n WRITE: 'More ...' COLOR = 5 HOTSPOT. \\n ENDIF. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_interactive.html abapat\_list\_event.html