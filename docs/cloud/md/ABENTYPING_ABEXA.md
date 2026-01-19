---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTYPING_ABEXA.htm"
abapFile: "ABENTYPING_ABEXA.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "internal-table", "ABENTYPING", "ABEXA"]
---

This example demonstrates how generically and completely typed formal parameters are accessed.

Three table types are declared in the class `demo_typing`:

The method `sort_itab` has two formal parameters:

In the method `start`, an internal table `tab` is declared with reference to `itab1g`. The key specification is added implicitly. This table is filled and passed to the formal parameters of `sort_itab`.

In `sort_itab`, both formal parameters are sorted twice. In the first sort, the column `cola` is specified statically and dynamically in the second sort as a sort criterion. The behavior is as follows:

If components of generically typed formal parameters are accessed dynamically, a runtime error can also occur if the components do not exist in the actual parameter.

-   `itab1g` has the line type `struc1` with the components `cola` and `colb`. It is generic since the primary table key is not specified.
-   `itab2g` has the line type `struc2` with the components `colb` and `cola`. It is generic since the primary table key is not specified.
-   `itab2c` has the line type `struc2` with the components `cola` and `colb`. It is complete since the primary table key is specified.

-   `pg` is typed generically with `itab2g`.
-   `pc` is typed completely with `itab2c`.

-   The first `SORT` statement accesses the generically typed formal parameter `pg` statically. In this case, the typing with `itab2g` takes place, where `cola` is the second column.
-   The second `SORT` statement accesses the generically typed formal parameter `pg` dynamically. In this case, the type of the actual parameter `itab1g` takes place, where `cola` is the first column.
-   The third and fourth `SORT` statements access the completely typed formal parameter `pc` dynamically or statically. In these cases, the typing with `itab2c` takes place, where `cola` is the second column.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_typing DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: BEGIN OF struc1, \\n cola TYPE i, \\n colb TYPE i, \\n END OF struc1, \\n BEGIN OF struc2, \\n colb TYPE i, \\n cola TYPE i, \\n END OF struc2, \\n itab1g TYPE STANDARD TABLE OF struc1, \\n itab2g TYPE STANDARD TABLE OF struc2, \\n itab2c TYPE STANDARD TABLE OF struc2 \\n WITH NON-UNIQUE DEFAULT KEY. \\n METHODS sort\_itab IMPORTING VALUE(pg) TYPE itab2g \\n VALUE(pc) TYPE itab2c. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_typing IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: tab TYPE itab1g, \\n wa LIKE LINE OF tab. \\n tab = VALUE #( \\n FOR j = 1 UNTIL j > 5 \\n ( cola = j colb = 6 - j ) ). \\n sort\_itab( pg = tab \\n pc = tab ). \\n ENDMETHOD. \\n METHOD sort\_itab. \\n SORT pg BY cola. \\n out->write\_data( pg ). \\n SORT pg BY ('COLA'). \\n out->write\_data( pg ). \\n SORT pc BY cola. \\n out->write\_data( pc ). \\n SORT pc BY ('COLA'). \\n out->write\_data( pc ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_typing DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: BEGIN OF struc1, \\n cola TYPE i, \\n colb TYPE i, \\n END OF struc1, \\n BEGIN OF struc2, \\n colb TYPE i, \\n cola TYPE i, \\n END OF struc2, \\n itab1g TYPE STANDARD TABLE OF struc1, \\n itab2g TYPE STANDARD TABLE OF struc2, \\n itab2c TYPE STANDARD TABLE OF struc2 \\n WITH NON-UNIQUE DEFAULT KEY. \\n METHODS sort\_itab IMPORTING VALUE(pg) TYPE itab2g \\n VALUE(pc) TYPE itab2c. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_typing IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: tab TYPE itab1g, \\n wa LIKE LINE OF tab. \\n tab = VALUE #( \\n FOR j = 1 UNTIL j > 5 \\n ( cola = j colb = 6 - j ) ). \\n sort\_itab( pg = tab \\n pc = tab ). \\n ENDMETHOD. \\n METHOD sort\_itab. \\n SORT pg BY cola. \\n out->write\_data( pg ). \\n SORT pg BY ('COLA'). \\n out->write\_data( pg ). \\n SORT pc BY cola. \\n out->write\_data( pc ). \\n SORT pc BY ('COLA'). \\n out->write\_data( pc ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abentyping.html