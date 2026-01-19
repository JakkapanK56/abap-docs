---
title: "The example demonstrates the creation of tabular data objects"
description: |
  Creation of an internal table that matches any database table and reading the first rows (`rows`) of the database into the internal table. The method `CHECK_TABLE_NAME_STR` of the class `CL_ABAP_DYN_PRG` checks whether the database table specified exists and can be used. See also the executable exa
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCREATE_TABULAR_DATA_ABEXA.htm"
abapFile: "ABENCREATE_TABULAR_DATA_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "ABENCREATE", "TABULAR", "DATA", "ABEXA"]
---

The example demonstrates the creation of tabular data objects

Creation of an internal table that matches any database table and reading the first rows (`rows`) of the database into the internal table.

The method `CHECK_TABLE_NAME_STR` of the class `CL_ABAP_DYN_PRG` checks whether the database table specified exists and can be used.

See also the [executable example](ABENSELECT_INTO_NEW_TABLE_ABEXA.html) for `SELECT INTO NEW`, where the internal table is created implicitly in the `INTO` clause.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_create\_tabular\_data DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_tabular\_data IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA dref TYPE REF TO data. \\n\\ \\n DATA: dbtab TYPE tabname VALUE 'SPFLI', \\n rows TYPE i VALUE 100. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = dbtab \\n )->add\_field( CHANGING field = rows )->request( ). \\n\\ \\n dbtab = to\_upper( dbtab ). \\n TRY. \\n cl\_abap\_dyn\_prg=>check\_table\_name\_str( \\n val = dbtab \\n packages = 'SAPBC\_DATAMODEL' ). \\n CATCH cx\_abap\_not\_a\_table. \\n out->write( 'Database table not found' ). \\n RETURN. \\n CATCH cx\_abap\_not\_in\_package. \\n out->write( \\n 'Only tables from the flight data model are allowed' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n CREATE DATA dref TYPE STANDARD TABLE OF (dbtab) \\n WITH NON-UNIQUE DEFAULT KEY. \\n SELECT \* \\n FROM (dbtab) \\n INTO TABLE @dref->\* \\n UP TO @rows ROWS. \\n out->write( dref->\* ). \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Error in data creation' ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_create\_tabular\_data DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_create\_tabular\_data IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA dref TYPE REF TO data. \\n\\ \\n DATA: dbtab TYPE tabname VALUE 'SPFLI', \\n rows TYPE i VALUE 100. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = dbtab \\n )->add\_field( CHANGING field = rows )->request( ). \\n\\ \\n dbtab = to\_upper( dbtab ). \\n TRY. \\n cl\_abap\_dyn\_prg=>check\_table\_name\_str( \\n val = dbtab \\n packages = 'SAPBC\_DATAMODEL' ). \\n CATCH cx\_abap\_not\_a\_table. \\n out->write( 'Database table not found' ). \\n RETURN. \\n CATCH cx\_abap\_not\_in\_package. \\n out->write( \\n 'Only tables from the flight data model are allowed' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n CREATE DATA dref TYPE STANDARD TABLE OF (dbtab) \\n WITH NON-UNIQUE DEFAULT KEY. \\n SELECT \* \\n FROM (dbtab) \\n INTO TABLE @dref->\* \\n UP TO @rows ROWS. \\n out->write( dref->\* ). \\n CATCH cx\_sy\_create\_data\_error. \\n out->write( 'Error in data creation' ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html abapcreate\_data\_itab.html