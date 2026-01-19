---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENENUM_DESCRIPTION_ABEXA.htm"
abapFile: "ABENENUM_DESCRIPTION_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENENUM", "DESCRIPTION", "ABEXA"]
---

This example demonstrates type description for [enumerated objects](ABENENUMERATED_OBJECT_GLOSRY.html).

The type description class `CL_ABAP_ENUMDESCR` return properties of an enumerated variable `size` of an identically named enumerated type.

See also [CDS Enumerated Type, Type Description](ABENCDS_ENUM_DESCRIPTION_ABEXA.html)

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rtti\_enums DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rtti\_enums IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\n FINAL(size) = VALUE size( ). \\n\\ \\n out->next\_section( 'CL\_ABAP\_ENUMDESCR' ). \\n\\ \\n FINAL(enum\_descr) = CAST cl\_abap\_enumdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( size ) ). \\n\\ \\n out->write\_data( enum\_descr->kind \\n )->write\_data( enum\_descr->type\_kind \\n )->write\_data( enum\_descr->base\_type\_kind \\n )->write\_data( enum\_descr->members ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rtti\_enums DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rtti\_enums IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: \\n BEGIN OF ENUM size, \\n s, m, l, xl, xxl, \\n END OF ENUM size. \\n\\ \\n FINAL(size) = VALUE size( ). \\n\\ \\n out->next\_section( 'CL\_ABAP\_ENUMDESCR' ). \\n\\ \\n FINAL(enum\_descr) = CAST cl\_abap\_enumdescr( \\n cl\_abap\_typedescr=>describe\_by\_data( size ) ). \\n\\ \\n out->write\_data( enum\_descr->kind \\n )->write\_data( enum\_descr->type\_kind \\n )->write\_data( enum\_descr->base\_type\_kind \\n )->write\_data( enum\_descr->members ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenenumerated\_types\_usage.html