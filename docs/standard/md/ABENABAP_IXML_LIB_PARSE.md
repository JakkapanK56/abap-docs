---
title: "ABENABAP_IXML_LIB_PARSE"
description: |
  ABENABAP_IXML_LIB_PARSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_PARSE.htm"
abapFile: "ABENABAP_IXML_LIB_PARSE.html"
keywords: ["do", "if", "method", "data", "ABENABAP", "IXML", "LIB", "PARSE"]
---

XML data is parsed by a validating XML parser, which can be created using the iXML factory as follows:

DATA(ixml)  = cl\_ixml=>create( ). \\n\\ \\n... \\n\\ \\nDATA(parser) = ixml->create\_parser( \\n                 istream        = ... \\n                 document       = ... \\n                 stream\_factory = ... ).

The static type of the reference variable `parser` is then the interface `IF_IXML_PARSER`. The parser requires the following input parameters:

A parser created in this way works like an iterator on the input stream. XML data can be [parsed to a `DOM` representation](ABENABAP_IXML_LIB_PARSE_DOM.html) in a single action or [sequential parsing](ABENABAP_IXML_LIB_PARSE_EVENT.html) can be used, where the parser stops after certain steps and passes control to the application.

In addition to the parsers created using `CREATE_PARSER`, the factory method [`CREATE_TOKEN_PARSER`](ABENABAP_IXML_LIB_PARSE_TOKEN.html) can be used to create a token parser for direct parsing in ABAP data objects.

A parser can only be used once for the associated input stream and the associated XML document. Once it has parsed the input stream to a document, the parser can be passed to the garbage collector. A parser cannot be reused for the same XML data or for any other data.

-   The input stream [`istream`](ABENABAP_IXML_LIB_INPUT_OUTPUT.html) to be parsed.
-   An XML document [`document`](ABENABAP_IXML_LIB_INPUT_OUTPUT.html), to which the stream is parsed.
-   A factory [`stream_factory`](ABENABAP_IXML_LIB_INPUT_OUTPUT.html) must be specified for streams. This enables the parser to create corresponding streams if external sources are addressed in the parsed document.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html