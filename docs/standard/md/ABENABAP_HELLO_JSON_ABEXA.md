---
title: "ABENABAP_HELLO_JSON_ABEXA"
description: |
  ABENABAP_HELLO_JSON_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_HELLO_JSON_ABEXA.htm"
abapFile: "ABENABAP_HELLO_JSON_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENABAP", "HELLO", "JSON", "ABEXA"]
---

This example demonstrates [asJSON](ABENABAP_ASJSON_GENERAL.html) for a text string.

The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID`, for which a [JSON writer](ABENJSON_WRITER_GLOSRY.html) is specified as the XML target, serializes a text string to [JSON](ABENJSON_GLOSRY.html). The output shows the [asJSON](ABENASJSON_GLOSRY.html) representation of the text string.

The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` then deserializes JSON data in asJSON format to a text string.

\* Public class definition \\nCLASS cl\_demo\_json\_elementary\_trafo DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_json\_elementary\_trafo IMPLEMENTATION. \\n METHOD main. \\n DATA(text) = \`Hello JSON, I'm ABAP!\`. \\n out->write\_data( text ). \\n FINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE text = text \\n RESULT XML writer. \\n FINAL(json) = writer->get\_output( ). \\n out->write\_json( json ). \\n\\ \\n out->line( ). \\n\\ \\n text = \`\\{"TEXT":"Hello ABAP, I'm JSON!"\\}\`. \\n out->write\_json( text ). \\n CALL TRANSFORMATION id SOURCE XML text \\n RESULT text = text. \\n out->write\_data( text ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_json\_elementary\_trafo DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_json\_elementary\_trafo IMPLEMENTATION. \\n METHOD main. \\n DATA(text) = \`Hello JSON, I'm ABAP!\`. \\n out->write\_data( text ). \\n FINAL(writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE text = text \\n RESULT XML writer. \\n FINAL(json) = writer->get\_output( ). \\n out->write\_json( json ). \\n\\ \\n out->line( ). \\n\\ \\n text = \`\\{"TEXT":"Hello ABAP, I'm JSON!"\\}\`. \\n out->write\_json( text ). \\n CALL TRANSFORMATION id SOURCE XML text \\n RESULT text = text. \\n out->write\_data( text ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_abexas.html