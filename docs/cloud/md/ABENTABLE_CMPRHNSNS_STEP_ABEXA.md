---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_CMPRHNSNS_STEP_ABEXA.htm"
abapFile: "ABENTABLE_CMPRHNSNS_STEP_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "internal-table", "ABENTABLE", "CMPRHNSNS", "STEP", "ABEXA"]
---

This example demonstrates how the step size and the processing order are used in [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html).

The content of an internal table `itab` is defined by using the additions `STEP` and `USING KEY`.

See also the [executable example](ABENLOOP_AT_ITAB_STEP_ABEXA.html) for the `LOOP` statement using the addition `STEP`.

1.  Every second table line is read in descending order based on the `STEP` statement, starting at the fourth table line from last because of the `FROM` addition.
2.  Every second table line is read in ascending order based on the `USING KEY` and `STEP` statement, starting at the fourth first table line because of the `FROM` addition.
3.  Every second table line is read in descending order based on the `USING KEY` and `STEP` statement, starting at the fifth table line from last because of the `FROM` addition.
4.  Every second table line is read in ascending order based on the `STEP` statement, starting at the fifth first table line because of the `FROM` addition.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_comprh\_step DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_step IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: BEGIN OF line, \\n tabix TYPE sy-tabix, \\n value TYPE i, \\n END OF line. \\n DATA output TYPE TABLE OF line WITH EMPTY KEY. \\n\\ \\n out->write\_doc( \\n \`An internal table itab is declared and filled as follows:\` \\n )->begin\_code( \`itab\` ). \\n\\ \\n DATA itab TYPE STANDARD TABLE OF i \\n WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY sortkey COMPONENTS table\_line. \\n\\ \\n itab = VALUE #( FOR i = 1 UNTIL i > 20 ( i ) ). \\n\\ \\n out->end\_code( \`itab\` ). \\n\\ \\n SORT itab BY table\_line DESCENDING. \\n\\ \\n output = VALUE #( FOR IN itab INDEX INTO tabix FROM 4 TO 16 \\n STEP 2 ( tabix = tabix value = ) ). \\n out->next\_section( \`FOR STEP 2\` )->write( output ). \\n CLEAR output. \\n\\ \\n output = VALUE #( FOR IN itab INDEX INTO tabix \\n USING KEY sortkey FROM 4 TO 16 STEP 2 \\n ( tabix = tabix value = ) ). \\n out->next\_section( \`FOR STEP 2 USING KEY sortkey\` \\n )->write( output ). \\n CLEAR output. \\n\\ \\n output = VALUE #( FOR IN itab INDEX INTO tabix \\n USING KEY sortkey FROM 16 TO 4 STEP -2 \\n ( tabix = tabix value = ) ). \\n out->next\_section( \`FOR STEP -2 USING KEY sortkey\` \\n )->write( output ). \\n CLEAR output. \\n\\ \\n output = VALUE #( FOR IN itab INDEX INTO tabix FROM 16 TO 4 \\n STEP -2 ( tabix = tabix value = ) ). \\n out->next\_section( \`FOR STEP -2\` )->write( output ). \\n CLEAR output. \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_comprh\_step DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_step IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: BEGIN OF line, \\n tabix TYPE sy-tabix, \\n value TYPE i, \\n END OF line. \\n DATA output TYPE TABLE OF line WITH EMPTY KEY. \\n\\ \\n out->write\_doc( \\n \`An internal table itab is declared and filled as follows:\` \\n )->begin\_code( \`itab\` ). \\n\\ \\n DATA itab TYPE STANDARD TABLE OF i \\n WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY sortkey COMPONENTS table\_line. \\n\\ \\n itab = VALUE #( FOR i = 1 UNTIL i > 20 ( i ) ). \\n\\ \\n out->end\_code( \`itab\` ). \\n\\ \\n SORT itab BY table\_line DESCENDING. \\n\\ \\n output = VALUE #( FOR IN itab INDEX INTO tabix FROM 4 TO 16 \\n STEP 2 ( tabix = tabix value = ) ). \\n out->next\_section( \`FOR STEP 2\` )->write( output ). \\n CLEAR output. \\n\\ \\n output = VALUE #( FOR IN itab INDEX INTO tabix \\n USING KEY sortkey FROM 4 TO 16 STEP 2 \\n ( tabix = tabix value = ) ). \\n out->next\_section( \`FOR STEP 2 USING KEY sortkey\` \\n )->write( output ). \\n CLEAR output. \\n\\ \\n output = VALUE #( FOR IN itab INDEX INTO tabix \\n USING KEY sortkey FROM 16 TO 4 STEP -2 \\n ( tabix = tabix value = ) ). \\n out->next\_section( \`FOR STEP -2 USING KEY sortkey\` \\n )->write( output ). \\n CLEAR output. \\n\\ \\n output = VALUE #( FOR IN itab INDEX INTO tabix FROM 16 TO 4 \\n STEP -2 ( tabix = tabix value = ) ). \\n out->next\_section( \`FOR STEP -2\` )->write( output ). \\n CLEAR output. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_comprehensions\_abexas.html