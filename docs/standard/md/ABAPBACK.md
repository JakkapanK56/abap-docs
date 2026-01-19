---
title: "ABAPBACK"
description: |
  ABAPBACK - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPBACK.htm"
abapFile: "ABAPBACK.html"
keywords: ["if", "data", "ABAPBACK"]
---

[Short Reference](ABAPBACK_SHORTREF.html)

`BACK.`

This statement positions the [list cursor](ABENLIST_CURSOR_GLOSRY.html) on the first position of the first line in a logical unit. A list contains the following logical units:

Output of a small input mask. The input fields are positioned after the description.

-   A line block defined using [`RESERVE`](ABAPRESERVE.html).
-   If `BACK` is executed after the statement `RESERVE`, the list cursor is placed in the first line of the current line block.
-   The lines within a user-defined [page header](ABENPAGE_HEADER_GLOSRY.html).
-   If `BACK` is executed within the event block for [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html) and is not placed after `RESERVE`, the list cursor is positioned in the first line below the standard page header.
-   The lines of a page below the page header.
-   If `BACK` is executed outside of the event block for `TOP-OF-PAGE` and not after `RESERVE`, the list cursor is positioned in the first line below the page header.

DATA: title TYPE c LENGTH 3, \\n sname TYPE c LENGTH 20, \\n fname TYPE c LENGTH 20. \\n\\ \\nSKIP 5. \\n\\ \\nRESERVE 3 LINES. \\nWRITE: / 'Title', \\n / 'Second name', \\n / 'First name'. \\n\\ \\nBACK. \\nWRITE: /14 title INPUT, \\n /14 sname INPUT, \\n /14 fname INPUT. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists.html