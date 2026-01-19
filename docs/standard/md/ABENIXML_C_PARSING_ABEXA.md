---
title: "ABENIXML_C_PARSING_ABEXA"
description: |
  ABENIXML_C_PARSING_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENIXML_C_PARSING_ABEXA.htm"
abapFile: "ABENIXML_C_PARSING_ABEXA.html"
keywords: ["do", "if", "method", "data", "ABENIXML", "PARSING", "ABEXA"]
---

Parses simple XML data to a DOM representation.

XML data is first transformed to an input stream object and then imported into a DOM object using a parser object. If parsed successfully, the nodes of the DOM object are compiled as output texts in the method `process_dom`.

An [iterator](ABENABAP_IXML_LIB_C_DOM_ITERAT_R.html) is used to access the nodes. Each element is [checked](ABENABAP_IXML_LIB_C_DOM_DIRECT_R.html) to see whether it has attributes. Existing attributes are then read.

If the XML data has errors, for example because a closing tag was renamed, the method `process_errors` is executed, and the appropriate error message is displayed.