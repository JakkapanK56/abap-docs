---
title: "ABENABAP_SXML_LIB_FORMATS"
description: |
  ABENABAP_SXML_LIB_FORMATS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_SXML_LIB_FORMATS.htm"
abapFile: "ABENABAP_SXML_LIB_FORMATS.html"
keywords: ["insert", "do", "if", "method", "class", "data", "types", "ABENABAP", "SXML", "LIB", "FORMATS"]
---

The formats supported by sXML Library are represented by the constants of the `IF_SXML` interface:

When an [XML writer](ABENABAP_SXML_LIB_RENDER.html) is created, the format created by the writer is defined as follows:

When an [XML reader](ABENABAP_SXML_LIB_PARSE.html) is created, it itself detects the format of the data passed to the parameter `INPUT` of the factory method `CREATE`. The same reader classes can be used for all formats except XOP. Only the special class `CL_SXML_XOP_READER` can be used for the XOP format. The factory method `CREATE` of this class expects an actual parameter of the type `IF_SXML_XOP=>XOP_PACKAGE`.

-   XML 1.0 (constant `IF_SXML=>CO_XT_XML10`)
-   Standard XML in accordance with [W3C](http://www.w3.org/XML/). XML data is represented in a specific character format using a character string (standard is Unicode character format UTF-8). Raw data whose binary content is to be stored is represented by a [Base64](ABENBASE64_GLOSRY.html) representation.
-   XOP (constant `IF_SXML=>CO_XT_XOP`)
-   XML-binary Optimized Packaging in accordance with [W3C](http://www.w3.org/TR/xop10/). All data other than raw data is represented as a character string, as in XML 1.0. Raw data is not represented as part of the character string in [Base64](ABENBASE64_GLOSRY.html) format. Instead, elements `xop:Include` (namespace `http://www.w3.org/2004/08/xop/include`) are inserted in its place, which contain references to the raw data. The raw data itself is extracted unchanged and stored in byte strings. The string with the character string and the byte strings with the raw data form a package whose parts are to be processed together. In sXML Library, a package of this type is described using the structured type `IF_SXML_XOP=>XOP_PACKAGE`, whose first component `XOP_DOCUMENT` has the type `string` for the character string. The second component `PARTS` is a hashed table for the byte strings. The key column `CONTENT_ID` is the reference target for the references in the `xop:Include` elements. The column `BINARY_DATA` has the type `xstring` and includes the raw data.
-   Binary XML (constant `IF_SXML=>CO_XT_BINARY`)
-   SAP-specific binary format for XML data in which redundant information is suppressed. The XML data is not represented as generally readable character strings and the only character set allowed is UTF-8. Special XML readers and XML writers that understand the format are required to parse and render XML data to [Binary XML](ABENBINARY_XML_GLOSRY.html). sXML can be used to create these objects.
-   JSON (constant `IF_SXML=>CO_XT_JSON`)
-   JavaScript Object Notation in accordance with [json.org](http://www.json.org/). [JSON](ABENJSON_GLOSRY.html) is not XML but JSON data can be represented using XML data. Once mapping of this type is the SAP-specific [JSON-XML](ABENJSON_XML_GLOSRY.html). The format JSON in sXML Library means that an XML writer of this format transforms valid JSON-XML data to JSON data and an XML reader detects JSON data and parses it as if it were JSON-XML data. All methods for [handling JSON in ABAP](ABENABAP_JSON.html) are based on readers and writers like these.

-   For all formats except XOP, the factory methods `CREATE` of the writers for the different storage types have an input parameter `TYPE` to which the value of the constants above can be passed. The XML 1.0 format is used by default. The character format can be passed to the input parameter `ENCODING`, where the default value is UTF-8. This creates the XML declaration. Writers for Binary XML only accept the default value.
-   Only the special class `CL_SXML_XOP_WRITER` can be used for the XOP format, whose factory method `CREATE` does not need an input parameter. XOP writers always return data objects with the type `IF_SXML_XOP=>XOP_PACKAGE`.

-   The attribute `TYPE` declared in the interface `IF_SXML` contains the type of every XML reader and XML writer or the format it is processing. The possible values of the attribute correspond to those of the constants `CO_XT_...` of the interface.
-   XML readers and XML writers of the required formats can be used to transform an XML format to another format.
-   An XML writer to which the character format *UTF16BE* or *UTF16LE* was passed to the parameter `ENCODING` uses the byte order mark (BOM) required by the XML standard as the prefix for the written XML data.

-   [XML Formats](ABENSXML_FORMATS_ABEXA.html)
-   [Transformation of Formats](ABENSXML_FORMAT_TRAFOS_ABEXA.html)

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_libs.html abenabap\_sxml\_lib.html