---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_INTO_NEW_TABLE_ABEXA.htm"
abapFile: "ABENSELECT_INTO_NEW_TABLE_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "ABENSELECT", "INTO", "NEW", "TABLE", "ABEXA"]
---

The example demonstrates the creation of an internal table as a target area of the statement `SELECT`.

Creates an internal table that matches any DDIC database table in the `INTO` clause and reads the first rows `rows` of the DDIC database table into the internal table.

The method `CHECK_TABLE_NAME_STR` of the class `CL_ABAP_DYN_PRG` checks whether the DDIC database table specified exists and can be used.

See also the [executable example](ABENCREATE_TABULAR_DATA_ABEXA.html) for `CREATE DATA` with explicit creation of the internal table.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_into\_new\_table DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_into\_new\_table IMPLEMENTATION. \\n METHOD main. \\n DATA: dbtab TYPE tabname VALUE 'SPFLI', \\n rows TYPE i VALUE 100. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = dbtab \\n )->add\_field( CHANGING field = rows )->request( ). \\n IF rows < 1 OR rows > 1000. \\n out->write( 'Enter rows between 1 and 1000' ). \\n RETURN. \\n ENDIF. \\n\\ \\n dbtab = to\_upper( dbtab ). \\n TRY. \\n cl\_abap\_dyn\_prg=>check\_table\_name\_str( \\n val = dbtab \\n packages = 'SAPBC\_DATAMODEL' ). \\n CATCH cx\_abap\_not\_a\_table. \\n out->write( 'Database table not found' ). \\n RETURN. \\n CATCH cx\_abap\_not\_in\_package. \\n out->write( \\n 'Only tables from the flight data model are allowed' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n SELECT \* \\n FROM (dbtab) \\n INTO TABLE NEW @FINAL(table) \\n UP TO @rows ROWS. \\n out->write( table->\* ). \\n CATCH cx\_sy\_open\_sql\_db. \\n out->write( 'Error in ABAP SQL' ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_into\_new\_table DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_into\_new\_table IMPLEMENTATION. \\n METHOD main. \\n DATA: dbtab TYPE tabname VALUE 'SPFLI', \\n rows TYPE i VALUE 100. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = dbtab \\n )->add\_field( CHANGING field = rows )->request( ). \\n IF rows < 1 OR rows > 1000. \\n out->write( 'Enter rows between 1 and 1000' ). \\n RETURN. \\n ENDIF. \\n\\ \\n dbtab = to\_upper( dbtab ). \\n TRY. \\n cl\_abap\_dyn\_prg=>check\_table\_name\_str( \\n val = dbtab \\n packages = 'SAPBC\_DATAMODEL' ). \\n CATCH cx\_abap\_not\_a\_table. \\n out->write( 'Database table not found' ). \\n RETURN. \\n CATCH cx\_abap\_not\_in\_package. \\n out->write( \\n 'Only tables from the flight data model are allowed' ). \\n RETURN. \\n ENDTRY. \\n\\ \\n TRY. \\n SELECT \* \\n FROM (dbtab) \\n INTO TABLE NEW @FINAL(table) \\n UP TO @rows ROWS. \\n out->write( table->\* ). \\n CATCH cx\_sy\_open\_sql\_db. \\n out->write( 'Error in ABAP SQL' ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapinto\_clause.html abapselect\_into\_target.html