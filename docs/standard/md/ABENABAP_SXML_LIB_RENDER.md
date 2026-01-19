---
title: "ABENABAP_SXML_LIB_RENDER"
description: |
  ABENABAP_SXML_LIB_RENDER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SXML_LIB_RENDER.htm"
abapFile: "ABENABAP_SXML_LIB_RENDER.html"
keywords: ["insert", "update", "do", "if", "method", "class", "data", "internal-table", "ABENABAP", "SXML", "LIB", "RENDER"]
---

To create XML data using sXML Library, the content is passed to an XML writer. A writer of this type is validating, which means that invalid actions, such as attempts to add an attribute to a value node, raise an [exception](ABENABAP_SXML_LIB_EXCEPTIONS.html). An XML writer creates the XML data as a hierarchical tree-like structure where each token is represented by a node that can be assigned uniquely to a parent node (see [W3C Information Set](http://www.w3.org/TR/xml-infoset/)). An XML writer can be used to write the data in exactly the same way is read by an [XML reader](ABENABAP_SXML_LIB_PARSE.html).

The [classes and interfaces](ABENABAP_SXML_LIB_WRITER.html) of the sXML Library that are available for rendering XML data are organized so that there are separate XML writer classes for different requirements. These classes inherit from the abstract superclass `CL_SXML_WRITER`. The abstract superclass contains implementations of functions required by all writers and includes the interface `IF_SXML_WRITER`, which contains the components shared by all writers. This interface enables all writers to be accessed in the same way. If special components need to be accessed that are not declared in the interface, a downcast must be used on the corresponding class.

The specialized writer classes are:

Each of these classes has a specific factory method `CREATE` for creating appropriate writers. Apart from an XOP writer, the required [format](ABENABAP_SXML_LIB_FORMATS.html) and the required character format of the data can be passed to each writer. The standard format is XML 1.0 format in the UTF-8 character format. The XOP writer supports the XOP format only. Instructions on standardization and handling empty elements can be passed to the factory method if the format is suitable.

The methods of the interface `IF_SXML_WRITER` enable serial rendering of XML data. There are two basic ways to do this:

A writer cannot be used more than once for the same XML data or for other data. The write position of a writer is updated during rendering using its methods. The actions allowed by a writer depend on the current write position. For writers that do not write to external repositories, the written XML can be read using the method `GET_OUTPUT`.

-   `CL_SXML_STRING_WRITER`
-   Writers in this class render XML data to a byte string.
-   `CL_SXML_TABLE_WRITER`
-   Writers in this class render XML data to an internal table with a flat byte-like line type.
-   `CL_SXML_DATASET_WRITER`
-   Writers in this class render XML data to a file on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance.
-   `CL_SXML_HTTP_WRITER`
-   Writers in this class render XML data to an [ICF](ABENICF_GLOSRY.html) HTTP client.
-   `CL_SXML_XOP_WRITER`
-   Writers of this class render the data to [XOP](ABENXOP_GLOSRY.html) format.

-   [Token-based rendering](ABENABAP_SXML_LIB_RENDER_TOKEN.html)
-   [Object-oriented rendering](ABENABAP_SXML_LIB_RENDER_OO.html)

-   In a suitable write position, an XML writer from the sXML Library can be used as an XML target of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html). The output of the transformation is inserted into the output of the writer and its write position moved accordingly.
-   The XML declaration can be set in the `IF_SXML_WRITER` interface using one of the following values for the option `CO_OPT_XML_HEADER`:

-   `CO_OPT_VAL_NO` (no XML header)
-   `CO_OPT_VAL_WITHOUT_ENCODING` (version)
-   `CO_OPT_VAL_FULL` (version and encoding)

-   The default option is `CO_OPT_VAL_NO`. Using the option [`xml_header`](ABAPCALL_TRANSFORMATION_OPTIONS.html) for `CALL TRANSFORMATION` overrides the option in `IF_SXML_WRITER` if it is initial. For JSON and Binary XML, the setting of the option is ignored.
-   The writers in the sXML Library do not currently support XML comments, `CDATA` sections, or processor instructions.
-   If rendering produces content of elements or attributes, the characters *<*, *\>*, *&*, *"*, and *'* are transformed automatically into the respective [XML notation](ABENXML_OVIEW.html).

-   [Transformation to XML Writers](ABENSXML_TRAFO_INTO_WRITER_ABEXA.html)
-   [XML Header](ABENSXML_WRITER_HEADER_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html