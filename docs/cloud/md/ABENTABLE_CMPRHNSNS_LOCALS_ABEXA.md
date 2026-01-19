---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_CMPRHNSNS_LOCALS_ABEXA.htm"
abapFile: "ABENTABLE_CMPRHNSNS_LOCALS_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENTABLE", "CMPRHNSNS", "LOCALS", "ABEXA"]
---

This example demonstrates how local helper fields are used in [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html).

From a single column table `array`, a three-column table `itab` is created whose column content is calculated from the respective line content in `array`. The local helper fields in this example are the work area `x` of the [`FOR` expression](ABENFOR_IN_ITAB.html) and the helper field `off` defined in a [`LET` expression](ABAPLET.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_comprh\_locals DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_locals IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n array TYPE STANDARD TABLE OF i WITH EMPTY KEY, \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\n CONSTANTS factor TYPE i VALUE 1000. \\n\\ \\n FINAL(array) = VALUE array( \\n ( 3 ) ( 5 ) ( 7 ) ( 9 ) ). \\n\\ \\n FINAL(itab) = VALUE itab( \\n FOR x IN array INDEX INTO idx \\n LET off = factor \* idx IN \\n ( col1 = x col2 = x \* x col3 = x + off ) ). \\n\\ \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_comprh\_locals DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_comprh\_locals IMPLEMENTATION. \\n METHOD main. \\n TYPES: \\n array TYPE STANDARD TABLE OF i WITH EMPTY KEY, \\n BEGIN OF line, \\n col1 TYPE i, \\n col2 TYPE i, \\n col3 TYPE i, \\n END OF line, \\n itab TYPE STANDARD TABLE OF line WITH EMPTY KEY. \\n\\ \\n CONSTANTS factor TYPE i VALUE 1000. \\n\\ \\n FINAL(array) = VALUE array( \\n ( 3 ) ( 5 ) ( 7 ) ( 9 ) ). \\n\\ \\n FINAL(itab) = VALUE itab( \\n FOR x IN array INDEX INTO idx \\n LET off = factor \* idx IN \\n ( col1 = x col2 = x \* x col3 = x + off ) ). \\n\\ \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abentable\_comprehensions\_abexas.html