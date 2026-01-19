---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREDUCE_METHOD_CALL_ABEXA.htm"
abapFile: "ABENREDUCE_METHOD_CALL_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "internal-table", "ABENREDUCE", "METHOD", "CALL", "ABEXA"]
---

This example demonstrates a [reduction](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html) of the columns of an internal table to an object.

In this example, a call of a method `to_string` transforms the lines of the internal table `carriers` after the [`FOR` expression](ABENFOR_IN_ITAB.html) to a text string. This string is then passed to the instance method `WRITE` of an object of the class `CL_DEMO_OUTPUT`. This object is created after `INIT` and referenced by the local reference variable `o`. The return value of the method `WRITE` returns a reference to its own object, which means that the assignment to `o` does not modify its value but meets the syntax rule that `o` must be filled. At the end of processing, the reference to the object in `o` is assigned to the reference variable `out` and the content of the internal table written to the object can be displayed using the method `DISPLAY`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_method\_call DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS to\_string IMPORTING wa TYPE scarr \\n RETURNING VALUE(text) TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_method\_call IMPLEMENTATION. \\n METHOD main. \\n DATA carriers TYPE TABLE OF scarr. \\n SELECT \* FROM scarr INTO TABLE @carriers. \\n\\ \\n DATA o TYPE REF TO if\_demo\_output. \\n o = REDUCE #( \\n INIT o1 = out \\n FOR wa IN carriers \\n NEXT o1 = o1->write( to\_string( wa ) ) ). \\n ENDMETHOD. \\n METHOD to\_string. \\n DO. \\n ASSIGN wa-(sy-index) TO FIELD-SYMBOL(). \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n FINAL(olen) = CAST cl\_abap\_elemdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( ) )->output\_length. \\n text = |\\{ text \\}\\{ CONV string( ) WIDTH = olen + 2 \\}|. \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_reduce\_method\_call DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n METHODS to\_string IMPORTING wa TYPE scarr \\n RETURNING VALUE(text) TYPE string. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_reduce\_method\_call IMPLEMENTATION. \\n METHOD main. \\n DATA carriers TYPE TABLE OF scarr. \\n SELECT \* FROM scarr INTO TABLE @carriers. \\n\\ \\n DATA o TYPE REF TO if\_demo\_output. \\n o = REDUCE #( \\n INIT o1 = out \\n FOR wa IN carriers \\n NEXT o1 = o1->write( to\_string( wa ) ) ). \\n ENDMETHOD. \\n METHOD to\_string. \\n DO. \\n ASSIGN wa-(sy-index) TO FIELD-SYMBOL(). \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n FINAL(olen) = CAST cl\_abap\_elemdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( ) )->output\_length. \\n text = |\\{ text \\}\\{ CONV string( ) WIDTH = olen + 2 \\}|. \\n ENDDO. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_reductions\_abexas.html