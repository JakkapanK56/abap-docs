---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCORRESPONDING_VS_FOR_ABEXA.htm"
abapFile: "ABENCORRESPONDING_VS_FOR_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "ABENCORRESPONDING", "FOR", "ABEXA"]
---

This example compares the [component operator](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) with [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html),

The columns of an internal table can be assigned to columns with different names in a different table in three different ways:

Each method provides the same results. The component operator is quicker than the table comprehension when there are more than approximately 10 iterations. Using the component operator for each line is always the slowest solution.

-   Constructor expression with component operator `CORRESPONDING` and mapping rule
-   Explicit assignment of the individual components behind a `FOR` expression of a table comprehension.
-   `FOR` expression with evaluation of a constructor expression with component operator for each line.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_vs\_for DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor . \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF struct, \\n carrier TYPE spfli-carrid, \\n connection TYPE spfli-connid, \\n departure TYPE spfli-cityfrom, \\n destination TYPE spfli-cityto, \\n END OF struct. \\n DATA: \\n itab TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid, \\n result1 TYPE HASHED TABLE OF struct \\n WITH UNIQUE KEY carrier connection, \\n result2 TYPE HASHED TABLE OF struct \\n WITH UNIQUE KEY carrier connection, \\n result3 TYPE HASHED TABLE OF struct \\n WITH UNIQUE KEY carrier connection. \\n CONSTANTS iterations TYPE i VALUE 1000. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_vs\_for IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DO iterations TIMES. \\n\\ \\n DATA t1 TYPE decfloat34. \\n FINAL(t11) = utclong\_current( ). \\n result1 = CORRESPONDING #( \\n itab MAPPING carrier = carrid \\n connection = connid \\n departure = cityfrom \\n destination = cityto ). \\n FINAL(t12) = utclong\_current( ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t12 \\n low = t11 \\n IMPORTING seconds = DATA(t13) ). \\n\\ \\n t1 += t13. \\n\\ \\n DATA t2 TYPE decfloat34. \\n FINAL(t21) = utclong\_current( ). \\n result2 = VALUE #( FOR wa IN itab ( carrier = wa-carrid \\n connection = wa-connid \\n departure = wa-cityfrom \\n destination = wa-cityto ) ). \\n FINAL(t22) = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t22 \\n low = t21 \\n IMPORTING seconds = DATA(t23) ). \\n t2 += t23. \\n\\ \\n DATA t3 TYPE decfloat34. \\n FINAL(t31) = utclong\_current( ). \\n result3 = VALUE #( FOR wa IN itab ( \\n CORRESPONDING #( \\n wa MAPPING carrier = carrid \\n connection = connid \\n departure = cityfrom \\n destination = cityto ) ) ). \\n FINAL(t32) = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t32 \\n low = t31 \\n IMPORTING seconds = DATA(t33) ). \\n t3 += t33. \\n\\ \\n ENDDO. \\n\\ \\n IF result1 = result2 AND result1 = result3. \\n out->write( \\n |CORRESPONDING: \\{ \\n t1 / iterations \\n WIDTH = 10 ALIGN = RIGHT \\}\\\\n| && \\n |FOR: \\{ \\n t2 / iterations \\n WIDTH = 10 ALIGN = RIGHT \\}\\\\n| && \\n |FOR CORRESPONDING: \\{ \\n t3 / iterations \\n WIDTH = 10 ALIGN = RIGHT \\}\\\\n| \\n )->line( \\n )->write( result1 ). \\n ELSE. \\n out->write( \`What?\` ). \\n ENDIF. \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_vs\_for DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor . \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF struct, \\n carrier TYPE spfli-carrid, \\n connection TYPE spfli-connid, \\n departure TYPE spfli-cityfrom, \\n destination TYPE spfli-cityto, \\n END OF struct. \\n DATA: \\n itab TYPE HASHED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid, \\n result1 TYPE HASHED TABLE OF struct \\n WITH UNIQUE KEY carrier connection, \\n result2 TYPE HASHED TABLE OF struct \\n WITH UNIQUE KEY carrier connection, \\n result3 TYPE HASHED TABLE OF struct \\n WITH UNIQUE KEY carrier connection. \\n CONSTANTS iterations TYPE i VALUE 1000. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_vs\_for IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DO iterations TIMES. \\n\\ \\n DATA t1 TYPE decfloat34. \\n FINAL(t11) = utclong\_current( ). \\n result1 = CORRESPONDING #( \\n itab MAPPING carrier = carrid \\n connection = connid \\n departure = cityfrom \\n destination = cityto ). \\n FINAL(t12) = utclong\_current( ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t12 \\n low = t11 \\n IMPORTING seconds = DATA(t13) ). \\n\\ \\n t1 += t13. \\n\\ \\n DATA t2 TYPE decfloat34. \\n FINAL(t21) = utclong\_current( ). \\n result2 = VALUE #( FOR wa IN itab ( carrier = wa-carrid \\n connection = wa-connid \\n departure = wa-cityfrom \\n destination = wa-cityto ) ). \\n FINAL(t22) = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t22 \\n low = t21 \\n IMPORTING seconds = DATA(t23) ). \\n t2 += t23. \\n\\ \\n DATA t3 TYPE decfloat34. \\n FINAL(t31) = utclong\_current( ). \\n result3 = VALUE #( FOR wa IN itab ( \\n CORRESPONDING #( \\n wa MAPPING carrier = carrid \\n connection = connid \\n departure = cityfrom \\n destination = cityto ) ) ). \\n FINAL(t32) = utclong\_current( ). \\n cl\_abap\_utclong=>diff( EXPORTING high = t32 \\n low = t31 \\n IMPORTING seconds = DATA(t33) ). \\n t3 += t33. \\n\\ \\n ENDDO. \\n\\ \\n IF result1 = result2 AND result1 = result3. \\n out->write( \\n |CORRESPONDING: \\{ \\n t1 / iterations \\n WIDTH = 10 ALIGN = RIGHT \\}\\\\n| && \\n |FOR: \\{ \\n t2 / iterations \\n WIDTH = 10 ALIGN = RIGHT \\}\\\\n| && \\n |FOR CORRESPONDING: \\{ \\n t3 / iterations \\n WIDTH = 10 ALIGN = RIGHT \\}\\\\n| \\n )->line( \\n )->write( result1 ). \\n ELSE. \\n out->write( \`What?\` ). \\n ENDIF. \\n\\ \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @itab. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencorresponding\_abexas.html