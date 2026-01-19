---
title: "ABAPTOP-OF-PAGE"
description: |
  ABAPTOP-OF-PAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTOP-OF-PAGE.htm"
abapFile: "ABAPTOP-OF-PAGE.html"
keywords: ["select", "if", "ABAPTOP", "PAGE"]
---

[Short Reference](ABAPTOP-OF-PAGE_SHORTREF.html)

`TOP-OF-PAGE [DURING LINE-SELECTION].`

[`... DURING LINE-SELECTION`](#ABAP_ONE_ADD@1@)

This statement defines an event block whose event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) when a list is created when a new page begins, that is, immediately before the first line on a new page is output. All list output produced in the event block is placed below the standard page header of the list. It is not possible to output lines than are available on the page within the event block. The statement [`NEW-PAGE`](ABAPNEW-PAGE.html) is ignored within this event block.

All output written to the list in the event block is part of the [page header](ABENPAGE_HEADER_GLOSRY.html) of the current list page. The top displayed page header cannot be moved when scrolling vertically in a list displayed on the screen.

For each `TOP-OF-PAGE` event, the placeholders *&1* - *&9* are replaced by the content of the system fields `sy-tvar0` - `sy-tvar9` in the standard header and the column headers of the standard page header when a basic list is created. Values can be assigned to these system fields in the program.

If no addition is specified, an event block is raised for the event `TOP-OF-PAGE` when a basic list is created. If the addition `DURING LINE-SELECTION` is specified, an event block is raised for the corresponding events when details lists are created. System fields like `sy-lsind` must be used to distinguish between the individual details lists.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_interactive.html