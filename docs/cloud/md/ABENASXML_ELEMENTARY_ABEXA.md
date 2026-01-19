---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENASXML_ELEMENTARY_ABEXA.htm"
abapFile: "ABENASXML_ELEMENTARY_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENASXML", "ELEMENTARY", "ABEXA"]
---

The example demonstrates the mapping of elementary data types.

The statement `CALL TRANSFORMATION` binds the data objects of all elementary ABAP types to elements. The `values` subelement contains these elements. The content of these elements is determined by mapping the bound elementary ABAP data objects.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_elementary DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_elementary IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n i TYPE i VALUE -123, \\n int8 TYPE int8 VALUE -123, \\n p TYPE p DECIMALS 2 VALUE \`-1.23\`, \\n decfloat16 TYPE decfloat16 VALUE \`123E+1\`, \\n decfloat34 TYPE decfloat34 VALUE \`-3.140000E+02\`, \\n f TYPE f VALUE \`-3.140000E+02\`, \\n c TYPE c LENGTH 3 VALUE \` Hi\`, \\n string TYPE string VALUE \` Hello \`, \\n n TYPE n LENGTH 6 VALUE \`001234\`, \\n x TYPE x LENGTH 3 VALUE \`ABCDEF\`, \\n xstring TYPE xstring VALUE \`456789AB\`, \\n d TYPE d VALUE \`20020204\`, \\n t TYPE t VALUE \`201501\`, \\n utclong TYPE utclong VALUE \`2002-02-04T20:15:01,1234567\`. \\n\\ \\n DATA stab TYPE abap\_trans\_srcbind\_tab. \\n stab = VALUE #( \\n ( name = 'I' value = REF #( i ) ) \\n ( name = 'INT8' value = REF #( int8 ) ) \\n ( name = 'P' value = REF #( p ) ) \\n ( name = 'DECFLOAT16' value = REF #( decfloat16 ) ) \\n ( name = 'DECFLOAT34' value = REF #( decfloat34 ) ) \\n ( name = 'F' value = REF #( f ) ) \\n ( name = 'C' value = REF #( c ) ) \\n ( name = 'STRING' value = REF #( string ) ) \\n ( name = 'N' value = REF #( n ) ) \\n ( name = 'X' value = REF #( x ) ) \\n ( name = 'XSTRING' value = REF #( xstring ) ) \\n ( name = 'D' value = REF #( d ) ) \\n ( name = 'T' value = REF #( t ) ) \\n ( name = 'UTCLONG' value = REF #( utclong ) ) ) . \\n CALL TRANSFORMATION id SOURCE (stab) \\n RESULT XML FINAL(xmlstr). \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_asxml\_elementary DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_asxml\_elementary IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n i TYPE i VALUE -123, \\n int8 TYPE int8 VALUE -123, \\n p TYPE p DECIMALS 2 VALUE \`-1.23\`, \\n decfloat16 TYPE decfloat16 VALUE \`123E+1\`, \\n decfloat34 TYPE decfloat34 VALUE \`-3.140000E+02\`, \\n f TYPE f VALUE \`-3.140000E+02\`, \\n c TYPE c LENGTH 3 VALUE \` Hi\`, \\n string TYPE string VALUE \` Hello \`, \\n n TYPE n LENGTH 6 VALUE \`001234\`, \\n x TYPE x LENGTH 3 VALUE \`ABCDEF\`, \\n xstring TYPE xstring VALUE \`456789AB\`, \\n d TYPE d VALUE \`20020204\`, \\n t TYPE t VALUE \`201501\`, \\n utclong TYPE utclong VALUE \`2002-02-04T20:15:01,1234567\`. \\n\\ \\n DATA stab TYPE abap\_trans\_srcbind\_tab. \\n stab = VALUE #( \\n ( name = 'I' value = REF #( i ) ) \\n ( name = 'INT8' value = REF #( int8 ) ) \\n ( name = 'P' value = REF #( p ) ) \\n ( name = 'DECFLOAT16' value = REF #( decfloat16 ) ) \\n ( name = 'DECFLOAT34' value = REF #( decfloat34 ) ) \\n ( name = 'F' value = REF #( f ) ) \\n ( name = 'C' value = REF #( c ) ) \\n ( name = 'STRING' value = REF #( string ) ) \\n ( name = 'N' value = REF #( n ) ) \\n ( name = 'X' value = REF #( x ) ) \\n ( name = 'XSTRING' value = REF #( xstring ) ) \\n ( name = 'D' value = REF #( d ) ) \\n ( name = 'T' value = REF #( t ) ) \\n ( name = 'UTCLONG' value = REF #( utclong ) ) ) . \\n CALL TRANSFORMATION id SOURCE (stab) \\n RESULT XML FINAL(xmlstr). \\n\\ \\n out->write\_xml( xmlstr ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenasxml\_abexas.html