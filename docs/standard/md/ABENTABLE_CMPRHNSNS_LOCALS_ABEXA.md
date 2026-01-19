---
title: "ABENTABLE_CMPRHNSNS_LOCALS_ABEXA"
description: |
  ABENTABLE_CMPRHNSNS_LOCALS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_CMPRHNSNS_LOCALS_ABEXA.htm"
abapFile: "ABENTABLE_CMPRHNSNS_LOCALS_ABEXA.html"
keywords: ["method", "class", "data", "types", "ABENTABLE", "CMPRHNSNS", "LOCALS", "ABEXA"]
---

This example demonstrates how local helper fields are used in [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html).

From a single column table `array`, a three-column table `itab` is created whose column content is calculated from the respective line content in `array`. The local helper fields in this example are the work area `x` of the [`FOR` expression](ABENFOR_IN_ITAB.html) and the helper field `off` defined in a [`LET` expression](ABAPLET.html).

\* Public class definition \\nCLASS cl\_demo\_table\_comprh\_locals DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_locals IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n array TYPE STANDARD TABLE OF i WITH EMPTY KEY, \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\n CONSTANTS factor TYPE i VALUE 1000. \\n\\ \\n FINAL(array) = VALUE array( \\n ( 3 ) ( 5 ) ( 7 ) ( 9 ) ). \\n\\ \\n FINAL(itab) = VALUE itab( \\n FOR x IN array INDEX INTO idx \\n LET off = factor \* idx IN \\n ( col1 = x col2 = x \* x col3 = x + off ) ). \\n\\ \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_table\_comprh\_locals DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_locals IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n array TYPE STANDARD TABLE OF i WITH EMPTY KEY, \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\n CONSTANTS factor TYPE i VALUE 1000. \\n\\ \\n FINAL(array) = VALUE array( \\n ( 3 ) ( 5 ) ( 7 ) ( 9 ) ). \\n\\ \\n FINAL(itab) = VALUE itab( \\n FOR x IN array INDEX INTO idx \\n LET off = factor \* idx IN \\n ( col1 = x col2 = x \* x col3 = x + off ) ). \\n\\ \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_comprehensions\_abexas.html