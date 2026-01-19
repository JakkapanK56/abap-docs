---
title: "ABENDESCRIBE_FIELD_ABEXA"
description: |
  ABENDESCRIBE_FIELD_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDESCRIBE_FIELD_ABEXA.htm"
abapFile: "ABENDESCRIBE_FIELD_ABEXA.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENDESCRIBE", "FIELD", "ABEXA"]
---

This example demonstrates how the properties of elementary data types can be determined at runtime.

This example implements a type check that only allows assignments if the source and target fields have the same type.

Using the two input fields `type1` and `type2`, the names of elementary data types are entered. Next, an attempt is made to create anonymous data objects of the types specified dynamically using the `CREATE DATA` statement. If this does not work, an error message is displayed.

The statement `DESCRIBE FIELD` determines the type of the data objects created dynamically. Only if both data objects have the same type dereferenced is `dref2->*` assigned to dereferenced `dref1->*`.

The example does not work if complex data types such as `SCARR` and `SPFLI` are entered in the input fields. In this case `DESCRIBE FIELD`, determines the same types (*u*), which can cause runtime errors if the structures are not convertible to each other.

The [RTTS](ABENRTTI.html) methods can be used to check complex data types and object types at runtime.

\* CCDEF \\nCLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\n\* Public class definition \\nCLASS cl\_demo\_describe\_field DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_describe\_field IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: dref1 TYPE REF TO data, \\n dref2 TYPE REF TO data. \\n\\ \\n DATA: tdescr1 TYPE c LENGTH 1, \\n tdescr2 TYPE c LENGTH 1. \\n\\ \\n DATA: type1 TYPE c LENGTH 30 VALUE 'I', \\n type2 TYPE c LENGTH 30 VALUE 'C'. \\n\\ \\n cl\_demo\_input=>new( )->add\_field( CHANGING field = type1 \\n )->request( CHANGING field = type2 ). \\n\\ \\n TRY. \\n CREATE DATA: dref1 TYPE (type1), \\n dref2 TYPE (type2). \\n\\ \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Create data error!' ). \\n LEAVE PROGRAM. \\n ENDTRY. \\n\\ \\n DESCRIBE FIELD: dref1->\* TYPE tdescr1, \\n dref2->\* TYPE tdescr2. \\n\\ \\n TRY. \\n IF tdescr1 <> tdescr2. \\n RAISE EXCEPTION TYPE conv\_exc. \\n ELSE. \\n dref2->\* = dref1->\*. \\n ENDIF. \\n\\ \\n CATCH conv\_exc. \\n out->write( \`Assignment from type \` && \\n tdescr2 && \\n \` to \` && \\n tdescr1 && \\n \` not allowed!\` ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* CCDEF \\nCLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check. \\nENDCLASS. \\n\\ \\n\* Public class definition \\nCLASS cl\_demo\_describe\_field DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_describe\_field IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: dref1 TYPE REF TO data, \\n dref2 TYPE REF TO data. \\n\\ \\n DATA: tdescr1 TYPE c LENGTH 1, \\n tdescr2 TYPE c LENGTH 1. \\n\\ \\n DATA: type1 TYPE c LENGTH 30 VALUE 'I', \\n type2 TYPE c LENGTH 30 VALUE 'C'. \\n\\ \\n cl\_demo\_input=>new( )->add\_field( CHANGING field = type1 \\n )->request( CHANGING field = type2 ). \\n\\ \\n TRY. \\n CREATE DATA: dref1 TYPE (type1), \\n dref2 TYPE (type2). \\n\\ \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Create data error!' ). \\n LEAVE PROGRAM. \\n ENDTRY. \\n\\ \\n DESCRIBE FIELD: dref1->\* TYPE tdescr1, \\n dref2->\* TYPE tdescr2. \\n\\ \\n TRY. \\n IF tdescr1 <> tdescr2. \\n RAISE EXCEPTION TYPE conv\_exc. \\n ELSE. \\n dref2->\* = dref1->\*. \\n ENDIF. \\n\\ \\n CATCH conv\_exc. \\n out->write( \`Assignment from type \` && \\n tdescr2 && \\n \` to \` && \\n tdescr1 && \\n \` not allowed!\` ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abendescribe\_field.html abapdescribe.html abapdescribe\_field.html