---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_JSON_NAMES_TO_UPPER_ABEXA.htm"
abapFile: "ABENABAP_JSON_NAMES_TO_UPPER_ABEXA.html"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "ABENABAP", "JSON", "NAMES", "UPPER", "ABEXA"]
---

Transforms the names of JSON objects to uppercase letters.

This example demonstrates how the names of [JSON data](ABENJSON_OVIEW.html) objects can be transformed to uppercase letters, so that they can be bound to the corresponding ABAP data in deserializations using the statement `CALL TRANSFORMATION` for example. Two transformation methods are demonstrated:

The statement `ASSERT` guarantees that the results of both transformations are the same. After the transformation, the data is deserialized successfully to the ABAP structure. The method used in practice depends on performance and the volume of data expected.

The XSL transformation used `DEMO_JSON_XML_TO_UPPER` is as follows:

<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" \\n               xmlns:sap="http://www.sap.com/sapxsl" version="1.0">\\ \\n  <xsl:template match="@\* | node()">\\ \\n    <xsl:copy>\\ \\n      <xsl:apply-templates select="@\* | node()"/>\\ \\n    </xsl:copy>\\ \\n  </xsl:template>\\ \\n  <xsl:template match="@\*">\\ \\n    <xsl:attribute name="name">\\ \\n      <xsl:value-of select="sap:upper-case(.)"/>\\ \\n    </xsl:attribute>\\ \\n  </xsl:template>\\ \\n</xsl:transform>

-   Parsing and rendering in the method `json_names_to_upper_pr`

-   This transforms the JSON data to [JSON-XML](ABENJSON_XML_GLOSRY.html).
-   The result is parsed using an [XML reader](ABENXML_READER_GLOSRY.html).
-   The attributes with the name `name` are transformed to uppercase letters as in the executable example [Modifying XML Data](ABENSXML_READER_WRITER_ABEXA.html).
-   The result is rendered back to JSON using a [JSON writer](ABENJSON_WRITER_GLOSRY.html).

-   Calling a transformation in the method `json_names_to_upper_tr`

-   The XSL transformation `DEMO_JSON_XML_TO_UPPER`, written for this purpose, is used to transform the object names in [JSON-XML](ABENJSON_XML_GLOSRY.html) to uppercase letters and places the result in a [JSON writer](ABENJSON_WRITER_GLOSRY.html).
-   The modified JSON data is read from the writer.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_json\_names\_to\_upper DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n json\_names\_to\_upper\_pr \\n IMPORTING in TYPE xstring \\n RETURNING VALUE(o) TYPE xstring, \\n json\_names\_to\_upper\_tr \\n IMPORTING in TYPE xstring \\n RETURNING VALUE(o) TYPE xstring. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_json\_names\_to\_upper IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struc, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struc. \\n\\ \\n FINAL(json) = cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\\{"struc":\\{"col1":1,"col2":2\\}\\}\` ). \\n\\ \\n out->begin\_section( 'Original JSON' \\n )->write\_json( json ). \\n\\ \\n CALL TRANSFORMATION id SOURCE XML json RESULT struc = struc. \\n\\ \\n out->next\_section( 'Deserialized JSON' \\n )->write( struc ). \\n\\ \\n FINAL(asjson) = json\_names\_to\_upper\_pr( json ). \\n\\ \\n ASSERT asjson = json\_names\_to\_upper\_tr( json ). \\n\\ \\n out->begin\_section( 'Modified JSON' \\n )->write\_json( asjson ). \\n\\ \\n CALL TRANSFORMATION id SOURCE XML asjson RESULT struc = struc. \\n\\ \\n out->next\_section( 'Deserialized JSON' \\n )->write( struc ). \\n ENDMETHOD. \\n METHOD json\_names\_to\_upper\_pr. \\n FINAL(reader) = cl\_sxml\_string\_reader=>create( in ). \\n FINAL(writer) = CAST if\_sxml\_writer( \\n cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ) ). \\n DO. \\n FINAL(node) = reader->read\_next\_node( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n IF node->type = if\_sxml\_node=>co\_nt\_element\_open. \\n FINAL(attributes) = CAST if\_sxml\_open\_element( \\n node )->get\_attributes( ). \\n LOOP AT attributes ASSIGNING FIELD-SYMBOL(). \\n IF \->qname-name = 'name'. \\n \->set\_value( \\n to\_upper( \->get\_value( ) ) ). \\n ENDIF. \\n ENDLOOP. \\n ENDIF. \\n writer->write\_node( node ). \\n ENDDO. \\n o = CAST cl\_sxml\_string\_writer( writer )->get\_output( ) . \\n ENDMETHOD. \\n METHOD json\_names\_to\_upper\_tr. \\n FINAL(writer) = \\n cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION demo\_json\_xml\_to\_upper \\n SOURCE XML in \\n RESULT XML writer. \\n o = writer->get\_output( ) . \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_json\_names\_to\_upper DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS: \\n json\_names\_to\_upper\_pr \\n IMPORTING in TYPE xstring \\n RETURNING VALUE(o) TYPE xstring, \\n json\_names\_to\_upper\_tr \\n IMPORTING in TYPE xstring \\n RETURNING VALUE(o) TYPE xstring. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_json\_names\_to\_upper IMPLEMENTATION. \\n METHOD main. \\n DATA: BEGIN OF struc, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF struc. \\n\\ \\n FINAL(json) = cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\\{"struc":\\{"col1":1,"col2":2\\}\\}\` ). \\n\\ \\n out->begin\_section( 'Original JSON' \\n )->write\_json( json ). \\n\\ \\n CALL TRANSFORMATION id SOURCE XML json RESULT struc = struc. \\n\\ \\n out->next\_section( 'Deserialized JSON' \\n )->write( struc ). \\n\\ \\n FINAL(asjson) = json\_names\_to\_upper\_pr( json ). \\n\\ \\n ASSERT asjson = json\_names\_to\_upper\_tr( json ). \\n\\ \\n out->begin\_section( 'Modified JSON' \\n )->write\_json( asjson ). \\n\\ \\n CALL TRANSFORMATION id SOURCE XML asjson RESULT struc = struc. \\n\\ \\n out->next\_section( 'Deserialized JSON' \\n )->write( struc ). \\n ENDMETHOD. \\n METHOD json\_names\_to\_upper\_pr. \\n FINAL(reader) = cl\_sxml\_string\_reader=>create( in ). \\n FINAL(writer) = CAST if\_sxml\_writer( \\n cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ) ). \\n DO. \\n FINAL(node) = reader->read\_next\_node( ). \\n IF node IS INITIAL. \\n EXIT. \\n ENDIF. \\n IF node->type = if\_sxml\_node=>co\_nt\_element\_open. \\n FINAL(attributes) = CAST if\_sxml\_open\_element( \\n node )->get\_attributes( ). \\n LOOP AT attributes ASSIGNING FIELD-SYMBOL(). \\n IF \->qname-name = 'name'. \\n \->set\_value( \\n to\_upper( \->get\_value( ) ) ). \\n ENDIF. \\n ENDLOOP. \\n ENDIF. \\n writer->write\_node( node ). \\n ENDDO. \\n o = CAST cl\_sxml\_string\_writer( writer )->get\_output( ) . \\n ENDMETHOD. \\n METHOD json\_names\_to\_upper\_tr. \\n FINAL(writer) = \\n cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION demo\_json\_xml\_to\_upper \\n SOURCE XML in \\n RESULT XML writer. \\n o = writer->get\_output( ) . \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_abexas.html