---
title: "ABENABAP_DYNPRO_LIST"
description: |
  ABENABAP_DYNPRO_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DYNPRO_LIST.htm"
abapFile: "ABENABAP_DYNPRO_LIST.html"
keywords: ["do", "class", "data", "ABENABAP", "DYNPRO", "LIST"]
---

A classic list or list for short is a medium used for the structured and formatted output of data. List output is either written to a [list buffer](ABENLIST_BUFFER_GLOSRY.html) as a [screen list](ABENSCREEN_LIST_GLOSRY.html) and displayed on a [list dynpro](ABENLIST_DYNPRO_GLOSRY.html) or is sent to the [SAP spool system](ABENSAP_SPOOL_SYSTEM_GLOSRY.html) as a [spool list](ABENSPOOL_LIST_GLOSRY.html).

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   [Lists - Overview](ABENLIST_OVERVIEW.html)
-   [Lists - System Fields](ABENLIST_SYSTEMFIELDS.html)
-   [Spooling Lists](ABENPRINT.html)
-   [Creating Lists](ABENABAP_LISTS.html)
-   [Processing Lists in the List Buffer](ABENABAP_LISTS_COMPLEX.html)
-   [List Display](ABENLISTS_DISPLAYED.html)
-   [Event Blocks for Lists](ABENABAP_LISTS_INTERACTIVE.html)
-   [System Class for Classic Lists](ABENCL_ABAP_LIST_UTILITIES.html)

-   For tabular list output, the classes of SAP List Viewer (ALV) are used, for example `CL_SALV_TABLE`.
-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](ABENTEXT_OUTPUT_ABEXA.html) shows an executable example of the latter.
-   For simple console output, XML-based output streams can be used. An example of this is shown by the class [`CL_DEMO_OUTPUT_STREAM`](ABENCL_DEMO_OUTPUT.html). The program `DEMO_OUTPUT_STREAM` shows potential uses of this class. The class `CL_DEMO_OUTPUT`, which is based on `CL_DEMO_OUTPUT_STREAM`, is used in programs from the [ABAP Example Library](ABENABAP_EXAMPLES.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html