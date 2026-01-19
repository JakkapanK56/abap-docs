---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEW_ON_THE_LEFT_ABEXA.htm"
abapFile: "ABENNEW_ON_THE_LEFT_ABEXA.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "ABENNEW", "THE", "LEFT", "ABEXA"]
---

Constructor expression with `NEW` on the left side of an expression.

Although the reference variable only exists during the statement, the reference to the object is assigned to the reference variable `user=>oref` in the constructor of the class `class`, thus preserving the object. The example also shows dynamic specifications and the exception that is raised in case of an invalid attribute.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_new\_on\_the\_left DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS class DEFINITION. \\n PUBLIC SECTION. \\n DATA attr TYPE string. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\nCLASS frame DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA oref TYPE REF TO class. \\nENDCLASS. \\n\\ \\nCLASS class IMPLEMENTATION. \\n METHOD constructor. \\n frame=>oref = me. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_new\_on\_the\_left IMPLEMENTATION. \\n METHOD main. \\n\\ \\n NEW class( )->attr = 'foo'. \\n out->write( frame=>oref->attr ). \\n\\ \\n TRY. \\n NEW class( )->('attr') = 'foo'. \\n out->write( frame=>oref->attr ). \\n NEW class( )->('foo') = 'foo'. \\n out->write( frame=>oref->attr ). \\n CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_new\_on\_the\_left DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* CCIMP \\nCLASS class DEFINITION. \\n PUBLIC SECTION. \\n DATA attr TYPE string. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\nCLASS frame DEFINITION. \\n PUBLIC SECTION. \\n CLASS-DATA oref TYPE REF TO class. \\nENDCLASS. \\n\\ \\nCLASS class IMPLEMENTATION. \\n METHOD constructor. \\n frame=>oref = me. \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_new\_on\_the\_left IMPLEMENTATION. \\n METHOD main. \\n\\ \\n NEW class( )->attr = 'foo'. \\n out->write( frame=>oref->attr ). \\n\\ \\n TRY. \\n NEW class( )->('attr') = 'foo'. \\n out->write( frame=>oref->attr ). \\n NEW class( )->('foo') = 'foo'. \\n out->write( frame=>oref->attr ). \\n CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_new.html abennew\_constructor\_params\_class.html