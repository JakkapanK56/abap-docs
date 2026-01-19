---
title: "ABENABAP_JSON_XML"
description: |
  ABENABAP_JSON_XML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_JSON_XML.htm"
abapFile: "ABENABAP_JSON_XML.html"
keywords: ["do", "if", "method", "class", "data", "ABENABAP", "JSON", "XML"]
---

JSON XML is an SAP-specific representation of [JSON](ABENJSON_GLOSRY.html) data in XML format. The [single values](ABENJSON_OVIEW.html), [arrays](ABENJSON_OVIEW.html), and [objects](ABENJSON_OVIEW.html) in JSON are represented as follows in XML.

"..."\\ *\->*\\ <str>...</str>

...\\ *\->*\\ <num>...</num>

true\\ *\->*\\ <bool>true</bool>

false\\ *\->*\\ <bool>false</bool>

null\\ *\->*\\ <null />

\[...\]\\ *\->*\\ <array>...</array>

The comma-separated components of arrays are mapped as subelements of the element `<array>`, whereby the type-specific mapping rule applies to each element.

Since the components of an array do not have names, the elements of an array in JSON-XML cannot have the corresponding attributes, unlike objects.

\\{...\\}\\ *\->*\\ <object>...</object>

The comma-separated components of objects are mapped as subelements of the element `<object>`. There are two representation methods:

In the first shorter method, used by default, a component is mapped like an element of an array, with the name `n` added to the type-specific XML element of the component as the content of the attribute `name`.

In the second longer method, the type-specific XML element of a component is nested in an additional element `<member>`, which then has the attribute `name` with the name of the component.

-   `"n":...`\\ *\->*\\ `<... name="n">...</...>`
-   `"n":...`\\ *\->*\\ `<member name="n"><...>...</...></member>`

-   In the longer alternative for object components, each component in JSON-XML is clearly marked by a `<member>` element, which can help to distinguish objects of arrays when only partial fragments of JSON data are processed.
-   The longer alternative for object components with `<member>` elements can be a better option for [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html), when ABAP data is serialized to JSON or deserialized from JSON.
-   A [JSON writer](ABENJSON_WRITER_GLOSRY.html) that [renders](ABENABAP_JSON_SXML.html) JSON-XML to JSON accepts both alternatives for object components. A [JSON reader](ABENJSON_READER_GLOSRY.html) that [parses](ABENABAP_JSON_SXML.html) JSON data to JSON-XML creates the shorter variant by default. To create the longer variant with `<member>` elements, the method `SET_OPTION` of the interface `IF_SXML_READER` can be used to set the option `IF_SXML_READER=>CO_OPT_SEP_MEMBER`.

-   The class `CL_DEMO_JSON_XML` shows examples of the default JSON-XML representation of valid JSON data.
-   The program `DEMO_JSON_TO_JSON_XML` allows any valid JSON data to be entered and displays its JSON-XML representation.
-   For information about the rendering and parsing of JSON-XML representations in both alternatives for object components, see [Object Components in JSON-XML](ABENABAP_JSON_XML_ABEXA.html).

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html