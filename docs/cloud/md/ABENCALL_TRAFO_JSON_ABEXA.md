---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCALL_TRAFO_JSON_ABEXA.htm"
abapFile: "ABENCALL_TRAFO_JSON_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENCALL", "TRAFO", "JSON", "ABEXA"]
---

This example demonstrates the possible JSON sources and targets of the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html).

First, JSON is returned as result using the [sXML](ABENABAP_SXML_LIB.html) writer. Using the sXML writer, the result is first returned as XML and must be converted to JSON. Using JSON directly as source and result in the statement `CALL TRANSFORMATION` makes this step redundant.

The following examples show the use of `JSON` for the [identity transformation](ABENID_TRAFO_GLOSRY.html), [Simple Transformations](ABENABAP_ST.html), and [XSL Transformations](ABENABAP_XSLT.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_call\_trafo\_json DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS sxml\_writer\_for\_json. \\n METHODS transformation\_id\_result \\n RETURNING VALUE(json) TYPE string. \\n METHODS transformation\_id\_source \\n IMPORTING json TYPE string. \\n METHODS st\_result \\n RETURNING VALUE(json\_x) TYPE xstring. \\n METHODS st\_source \\n IMPORTING json\_st TYPE xstring. \\n METHODS xslt\_result \\n RETURNING VALUE(json) TYPE string. \\n METHODS xslt\_source \\n IMPORTING json TYPE string. \\n DATA int TYPE i. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_trafo\_json IMPLEMENTATION. \\n METHOD main. \\n sxml\_writer\_for\_json( ). \\n DATA(json) = transformation\_id\_result( ). \\n transformation\_id\_source( json ). \\n DATA(json\_st) = st\_result( ). \\n st\_source( json\_st ). \\n DATA(json\_xslt) = xslt\_result( ). \\n xslt\_source( json\_xslt ). \\n ENDMETHOD. \\n METHOD st\_result. \\n CALL TRANSFORMATION demo\_st\_json\_trafo \\n SOURCE var = 0 \\n RESULT JSON json\_x. \\n DATA(json) = cl\_abap\_conv\_codepage=>create\_in( codepage = \`utf-8\` \\n )->convert( json\_x ). \\n ENDMETHOD. \\n METHOD sxml\_writer\_for\_json. \\n FINAL(sxml\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id \\n SOURCE var = 0 \\n RESULT XML sxml\_writer. \\n DATA(json) = cl\_abap\_conv\_codepage=>create\_in( codepage = \`utf-8\` \\n )->convert( sxml\_writer->get\_output( ) ). \\n ENDMETHOD. \\n METHOD transformation\_id\_result. \\n CALL TRANSFORMATION id \\n SOURCE var = 0 \\n RESULT JSON json. \\n ENDMETHOD. \\n METHOD transformation\_id\_source. \\n CALL TRANSFORMATION id \\n SOURCE JSON json \\n RESULT var = int. \\n ENDMETHOD. \\n METHOD st\_source. \\n CALL TRANSFORMATION demo\_st\_json\_trafo \\n SOURCE JSON json\_st \\n RESULT var = int. \\n ENDMETHOD. \\n METHOD xslt\_result. \\n CALL TRANSFORMATION demo\_xslt\_json\_trafo \\n SOURCE var = 0 \\n RESULT JSON json. \\n ENDMETHOD. \\n METHOD xslt\_source. \\n CALL TRANSFORMATION demo\_xslt\_json\_trafo \\n SOURCE JSON json \\n RESULT var = int. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_call\_trafo\_json DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS sxml\_writer\_for\_json. \\n METHODS transformation\_id\_result \\n RETURNING VALUE(json) TYPE string. \\n METHODS transformation\_id\_source \\n IMPORTING json TYPE string. \\n METHODS st\_result \\n RETURNING VALUE(json\_x) TYPE xstring. \\n METHODS st\_source \\n IMPORTING json\_st TYPE xstring. \\n METHODS xslt\_result \\n RETURNING VALUE(json) TYPE string. \\n METHODS xslt\_source \\n IMPORTING json TYPE string. \\n DATA int TYPE i. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_trafo\_json IMPLEMENTATION. \\n METHOD main. \\n sxml\_writer\_for\_json( ). \\n DATA(json) = transformation\_id\_result( ). \\n transformation\_id\_source( json ). \\n DATA(json\_st) = st\_result( ). \\n st\_source( json\_st ). \\n DATA(json\_xslt) = xslt\_result( ). \\n xslt\_source( json\_xslt ). \\n ENDMETHOD. \\n METHOD st\_result. \\n CALL TRANSFORMATION demo\_st\_json\_trafo \\n SOURCE var = 0 \\n RESULT JSON json\_x. \\n DATA(json) = cl\_abap\_conv\_codepage=>create\_in( codepage = \`utf-8\` \\n )->convert( json\_x ). \\n ENDMETHOD. \\n METHOD sxml\_writer\_for\_json. \\n FINAL(sxml\_writer) = cl\_sxml\_string\_writer=>create( \\n type = if\_sxml=>co\_xt\_json ). \\n CALL TRANSFORMATION id \\n SOURCE var = 0 \\n RESULT XML sxml\_writer. \\n DATA(json) = cl\_abap\_conv\_codepage=>create\_in( codepage = \`utf-8\` \\n )->convert( sxml\_writer->get\_output( ) ). \\n ENDMETHOD. \\n METHOD transformation\_id\_result. \\n CALL TRANSFORMATION id \\n SOURCE var = 0 \\n RESULT JSON json. \\n ENDMETHOD. \\n METHOD transformation\_id\_source. \\n CALL TRANSFORMATION id \\n SOURCE JSON json \\n RESULT var = int. \\n ENDMETHOD. \\n METHOD st\_source. \\n CALL TRANSFORMATION demo\_st\_json\_trafo \\n SOURCE JSON json\_st \\n RESULT var = int. \\n ENDMETHOD. \\n METHOD xslt\_result. \\n CALL TRANSFORMATION demo\_xslt\_json\_trafo \\n SOURCE var = 0 \\n RESULT JSON json. \\n ENDMETHOD. \\n METHOD xslt\_source. \\n CALL TRANSFORMATION demo\_xslt\_json\_trafo \\n SOURCE JSON json \\n RESULT var = int. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abapcall\_transformation.html abencall\_transformation\_abexas.html