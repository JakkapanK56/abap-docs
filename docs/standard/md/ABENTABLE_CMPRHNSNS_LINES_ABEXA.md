---
title: "ABENTABLE_CMPRHNSNS_LINES_ABEXA"
description: |
  ABENTABLE_CMPRHNSNS_LINES_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_CMPRHNSNS_LINES_ABEXA.htm"
abapFile: "ABENTABLE_CMPRHNSNS_LINES_ABEXA.html"
keywords: ["method", "class", "data", "types", "internal-table", "ABENTABLE", "CMPRHNSNS", "LINES", "ABEXA"]
---

This example demonstrates how multiple lines in a [`FOR` expression](ABENFOR_IN_ITAB.html) of a table [comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html) are created.

The columns of `itabl` are created as individual lines after its `FOR` expression. The result is a single-column internal table `itab2` that contains the content of `itab1` as an array

\* Public class definition \\nCLASS cl\_demo\_table\_comprh\_lines DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_lines IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line1, \\n itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n itab2 TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\\ \\n FINAL(itab1) = VALUE itab1( \\n ( col1 = 11 col2 = 12 col3 = 13 ) \\n ( col1 = 21 col2 = 22 col3 = 23 ) \\n ( col1 = 31 col2 = 32 col3 = 33 ) ). \\n out->write( itab1 ). \\n\\ \\n FINAL(itab2) = VALUE itab2( \\n FOR wa IN itab1 \\n ( wa-col1 ) \\n ( wa-col2 ) \\n ( wa-col3 ) ). \\n out->write( itab2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_table\_comprh\_lines DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_lines IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n BEGIN OF line1, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line1, \\n itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY, \\n itab2 TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\\ \\n FINAL(itab1) = VALUE itab1( \\n ( col1 = 11 col2 = 12 col3 = 13 ) \\n ( col1 = 21 col2 = 22 col3 = 23 ) \\n ( col1 = 31 col2 = 32 col3 = 33 ) ). \\n out->write( itab1 ). \\n\\ \\n FINAL(itab2) = VALUE itab2( \\n FOR wa IN itab1 \\n ( wa-col1 ) \\n ( wa-col2 ) \\n ( wa-col3 ) ). \\n out->write( itab2 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_comprehensions\_abexas.html