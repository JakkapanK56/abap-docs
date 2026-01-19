---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSERIALIZE_REF_HEAP_EMBED_ABEXA.htm"
abapFile: "ABENSERIALIZE_REF_HEAP_EMBED_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENSERIALIZE", "REF", "HEAP", "EMBED", "ABEXA"]
---

This example demonstrates serializations of an anonymous data object to [asXML](ABENASXML_GLOSRY.html) and to [asJSON](ABENASJSON_GLOSRY.html).

The [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` is used to serialize an anonymous data object to [asXML](ABENASXML_GLOSRY.html) and to [asJSON](ABENASJSON_GLOSRY.html), once with and once without the transformation option [`` data_refs = `embedded` ``](ABAPCALL_TRANSFORMATION_OPTIONS.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_heap\_embedded DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_heap\_embedded IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`Serialization of Data Reference Variable\` ). \\n\\ \\n DATA dref TYPE REF TO string. \\n dref = NEW #( \`contents\` ). \\n\\ \\n out->begin\_section( \`Contents in Heap\` \\n )->begin\_section( \`asXML\` ). \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML FINAL(xml\_heap). \\n out->write\_xml( xml\_heap \\n )->next\_section( \`asJSON\` ). \\n FINAL(writer\_heap) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML writer\_heap. \\n out->write\_json( writer\_heap->get\_output( ) \\n )->end\_section( ). \\n\\ \\n out->next\_section( \`Contents Embedded\` \\n )->begin\_section( \`asXML\` ). \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML FINAL(xml\_embedded) \\n OPTIONS data\_refs = \`embedded\`. \\n out->write\_xml( xml\_embedded \\n )->next\_section( \`asJSON\` ). \\n FINAL(writer\_embedded) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML writer\_embedded \\n OPTIONS data\_refs = \`embedded\`. \\n out->write\_json( writer\_embedded->get\_output( ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_heap\_embedded DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_heap\_embedded IMPLEMENTATION. \\n METHOD main. \\n out->begin\_section( \`Serialization of Data Reference Variable\` ). \\n\\ \\n DATA dref TYPE REF TO string. \\n dref = NEW #( \`contents\` ). \\n\\ \\n out->begin\_section( \`Contents in Heap\` \\n )->begin\_section( \`asXML\` ). \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML FINAL(xml\_heap). \\n out->write\_xml( xml\_heap \\n )->next\_section( \`asJSON\` ). \\n FINAL(writer\_heap) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML writer\_heap. \\n out->write\_json( writer\_heap->get\_output( ) \\n )->end\_section( ). \\n\\ \\n out->next\_section( \`Contents Embedded\` \\n )->begin\_section( \`asXML\` ). \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML FINAL(xml\_embedded) \\n OPTIONS data\_refs = \`embedded\`. \\n out->write\_xml( xml\_embedded \\n )->next\_section( \`asJSON\` ). \\n FINAL(writer\_embedded) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id SOURCE dref = dref \\n RESULT XML writer\_embedded \\n OPTIONS data\_refs = \`embedded\`. \\n out->write\_json( writer\_embedded->get\_output( ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenabap\_xslt\_asxml\_named.html abenabap\_xslt\_asxml\_references.html abenasxml\_anonymous\_data\_object.html