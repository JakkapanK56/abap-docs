---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_CMPRHNSNS_SIMPLE_ABEXA.htm"
abapFile: "ABENTABLE_CMPRHNSNS_SIMPLE_ABEXA.html"
keywords: ["do", "if", "try", "method", "class", "data", "types", "internal-table", "ABENTABLE", "CMPRHNSNS", "SIMPLE", "ABEXA"]
---

This example demonstrates the basic properties of [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html).

From an internal table `itab1`, the content of new internal tables is created in constructor expressions with one [`FOR` expression](ABENFOR_IN_ITAB.html) each:

-   `itab2` has the same line type as `itab1`. All columns of all lines are assigned that meet a `WHERE` condition.
-   `itab3` has the same line type as `itab1`. All lines are assigned that meet a `WHERE` condition from a line.
-   `itab4` has fewer columns than `itab1`. Only certain columns of a restricted number of lines are assigned.
-   `itab5` has only one column. The addition `BASE` is used to first assign the table `base` and then the first column of `itab1`. This demonstrates the effect of specifying a sorted secondary key for this column.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_comprh\_elmntry DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n col4 TYPE i, \\n END OF line1, \\n itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY \\n key COMPONENTS col1, \\n BEGIN OF line2, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line2, \\n itab2 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n itab3 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n itab4 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY, \\n itab5 TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_elmntry IMPLEMENTATION. \\n METHOD main. \\n\\ \\n FINAL(itab1) = VALUE itab1( \\n FOR j = 41 THEN j - 10 UNTIL j < 10 \\n ( col1 = j col2 = j + 1 col3 = j + 2 col4 = j + 3 ) ). \\n out->write( itab1 ). \\n\\ \\n FINAL(itab2) = VALUE itab2( \\n FOR wa IN itab1 WHERE ( col1 < 30 ) ##PRIMKEY\[KEY\] \\n ( wa ) ). \\n out->write( itab2 ). \\n\\ \\n FINAL(itab3) = VALUE itab3( \\n FOR wa IN itab1 INDEX INTO idx WHERE ( col1 = 21 ) ##PRIMKEY\[key\] \\n ( LINES OF itab1 FROM idx ) ). \\n out->write( itab3 ). \\n\\ \\n FINAL(itab4) = VALUE itab4( \\n FOR wa IN itab1 FROM 2 TO 3 \\n ( col1 = wa-col2 col2 = wa-col3 ) ). \\n out->write( itab4 ). \\n\\ \\n FINAL(base) = VALUE itab5( ( 1 ) ( 2 ) ( 3 ) ). \\n FINAL(itab5) = VALUE itab5( \\n BASE base \\n FOR wa IN itab1 USING KEY key \\n ( wa-col1 ) ). \\n out->write( itab5 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_comprh\_elmntry DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n\\ \\n PRIVATE SECTION. \\n TYPES: \\n BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n col4 TYPE i, \\n END OF line1, \\n itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY \\n key COMPONENTS col1, \\n BEGIN OF line2, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line2, \\n itab2 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n itab3 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n itab4 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY, \\n itab5 TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_elmntry IMPLEMENTATION. \\n METHOD main. \\n\\ \\n FINAL(itab1) = VALUE itab1( \\n FOR j = 41 THEN j - 10 UNTIL j < 10 \\n ( col1 = j col2 = j + 1 col3 = j + 2 col4 = j + 3 ) ). \\n out->write( itab1 ). \\n\\ \\n FINAL(itab2) = VALUE itab2( \\n FOR wa IN itab1 WHERE ( col1 < 30 ) ##PRIMKEY\[KEY\] \\n ( wa ) ). \\n out->write( itab2 ). \\n\\ \\n FINAL(itab3) = VALUE itab3( \\n FOR wa IN itab1 INDEX INTO idx WHERE ( col1 = 21 ) ##PRIMKEY\[key\] \\n ( LINES OF itab1 FROM idx ) ). \\n out->write( itab3 ). \\n\\ \\n FINAL(itab4) = VALUE itab4( \\n FOR wa IN itab1 FROM 2 TO 3 \\n ( col1 = wa-col2 col2 = wa-col3 ) ). \\n out->write( itab4 ). \\n\\ \\n FINAL(base) = VALUE itab5( ( 1 ) ( 2 ) ( 3 ) ). \\n FINAL(itab5) = VALUE itab5( \\n BASE base \\n FOR wa IN itab1 USING KEY key \\n ( wa-col1 ) ). \\n out->write( itab5 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_comprehensions\_abexas.html