---
title: "ABENABAP_IXML_LIB_CLOUD"
description: |
  ABENABAP_IXML_LIB_CLOUD - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_IXML_LIB_CLOUD.htm"
abapFile: "ABENABAP_IXML_LIB_CLOUD.html"
keywords: ["do", "while", "if", "method", "class", "data", "types", "ABENABAP", "IXML", "LIB", "CLOUD"]
---

iXML Library provides an API for handling XML documents in [DOM](ABENDOM_GLOSRY.html) format. This API enables

In ABAP programs, the API is implemented using [interfaces](ABENABAP_IXML_LIB_OBJECT_TYPES.html) from the class library with the naming convention `IF_IXML_CORE...`. The access class `CL_IXML_CORE` contains factory methods for creating basic objects such as streams, parsers, documents, and renderers. These objects are then accessed using interface reference variables. The classes and interfaces are documented in the Class Builder.

Precisely one factory object of the [access class](ABENABAP_IXML_LIB_C_CL_IXML.html)\\ `CL_IXML_CORE` is required for accessing iXML Library in an ABAP program. This object is created as follows:

DATA(ixml) = cl\_ixml\_core=>create( ).

The static type of the reference variable `ixml` is then the interface `IF_IXML_CORE`, which contains all factory methods required to create further objects, such as streams, XML documents, parsers, or renderers. This factory object is a singleton and can only be instantiated once in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html).

The most important services offered by the [classes and interfaces](ABENABAP_IXML_LIB_C_OBJECT_TYPES.html) in iXML Library are as follows:

-   XML data to be parsed to DOM format,
-   reads and writes to be performed on XML documents in DOM format, including creating new documents,
-   XML documents in DOM format to be rendered to XML data.

-   The [classes and interfaces](ABENABAP_IXML_LIB_C_OBJECT_TYPES.html) in iXML Library from the package `SIXML_CORE` wrap classes and interfaces implemented in C++ that are delivered as part of the ABAP kernel.
-   iXML Library supports the Unicode character representation [UCS-2](ABENUCS2_GLOSRY.html). Characters from the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html) are supported and the same problems as in [ABAP](ABENCHARACTER_SETS.html) can occur.
-   The DOM of the iXML Library and its associated methods are also used internally in calls of [XSL transformations](ABENXSL_TRANSFORMATION_GLOSRY.html) with the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

-   [XML parser](ABENABAP_IXML_LIB_C_PARSE.html)
-   The XML parser analyzes the syntax of an XML file provided in an [input stream](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) to check whether it is correct and creates an [XML document](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) in a [DOM](ABENDOM_GLOSRY.html) representation from this file. This document can then be accessed using interfaces. The DOM can be created as follows:

-   [Complete Parsing to DOM](ABENABAP_IXML_LIB_C_PARSE_DOM.html)
-   The parser creates the XML document in a [DOM](ABENDOM_GLOSRY.html) representation for the complete XML data in a single action and places it in the memory.
-   [Sequential Parsing](ABENABAP_IXML_LIB_C_PARSE_EVENT.html)
-   The parser processes the input stream in sequential runs, where each sequence is determined by events that can be accessed using the interface `IF_IXML_EVENT`. The application can already process each sequence while the parser is running. It is possible to configure whether a complete XML document is saved in [DOM](ABENDOM_GLOSRY.html) representation.

-   [Access to DOM](ABENABAP_IXML_LIB_C_DOM_ACCESS.html)
-   An XML document represented as [DOM](ABENDOM_GLOSRY.html) is a standardized tree representation. For each logical unit of the XML document, there is a node object of an associated class that implements specialized interfaces. An ABAP program can use the interfaces to perform reads and writes to the [XML](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html) document. The classes of the node objects are not usually used directly in the program.
-   [XML renderer](ABENABAP_IXML_LIB_C_RENDER.html)
-   The XML renderer creates XML data from an XML document saved as DOM. This document is created by parsing with and without subsequent modifications, or created as a complete new document using the methods of the DOM interface. The renderer then passes the data to an [output stream](ABENABAP_IXML_LIB_C_INPUT_OUTPUT.html).
-   [XPath evaluation](ABENABAP_CL_IXML_XPATH.html)
-   An XPath expression can be evaluated using `[CL_IXML_XPATH](ABENABAP_IXML_LIB_C_XPATH.html)`.

-   One benefit of DOM is very simple access to the individual parts of an XML document. It also has the drawback, however, of increased memory consumption, which can be up to ten times the actual size of the document. It should be noted that the document itself can already use more memory for its markup than for the actual data. This memory consumption can be restricted by preventing a complete DOM from being created by sequential parsing or by parsing to data objects.
-   The DOM in iXML Library also includes DTDs (Document Type Definitions).
-   If XML data needs to be parsed and rendered only and no XML documents in DOM representation and no DTDs are needed, [sXML Library](ABENABAP_SXML_LIB.html) provides an alternative with better performance than iXML Library.
-   iXML only supports the XML 1.0 format, where XML data is represented by a particular character format using a character string. [sXML Library](ABENABAP_SXML_LIB.html) supports more [formats](ABENABAP_SXML_LIB_FORMATS.html).
-   When data is rendered as character-like XML data, this data is prefixed by the byte order mark (BOM) that is required by the XML standard.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html