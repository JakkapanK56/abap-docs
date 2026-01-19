---
title: "ABENABAP_XSLT_ASXML"
description: |
  ABENABAP_XSLT_ASXML - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_ASXML.htm"
abapFile: "ABENABAP_XSLT_ASXML.html"
keywords: ["do", "if", "case", "data", "types", "ABENABAP", "XSLT", "ASXML"]
---

The canonical [XML](ABENXML_GLOSRY.html) representation asXML is the format of XML data that results from a serialization of ABAP data using [XSLT programs](ABENXSL_TRANSFORMATION_GLOSRY.html) as an intermediate format, or that is required for a deserialization using XSLT. This format is also known as ABAP Serialization XML.

The canonical XML representation supports all ABAP data types. The elementary ABAP data types are mapped to a set of XML schema data types. Conversely, special domains are available for further XML schema data types.

The asXML format is significant in the following cases:

Description of the asXML format:

The asXML format of serialized ABAP data or objects can be created and examined using the predefined [identity transformation `ID`](ABENABAP_XSLT_ID.html). This transformation is not, however, symmetrical with respect to text strings that contain only blanks. A symmetrical transformation that creates the asXML format of ABAP data (excluding reference variables) can be created using the `[ST](ABENABAP_ST.html) statement`\\ [`tt:copy`](ABENST_TT_COPY.html).

-   The mapping of elementary ABAP data types to XML schema data types and vice versa.
-   In the case of user-defined [XSL](ABENXSL_TRANSFORMATION_GLOSRY.html) transformations of ABAP data to an XML format, the asXML format of the serialization result must be known.
-   External XML data whose content is to be deserialized into ABAP data must be transformed to asXML format.
-   The asXML mapping of elementary ABAP data types to XML schema data types and vice versa is also used in [Simple Transformation](ABENSIMPLE_TRANSFORMATION_GLOSRY.html)

-   [General asXML Format](ABENABAP_XSLT_ASXML_GENERAL.html)
-   [Mapping of ABAP Data Types](ABENABAP_XSLT_ASXML_NAMED.html)
-   [Mapping Additional XML Schema Data Types](ABENABAP_XSLT_ASXML_SCHEMA.html)
-   [Mapping of XML Fragments](ABENABAP_XSLT_ASXML_FRAGMENT.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html