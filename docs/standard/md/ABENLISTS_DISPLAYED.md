---
title: "The following sections cover the statements"
description: |
  used to call the basic list during a dynpro sequence, the statements used to determine properties of the called list, and the statement used to read a displayed list. -   In executable programs(ABENEXECUTABLE_PROGRAM_GLOSRY.html) called using `SUBMIT`(ABAPSUBMIT.html), the basic list created up
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLISTS_DISPLAYED.htm"
abapFile: "ABENLISTS_DISPLAYED.html"
keywords: ["select", "do", "if", "ABENLISTS", "DISPLAYED"]
---

A basic list is either displayed automatically or in a program-driven way. A details list is always displayed automatically:

The following sections cover the statements

used to call the basic list during a dynpro sequence, the statements

used to determine properties of the called list, and the statement

used to read a displayed list.

-   In [executable programs](ABENEXECUTABLE_PROGRAM_GLOSRY.html) called using [`SUBMIT`](ABAPSUBMIT.html), the basic list created up to that point is displayed automatically after the event [`END-OF-SELECTION`](ABAPEND-OF-SELECTION.html). At the start of the program, the [standard list status](ABENSTANDARD_LIST_STATUS_GLOSRY.html) is set automatically, which can be replaced by another GUI status in the program using [`SET PF-STATUS`](ABAPSET_PF-STATUS_LIST.html).
-   In any program that can contain dynpros as components, a display of the current basic list can be called in a program-driven way during processing of a [dynpro sequence](ABENDYNPRO_SEQUENCE_GLOSRY.html).
-   In any program that can contain dynpros as components, the details list created in an event block is displayed automatically when the event block is terminated after [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html), [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html), or [`AT PFnn`](ABAPAT_PFNN.html). If no details list is created, the previous list level is displayed.

-   [`LEAVE TO LIST-PROCESSING`](ABAPLEAVE_TO_LIST-PROCESSING.html)
-   [`LEAVE LIST-PROCESSING`](ABAPLEAVE_LIST-PROCESSING.html)

-   [`WINDOW`](ABAPWINDOW.html)
-   [`SET PF-STATUS`](ABAPSET_PF-STATUS_LIST.html)
-   [`SET TITLEBAR`](ABAPSET_TITLEBAR_LIST.html)
-   [`SET CURSOR`](ABAPSET_CURSOR_LIST.html)

-   [`GET CURSOR`](ABAPGET_CURSOR_LIST.html)

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html