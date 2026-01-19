---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFILTER_TABLE_CONDITION_ABEXA.htm"
abapFile: "ABENFILTER_TABLE_CONDITION_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENFILTER", "TABLE", "CONDITION", "ABEXA"]
---

This example demonstrates various types of [table filtering](ABENCONSTRUCTOR_EXPRESSION_FILTER.html) using a filter table.

A table `itab` contains five random numbers between 1 and 7, a table `ftab` contains five random numbers between 3 and 10. Different types of table filters for `itab` are performed using the table `ftab` as a filter table:

When merged, the results from the first and second filtering are all lines from `itab`. The first filtering creates the union and the second filtering the difference of the two tables `itab` and `ftab`.

The fourth filtering does not produce the same result as the second filtering. The fifth filtering does not produce the lines from `itab` that remain after the third filtering.

-   The first filtering creates a table of all lines from `itab` for which there is at least one line with the same value in `ftab`.
-   The second filtering creates a table of all lines from `itab` for which there is no line with the same value in `ftab`.
-   The third filtering creates a table of all lines from `itab` for which there is at least one line with a lesser value in `ftab`.
-   The fourth filtering creates a table of all lines from `itab` for which there is at least one line with a non-equal value in `ftab`.
-   The fifth filtering creates a table of all lines from `itab` for which there is at least one line with a greater or lesser value in `ftab`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_filter\_table\_condition DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA: \\n itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line, \\n ftab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_filter\_table\_condition IMPLEMENTATION. \\n METHOD main. \\n out->next\_section( 'itab' \\n )->write( itab \\n )->next\_section( 'ftab' \\n )->write( ftab \\n )->next\_section( \\n 'FILTER #( itab IN ftab WHERE table\_line = table\_line )' \\n )->write( \\n FILTER #( itab IN ftab WHERE table\_line = table\_line ) \\n )->next\_section( \\n 'FILTER #( itab EXCEPT IN ftab WHERE table\_line = table\_line )' \\n )->write( \\n FILTER #( itab EXCEPT IN ftab WHERE table\_line = table\_line ) \\n )->next\_section( \\n 'FILTER #( itab IN ftab WHERE table\_line > table\_line )' \\n )->write( \\n FILTER #( itab IN ftab WHERE table\_line > table\_line ) \\n )->next\_section( \\n 'FILTER #( itab IN ftab WHERE table\_line <> table\_line )' \\n )->write( \\n FILTER #( itab IN ftab WHERE table\_line <> table\_line ) \\n )->next\_section( \\n 'FILTER #( itab IN ftab WHERE table\_line <= table\_line )' \\n )->write( \\n FILTER #( itab IN ftab WHERE table\_line <= table\_line ) ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n FINAL(rnd1) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = 7 ). \\n FINAL(rnd2) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 3 max = 10 ). \\n itab = VALUE #( FOR j = 1 UNTIL j > 5 ( rnd1->get\_next( ) ) ). \\n ftab = VALUE #( FOR j = 1 UNTIL j > 5 ( rnd2->get\_next( ) ) ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_filter\_table\_condition DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n DATA: \\n itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line, \\n ftab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line. \\n METHODS constructor. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_filter\_table\_condition IMPLEMENTATION. \\n METHOD main. \\n out->next\_section( 'itab' \\n )->write( itab \\n )->next\_section( 'ftab' \\n )->write( ftab \\n )->next\_section( \\n 'FILTER #( itab IN ftab WHERE table\_line = table\_line )' \\n )->write( \\n FILTER #( itab IN ftab WHERE table\_line = table\_line ) \\n )->next\_section( \\n 'FILTER #( itab EXCEPT IN ftab WHERE table\_line = table\_line )' \\n )->write( \\n FILTER #( itab EXCEPT IN ftab WHERE table\_line = table\_line ) \\n )->next\_section( \\n 'FILTER #( itab IN ftab WHERE table\_line > table\_line )' \\n )->write( \\n FILTER #( itab IN ftab WHERE table\_line > table\_line ) \\n )->next\_section( \\n 'FILTER #( itab IN ftab WHERE table\_line <> table\_line )' \\n )->write( \\n FILTER #( itab IN ftab WHERE table\_line <> table\_line ) \\n )->next\_section( \\n 'FILTER #( itab IN ftab WHERE table\_line <= table\_line )' \\n )->write( \\n FILTER #( itab IN ftab WHERE table\_line <= table\_line ) ). \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n FINAL(rnd1) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 1 max = 7 ). \\n FINAL(rnd2) = cl\_abap\_random\_int=>create( \\n seed = CONV i( \\n cl\_demo\_date\_time=>get\_user\_time( ) ) min = 3 max = 10 ). \\n itab = VALUE #( FOR j = 1 UNTIL j > 5 ( rnd1->get\_next( ) ) ). \\n ftab = VALUE #( FOR j = 1 UNTIL j > 5 ( rnd2->get\_next( ) ) ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenconstructor\_expression\_filter.html abentable\_filtering\_abexas.html