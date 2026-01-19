---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_JSON_ASJSON_STRUC_ABEXA.htm"
abapFile: "ABENABAP_JSON_ASJSON_STRUC_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENABAP", "JSON", "ASJSON", "STRUC", "ABEXA"]
---

This example demonstrates [asJSON](ABENABAP_ASJSON_ABAP_TYPES_STRUC.html) for a structure.

The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`, for which a [JSON writer](ABENJSON_WRITER_GLOSRY.html) is specified as the XML target, is called to create the [asJSON](ABENASJSON_GLOSRY.html) representation of a structure.

For comparison, the [JSON-XML](ABENJSON_XML_GLOSRY.html) representation of the JSON data and the [asXML](ABENASXML_GLOSRY.html) representation of the ABAP data is also shown.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asjson\_structures DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asjson\_structures IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struct, \\n i TYPE i VALUE -123, \\n int8 TYPE int8 VALUE -123, \\n p TYPE p DECIMALS 2 VALUE \`-1.23\`, \\n decfloat16 TYPE decfloat16 VALUE \`123E+1\`, \\n decfloat34 TYPE decfloat34 VALUE \`-3.140000E+02\`, \\n f TYPE f VALUE \`-3.140000E+02\`, \\n c TYPE c LENGTH 3 VALUE \` Hi\`, \\n string TYPE string VALUE \` Hello \`, \\n n TYPE n LENGTH 6 VALUE \`001234\`, \\n d TYPE d VALUE \`20020204\`, \\n t TYPE t VALUE \`201501\`, \\n x TYPE x LENGTH 3 VALUE \`ABCDEF\`, \\n xstring TYPE xstring VALUE \`456789AB\`, \\n END OF struct. \\n\\ \\n "Transformation to JSON \\n out->begin\_section( 'asJSON' ). \\n FINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE struct = struct \\n RESULT XML writer. \\n FINAL(json) = writer->get\_output( ). \\n out->write\_json( json ). \\n\\ \\n "JSON-XML \\n out->next\_section( 'asJSON-XML' ). \\n FINAL(reader) = cl\_sxml\_string\_reader=>create( json ). \\n FINAL(xml\_writer) = cl\_sxml\_string\_writer=>create( ). \\n reader->next\_node( ). \\n reader->skip\_node( xml\_writer ). \\n DATA(xml) = xml\_writer->get\_output( ). \\n out->write\_xml( xml ). \\n\\ \\n "asXML \\n out->next\_section( 'asXML' ). \\n CALL TRANSFORMATION id SOURCE struct = struct \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asjson\_structures DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asjson\_structures IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struct, \\n i TYPE i VALUE -123, \\n int8 TYPE int8 VALUE -123, \\n p TYPE p DECIMALS 2 VALUE \`-1.23\`, \\n decfloat16 TYPE decfloat16 VALUE \`123E+1\`, \\n decfloat34 TYPE decfloat34 VALUE \`-3.140000E+02\`, \\n f TYPE f VALUE \`-3.140000E+02\`, \\n c TYPE c LENGTH 3 VALUE \` Hi\`, \\n string TYPE string VALUE \` Hello \`, \\n n TYPE n LENGTH 6 VALUE \`001234\`, \\n d TYPE d VALUE \`20020204\`, \\n t TYPE t VALUE \`201501\`, \\n x TYPE x LENGTH 3 VALUE \`ABCDEF\`, \\n xstring TYPE xstring VALUE \`456789AB\`, \\n END OF struct. \\n\\ \\n "Transformation to JSON \\n out->begin\_section( 'asJSON' ). \\n FINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE struct = struct \\n RESULT XML writer. \\n FINAL(json) = writer->get\_output( ). \\n out->write\_json( json ). \\n\\ \\n "JSON-XML \\n out->next\_section( 'asJSON-XML' ). \\n FINAL(reader) = cl\_sxml\_string\_reader=>create( json ). \\n FINAL(xml\_writer) = cl\_sxml\_string\_writer=>create( ). \\n reader->next\_node( ). \\n reader->skip\_node( xml\_writer ). \\n DATA(xml) = xml\_writer->get\_output( ). \\n out->write\_xml( xml ). \\n\\ \\n "asXML \\n out->next\_section( 'asXML' ). \\n CALL TRANSFORMATION id SOURCE struct = struct \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_abexas.html