---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENRTTI_DATA_TYPE_ABEXA.htm"
abapFile: "ABENRTTI_DATA_TYPE_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "ABENRTTI", "DATA", "TYPE", "ABEXA"]
---

This example demonstrates how the properties of data types can be determined at runtime.

This example expands on the executable example for `DESCRIBE FIELD` to the correct check of any data type.

When complex types, such as `SCARR` and `SPFLI`, are entered in the input fields, the RTTI determines the full [absolute type name](ABENABSOLUTE_TYPENAME_GLOSRY.html).

\* CCDEF \\nCLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rtti\_data\_types DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rtti\_data\_types IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: type1 TYPE c LENGTH 30 VALUE 'SCARR', \\n type2 TYPE c LENGTH 30 VALUE 'SPFLI'. \\n\\ \\n DATA: dref1 TYPE REF TO data, \\n dref2 TYPE REF TO data. \\n\\ \\n DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr, \\n descr\_ref2 TYPE REF TO cl\_abap\_typedescr. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = type1 \\n )->request( CHANGING field = type2 ). \\n\\ \\n TRY. \\n CREATE DATA: dref1 TYPE (type1), \\n dref2 TYPE (type2). \\n\\ \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Create data error!' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_data( dref1->\* ). \\n descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_data( dref2->\* ). \\n\\ \\n TRY. \\n IF descr\_ref1 <> descr\_ref2. \\n RAISE EXCEPTION TYPE conv\_exc. \\n ELSE. \\n dref2->\* = dref1->\*. \\n ENDIF. \\n CATCH conv\_exc. \\n out->write( \\n \`Assignment from type \` && \\n descr\_ref2->absolute\_name && \\n \` to \` && \\n descr\_ref1->absolute\_name && \\n \` not allowed!\` ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\n\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rtti\_data\_types DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rtti\_data\_types IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: type1 TYPE c LENGTH 30 VALUE 'SCARR', \\n type2 TYPE c LENGTH 30 VALUE 'SPFLI'. \\n\\ \\n DATA: dref1 TYPE REF TO data, \\n dref2 TYPE REF TO data. \\n\\ \\n DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr, \\n descr\_ref2 TYPE REF TO cl\_abap\_typedescr. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = type1 \\n )->request( CHANGING field = type2 ). \\n\\ \\n TRY. \\n CREATE DATA: dref1 TYPE (type1), \\n dref2 TYPE (type2). \\n\\ \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Create data error!' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_data( dref1->\* ). \\n descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_data( dref2->\* ). \\n\\ \\n TRY. \\n IF descr\_ref1 <> descr\_ref2. \\n RAISE EXCEPTION TYPE conv\_exc. \\n ELSE. \\n dref2->\* = dref1->\*. \\n ENDIF. \\n CATCH conv\_exc. \\n out->write( \\n \`Assignment from type \` && \\n descr\_ref2->absolute\_name && \\n \` to \` && \\n descr\_ref1->absolute\_name && \\n \` not allowed!\` ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html abenrtti.html