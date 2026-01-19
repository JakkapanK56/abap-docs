---
title: "ABENHTML_INPUT_ABEXA"
description: |
  ABENHTML_INPUT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENHTML_INPUT_ABEXA.htm"
abapFile: "ABENHTML_INPUT_ABEXA.html"
keywords: ["method", "class", "data", "ABENHTML", "INPUT", "ABEXA"]
---

This example demonstrates how input in a HTML file can be processed.

This example creates a HTML file containing multiple input fields, a pushbutton, and JavaScript functions for handling the input. The form `INPUT` uses `method="post"` to send the input data. The HTML control in CFW uses the parameter `QUERY_TABLE` of the event `SAPEVENT` to pass this data to its handler. The class `CL_ABAP_BROWSER` (a wrapper for the class `CL_GUI_HTML_VIEWER` also passes this parameter and the user input can be used in the ABAP class.

See also the corresponding executable example `CL_DEMO_HTTP_POST_SERVICE` for ICF.