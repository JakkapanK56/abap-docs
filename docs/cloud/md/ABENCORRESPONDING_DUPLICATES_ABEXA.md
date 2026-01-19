---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCORRESPONDING_DUPLICATES_ABEXA.htm"
abapFile: "ABENCORRESPONDING_DUPLICATES_ABEXA.html"
keywords: ["insert", "loop", "do", "if", "method", "class", "data", "types", "ABENCORRESPONDING", "DUPLICATES", "ABEXA"]
---

This example demonstrates the [component operator](ABENCONSTRUCTOR_EXPR_CORRESPONDING.html) with the addition [`DISCARDING DUPLICATES`](ABENCORRESPONDING_CONSTR_DUPL.html).

The addition `DISCARDING DUPLICATES` is used twice to ignore duplicate lines:

-   `DISCARDING DUPLICATES` after `itab1` prevents an exception when inserting the third line of `itab1` in `itab2`.
-   In the mapping rule, `DISCARDING DUPLICATES` prevents the exception when the second line of the tabular component `x2` is inserted when inserting the second line of `itab1` in `itab2`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_duplicates DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_duplicates IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line, \\n a1 TYPE i, \\n a2 TYPE i, \\n END OF line, \\n ntab1 TYPE STANDARD TABLE OF line WITH EMPTY KEY, \\n ntab2 TYPE SORTED TABLE OF line WITH UNIQUE KEY a1, \\n BEGIN OF line1, \\n x1 TYPE i, \\n x2 TYPE ntab1, \\n END OF line1, \\n BEGIN OF line2, \\n y1 TYPE i, \\n y2 TYPE ntab2, \\n END OF line2, \\n itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n itab2 TYPE SORTED TABLE OF line2 WITH UNIQUE KEY y1. \\n\\ \\n FINAL(itab1) = \\n VALUE itab1( ( x1 = 1 x2 = VALUE #( ( a1 = 1 a2 = 2 ) \\n ( a1 = 3 a2 = 4 ) ) ) \\n ( x1 = 2 x2 = VALUE #( ( a1 = 1 a2 = 2 ) \\n ( a1 = 1 a2 = 4 ) ) ) \\n ( x1 = 1 x2 = VALUE #( ( a1 = 1 a2 = 2 ) \\n ( a1 = 3 a2 = 4 ) ) ) ). \\n\\ \\n FINAL(itab2) = \\n CORRESPONDING itab2( itab1 DISCARDING DUPLICATES \\n MAPPING y1 = x1 \\n y2 = x2 DISCARDING DUPLICATES ). \\n\\ \\n LOOP AT itab2 INTO FINAL(wa). \\n out->write( wa-y1 \\n )->write( wa-y2 \\n )->line( ). \\n ENDLOOP. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_crrspndng\_duplicates DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_crrspndng\_duplicates IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line, \\n a1 TYPE i, \\n a2 TYPE i, \\n END OF line, \\n ntab1 TYPE STANDARD TABLE OF line WITH EMPTY KEY, \\n ntab2 TYPE SORTED TABLE OF line WITH UNIQUE KEY a1, \\n BEGIN OF line1, \\n x1 TYPE i, \\n x2 TYPE ntab1, \\n END OF line1, \\n BEGIN OF line2, \\n y1 TYPE i, \\n y2 TYPE ntab2, \\n END OF line2, \\n itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n itab2 TYPE SORTED TABLE OF line2 WITH UNIQUE KEY y1. \\n\\ \\n FINAL(itab1) = \\n VALUE itab1( ( x1 = 1 x2 = VALUE #( ( a1 = 1 a2 = 2 ) \\n ( a1 = 3 a2 = 4 ) ) ) \\n ( x1 = 2 x2 = VALUE #( ( a1 = 1 a2 = 2 ) \\n ( a1 = 1 a2 = 4 ) ) ) \\n ( x1 = 1 x2 = VALUE #( ( a1 = 1 a2 = 2 ) \\n ( a1 = 3 a2 = 4 ) ) ) ). \\n\\ \\n FINAL(itab2) = \\n CORRESPONDING itab2( itab1 DISCARDING DUPLICATES \\n MAPPING y1 = x1 \\n y2 = x2 DISCARDING DUPLICATES ). \\n\\ \\n LOOP AT itab2 INTO FINAL(wa). \\n out->write( wa-y1 \\n )->write( wa-y2 \\n )->line( ). \\n ENDLOOP. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abencorresponding.html abencorresponding\_abexas.html