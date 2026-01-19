---
title: "ABENABAP_IXML_LIB_PARSE_TOKEN"
description: |
  ABENABAP_IXML_LIB_PARSE_TOKEN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_PARSE_TOKEN.htm"
abapFile: "ABENABAP_IXML_LIB_PARSE_TOKEN.html"
keywords: ["do", "if", "method", "data", "internal-table", "ABENABAP", "IXML", "LIB", "PARSE", "TOKEN"]
---

A token parser for parsing directly to data objects can be created as follows:

DATA(ixml)  = cl\_ixml=>create( ). \\n\\ \\n... \\n\\ \\nDATA(token\_parser) = ixml->create\_token\_parser( \\n                       istream        = ... \\n                       document       = ... \\n                       stream\_factory = ... ).

The static type of the reference variable `token_parser` is then the interface `IF_IXML_TOKEN_PARSER`. A token parser requires the same input parameters as a [regular parser](ABENABAP_IXML_LIB_PARSE.html) and [troubleshooting](ABENABAP_IXML_LIB_PARSE_ERROR.html) is also the same.

However, an XML document in `DOM` format is not usually created. Instead, the information for the required XML data token is written directly to the ABAP data objects.

The parsed tokens can be specified by using the input parameter `TOKEN_MASK`. The information that is read is determined by an input parameter `INFO_MASK`.

By using a [token renderer](ABENABAP_IXML_LIB_RENDER.html), it is possible to render an internal table of type `SIXMLDOM`, which contains the complete information for an XML document, into XML data.

-   The method `GET_NEXT_TOKEN` parses the required tokens iteratively. The method `GET_NODE_INFO` can be used to read the information about a parsed token to a structure of the type `SIXMLNODE`.
-   The method `PARSE_TOKENS` places the information about the required tokens directly into the tabular attribute `TOKENS` of type `SIXMLDOM` of line type `SIXMLNODE`.

-   [Token Parsers and Renderers, Iterative](ABENIXML_PARSE_RENDER_TOKEN_ABEXA.html)
-   [Token Parsers and Renderers, Table](ABENIXML_PARSE_RENDER_TK_TAB_ABEXA.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html abenabap\_ixml\_lib\_parse.html