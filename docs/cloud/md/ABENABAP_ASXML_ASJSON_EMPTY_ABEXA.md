---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_ASXML_ASJSON_EMPTY_ABEXA.htm"
abapFile: "ABENABAP_ASXML_ASJSON_EMPTY_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENABAP", "ASXML", "ASJSON", "EMPTY", "ABEXA"]
---

This example demonstrates the deserialization of empty and missing structure components.

A structure is transformed using the [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` into its [asXML](ABENASXML_GLOSRY.html) and [asJSON](ABENASJSON_GLOSRY.html) representations. In the asXML representation, the values of two elements and two complete elements are removed. In JSON, values cannot be removed. In the asJSON representation, the values of two object components are initialized and two object components are removed.

After deserialization into the original ABAP structure, the components to which empty XML elements are assigned are initial. Components, for which no XML element or no JSON object component exist retain their previous value.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_asjson\_strct\_cps DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_asjson\_strct\_cps IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`ABAP Structure\` ). \\n CONSTANTS: \\n BEGIN OF struct, \\n text0 TYPE string VALUE \`\`, \\n text1 TYPE string VALUE \`Text1\`, \\n text2 TYPE string VALUE \`Text2\`, \\n text3 TYPE string VALUE \`Text3\`, \\n number0 TYPE i VALUE 0, \\n number1 TYPE i VALUE 111, \\n number2 TYPE i VALUE 222, \\n number3 TYPE i VALUE 333, \\n END OF struct. \\n DATA(examples) = struct. \\n out->write\_data( examples ). \\n\\ \\n out->next\_section( \`Structure serialized to asXML\` ). \\n DATA xml TYPE string. \\n\\ \\n CALL TRANSFORMATION id SOURCE examples = examples \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n\\ \\n out->next\_section( \`Structure serialized to asJSON\` ). \\n FINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE examples = examples \\n RESULT XML writer. \\n DATA(json) = cl\_abap\_conv\_codepage=>create\_in( )->convert( \\n writer->get\_output( ) ). \\n out->write\_json( json ). \\n\\ \\n out->next\_section( \`Modified asXML\` ). \\n REPLACE \`Text2\` IN xml WITH \`\`. \\n REPLACE \`Text3\` IN xml WITH \`\`. \\n REPLACE \`222\` IN xml WITH \`\`. \\n REPLACE \`333\` IN xml WITH \`\`. \\n out->write\_xml( xml ). \\n\\ \\n out->next\_section( \\n \`ABAP Structure after Deserialization of asXML\` ). \\n examples = struct. \\n CALL TRANSFORMATION id SOURCE XML xml \\n RESULT examples = examples. \\n out->write\_data( examples ). \\n\\ \\n out->next\_section( \`Modified asJSON\` ). \\n REPLACE \`"TEXT2":"Text2",\` IN json WITH \`"TEXT2":""\`. \\n REPLACE \`"TEXT3":"Text3"\` IN json WITH \`\`. \\n REPLACE \`"NUMBER2":222,\` IN json WITH \`"NUMBER2":0\`. \\n REPLACE \`"NUMBER3":333\` IN json WITH \`\`. \\n out->write\_json( json ). \\n\\ \\n out->next\_section( \\n \`ABAP Structure after Deserialization of asJSON\` ). \\n examples = struct. \\n CALL TRANSFORMATION id SOURCE XML json \\n RESULT examples = examples. \\n out->write\_data( examples ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_asjson\_strct\_cps DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_asjson\_strct\_cps IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`ABAP Structure\` ). \\n CONSTANTS: \\n BEGIN OF struct, \\n text0 TYPE string VALUE \`\`, \\n text1 TYPE string VALUE \`Text1\`, \\n text2 TYPE string VALUE \`Text2\`, \\n text3 TYPE string VALUE \`Text3\`, \\n number0 TYPE i VALUE 0, \\n number1 TYPE i VALUE 111, \\n number2 TYPE i VALUE 222, \\n number3 TYPE i VALUE 333, \\n END OF struct. \\n DATA(examples) = struct. \\n out->write\_data( examples ). \\n\\ \\n out->next\_section( \`Structure serialized to asXML\` ). \\n DATA xml TYPE string. \\n\\ \\n CALL TRANSFORMATION id SOURCE examples = examples \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n\\ \\n out->next\_section( \`Structure serialized to asJSON\` ). \\n FINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE examples = examples \\n RESULT XML writer. \\n DATA(json) = cl\_abap\_conv\_codepage=>create\_in( )->convert( \\n writer->get\_output( ) ). \\n out->write\_json( json ). \\n\\ \\n out->next\_section( \`Modified asXML\` ). \\n REPLACE \`Text2\` IN xml WITH \`\`. \\n REPLACE \`Text3\` IN xml WITH \`\`. \\n REPLACE \`222\` IN xml WITH \`\`. \\n REPLACE \`333\` IN xml WITH \`\`. \\n out->write\_xml( xml ). \\n\\ \\n out->next\_section( \\n \`ABAP Structure after Deserialization of asXML\` ). \\n examples = struct. \\n CALL TRANSFORMATION id SOURCE XML xml \\n RESULT examples = examples. \\n out->write\_data( examples ). \\n\\ \\n out->next\_section( \`Modified asJSON\` ). \\n REPLACE \`"TEXT2":"Text2",\` IN json WITH \`"TEXT2":""\`. \\n REPLACE \`"TEXT3":"Text3"\` IN json WITH \`\`. \\n REPLACE \`"NUMBER2":222,\` IN json WITH \`"NUMBER2":0\`. \\n REPLACE \`"NUMBER3":333\` IN json WITH \`\`. \\n out->write\_json( json ). \\n\\ \\n out->next\_section( \\n \`ABAP Structure after Deserialization of asJSON\` ). \\n examples = struct. \\n CALL TRANSFORMATION id SOURCE XML json \\n RESULT examples = examples. \\n out->write\_data( examples ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html