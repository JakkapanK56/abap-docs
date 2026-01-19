---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENASXML_ID_VS_ST_ABEXA.htm"
abapFile: "ABENASXML_ID_VS_ST_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENASXML", "ABEXA"]
---

This example demonstrates the differences between the transformation `ID` and a Simple Transformation.

A text string with five blanks is serialized and deserialized in a [Simple Transformation](ABENABAP_ST.html)\\ `DEMO_ASXML_COPY` using the predefined [identity transformation `ID`](ABENABAP_XSLT_ID.html) and the statement [`tt:copy`](ABENST_TT_COPY.html). The transformation `ID` contains the statement `<xsl:strip-space elements="*"/>`, which means that the blanks are ignored in deserializations and the text string then has the length 0. After deserializations with the Simple Transformation, the blanks exist in the text string.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_id\_vs\_st DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_id\_vs\_st IMPLEMENTATION. \\n METHOD main. \\n DATA: str TYPE string, \\n xml TYPE string, \\n len TYPE i. \\n\\ \\n out->begin\_section( 'XSLT ID' ). \\n str = \` \`. \\n len = strlen( str ). \\n out->write\_text( |String length before: \\{ len \\}| ). \\n CALL TRANSFORMATION id SOURCE node = str \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n CALL TRANSFORMATION id SOURCE XML xml \\n RESULT node = str. \\n len = strlen( str ). \\n out->write\_text( |String length after: \\{ len \\}| ). \\n\\ \\n out->next\_section( 'ST tt:copy' ). \\n str = \` \`. \\n len = strlen( str ). \\n out->write\_text( |String length before: \\{ len \\}| ). \\n CALL TRANSFORMATION demo\_asxml\_copy SOURCE root = str \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n CALL TRANSFORMATION demo\_asxml\_copy SOURCE XML xml \\n RESULT root = str. \\n len = strlen( str ). \\n out->write\_text( |String length after: \\{ len \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_id\_vs\_st DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_id\_vs\_st IMPLEMENTATION. \\n METHOD main. \\n DATA: str TYPE string, \\n xml TYPE string, \\n len TYPE i. \\n\\ \\n out->begin\_section( 'XSLT ID' ). \\n str = \` \`. \\n len = strlen( str ). \\n out->write\_text( |String length before: \\{ len \\}| ). \\n CALL TRANSFORMATION id SOURCE node = str \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n CALL TRANSFORMATION id SOURCE XML xml \\n RESULT node = str. \\n len = strlen( str ). \\n out->write\_text( |String length after: \\{ len \\}| ). \\n\\ \\n out->next\_section( 'ST tt:copy' ). \\n str = \` \`. \\n len = strlen( str ). \\n out->write\_text( |String length before: \\{ len \\}| ). \\n CALL TRANSFORMATION demo\_asxml\_copy SOURCE root = str \\n RESULT XML xml. \\n out->write\_xml( xml ). \\n CALL TRANSFORMATION demo\_asxml\_copy SOURCE XML xml \\n RESULT root = str. \\n len = strlen( str ). \\n out->write\_text( |String length after: \\{ len \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html