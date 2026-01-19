---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOOP_GROUP_BY_RANDOM_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_RANDOM_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "internal-table", "ABENLOOP", "GROUP", "RANDOM", "ABEXA"]
---

This example demonstrates a construction of the group key that does not depend on the table lines.

[Grouping](ABAPLOOP_AT_ITAB_GROUP_BY.html) of an internal table `numbers` with [group key binding](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html). The [group key](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) of the [group loop](ABENGROUP_LOOP_GLOSRY.html) is constructed as a value of the type `i`, which is determined as a random number completely independent of the internal table. This casts the table lines into groups of approximately the same size.

In the group loop, the lines of each group are placed in an internal table `members` using a [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html). This table is then output.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_random DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA numbers TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_random IMPLEMENTATION. \\n METHOD main. \\n\\ \\n FINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = 10 ). \\n\\ \\n DATA members LIKE numbers. \\n LOOP AT numbers INTO FINAL(line) \\n GROUP BY rnd->get\_next( ) \\n ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n out->begin\_section( |Group Key: \\{ \\}| ). \\n members = VALUE #( FOR IN GROUP ( ) ). \\n out->write( members \\n )->write( |Lines: \\{ lines( members ) \\}| \\n )->end\_section( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n numbers = VALUE #( FOR j = 1 UNTIL j > 100 ( j ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_random DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA numbers TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_random IMPLEMENTATION. \\n METHOD main. \\n\\ \\n FINAL(rnd) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = 10 ). \\n\\ \\n DATA members LIKE numbers. \\n LOOP AT numbers INTO FINAL(line) \\n GROUP BY rnd->get\_next( ) \\n ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n out->begin\_section( |Group Key: \\{ \\}| ). \\n members = VALUE #( FOR IN GROUP ( ) ). \\n out->write( members \\n )->write( |Lines: \\{ lines( members ) \\}| \\n )->end\_section( ). \\n ENDLOOP. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n numbers = VALUE #( FOR j = 1 UNTIL j > 100 ( j ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html