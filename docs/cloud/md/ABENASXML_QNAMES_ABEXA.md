---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENASXML_QNAMES_ABEXA.htm"
abapFile: "ABENASXML_QNAMES_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENASXML", "QNAMES", "ABEXA"]
---

This example demonstrates the mapping of XML schema data types for qualified names.

In this example, only two serializations of ABAP data objects are performed to asXML format whose content corresponds to the *\\{URI\\}name* format. In the first serialization, the data objects have the type `string`. In the second they have the type `XSDQNAME`. In the first case, the content is passed unchanged, but in the second case it is interpreted as a qualified name and the associated namespace declarations are created.

Next, XML data is created, which contains one element with a namespace prefix and one without a namespace prefix. This data is deserialized to ABAP data objects with the type `string` and the type `XSDQNAME`. The element with a namespace prefix is deserialized to the data object with the type `string` unchanged. However, when deserializing to the data object of the type `XSDQNAME`, a conversion to the format *\\{URI\\}name* takes place. The element with no namespace prefix is deserialized unchanged in both cases, since only the empty standard namespace exists.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_qname DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_qname IMPLEMENTATION. \\n METHOD main. \\n DATA: name1 TYPE string, \\n name2 TYPE string, \\n qname1 TYPE xsdqname, \\n qname2 TYPE xsdqname. \\n\\ \\n DATA xmlstring TYPE string. \\n\\ \\n name1 = qname1 = '\\{test\_uri\\}Value1'. \\n name2 = qname2 = '\\{test\_uri\\}Value2'. \\n\\ \\n out->begin\_section( 'Serialization of Strings' ). \\n CALL TRANSFORMATION id SOURCE test1 = name1 \\n test2 = name2 \\n RESULT XML xmlstring. \\n out->write\_xml( xmlstring ). \\n\\ \\n out->next\_section( 'Serialization of XSDQNAME' ). \\n CALL TRANSFORMATION id SOURCE test1 = qname1 \\n test2 = qname2 \\n RESULT XML xmlstring. \\n out->write\_xml( xmlstring ). \\n\\ \\n out->next\_section( 'Source for Deserialization' ). \\n xmlstring = \\n \`\` && \\n \`\` && \\n \`\` && \\n \`demox:Value1\` && \\n \`Value2\` && \\n \`\` && \\n \`\`. \\n out->write\_xml( xmlstring ). \\n\\ \\n out->next\_section( 'Deserialization' ). \\n CALL TRANSFORMATION id SOURCE XML xmlstring \\n RESULT test1 = name1 \\n test2 = name2. \\n CALL TRANSFORMATION id SOURCE XML xmlstring \\n RESULT test1 = qname1 \\n test2 = qname2. \\n out->write( \\n |\\{ name1 WIDTH = 20 \\}\\{ name2 WIDTH = 20 \\}| & |\\\\n| & \\n |\\{ qname1 WIDTH = 20 \\}\\{ qname2 WIDTH = 20 \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_qname DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_qname IMPLEMENTATION. \\n METHOD main. \\n DATA: name1 TYPE string, \\n name2 TYPE string, \\n qname1 TYPE xsdqname, \\n qname2 TYPE xsdqname. \\n\\ \\n DATA xmlstring TYPE string. \\n\\ \\n name1 = qname1 = '\\{test\_uri\\}Value1'. \\n name2 = qname2 = '\\{test\_uri\\}Value2'. \\n\\ \\n out->begin\_section( 'Serialization of Strings' ). \\n CALL TRANSFORMATION id SOURCE test1 = name1 \\n test2 = name2 \\n RESULT XML xmlstring. \\n out->write\_xml( xmlstring ). \\n\\ \\n out->next\_section( 'Serialization of XSDQNAME' ). \\n CALL TRANSFORMATION id SOURCE test1 = qname1 \\n test2 = qname2 \\n RESULT XML xmlstring. \\n out->write\_xml( xmlstring ). \\n\\ \\n out->next\_section( 'Source for Deserialization' ). \\n xmlstring = \\n \`\` && \\n \`\` && \\n \`\` && \\n \`demox:Value1\` && \\n \`Value2\` && \\n \`\` && \\n \`\`. \\n out->write\_xml( xmlstring ). \\n\\ \\n out->next\_section( 'Deserialization' ). \\n CALL TRANSFORMATION id SOURCE XML xmlstring \\n RESULT test1 = name1 \\n test2 = name2. \\n CALL TRANSFORMATION id SOURCE XML xmlstring \\n RESULT test1 = qname1 \\n test2 = qname2. \\n out->write( \\n |\\{ name1 WIDTH = 20 \\}\\{ name2 WIDTH = 20 \\}| & |\\\\n| & \\n |\\{ qname1 WIDTH = 20 \\}\\{ qname2 WIDTH = 20 \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html