---
title: "ABENENUM_DESCRIPTION_ABEXA"
description: |
  ABENENUM_DESCRIPTION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENENUM_DESCRIPTION_ABEXA.htm"
abapFile: "ABENENUM_DESCRIPTION_ABEXA.html"
keywords: ["method", "class", "data", "types", "ABENENUM", "DESCRIPTION", "ABEXA"]
---

This example demonstrates type description for [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html).

The statement [`DESCRIBE FIELD`](ABAPDESCRIBE_FIELD.html) and the type description class `CL_ABAP_ENUMDESCR` return properties of an enumerated variable `size` of an identically named enumerated type.

See also [CDS Enumerated Type, Type Description](ABENCDS_ENUM_DESCRIPTION_ABEXA.html)

\* Public class definition \\nCLASS cl\_demo\_describe\_enums DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_describe\_enums IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\n FINAL(size) = VALUE size( ). \\n\\ \\n out->begin\_section( 'DESCRIBE FIELD' ). \\n\\ \\n DESCRIBE FIELD size TYPE FINAL(type) \\n LENGTH FINAL(length) IN BYTE MODE \\n OUTPUT-LENGTH FINAL(output\_length). \\n\\ \\n out->write\_data( type \\n )->write\_data( length \\n )->write\_data( output\_length ). \\n\\ \\n out->next\_section( 'CL\_ABAP\_ENUMDESCR' ). \\n\\ \\n FINAL(enum\_descr) = CAST cl\_abap\_enumdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( size ) ). \\n\\ \\n out->write\_data( enum\_descr->kind \\n )->write\_data( enum\_descr->type\_kind \\n )->write\_data( enum\_descr->base\_type\_kind \\n )->write\_data( enum\_descr->members ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_describe\_enums DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_describe\_enums IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\n FINAL(size) = VALUE size( ). \\n\\ \\n out->begin\_section( 'DESCRIBE FIELD' ). \\n\\ \\n DESCRIBE FIELD size TYPE FINAL(type) \\n LENGTH FINAL(length) IN BYTE MODE \\n OUTPUT-LENGTH FINAL(output\_length). \\n\\ \\n out->write\_data( type \\n )->write\_data( length \\n )->write\_data( output\_length ). \\n\\ \\n out->next\_section( 'CL\_ABAP\_ENUMDESCR' ). \\n\\ \\n FINAL(enum\_descr) = CAST cl\_abap\_enumdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( size ) ). \\n\\ \\n out->write\_data( enum\_descr->kind \\n )->write\_data( enum\_descr->type\_kind \\n )->write\_data( enum\_descr->base\_type\_kind \\n )->write\_data( enum\_descr->members ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenenumerated\_types\_usage.html