---
title: "ABENABAP_IXML_LIB_PARSE_DOM"
description: |
  ABENABAP_IXML_LIB_PARSE_DOM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_PARSE_DOM.htm"
abapFile: "ABENABAP_IXML_LIB_PARSE_DOM.html"
keywords: ["do", "if", "method", "class", "data", "ABENABAP", "IXML", "LIB", "PARSE", "DOM"]
---

To parse XML data to a `DOM` representation in a single action, a [parser](ABENABAP_IXML_LIB_PARSE.html) created for this purpose is used as follows:

DATA(rc) = parser->parse( ).

Here, `parser` is a reference variable that points to the parser. The parser checks whether the XML data of the input stream [`istream`](ABENABAP_IXML_LIB_INPUT_OUTPUT.html) is correct and creates a `DOM` representation of this file in the memory. The return value of the method `PARSE` has the type `i` and uses values to provide the result that match the following constants from the type pool `IXML`:

If the parsing is successful, the XML document [`document`](ABENABAP_IXML_LIB_INPUT_OUTPUT.html) linked with the parser can be used to [access the DOM](ABENABAP_IXML_LIB_DOM_ACCESS.html) stored in the memory.

Creates a parser for an input stream for a text string and parses it to an XML document.

-   `ixml_mr_parser_ok`
-   The parsed XML data does not have any errors. Parsing was successful and all XML data is available in the saved XML document.
-   `ixml_mr_parser_error`
-   The parsed XML data has errors. Although the parser created a valid DOM from the XML file with the errors, it does not usually contain all the XML data. These errors can be [analyzed](ABENABAP_IXML_LIB_PARSE_ERROR.html).
-   `ixml_mr_parser_fatal_error`
-   The XML data could not be parsed at all. This error does not usually occur anymore.

-   If an XML element has multiple attributes with the same name, only one of these attributes is passed to DOM, which is given the value of the last identically named attribute (see example class `CL_DEMO_XML_ATTRIBUTES`).
-   An alternative for complete parsing of XML data to the `DOM` representation is to call the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` with [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html). See the executable example [DOM Representation](ABENIXML_DOM_ABEXA.html). No streams and factories need to be created explicitly here.

FINAL(ixml) = cl\_ixml=>create( ). \\nFINAL(stream\_factory) = ixml->create\_stream\_factory( ). \\n\\ \\nFINAL(istream) = stream\_factory->create\_istream\_string( \\n \`\` && \\n \` \` && \\n \` Mer lasse de DOM in Kölle\` && \\n \` \` ). \\n\\ \\nFINAL(document) = ixml->create\_document( ). \\nFINAL(parser) = ixml->create\_parser( \\n stream\_factory = stream\_factory \\n istream = istream \\n document = document ). \\n\\ \\nFINAL(rc) = parser->parse( ). \\n\\ \\nIF rc <> ixml\_mr\_parser\_ok. \\n ... "Error handling \\n RETURN. \\nENDIF. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html abenabap\_ixml\_lib\_parse.html