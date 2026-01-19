---
title: "ABENABAP_LISTS"
description: |
  ABENABAP_LISTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_LISTS.htm"
abapFile: "ABENABAP_LISTS.html"
keywords: ["do", "class", "ABENABAP", "LISTS"]
---

The following ABAP statements are used for creating classical lists:

[Use SAP List Viewer](ABENLIST_GUIDL.html)

Classic lists are no longer intended to be used directly in production programs. The use of other suitable output media is recommended instead.

-   [`WRITE`](ABAPWRITE-.html)
-   [`ULINE`](ABAPULINE.html)
-   [`FORMAT`](ABAPFORMAT.html)
-   [`SET BLANK LINES`](ABAPSET_BLANK_LINES.html)
-   [`SKIP`](ABAPSKIP.html)
-   [`NEW-LINE`](ABAPNEW-LINE.html)
-   [`BACK`](ABAPBACK.html)
-   [`POSITION`](ABAPPOSITION.html)
-   [`SET LEFT SCROLL-BOUNDARY`](ABAPSET_SCROLL-BOUNDARY.html)
-   [`NEW-PAGE`](ABAPNEW-PAGE.html)
-   [`RESERVE`](ABAPRESERVE.html)
-   [`HIDE`](ABAPHIDE.html)
-   [`SET MARGIN`](ABAPSET_MARGIN.html)
-   [`PRINT-CONTROL`](ABAPPRINT-CONTROL.html)

-   For tabular list output, the classes of SAP List Viewer (ALV) are used, for example `CL_SALV_TABLE`.
-   For simple text output, the wrappers of the browser control, such as dynamic documents or wrappers of the textedit control should be used. [Dynpros, Text Output](ABENTEXT_OUTPUT_ABEXA.html) shows an executable example of the latter.
-   For simple console output, XML-based output streams can be used. An example of this is shown by the class [`CL_DEMO_OUTPUT_STREAM`](ABENCL_DEMO_OUTPUT.html). The program `DEMO_OUTPUT_STREAM` shows potential uses of this class. The class `CL_DEMO_OUTPUT`, which is based on `CL_DEMO_OUTPUT_STREAM`, is used in programs from the [ABAP Example Library](ABENABAP_EXAMPLES.html).

abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpro\_list.html