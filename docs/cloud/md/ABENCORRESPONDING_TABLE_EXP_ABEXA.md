---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCORRESPONDING_TABLE_EXP_ABEXA.htm"
abapFile: "ABENCORRESPONDING_TABLE_EXP_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "ABENCORRESPONDING", "TABLE", "EXP", "ABEXA"]
---

This example demonstrates the [component operator](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) for a table expression.

This example shows a [table expression](ABENTABLE_EXPRESSIONS.html) that reads a line of an internal table as a parameter of a constructor expression with the component operator `CORRESPONDING`. After the assignment, the components of the target structure `struct` contain the values of the identically named column of the line read by the table expression.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_table\_exp DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n itab TYPE HASHED TABLE OF spfli WITH UNIQUE KEY carrid connid, \\n BEGIN OF struct, \\n carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF struct, \\n carrid TYPE spfli-carrid VALUE 'LH', \\n connid TYPE spfli-connid VALUE '0400'. \\n METHODS \\n input. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_table\_exp IMPLEMENTATION. \\n METHOD main. \\n input( ). \\n TRY. \\n\\ \\n struct = \\n CORRESPONDING #( itab\[ carrid = carrid connid = connid \] ). \\n\\ \\n out->write( struct ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n out->write( 'Nothing found' ). \\n ENDTRY. \\n ENDMETHOD. \\n METHOD input. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = connid \\n )->request( ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_table\_exp DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n itab TYPE HASHED TABLE OF spfli WITH UNIQUE KEY carrid connid, \\n BEGIN OF struct, \\n carrid TYPE spfli-carrid, \\n connid TYPE spfli-connid, \\n cityfrom TYPE spfli-cityfrom, \\n cityto TYPE spfli-cityto, \\n END OF struct, \\n carrid TYPE spfli-carrid VALUE 'LH', \\n connid TYPE spfli-connid VALUE '0400'. \\n METHODS \\n input. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_table\_exp IMPLEMENTATION. \\n METHOD main. \\n input( ). \\n TRY. \\n\\ \\n struct = \\n CORRESPONDING #( itab\[ carrid = carrid connid = connid \] ). \\n\\ \\n out->write( struct ). \\n CATCH cx\_sy\_itab\_line\_not\_found. \\n out->write( 'Nothing found' ). \\n ENDTRY. \\n ENDMETHOD. \\n METHOD input. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = connid \\n )->request( ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n SELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencorresponding\_abexas.html