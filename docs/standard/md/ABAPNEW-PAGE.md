---
title: "ABAPNEW-PAGE"
description: |
  ABAPNEW-PAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPNEW-PAGE.htm"
abapFile: "ABAPNEW-PAGE.html"
keywords: ["insert", "do", "if", "ABAPNEW", "PAGE"]
---

[Short Reference](ABAPNEW-PAGE_SHORTREF.html)

``NEW-PAGE [[`page_options`](ABAPNEW-PAGE_OPTIONS.html)]\ [[`spool_options`](ABAPNEW-PAGE_PRINT.html)].``

This statement allows the creation of a new page in the current list and the writing of the subsequent list output to a spool list. The additions [`page_options`](ABAPNEW-PAGE_OPTIONS.html) determine general properties of the new page. The additions [`spool_options`](ABAPNEW-PAGE_PRINT.html) control the spool list output.

The statement `NEW-PAGE` completes the current page. If output was created by [`WRITE`](ABAPWRITE-.html) or [`ULINE`](ABAPULINE.html) on the current page, a new page is created and the value in `sy-pagno` is increased by 1. A blank line is inserted between the individual pages. The [list cursor](ABENLIST_CURSOR_GLOSRY.html) is set to the first position of the first line below the standard page header of the new page.

The new page is created independently of the current list cursor position underneath the last line of the current page in which output was created.

-   The statement `NEW-PAGE` cannot be used to create empty pages.
-   The statement `NEW-PAGE` does not raise the list event [`END-OF-PAGE`](ABAPEND-OF-PAGE.html). This list event is raised only if the page footer or page end is reached when the list is being written. If `NEW-PAGE` is executed at exactly this event, it just looks like `END-OF-PAGE` was triggered by this statement, like for any other statement.
-   The event [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html) is raised before the first output on the new page.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html