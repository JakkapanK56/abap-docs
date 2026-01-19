---
title: "ABENABAP_SXML_LIB_PARSE"
description: |
  ABENABAP_SXML_LIB_PARSE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SXML_LIB_PARSE.htm"
abapFile: "ABENABAP_SXML_LIB_PARSE.html"
keywords: ["do", "if", "method", "class", "data", "internal-table", "ABENABAP", "SXML", "LIB", "PARSE"]
---

XML data can be read using sXML Library or its syntax checked by being linked with an XML reader and using its methods. A reader like this is validating, meaning that invalid XML data raises an [exception](ABENABAP_SXML_LIB_EXCEPTIONS.html). It interprets the XML data as a hierarchical tree-like structure where each token is represented by a node assigned uniquely to a subnode (see [W3C Information Set](http://www.w3.org/TR/xml-infoset/)). An element with a literal value, for example, is interpreted as follows:

| \\n|--CO\_NT\_ELEMENT\_OPEN \\n|    | \\n|    |--CO\_NT\_VALUE \\n| \\n|--CO\_NT\_ELEMENT\_CLOSE

The value is a subnode of the node that represents the opening of an element. The names of the nodes here are the same as the constants of the interface `IF_SXML_READER` that describe the type of a node. The attributes of an element have a special task. They are assigned as a list to the node with the type `CO_NT_ELEMENT_OPEN` and can be accessed using special methods when the parser is on the opening of the element.

The [classes and interfaces](ABENABAP_SXML_LIB_READER.html) in sXML Library available for parsing XML data are organized so that there are separate XML reader classes for different requirements. These classes inherit from the abstract superclass `CL_SXML_READER`. The abstract superclass contains implementations of functions required by all readers and includes the interface `IF_SXML_READER`, which contains the components shared by all readers. This interface enables all readers to be accessed in the same way. If special components need to be accessed that are not declared in the interface, a downcast must be used on the corresponding class.

The specialized reader classes are:

The XML data to be parsed is passed to the factory method `CREATE` of each reader. Readers detect the [format](ABENABAP_SXML_LIB_FORMATS.html) and the character format of the data themselves. Except for the XOP reader, readers support all [formats](ABENABAP_SXML_LIB_FORMATS.html) except XOP. The XOP reader supports the XOP format only. Instructions on standardization and handling empty space can be passed to the factory method if the format is suitable.

The methods of the interface `IF_SXML_READER` enable serial parsing of the passed XML data. There are two basic ways to do this:

A reader cannot be used more than once for the same XML data or for other XML data. The read position of a reader is controlled during parsing using its methods. The actions allowed by a reader depend on its current read position. For example, a reader located at the end of the parsed XML data can no longer be used as an XML source of the statement `CALL TRANSFORMATION`. No method exists that can restore the reader to its initial state. A new reader can be created instead.

[Deserialization with XML Reader](ABENSXML_TRAFO_FROM_READER_ABEXA.html)

-   `CL_SXML_STRING_READER`
-   Readers in this class parse XML data in a byte string.
-   `CL_SXML_TABLE_READER`
-   Readers in this class parse XML data in an internal table with a flat byte-like line type.
-   `CL_SXML_DATASET_READER`
-   Readers in this class parse XML data in a file on the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current AS instance.
-   `CL_SXML_HTTP_READER`
-   Readers of this class parse XML data of an HTTP service in [ICF](ABENICF_GLOSRY.html).
-   `CL_SXML_XOP_READER`
-   Readers in this class parse XML data stored in [XOP](ABENXOP_GLOSRY.html) format.

-   [Token-based parsing](ABENABAP_SXML_LIB_PARSE_ITERATIVE.html)
-   [Object-based parsing](ABENABAP_SXML_LIB_PARSE_OO.html)

-   An XML reader in sXML Library can be specified as an XML source of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html). This enables transformations to be performed for all sources supported by sXML readers in all supported [formats](ABENABAP_SXML_LIB_FORMATS.html). In particular, this makes it possible for [JSON data](ABENABAP_JSON.html) to also be consumed directly in ABAP data objects.
-   The method `SKIP_NODE`, which can be used in both token-based and object-oriented parsing, offers various simple ways of checking the validity of a subtree or the entire tree or of copying a tree to a writer, whereby the format can be changed.
-   If the content of elements or attributes contain the notations `&lt;`, `&gt;`, `&amp;`, `&quot;`, or `&apos;`, they are transformed automatically to the corresponding [characters](ABENXML_OVIEW.html) when parsed.
-   The parser of the sXML Library is a more strict validator than the parser of the [iXML Library](ABENABAP_IXML_LIB_CLOUD.html). A namespace prefix must be declared in the same element or in a superelement. Preceding declarations in a parallel element are interpreted as errors.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html