---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENVALUE_ITAB_ABEXA.htm"
abapFile: "ABENVALUE_ITAB_ABEXA.html"
keywords: ["insert", "do", "if", "method", "class", "data", "types", "internal-table", "ABENVALUE", "ITAB", "ABEXA"]
---

This example demonstrates the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for internal tables.

The example shows various effects when using the left side of an assignment in line specifications of the operator `VALUE` in the construction of internal tables.

-   In the construction of `itab1`, the left side is used after `BASE`. Here, it is passed the original three lines as a start value before the line specifications are evaluated. Two single lines are then appended to this start value.
-   In the construction of `itab2`, the left side is initialized before the line specifications are evaluated. This is why no lines are inserted by `LINES OF itab2` and the table contains only two single lines.
-   In the construction of `itab3`, the left side is given its original three lines as a start line using `BASE`. They are then appended again using `LINES OF`, before the two single lines are appended.
-   In the construction of `itab4`, the left side is saved in the helper variable `x` before it is initialization and is then used in `LINES OF`. The result is the same as when the left side is used after `BASE`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_value\_constructor\_itab DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_constructor\_itab IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\n DATA(itab1) = itab. \\n itab1 = VALUE #( BASE itab1 \\n ( 4 ) \\n ( 5 ) ). \\n out->write( itab1 ). \\n\\ \\n DATA(itab2) = itab. \\n itab2 = VALUE #( ( LINES OF itab2 ) \\n ( 4 ) \\n ( 5 ) ). \\n out->write( itab2 ). \\n\\ \\n DATA(itab3) = itab. \\n itab3 = VALUE #( BASE itab3 \\n ( LINES OF itab3 ) \\n ( 4 ) \\n ( 5 ) ). \\n out->write( itab3 ). \\n\\ \\n DATA(itab4) = itab. \\n itab4 = VALUE #( LET x = itab4 IN \\n ( LINES OF x ) \\n ( 4 ) \\n ( 5 ) ). \\n out->write( itab4 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_value\_constructor\_itab DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_value\_constructor\_itab IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\n DATA(itab1) = itab. \\n itab1 = VALUE #( BASE itab1 \\n ( 4 ) \\n ( 5 ) ). \\n out->write( itab1 ). \\n\\ \\n DATA(itab2) = itab. \\n itab2 = VALUE #( ( LINES OF itab2 ) \\n ( 4 ) \\n ( 5 ) ). \\n out->write( itab2 ). \\n\\ \\n DATA(itab3) = itab. \\n itab3 = VALUE #( BASE itab3 \\n ( LINES OF itab3 ) \\n ( 4 ) \\n ( 5 ) ). \\n out->write( itab3 ). \\n\\ \\n DATA(itab4) = itab. \\n itab4 = VALUE #( LET x = itab4 IN \\n ( LINES OF x ) \\n ( 4 ) \\n ( 5 ) ). \\n out->write( itab4 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_value.html abenvalue\_constructor\_params\_itab.html