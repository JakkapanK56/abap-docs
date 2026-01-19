---
title: "ABENABAP_JSON_SXML"
description: |
  ABENABAP_JSON_SXML - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_JSON_SXML.htm"
abapFile: "ABENABAP_JSON_SXML.html"
keywords: ["if", "method", "class", "data", "ABENABAP", "JSON", "SXML"]
---

The processing of [JSON](ABENJSON_OVIEW.html) data in ABAP is integrated in the [sXML](ABENSXML_LIBRARY_GLOSRY.html) Library. Here, JSON is supported as a separate [format](ABENABAP_SXML_LIB_FORMATS.html), with [JSON-XML](ABENJSON_GLOSRY.html) used as an intermediate step.

When creating with the method `CREATE`, XML data and [JSON data](ABENJSON_OVIEW.html) can be passed to each [XML reader](ABENABAP_SXML_LIB_PARSE.html) in the sXML Library (except for XOP readers) that is based on the corresponding [classes and interfaces](ABENABAP_SXML_LIB_READER.html). The reader recognizes the JSON format and becomes a JSON reader. A JSON reader handles JSON data as if it were passed XML data that contains the [JSON-XML representation](ABENABAP_JSON_XML.html) of the JSON data.

When parsed, invalid JSON data raises an exception of the class `CX_SXML_PARSE_ERROR` that should be caught in each parser step.

[JSON, Parse](ABENABAP_JSON_OO_READER_ABEXA.html)

The method `CREATE` can be used to create each [XML writer](ABENABAP_SXML_LIB_RENDER.html) in sXML Library (except for XOP writers) that is based on the appropriate [classes and interfaces](ABENABAP_SXML_LIB_WRITER.html) as a JSON writer. Here, the associated constant of the interface `IF_SXML` must be passed to the input parameter `TYPE`.

cl\_sxml\_...\_writer=>create( type = if\_sxml=>co\_xt\_json ).

A JSON writer of this type can, like any sXML writer, be provided with XML data using [token-based](ABENABAP_SXML_LIB_RENDER_TOKEN.html) and [object-oriented rendering](ABENABAP_SXML_LIB_RENDER_OO.html) methods. This XML data must be a valid [JSON-XML representation](ABENABAP_JSON_XML.html) of [JSON data](ABENJSON_OVIEW.html). The object components of JSON data can be written to a writer in either JSON-XML notation, that is, with or without a `<member>` element.

The writer transforms the entered JSON-XML representation to JSON format and provides the result depending on the writer type.

No invalid JSON data is created and instead an exception of the class `CX_SXML_STATE_ERROR` is raised, which must be caught in each writer step.

[JSON, Render](ABENABAP_JSON_TOKEN_WRITER_ABEXA.html)

-   A JSON reader can, like all XML readers, be used as the source of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), which allows direct serialization of JSON data to ABAP data objects.
-   When JSON data is parsed, escape characters `\\` in front of [special characters](ABENJSON_OVIEW.html) in character-like values are removed automatically.
-   By default, the [JSON-XML](ABENABAP_JSON_XML.html) representation is created internally, where the object components of the JSON data are not nested in an element `<member>`. To create the longer variant with `<member>` elements, the method `SET_OPTION` of the interface `IF_SXML_READER` can be used to set the option `IF_SXML_READER=>CO_OPT_SEP_MEMBER`.

-   When JSON data is rendered, [special characters](ABENJSON_OVIEW.html) in character-like values are prefixed automatically with the escape character `\\`.
-   A JSON writer can, like all XML writers, be used as the target of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), which allows direct serialization of ABAP data objects to JSON data.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html