---
title: "ABENABAP_XSLT_FNCTNS"
description: |
  ABENABAP_XSLT_FNCTNS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XSLT_FNCTNS.htm"
abapFile: "ABENABAP_XSLT_FNCTNS.html"
keywords: ["select", "do", "while", "if", "data", "ABENABAP", "XSLT", "FNCTNS"]
---

In the following, supported and not supported XSLT functions of the [SAP XSLT processor](ABENABAP_XSLT_PROCESSOR.html) are listed. The URI for the XSLT namespace is `http://www.w3.org/1999/XSL/Transform`.

-   `unparsed-entity-uri()`

**Function** **XSLT Version** **Description** `document(*object[, node-set]*)` 1.0 Allows access to external XML documents.\\
**Note:** The function is only supported for arguments other than node set. Relative URLs are not expanded. It is possible to reference the root of the style sheet document using *document("")*. `key(*string, object*)` 1.0 Selects elements by their key. `current()` 1.0 Returns the current node. `generate-id(*[node-set]*)` 1.0 Returns a string that uniquely identifies a node in the node set. `system-property(*string*)` 1.0 Returns an object with the value of the system properties. Otherwise, it returns an empty string. `element-available(*string*)` 1.0 Returns true if the expanded name is the name of an instruction. Returns false if the expanded name has a null namespace URI. `function-available(*string*)` 1.0 Returns true if the expanded name is the name of a function. `format-number(*number, string[, string]*)` 1.0 Converts the number to a string using the format pattern in the first string and the decimal-format in the second string. `current-group()` 2.0 Returns the current group while evaluating a `for-each-group` instruction. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenabap\_xslt\_self\_written.html abenabap\_xslt\_functions.html