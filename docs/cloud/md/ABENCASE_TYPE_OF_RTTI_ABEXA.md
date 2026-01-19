---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCASE_TYPE_OF_RTTI_ABEXA.htm"
abapFile: "ABENCASE_TYPE_OF_RTTI_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENCASE", "TYPE", "RTTI", "ABEXA"]
---

This example demonstrates the case distinction [`CASE TYPE OF`](ABAPCASE_TYPE.html) for type description classes.

Actual parameters of different types are passed to the generically typed parameter `param` of the method `main`, and an [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html)\\ [type description object](ABENTYPE_OBJECT_GLOSRY.html) is created, to which the general object reference variable `typedescr` points. The case distinction [`CASE TYPE OF`](ABAPCASE_TYPE.html) is used to determine a more specific suitable RTTI type description class. An inline declaration after the addition `INTO` of the statement `WHEN TYPE` is used to create an object reference variable of this static type and assign the reference to the type description object. Special attributes of the type description objects are accessed in the associated statement blocks.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_case\_type\_of\_rtti DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS meth IMPORTING param TYPE any. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_case\_type\_of\_rtti IMPLEMENTATION. \\n METHOD main. \\n DATA: elem TYPE i, \\n BEGIN OF struc, \\n comp1 TYPE i, \\n comp2 TYPE i, \\n END OF struc, \\n itab LIKE STANDARD TABLE OF struc WITH EMPTY KEY, \\n dref TYPE REF TO i. \\n\\ \\n meth( elem ). \\n meth( struc ). \\n meth( itab ). \\n meth( dref ). \\n\\ \\n ENDMETHOD. \\n METHOD meth. \\n FINAL(typedescr) = cl\_abap\_typedescr=>describe\_by\_data( param ). \\n CASE TYPE OF typedescr. \\n WHEN TYPE cl\_abap\_elemdescr INTO FINAL(elemdescr). \\n out->write( elemdescr->type\_kind ). \\n WHEN TYPE cl\_abap\_structdescr INTO FINAL(structdescr). \\n out->write( structdescr->components ). \\n WHEN TYPE cl\_abap\_tabledescr INTO FINAL(tabledescr). \\n out->write( tabledescr->table\_kind ). \\n WHEN OTHERS. \\n out->write( 'Not supported' ). \\n ENDCASE. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_case\_type\_of\_rtti DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS meth IMPORTING param TYPE any. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_case\_type\_of\_rtti IMPLEMENTATION. \\n METHOD main. \\n DATA: elem TYPE i, \\n BEGIN OF struc, \\n comp1 TYPE i, \\n comp2 TYPE i, \\n END OF struc, \\n itab LIKE STANDARD TABLE OF struc WITH EMPTY KEY, \\n dref TYPE REF TO i. \\n\\ \\n meth( elem ). \\n meth( struc ). \\n meth( itab ). \\n meth( dref ). \\n\\ \\n ENDMETHOD. \\n METHOD meth. \\n FINAL(typedescr) = cl\_abap\_typedescr=>describe\_by\_data( param ). \\n CASE TYPE OF typedescr. \\n WHEN TYPE cl\_abap\_elemdescr INTO FINAL(elemdescr). \\n out->write( elemdescr->type\_kind ). \\n WHEN TYPE cl\_abap\_structdescr INTO FINAL(structdescr). \\n out->write( structdescr->components ). \\n WHEN TYPE cl\_abap\_tabledescr INTO FINAL(tabledescr). \\n out->write( tabledescr->table\_kind ). \\n WHEN OTHERS. \\n out->write( 'Not supported' ). \\n ENDCASE. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abencontrol\_structures.html abenabap\_branches.html abapcase\_type.html