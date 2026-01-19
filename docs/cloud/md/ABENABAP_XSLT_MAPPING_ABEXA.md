---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_XSLT_MAPPING_ABEXA.htm"
abapFile: "ABENABAP_XSLT_MAPPING_ABEXA.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENABAP", "XSLT", "MAPPING", "ABEXA"]
---

The example demonstrates the mapping of UUIDs to XML schema data types.

In this example, a [UUID](ABENUUID_GLOSRY.html) is created and passed to the predefined [identity transformation](ABENID_TRAFO_GLOSRY.html)\\ `ID` with the data types `XSDUUID_CHAR` and `SYSUUID_C32`. The UUID of the type `XSDUUID_CHAR` is recognized as such and converted to the associated [XML schema data type](ABENABAP_XSLT_ASXML_SCHEMA.html). However, the UUID of the type `SYSUUID_C32` is interpreted as a regular text field and passed unconverted in accordance with the associated rules for the [mapping of elementary ABAP types](ABENABAP_XSLT_ASXML_ELEMENTARY.html).

When the new XML data is deserialized using the Simple Transformation `DEMO_UUID`, an attempt is made to convert both nodes to ABAP UUIDs of type `XSDUUID_CHAR`. This only works for the first node, which exists in the correct XML schema data type. In the case of the second node, which exists as unformatted text, an exception is raised.

The example shows that it is possible to work with XML schema data types without having to use self-programmed conversions. However, it also shows that when using XML schema data types it is important to pay attention to the correct mapping of data types.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_abap\_xml\_schema\_map DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_xml\_schema\_map IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: uuid TYPE xsduuid\_char, \\n uuid1 TYPE xsduuid\_char, \\n uuid2 TYPE xsduuid\_char, \\n exc\_trafo TYPE REF TO cx\_transformation\_error, \\n exc\_prev TYPE REF TO cx\_root. \\n\\ \\n FIELD-SYMBOLS TYPE sysuuid\_c32. \\n\\ \\n TRY. \\n uuid = cl\_uuid\_factory=>create\_system\_uuid( \\n )->create\_uuid\_c32( ). \\n ASSIGN uuid TO . \\n CALL TRANSFORMATION id SOURCE uuid1 = uuid \\n uuid2 = \\ \\n RESULT XML FINAL(xml\_xstring). \\n out->write\_xml( xml\_xstring ). \\n CATCH cx\_uuid\_error. \\n RETURN. \\n CATCH cx\_transformation\_error. \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n CALL TRANSFORMATION demo\_uuid SOURCE XML xml\_xstring \\n RESULT uuid1 = uuid1 \\n uuid2 = uuid2. \\n CATCH cx\_transformation\_error INTO exc\_trafo. \\n out->write( exc\_trafo->get\_text( ) ). \\n IF exc\_trafo->previous IS NOT INITIAL. \\n exc\_prev = exc\_trafo->previous. \\n out->write( exc\_prev->get\_text( ) ). \\n ENDIF. \\n ENDTRY. \\n out->write( \`UUID1 = \` && uuid1 ). \\n out->write( \`UUID2 = \` && uuid2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_abap\_xml\_schema\_map DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_abap\_xml\_schema\_map IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: uuid TYPE xsduuid\_char, \\n uuid1 TYPE xsduuid\_char, \\n uuid2 TYPE xsduuid\_char, \\n exc\_trafo TYPE REF TO cx\_transformation\_error, \\n exc\_prev TYPE REF TO cx\_root. \\n\\ \\n FIELD-SYMBOLS TYPE sysuuid\_c32. \\n\\ \\n TRY. \\n uuid = cl\_uuid\_factory=>create\_system\_uuid( \\n )->create\_uuid\_c32( ). \\n ASSIGN uuid TO . \\n CALL TRANSFORMATION id SOURCE uuid1 = uuid \\n uuid2 = \\ \\n RESULT XML FINAL(xml\_xstring). \\n out->write\_xml( xml\_xstring ). \\n CATCH cx\_uuid\_error. \\n RETURN. \\n CATCH cx\_transformation\_error. \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n CALL TRANSFORMATION demo\_uuid SOURCE XML xml\_xstring \\n RESULT uuid1 = uuid1 \\n uuid2 = uuid2. \\n CATCH cx\_transformation\_error INTO exc\_trafo. \\n out->write( exc\_trafo->get\_text( ) ). \\n IF exc\_trafo->previous IS NOT INITIAL. \\n exc\_prev = exc\_trafo->previous. \\n out->write( exc\_prev->get\_text( ) ). \\n ENDIF. \\n ENDTRY. \\n out->write( \`UUID1 = \` && uuid1 ). \\n out->write( \`UUID2 = \` && uuid2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html