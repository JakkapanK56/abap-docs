---
title: "ABENABAP_XML"
description: |
  ABENABAP_XML - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XML.htm"
abapFile: "ABENABAP_XML.html"
keywords: ["do", "while", "if", "class", "data", "internal-table", "ABENABAP", "XML"]
---

This section describes how [XML](ABENXML_GLOSRY.html) data can be created and read in ABAP. The main topics are

ABAP provides the following technologies for handling [XML](ABENXML_OVIEW.html):

Class libraries enable the parsing and rendering of general XML data, while transformations are used mostly to serialize ABAP data to XML and deserialize XML data to ABAP. The technologies are linked by the fact that objects of the class libraries can serve as the source and target of transformations.

-   processing and creating XML data using parsers and renderers that are created and used using the APIs of class libraries, and
-   the direct transformation of ABAP data to an XML format (serialization) and reads of data in XML format to ABAP data objects (deserialization) using transformations that exist as programs in the repository.

-   [Class libraries for XML](ABENABAP_XML_LIBS.html)
-   [Transformations for XML](ABENABAP_XML_TRAFOS.html)

-   In this documentation, the term *XML data* generally indicates a character string or byte string whose value is in XML format and which can occur in various forms, such as strings or internal tables. The term *XML document* generally indicates the representation of XML data in [DOM](ABENDOM_GLOSRY.html) format.
-   When storing in formats other than UTF-8, it should be noted that XML data must be prefixed with a byte order (BOM), in accordance with the XML standard. This applies specifically to storing character-like data in the character representation [UCS-2](ABENUCS2_GLOSRY.html) used by the ABAP programming language. This can mean that XML data that was written as character-like data in a Unicode system cannot be handled directly as such in a non-Unicode system.

abenabap.html abenabap\_reference.html abendata\_interchange.html