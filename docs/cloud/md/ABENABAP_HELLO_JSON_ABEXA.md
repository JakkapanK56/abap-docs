---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_HELLO_JSON_ABEXA.htm"
abapFile: "ABENABAP_HELLO_JSON_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENABAP", "HELLO", "JSON", "ABEXA"]
---

This example demonstrates [asJSON](ABENABAP_ASJSON_GENERAL.html) for a text string.

The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`, for which a [JSON writer](ABENJSON_WRITER_GLOSRY.html) is specified as the XML target, serializes a text string to [JSON](ABENJSON_GLOSRY.html). The output shows the [asJSON](ABENASJSON_GLOSRY.html) representation of the text string.

The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` then deserializes JSON data in asJSON format to a text string.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_json\_elementary\_trafo DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_json\_elementary\_trafo IMPLEMENTATION. \\n METHOD main. \\n DATA(text) = \`Hello JSON, I'm ABAP!\`. \\n out->write\_data( text ). \\n FINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE text = text \\n RESULT XML writer. \\n FINAL(json) = writer->get\_output( ). \\n out->write\_json( json ). \\n\\ \\n out->line( ). \\n\\ \\n text = \`\\{"TEXT":"Hello ABAP, I'm JSON!"\\}\`. \\n out->write\_json( text ). \\n CALL TRANSFORMATION id SOURCE XML text \\n RESULT text = text. \\n out->write\_data( text ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_json\_elementary\_trafo DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_json\_elementary\_trafo IMPLEMENTATION. \\n METHOD main. \\n DATA(text) = \`Hello JSON, I'm ABAP!\`. \\n out->write\_data( text ). \\n FINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE text = text \\n RESULT XML writer. \\n FINAL(json) = writer->get\_output( ). \\n out->write\_json( json ). \\n\\ \\n out->line( ). \\n\\ \\n text = \`\\{"TEXT":"Hello ABAP, I'm JSON!"\\}\`. \\n out->write\_json( text ). \\n CALL TRANSFORMATION id SOURCE XML text \\n RESULT text = text. \\n out->write\_data( text ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_abexas.html