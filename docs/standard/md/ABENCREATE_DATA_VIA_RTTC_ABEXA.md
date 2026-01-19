---
title: "ABENCREATE_DATA_VIA_RTTC_ABEXA"
description: |
  ABENCREATE_DATA_VIA_RTTC_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCREATE_DATA_VIA_RTTC_ABEXA.htm"
abapFile: "ABENCREATE_DATA_VIA_RTTC_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "data", "internal-table", "ABENCREATE", "DATA", "VIA", "RTTC", "ABEXA"]
---

This example demonstrates how a structure is created using [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html).

Dynamic definition of a structure with two components using the `GET` method of the `CL_ABAP_STRUCTDESCR` class. The description of the components of the structure is provided in the internal table `comp_tab`. If no type description object exists for this structure yet, it is created by the `GET` method.

The method `CHECK_TABLE_NAME_STR` of the class `CL_ABAP_DYN_PRG` checks whether the database table specified exists and can be used.

\* Public class definition \\nCLASS cl\_demo\_create\_data\_via\_handle DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_data\_via\_handle IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: struct\_type TYPE REF TO cl\_abap\_structdescr, \\n dref TYPE REF TO data, \\n oref TYPE REF TO cx\_sy\_struct\_creation. \\n\\ \\n DATA column1 TYPE c LENGTH 30. \\n DATA column2 TYPE c LENGTH 30. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = column1 \\n )->add\_field( CHANGING field = column2 \\n )->request( ). \\n\\ \\n column1 = to\_upper( column1 ). \\n column2 = to\_upper( column2 ). \\n\\ \\n TRY. \\n struct\_type = cl\_abap\_structdescr=>get( \\n VALUE #( \\n ( name = column1 type = cl\_abap\_elemdescr=>get\_c( 40 ) ) \\n ( name = column2 type = cl\_abap\_elemdescr=>get\_i( ) ) \\n ) \\n ). \\n CREATE DATA dref TYPE HANDLE struct\_type. \\n CATCH cx\_sy\_struct\_creation INTO oref. \\n out->write( oref->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n dref->(column1) = 'Amount'. \\n dref->(column2) = 11. \\n\\ \\n out->write( dref->\* ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_create\_data\_via\_handle DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_data\_via\_handle IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: struct\_type TYPE REF TO cl\_abap\_structdescr, \\n dref TYPE REF TO data, \\n oref TYPE REF TO cx\_sy\_struct\_creation. \\n\\ \\n DATA column1 TYPE c LENGTH 30. \\n DATA column2 TYPE c LENGTH 30. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = column1 \\n )->add\_field( CHANGING field = column2 \\n )->request( ). \\n\\ \\n column1 = to\_upper( column1 ). \\n column2 = to\_upper( column2 ). \\n\\ \\n TRY. \\n struct\_type = cl\_abap\_structdescr=>get( \\n VALUE #( \\n ( name = column1 type = cl\_abap\_elemdescr=>get\_c( 40 ) ) \\n ( name = column2 type = cl\_abap\_elemdescr=>get\_i( ) ) \\n ) \\n ). \\n CREATE DATA dref TYPE HANDLE struct\_type. \\n CATCH cx\_sy\_struct\_creation INTO oref. \\n out->write( oref->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n dref->(column1) = 'Amount'. \\n dref->(column2) = 11. \\n\\ \\n out->write( dref->\* ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html abapcreate\_data\_handle.html