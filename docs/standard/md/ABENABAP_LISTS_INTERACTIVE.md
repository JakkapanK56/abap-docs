---
title: "The events during list creation,"
description: |
  make it possible to define page headers and footers independently of the actual page length, which is particularly helpful for the output of spool lists on different paper formats. The events after user actions in a displayed list enable the creation of details lists: The following statement can be
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_LISTS_INTERACTIVE.htm"
abapFile: "ABENABAP_LISTS_INTERACTIVE.html"
keywords: ["select", "if", "ABENABAP", "LISTS", "INTERACTIVE"]
---

List events occur during the creation of a list and following certain user actions on a displayed list. They are used to process lists in the ABAP program. Events are distinguished between those that occur when lists are created and interactive list events for processing user actions in a displayed list.

The events during list creation,

make it possible to define page headers and footers independently of the actual page length, which is particularly helpful for the output of spool lists on different paper formats.

The events after user actions in a displayed list enable the creation of details lists:

The following statement can be used to raise a list event in a program-driven way:

-   [`TOP-OF-PAGE`](ABAPTOP-OF-PAGE.html)
-   [`END-OF-PAGE`](ABAPEND-OF-PAGE.html)

-   [`AT LINE-SELECTION`](ABAPAT_LINE-SELECTION.html)
-   [`AT USER-COMMAND`](ABAPAT_USER-COMMAND.html)
-   [`AT PFnn`](ABAPAT_PFNN.html)

-   [`SET USER-COMMAND`](ABAPSET_USER-COMMAND.html)

-   After the execution of each event block for lists, the statement [`NEW-LINE`](ABAPNEW-LINE.html) is executed implicitly as in every [event block](ABENEVENT_BLOCKS.html).
-   List events can be raised as program-driven events using the statement [`SET USER-COMMAND`](ABAPSET_USER-COMMAND.html), instead of by user action on a displayed list.

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html