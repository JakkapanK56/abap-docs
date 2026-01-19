---
title: "ABENTEXT_OUTPUT_ABEXA"
description: |
  ABENTEXT_OUTPUT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTEXT_OUTPUT_ABEXA.htm"
abapFile: "ABENTEXT_OUTPUT_ABEXA.html"
keywords: ["method", "class", "ABENTEXT", "OUTPUT", "ABEXA"]
---

This example demonstrates the output of unformatted text.

The class `CL_DEMO_SHOW_TEXT` uses the methods of the class `CL_DEMO_TEXT`, which was designed for this purpose. The class encapsulates the use of a text edit control in a dialog box.

Wrappers like this can replace the use of the statement [`WRITE`](ABAPWRITE-.html) for simple text output.

REPORT demo\_show\_text.\\n\\ncl\_demo\_show\_text=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_screens.html abenabap\_dynpros.html abenabap\_dynpro\_elements.html abenabap\_dynpros\_screen.html abenscreen\_elements\_abexas.html