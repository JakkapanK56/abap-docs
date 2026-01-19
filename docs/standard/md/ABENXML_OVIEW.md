---
title: "ABENXML_OVIEW"
description: |
  ABENXML_OVIEW - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENXML_OVIEW.htm"
abapFile: "ABENXML_OVIEW.html"
keywords: ["do", "if", "class", "data", "ABENXML", "OVIEW"]
---

[XML (Extensible Markup Language)](http://www.w3.org/XML/) is used to represent data structured in different ways and is therefore suitable for communication between different applications and for the integration of data from different applications.

XML data comprises metadata (markup) in the form of tags and the actual data in the form of elements. XML does not specify a fixed set of tags.

In XML 1.0 format, tags are enclosed in angle brackets and always appear in pairs, where `<tag>` is the start of an element and `</tag>` is the end of an element.

<tag>\\ \\n  ... \\n</tag>

A short way of writing an empty element `<tag></tag>` is

<tag />

Elements can be nested inside other elements to any depth. A subelement can be specified more than once within an element.

<tag>\\ \\n  <tag1>\\ \\n    <tag2>\\ \\n      ... \\n    </tag2>\\ \\n  </tag1>\\ \\n  <tag1>\\ \\n    ... \\n  </tag1>\\ \\n  ... \\n</tag>

Valid XML data contains exactly one root element in which all other elements are nested.

in addition to subelements, attributes are allowed that are defined in the opening tag of an element:

<tag attribute="...">

The attributes of an element are specified as name-value pairs using the equal sign `=` before the closing bracket and do not themselves contain markups. Attributes can be delimited using double quotation marks `"` and single quotation marks `'`. An attribute can only be listed once within an element. The order in which the attributes are specified is not important.

To prevent naming conflicts when XML data from different sources is processed, tags can be given namespaces. Special `xmlns` attributes are used to declare namespaces. A uniform resource identifier (URI) is attached to a namespace prefix `ns`.

<... xmlns:ns="...">

Prefixing a tag or attribute with a namespace prefix `ns` separated by a colon `:` gives the tag or element a qualified name:

<tag xmlns:ns="...">\\ \\n  <ns:tag ns:attribute="...">\\ \\n    ... \\n  </ns:tag>\\ \\n  ... \\n</tag>

A namespace prefix must have been defined in the same document before it can be used.

Characters that have their own meaning in XML syntax must be escaped if they are listed in values of elements or attributes:

XML data is valid (well-formed) if it does not violate any XML rules. Generally speaking, XML data must be well-formed before it can be processed by an XML parser.

-   The XML 1.0 format shown here, that is, character strings in angle brackets, is only one way of representing XML data, although it is the most widely used. A [W3C recommendation](http://www.w3.org/TR/xml-infoset/) states that the tree-like arrangement of data in information sets defines the XML format. Any data structured in this way can be handled as XML data. Other notations can also be used, not just XML 1.0. For example, SAP's own [Binary XML](ABENBINARY_XML_GLOSRY.html) uses a binary format instead of character strings and does not delimit tags with angle brackets. ABAP supports further formats in addition to XML 1.0 due to the [sXML Library](ABENABAP_SXML_LIB.html).
-   The class `CL_DEMO_XML_SYNTAX_CHECK` checks the syntax of freely entered XML data.

**Character** **XML Notation**\\ `<` `&lt;`\\ `>` `&gt;`\\ `&` `&amp;`\\ `"` in attributes delimited by `"` `&quot;`\\ `'` in attributes delimited by `'` `&apos;` abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html