---
title: "ABENHTML_BROWSER_ABEXA"
description: |
  ABENHTML_BROWSER_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHTML_BROWSER_ABEXA.htm"
abapFile: "ABENHTML_BROWSER_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "ABENHTML", "BROWSER", "ABEXA"]
---

This example demonstrates the encapsulation of the browser control in a class.

The class `CL_ABAP_BROWSER` encapsulates the use of the class `CL_GUI_HTML_VIEWER`. The static method `SHOW_HTML` can be used to display a HTML file in a modal or modeless dialog box or in the same window as the current dynpro. External data, in this case a picture loaded from the MIME Repository, can be passed and displayed. The `SAPEVENT` events are passed on and can be handled by the user.

When the program starts, the file can be display in a modal window, a modeless window, or without a dialog box. If a modeless dialog box is chosen, container dynpros and information messages must be used to keep the dialog box alive. If no messages were sent, the modeless dialog box would not be visible.

-   The HTML file passed first has errors, since the `<html>` tag is written incorrectly. In SAP systems, this case always produces a corresponding message.
-   The error list is also represented using `SHOW_HTML`, where the error check for this simple purpose is disabled by passing a blank to the corresponding parameter, but the print option is switched on.
-   The found error is corrected in the HTML file and it passed again, with the error check enabled this time.