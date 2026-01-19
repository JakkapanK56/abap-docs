---
title: "ABENABAP_IXML_LIB_RENDER"
description: |
  ABENABAP_IXML_LIB_RENDER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_RENDER.htm"
abapFile: "ABENABAP_IXML_LIB_RENDER.html"
keywords: ["do", "if", "method", "data", "internal-table", "ABENABAP", "IXML", "LIB", "RENDER"]
---

When data is rendered as character-like XML data, this data is prefixed with the byte order mark (BOM) that is required by the XML standard.

An XML document in DOM representation is rendered using an XML renderer that can be created as follows using the iXML factory:

DATA(ixml)  = cl\_ixml=>create( ). \\n\\ \\n... \\n\\ \\nDATA(renderer) = ixml->create\_renderer( \\n                   ostream        = ... \\n                   document       = ... ).

The static type of the reference variable `renderer` is then the interface `IF_IXML_RENDERER`. A separate renderer is needed for each XML document. The renderer requires the following input parameters:

A renderer created in this way can be used to render the entire XML document as follows:

renderer->render( ).

The rendered document is added to the data sink of the output stream.

When the entire document is rendered, the data sink of the output stream should usually be initial beforehand. Otherwise, all the XML data is appended to existing content.

The interface `IF_IXML_NODE` also contains a method `RENDER` that allows only parts of an XML document to be rendered:

node->render( ostream = ... \\n              recursive = abap\_true|abap\_false ).

The subtree is rendered whose initial node is pointed to by the reference variable `node`. `recursive` is used to specify whether the subnodes are respected or not. The rendered subtree is added to the data sink of the output stream.

[iXML Library - Render](ABENIXML_RENDER_ABEXA.html)

Instead of using `CREATE_RENDERER` to create a renderer for an XML document in DOM representation, a token renderer can be created as follows:

DATA(ixml)  = cl\_ixml=>create( ). \\n\\ \\n... \\n\\ \\nDATA(token\_renderer) = ixml->create\_token\_renderer( ostream = ... ).

The static type of the reference variable `token_renderer` is then the interface `IF_IXML_TOKEN_RENDERER`. A token renderer only needs an output stream as an input parameter, but not an XML document in DOM representation. Instead, an internal table `node_infos` can be rendered as follows:

token\_renderer->render( node\_infos ).

The table `node_infos` must have table type `SIXMLDOM` with line type `SIXMLNODE` and contain all required information for constructing XML data. Each line in the internal table describes a token of the XML data. The meaning of the columns is described by the enumeration type `CO_NI_` of the interface `IF_IXML_TOKEN_PARSER`.

An input table for the method `RENDER` of the interface `IF_IXML_TOKEN_RENDERER` can be created separately or be created from XML data using a [token parser](ABENABAP_IXML_LIB_PARSE_TOKEN.html) and modified later.

-   The output stream [`ostream`](ABENABAP_IXML_LIB_INPUT_OUTPUT.html) that is the target of the rendering.
-   The XML document [`document`](ABENABAP_IXML_LIB_INPUT_OUTPUT.html) to be rendered.

-   Using rendering of subtrees, XML data in the data sink of the output stream can be constructed from various parts.
-   There is no sequential rendering using events that would work in the same way as [sequential parsing](ABENABAP_IXML_LIB_PARSE_EVENT.html).

-   [Token Parsers and Renderers, Iterative](ABENIXML_PARSE_RENDER_TOKEN_ABEXA.html)
-   [Token Parsers and Renderers, Table](ABENIXML_PARSE_RENDER_TK_TAB_ABEXA.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_ixml\_lib.html