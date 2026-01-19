---
title: "ABENLIST_SYSTEMFIELDS"
description: |
  ABENLIST_SYSTEMFIELDS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIST_SYSTEMFIELDS.htm"
abapFile: "ABENLIST_SYSTEMFIELDS.html"
keywords: ["select", "do", "if", "ABENLIST", "SYSTEMFIELDS"]
---

The sections below give an overview of the [system fields](ABENSYSTEM_FIELD_GLOSRY.html) relevant for list processing. The list that is currently being created is called the *current* list (like the current page, or current line). A list that has just been displayed, possibly involving a list event, is known as the *displayed* list. *Absolute* means that the list itself is referred to and not the state of the [list dynpro](ABENLIST_DYNPRO_GLOSRY.html). A line selected by a list event on which the cursor is positioned, or which is read by `READ LINE`, is called the *selected* line.

These system fields are set after every interactive list event and by the statement [`READ LINE`](ABAPREAD_LINE.html).

The program `SHOWLISY` displays the current values of the system fields above. Changes to the values caused by scrolling, changing the window size, selecting a list line, and so on, can be monitored.

**System Field** **Meaning** **System Field** **Meaning** `sy-pagno` Page number of the current page of the current list. Counting begins at 1. `sy-linno` Number of the current line on the current page. Counting begins at 1. `sy-colno` Number of the column on which the cursor is positioned on the current list. Counting begins at 1. `sy-linct` Number of lines per page of the current list, if it was specified by the `LINE-COUNT` addition of the statement [`REPORT`](ABAPREPORT.html) or [`NEW-PAGE`](ABAPNEW-PAGE.html). Otherwise, `sy-linct` has the value zero. `sy-linsz` Line width of the current list. Set by the `LINE-SIZE` addition of the [`REPORT`](ABAPREPORT.html) or [`NEW-PAGE`](ABAPNEW-PAGE.html) statement. `sy-title` List header. Set in the text elements of a program or by [`SET TITLEBAR`](ABAPSET_TITLEBAR_LIST.html). `sy-srows` Current number of lines in the display window. Counting begins at 1. `sy-scols` Current number of columns in the display window. Counting begins at 1. `sy-lsind` List level of the current list; (basic list: 0, first details list: 1, ..., 20th details list: 20). `sy-lsind` can be set in the program to replace the current list with the list of the set level. `sy-lilli` Absolute number of a selected line in the displayed list. Counting begins at 1. `sy-listi` List level of the displayed list. `sy-lisel` Content of the selected line. `sy-curow` Number of the line in the GUI window on which the cursor of the displayed list was positioned. Counting begins at 1. `sy-cucol` Number of the column in the GUI window on which the cursor of the displayed list was positioned. Counting begins at 2. `sy-cpage` Number of the first displayed page of the displayed list. Counting begins at 1. `sy-staro` Number of the first line on the first displayed page of the displayed list. Counting starts at 1, the lines of the [page header](ABENPAGE_HEADER_GLOSRY.html) are included. `sy-staco` Number of the first displayed column of the displayed list. Counting begins at 1. `sy-ucomm` Function code that raised the event on the displayed list. `sy-pfkey` GUI status of the list currently being displayed. abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html