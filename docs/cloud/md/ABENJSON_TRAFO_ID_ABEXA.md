---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENJSON_TRAFO_ID_ABEXA.htm"
abapFile: "ABENJSON_TRAFO_ID_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENJSON", "TRAFO", "ABEXA"]
---

This example demonstrates various XML sources for [identity transformations](ABENID_TRAFO_GLOSRY.html) with a [JSON writer](ABENJSON_WRITER_GLOSRY.html) as a target.

The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` is filled three times with XML sources. These sources can be passed to the [JSON writer](ABENJSON_WRITER_GLOSRY.html) specified as an XML target:

-   Valid JSON data in a byte string.
-   A [JSON reader](ABENJSON_READER_GLOSRY.html) that points to this byte string.
-   XML data in a byte string in [JSON XML format](ABENJSON_XML_GLOSRY.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_call\_trafo\_id\_json DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_trafo\_id\_json IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \\n \`Identity Transformation for JSON Writer\` ). \\n DATA json\_writer TYPE REF TO cl\_sxml\_string\_writer. \\n\\ \\n out->begin\_section( \\n \`Source JSON String\` ). \\n FINAL(json) = cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\\{"TEXT":"Hello JSON!"\\}\` ). \\n json\_writer = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE XML json \\n RESULT XML json\_writer. \\n out->write\_json( json\_writer->get\_output( ) ). \\n\\ \\n out->next\_section( \\n \`Source JSON Reader\` ). \\n FINAL(json\_reader) = cl\_sxml\_string\_reader=>create( json ). \\n json\_writer = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE XML json\_reader \\n RESULT XML json\_writer. \\n out->write\_json( json\_writer->get\_output( ) ). \\n\\ \\n out->next\_section( \\n \`Source JSON-XML\` ). \\n FINAL(xml\_json) = cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`Hello JSON!\` ). \\n json\_writer = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE XML xml\_json \\n RESULT XML json\_writer. \\n out->write\_json( json\_writer->get\_output( ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_call\_trafo\_id\_json DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_trafo\_id\_json IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \\n \`Identity Transformation for JSON Writer\` ). \\n DATA json\_writer TYPE REF TO cl\_sxml\_string\_writer. \\n\\ \\n out->begin\_section( \\n \`Source JSON String\` ). \\n FINAL(json) = cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`\\{"TEXT":"Hello JSON!"\\}\` ). \\n json\_writer = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE XML json \\n RESULT XML json\_writer. \\n out->write\_json( json\_writer->get\_output( ) ). \\n\\ \\n out->next\_section( \\n \`Source JSON Reader\` ). \\n FINAL(json\_reader) = cl\_sxml\_string\_reader=>create( json ). \\n json\_writer = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE XML json\_reader \\n RESULT XML json\_writer. \\n out->write\_json( json\_writer->get\_output( ) ). \\n\\ \\n out->next\_section( \\n \`Source JSON-XML\` ). \\n FINAL(xml\_json) = cl\_abap\_conv\_codepage=>create\_out( )->convert( \\n \`Hello JSON!\` ). \\n json\_writer = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE XML xml\_json \\n RESULT XML json\_writer. \\n out->write\_json( json\_writer->get\_output( ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_json.html abenabap\_json\_abexas.html