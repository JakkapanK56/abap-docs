---
title: "ABENABAP_IXML_LIB_C_PARSE_DOM"
description: |
  ABENABAP_IXML_LIB_C_PARSE_DOM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_C_PARSE_DOM.htm"
abapFile: "ABENABAP_IXML_LIB_C_PARSE_DOM.html"
keywords: ["do", "if", "method", "data", "ABENABAP", "IXML", "LIB", "PARSE", "DOM"]
---

To parse XML data to a DOM representation in a single action, a [parser](ABENABAP_IXML_LIB_C_PARSE.html) created for this purpose is used as follows:

DATA(rc) = parser->parse( ).

Here, `parser` is a reference variable that points to the parser. The parser checks whether the XML data of the input stream [`istream`](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) is correct and creates a DOM representation of this file in the memory. The return value of the method `PARSE` has the type `i`.

If the parsing is successful, the XML document [`document`](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) linked with the parser can be used to [access the DOM](ABENABAP_IXML_LIB_C_DOM_ACCESS.html) stored in the memory.

-   If an XML element has multiple attributes with the same name, only one of these attributes is passed to DOM, which is given the value of the last identically named attribute.
-   An alternative for complete parsing of XML data to the DOM representation is to call the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` with [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html). No streams and factories need to be created explicitly here.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib\_cloud.html abenabap\_ixml\_lib\_c\_parse.html