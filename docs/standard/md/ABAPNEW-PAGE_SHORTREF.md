---
title: "ABAPNEW-PAGE_SHORTREF"
description: |
  ABAPNEW-PAGE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPNEW-PAGE_SHORTREF.htm"
abapFile: "ABAPNEW-PAGE_SHORTREF.html"
keywords: ["if", "ABAPNEW", "PAGE", "SHORTREF"]
---

[Reference](ABAPNEW-PAGE.html)

`NEW-PAGE [WITH-TITLE|NO-TITLE]\           [WITH-HEADING|NO-HEADING]\           [LINE-COUNT page_lines]\           [LINE-SIZE width]\           [NO-TOPOFPAGE]\           [\ \{ PRINT ON [NEW-SECTION]\                         PARAMETERS pri_params                        [ARCHIVE PARAMETERS arc_params]\                         NO DIALOG \}\           |\ \{ PRINT OFF \}\ ].`

Creates a new page in a list.

-   [`WITH-TITLE|NO-TITLE`](ABAPNEW-PAGE_OPTIONS.html)\\
    Switches the standard title on and off.
-   [`WITH-HEADING|NO-HEADING`](ABAPNEW-PAGE_OPTIONS.html)\\
    Switches the column headings on and off.
-   [`LINE-COUNT page_lines`](ABAPNEW-PAGE_OPTIONS.html)\\
    Defines the page length.
-   [`LINE-SIZE page_lines`](ABAPNEW-PAGE_OPTIONS.html)\\
    Defines the line width.
-   [`NO-TOPOFPAGE`](ABAPNEW-PAGE_OPTIONS.html)\\
    Suppresses the event `TOP-OF-PAGE`.
-   [`PRINT ON`](ABAPNEW-PAGE_PRINT.html)\\
    Redirects the output statements to a spool list.
-   [`NEW-SECTION`](ABAPNEW-PAGE_PRINT.html)\\
    Creates a new [spool request](ABENSPOOL_REQUEST_GLOSRY.html) with different spool parameters.
-   [`PARAMETERS pri_params`](ABAPNEW-PAGE_PRINT.html)\\
    Specifies the spool parameters in a structure `pri_params` of type `PRI_PARAMS`.
-   [`ARCHIVE PARAMETERS arc_params`](ABAPNEW-PAGE_PRINT.html)\\
    Specifies the archiving parameters in a structure `arc_params` of type `ARC_PARAMS`.
-   [`NO DIALOG`](ABAPNEW-PAGE_PRINT.html)\\
    Suppresses the spool dialog box.
-   [`PRINT OFF`](ABAPNEW-PAGE_PRINT.html)\\
    Closes the current spool list.

abenabap.html abenabap\_reference.html abenabap\_shortref.html