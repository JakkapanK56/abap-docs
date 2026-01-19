---
title: "ABAPEND-OF-PAGE"
description: |
  ABAPEND-OF-PAGE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPEND-OF-PAGE.htm"
abapFile: "ABAPEND-OF-PAGE.html"
keywords: ["select", "loop", "do", "if", "data", "types", "ABAPEND", "PAGE"]
---

[Short Reference](ABAPEND-OF-PAGE_SHORTREF.html)

`END-OF-PAGE.`

This statement defines an event block, whose event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) during the creation of a basic list at the following time:

The event `END-OF-PAGE` is intended for writing list outputs in the page footer and is raised only when the page footer or end of page is reached. Statements such as [`NEW-PAGE`](ABAPNEW-PAGE.html) do not raise the event.

This program outputs a list of flights and creates a page for each connection with a header line and footer line.

-   If lines were reserved in the addition [`LINE-COUNT`](ABAPREPORT_LIST_OPTIONS.html) of the program-initiating statement for a [page footer](ABENPAGE_FOOTER_GLOSRY.html) that was reached by a write on this page. List output made in the event block is placed in this area. Output statements that exceed the reserved area are ignored.
-   If no lines were reserved in the addition [`LINE-COUNT`](ABAPREPORT_LIST_OPTIONS.html) for a [page footer](ABENPAGE_FOOTER_GLOSRY.html) and the end of page was reached by a write on this page. List outputs made in the event block have no effect.

REPORT demo\_page\_header\_footer NO STANDARD PAGE HEADING \\n LINE-COUNT 0(1). \\n\\ \\nTYPES: BEGIN OF sflight\_tab\_type, \\n carrid TYPE sflight-carrid, \\n connid TYPE sflight-connid, \\n fldate TYPE sflight-fldate, \\n END OF sflight\_tab\_type. \\n\\ \\nPARAMETERS p\_carrid TYPE sflight-carrid. \\n\\ \\nDATA: sflight\_tab TYPE TABLE OF sflight\_tab\_type, \\n sflight\_wa LIKE LINE OF sflight\_tab. \\n\\ \\nDATA lines TYPE i. \\n\\ \\nTOP-OF-PAGE. \\n WRITE: / sflight\_wa-carrid, sflight\_wa-connid. \\n ULINE. \\n\\ \\nEND-OF-PAGE. \\n ULINE. \\n\\ \\nSTART-OF-SELECTION. \\n\\ \\n SELECT carrid, connid, fldate \\n FROM sflight \\n WHERE carrid = @p\_carrid \\n ORDER BY carrid, connid \\n INTO CORRESPONDING FIELDS OF TABLE @sflight\_tab. \\n\\ \\n LOOP AT sflight\_tab INTO sflight\_wa. \\n AT NEW connid. \\n SELECT COUNT( DISTINCT fldate ) \\n FROM sflight \\n WHERE carrid = @sflight\_wa-carrid AND \\n connid = @sflight\_wa-connid \\n INTO @lines. \\n lines += 3. \\n NEW-PAGE LINE-COUNT lines. \\n ENDAT. \\n WRITE / sflight\_wa-fldate. \\n ENDLOOP. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html abenabap\_lists\_interactive.html