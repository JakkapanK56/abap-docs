---
title: "ABAPSET_MARGIN"
description: |
  ABAPSET_MARGIN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSET_MARGIN.htm"
abapFile: "ABAPSET_MARGIN.html"
keywords: ["select", "insert", "while", "if", "data", "ABAPSET", "MARGIN"]
---

[Short Reference](ABAPSET_MARGIN_SHORTREF.html)

`SET MARGIN macol [marow].`

This statement defines the left margin of a spool list as the columns specified in `macol`, and the upper margin as the rows specified in `marow`, and sets the system fields `sy-macol` and `sy-marow` to these values. `macol` and `marow` expect data objects with the type `i`, with values within the current page width and page length. If `macol` or `marow` contain invalid values, the associated operand is ignored.

The set values apply to the current page and all subsequent pages until the next `SET MARGIN` statement. If more than one `SET MARGIN` statement is specified on a page, the last one applies.

`SET MARGIN` is ignored when screen lists are displayed. The set margins are only inserted in the list as blanks or empty lines if a list page is sent to the SAP spool system. This applies to spool lists created using [`NEW-PAGE PRINT ON`](ABAPNEW-PAGE_PRINT.html), [`SUBMIT TO SAP-SPOOL`](ABAPSUBMIT_LIST_OPTIONS.html), and by the selection of *Execute and Print* on the [selection screen](ABENSELECTION_SCREEN_GLOSRY.html). `SET MARGIN` also applies if a screen list is spooled while it is being displayed, when *Print* (function code *PRI*) is selected.

For printers with an active list driver, margins can be defined in millimeters in the spool dialog. When pages are sent from the spool system to the printer, the pages, including the margins set using `SET MARGIN`, are positioned within these margins.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenprint.html abenprint\_control.html