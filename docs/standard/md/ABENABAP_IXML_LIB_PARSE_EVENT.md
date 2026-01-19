---
title: "ABENABAP_IXML_LIB_PARSE_EVENT"
description: |
  ABENABAP_IXML_LIB_PARSE_EVENT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_PARSE_EVENT.htm"
abapFile: "ABENABAP_IXML_LIB_PARSE_EVENT.html"
keywords: ["do", "if", "method", "data", "ABENABAP", "IXML", "LIB", "PARSE", "EVENT"]
---

To parse XML data sequentially, a dedicated [parser](ABENABAP_IXML_LIB_PARSE.html) is called repeatedly as follows:

DATA(event) = parser->parse\_event( ).

Here, `parser` is a reference variable that points to the parser. The method `PARSE_EVENT` returns a reference variable with the type `IF_IXML_EVENT` that points to an object that represents an event that occurred during parsing. The parser processes the input stream [`istream`](ABENABAP_IXML_LIB_INPUT_OUTPUT.html) in sequences defined by the events for which the caller registered itself previously. The possible events are stored as constants `co_event...` in the interface `IF_IXML_EVENT`. They are registered using the method

parser->set\_event\_subscription( events = if\_ixml\_event=>co\_event... + \\n                                         if\_ixml\_event=>co\_event... + \\n                                         ... ).

The parser stops after every event registered in this way and returns the properties of the current sequence using the object referenced by `event`. The method `PARSE_EVENT` must be called again to process the next sequence. If all XML data has been parsed or if an error occurs, the return value of `PARSE_EVENT` is initial.

By default, DOM-based XML documents are constructed bit by bit in the memory during sequential processing. Once processing is complete, they are available in the same ways as after the method [`PARSE`](ABENABAP_IXML_LIB_PARSE_DOM.html). [Troubleshooting](ABENABAP_IXML_LIB_PARSE_ERROR.html) is also similar. During sequential parsing, the document represents a valid XML document with the elements parsed up until now. If sequential parsing is ended before all elements of the input stream have been processed, the XML document represents the part of the input stream parsed so far. The method `SET_DOM_GENERATING` of the parser can be used to deactivate the generation of the DOM representation.

[iXML Library - Sequential Parsing](ABENIXML_SEQUENTIAL_PARSING_ABEXA.html)

-   A parsing event is an iterator concept and not an event raised by [`EVENTS`](ABAPEVENTS.html) in ABAP Objects.
-   If the caller does not register any events before `PARSE_EVENT` is called, `PARSE_EVENT` works like `PARSE`.
-   The sequential parsing described here is not a variant of SAX (Simple API for XML). Callback methods are not called when an event occurs.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html abenabap\_ixml\_lib\_parse.html