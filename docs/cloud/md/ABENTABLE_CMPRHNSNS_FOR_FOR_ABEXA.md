---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_CMPRHNSNS_FOR_FOR_ABEXA.htm"
abapFile: "ABENTABLE_CMPRHNSNS_FOR_FOR_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "internal-table", "ABENTABLE", "CMPRHNSNS", "FOR", "ABEXA"]
---

This example demonstrates a sequence of [`FOR` expressions](ABENFOR_IN_ITAB.html) in a table [comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html).

The nested internal table is evaluated in a further `FOR` expression after the `FOR` expression for `itabl`. The result is an internal table `itab2` that contains the content of `itab1` in a flat line structure. The behavior of the sequence of `FOR` expressions is the same as in the nested `LOOP` statements.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_comprh\_nested DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_nested IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line, \\n BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE STANDARD TABLE OF line WITH EMPTY KEY, \\n END OF line1, \\n itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n BEGIN OF line2, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line2, \\n itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY. \\n\\ \\n FINAL(itab1) = VALUE itab1( \\n ( col1 = 1 col2 = VALUE line1-col2( ( col1 = 111 col2 = 112 ) \\n ( col1 = 121 col2 = 122 ) ) ) \\n ( col1 = 2 col2 = VALUE line1-col2( ( col1 = 211 col2 = 212 ) \\n ( col1 = 221 col2 = 222 ) ) ) \\n ( col1 = 3 col2 = VALUE line1-col2( ( col1 = 311 col2 = 312 ) \\n ( col1 = 321 col2 = 322 ) ) ) \\n ). \\n LOOP AT itab1 INTO FINAL(line1). \\n out->write( name = |ITAB1, Line \\{ sy-tabix \\}, COL2| \\n data = line1-col2 ). \\n ENDLOOP. \\n\\ \\n FINAL(itab2) = VALUE itab2( \\n FOR wa1 IN itab1 \\n FOR wa2 IN wa1-col2 \\n ( col1 = wa1-col1 \\n col2 = wa2-col1 \\n col3 = wa2-col2 ) ). \\n out->write( itab2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_comprh\_nested DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_nested IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n END OF line, \\n BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE STANDARD TABLE OF line WITH EMPTY KEY, \\n END OF line1, \\n itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n BEGIN OF line2, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line2, \\n itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY. \\n\\ \\n FINAL(itab1) = VALUE itab1( \\n ( col1 = 1 col2 = VALUE line1-col2( ( col1 = 111 col2 = 112 ) \\n ( col1 = 121 col2 = 122 ) ) ) \\n ( col1 = 2 col2 = VALUE line1-col2( ( col1 = 211 col2 = 212 ) \\n ( col1 = 221 col2 = 222 ) ) ) \\n ( col1 = 3 col2 = VALUE line1-col2( ( col1 = 311 col2 = 312 ) \\n ( col1 = 321 col2 = 322 ) ) ) \\n ). \\n LOOP AT itab1 INTO FINAL(line1). \\n out->write( name = |ITAB1, Line \\{ sy-tabix \\}, COL2| \\n data = line1-col2 ). \\n ENDLOOP. \\n\\ \\n FINAL(itab2) = VALUE itab2( \\n FOR wa1 IN itab1 \\n FOR wa2 IN wa1-col2 \\n ( col1 = wa1-col1 \\n col2 = wa2-col1 \\n col3 = wa2-col2 ) ). \\n out->write( itab2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_comprehensions\_abexas.html